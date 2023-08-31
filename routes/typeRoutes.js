const {createType} = require("../controllers/type") //size= s,m,l,xl
const express = require ("express")
const router = express.Router();


router.post("/createType",createType)

module.exports = router