const mongoose = require('mongoose');

const planningresultatSchema = mongoose.Schema({
    assessmentRecord: {
        type: String,
        required: true,
    },
    planningName:{
        type: String,
        required: true,
    },
    costfactor: {
        type: Number,
        required: true,
    },
    kpifactor: {
        type: Number,
        required: true,
    },
    proximityfactor: {
        type: Number,
        required: true,
    }
});

exports.Planningresults = mongoose.model('Planningresults', planningresultatSchema);
