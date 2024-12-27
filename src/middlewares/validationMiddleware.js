const { validationResult } = require('express-validator');

// Middleware to handle validation errors
const validationMiddleware = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            success: false,
            message: 'Validation failed',
            errors: errors.array(),
        });
    }
    next();
};

module.exports = validationMiddleware;
