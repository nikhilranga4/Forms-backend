/**
 * Validate form data before saving to the database.
 * @param {Object} formData - Form data to validate.
 * @returns {Object} - Validation result with success status and errors (if any).
 */
function validateFormData(formData) {
    const errors = [];

    if (!formData.title || typeof formData.title !== 'string') {
        errors.push('Title is required and must be a string.');
    }

    if (formData.description && typeof formData.description !== 'string') {
        errors.push('Description must be a string.');
    }

    if (!Array.isArray(formData.questions) || formData.questions.length === 0) {
        errors.push('Questions must be a non-empty array.');
    } else {
        formData.questions.forEach((question, index) => {
            if (!question.type || !['Text', 'Grid', 'CheckBox'].includes(question.type)) {
                errors.push(`Question ${index + 1} has an invalid type.`);
            }
            if (!question.label || typeof question.label !== 'string') {
                errors.push(`Question ${index + 1} must have a valid label.`);
            }
        });
    }

    return {
        isValid: errors.length === 0,
        errors,
    };
}

/**
 * Validate response data before saving to the database.
 * @param {Object} responseData - Response data to validate.
 * @returns {Object} - Validation result with success status and errors (if any).
 */
function validateResponseData(responseData) {
    const errors = [];

    if (!responseData.formId || typeof responseData.formId !== 'string') {
        errors.push('Form ID is required and must be a string.');
    }

    if (!Array.isArray(responseData.answers) || responseData.answers.length === 0) {
        errors.push('Answers must be a non-empty array.');
    } else {
        responseData.answers.forEach((answer, index) => {
            if (!answer.question || typeof answer.question !== 'string') {
                errors.push(`Answer ${index + 1} must have a valid question.`);
            }
            if (!answer.response || typeof answer.response !== 'string') {
                errors.push(`Answer ${index + 1} must have a valid response.`);
            }
        });
    }

    return {
        isValid: errors.length === 0,
        errors,
    };
}

module.exports = {
    validateFormData,
    validateResponseData,
};
