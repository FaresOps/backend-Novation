const { Contact } = require('../models/contact');
const { Company } = require('../models/company');
const express = require('express');
const router = express.Router();

// Create a contact
router.post('/create', async (req, res) => {
    try {
        const existingCompany = await Company.findOne({ assessmentRecord: req.body.assessmentRecord });
        if (!existingCompany) {
            return res.status(404).send('Company not found');
        }

        const contact = new Contact({
            assessmentRecord: req.body.assessmentRecord,
            companyName: req.body.companyName,
            title: req.body.title,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            designation: req.body.designation,
            mobileNumber: req.body.mobileNumber,
            email: req.body.email,
        });

        await contact.save();
        res.status(200).send('Save contact successful!');
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

// Get a list of contacts
router.get('/list', async (req, res) => {
    try {
        const contactlist = await Contact.find();
        if (!contactlist || contactlist.length === 0) {
            return res.status(404).send({ message: 'No contacts found' });
        }
        res.send(contactlist);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

// Get a contact by ID
router.get('/:id', async (req, res) => {
    try {
        const contact = await Contact.findById(req.params.id);
        if (!contact) {
            return res.status(404).json({ message: 'Contact not found' });
        }
        res.status(200).send(contact);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});


router.delete('/delete-all', async (req, res) => {
    try {
        // You might want to add some additional logic to confirm this action
        // before deleting all data, such as requiring a specific request parameter.

        await Contact.deleteMany({}); // This will delete all contacts
        res.status(200).send('All contacts deleted successfully');
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;
