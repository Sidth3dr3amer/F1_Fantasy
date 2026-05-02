
import bcrypt from 'bcrypt'
import prisma from '../../config/db.js'

// GET all users (admin)
export const getAllUsers = async (req, res) => {
    try {
        const users = await prisma.user.findMany({
            select: {
                id: true,
                username: true,
                email: true,
                phone_no: true,
                created_at: true
            },
            orderBy: { created_at: 'desc' }
        })

        res.json(users)
    } catch (err) {
        console.error(err)
        res.status(500).json({ error: 'Failed to fetch users' })
    }
}

// GET user profile by ID
export const getUserById = async (req, res) => {
    try {
        const id = Number(req.params.id)

        if (isNaN(id)) {
            return res.status(400).json({ error: 'Invalid user ID' })
        }

        const user = await prisma.user.findUnique({
            where: { id },
            select: {
                id: true,
                username: true,
                email: true,
                phone_no: true,
                created_at: true,
                memberships: {
                    include: {
                        league: {
                            select: {
                                id: true,
                                name: true,
                                code: true
                            }
                        }
                    }
                },
                ownedLeagues: {
                    select: {
                        id: true,
                        name: true,
                        code: true
                    }
                }
            }
        })

        if (!user) {
            return res.status(404).json({ error: 'User not found' })
        }

        res.json(user)
    } catch (err) {
        console.error(err)
        res.status(500).json({ error: 'Failed to fetch user' })
    }
}

// PUT update user profile
export const updateUserProfile = async (req, res) => {
    try {
        const id = Number(req.params.id)
        const { username, email, phone_no, password } = req.body

        if (isNaN(id)) {
            return res.status(400).json({ error: 'Invalid user ID' })
        }

        // Verify user exists
        const userExists = await prisma.user.findUnique({
            where: { id }
        })
        if (!userExists) {
            return res.status(404).json({ error: 'User not found' })
        }

        // If updating username or email, check for uniqueness
        if (username || email || phone_no) {
            const existingUser = await prisma.user.findFirst({
                where: {
                    OR: [
                        ...(username ? [{ username, NOT: { id } }] : []),
                        ...(email ? [{ email, NOT: { id } }] : []),
                        ...(phone_no ? [{ phone_no, NOT: { id } }] : [])
                    ]
                }
            })

            if (existingUser) {
                return res.status(409).json({ error: 'Username, email, or phone number already in use' })
            }
        }

        const updateData = {
            ...(username && { username }),
            ...(email && { email }),
            ...(phone_no && { phone_no })
        }

        // Hash password if provided
        if (password) {
            updateData.password = await bcrypt.hash(password, 10)
        }

        const user = await prisma.user.update({
            where: { id },
            data: updateData,
            select: {
                id: true,
                username: true,
                email: true,
                phone_no: true,
                created_at: true
            }
        })

        res.json(user)
    } catch (err) {
        console.error(err)
        res.status(500).json({ error: 'Failed to update user profile' })
    }
}

// DELETE user (admin)
export const deleteUser = async (req, res) => {
    try {
        const id = Number(req.params.id)

        if (isNaN(id)) {
            return res.status(400).json({ error: 'Invalid user ID' })
        }

        // Check if user exists
        const userExists = await prisma.user.findUnique({
            where: { id }
        })
        if (!userExists) {
            return res.status(404).json({ error: 'User not found' })
        }

        await prisma.user.delete({
            where: { id }
        })

        res.json({ message: 'User deleted successfully' })
    } catch (err) {
        console.error(err)
        res.status(500).json({ error: 'Failed to delete user' })
    }
}
