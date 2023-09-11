const mongoose = require('mongoose');

const kpiresultatnormalizeSchema = mongoose.Schema({
    assessmentRecord: {
        type: String,
        required: true,
    },
    process: [
        {
            verticalintegration: {
                type: Number,
                required: true
            },
            horizontalintegration: {
                type: Number,
                required: true
            },
            integratedproductlifecycle: {
                type: Number,
                required: true
            }
        }
    ],
    technology: [{
        shopfloorautomation: {
            type: Number,
            required: true
        },
        enterpriseautomation: {
            type: Number,
            required: true
        },
        facilityautomation: {
            type: Number,
            required: true
        },
        shopfloorconnectivity: {
            type: Number,
            required: true
        },
        entrepriseconnectivity: {
            type: Number,
            required: true
        },
        facilityconnectivity: {
            type: Number,
            required: true
        },
        shopfloorintelligence: {
            type: Number,
            required: true
        },
        entrepriseintelligence: {
            type: Number,
            required: true
        },
        facilityintelligence: {
            type: Number,
            required: true
        },
    }],
    organization: [{
        workforcelearninganddevelopment: {
            type: Number,
            required: true
        },
        leadershipcompetency: {
            type: Number,
            required: true
        },
        interandintracompanycollaboration: {
            type: Number,
            required: true
        },
        strategyandgovernance: {
            type: Number,
            required: true
        }
    }]
});

exports.Kpiresultsnormalize = mongoose.model('Kpiresultsnormalize', kpiresultatnormalizeSchema);
