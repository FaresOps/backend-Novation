const { Company } = require('../models/company');
const express = require('express');
const verifyToken = require('../verifytoken');
const router = express.Router();

// create new company with out dimension
router.post('/create', async (req, res) => {
    try {
        const existingCompany = await Company.findOne({ assessmentRecord: req.body.assessmentRecord });
        if (existingCompany) {
            return res.status(401).send('Company already exists');
        }
        let company = new Company({
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
        });
        await company.save();
        res.send({ "message": 'Company created successfully', "companyId": company.companyId })
    } catch (err) {
        console.log(err);
    }
});


//get all companies without deminsions
router.get('/list', async (req, res) => {
    const company = await Company.find();
    if (!company) {
        res.status(404).send('Company not found');
    }
    res.status(200).send(company);
})




module.exports = router


