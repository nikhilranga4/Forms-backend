// app.js
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');

// Import routes
const formRoutes = require('./routes/formRoutes');
const responseRoutes = require('./routes/responseRoutes');

// Import custom error handler middleware
const errorHandler = require('./middlewares/errorMiddleware'); // Import errorMiddleware directly

// Initialize Express app
const app = express();

// Middleware setup
app.use(helmet()); // Adds security headers
app.use(cors()); // Enables CORS
app.use(morgan('dev')); // Logs HTTP requests
app.use(express.json()); // Parses JSON request bodies
app.use(express.urlencoded({ extended: true })); // Parses URL-encoded request bodies

// Routes
app.use('/api/forms', formRoutes); // Routes for forms
app.use('/api/responses', responseRoutes); // Routes for responses

// Health check route
app.get('/api/health', (req, res) => {
    res.status(200).json({ message: 'Server is running successfully' });
});

// Error handling middleware (custom error handler)
app.use(errorHandler);

module.exports = app;
