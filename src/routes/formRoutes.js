const express = require('express');
const { 
    createForm, 
    getAllForms, 
    getFormById, 
    updateForm, 
    deleteForm 
} = require('../controllers/formController');

const router = express.Router();

// Route to create a new form
router.post('/', createForm);

// Route to fetch all forms
router.get('/', getAllForms);

// Route to fetch a specific form by ID
router.get('/:id', getFormById);

// Route to update a form by ID
router.put('/:id', updateForm);

// Route to delete a form by ID
router.delete('/:id', deleteForm);

module.exports = router;
