const Form = require('../models/Form');

// Create a new form
const createForm = async (req, res) => {
    try {
        const { title, description, questions } = req.body;

        // Create a new form instance
        const newForm = new Form({
            title,
            description,
            questions,
        });

        // Save the new form to the database
        await newForm.save();
        res.status(201).json({ message: 'Form created successfully', form: newForm });
    } catch (error) {
        res.status(500).json({ message: 'Error creating form', error: error.message });
    }
};

// Get all forms
const getAllForms = async (req, res) => {
    try {
        const forms = await Form.find();
        res.status(200).json(forms);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching forms', error: error.message });
    }
};

// Get a single form by ID
const getFormById = async (req, res) => {
    try {
        const form = await Form.findById(req.params.id);
        if (!form) return res.status(404).json({ message: 'Form not found' });

        res.status(200).json(form);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching form', error: error.message });
    }
};

// Update a form by ID
const updateForm = async (req, res) => {
    try {
        const updatedForm = await Form.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });

        if (!updatedForm) return res.status(404).json({ message: 'Form not found' });

        res.status(200).json({ message: 'Form updated successfully', form: updatedForm });
    } catch (error) {
        res.status(500).json({ message: 'Error updating form', error: error.message });
    }
};

// Delete a form by ID
const deleteForm = async (req, res) => {
    try {
        const deletedForm = await Form.findByIdAndDelete(req.params.id);

        if (!deletedForm) return res.status(404).json({ message: 'Form not found' });

        res.status(200).json({ message: 'Form deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting form', error: error.message });
    }
};

module.exports = {
    createForm,
    getAllForms,
    getFormById,
    updateForm,
    deleteForm,
};
