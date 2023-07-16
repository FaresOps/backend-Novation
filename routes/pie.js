const { Company } = require('../models/company');
const express = require('express');
const router = express.Router();

//get variables for graphe pie
router.get('/', async (req, res) => {

    const totalexportcount = await Company.countDocuments({ exportation: true });
    const nontotalexportcount = await Company.countDocuments({ exportation: false });
    const multiprodcount = await Company.countDocuments({ multiproduction: true });
    const uniqueprodcount = await Company.countDocuments({ multiproduction: false });
    if (!totalexportcount && !nontotalexportcount && !multiprodcount && !uniqueprodcount) {
        res.status(404).send({ message: 'No totalexportcount found' });
    }
    res.json({ totalexportcount, nontotalexportcount });
    res.json({ multiprodcount, uniqueprodcount });
})


module.exports = router