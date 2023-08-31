const mongoose = require ('mongoose');

const productSchema = new mongoose.Schema({

    Name : {
        required: true,
        type: String
    }
})

module.exports = mongoose.model('categoriesModelInfo', productSchema)