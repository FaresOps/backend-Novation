const { Scope } = require('../models/scope');
const express = require('express');
const verifyToken = require('../verifytoken');
const router = express.Router();

// Create scope (date of assessments)
router.post('/create', async (req, res) => {
    try {
        const { assessmentRecord, dateOfOnboarding, dateOfEvaluation, dateOfDebrief } = req.body;
        const scope = new Scope({ assessmentRecord, dateOfOnboarding, dateOfEvaluation, dateOfDebrief });
        await scope.save();
        res.send('Scope saved successfully!');
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

// Get scope of assessments for a company by ID
router.get('/:id', async (req, res) => {
    try {
        const scope = await Scope.findById(req.params.id);

        if (!scope) {
            return res.status(404).json({ success: false, message: 'Scope not found' });
        }

        res.status(200).send(scope);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;
