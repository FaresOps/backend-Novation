const mongoose = require('mongoose');

const planninghorizonSchema = mongoose.Schema({
    assessmentRecord: {
        type: String,
        required: true
    },
    strategic: {
        type: Boolean,
        required: true
    },
    tactical: {
        type: Boolean,
        required: true
    },
    operational: {
        type: Boolean,
        required: true
    }
});



exports.Panninghorizon = mongoose.model('Panninghorizon', planninghorizonSchema);

