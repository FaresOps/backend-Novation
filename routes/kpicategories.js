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

        const element1 = (req.body.assetandEquipmentEfficiency * 3 +
            req.body.workforceEfficiency * 3 +
            req.body.utilitiesEfficiency * 1 +
            req.body.inventoryEfficiency * 3 +
            req.body.materialsEfficiency * 3 +
            req.body.processquality * 3 +
            req.body.productquality * 3 +
            req.body.safety * 1 +
            req.body.Security * 1 +
            req.body.planningandschedulingEffectiveness * 1 +
            req.body.producutionFlexebility * 3 +
            req.body.workforceFlexebility * 3 +
            req.body.timetomarket * 0 +
            req.body.timetodelivery * 3)


        const element2 = (req.body.assetandEquipmentEfficiency * 1 +
            req.body.workforceEfficiency * 3 +
            req.body.utilitiesEfficiency * 0 +
            req.body.inventoryEfficiency * 3 +
            req.body.materialsEfficiency * 0 +
            req.body.processquality * 1 +
            req.body.productquality * 1 +
            req.body.safety * 0 +
            req.body.Security * 1 +
            req.body.planningandschedulingEffectiveness * 3 +
            req.body.producutionFlexebility * 1 +
            req.body.workforceFlexebility * 1 +
            req.body.timetomarket * 0 +
            req.body.timetodelivery * 3)


        const element3 = (req.body.assetandEquipmentEfficiency * 0 +
            req.body.workforceEfficiency * 3 +
            req.body.utilitiesEfficiency * 0 +
            req.body.inventoryEfficiency * 0 +
            req.body.materialsEfficiency * 3 +
            req.body.processquality * 1 +
            req.body.productquality * 3 +
            req.body.safety * 0 +
            req.body.Security * 1 +
            req.body.planningandschedulingEffectiveness * 0 +
            req.body.producutionFlexebility * 0 +
            req.body.workforceFlexebility * 1 +
            req.body.timetomarket * 3 +
            req.body.timetodelivery * 0)

        const element4 = (req.body.assetandEquipmentEfficiency * 3 +
            req.body.workforceEfficiency * 3 +
            req.body.utilitiesEfficiency * 1 +
            req.body.inventoryEfficiency * 3 +
            req.body.materialsEfficiency * 1 +
            req.body.processquality * 3 +
            req.body.productquality * 3 +
            req.body.safety * 3 +
            req.body.Security * 0 +
            req.body.planningandschedulingEffectiveness * 0 +
            req.body.producutionFlexebility * 3 +
            req.body.workforceFlexebility * 1 +
            req.body.timetomarket * 0 +
            req.body.timetodelivery * 3)

        const element5 = (req.body.assetandEquipmentEfficiency * 1 +
            req.body.workforceEfficiency * 3 +
            req.body.utilitiesEfficiency * 0 +
            req.body.inventoryEfficiency * 3 +
            req.body.materialsEfficiency * 1 +
            req.body.processquality * 3 +
            req.body.productquality * 1 +
            req.body.safety * 0 +
            req.body.Security * 0 +
            req.body.planningandschedulingEffectiveness * 3 +
            req.body.producutionFlexebility * 0 +
            req.body.workforceFlexebility * 1 +
            req.body.timetomarket * 3 +
            req.body.timetodelivery * 3)

        const element6 = (req.body.assetandEquipmentEfficiency * 3 +
            req.body.workforceEfficiency * 3 +
            req.body.utilitiesEfficiency * 3 +
            req.body.inventoryEfficiency * 0 +
            req.body.materialsEfficiency * 0 +
            req.body.processquality * 3 +
            req.body.productquality * 1 +
            req.body.safety * 3 +
            req.body.Security * 0 +
            req.body.planningandschedulingEffectiveness * 0 +
            req.body.producutionFlexebility * 1 +
            req.body.workforceFlexebility * 1 +
            req.body.timetomarket * 0 +
            req.body.timetodelivery * 1)

        const element7 =
            (req.body.assetandEquipmentEfficiency * 3 +
                req.body.workforceEfficiency * 1 +
                req.body.utilitiesEfficiency * 1 +
                req.body.inventoryEfficiency * 1 +
                req.body.materialsEfficiency * 1 +
                req.body.processquality * 1 +
                req.body.productquality * 1 +
                req.body.safety * 1 +
                req.body.Security * 3 +
                req.body.planningandschedulingEffectiveness * 1 +
                req.body.producutionFlexebility * 3 +
                req.body.workforceFlexebility * 3 +
                req.body.timetomarket * 0 +
                req.body.timetodelivery * 3)

        const element8 =
            req.body.assetandEquipmentEfficiency * 1 +
            req.body.workforceEfficiency * 1 +
            req.body.utilitiesEfficiency * 0 +
            req.body.inventoryEfficiency * 1 +
            req.body.materialsEfficiency * 1 +
            req.body.processquality * 1 +
            req.body.productquality * 1 +
            req.body.safety * 0 +
            req.body.Security * 3 +
            req.body.planningandschedulingEffectiveness * 3 +
            req.body.producutionFlexebility * 0 +
            req.body.workforceFlexebility * 1 +
            req.body.timetomarket * 3 +
            req.body.timetodelivery * 3;
        const element9 =
            req.body.assetandEquipmentEfficiency * 3 +
            req.body.workforceEfficiency * 1 +
            req.body.utilitiesEfficiency * 3 +
            req.body.inventoryEfficiency * 0 +
            req.body.materialsEfficiency * 0 +
            req.body.processquality * 1 +
            req.body.productquality * 1 +
            req.body.safety * 1 +
            req.body.Security * 3 +
            req.body.planningandschedulingEffectiveness * 0 +
            req.body.producutionFlexebility * 1 +
            req.body.workforceFlexebility * 3 +
            req.body.timetomarket * 0 +
            req.body.timetodelivery * 1;
        const element10 =
            req.body.assetandEquipmentEfficiency * 3 +
            req.body.workforceEfficiency * 3 +
            req.body.utilitiesEfficiency * 1 +
            req.body.inventoryEfficiency * 3 +
            req.body.materialsEfficiency * 3 +
            req.body.processquality * 3 +
            req.body.productquality * 3 +
            req.body.safety * 3 +
            req.body.Security * 1 +
            req.body.planningandschedulingEffectiveness * 1 +
            req.body.producutionFlexebility * 3 +
            req.body.workforceFlexebility * 3 +
            req.body.timetomarket * 0 +
            req.body.timetodelivery * 3;
        const element11 =
            req.body.assetandEquipmentEfficiency * 1 +
            req.body.workforceEfficiency * 3 +
            req.body.utilitiesEfficiency * 0 +
            req.body.inventoryEfficiency * 3 +
            req.body.materialsEfficiency * 3 +
            req.body.processquality * 3 +
            req.body.productquality * 1 +
            req.body.safety * 0 +
            req.body.Security * 1 +
            req.body.planningandschedulingEffectiveness * 3 +
            req.body.producutionFlexebility * 0 +
            req.body.workforceFlexebility * 1 +
            req.body.timetomarket * 3 +
            req.body.timetodelivery * 3;


        const element12 =
            req.body.assetandEquipmentEfficiency * 3 +
            req.body.workforceEfficiency * 3 +
            req.body.utilitiesEfficiency * 3 +
            req.body.inventoryEfficiency * 0 +
            req.body.materialsEfficiency * 0 +
            req.body.processquality * 3 +
            req.body.productquality * 1 +
            req.body.safety * 3 +
            req.body.Security * 1 +
            req.body.planningandschedulingEffectiveness * 0 +
            req.body.producutionFlexebility * 1 +
            req.body.workforceFlexebility * 3 +
            req.body.timetomarket * 0 +
            req.body.timetodelivery * 1;
        const element13 =
            req.body.assetandEquipmentEfficiency * 1 +
            req.body.workforceEfficiency * 3 +
            req.body.utilitiesEfficiency * 1 +
            req.body.inventoryEfficiency * 1 +
            req.body.materialsEfficiency * 1 +
            req.body.processquality * 3 +
            req.body.productquality * 3 +
            req.body.safety * 1 +
            req.body.Security * 3 +
            req.body.planningandschedulingEffectiveness * 1 +
            req.body.producutionFlexebility * 1 +
            req.body.workforceFlexebility * 3 +
            req.body.timetomarket * 1 +
            req.body.timetodelivery * 1;

        const element14 =
            req.body.assetandEquipmentEfficiency * 1 +
            req.body.workforceEfficiency * 3 +
            req.body.utilitiesEfficiency * 1 +
            req.body.inventoryEfficiency * 1 +
            req.body.materialsEfficiency * 1 +
            req.body.processquality * 3 +
            req.body.productquality * 1 +
            req.body.safety * 3 +
            req.body.Security * 3 +
            req.body.planningandschedulingEffectiveness * 1 +
            req.body.producutionFlexebility * 3 +
            req.body.workforceFlexebility * 3 +
            req.body.timetomarket * 3 +
            req.body.timetodelivery * 3;
        const element15 =
            req.body.assetandEquipmentEfficiency * 1 +
            req.body.workforceEfficiency * 3 +
            req.body.utilitiesEfficiency * 1 +
            req.body.inventoryEfficiency * 1 +
            req.body.materialsEfficiency * 1 +
            req.body.processquality * 3 +
            req.body.productquality * 3 +
            req.body.safety * 1 +
            req.body.Security * 1 +
            req.body.planningandschedulingEffectiveness * 1 +
            req.body.producutionFlexebility * 1 +
            req.body.workforceFlexebility * 3 +
            req.body.timetomarket * 3 +
            req.body.timetodelivery * 3;
        const element16 =
            req.body.assetandEquipmentEfficiency * 1 +
            req.body.workforceEfficiency * 3 +
            req.body.utilitiesEfficiency * 1 +
            req.body.inventoryEfficiency * 1 +
            req.body.materialsEfficiency * 1 +
            req.body.processquality * 1 +
            req.body.productquality * 1 +
            req.body.safety * 1 +
            req.body.Security * 3 +
            req.body.planningandschedulingEffectiveness * 1 +
            req.body.producutionFlexebility * 3 +
            req.body.workforceFlexebility * 3 +
            req.body.timetomarket * 3 +
            req.body.timetodelivery * 1;



        const kpiresult = new Kpiresults({
            assessmentRecord: req.body.assessmentRecord,
            process: [{
                verticalintegration: element1,
                horizontalintegration: element2,
                integratedproductlifecycle: element3
            }],
            technology: [{
                shopfloorautomation: element4,
                enterpriseautomation: element5,
                facilityautomation: element6,
                shopfloorconnectivity: element7,
                entrepriseconnectivity: element8,
                facilityconnectivity: element9,
                shopfloorintelligence: element10,
                entrepriseintelligence: element11,
                facilityintelligence: element12
            }],
            organization: [{
                workforcelearninganddevelopment: element13,
                leadershipcompetency: element14,
                interandintracompanycollaboration: element15,
                strategyandgovernance: element16
            }]
        });
        await kpiresult.save();


        res.status(201).json({ message: 'Kpicategorie and kpi results  created successfully' });
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
