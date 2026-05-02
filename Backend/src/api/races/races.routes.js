import express from 'express'
import {
    getAllRaces,
    getRaceById,
    createRace,
    updateRace,
} from './races.controller.js'

import { protect } from '../middleware/auth.middleware.js'
import { isAdmin } from '../middleware/admin.middleware.js' // implement as needed

const router = express.Router()

// 🌍 Public
router.get('/', getAllRaces)
router.get('/:id', getRaceById)

// 🔒 Admin
router.use(protect, isAdmin)

router.post('/', createRace)
router.put('/:id', updateRace)



export default router