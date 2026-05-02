import prisma from "../config/db.js";
import { calculateRacePoints } from "../api/results/results.service.js";

// Track active simulations so controllers can stop/status them
export const activeSimulations = new Map(); // raceId -> { interval }

/**
 * Basic skill map (tune as needed)
 */
const driverSkill = {
    1: 0.95, // Verstappen
    2: 0.9,
    3: 0.88,
    4: 0.87,
    5: 0.85,
    6: 0.84,
    7: 0.8,
    8: 0.78,
    9: 0.75,
    10: 0.74,
    11: 0.7,
    12: 0.68,
    13: 0.65,
    14: 0.64,
    15: 0.6,
    16: 0.59,
    17: 0.55,
    18: 0.54,
    19: 0.5,
    20: 0.48
};

/**
 * Adjacent swap logic (±1 movement only)
 */
function mutatePositions(drivers) {
    const newDrivers = [...drivers];

    for (let i = 0; i < newDrivers.length - 1; i++) {
        const d1 = newDrivers[i];
        const d2 = newDrivers[i + 1];

        const skill1 = driverSkill[d1.id] || 0.5;
        const skill2 = driverSkill[d2.id] || 0.5;

        // Higher skill behind → higher chance to overtake
        const overtakeChance = 0.15 + (skill2 - skill1) * 0.4;

        if (Math.random() < overtakeChance) {
            [newDrivers[i], newDrivers[i + 1]] = [newDrivers[i + 1], newDrivers[i]];
            i++; // skip next
        }
    }

    return newDrivers;
}

/**
 * Main simulation function
 */
export const simulateRace = async (raceId) => {
    console.log("🏁 Starting simulation for race:", raceId);

    if (activeSimulations.has(Number(raceId))) {
        console.log(`Simulation already running for race ${raceId}`);
        return { started: false, reason: 'already_running' };
    }

    // Fetch drivers
    const drivers = await prisma.driver.findMany({
        where: { active: true }
    });

    if (!drivers.length) {
        console.log("❌ No drivers found");
        return;
    }

    // Initial random grid
    let positions = [...drivers].sort(() => Math.random() - 0.5);

    // Track DNFs
    const dnfSet = new Set();

    // Mark race as ONGOING
    await prisma.race.update({
        where: { id: Number(raceId) },
        data: { status: "ONGOING" }
    });

    console.log(`[simulation] race ${raceId} status set to ONGOING`);

    let tick = 0;
    const TICK_INTERVAL_MS = 3000;
    const MAX_DURATION_MS = 60_000; // 1 minute
    const MAX_TICKS = Math.ceil(MAX_DURATION_MS / TICK_INTERVAL_MS);
    const startTime = Date.now();

    const interval = setInterval(async () => {
        try {
            tick++;

            const elapsed = Date.now() - startTime;
            console.log(`⏱ Tick ${tick} (elapsed ${Math.round(elapsed / 1000)}s)`);

            // Mutate positions
            positions = mutatePositions(positions);

            // Random DNF chance
            for (const driver of positions) {
                if (!dnfSet.has(driver.id) && Math.random() < 0.01) {
                    console.log(`💥 DNF: ${driver.name}`);
                    dnfSet.add(driver.id);
                }
            }

            // Assign fastest lap randomly (top 10 only)
            const fastestLapDriver =
                positions[Math.floor(Math.random() * Math.min(10, positions.length))];

            // Prepare DB writes
            const updates = positions.map((driver, index) => {
                const isDNF = dnfSet.has(driver.id);

                return prisma.raceResult.upsert({
                    where: {
                        raceId_driverId: {
                            raceId: Number(raceId),
                            driverId: driver.id
                        }
                    },
                    update: {
                        finishPosition: isDNF ? null : index + 1,
                        dnf: isDNF,
                        fastestLap: driver.id === fastestLapDriver.id
                    },
                    create: {
                        raceId: Number(raceId),
                        driverId: driver.id,
                        finishPosition: isDNF ? null : index + 1,
                        dnf: isDNF,
                        fastestLap: driver.id === fastestLapDriver.id
                    }
                });
            });

            // Batch DB update
            await Promise.all(updates);

            // Recalculate points live (pass same client instance for consistency)
            try {
                await calculateRacePoints(Number(raceId), prisma);
            } catch (err) {
                console.error('[simulation] calculateRacePoints error:', err);
            }

            // (Optional) emit socket events if an emitter is available
            // This project currently doesn't expose a socket.io server instance.

            // End race when elapsed time exceeds limit or tick cap reached
            if (elapsed >= MAX_DURATION_MS || tick >= MAX_TICKS) {
                clearInterval(interval);

                await prisma.race.update({
                    where: { id: Number(raceId) },
                    data: { status: "COMPLETED" }
                });

                console.log(`🏁 Race ${raceId} completed after ${Math.round((Date.now() - startTime) / 1000)}s`);
                // remove from active map
                activeSimulations.delete(Number(raceId));
            }
        } catch (err) {
            console.error("❌ Simulation error:", err);
            clearInterval(interval);
            activeSimulations.delete(Number(raceId));
        }
    }, 3000); // every 3 seconds

    // store interval handle so it can be stopped
    activeSimulations.set(Number(raceId), { interval });

    return { started: true };
};

export const stopSimulation = async (raceId) => {
    const entry = activeSimulations.get(Number(raceId));
    if (!entry) return { stopped: false, reason: 'not_running' };

    try {
        clearInterval(entry.interval);
        activeSimulations.delete(Number(raceId));

        // Mark the race as COMPLETED when the simulation is stopped/ended
        try {
            await prisma.race.update({ where: { id: Number(raceId) }, data: { status: 'COMPLETED' } });
            console.log(`[simulation] race ${raceId} marked COMPLETED by stopSimulation`);
        } catch (err) {
            console.error('[simulation] failed to mark race COMPLETED on stop:', err);
        }

        return { stopped: true };
    } catch (err) {
        console.error('Failed to stop simulation', err);
        return { stopped: false, reason: 'error' };
    }
};