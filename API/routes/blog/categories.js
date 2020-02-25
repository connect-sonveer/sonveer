const router = require('express').Router();
let Category = require('../../models/blog/home/category.model');

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

module.exports = router;