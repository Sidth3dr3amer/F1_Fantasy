import prisma from '../../config/db.js'


export const getLeagueLeaderboard = async (req, res) => {
    try {
        const leagueId = Number(req.params.leagueId)
        if (!Number.isInteger(leagueId) || leagueId <= 0) {
            return res.status(400).json({ error: 'Invalid league ID' })
        }

        // aggregate total points per user across all races in the league
        const data = await prisma.points.groupBy({
            by: ['userId'],
            where: { leagueId },
            _sum: { totalPts: true }
        })

        if (!data || data.length === 0) {
            return res.json([])
        }

        // fetch usernames for the users present
        const users = await prisma.user.findMany({
            where: { id: { in: data.map(d => d.userId) } },
            select: { id: true, username: true }
        })

        const userMap = {}
        users.forEach(u => { userMap[u.id] = u.username })

        const leaderboard = data
            .map(d => ({
                userId: d.userId,
                username: userMap[d.userId] || null,
                season_total: (d._sum && d._sum.totalPts) || 0
            }))
            .sort((a, b) => b.season_total - a.season_total)

        res.json(leaderboard)

    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch leaderboard' })
    }
}



export const getRaceLeaderboard = async (req, res) => {
    try {
        const leagueId = Number(req.params.leagueId)
        const raceId = Number(req.params.raceId)

        const data = await prisma.points.findMany({
            where: {
                leagueId,
                raceId
            },
            include: {
                user: {
                    select: {
                        username: true
                    }
                }
            }
        })

        const sorted = data.sort((a, b) => b.totalPts - a.totalPts)

        let rank = 1
        const leaderboard = sorted.map((entry, index) => {
            if (index > 0 && entry.totalPts < sorted[index - 1].totalPts) {
                rank = index + 1
            }

            return {
                rank,
                username: entry.user.username,
                total_pts: entry.totalPts,
                breakdown: entry.breakdown
            }
        })

        res.json(leaderboard)

    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch race leaderboard' })
    }
}


export const getGlobalLeaderboard = async (req, res) => {
    try {
        const now = new Date();

        // 1) Global total points per user (include users with 0)
        const totals = await prisma.points.groupBy({
            by: ['userId'],
            _sum: { totalPts: true }
        });

        const users = await prisma.user.findMany({ select: { id: true, username: true } });

        const totalsMap = {};
        totals.forEach(t => { totalsMap[t.userId] = (t._sum && t._sum.totalPts) || 0 });

        const allUsers = users.map(u => ({
            userId: u.id,
            username: u.username,
            totalPts: totalsMap[u.id] || 0
        }));

        const sortedByTotal = allUsers.slice().sort((a, b) => b.totalPts - a.totalPts);

        const top5 = sortedByTotal.slice(0, 5);

        const maxOverall = top5[0] || null;

        // 2) Determine current race by time (ongoing or most recently completed)
        let currentRace = await prisma.race.findFirst({
            where: {
                raceStart: { lte: now },
                OR: [
                    { raceEnd: null },
                    { raceEnd: { gte: now } }
                ]
            },
            orderBy: { raceStart: 'desc' }
        });

        if (!currentRace) {
            currentRace = await prisma.race.findFirst({
                where: { raceEnd: { lte: now } },
                orderBy: { raceEnd: 'desc' }
            });
        }

        let currentRaceInfo = null;
        if (currentRace) {
            const racePoints = await prisma.points.findMany({ where: { raceId: currentRace.id } });

            // compute per-user max points for the race (users may have multiple league entries)
            const perUserMax = {};
            racePoints.forEach(p => {
                const uid = p.userId;
                perUserMax[uid] = Math.max(perUserMax[uid] || 0, p.totalPts || 0);
            });

            const entries = Object.keys(perUserMax).map(k => ({ userId: Number(k), points: perUserMax[k] }));
            entries.sort((a, b) => b.points - a.points);

            const maxPoints = entries.length > 0 ? entries[0].points : 0;

            // fetch usernames for top performers in this race (could be ties)
            const leaderUserIds = entries.filter(e => e.points === maxPoints).map(e => e.userId);
            const leaderUsers = await prisma.user.findMany({ where: { id: { in: leaderUserIds } }, select: { id: true, username: true } });

            currentRaceInfo = {
                raceId: currentRace.id,
                name: currentRace.name,
                maxPoints,
                leaders: leaderUsers.map(u => ({ userId: u.id, username: u.username, points: perUserMax[u.id] || 0 }))
            };
        }

        // 4) global rank for requesting user (if authenticated)
        const reqUserId = req.user?.id || null;
        let userRank = null;
        if (reqUserId) {
            const idx = sortedByTotal.findIndex(u => u.userId === Number(reqUserId));
            if (idx >= 0) {
                userRank = { userId: reqUserId, username: sortedByTotal[idx].username, rank: idx + 1, totalPts: sortedByTotal[idx].totalPts };
            } else {
                // user exists but has 0 points (not in totals)
                const found = allUsers.find(u => u.userId === Number(reqUserId));
                if (found) userRank = { userId: found.userId, username: found.username, rank: allUsers.length, totalPts: found.totalPts };
            }
        }

        res.json({
            max_overall: maxOverall,
            current_race: currentRaceInfo,
            top5,
            total_players: allUsers.length,
            user: userRank
        });

    } catch (err) {
        console.error('Failed to fetch global leaderboard', err);
        res.status(500).json({ error: 'Failed to fetch global leaderboard' })
    }
}
