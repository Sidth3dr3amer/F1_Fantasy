import express from 'express'
import { startSimulation, stopSimulationController, getSimulationStatus } from './simulation.controller.js'
import { protect } from '../middleware/auth.middleware.js'
import { isAdmin } from '../middleware/admin.middleware.js'

const router = express.Router()

// All simulation control endpoints are admin-protected
router.post('/start/:raceId', protect, isAdmin, startSimulation)
router.post('/stop/:raceId', protect, isAdmin, stopSimulationController)
router.get('/:raceId/status', protect, isAdmin, getSimulationStatus)

export default router
