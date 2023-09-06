const express = require('express');
const router = express.Router();
const { Company } = require('../models/company');
const { Kpicategorie } = require('../models/kpicategorie');

// Create a new Kpicategorie
router.post('/create', async (req, res) => {
    try {
        const existingCompany = await Company.findOne({ assessmentRecord: req.body.assessmentRecord });
        if (!existingCompany) {
            return res.status(404).send('Company not found');
        }
        // Extract data from the request body
        const {
            assessmentRecord,
            productivity,
            quality,
            flexibility,
            Speed
        } = req.body;

        // Create a new Kpicategorie instance
        const kpicategorie = new Kpicategorie({
            assessmentRecord,
            productivity,
            quality,
            flexibility,
            Speed
        });

        // Save the Kpicategorie to the database
        await kpicategorie.save();

        res.status(201).json({ message: 'Kpicategorie created successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
});



router.get('/list', async (req, res) => {
    try {
        const kpicategories = await Kpicategorie.find();
        res.status(200).json(kpicategories);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
});



module.exports = router;
