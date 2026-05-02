import prisma from '../../config/db.js'

const parseOptionalNumber = (value, fieldName) => {
    if (value === undefined) return undefined

    const number = Number(value)
    if (!Number.isFinite(number)) {
        throw new Error(`${fieldName} must be a number`)
    }

    return number
}

// GET all constructors
export const getAllConstructors = async (req, res) => {
    try {
        const constructors = await prisma.constructor.findMany({
            include: {
                drivers: true
            },
            orderBy: { name: 'asc' }
        })

        res.json(constructors)
    } catch (err) {
        console.error(err)
        res.status(500).json({ error: 'Failed to fetch constructors' })
    }
}

// GET constructor by ID
export const getConstructorById = async (req, res) => {
    try {
        const id = Number(req.params.id)

        if (isNaN(id)) {
            return res.status(400).json({ error: 'Invalid constructor ID' })
        }

        const constructor = await prisma.constructor.findUnique({
            where: { id },
            include: {
                drivers: true,
                teams: true
            }
        })

        if (!constructor) {
            return res.status(404).json({ error: 'Constructor not found' })
        }

        res.json(constructor)
    } catch (err) {
        console.error(err)
        res.status(500).json({ error: 'Failed to fetch constructor' })
    }
}

// POST create constructor (admin)
export const createConstructor = async (req, res) => {
    try {
        const { name, active, price, points } = req.body

        if (!name) {
            return res.status(400).json({ error: 'Constructor name is required' })
        }

        const parsedPrice = parseOptionalNumber(price, 'Price')
        const parsedPoints = parseOptionalNumber(points, 'Points')

        const constructor = await prisma.constructor.create({
            data: {
                name,
                active: active !== false,
                ...(parsedPrice !== undefined && { price: parsedPrice }),
                ...(parsedPoints !== undefined && { points: parsedPoints })
            },
            include: {
                drivers: true
            }
        })

        res.status(201).json(constructor)
    } catch (err) {
        console.error(err)
        if (err.message?.includes('must be a number')) {
            return res.status(400).json({ error: err.message })
        }
        res.status(500).json({ error: 'Failed to create constructor' })
    }
}

// PUT update constructor (admin)
export const updateConstructor = async (req, res) => {
    try {
        const id = Number(req.params.id)
        const { name, active, price, points } = req.body

        if (isNaN(id)) {
            return res.status(400).json({ error: 'Invalid constructor ID' })
        }

        const parsedPrice = parseOptionalNumber(price, 'Price')
        const parsedPoints = parseOptionalNumber(points, 'Points')

        // Check if constructor exists
        const constructorExists = await prisma.constructor.findUnique({
            where: { id }
        })
        if (!constructorExists) {
            return res.status(404).json({ error: 'Constructor not found' })
        }

        const constructor = await prisma.constructor.update({
            where: { id },
            data: {
                ...(name && { name }),
                ...(active !== undefined && { active }),
                ...(parsedPrice !== undefined && { price: parsedPrice }),
                ...(parsedPoints !== undefined && { points: parsedPoints })
            },
            include: {
                drivers: true
            }
        })

        res.json(constructor)
    } catch (err) {
        console.error(err)
        if (err.message?.includes('must be a number')) {
            return res.status(400).json({ error: err.message })
        }
        res.status(500).json({ error: 'Failed to update constructor' })
    }
}

// DELETE constructor (admin)
export const deleteConstructor = async (req, res) => {
    try {
        const id = Number(req.params.id)

        if (isNaN(id)) {
            return res.status(400).json({ error: 'Invalid constructor ID' })
        }

        // Check if constructor exists
        const constructorExists = await prisma.constructor.findUnique({
            where: { id }
        })
        if (!constructorExists) {
            return res.status(404).json({ error: 'Constructor not found' })
        }

        await prisma.constructor.delete({
            where: { id }
        })

        res.json({ message: 'Constructor deleted successfully' })
    } catch (err) {
        console.error(err)
        res.status(500).json({ error: 'Failed to delete constructor' })
    }
}
