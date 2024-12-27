require('dotenv').config(); // Load environment variables
const mongoose = require('mongoose');
const app = require('./app');
const { logInfo, logError } = require('./utils/logger');

// Environment variables
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;

// Connect to MongoDB
mongoose
    .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        logInfo('Connected to MongoDB successfully.');
        
        // Start the server
        app.listen(PORT, () => {
            logInfo(`Server is running on http://localhost:${PORT}`);
        });
    })
    .catch((error) => {
        logError(`Failed to connect to MongoDB: ${error.message}`);
        process.exit(1); // Exit the process with failure
    });
