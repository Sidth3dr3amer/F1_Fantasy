import express from 'express'
import { register } from './auth.controller.js'
import { login } from './auth.controller.js'
import { getMe } from './auth.controller.js'
import { logout } from './auth.controller.js'
import { refresh } from './auth.controller.js'
import { protect } from '../middleware/auth.middleware.js'

const router = express.Router()

router.post('/register', register)
router.post('/login', login)
router.get('/me', protect, getMe)
router.post('/logout', logout)
router.post('/refresh', refresh)

export default router

