const {Dimension} = require('../models/dimension');
const express = require('express');
const router = express.Router();

// creation new dimension (dimension database)
router.post('/create', async (req, res) => {
    try {
        let dimension = new Dimension({
            index: req.body.index,
            dimension: req.body.dimension,
            dimensionAssement: req.body.dimensionAssement,
            bandName: req.body.bandName,
            bandComment: req.body.bandComment,
            definitions: req.body.definitions,
            description: req.body.description
        });
        await dimension.save()
        res.send('save dimention effectué avec succes!');
    } catch (err) {
        console.log(err);
    }
});


//list of all dimensions
router.get('/list', async (req, res) => {
    const dimensionlist = await Dimension.find();
    if (!dimensionlist) {
        res.status(404).send({ message: 'No dimension Found' });
    }
    res.send(dimensionlist);
})

module.exports = router


// {
//     "index": "Process",
//     "dimension": "operations",
//     "dimensionAssement": "Vertical Integration",
//     "bandName": "Undefined",
//     "bandComment": "0",
//     "definitions" : " Vertical processes are not explicitly defined.",
//     "description":"Resource planning and technical production processes are managed and executed in silos, based on informal or ad-hoc methods."
// }