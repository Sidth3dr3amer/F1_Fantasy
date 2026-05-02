import prisma from '../../config/db.js'
import { getDriverPoints, calculateRacePoints } from './results.service.js'


export const submitResults = async (req, res) => {
    try {
        const { raceId, results } = req.body

        if (!raceId || !results) {
            return res.status(400).json({ error: 'Missing fields' })
        }

        // 🧹 Clear old results if any (safe re-run)
        await prisma.raceResult.deleteMany({
            where: { raceId }
        })

        // 📝 Insert results
        await prisma.raceResult.createMany({
            data: results.map(r => ({
                raceId,
                driverId: r.driverId,
                finishPosition: r.finish_pos,
                fastestLap: r.fastest_lap || false,
                dnf: r.dnf || false
            }))
        })

        // 🔒 Lock all teams
        await prisma.team.updateMany({
            where: { raceId },
            data: { locked: true }
        })

        // 🧠 Calculate points
        await calculateRacePoints(raceId)

        // Mark race as completed
        try {
            await prisma.race.update({ where: { id: raceId }, data: { status: 'COMPLETED' } })
        } catch (err) {
            console.error('Failed to set race status to COMPLETED', err)
        }

        res.json({ message: 'Results saved and scoring triggered' })

    } catch (err) {
        res.status(500).json({ error: 'Failed to submit results' })
    }
}


export const updateResults = async (req, res) => {
    try {
        const raceId = Number(req.params.raceId)
        const { results } = req.body

        await prisma.raceResult.deleteMany({
            where: { raceId }
        })

        await prisma.raceResult.createMany({
            data: results.map(r => ({
                raceId,
                driverId: r.driverId,
                finishPosition: r.finish_pos,
                fastestLap: r.fastest_lap || false,
                dnf: r.dnf || false
            }))
        })

        // 🔁 Recalculate
        await calculateRacePoints(raceId)

        // Lock teams and mark race completed
        try {
            await prisma.team.updateMany({ where: { raceId }, data: { locked: true } })
            await prisma.race.update({ where: { id: raceId }, data: { status: 'COMPLETED' } })
        } catch (err) {
            console.error('Failed to lock teams or set race status', err)
        }

        res.json({ message: 'Results updated and re-scored' })

    } catch (err) {
        res.status(500).json({ error: 'Failed to update results' })
    }
}


export const getRaceResults = async (req, res) => {
    try {
        const raceId = Number(req.params.raceId)

        const results = await prisma.raceResult.findMany({
            where: { raceId },
            include: {
                driver: true
            },
            orderBy: {
                finishPosition: 'asc'
            }
        })

        const formatted = results.map(r => ({
            driver_id: r.driverId,
            driver_name: r.driver.name,
            finish_pos: r.finishPosition,
            fastest_lap: r.fastestLap,
            dnf: r.dnf,
            points: getDriverPoints(r)
        }))

        res.json(formatted)

    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch results' })
    }
}

export const calculateResults = async (req, res) => {
    try {
        const raceId = Number(req.params.raceId)

        if (!Number.isInteger(raceId) || raceId <= 0) {
            return res.status(400).json({ error: 'Invalid race ID' })
        }

        await calculateRacePoints(raceId)

        // Lock teams and mark race completed
        try {
            await prisma.team.updateMany({ where: { raceId }, data: { locked: true } })
            await prisma.race.update({ where: { id: raceId }, data: { status: 'COMPLETED' } })
        } catch (err) {
            console.error('Failed to lock teams or set race status', err)
        }

        res.json({
            message: 'Race points calculated successfully',
            raceId
        })

    } catch (err) {
        console.error(err)
        res.status(500).json({ error: 'Failed to calculate race points' })
    }
}



// calculateRacePoints is implemented in the results service
