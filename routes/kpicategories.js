const express = require('express');
const router = express.Router();
const { Company } = require('../models/company');
const { Kpicategorie } = require('../models/kpicategorie');
const { Kpiresults } = require('../models/resultats/kpiresults');
const { Degreebic } = require('../models/backups/degreebic');
const { Dimension } = require('../models/dimension');
const { Bicresultats } = require('../models/resultats/bicresultats');


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

        const company = await Company.findOne({ assessmentRecord: req.body.assessmentRecord });
        console.log(company);
        if (!company) {
            return res.status(404).send('Company data not found for the specified assessment record');
        }

        const indusGroup = company.indusGroup;
        console.log(indusGroup);
        if (!indusGroup) {
            return res.status(404).send('IndusGroup not found for the specified assessment record');
        }
        const degreebic = await Degreebic.findOne({ biccategorie: indusGroup });

        if (!degreebic) {
            return res.status(404).send('Degreebic data not found for the specified indusGroup');
        }

        console.log(degreebic);

        const dimension = await Dimension.find({ assessmentRecord });
        if (!dimension) {
            return res.status(404).send('Dimension data not found');
        }
        const dimensionAssements = dimension.map(dimension => dimension.dimensionAssement);
        console.log(degreebic.technology[0].shopfloorintelligence - dimensionAssements[9]);

        const process = {
            verticalintegration: degreebic.process[0].verticalintegration - dimensionAssements[0],
            horizontalintegration: degreebic.process[0].horizontalintegration - dimensionAssements[1],
            integratedproductlifecycle: degreebic.process[0].integratedproductlifecycle - dimensionAssements[2],
        };
        const technology = {
            shopfloorautomation: degreebic.technology[0].shopfloorautomation - dimensionAssements[3],
            enterpriseautomation: degreebic.technology[0].enterpriseautomation - dimensionAssements[4],
            facilityautomation: degreebic.technology[0].facilityautomation - dimensionAssements[5],
            shopfloorconnectivity: degreebic.technology[0].shopfloorconnectivity - dimensionAssements[6],
            entrepriseconnectivity: degreebic.technology[0].entrepriseconnectivity - dimensionAssements[7],
            facilityconnectivity: degreebic.technology[0].facilityconnectivity - dimensionAssements[8],
            shopfloorintelligence: degreebic.technology[0].shopfloorintelligence - dimensionAssements[9],
            entrepriseintelligence: degreebic.technology[0].entrepriseintelligence - dimensionAssements[10],
            facilityintelligence: degreebic.technology[0].facilityintelligence - dimensionAssements[11],
        };

        const organization = {
            workforcelearninganddevelopment: degreebic.organization[0].workforcelearninganddevelopment - dimensionAssements[12],
            leadershipcompetency: degreebic.organization[0].leadershipcompetency - dimensionAssements[13],
            interandintracompanycollaboration: degreebic.organization[0].interandintracompanycollaboration - dimensionAssements[14],
            strategyandgovernance: degreebic.organization[0].strategyandgovernance - dimensionAssements[15],
        };


        const bicresults = new Bicresultats({
            assessmentRecord,
            process: {
                verticalintegration: process.verticalintegration,
                horizontalintegration: process.horizontalintegration,
                integratedproductlifecycle: process.integratedproductlifecycle
            },
            technology: {
                shopfloorautomation: technology.shopfloorautomation,
                enterpriseautomation: technology.enterpriseautomation,
                facilityautomation: technology.facilityautomation,
                shopfloorconnectivity: technology.shopfloorconnectivity,
                entrepriseconnectivity: technology.entrepriseconnectivity,
                facilityconnectivity:technology.facilityconnectivity,
                shopfloorintelligence:technology.shopfloorintelligence,
                entrepriseintelligence: technology.entrepriseintelligence,
                facilityintelligence:technology.facilityintelligence,

            },
            organization: {
                workforcelearninganddevelopment: organization.workforcelearninganddevelopment,
                leadershipcompetency: organization.leadershipcompetency,
                interandintracompanycollaboration: organization.interandintracompanycollaboration,
                strategyandgovernance: organization.strategyandgovernance
            },
        });


        await bicresults.save();
        res.status(201).json({ message: 'Kpicategorie and kpi results and bicresulats  created successfully' });
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
