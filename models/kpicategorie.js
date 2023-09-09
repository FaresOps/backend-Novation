const mongoose = require('mongoose');

const kpicategorieSchema = mongoose.Schema({
    assessmentRecord: {
        type: String,
        required: true
    },
    assetandEquipmentEfficiency: {
        type: Number,
        required: true
    },
    workforceEfficiency: {
        type: Number,
        required: true
    },
    utilitiesEfficiency: {
        type: Number,
        required: true
    },
    inventoryEfficiency: {
        type: Number,
        required: true
    },
    materialsEfficiency: {
        type: Number,
        required: true
    },
    processquality: {
        type: Number,
        required: true
    },
    productquality: {
        type: Number,
        required: true
    },
    safety: {
        type: Number,
        required: true
    },
    Security: {
        type: Number,
        required: true
    },
    planningandschedulingEffectiveness: {
        type: Number,
        required: true
    },
    producutionFlexebility: {
        type: Number,
        required: true
    },
    workforceFlexebility: {
        type: Number,
        required: true
    },
    timetomarket: {
        type: Number,
        required: true
    },
    timetodelivery: {
        type: Number,
        required: true
    }
})



exports.Kpicategorie = mongoose.model('Kpicategorie', kpicategorieSchema);

