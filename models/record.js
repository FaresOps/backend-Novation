const mongoose = require('mongoose');

const recordSchema = mongoose.Schema({
    dimension: {
        type: String,
        required: true
    },
    dimensionName: {
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



exports.Record = mongoose.model('Record', recordSchema);

