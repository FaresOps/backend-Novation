const mongoose = require('mongoose');

const validIndusGroups = [
    'Transportation',
    'Chemicals',
    'Energy',
    'Fast Moving Consumer Goods',
    'Metal and Mining',
    "General Manufacturing",
   " Advanced Manufacturing",
    "Pharmaceuticals & Healthcare",
    "Paper",
    "Utilities",
    "Textil, Leather, Apparels",
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
    }
});

exports.Company = mongoose.model('Company', companySchema);
