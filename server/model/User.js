const mongoose              = require('mongoose');
const bcrypt                = require('bcrypt');
const { isEmail, isAlpha }  = require('validator');


const UserSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, "Username is required"],
        validate: [isAlpha, "Username can only contain letters"],
        minlenght: [3, "Username must be a minumin length of 3 characters"],
        lowercase: true
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        validate: [isEmail, "Please enter a valid email"],
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: [8, "Password must be a minimun length of 8 characters"]
    }
});

/* 
 Hash password before save
*/

UserSchema.pre('save', function(next) {
    bcrypt.hash(this.password,10,(err, hash) => {
        if(err) {
            return next(err);
        } else {
            this.password = hash;
            next();
        }
    })
});

const User = mongoose.model('user', UserSchema);
module.exports = User;