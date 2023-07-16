const mongoose = require('mongoose');

const indusGroupSchema = mongoose.Schema({
    indusName: {
        type: String,
        required: true
    }
})



exports.IndusGroup = mongoose.model('IndusGroup', indusGroupSchema);

