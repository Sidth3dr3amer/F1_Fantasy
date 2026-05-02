import cron from 'node-cron'
import prisma from '../../config/db.js'

const normalizeId = (value, fieldName) => {
    const id = Number(value)

    if (!Number.isInteger(id) || id <= 0) {
        throw new Error(`${fieldName} must be a valid ID`)
    }

    return id
}

const normalizePredictedPosition = (value) => {
    if (value === undefined || value === null || value === '') return null

    const position = Number(value)

    if (!Number.isInteger(position) || position < 1 || position > 20) {
        throw new Error('Predicted position must be between 1 and 20')
    }

    return position
}

const normalizeTeamPredictions = ({ driverIds, predictions }) => {
    const source = Array.isArray(predictions) && predictions.length > 0
        ? predictions
        : Array.isArray(driverIds)
            ? driverIds.map((driverId, index) => ({
                driverId,
                predictedPosition: index + 1
            }))
            : null

    if (!source) {
        throw new Error('Driver predictions are required')
    }

    const normalized = source.map((prediction, index) => {
        const isObject = typeof prediction === 'object' && prediction !== null
        const driverId = isObject ? prediction.driverId ?? prediction.id : prediction
        const rawPosition = isObject
            ? prediction.predictedPosition ?? prediction.position ?? index + 1
            : index + 1

        return {
            driverId: normalizeId(driverId, 'Driver ID'),
            predictedPosition: normalizePredictedPosition(rawPosition),
            predictedDNF: Boolean(isObject ? prediction.predictedDNF : false)
        }
    })

    if (normalized.length !== 5) {
        throw new Error('Exactly 5 drivers required')
    }

    if (new Set(normalized.map(prediction => prediction.driverId)).size !== 5) {
        throw new Error('Duplicate drivers not allowed')
    }

    const positions = normalized
        .map(prediction => prediction.predictedPosition)
        .filter(position => position !== null)

    if (new Set(positions).size !== positions.length) {
        throw new Error('Duplicate predicted positions not allowed')
    }

    return normalized
}

const isClientError = (err) =>
    err.message?.includes('required') ||
    err.message?.includes('valid ID') ||
    err.message?.includes('Duplicate') ||
    err.message?.includes('between')

export const buildTeam = async (req, res) => {
    try {
        const { raceId, leagueId, driverIds, constructorId, predictions } = req.body
        const userId = req.user.id
        const parsedRaceId = normalizeId(raceId, 'Race ID')
        const parsedLeagueId = normalizeId(leagueId, 'League ID')
        const parsedConstructorId = normalizeId(constructorId, 'Constructor ID')
        const teamPredictions = normalizeTeamPredictions({ driverIds, predictions })

        const membership = await prisma.leagueMember.findUnique({
            where: {
                leagueId_userId: { leagueId: parsedLeagueId, userId }
            }
        })

        if (!membership) {
            return res.status(403).json({ error: 'Not in league' })
        }

        const race = await prisma.race.findUnique({ where: { id: parsedRaceId } })

        if (!race) {
            return res.status(404).json({ error: 'Race not found' })
        }

        if (new Date() >= race.raceStart) {
            return res.status(400).json({ error: 'Team locked (race started)' })
        }

        const existing = await prisma.team.findUnique({
            where: {
                userId_raceId_leagueId: {
                    userId,
                    raceId: parsedRaceId,
                    leagueId: parsedLeagueId
                }
            }
        })

        let team

        if (existing) {
            if (existing.locked) {
                return res.status(400).json({ error: 'Team already locked' })
            }

            team = await prisma.team.update({
                where: { id: existing.id },
                data: {
                    constructorId: parsedConstructorId,
                    predictions: {
                        deleteMany: {},
                        create: teamPredictions
                    }
                },
                include: {
                    predictions: {
                        include: { driver: true },
                        orderBy: { predictedPosition: 'asc' }
                    },
                    constructor: true
                }
            })

        } else {
            team = await prisma.team.create({
                data: {
                    userId,
                    raceId: parsedRaceId,
                    leagueId: parsedLeagueId,
                    constructorId: parsedConstructorId,
                    predictions: {
                        create: teamPredictions
                    }
                },
                include: {
                    predictions: {
                        include: { driver: true },
                        orderBy: { predictedPosition: 'asc' }
                    },
                    constructor: true
                }
            })
        }

        res.json({ message: 'Team saved', team })

    } catch (err) {
        if (isClientError(err)) {
            return res.status(400).json({ error: err.message })
        }

        console.error(err)
        res.status(500).json({ error: 'Failed to build team' })
    }
}

