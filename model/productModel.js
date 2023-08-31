const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({

    Type: {
        required: true,
        type: String
    },
    PictureId:{
        required: true,
        type: String 
    },
    Category: {
        required: true,
        type: String
    },
    Size: {
        required: true,
        type: String
    },
    Price: {
        required: true,
        type: Number
    },
    Piece: {
        required: true,
        type: Number
    }
})

module.exports = mongoose.model('productModel', productSchema)