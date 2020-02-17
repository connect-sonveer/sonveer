const router = require('express').Router();
let Contact = require('../models/portfolio/contact.model');

router.route('/').get((req, res) => {
    Contact.find()
        .then(contact => res.json(contact))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const mobile = Number(req.body.mobile);
    const subject = req.body.subject;
    const message = req.body.message; 

    const new_contact = new Contact({
        name,
        email,
        mobile,
        subject,
        message
    });

    new_contact.save()
        .then(() => res.json('Contact added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Contact.findById(req.params.id)
        .then(contact => res.json(contact))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/delete/:id').delete((req, res) => {
    Contact.findOneAndDelete(req.params.id)
        .then(() => res.json('Exercise deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Contact.findById(req.params.id)
        .then(contact => {
            contact.name = req.body.name;
            contact.email = req.body.email;
            contact.mobile = Number(req.body.mobile);
            contact.subject = req.body.subject;
            contact.message = req.body.message;

            contact.save()
                .then(() => res.json('Exercise updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;