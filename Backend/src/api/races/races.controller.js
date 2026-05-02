import prisma from '../../config/db.js'
import { calculateRacePoints } from '../results/results.service.js'

const computeStatus = (race) => {
    // If a race has been explicitly marked COMPLETED in the DB, respect that.
    if (race.status === 'COMPLETED') return 'COMPLETED'

    const now = new Date()
    if (now < race.raceStart) return 'SCHEDULED'
    if (race.raceEnd && now >= race.raceEnd) return 'COMPLETED'
    return 'ONGOING'
}

export const getAllRaces = async (req, res) => {
    try {
        const { season } = req.query

        const races = await prisma.race.findMany({
            where: season ? { season: Number(season) } : {},
            orderBy: { raceDate: 'asc' }
        })

        const data = races.map(r => ({
            ...r,
            status: computeStatus(r),
            team_locked: r.status === 'COMPLETED' || new Date() >= r.raceStart
        }))

        res.json(data)
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch races' })
    }
}

export const getRaceById = async (req, res) => {
    try {
        const id = Number(req.params.id)

        const race = await prisma.race.findUnique({
            where: { id }
        })

        if (!race) {
            return res.status(404).json({ error: 'Race not found' })
        }

        res.json({
            ...race,
            status: computeStatus(race),
            team_locked: race.status === 'COMPLETED' || new Date() >= race.raceStart
        })

    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch race' })
    }
}

export const createRace = async (req, res) => {
    try {
        const {
            name,
            circuit,
            raceDate,
            season,
            raceStart,
            raceEnd
        } = req.body

        if (!name || !raceDate || !season || !raceStart) {
            return res.status(400).json({ error: 'Missing required fields' })
        }

        const race = await prisma.race.create({
            data: {
                name,
                circuit,
                raceDate: new Date(raceDate),
                season,
                raceStart: new Date(raceStart),
                raceEnd: raceEnd ? new Date(raceEnd) : null
            }
        })

        res.status(201).json(race)

    } catch (err) {
        res.status(500).json({ error: 'Failed to create race' })
    }
}

export const updateRace = async (req, res) => {
    try {
        const id = Number(req.params.id)

        const existing = await prisma.race.findUnique({ where: { id } })
        if (!existing) {
            return res.status(404).json({ error: 'Race not found' })
        }

        const updated = await prisma.race.update({
            where: { id },
            data: {
                ...req.body,
                raceDate: req.body.raceDate ? new Date(req.body.raceDate) : undefined,
                raceStart: req.body.raceStart ? new Date(req.body.raceStart) : undefined,
                raceEnd: req.body.raceEnd ? new Date(req.body.raceEnd) : undefined
            }
        })

        // If status transitioned to COMPLETED, trigger scoring (safe / idempotent)
        try {
            if (existing.status !== 'COMPLETED' && updated.status === 'COMPLETED') {
                const existingPoints = await prisma.points.findFirst({ where: { raceId: id } })
                if (!existingPoints) {
                    await calculateRacePoints(id)
                } else {
                    console.log(`Skipping scoring for race ${id}: points already exist`)
                }
            }
        } catch (err) {
            console.error('Failed to auto-run scoring on race completion', err)
        }

        res.json(updated)

    } catch (err) {
        res.status(500).json({ error: 'Failed to update race' })
    }
}

export const lockTeamsForRace = async (req, res) => {
    try {
        const raceId = Number(req.params.id)

        await prisma.team.updateMany({
            where: {
                raceId,
                locked: false
            },
            data: {
                locked: true
            }
        })

        res.json({ message: 'All teams locked for race' })

    } catch (err) {
        res.status(500).json({ error: 'Failed to lock teams' })
    }
}
