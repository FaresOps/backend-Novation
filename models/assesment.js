const mongoose = require('mongoose');
const { Company } = require('../models/company');


const assementSchema = mongoose.Schema({
    assessmentRecord: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Company',
        required: true
    },
    index: {
        type: String,
        required: true
    },
    dimension: {
        type: String,
        required: true
    },
    dimensionAssement: {
        type: String,
        required: true
    },
    bandName: {
        type: String,
        required: true
    },
    bandComment: {
        type: Number,
        min: 0,
        max: 5,
        required: true
    },
    definitions: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})

exports.Assesment = mongoose.model('Assesment', assementSchema);
