const { Company } = require('../models/company');
const express = require('express');
// const verifyToken = require('../verifytoken');
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
            preparedBy: req.body.preparedBy,
            advancement: req.body.advancement
        };

        const company = new Company(companyData);
        await company.save();

        res.status(201).json({ message: 'Company created successfully', assessmentRecord: company.assessmentRecord });
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error' + err);
    }
});


router.put('/update/:id', async (req, res) => {
    try {
  
        const company = await Company.findOne({ assessmentRecord: req.params.id });

        if (!company) {
            return res.status(404).send('Company not found');
        }
        company.advancement = (company.advancement || 0) + 6.75;
        await company.save();

        res.status(200).send('Company advancement updated successfully');
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

// Get a list of companies without dimensions
router.get('/element/:assessmentRecord', async (req, res) => {
    try {
        const companyAssessement = req.params.assessmentRecord;

        // Use the findById method to find the company by its ID
        const company = await Company.findOne({ assessmentRecord: companyAssessement });

        if (!company) {
            // If the company with the specified ID is not found, return a 404 response
            res.status(404).send('Company not found');
        } else {
            // If the company is found, return it in the response
            res.status(200).send(company);
        }
    } catch (error) {
        // Handle any potential errors here
        console.error(error);
        res.status(500).send('Internal Server Error');
    }

});
router.get('/list', async (req, res) => {
    try {
        const { preparedBy, indusGroup } = req.query;

        let filter = {};

        if (preparedBy) {
            filter.preparedBy = preparedBy;
        }

        if (indusGroup) {
            filter.indusGroup = indusGroup;
        }
        const companies = await Company.find(filter);
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
