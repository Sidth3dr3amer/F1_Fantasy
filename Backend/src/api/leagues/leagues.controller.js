import prisma from '../../config/db.js'

export const createLeague = async (req, res) => {
    try {
        const { name, league_type } = req.body
        const userId = req.user.id

        if (!name) {
            return res.status(400).json({ error: 'League name required' })
        }

        const generateCode = () => {
            const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
            return Array.from({ length: 6 }, () =>
                chars[Math.floor(Math.random() * chars.length)]
            ).join('')
        }

        let code, exists = true

        while (exists) {
            code = generateCode()
            const found = await prisma.league.findUnique({ where: { code } })
            if (!found) exists = false
        }

        const league = await prisma.league.create({
            data: {
                name,
                code,
                ownerId: userId,
                league_type: league_type || 'PRIVATE',
                members: {
                    create: {
                        userId
                    }
                }
            }
        })

        res.json(league)

    } catch (err) {
        res.status(500).json({ error: 'Failed to create league' })
    }
}

export const joinLeague = async (req, res) => {
    try {
        const { code } = req.body
        const userId = req.user.id

        const league = await prisma.league.findUnique({
            where: { code: code.toUpperCase() }
        })

        if (!league) {
            return res.status(404).json({ error: 'League not found' })
        }

        // prevent joining PRIVATE without code already handled by code itself

        const existing = await prisma.leagueMember.findUnique({
            where: {
                leagueId_userId: {
                    leagueId: league.id,
                    userId
                }
            }
        })

        if (existing) {
            return res.status(409).json({ error: 'Already a member' })
        }

        await prisma.leagueMember.create({
            data: {
                leagueId: league.id,
                userId
            }
        })

        res.json({
            message: 'Joined league',
            league: {
                id: league.id,
                name: league.name
            }
        })

    } catch (err) {
        res.status(500).json({ error: 'Failed to join league' })
    }
}

export const getUserLeagues = async (req, res) => {
    try {
        const userId = req.user.id

        const leagues = await prisma.league.findMany({
            where: {
                members: {
                    some: { userId }
                }
            },
            include: {
                _count: {
                    select: { members: true }
                }
            }
        })

        res.json(leagues.map(l => ({
            id: l.id,
            name: l.name,
            code: l.code,
            type: l.league_type,
            member_count: l._count.members
        })))

    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch leagues' })
    }
}

export const getLeagueById = async (req, res) => {
    try {
        const id = Number(req.params.id)

        const league = await prisma.league.findUnique({
            where: { id },
            include: {
                members: {
                    include: {
                        user: {
                            select: {
                                id: true,
                                username: true
                            }
                        }
                    }
                }
            }
        })

        if (!league) {
            return res.status(404).json({ error: 'League not found' })
        }

        res.json({
            id: league.id,
            name: league.name,
            code: league.code,
            ownerId: league.ownerId,
            type: league.league_type,
            members: league.members.map(m => ({
                userId: m.user.id,
                username: m.user.username
            }))
        })

    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch league' })
    }
}

export const deleteLeague = async (req, res) => {
    try {
        const id = Number(req.params.id)
        const userId = req.user.id

        const league = await prisma.league.findUnique({
            where: { id }
        })

        if (!league) {
            return res.status(404).json({ error: 'League not found' })
        }

        if (league.ownerId !== userId) {
            return res.status(403).json({ error: 'Not authorized' })
        }

        await prisma.league.delete({
            where: { id }
        })

        res.json({ message: 'League deleted' })

    } catch (err) {
        res.status(500).json({ error: 'Failed to delete league' })
    }
}

export const getAllLeaguesPublic = async (req, res) => {
    try {
        const leagues = await prisma.league.findMany({
            where: {
                league_type: 'PUBLIC'
            },
            select: {
                id: true,
                name: true,
                _count: {
                    select: { members: true }
                }
            }
        })

        res.json(leagues.map(l => ({
            id: l.id,
            name: l.name,
            member_count: l._count.members
        })))

    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch public leagues' })
    }
}
