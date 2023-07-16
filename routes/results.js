const { Result } = require('../models/result');
const express = require('express');
const router = express.Router();

// show result from result data base
router.get('/:id', async (req, res) => {
    const result = await Result.findById(req.params.id);

    if (!result) {
        res.status(500).json({
            success: false
        })
    }
    res.status(200).send(result);
})



module.exports = router