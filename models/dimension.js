const mongoose = require('mongoose');

const dimensionSchema = mongoose.Schema({
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



exports.Dimension = mongoose.model('Dimension', dimensionSchema);

