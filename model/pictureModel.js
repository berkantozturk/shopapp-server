const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({

    URL: {
        required: true,
        type: String
    }
})

module.exports = mongoose.model('pictureModel', productSchema)