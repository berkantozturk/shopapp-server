const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({

    orderID:{
        required: true,
        type: String
    },
    productID:{
        required: true,
        type:String
    }
})

module.exports = mongoose.model('orderProductModel', productSchema)