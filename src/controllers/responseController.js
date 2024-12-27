const Response = require('../models/Response');

// Submit a response to a form
const submitResponse = async (req, res) => {
    try {
        const { formId, responses } = req.body;

        const newResponse = new Response({
            formId,
            responses,
        });

        await newResponse.save();
        res.status(201).json({ message: 'Response submitted successfully', response: newResponse });
    } catch (error) {
        res.status(500).json({ message: 'Error submitting response', error: error.message });
    }
};

// Get all responses for a form
const getResponsesByFormId = async (req, res) => {
    try {
        const responses = await Response.find({ formId: req.params.formId });
        res.status(200).json(responses);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching responses', error: error.message });
    }
};

module.exports = {
    submitResponse,
    getResponsesByFormId,
};
