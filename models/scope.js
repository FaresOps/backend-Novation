const { Company } = require('../models/company');
const mongoose = require('mongoose');

const scopeSchema = mongoose.Schema({
    assessmentRecord: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Company',
        required: true
    },
    dateOfOnboarding: {
        type: Date,
        required: true
    },
    dateOfEvaluation: {
        type: Date,
        required: true
    },
    dateOfDebrief: {
        type: Date,
        required: true
    }
})



exports.Scope = mongoose.model('Scope', scopeSchema);

