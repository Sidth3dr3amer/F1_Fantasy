import prisma from '../../config/db.js'

export const listUsers = async (req, res) => {
    try {
        // Avoid selecting `role` directly because the Prisma client may not have it
        // if the DB/schema migration wasn't applied yet.
        const users = await prisma.user.findMany({
            select: { id: true, username: true, email: true, created_at: true },
            orderBy: { created_at: 'desc' }
        })

        res.json(users)
    } catch (err) {
        console.error(err)
        if (err?.message?.includes('Unknown field `role`')) {
            return res.status(500).json({ error: "Database schema missing 'role' on User. Run Prisma migration (e.g. `npx prisma migrate dev --name add-role` or `npx prisma db push`) and restart the server." })
        }
        res.status(500).json({ error: 'Failed to fetch users' })
    }
}

export const promoteUser = async (req, res) => {
    try {
        const id = Number(req.params.userId)
        if (isNaN(id)) return res.status(400).json({ error: 'Invalid user id' })

        const user = await prisma.user.findUnique({ where: { id } })
        if (!user) return res.status(404).json({ error: 'User not found' })

        const updated = await prisma.user.update({ where: { id }, data: { role: 'ADMIN' } })
        res.json({ message: 'User promoted', user: { id: updated.id, username: updated.username, role: updated.role } })
    } catch (err) {
        console.error(err)
        if (err?.message?.includes('Unknown field `role`')) {
            return res.status(500).json({ error: "Database schema missing 'role' on User. Run Prisma migration (e.g. `npx prisma migrate dev --name add-role` or `npx prisma db push`) and restart the server." })
        }
        res.status(500).json({ error: 'Failed to promote user' })
    }
}

export const demoteUser = async (req, res) => {
    try {
        const id = Number(req.params.userId)
        if (isNaN(id)) return res.status(400).json({ error: 'Invalid user id' })

        const user = await prisma.user.findUnique({ where: { id } })
        if (!user) return res.status(404).json({ error: 'User not found' })

        const updated = await prisma.user.update({ where: { id }, data: { role: 'USER' } })
        res.json({ message: 'User demoted', user: { id: updated.id, username: updated.username, role: updated.role } })
    } catch (err) {
        console.error(err)
        if (err?.message?.includes('Unknown field `role`')) {
            return res.status(500).json({ error: "Database schema missing 'role' on User. Run Prisma migration (e.g. `npx prisma migrate dev --name add-role` or `npx prisma db push`) and restart the server." })
        }
        res.status(500).json({ error: 'Failed to demote user' })
    }
}

// Bootstrapping endpoint to set first admin using a secret token
export const bootAdmin = async (req, res) => {
    try {
        const bootToken = req.body?.token || req.headers['x-admin-boot'] || req.query.token
        const expected = process.env.ADMIN_BOOT_TOKEN
        if (!expected) return res.status(403).json({ error: 'Boot not enabled' })
        if (!bootToken || bootToken !== expected) return res.status(401).json({ error: 'Invalid boot token' })

        const id = Number(req.params.userId)
        if (isNaN(id)) return res.status(400).json({ error: 'Invalid user id' })

        const existingAdmin = await prisma.user.findFirst({ where: { role: 'ADMIN' } })
        if (existingAdmin) return res.status(409).json({ error: 'Admin already exists' })

        const updated = await prisma.user.update({ where: { id }, data: { role: 'ADMIN' } })
        res.json({ message: 'Bootstrapped admin', user: { id: updated.id, username: updated.username, role: updated.role } })
    } catch (err) {
        console.error(err)
        if (err?.message?.includes('Unknown field `role`')) {
            return res.status(500).json({ error: "Database schema missing 'role' on User. Run Prisma migration (e.g. `npx prisma migrate dev --name add-role` or `npx prisma db push`) and restart the server." })
        }
        res.status(500).json({ error: 'Failed to bootstrap admin' })
    }
}
