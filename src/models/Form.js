const mongoose = require('mongoose');

// Question Schema
const QuestionSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true,
        enum: ['Text', 'Grid', 'CheckBox'], // Allowed question types
    },
    label: {
        type: String,
        required: true,
    },
    options: {
        type: [String], // For Grid and CheckBox types
        default: [],
    },
    required: {
        type: Boolean,
        default: false,
    },
}, { _id: false }); // No separate _id for subdocuments

// Form Schema
const FormSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    questions: {
        type: [QuestionSchema],
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
}, { timestamps: true }); // Auto-manages createdAt and updatedAt

module.exports = mongoose.model('Form', FormSchema);
