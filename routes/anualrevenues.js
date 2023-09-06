const { Annualrevenue } = require('../models/annualrevenue');
const { Company } = require('../models/company');
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

        for (const field of requiredFields) {
            if (!req.body[field]) {
                return res.status(400).json({ error: `Missing ${field} field.` });
            }
        }

        const existingCompany = await Company.findOne({ assessmentRecord: req.body.assessmentRecord });
        if (existingCompany) {
            const annualrevenue = new Annualrevenue(req.body);
            await annualrevenue.save();
            res.status(201).json({ message: 'Company Annualrevenue created successfully' });
        } else {
            res.status(404).json({ error: 'Company not found' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;



// {
//     "assessmentRecord": "PQ9456",
//     "companyName": "GreenEco Solutions",
//     "bern": "876543",
//     "address": "456 Maple Lane",
//     "dated": "2023-06-26",
//     "indusGroup": "General Manufacturing",
//     "income": 7000000,
//     "size": 140,
//     "exportation": true,
//     "multiproduction": false,
//     "factorysection": "whole company",
//     "preparedBy": "ayoub magherbi"
// }