const express = require('express');
const router = express.Router();
const Degreebic = require('../../models/backups/degreebic');

// Create a new Degreebic entry
router.post('/create', async (req, res) => {
    try {
        // Extract data from the request body
        const { biccategorie, process, technology, organization } = req.body;

        // Create a new Degreebic instance
        const degreebic = new Degreebic({
            biccategorie,
            process,
            technology,
            organization,
        });

        // Save the Degreebic entry to the database
        await degreebic.save();

        res.status(201).json({ message: 'Degreebic created successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.get('/all', async (req, res) => {
    try {
        // Query the database to get all Degreebic entries
        const degreebics = await Degreebic.find();

        res.status(200).json(degreebics);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.delete('/all', async (req, res) => {
    try {
        // Delete all Degreebic entries from the database
        await Degreebic.deleteMany({});

        res.status(200).json({ message: 'All Degreebic entries deleted successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
});


router.get('/count', async (req, res) => {
    try {
        const degreebicCount = await Degreebic.countDocuments();
        res.status(200).json({ count: degreebicCount });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
