const { Team } = require('../models/team');
const express = require('express');
const router = express.Router();


router.post('/create', async (req, res) => {
    try {
        let team = new Team({
            name: req.body.name,
            age: req.body.age,
            mobileNumber: req.body.mobileNumber,
            email: req.body.email,
        });
        await team.save()
        res.send('save team effectué avec succes!');
    } catch (err) {
        console.log(err);
    }
});

// this test

router.get('/list', async (req, res) => {
    try {
        const teamlist = await Team.find();
        if (!teamlist) {
            res.status(404).send({ message: 'No teams found' });
        } else {
            res.send(teamlist);
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while fetching teams' });
    }
});



module.exports = router
