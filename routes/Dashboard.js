const { Company } = require('../models/company');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        // Number cas valide
        const casvalide = await Company.countDocuments();
        // graphe income
        const conditionsincome = [
            { label: '< 1', query: { income: { $lt: 1000 } } },
            { label: '[1, 10]', query: { income: { $gte: 1000, $lte: 10000 } } },
            { label: '[10, 50]', query: { income: { $gt: 10000, $lte: 50000 } } },
            { label: '[50, 100]', query: { income: { $gt: 50000, $lte: 100000 } } },
            { label: '> 100', query: { income: { $gt: 100000 } } }
        ];
        const incomegraph = await Promise.all(
            conditionsincome.map(async condition => {
                const count = await Company.countDocuments(condition.query);
                return { label: condition.label, count };
            })
        );
        // graphe size
        const conditionssize = [
            { label: '< 10', query: { size: { $lt: 10 } } },
            { label: '[10, 100]', query: { size: { $gte: 10, $lte: 100 } } },
            { label: '[100, 500]', query: { size: { $gt: 100, $lte: 500 } } },
            { label: '[500, 1000]', query: { size: { $gt: 500, $lte: 1000 } } },
            { label: '> 1000', query: { size: { $gt: 1000 } } }
        ];
        const sizegraphe = await Promise.all(
            conditionssize.map(async condition => {
                const count = await Company.countDocuments(condition.query);
                return { label: condition.label, count }
            })
        );
        //graphe exportatrice
        const totalexportcount = await Company.countDocuments({ exportation: true });
        const nontotalexportcount = await Company.countDocuments({ exportation: false });

        // graphe de production
        const multiprodcount = await Company.countDocuments({ multiproduction: true });
        const uniqueprodcount = await Company.countDocuments({ multiproduction: false });

        // Send the response containing all the data
        res.json({
            casvalide,
            incomegraph,
            sizegraphe,
            totalexportcount,
            nontotalexportcount,
            multiprodcount,
            uniqueprodcount
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while processing the data' });
    }
});









module.exports = router
