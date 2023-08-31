const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    price:{
        required: true,
        type: Number
    }
})

module.exports = mongoose.model('priceModel', productSchema)