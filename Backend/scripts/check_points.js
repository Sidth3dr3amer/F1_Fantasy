import 'dotenv/config'
import prisma from '../src/config/db.js'

async function main() {
    const code = process.argv[2] || 'FANM5X'
    const raceId = Number(process.argv[3] || 31)

    const league = await prisma.league.findUnique({ where: { code } })
    if (!league) {
        console.log('League not found for code', code)
        process.exit(1)
    }

    console.log('League', league.id, league.name)

    const totals = await prisma.points.groupBy({ by: ['userId'], where: { leagueId: league.id }, _sum: { totalPts: true } })
    console.log('Totals per user in league:')
    for (const t of totals) {
        const u = await prisma.user.findUnique({ where: { id: t.userId } })
        console.log('-', u?.username || t.userId, t._sum?.totalPts || 0)
    }

    const racePoints = await prisma.points.findMany({ where: { raceId }, include: { user: true } })
    console.log(`Points rows for race ${raceId}: (${racePoints.length})`)
    for (const p of racePoints) {
        console.log('-', p.user.username, p.totalPts)
    }

    const raceResults = await prisma.raceResult.findMany({ where: { raceId }, include: { driver: true } })
    console.log(`Race results for race ${raceId}: (${raceResults.length})`)
    for (const r of raceResults) {
        console.log('-', r.driver.name, r.finishPosition, r.dnf, r.fastestLap)
    }

    process.exit(0)
}

main().catch(e => { console.error(e); process.exit(1) })
