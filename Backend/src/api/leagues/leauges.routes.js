import express from 'express'
import {
    createLeague,
    joinLeague,
    getUserLeagues,
    getLeagueById,
    deleteLeague,
    getAllLeaguesPublic
} from './leagues.controller.js'

import { protect } from '../middleware/auth.middleware.js'

const router = express.Router()

router.use(protect)
router.get('/public', getAllLeaguesPublic)
router.post('/create', createLeague)
router.post('/join', joinLeague)
router.get('/', getUserLeagues)
router.get('/:id', getLeagueById)
router.delete('/:id', deleteLeague)

export default router