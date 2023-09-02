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
        await contact.save()
        res.send('save team effectué avec succes!');           
    } catch (err) {
        console.log(err);
    }
});


router.get('/', async (req, res) => {
    const teamlist = await Team.find();
    if (!teamlist) {
        res.status(404).send({ message: 'No team found' });
    }
    res.send(teamlist);
})

module.exports = router
