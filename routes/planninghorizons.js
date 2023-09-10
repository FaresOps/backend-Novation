const express = require('express');
const router = express.Router();
const { Company } = require('../models/company');
const { Panninghorizon } = require('../models/planninghorizon');
const { Planningresults } = require('../models/resultats/planningresults');

// Create a new Planning Horizon
router.post('/create', async (req, res) => {
    try {
        const { assessmentRecord, strategic, tactical, operational } = req.body;

        // Check if the company exists
        const existingCompany = await Company.findOne({ assessmentRecord });
        if (!existingCompany) {
            return res.status(404).send('Company not found');
        }

        // Create a new Planning Horizon instance
        const planningHorizon = new Panninghorizon({
            assessmentRecord,
            strategic,
            tactical,
            operational,
        });

        await planningHorizon.save();

        // Create Kpiresults based on conditions
        // problem
        let planning;
        if (strategic && !tactical && !operational) {
            planning = new Planningresults({
                assessmentRecord: req.body.assessmentRecord,
                costfactor: 30,
                kpifactor: 40,
                proximityfactor: 30,
            });
        } else if (tactical && !strategic && !operational) {
            planning = new Planningresults({
                assessmentRecord: req.body.assessmentRecord,
                costfactor: 45,
                kpifactor: 30,
                proximityfactor: 25,
            });
        } else if (operational && !strategic && !tactical) {
            planning = new Planningresults({
                assessmentRecord: req.body.assessmentRecord,
                costfactor: 60,
                kpifactor: 20,
                proximityfactor: 20,
            });
        }

        if (planning) {
            try {
                await planning.save();
            } catch (err) {
                console.error(err);
                res.status(500).json({ error: 'Error saving Planningresults' });
            }
        }

        res.status(201).json({ message: 'Planning Horizon and planning result created successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }

});

// Get all Planning Horizons
router.get('/list', async (req, res) => {
    try {
        const planningHorizons = await Panninghorizon.find();
        res.status(200).json(planningHorizons);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
