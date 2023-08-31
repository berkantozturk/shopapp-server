const product = require("../model/productModel")
const type = require("../model/typeModel")
const categories = require("../model/categoriesModel")
const picture = require("../model/pictureModel")
const price = require("../model/priceModel")

const createProduct = async (req,res)=>{
debugger
    try {
        const product ={
            productName: req.body.newproduct.createProductName, // ürün adı
            productPicture: req.body.newproduct.productPicture, // ürün görseli
            categoriesGender: req.body.newproduct.createCategoriesGender,// man, women, kid
            typeSize: req.body.newproduct.createTypeSize, // s,m,l,xl
            productPrice: req.body.newproduct.createProductPrice
        }
        await product.create(product);
        res.status(200).json(product)

    } catch (error) {
        console.log(error.message)
    }
}
module.exports={createProduct};