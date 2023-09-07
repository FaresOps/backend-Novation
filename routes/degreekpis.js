// Import required modules
const express = require('express');
const router = express.Router();
const { Degreekpi } = require('../models/degreekpi');

// Create a new Degreekpi entry
router.post('/create', async (req, res) => {
    try {
        // Extract data from the request body
        const { kpicategorie, process, technology, organization } = req.body;

        // Create a new Degreekpi instance
        const degreekpi = new Degreekpi({
            kpicategorie,
            process,
            technology,
            organization,
        });

        // Save the Degreekpi entry to the database
        await degreekpi.save();

        res.status(201).json({ message: 'Degreekpi created successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Get the count of Degreekpi entries
router.get('/count', async (req, res) => {
    try {
        // Use the `countDocuments` method to count the documents in the collection
        const count = await Degreekpi.countDocuments();

        res.status(200).json({ count });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Get a list of Degreekpi entries
router.get('/list', async (req, res) => {
    try {
        // Query the database to get all Degreekpi entries
        const degreekpiList = await Degreekpi.find();

        res.status(200).json(degreekpiList);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
