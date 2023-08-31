const mongoose = require('mongoose');
const userSchema = require('../schema/userSchema');

const productSchema = new mongoose.Schema({

    Name: {
        required: true,
        type:String
    },
    LastName: {
        required: true,
        type:String
    },
    Email: {
        required: true,
        type:String
    },
    Password: {
        required: true,
        type:String
    },
    Number: {
        required: true,
        type:Number
    },

})

module.exports = mongoose.model('userModel', userSchema)