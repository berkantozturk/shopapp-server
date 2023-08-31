const orderProductModel = require("../model/orderProductModel.js");
const order = require ("../model/orderProductModel.js")

const createOrderProduct = async (req,res) => {
    try {
        const { productID } = req.body ;

        const newOrder = newOrderProduct({
            product: productID,
            order: orderID,

        });
        await newOrder.save();
        res.status(200).json(newOrder);

    } catch (error) {
        console.log(error.message)
    }
}
module.exports=(createOrderProduct);