const {createOrder} = require("../controllers/order") //size= s,m,l,xl
const express = require ("express")
const router = express.Router();


router.post("/createOrder",createOrder)

module.exports = router