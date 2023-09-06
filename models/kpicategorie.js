const mongoose = require('mongoose');

const kpicategorieSchema = mongoose.Schema({
    assessmentRecord: {
        type: String,
        required: true
    },
    productivity: {
        assetandEquipmentEfficiency: {
            type: Boolean,
            required: true
        },
        workforceEfficiency: {
            type: Boolean,
            required: true
        },
        utilitiesEfficiency: {
            type: Boolean,
            required: true
        },
        inventoryEfficiency: {
            type: Boolean,
            required: true
        },
        materialsEfficiency: {
            type: Boolean,
            required: true
        }
    },
    quality: {
        processquality: {
            type: Boolean,
            required: true
        },
        productquality: {
            type: Boolean,
            required: true
        },
        safety: {
            type: Boolean,
            required: true
        },
        Security: {
            type: Boolean,
            required: true
        }
    },
    flexibility: {
        planningandschedulingEffectiveness: {
            type: Boolean,
            required: true
        },
        producutionFlexebility: {
            type: Boolean,
            required: true
        },
        workforceFlexebility: {
            type: Boolean,
            required: true
        }
    },
    Speed: {
        timetomarket: {
            type: Boolean,
            required: true
        },
        timetodelivery: {
            type: Boolean,
            required: true
        }
    }
})



exports.Kpicategorie = mongoose.model('Kpicategorie', kpicategorieSchema);

