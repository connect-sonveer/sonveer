const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new Schema({
    category_id: {type:Number},
    category_name: { type: String, required: true, trim: true},
    parent_category_id: { type: Number, required: true},
    is_active: { type: Number, required:true }
}, {
    timestamps: true,
});

categorySchema.pre('save', function(next) {
    var count = 1;
    var category = this;
    Category.find({}, function(err, res) {
    if (err) throw err;
        count = res.length + 1;
        category.category_id = count;
        next();
    });
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;