const mongoose = require('mongoose');

const degreecostSchema = mongoose.Schema({
    costcategorie: {
        type: String,
        required: true,
    },
    process: [
        {
            verticalintegration: {
                type: Number,
                min: 0,
                max: 5,
                required: true
            },
            horizontalintegration: {
                type: Number,
                min: 0,
                max: 5,
                required: true
            },
            integratedproductlifecycle: {
                type: Number,
                min: 0,
                max: 5,
                required: true
            }
        }
    ],
    technology: [
        {
            shopfloorautomation: {
                type: Number,
                min: 0,
                max: 5,
                required: true
            },
            enterpriseautomation: {
                type: Number,
                min: 0,
                max: 5,
                required: true
            },
            facilityautomation: {
                type: Number,
                min: 0,
                max: 5,
                required: true
            },
            shopfloorconnectivity: {
                type: Number,
                min: 0,
                max: 5,
                required: true
            },
            entrepriseconnectivity: {
                type: Number,
                min: 0,
                max: 5,
                required: true
            },
            facilityconnectivity: {
                type: Number,
                min: 0,
                max: 5,
                required: true
            },
            shopfloorintelligence: {
                type: Number,
                min: 0,
                max: 5,
                required: true
            },
            entrepriseintelligence: {
                type: Number,
                min: 0,
                max: 5,
                required: true
            },
            facilityintelligence: {
                type: Number,
                min: 0,
                max: 5,
                required: true
            },
        }
    ],
    organization: [
        {
            workforcelearninganddevelopment: {
                type: Number,
                min: 0,
                max: 5,
                required: true
            },
            leadershipcompetency: {
                type: Number,
                min: 0,
                max: 5,
                required: true
            },
            interandintracompanycollaboration: {
                type: Number,
                min: 0,
                max: 5,
                required: true
            },
            strategyandgovernance: {
                type: Number,
                min: 0,
                max: 5,
                required: true
            }
        }
    ]
});

exports.Degreecost = mongoose.model('Degreecost', degreecostSchema);
