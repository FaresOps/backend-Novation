const { Company } = require('../models/company');
const express = require('express');
const verifyToken = require('../verifytoken');
const router = express.Router();

// Create a new company without dimensions
router.post('/create', async (req, res) => {
    try {
        const existingCompany = await Company.findOne({ assessmentRecord: req.body.assessmentRecord });
        if (existingCompany) {
            return res.status(401).send('Company already exists');
        }

        const companyData = {
            assessmentRecord: req.body.assessmentRecord,
            companyName: req.body.companyName,
            bern: req.body.bern,
            address: req.body.address,
            multiproduction: req.body.multiproduction,
            exportation: req.body.exportation,
            dated: req.body.dated,
            indusGroup: req.body.indusGroup,
            income: req.body.income,
            size: req.body.size,
            factorysection: req.body.factorysection,
            preparedBy: req.body.preparedBy
        };

        const company = new Company(companyData);
        await company.save();

        res.status(201).json({ message: 'Company created successfully', companyId: company.companyId });
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

// Get a list of companies without dimensions
router.get('/list', async (req, res) => {
    try {
        const companies = await Company.find();
        if (!companies || companies.length === 0) {
            return res.status(404).send('Companies not found');
        }
        res.status(200).send(companies);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;
