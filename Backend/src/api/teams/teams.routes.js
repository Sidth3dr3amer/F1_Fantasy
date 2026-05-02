import express from 'express'
import {
    buildTeam,
    lockMyTeam,
    unlockTeamAdmin,
    getMyTeam,
    autoLockTeamsForRace,
    updatePredictionPosition
} from './teams.controller.js'

import { protect } from '../middleware/auth.middleware.js'
import { isAdmin } from '../middleware/admin.middleware.js'

const router = express.Router()

router.use(protect)

// build / update
router.post('/build', buildTeam)

// manual lock (optional UX feature)
router.post('/lock', lockMyTeam)

// update one selected driver's predicted finishing position
router.patch('/:raceId/predictions', updatePredictionPosition)

// fetch
router.get('/:raceId', getMyTeam)

// admin override
router.post('/unlock', isAdmin, unlockTeamAdmin)

// admin/system
router.post('/auto-lock/:raceId', isAdmin, autoLockTeamsForRace)

export default router
