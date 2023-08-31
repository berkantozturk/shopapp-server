const mongoose=require('mongoose');

const productSchema = new mongoose.Schema({

    User: {
        required: true,
        type: String
    },
})

module.exports = mongoose.model('orderModel', productSchema)