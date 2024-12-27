const winston = require('winston');

// Create a logger instance using Winston
const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.printf(({ timestamp, level, message }) => {
            return `[${timestamp}] ${level.toUpperCase()}: ${message}`;
        })
    ),
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'logs/app.log' }),
    ],
});

/**
 * Log an info message.
 * @param {string} message - Message to log.
 */
function logInfo(message) {
    logger.info(message);
}

/**
 * Log an error message.
 * @param {string} message - Error message to log.
 */
function logError(message) {
    logger.error(message);
}

module.exports = {
    logInfo,
    logError,
};
