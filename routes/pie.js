const { Company } = require('../models/company');
const express = require('express');
const verifyToken = require('../verifytoken');
const router = express.Router();

// Get variables for pie chart
router.get('/', async (req, res) => {
    try {
        const pieData = await Company.aggregate([
            {
                $group: {
                    _id: null,
                    totalexportcount: { $sum: { $cond: [{ $eq: ['$exportation', true] }, 1, 0] } },
                    nontotalexportcount: { $sum: { $cond: [{ $eq: ['$exportation', false] }, 1, 0] } },
                    multiprodcount: { $sum: { $cond: [{ $eq: ['$multiproduction', true] }, 1, 0] } },
                    uniqueprodcount: { $sum: { $cond: [{ $eq: ['$multiproduction', false] }, 1, 0] } }
                }
            }
        ]);

        if (!pieData || pieData.length === 0) {
            return res.status(404).json({ message: 'No data found' });
        }

        const response = pieData[0]; // Extract the result from the aggregation

        res.json(response);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while processing the data' });
    }
});

module.exports = router;
