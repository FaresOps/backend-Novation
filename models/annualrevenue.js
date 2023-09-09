const mongoose = require('mongoose');

const annualrevenueSchema = mongoose.Schema({
    assessmentRecord: {
        type: String,
        required: true
    },
    aftermarketservices: {
        type: Number,
        min: 0,
        max: 100,
        required: true
    },
    depreciation: {
        type: Number,
        min: 0,
        max: 100,
        required: true
    },
    labour: {
        type: Number,
        min: 0,
        max: 100,
        required: true
    },
    maintenanceandrepair: {
        type: Number,
        min: 0,
        max: 100,
        required: true
    },
    rawmaterialandConsumable: {
        type: Number,
        min: 0,
        max: 100,
        required: true
    },
    researchandDevelopment: {
        type: Number,
        min: 0,
        max: 100,
        required: true
    },
    rentalOperatingLease: {
        type: Number,
        min: 0,
        max: 100,
        required: true
    },
    sellinggeneralexpenses: {
        type: Number,
        min: 0,
        max: 100,
        required: true
    },
    transportationandDistribution: {
        type: Number,
        min: 0,
        max: 100,
        required: true
    },
    utilities: {
        type: Number,
        min: 0,
        max: 100,
        required: true
    },
})



exports.Annualrevenue = mongoose.model('Annualrevenue', annualrevenueSchema);

