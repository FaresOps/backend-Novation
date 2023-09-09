const mongoose = require('mongoose');

const kpicategorieSchema = mongoose.Schema({
    assessmentRecord: {
        type: String,
        required: true
    },
    assetandEquipmentEfficiency: {
        type: Number,
        enum: [0, 1],
        required: true
    },
    workforceEfficiency: {
        type: Number,
        enum: [0, 1],
        required: true
    },
    utilitiesEfficiency: {
        type: Number,
        enum: [0, 1],
        required: true
    },
    inventoryEfficiency: {
        type: Number,
        enum: [0, 1],
        required: true
    },
    materialsEfficiency: {
        type: Number,
        enum: [0, 1],
        required: true
    },
    processquality: {
        type: Number,
        enum: [0, 1],
        required: true
    },
    productquality: {
        type: Number,
        enum: [0, 1],
        required: true
    },
    safety: {
        type: Number,
        enum: [0, 1],
        required: true
    },
    Security: {
        type: Number,
        enum: [0, 1],
        required: true
    },
    planningandschedulingEffectiveness: {
        type: Number,
        enum: [0, 1],
        required: true
    },
    producutionFlexebility: {
        type: Number,
        enum: [0, 1],
        required: true
    },
    workforceFlexebility: {
        type: Number,
        enum: [0, 1],
        required: true
    },
    timetomarket: {
        type: Number,
        enum: [0, 1],
        required: true
    },
    timetodelivery: {
        type: Number,
        enum: [0, 1],
        required: true
    }
})



exports.Kpicategorie = mongoose.model('Kpicategorie', kpicategorieSchema);

