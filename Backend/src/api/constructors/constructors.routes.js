import express from 'express'
import {
    getAllConstructors,
    getConstructorById,
    createConstructor,
    updateConstructor,
    deleteConstructor
} from './constructors.controller.js'

import { protect } from '../middleware/auth.middleware.js'
import { isAdmin } from '../middleware/admin.middleware.js'

const router = express.Router()

// 🌍 Public
router.get('/', getAllConstructors)
router.get('/:id', getConstructorById)

// 🔒 Admin
router.use(protect, isAdmin)

router.post('/', createConstructor)
router.put('/:id', updateConstructor)
router.delete('/:id', deleteConstructor)

export default router
