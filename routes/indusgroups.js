const { IndusGroup } = require('../models/indusgroup');
const express = require('express');
const verifyToken = require('../verifytoken');
const router = express.Router();

// Create an industry group
router.post('/create', async (req, res) => {
    try {
        const indusgroup = new IndusGroup({
            indusName: req.body.indusName
        });
        await indusgroup.save();
        res.status(201).send('Industry group saved successfully');
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

// Get a list of all industry groups
router.get('/list', async (req, res) => {
    try {
        const induslist = await IndusGroup.find();
        if (!induslist || induslist.length === 0) {
            return res.status(404).send({ message: 'No industry groups found' });
        }
        res.send(induslist);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;
