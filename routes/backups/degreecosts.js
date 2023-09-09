const express = require('express');
const router = express.Router();
const { Degreecost } = require('../models/backups/degreecost');

// Create a new Degreecost entry
router.post('/create', async (req, res) => {
    try {
        // Extract data from the request body
        const { costcategorie, process, technology, organization } = req.body;

        // Create a new Degreecost instance
        const degreecost = new Degreecost({
            costcategorie,
            process,
            technology,
            organization,
        });

        // Save the Degreecost entry to the database
        await degreecost.save();

        res.status(201).json({ message: 'Degreecost created successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.get('/list', async (req, res) => {
    try {
        // Query the database to get all Degreecost entries
        const degreecosts = await Degreecost.find();

        res.status(200).json(degreecosts);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.delete('/delete-all', async (req, res) => {
    try {
        // Delete all Degreecost entries from the database
        await Degreecost.deleteMany({});

        res.status(200).json({ message: 'All Degreecost entries deleted successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
});
router.get('/count', async (req, res) => {
    try {
        // Use the `countDocuments` method to count the documents in the collection
        const count = await Degreecost.countDocuments();

        res.status(200).json({ count });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
});





module.exports = router;
