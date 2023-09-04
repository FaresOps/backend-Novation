const mongoose = require('mongoose');
const { Company } = require('../models/company');

const contactSchema = mongoose.Schema({
    assessmentRecord: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    designation: {
        type: String,
        required: true
    },
    mobileNumber: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    }
});



exports.Contact = mongoose.model('Contact', contactSchema);