export const updatePredictionPosition = async (req, res) => {
    try {
        const userId = req.user.id
        const raceId = normalizeId(req.params.raceId, 'Race ID')
        const leagueId = normalizeId(req.body.leagueId, 'League ID')
        const driverId = normalizeId(req.body.driverId, 'Driver ID')
        const predictedPosition = normalizePredictedPosition(req.body.predictedPosition ?? req.body.position)

        if (predictedPosition === null) {
            return res.status(400).json({ error: 'Predicted position is required' })
        }

        const team = await prisma.team.findUnique({
            where: {
                userId_raceId_leagueId: {
                    userId,
                    raceId,
                    leagueId
                }
            },
            include: {
                predictions: true,
                race: true
            }
        })

        if (!team) {
            return res.status(404).json({ error: 'Team not found' })
        }

        if (team.locked || new Date() >= team.race.raceStart) {
            return res.status(400).json({ error: 'Team already locked' })
        }

        const prediction = team.predictions.find(p => p.driverId === driverId)

        if (!prediction) {
            return res.status(404).json({ error: 'Driver is not in this team' })
        }

        const duplicatePosition = team.predictions.find(p =>
            p.driverId !== driverId && p.predictedPosition === predictedPosition
        )

        if (duplicatePosition) {
            return res.status(409).json({ error: 'Predicted position already assigned' })
        }

        const updated = await prisma.prediction.update({
            where: {
                teamId_driverId: {
                    teamId: team.id,
                    driverId
                }
            },
            data: {
                predictedPosition
            },
            include: {
                driver: true
            }
        })

        res.json({
            message: 'Prediction updated',
            prediction: {
                driverId: updated.driverId,
                driverName: updated.driver.name,
                predictedPosition: updated.predictedPosition
            }
        })

    } catch (err) {
        if (isClientError(err)) {
            return res.status(400).json({ error: err.message })
        }

        console.error(err)
        res.status(500).json({ error: 'Failed to update prediction' })
    }
}

export const lockMyTeam = async (req, res) => {
    try {
        const raceId = normalizeId(req.body.raceId, 'Race ID')
        const leagueId = normalizeId(req.body.leagueId, 'League ID')
        const userId = req.user.id

        const team = await prisma.team.findUnique({
            where: {
                userId_raceId_leagueId: {
                    userId,
                    raceId,
                    leagueId
                }
            }
        })

        if (!team) {
            return res.status(404).json({ error: 'Team not found' })
        }

        if (team.locked) {
            return res.status(400).json({ error: 'Already locked' })
        }

        const race = await prisma.race.findUnique({ where: { id: raceId } })

        if (new Date() >= race.raceStart) {
            return res.status(400).json({ error: 'Race started' })
        }

        await prisma.team.update({
            where: { id: team.id },
            data: { locked: true }
        })

        res.json({ message: 'Team locked' })

    } catch (err) {
        if (isClientError(err)) {
            return res.status(400).json({ error: err.message })
        }

        console.error(err)
        res.status(500).json({ error: 'Failed to lock team' })
    }
}

export const getMyTeam = async (req, res) => {
    try {
        const raceId = normalizeId(req.params.raceId, 'Race ID')
        const leagueId = normalizeId(req.query.leagueId, 'League ID')
        const userId = req.user.id

        const team = await prisma.team.findUnique({
            where: {
                userId_raceId_leagueId: {
                    userId,
                    raceId,
                    leagueId
                }
            },
            include: {
                predictions: {
                    include: { driver: true },
                    orderBy: { predictedPosition: 'asc' }
                },
                constructor: true
            }
        })

        if (!team) {
            return res.status(404).json({ error: 'No team found' })
        }

        res.json({
            id: team.id,
            locked: team.locked,
            drivers: team.predictions.map(p => p.driver.name),
            predictions: team.predictions.map(p => ({
                driverId: p.driverId,
                driverName: p.driver.name,
                predictedPosition: p.predictedPosition,
                predictedDNF: p.predictedDNF
            })),
            constructor: team.constructor?.name
        })

    } catch (err) {
        if (isClientError(err)) {
            return res.status(400).json({ error: err.message })
        }

        console.error(err)
        res.status(500).json({ error: 'Failed to fetch team' })
    }
}

export const unlockTeamAdmin = async (req, res) => {
    try {
        const teamId = normalizeId(req.body.teamId, 'Team ID')

        await prisma.team.update({
            where: { id: teamId },
            data: { locked: false }
        })

        res.json({ message: 'Team unlocked (admin)' })

    } catch (err) {
        if (isClientError(err)) {
            return res.status(400).json({ error: err.message })
        }

        console.error(err)
        res.status(500).json({ error: 'Failed to unlock team' })
    }
}

export const autoLockTeamsForRace = async (req, res) => {
    try {
        const raceId = normalizeId(req.params.raceId, 'Race ID')

        await prisma.team.updateMany({
            where: {
                raceId,
                locked: false
            },
            data: { locked: true }
        })

        res.json({ message: 'All teams locked' })

    } catch (err) {
        if (isClientError(err)) {
            return res.status(400).json({ error: err.message })
        }

        console.error(err)
        res.status(500).json({ error: 'Failed to auto-lock teams' })
    }
}

cron.schedule('* * * * *', async () => {
    await prisma.team.updateMany({
        where: {
            locked: false,
            race: {
                raceStart: {
                    lte: new Date()
                }
            }
        },
        data: { locked: true }
    })
})
