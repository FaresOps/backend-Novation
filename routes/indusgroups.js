const { IndusGroup } = require('../models/indusgroup');
const express = require('express');
const verifyToken = require('../verifytoken');
const router = express.Router();

// create industrie groupe 

router.post('/create', async (req, res) => {
    try {
        let indusgroup = new IndusGroup({
            indusName: req.body.indusName
        });
        await indusgroup.save();
        res.send('indusgroup saved successfully')
    } catch (err) {
        console.log(err);
    }
})


//get all list of industries groupe
router.get('/list', async (req, res) => {
    const induslist = await IndusGroup.find();
    if (!induslist) {
        res.status(404).send({ message: 'No indusgroup found' });
    }
    res.send(induslist);
})


module.exports = router
