const { Company } = require('../models/company');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        // Number cas valide
        const casvalide = await Company.countDocuments();

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

        //secteur d'activité graphs
        const conditionactivite = [
            { label: 'Tarnportation', query: { indusGroup: 'Tarnportation' } },
            { label: 'Chemical', query: { indusGroup: 'Chemical'  }},
            { label: 'Electronics', query: { indusGroup: 'Electronics'  }},
            { label: 'Energy', query: { indusGroup: 'Energy'  }},
            { label: 'Fast Moving Consumer Goods', query: { indusGroup: 'Fast Moving Consumer Goods'  }},
            { label: 'General Manufacturing', query: { indusGroup: 'General Manufacturing'  }},
            { label: 'Metal and Mining', query: { indusGroup: 'Metal and Mining'  }},
            { label: 'Advanced Manufacturing', query: { indusGroup: 'Advanced Manufacturing'  }},
            { label: 'Pharmaceuticals & Healthcare', query: { indusGroup: 'Pharmaceuticals & Healthcare'  }},
            { label: 'Paper', query: { indusGroup: 'Paper'  }},
            { label: 'Utilities', query: { indusGroup: 'Utilities'  }},
            { label: 'Textil, Leather, Apparels', query: { indusGroup: 'Textil, Leather, Apparels'  }},
        ];
        const secteurgraphe = await Promise.all(
            conditionactivite.map(async condition => {
                const count = await Company.countDocuments(condition.query);
                return { label: condition.label, count }
            })
        );

        // Send the response containing all the data
        res.json({
            casvalide,
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









module.exports = router
