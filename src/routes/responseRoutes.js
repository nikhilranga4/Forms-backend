const express = require('express');
const { 
    submitResponse, 
    getResponsesByFormId 
} = require('../controllers/responseController');

const router = express.Router();

// Route to submit a response to a form
router.post('/', submitResponse);

// Route to fetch responses for a specific form by form ID
router.get('/form/:formId', getResponsesByFormId);

module.exports = router;
