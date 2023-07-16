const { Company } = require('../models/company');
const mongoose = require('mongoose');



const resultSchema = mongoose.Schema({
    assessmentRecord:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Company',
        required: true
    },
    planningHorizontal: {
        type: String,
        required: true
    },
    costFactor: {
        type: Number,
        required: true
    },
    kpiFactor: {
        type: Number,
        required: true
    },
    proximity: {
        type: Number,
        required: true
    },
    process:{
        type: String,
        required: true
    },
    technology:{
        type: String,
        required: true
    },
    organization:{
        type: String,
        required: true
    }

})


exports.Result = mongoose.model('Result', resultSchema);