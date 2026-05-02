import prisma from '../../config/db.js'

const parseOptionalNumber = (value, fieldName) => {
    if (value === undefined) return undefined

    const number = Number(value)
    if (!Number.isFinite(number)) {
        throw new Error(`${fieldName} must be a number`)
    }

    return number
}

// GET all drivers
export const getAllDrivers = async (req, res) => {
    try {
        const drivers = await prisma.driver.findMany({
            include: {
                constructor: true
            },
            orderBy: { name: 'asc' }
        })

        res.json(drivers)
    } catch (err) {
        console.error(err)
        res.status(500).json({ error: 'Failed to fetch drivers' })
    }
}

// GET driver by ID
export const getDriverById = async (req, res) => {
    try {
        const id = Number(req.params.id)

        if (isNaN(id)) {
            return res.status(400).json({ error: 'Invalid driver ID' })
        }

        const driver = await prisma.driver.findUnique({
            where: { id },
            include: {
                constructor: true,
                raceResults: true
            }
        })

        if (!driver) {
            return res.status(404).json({ error: 'Driver not found' })
        }

        res.json(driver)
    } catch (err) {
        console.error(err)
        res.status(500).json({ error: 'Failed to fetch driver' })
    }
}

// POST create driver (admin)
export const createDriver = async (req, res) => {
    try {
        const { name, number, constructorId, active, price, points } = req.body

        if (!name) {
            return res.status(400).json({ error: 'Driver name is required' })
        }

        const parsedPrice = parseOptionalNumber(price, 'Price')
        const parsedPoints = parseOptionalNumber(points, 'Points')

        // Verify constructor exists if provided
        if (constructorId) {
            const constructor = await prisma.constructor.findUnique({
                where: { id: constructorId }
            })
            if (!constructor) {
                return res.status(404).json({ error: 'Constructor not found' })
            }
        }

        const driver = await prisma.driver.create({
            data: {
                name,
                number: number || null,
                constructorId: constructorId || null,
                active: active !== false,
                ...(parsedPrice !== undefined && { price: parsedPrice }),
                ...(parsedPoints !== undefined && { points: parsedPoints })
            },
            include: {
                constructor: true
            }
        })

        res.status(201).json(driver)
    } catch (err) {
        console.error(err)
        if (err.message?.includes('must be a number')) {
            return res.status(400).json({ error: err.message })
        }
        res.status(500).json({ error: 'Failed to create driver' })
    }
}

// PUT update driver (admin)
export const updateDriver = async (req, res) => {
    try {
        const id = Number(req.params.id)
        const { name, number, constructorId, active, price, points } = req.body

        if (isNaN(id)) {
            return res.status(400).json({ error: 'Invalid driver ID' })
        }

        const parsedPrice = parseOptionalNumber(price, 'Price')
        const parsedPoints = parseOptionalNumber(points, 'Points')

        // Check if driver exists
        const driverExists = await prisma.driver.findUnique({
            where: { id }
        })
        if (!driverExists) {
            return res.status(404).json({ error: 'Driver not found' })
        }

        // Verify constructor exists if provided
        if (constructorId) {
            const constructor = await prisma.constructor.findUnique({
                where: { id: constructorId }
            })
            if (!constructor) {
                return res.status(404).json({ error: 'Constructor not found' })
            }
        }

        const driver = await prisma.driver.update({
            where: { id },
            data: {
                ...(name && { name }),
                ...(number !== undefined && { number: number || null }),
                ...(constructorId && { constructorId }),
                ...(active !== undefined && { active }),
                ...(parsedPrice !== undefined && { price: parsedPrice }),
                ...(parsedPoints !== undefined && { points: parsedPoints })
            },
            include: {
                constructor: true
            }
        })

        res.json(driver)
    } catch (err) {
        console.error(err)
        if (err.message?.includes('must be a number')) {
            return res.status(400).json({ error: err.message })
        }
        res.status(500).json({ error: 'Failed to update driver' })
    }
}

// DELETE driver (admin)
export const deleteDriver = async (req, res) => {
    try {
        const id = Number(req.params.id)

        if (isNaN(id)) {
            return res.status(400).json({ error: 'Invalid driver ID' })
        }

        // Check if driver exists
        const driverExists = await prisma.driver.findUnique({
            where: { id }
        })
        if (!driverExists) {
            return res.status(404).json({ error: 'Driver not found' })
        }

        await prisma.driver.delete({
            where: { id }
        })

        res.json({ message: 'Driver deleted successfully' })
    } catch (err) {
        console.error(err)
        res.status(500).json({ error: 'Failed to delete driver' })
    }
}
