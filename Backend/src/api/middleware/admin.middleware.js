export const isAdmin = (req, res, next) => {
    try {
        // Check if user is authenticated (should be called after protect middleware)
        if (!req.user) {
            return res.status(401).json({ error: 'Not authenticated' })
        }

        // For now, checking if user has an 'admin' or 'role' field
        // You may need to add an admin/role field to your User model
        if (req.user.isAdmin || req.user.role === 'ADMIN') {
            next()
        } else {
            res.status(403).json({ error: 'Admin access required' })
        }
    } catch (err) {
        console.error('Admin check error:', err)
        res.status(403).json({ error: 'Admin access required' })
    }
}

export default isAdmin
