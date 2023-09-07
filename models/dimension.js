const mongoose = require('mongoose');

const dimensionSchema = mongoose.Schema({
    assessmentRecord: {
        type: String,
        required: true
    },
    //mel 1 lil 16
    dimension: {
        type: Number,
        min: 1,
        max: 16,
        required: true
    },
    //mel 1 ---- 5
    dimensionAssement: {
        type: Number,
        min: 0,
        max: 5,
        required: true
    },
    //list 
    bandComment: {
        type: String,
    }
})



exports.Dimension = mongoose.model('Dimension', dimensionSchema);

