const { Contact } = require('../models/contact');
const { Company } = require('../models/company');
// const verifyToken = require('../verifytoken');
const express = require('express');
const router = express.Router();


router.post('/create', async (req, res) => {
    try {
        const existingCompany = await Company.findOne({ assessmentRecord: req.body.assessmentRecord });
        if (existingCompany) {
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
        }
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});



// get list of contact

router.get('/list', async (req, res) => {
    const contactlist = await Contact.find();
    if (!contactlist) {
        res.status(404).send({ message: 'No contacts found' });
    }
    res.send(contactlist);
})

// get user by id

router.get('/:id', async (req, res) => {
    const contact = await Contact.findById(req.params.id);

    if (!contact) {
        res.status(500).json({
            success: false
        })
    }
    res.status(200).send(contact);
})



module.exports = router
