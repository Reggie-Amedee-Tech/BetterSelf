const mongoose = require('mongoose');
const jwt = require('jsonwebtoken')
const joi = require('joi')
const passwordComplexity = require('joi-password-complexity')
const bcrypt = require('bcrypt');
const Joi = require('joi');

const UserSchema = mongoose.Schema({
    FirstName: {
        required: [true, 'Please Enter Your First Name'],
        type: String
    },
    LastName: {
        required: [true, 'Please Enter Your Last Name'],
        type: String
    },
    Email: {
        required: [true, 'Please Enter Your Email Address'],
        type: String,

    },
    Password: {
        minLength: [8, 'Password Must Be More Than 8 Characters Long'],
        type: String
    }
}, {timestamps: true})

UserSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({_id: this._id}, process.env.JWT_SECRET, {expiresIn: "7d"})
    return token
}

const User = mongoose.model('User', UserSchema)

const validate = (data) => {
    const schema = joi.object({
        FirstName: Joi.string().required().label('First Name'),
        LastName: Joi.string().required().label('Last Name'),
        Email: Joi.string().email().required().label('Email'),
        Password: Joi.string().required().label('Password')
        
    });

    return schema.validate(data)
};

module.exports = {User, validate}