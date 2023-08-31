const mongoose = require('mongoose')

const reqString = {
    type: String,
    required: true,
}

const addproduct = mongoose.Schema({
    name: reqString,
    type: reqString,
    pictureID: reqString,
    category: reqString,
    size: reqString,
    price: {
        type: Number,
        required: true,
        piece: {
            type: Number,
            required: true
        }
    }
})

module.exports = mongoose.model('product ', newProduct)