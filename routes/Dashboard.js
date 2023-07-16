const { Company } = require('../models/company');
const express = require('express');
const router = express.Router();


router.get('/', async (req, res) => {

    // Number cas valide
    const casvalide = await Company.countDocuments();

    res.json({ casvalide });
    // graphe income
    const conditionsincome = [
        { label: 'Less than 1000', query: { income: { $lt: 1000 } } },
        { label: 'Between 1000 and 10000', query: { income: { $gte: 1000, $lte: 10000 } } },
        { label: 'Between 10000 and 50000', query: { income: { $gt: 10000, $lte: 50000 } } },
        { label: 'Between 50000 and 100000', query: { income: { $gt: 50000, $lte: 100000 } } },
        { label: 'More than 100000', query: { income: { $gt: 100000 } } }
    ];
    const incomegraph = await Promise.all(
        conditionsincome.map(async condition => {
            const count = await Company.countDocuments(condition.query);
            return { label: conditionsincome.label, count };
        })
    );
    res.json({ incomegraph });
    // graphe size
    const conditionssize = [
        { label: 'Less than 10', query: { size: { $lt: 10 } } },
        { label: 'Between 10 and 100', query: { size: { $gte: 10, $lte: 100 } } },
        { label: 'Between 100 and 500', query: { size: { $gt: 100, $lte: 500 } } },
        { label: 'Between 500 and 1000', query: { size: { $gt: 500, $lte: 1000 } } },
        { label: 'More than 1000', query: { size: { $gt: 1000 } } }
    ];
    const sizegraphe = await Promise.all(
        conditionssize.map(async condition => {
            const count = await Company.countDocuments(condition.query);
            return { label: conditionssize.label, count }
        })
    )
    res.json({ sizegraphe });
    //graphe exportatrice
    const totalexportcount = await Company.countDocuments({ exportation: true });
    const nontotalexportcount = await Company.countDocuments({ exportation: false });


    res.json({ totalexportcount, nontotalexportcount });

    // graphe de production
    const multiprodcount = await Company.countDocuments({ multiproduction: true });
    const uniqueprodcount = await Company.countDocuments({ multiproduction: false });

    res.json({ multiprodcount, uniqueprodcount });


    // if (!casvalide) {
    //     console.error(error);
    //     res.status(500).json({ error: 'An error occurred while counting the documents' });
    // }

})









module.exports = router