const express = require('express');
const router = express.Router();
const { Company } = require('../models/company');
const { Panninghorizon } = require('../models/planninghorizon');
const { Planningresults } = require('../models/resultats/planningresults'); // Import the Kpiresults model

// Create a new Planning Horizon
router.post('/create', async (req, res) => {
    try {
        const existingCompany = await Company.findOne({ assessmentRecord: req.body.assessmentRecord });
        if (!existingCompany) {
            return res.status(404).send('Company not found');
        }
        const { assessmentRecord, strategic, tactical, operational } = req.body;

        // Create a new Planning Horizon instance
        const planningHorizon = new Panninghorizon({
            assessmentRecord,
            strategic,
            tactical,
            operational,
        });
        // Save the Planning Horizon to the database
        await planningHorizon.save();

        // Create Kpiresults based on conditions
        let planning;

        if (strategic === true && operational === false && tactical === false) {
            planning = new Planningresults({
                assessmentRecord: req.body.assessmentRecord,
                costfactor: 30,
                kpifactor: 40,
                proximityfactor: 30
            });
        } else if (tactical === true && operational === false && strategic === false) {
            planning = new Planningresults({
                assessmentRecord: req.body.assessmentRecord,
                costfactor: 45,
                kpifactor: 30,
                proximityfactor: 25
            });
        } else if (operational === true && tactical === false && strategic === false) {
            planning = new Planningresults({
                assessmentRecord: req.body.assessmentRecord,
                costfactor: 60,
                kpifactor: 20,
                proximityfactor: 20
            });
        }

        if (planning) {
            await planning.save();
        }

        // Send a single response to the client
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
