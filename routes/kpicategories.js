const { Company } = require('../models/company');
const { Kpicategorie } = require('../models/kpicategorie');
const { Kpiresults } = require('../models/resultats/kpiresults');
const express = require('express');
const router = express.Router();


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
            assetandEquipmentEfficiency,
            workforceEfficiency,
            utilitiesEfficiency,
            inventoryEfficiency,
            materialsEfficiency,
            processquality,
            productquality,
            safety,
            Security,
            planningandschedulingEffectiveness,
            producutionFlexebility,
            workforceFlexebility,
            timetomarket,
            timetodelivery
        } = req.body;

        // Create a new Kpicategorie instance
        const kpicategorie = new Kpicategorie({
            assessmentRecord,
            assetandEquipmentEfficiency,
            workforceEfficiency,
            utilitiesEfficiency,
            inventoryEfficiency,
            materialsEfficiency,
            processquality,
            productquality,
            safety,
            Security,
            planningandschedulingEffectiveness,
            producutionFlexebility,
            workforceFlexebility,
            timetomarket,
            timetodelivery
        });

        // Save the Kpicategorie to the database
        await kpicategorie.save();



        const element1 = req.body.assetandEquipmentEfficiency * 0 +
        req.body.workforceEfficiency * 1 +
        req.body.utilitiesEfficiency * 3 +
        req.body.inventoryEfficiency * 3 +
        req.body.materialsEfficiency * 3 +
        req.body.processquality * 1 +
        req.body.productquality * 1 +
        req.body.safety * 1 +
        req.body.Security* 0 +
        req.body.planningandschedulingEffectiveness * 1+
        req.body.producutionFlexebility * 1+
        req.body.workforceFlexebility * 1+
        req.body.timetomarket * 1+
        req.body.timetodelivery * 1+
















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
