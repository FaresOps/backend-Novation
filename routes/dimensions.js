const { Dimension } = require('../models/dimension');
const express = require('express');
const verifyToken = require('../verifytoken');

const router = express.Router();

// creation new dimension (dimension database)
router.post('/create', verifyToken, async (req, res) => {
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
router.get('/list', verifyToken, async (req, res) => {
    const dimensionlist = await Dimension.find();
    if (!dimensionlist) {
        res.status(404).send({ message: 'No dimension Found' });
    }
    res.send(dimensionlist);
})

module.exports = router
