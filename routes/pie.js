const { Company } = require('../models/company');
const express = require('express');
const verifyToken = require('../verifytoken');
const router = express.Router();

//get variables for graphe pie
router.get('/',verifyToken, async (req, res) => {
    try {
        const totalexportcount = await Company.countDocuments({ exportation: true });
        const nontotalexportcount = await Company.countDocuments({ exportation: false });
        const multiprodcount = await Company.countDocuments({ multiproduction: true });
        const uniqueprodcount = await Company.countDocuments({ multiproduction: false });

        if (totalexportcount === 0 && nontotalexportcount === 0 && multiprodcount === 0 && uniqueprodcount === 0) {
            return res.status(404).json({ message: 'No data found' });
        }

        const response = {
            totalexportcount,
            nontotalexportcount,
            multiprodcount,
            uniqueprodcount
        };

        res.json(response);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while processing the data' });
    }
});

module.exports = router
