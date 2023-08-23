const { Company } = require('../models/company');
const express = require('express');
const router = express.Router();

// create new company with out dimension
router.post('/create', async (req, res) => {
    try {
        const existingCompany = await Company.findOne({ companyName: req.body.companyName });
        if (existingCompany) {
            return res.send('Company already exists');
        }
        let company = new Company({
            assessmentRecord: req.body.assessmentRecord,
            companyName: req.body.companyName,
            bern: req.body.bern,
            address: req.body.address,
            dated: req.body.dated,
            indusGroup: req.body.indusGroup,
            income: req.body.income,
            size: req.body.size,
            preparedBy: req.body.preparedBy,
            exportation : req.body.exportation,
            multiproduction : req.body.multiproduction
        });
        await company.save();
        res.send('Company created successfully')
    } catch (err) {
        console.log(err);
    }
});


//get all companies without deminsions
router.get('/list', async (req, res) => {
        const userId = req.query.userId;
        const industryId = req.query.indusGroup;

        let query = { preparedBy: userId };

        if (industryId) {
            query.indusGroup = industryId;
        }
        console.log(query);
    const company = await Company.find(query);
    if (!company) {
        res.status(404).send('Company not found');
    }
    res.status(200).send(company);
})




module.exports = router