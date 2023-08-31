const {createOrderProduct} = require("../controllers/orderProduct") //size= s,m,l,xl
const express = require ("express")
const router = express.Router();


router.post("/createOrderProduct",createOrderProduct)

module.exports = router