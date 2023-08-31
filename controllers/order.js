const order = require ("../model/orderModel.js")

const createOrder = async (req,res) => {
    try {
        const { productID } = req.body ;

        const newOrder = new Order({
            user: userID,

        });
        await newOrder.save();

        res.status(200).json(newOrder);

    } catch (error) {
        console.log(error.message)
    }
}
module.exports=(createOrder);