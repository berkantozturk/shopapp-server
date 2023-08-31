const mongoose = require('mongoose')

const reqString = {
    type: String,
    required: true,
  }

const addproduct = mongoose.Schema({
    name: reqString,
    lastName: reqString,
    email: reqString,
    password: reqString,
    number: {
        type: Number,
        required:true
    }
})

module.exports = mongoose.model('user ', newUser)