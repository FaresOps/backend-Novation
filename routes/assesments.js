const { Assesment } = require('../models/assesment');
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
        let assesment = new Assesment({
            assessmentRecord: req.body.assessmentRecord,
            index: req.body.index,
            dimension: req.body.dimension,
            dimensionAssement: req.body.dimensionAssement,
            bandName: req.body.bandName,
            bandComment: req.body.bandComment,
            definitions: req.body.definitions,
            description: req.body.description
        });
        await assesment.save();
        res.send('Company dimension successfully')
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
    res.send(company);
})




module.exports = router