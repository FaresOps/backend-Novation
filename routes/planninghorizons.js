const express = require('express');
const router = express.Router();
const { Company } = require('../models/company');
const { Panninghorizon } = require('../models/planninghorizon');

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

        res.status(201).json({ message: 'Planning Horizon created successfully' });
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
