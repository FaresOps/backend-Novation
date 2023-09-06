const { Company } = require('../models/company');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const casvalide = await Company.countDocuments();

        // Number cas valide
        const pipeline = [
            {
                $group: {
                    _id: '$assessmentRecord',
                    count: { $sum: 1 }
                }
            },
            {
                $match: {
                    count: { $lt: 16 }
                }
            },
            {
                $count: 'casnonvalide'
            }
        ];

        const casnonvalideResult = await Company.aggregate(pipeline);
        const casnonvalide = casnonvalideResult.length > 0 ? casnonvalideResult[0].casnonvalide : 0;

        // graphe income
        const incomePipeline = [
            {
                $bucket: {
                    groupBy: '$income',
                    boundaries: [0, 1000, 10000, 50000, 100000, Infinity],
                    default: 'Other',
                    output: {
                        count: { $sum: 1 }
                    }
                }
            }
        ];

        const incomegraph = await Company.aggregate(incomePipeline);

        // graphe size
        const sizePipeline = [
            {
                $bucket: {
                    groupBy: '$size',
                    boundaries: [0, 10, 100, 500, 1000, Infinity],
                    default: 'Other',
                    output: {
                        count: { $sum: 1 }
                    }
                }
            }
        ];

        const sizegraphe = await Company.aggregate(sizePipeline);

        // graphe exportatrice
        const totalexportcount = await Company.countDocuments({ exportation: true });
        const nontotalexportcount = casvalide - totalexportcount;

        // graphe de production
        const multiprodcount = await Company.countDocuments({ multiproduction: true });
        const uniqueprodcount = casvalide - multiprodcount;

        // secteur d'activité graphs
        const conditionactivite = [
            'Transportation',
            'Chemical',
            'Electronics',
            'Energy',
            'Fast Moving Consumer Goods',
            'General Manufacturing',
            'Metal and Mining',
            'Advanced Manufacturing',
            'Pharmaceuticals & Healthcare',
            'Paper',
            'Utilities',
            'Textil, Leather, Apparels'
        ];

        const secteurgraphe = await Promise.all(
            conditionactivite.map(async condition => {
                const count = await Company.countDocuments({ indusGroup: condition });
                return { label: condition, count };
            })
        );

        // Send the response containing all the data
        res.json({
            casvalide,
            casnonvalide,
            incomegraph,
            sizegraphe,
            totalexportcount,
            nontotalexportcount,
            multiprodcount,
            uniqueprodcount,
            secteurgraphe
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while processing the data' });
    }
});

module.exports = router;
