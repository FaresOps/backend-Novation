const { Annualrevenue } = require('../models/annualrevenue');
const { Company } = require('../models/company');
const { Anualrevcost } = require('../models/resultats/anualrevcost'); //
const express = require('express');
const router = express.Router();

// Create new Annualrevenue without dimension
router.post('/create', async (req, res) => {
    try {
        // Validate input data (ensure all required fields are present)
        const requiredFields = [
            'assessmentRecord',
            'aftermarketservices',
            'depreciation',
            'labour',
            'maintenanceandrepair',
            'rawmaterialandConsumable',
            'researchandDevelopment',
            'rentalOperatingLease',
            'sellinggeneralexpenses',
            'transportationandDistribution',
            'utilities'
        ];
        const existingCompany = await Company.findOne({ assessmentRecord: req.body.assessmentRecord });
        if (existingCompany) {
            const annualrevenue = new Annualrevenue(req.body);
            await annualrevenue.save();
            const element1 = (req.body.aftermarketservices / 100) * 0 +
                (req.body.depreciation / 100) * 1 +
                (req.body.labour / 100) * 3 +
                (req.body.maintenanceandrepair / 100) * 3 +
                (req.body.rawmaterialandConsumable / 100) * 3 +
                (req.body.researchandDevelopment / 100) * 1 +
                (req.body.rentalOperatingLease / 100) * 1 +
                (req.body.sellinggeneralexpenses / 100) * 1 +
                (req.body.transportationandDistribution / 100) * 0 +
                (req.body.utilities / 100) * 1

            const element2 = (req.body.aftermarketservices / 100) * 1 +
                (req.body.depreciation / 100) * 0 +
                (req.body.labour / 100) * 0 +
                (req.body.maintenanceandrepair / 100) * 1 +
                (req.body.rawmaterialandConsumable / 100) * 3 +
                (req.body.researchandDevelopment / 100) * 1 +
                (req.body.rentalOperatingLease / 100) * 1 +
                (req.body.sellinggeneralexpenses / 100) * 3 +
                (req.body.transportationandDistribution / 100) * 3 +
                (req.body.utilities / 100) * 1
            const element3 = (req.body.aftermarketservices / 100) * 3 +
                (req.body.depreciation / 100) * 0 +
                (req.body.labour / 100) * 0 +
                (req.body.maintenanceandrepair / 100) * 1 +
                (req.body.rawmaterialandConsumable / 100) * 3 +
                (req.body.researchandDevelopment / 100) * 1 +
                (req.body.rentalOperatingLease / 100) * 1 +
                (req.body.sellinggeneralexpenses / 100) * 3 +
                (req.body.transportationandDistribution / 100) * 3 +
                (req.body.utilities / 100) * 1
            const element4 = (req.body.aftermarketservices / 100) * 0 +
                (req.body.depreciation / 100) * 0 +
                (req.body.labour / 100) * 3 +
                (req.body.maintenanceandrepair / 100) * 1 +
                (req.body.rawmaterialandConsumable / 100) * 1 +
                (req.body.researchandDevelopment / 100) * 1 +
                (req.body.rentalOperatingLease / 100) * 0 +
                (req.body.sellinggeneralexpenses / 100) * 0 +
                (req.body.transportationandDistribution / 100) * 0 +
                (req.body.utilities / 100) * 1


            const element5 = (req.body.aftermarketservices / 100) * 3 +
                (req.body.depreciation / 100) * 0 +
                (req.body.labour / 100) * 0 +
                (req.body.maintenanceandrepair / 100) * 1 +
                (req.body.rawmaterialandConsumable / 100) * 1 +
                (req.body.researchandDevelopment / 100) * 0 +
                (req.body.rentalOperatingLease / 100) * 3 +
                (req.body.sellinggeneralexpenses / 100) * 1 +
                (req.body.transportationandDistribution / 100) * 0 +
                (req.body.utilities / 100) * 0


            const element6 = (req.body.aftermarketservices / 100) * 0 +
                (req.body.depreciation / 100) * 0 +
                (req.body.labour / 100) * 3 +
                (req.body.maintenanceandrepair / 100) * 1 +
                (req.body.rawmaterialandConsumable / 100) * 1 +
                (req.body.researchandDevelopment / 100) * 1 +
                (req.body.rentalOperatingLease / 100) * 0 +
                (req.body.sellinggeneralexpenses / 100) * 0 +
                (req.body.transportationandDistribution / 100) * 0 +
                (req.body.utilities / 100) * 3


            const element7 = (req.body.aftermarketservices / 100) * 0 +
                (req.body.depreciation / 100) * 1 +
                (req.body.labour / 100) * 1 +
                (req.body.maintenanceandrepair / 100) * 1 +
                (req.body.rawmaterialandConsumable / 100) * 1 +
                (req.body.researchandDevelopment / 100) * 1 +
                (req.body.rentalOperatingLease / 100) * 0 +
                (req.body.sellinggeneralexpenses / 100) * 0 +
                (req.body.transportationandDistribution / 100) * 0 +
                (req.body.utilities / 100) * 1

            const element8 = (req.body.aftermarketservices / 100) * 1 +
                (req.body.depreciation / 100) * 0 +
                (req.body.labour / 100) * 0 +
                (req.body.maintenanceandrepair / 100) * 1 +
                (req.body.rawmaterialandConsumable / 100) * 1 +
                (req.body.researchandDevelopment / 100) * 1 +
                (req.body.rentalOperatingLease / 100) * 1 +
                (req.body.sellinggeneralexpenses / 100) * 1 +
                (req.body.transportationandDistribution / 100) * 1 +
                (req.body.utilities / 100) * 1



            const element9 = (req.body.aftermarketservices / 100) * 0 +
                (req.body.depreciation / 100) * 1 +
                (req.body.labour / 100) * 1 +
                (req.body.maintenanceandrepair / 100) * 1 +
                (req.body.rawmaterialandConsumable / 100) * 1 +
                (req.body.researchandDevelopment / 100) * 1 +
                (req.body.rentalOperatingLease / 100) * 0 +
                (req.body.sellinggeneralexpenses / 100) * 0 +
                (req.body.transportationandDistribution / 100) * 0 +
                (req.body.utilities / 100) * 1

            const element10 = (req.body.aftermarketservices / 100) * 0 +
                (req.body.depreciation / 100) * 1 +
                (req.body.labour / 100) * 3 +
                (req.body.maintenanceandrepair / 100) * 3 +
                (req.body.rawmaterialandConsumable / 100) * 3 +
                (req.body.researchandDevelopment / 100) * 1 +
                (req.body.rentalOperatingLease / 100) * 0 +
                (req.body.sellinggeneralexpenses / 100) * 0 +
                (req.body.transportationandDistribution / 100) * 0 +
                (req.body.utilities / 100) * 1

            const element11 = (req.body.aftermarketservices / 100) * 3 +
                (req.body.depreciation / 100) * 0 +
                (req.body.labour / 100) * 0 +
                (req.body.maintenanceandrepair / 100) * 1 +
                (req.body.rawmaterialandConsumable / 100) * 3 +
                (req.body.researchandDevelopment / 100) * 1 +
                (req.body.rentalOperatingLease / 100) * 3 +
                (req.body.sellinggeneralexpenses / 100) * 3 +
                (req.body.transportationandDistribution / 100) * 3 +
                (req.body.utilities / 100) * 1


            const element12 = (req.body.aftermarketservices / 100) * 0 +
                (req.body.depreciation / 100) * 1 +
                (req.body.labour / 100) * 3 +
                (req.body.maintenanceandrepair / 100) * 3 +
                (req.body.rawmaterialandConsumable / 100) * 1 +
                (req.body.researchandDevelopment / 100) * 1 +
                (req.body.rentalOperatingLease / 100) * 0 +
                (req.body.sellinggeneralexpenses / 100) * 0 +
                (req.body.transportationandDistribution / 100) * 0 +
                (req.body.utilities / 100) * 3


            const element13 = (req.body.aftermarketservices / 100) * 1 +
                (req.body.depreciation / 100) * 0 +
                (req.body.labour / 100) * 3 +
                (req.body.maintenanceandrepair / 100) * 3 +
                (req.body.rawmaterialandConsumable / 100) * 0 +
                (req.body.researchandDevelopment / 100) * 0 +
                (req.body.rentalOperatingLease / 100) * 3 +
                (req.body.sellinggeneralexpenses / 100) * 3 +
                (req.body.transportationandDistribution / 100) * 1 +
                (req.body.utilities / 100) * 0


            const element14 = (req.body.aftermarketservices / 100) * 1 +
                (req.body.depreciation / 100) * 1 +
                (req.body.labour / 100) * 3 +
                (req.body.maintenanceandrepair / 100) * 1 +
                (req.body.rawmaterialandConsumable / 100) * 1 +
                (req.body.researchandDevelopment / 100) * 1 +
                (req.body.rentalOperatingLease / 100) * 1 +
                (req.body.sellinggeneralexpenses / 100) * 3 +
                (req.body.transportationandDistribution / 100) * 1 +
                (req.body.utilities / 100) * 1


            const element15 = (req.body.aftermarketservices / 100) * 1 +
                (req.body.depreciation / 100) * 0 +
                (req.body.labour / 100) * 3 +
                (req.body.maintenanceandrepair / 100) * 1 +
                (req.body.rawmaterialandConsumable / 100) * 1 +
                (req.body.researchandDevelopment / 100) * 0 +
                (req.body.rentalOperatingLease / 100) * 3 +
                (req.body.sellinggeneralexpenses / 100) * 3 +
                (req.body.transportationandDistribution / 100) * 3 +
                (req.body.utilities / 100) * 0


            const element16 = (req.body.aftermarketservices / 100) * 1 +
                (req.body.depreciation / 100) * 1 +
                (req.body.labour / 100) * 3 +
                (req.body.maintenanceandrepair / 100) * 1 +
                (req.body.rawmaterialandConsumable / 100) * 1 +
                (req.body.researchandDevelopment / 100) * 1 +
                (req.body.rentalOperatingLease / 100) * 3 +
                (req.body.sellinggeneralexpenses / 100) * 3 +
                (req.body.transportationandDistribution / 100) * 1 +
                (req.body.utilities / 100) * 0

            const anualrevcost = new Anualrevcost({
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
            await anualrevcost.save();
            res.status(201).json({ message: 'Company Annualrevenue and Anualrevcost created successfully' });
        } else {
            res.status(404).json({ error: 'Company not found' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;