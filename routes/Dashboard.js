const { Company } = require('../models/company');
const express = require('express');
const NodeCache = require('node-cache');
const router = express.Router();


const cache = new NodeCache({ stdTTL: 300 });


router.get('/', async (req, res) => {
    try {

        const cachedData = cache.get('cachedData');
        if (cachedData) {
            console.log('Using cached data');
            return res.json(cachedData);
        }

        // Count the total number of documents
        const casvalide = await Company.countDocuments();
        const casnonvalide = await Company.countDocuments({ advancement: { $lt: 100 } });

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

        // Execute aggregation pipelines concurrently
        const [incomegraph, sizegraphe] = await Promise.all([
            Company.aggregate(incomePipeline),
            Company.aggregate(sizePipeline)
        ]);

        // Count the total number of exportation and multiproduction cases
        const [totalexportcount, multiprodcount] = await Promise.all([
            Company.countDocuments({ exportation: true }),
            Company.countDocuments({ multiproduction: true })
        ]);

        // Calculate non-total export and unique production counts
        const nontotalexportcount = casvalide - totalexportcount;
        const uniqueprodcount = casvalide - multiprodcount;

        // Define conditions for sector activity graphs
        const conditionactivite = [
            'Aerospace',
            'Automotive',
            'Electronics',
            'Energy & Chemical (Downstream)',
            'Food & Beverages',
            'General Manufacturing',
            'Logistics',
            'Machinery & Equipment',
            'Medical Technology',
            'Oil & Gas',
            'Pharmaceuticals',
            'Precision Instruments',
            'Textile, Clothing, Leather & Footwear',
            'Semiconductors'
        ];

        // Execute queries for sector activity graphs concurrently
        const secteurgraphe = await Promise.all(
            conditionactivite.map(async condition => {
                const count = await Company.countDocuments({ indusGroup: condition });
                return { label: condition, count };
            })
        );

        cache.set('cachedData', {
            casvalide,
            casnonvalide,
            incomegraph,
            sizegraphe,
            totalexportcount,
            nontotalexportcount,
            multiprodcount,
            uniqueprodcount,
            secteurgraphe,
        });

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
            secteurgraphe,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while processing the data' });
    }
});

module.exports = router;
