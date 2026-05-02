import express from 'express'
import { listUsers, promoteUser, demoteUser, bootAdmin } from './admin.controller.js'
import { protect } from '../middleware/auth.middleware.js'
import { isAdmin } from '../middleware/admin.middleware.js'

const router = express.Router()

// Boot route (uses secret token) — unprotected but guarded by token
router.post('/boot/:userId', bootAdmin)

// Protected admin routes
router.use(protect)
router.use(isAdmin)

router.get('/users', listUsers)
router.post('/promote/:userId', promoteUser)
router.post('/demote/:userId', demoteUser)

export default router
