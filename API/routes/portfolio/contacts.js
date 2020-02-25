const router = require('express').Router();
let Contact = require('../../models/portfolio/contact.model');

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

module.exports = router;