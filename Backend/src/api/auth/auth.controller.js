import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import prisma from '../../config/db.js'

const router = express.Router();

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';
const JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET || 'your-refresh-secret';

export const register = async (req, res) => {
    try {
        const { username, email, password, phone_no } = req.body

        if (!username || !email || !password || !phone_no) {
            return res.status(400).json({ error: 'Missing required fields' })
        }
        const hashedPassword = await bcrypt.hash(password, 10);


        const existingUser = await prisma.user.findFirst({
            where: {
                OR: [
                    { email },
                    { username },
                    { phone_no }
                ]
            }
        })

        if (existingUser) {
            return res.status(400).json({ error: 'User already exists' })
        }

        const user = await prisma.user.create({
            data: { username, email, password: hashedPassword, phone_no }
        })

        res.status(201).json(user)

    } catch (err) {
        console.error(err)
        res.status(500).json({ error: 'Server error' })
    }
}

// POST /api/auth/login
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ error: 'Email and password required' });
        }


        // Find user
        const user = await prisma.user.findUnique({
            where: { email }
        });

        if (!user) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        // Verify password
        const isValidPassword = await bcrypt.compare(password, user.password);

        if (!isValidPassword) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        // Generate tokens
        const accessToken = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: '1h' });
        const refreshToken = jwt.sign({ id: user.id }, JWT_REFRESH_SECRET, { expiresIn: '7d' });

        res.json({
            message: 'Login successful',
            user: { id: user.id, username: user.username, email: user.email, role: user.role },
            accessToken,
            refreshToken
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// GET /api/v1/auth/me
export const getMe = async (req, res) => {
    try {
        // `protect` middleware populates `req.user`
        if (!req.user) {
            return res.status(401).json({ error: 'Not authenticated' });
        }

        res.json({ user: req.user });
    } catch (error) {
        res.status(401).json({ error: 'Invalid or expired token' });
    }
};

// POST /api/v1/auth/logout
export const logout = async (req, res) => {
    // In a real app, you might invalidate the token in a blacklist
    // For now, we just send a success response
    res.json({ message: 'Logout successful' });
};

// POST /api/v1/auth/refresh
export const refresh = async (req, res) => {
    try {
        const { refreshToken } = req.body;

        if (!refreshToken) {
            return res.status(400).json({ error: 'Refresh token required' });
        }

        const decoded = jwt.verify(refreshToken, JWT_REFRESH_SECRET);
        const newAccessToken = jwt.sign({ id: decoded.id }, JWT_SECRET, { expiresIn: '1h' });

        res.json({ accessToken: newAccessToken });
    } catch (error) {
        res.status(401).json({ error: 'Invalid refresh token' });
    }
};


export default router;
