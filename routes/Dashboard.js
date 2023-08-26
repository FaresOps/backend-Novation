const { Company } = require('../models/company');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        // Number cas valide
        const casvalide = await Company.countDocuments();

        // graphe income
        const conditionsincome = [
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
        const transportationcount = await Company.countDocuments({ indusGroup: 'Tarnportation' });
        const chemicalcount = await Company.countDocuments({ indusGroup: 'Chemical' });
        const electronicscount = await Company.countDocuments({ indusGroup: 'Electronics' });
        const energycount = await Company.countDocuments({ indusGroup: 'Energy' });
        const fastmovingconsumergoods = await Company.countDocuments({ indusGroup: 'Fast Moving Consumer Goods' });
        const generalmanufacturingcount = await Company.countDocuments({ indusGroup: 'General Manufacturing' });
        const metalandminingcount = await Company.countDocuments({ indusGroup: 'Metal and Mining' });
        const advancedmanfacturingcount = await Company.countDocuments({ indusGroup: 'Advanced Manufacturing' });
        const pharmaceuticalsandhealthcarecount = await Company.countDocuments({ indusGroup: 'Pharmaceuticals & Healthcare' });
        const papercount = await Company.countDocuments({ indusGroup: 'Paper' });
        const utilitiescount = await Company.countDocuments({ indusGroup: 'Utilities' });
        const textilandleatherandapperels = await Company.countDocuments({ indusGroup: 'Textil, Leather, Apparels' });

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
