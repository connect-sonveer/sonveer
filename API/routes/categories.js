const router = require('express').Router();
let Category = require('../models/blog/home/category.model');

router.route('/').get((req, res) => {
    Category.find()
        .then(category => res.json(category))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const category_name = req.body.category_name;
    const parent_category_id = Number(req.body.parent_category_id);
    const is_active = Number(req.body.is_active);

    const new_category = new Category({
        category_name,
        parent_category_id,
        is_active
    });

    new_category.save()
        .then(() => res.json('Category added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

// router.route('/:id').get((req, res) => {
//     Contact.findById(req.params.id)
//         .then(contact => res.json(contact))
//         .catch(err => res.status(400).json('Error: ' + err));
// });

// router.route('/delete/:id').delete((req, res) => {
//     Contact.findOneAndDelete(req.params.id)
//         .then(() => res.json('Exercise deleted.'))
//         .catch(err => res.status(400).json('Error: ' + err));
// });

// router.route('/update/:id').post((req, res) => {
//     Contact.findById(req.params.id)
//         .then(contact => {
//             contact.name = req.body.name;
//             contact.email = req.body.email;
//             contact.mobile = Number(req.body.mobile);
//             contact.subject = req.body.subject;
//             contact.message = req.body.message;

//             contact.save()
//                 .then(() => res.json('Exercise updated!'))
//                 .catch(err => res.status(400).json('Error: ' + err));
//         })
//         .catch(err => res.status(400).json('Error: ' + err));
// });

module.exports = router;