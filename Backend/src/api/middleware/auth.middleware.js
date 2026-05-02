import jwt from 'jsonwebtoken'
import prisma from '../../config/db.js'

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key'

export const protect = async (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(' ')[1]

        if (!token) {
            return res.status(401).json({ error: 'No token provided' })
        }

        const decoded = jwt.verify(token, JWT_SECRET)

        // Fetch the user from DB. Do not explicitly select `role` here
        // because the Prisma client may be out-of-sync with schema (role not present).
        const user = await prisma.user.findUnique({ where: { id: Number(decoded.id) } })

        if (!user) {
            return res.status(401).json({ error: 'User not found' })
        }

        req.user = user
        next()
    } catch (err) {
        console.error('Auth error:', err)
        res.status(401).json({ error: 'Invalid or expired token' })
    }
}

export default protect
