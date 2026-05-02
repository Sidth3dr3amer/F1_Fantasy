import express from 'express'
import {
    getAllDrivers,
    getDriverById,
    createDriver,
    updateDriver,
    deleteDriver
} from './drivers.controller.js'

import { protect } from '../middleware/auth.middleware.js'
import { isAdmin } from '../middleware/admin.middleware.js'

const router = express.Router()

// 🌍 Public
router.get('/', getAllDrivers)
router.get('/:id', getDriverById)

// 🔒 Admin
router.use(protect, isAdmin)

router.post('/', createDriver)
router.put('/:id', updateDriver)
router.delete('/:id', deleteDriver)

export default router
