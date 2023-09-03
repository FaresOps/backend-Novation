const { Company } = require('../models/company');
const { Dimension } = require('../models/dimension');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        // Number cas valide
        const casvalide = await Company.countDocuments();

        const records = await Company.find({}, 'assessmentRecord');
        const assessmentRecordsList = records.map(item => item.assessmentRecord);
        let casnonvalide = 0;

        for (const RecordsList of assessmentRecordsList) {
            const nameCount = await Company.countDocuments({ assessmentRecord: RecordsList });

            if (nameCount < 16) {
                casnonvalide++;
            }
        }


        // graphe income
        const conditionsincountCompany =[
            { label: '<1', query: { income: { $lt: 1000 } } },
            { label: '[1.10]', query: { income: { $gte: 1000, $lte: 10000 } } },
            { label: '10.50', query: { income: { $gt: 10000, $lte: 50000 } } },
            { label: '50,1000', query: { income: { $gt: 50000, $lte: 100000 } } },
            { label: '>1000', query: { income: { $gt: 100000 } } }
        ];
        const incomegraph = await Promise.all(
            conditionsincome.map(async condition => {
                const count = await Company.countDocuments(condition.query);
                return { label: condition.label, count };
            })
        );
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










module.exports = router
