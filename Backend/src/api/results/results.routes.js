import express from 'express'
import {
    submitResults,
    updateResults,
    getRaceResults,
    calculateResults
} from './results.controller.js'

import { protect } from '../middleware/auth.middleware.js'
import { isAdmin } from '../middleware/admin.middleware.js'

const router = express.Router()

// Public
router.get('/:raceId', getRaceResults)

// Admin-protected endpoints
router.post('/', protect, isAdmin, submitResults)
router.put('/:raceId', protect, isAdmin, updateResults)
router.post('/calculate/:raceId', protect, isAdmin, calculateResults)

export default router
