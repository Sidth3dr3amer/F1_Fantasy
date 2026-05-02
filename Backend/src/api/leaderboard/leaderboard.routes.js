import express from 'express'
import {
    getLeagueLeaderboard,
    getRaceLeaderboard
    , getGlobalLeaderboard
} from './leaderboard.controller.js'

import { protect } from '../middleware/auth.middleware.js'

const router = express.Router()

router.use(protect)

// global leaderboard (place before dynamic :leagueId route)
router.get('/global', getGlobalLeaderboard)

// season standings
router.get('/:leagueId', getLeagueLeaderboard)

// per race breakdown
router.get('/:leagueId/race/:raceId', getRaceLeaderboard)

export default router