const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var bcrypt = require('bcrypt');
var SALT_WORK_FACTOR = 10;

const userSchema = new Schema({
    fullname: { type: String, trim: true},
    email: {
            type: String,
            lowercase: true,
            required: true,
            unique: true,
            validate: {
                isAsync: true,
                validator: function(value, isValid) {
                    const self = this;
                    return self.constructor.findOne({ email: value })
                    .exec(function(err, user){
                        if(err){
                            throw err;
                        }
                        else if(user) {
                            if(self.id === user.id) {  // if finding and saving then it's valid even for existing email
                                return isValid(true);
                            }
                            return isValid(false);  
                        }
                        else{
                            return isValid(true);
                        }
                    })
                },
                message:  'The email address is already taken!'
            },
        },
    password: { type: String, required: true},
    is_active: { type: Number }
}, {
    timestamps: true,
});

userSchema.pre('save', function(next){
    let user = this;
    if (!user.isModified('password')) return next();

    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt){
        if(err) return next(err);

        bcrypt.hash(user.password, salt, function(err, hash){
            if(err) return next(err);

            user.password = hash;
            next();
        });
    });
});

const User = mongoose.model('User', userSchema);

module.exports = User;