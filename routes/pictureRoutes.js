const {createPicture} = require("../controllers/picture") //size= s,m,l,xl
const express = require ("express")
const router = express.Router();


router.post("/createPicture",createPicture)

module.exports = router