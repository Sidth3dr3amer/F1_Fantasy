import express from 'express'
import {
    getAllUsers,
    getUserById,
    updateUserProfile,
    deleteUser
} from './users.controller.js'

import { protect } from '../middleware/auth.middleware.js'
import { isAdmin } from '../middleware/admin.middleware.js'

const router = express.Router()

// Public endpoint for user profile
router.get('/:id', getUserById)

// Protected endpoints
router.use(protect)
router.put('/:id', updateUserProfile)

// Admin endpoints
router.use(isAdmin)
router.get('/', getAllUsers)
router.delete('/:id', deleteUser)

export default router
