import prisma from '../../config/db.js'

const POSITION_POINTS = {
    1: 25, 2: 18, 3: 15, 4: 12, 5: 10,
    6: 8, 7: 6, 8: 4, 9: 2, 10: 1
}

const FASTEST_LAP_BONUS = 5

export const getDriverPoints = (result) => {
    if (!result || result.dnf) return 0

    const positionPoints = POSITION_POINTS[result.finishPosition] || 0
    const fastestLapPoints = result.fastestLap ? FASTEST_LAP_BONUS : 0

    return positionPoints + fastestLapPoints
}

// calculateRacePoints is idempotent: it clears previous Points and recreates them.
export const calculateRacePoints = async (raceId, client = prisma) => {
    console.log(`[scoring] calculateRacePoints called for race ${raceId}`)

    // Get results
    const results = await client.raceResult.findMany({
        where: { raceId },
        include: {
            driver: {
                select: { constructorId: true }
            }
        }
    })

    console.log(`[scoring] fetched ${results.length} raceResult rows for race ${raceId}`)

    const resultMap = {}
    const constructorPoints = {}

    results.forEach(r => {
        resultMap[r.driverId] = r

        if (r.driver?.constructorId) {
            constructorPoints[r.driver.constructorId] =
                (constructorPoints[r.driver.constructorId] || 0) + getDriverPoints(r)
        }
    })

    // Get all teams for this race
    const teams = await client.team.findMany({
        where: { raceId },
        include: { predictions: true }
    })

    console.log(`[scoring] found ${teams.length} teams for race ${raceId}`)

    // Clear previous points for this race
    await client.points.deleteMany({ where: { raceId } })

    const pointsData = []

    for (const team of teams) {
        let total = 0
        const breakdown = {
            drivers: {},
            constructor: {
                constructorId: team.constructorId,
                points: team.constructorId ? constructorPoints[team.constructorId] || 0 : 0
            }
        }

        for (const pred of team.predictions) {
            const result = resultMap[pred.driverId]
            if (!result) continue

            const pts = getDriverPoints(result)
            breakdown.drivers[pred.driverId] = pts
            total += pts
        }

        total += breakdown.constructor.points

        pointsData.push({
            userId: team.userId,
            raceId: team.raceId,
            leagueId: team.leagueId,
            totalPts: total,
            breakdown
        })
    }

    if (pointsData.length > 0) {
        try {
            await client.points.createMany({ data: pointsData })
            console.log(`[scoring] created ${pointsData.length} points rows for race ${raceId}`)
        } catch (err) {
            console.error('[scoring] failed to create points:', err)
            throw err
        }
    } else {
        console.log(`[scoring] no points to create for race ${raceId}`)
    }
}

export default { getDriverPoints, calculateRacePoints }
