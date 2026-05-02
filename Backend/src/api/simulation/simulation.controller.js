import prisma from '../../config/db.js'
import { simulateRace, stopSimulation, activeSimulations } from './simulation.services.js'

export const startSimulation = async (req, res) => {
    try {
        const raceId = Number(req.params.raceId || req.body.raceId)
        if (!Number.isInteger(raceId) || raceId <= 0) return res.status(400).json({ error: 'Invalid race id' })

        const race = await prisma.race.findUnique({ where: { id: raceId } })
        if (!race) return res.status(404).json({ error: 'Race not found' })

        if (activeSimulations.has(raceId)) {
            return res.status(409).json({ error: 'Simulation already running' })
        }

        // Immediately mark race as ONGOING so the UI reflects the running simulation
        try {
            await prisma.race.update({ where: { id: raceId }, data: { status: 'ONGOING' } })
            console.log(`[simulation.controller] set race ${raceId} status=ONGOING`)
        } catch (err) {
            console.error('Failed to set race status to ONGOING', err)
        }

        const result = await simulateRace(raceId)
        if (result?.started) return res.status(202).json({ message: 'Simulation started' })
        return res.status(200).json({ message: 'Simulation not started', reason: result?.reason })

    } catch (err) {
        console.error('Failed to start simulation', err)
        res.status(500).json({ error: 'Failed to start simulation' })
    }
}

export const stopSimulationController = async (req, res) => {
    try {
        const raceId = Number(req.params.raceId || req.body.raceId)
        if (!Number.isInteger(raceId) || raceId <= 0) return res.status(400).json({ error: 'Invalid race id' })

        const result = await stopSimulation(raceId)
        if (result.stopped) return res.json({ message: 'Simulation stopped' })
        return res.status(404).json({ error: 'No running simulation' })
    } catch (err) {
        console.error('Failed to stop simulation', err)
        res.status(500).json({ error: 'Failed to stop simulation' })
    }
}

export const getSimulationStatus = async (req, res) => {
    try {
        const raceId = Number(req.params.raceId)
        if (!Number.isInteger(raceId) || raceId <= 0) return res.status(400).json({ error: 'Invalid race id' })

        const race = await prisma.race.findUnique({ where: { id: raceId } })
        if (!race) return res.status(404).json({ error: 'Race not found' })

        res.json({
            raceId,
            status: race.status,
            running: activeSimulations.has(raceId)
        })
    } catch (err) {
        console.error('Failed to get simulation status', err)
        res.status(500).json({ error: 'Failed to get status' })
    }
}

export default { startSimulation, stopSimulationController, getSimulationStatus }
