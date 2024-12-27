const mongoose = require('mongoose');

// Response Schema
const ResponseSchema = new mongoose.Schema({
    formId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Form',
        required: true,
    },
    answers: [
        {
            question: {
                type: String,
                required: true,
            },
            response: {
                type: mongoose.Schema.Types.Mixed, // Mixed type for flexibility
                required: true,
            },
        },
    ],
    submittedAt: {
        type: Date,
        default: Date.now,
    },
}, { timestamps: true });

module.exports = mongoose.model('Response', ResponseSchema);
