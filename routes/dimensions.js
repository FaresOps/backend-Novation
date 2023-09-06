const { Dimension } = require('../models/dimension');
const express = require('express');
const verifyToken = require('../verifytoken');

const router = express.Router();

// Create a new dimension (dimension database)
router.post('/create', verifyToken, async (req, res) => {
    try {
        const existingDimension = await Dimension.findOne({ _id: req.body._id });
        if (existingDimension) {
            return res.status(401).send('Dimension already exists');
        }

        const dimension = new Dimension({
            assessmentRecord: req.body.assessmentRecord,
            dimension: req.body.dimension,
            dimensionAssement: req.body.dimensionAssement,
            bandComment: req.body.bandComment,
        });

        await dimension.save();
        res.send('Dimension saved successfully!');
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

// List all dimensions
router.get('/list', verifyToken, async (req, res) => {
    try {
        const dimensionList = await Dimension.find();
        if (!dimensionList || dimensionList.length === 0) {
            return res.status(404).send({ message: 'No dimensions found' });
        }
        res.send(dimensionList);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;
