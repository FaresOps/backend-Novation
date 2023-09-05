const { Dimension } = require('../models/dimension');
const express = require('express');
const verifyToken = require('../verifytoken');

const router = express.Router();

// creation new dimension (dimension database)
router.post('/create', verifyToken, async (req, res) => {
    try {
        const existingDimension = await Dimension.findOne({ id: req.body._id });
        if (existingDimension) {
            let dimension = new Dimension({
                assessmentRecord: req.body.assessmentRecord,
                dimension: req.body.dimension,
                dimensionAssement: req.body.dimensionAssement,
                bandComment: req.body.bandComment,
            });
            await dimension.save()
            res.send('save dimention effectué avec succes!');
        }
    } catch (err) {
        console.log(err);
    }
});


//list of all dimensions
router.get('/list', verifyToken, async (req, res) => {
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
