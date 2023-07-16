const { Scope } = require('../models/scope');
const express = require('express');
const router = express.Router();



//create scope(date of assesments)
router.post('/create', async (req, res) => {
    try {
        let scope = new Scope({
            assessmentRecord: req.body.assessmentRecord,
            dateOfOnboarding: req.body.dateOfOnboarding,
            dateOfEvaluation: req.body.dateOfEvaluation,
            dateOfDebrief: req.body.dateOfDebrief,
        });
        await scope.save()
        res.send('save etudiant effectué avec succes!');
    } catch (err) {
        console.log(err);
    }
});


//get scope of assements for company by ID
router.get('/:id', async (req, res) => {
    const scope = await Scope.findById(req.params.id);

    if (!scope) {
        res.status(500).json({
            success: false
        })
    }
    res.status(200).send(scope);
})


module.exports = router