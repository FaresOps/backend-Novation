const mongoose = require('mongoose');

const validIndusGroups = [
    'Aerospace',
    'Automotive',
    'Electronics',
    'Energy & Chemical (Downstream)',
    'Food & Beverages',
    'General Manufacturing',
    'Logistics',
    'Machinery & Equipment',
    'Medical Technology',
    'Oil & Gas',
    'Pharmaceuticals',
    'Precision Instruments',
    'Textile, Clothing, Leather & Footwear',
    'Semiconductors'
];

const companySchema = mongoose.Schema({
    assessmentRecord: {
        type: String,
        required: true
    },
    companyName: {
        type: String,
        required: true
    },
    bern: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true
    },
    dated: {
        type: Date,
        required: true,
    },
    indusGroup: {
        type: String,
        required: true,
        enum: validIndusGroups
    },
    income: {
        type: Number,
        required: true,
    },
    size: {
        type: Number,
        required: true,
    },
    exportation: {
        type: Boolean,
        required: true,
    },
    multiproduction: {
        type: Boolean,
        required: true,
    },
    factorysection: {
        type: String,
        required: true,
    },
    preparedBy: {
        type: String,
        required: true
    },
    advancement:{
        type: Number,
        required: true
    }
});

exports.Company = mongoose.model('Company', companySchema);
