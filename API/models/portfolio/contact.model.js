const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contactSchema = new Schema({
    name: { type: String, required: true, trim: true},
    email: { type: String, required: true, trim: true},
    mobile: { type: Number, minlength: 10, maxlength: 10, trim: true},
    subject: { type: String, trim: true},
    message: { type: String, required: true, trim: true}
}, {
    timestamps: true,
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;