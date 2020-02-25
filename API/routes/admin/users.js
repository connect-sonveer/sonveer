const router = require('express').Router();
let Contact = require('../../models/admin/user.model');

router.route('/').get((req, res) => {
    Contact.find()
        .then(contact => res.json(contact))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const fullname = req.body.fullname;
    const email = req.body.email;
    const password = req.body.password;
    const is_active = req.body.is_active;

    let emailTester = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var message = 'User added!';
    if (emailTester.test(email) == false) {
        console.log(emailTester.test(email));
        message = 'Please provide a valid email.'
        return;
    }

    const new_user = new Contact({
        fullname,
        email,
        password,
        is_active
    });

    new_user.save()
        .then(() => res.json(message))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;