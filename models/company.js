const mongoose = require('mongoose');
const { IndusGroup } = require('../models/indusgroup');


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
        type: mongoose.Schema.Types.ObjectId,
        ref: 'IndusGroup',
        required: true
    },
    income:{
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
        enum: ['whole company', 'section of the company'],
        required: true,
    },
    preparedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref : 'User',
        required: true
    }
})

exports.Company = mongoose.model('Company', companySchema);

// {
//     "assessmentRecord": "OSAY23SN00027",
//     "companyName": "SOMOCER",
//     "bern": "03927DA",
//     "adress": "Menzel hayet Monastir 5033 Tunisie, Monastir 5033, Tunisia",
//     "dated" : "20062023",
//     "indusGroup": "",
//     "preparedBy": "Ayoub Magherbi"
// }