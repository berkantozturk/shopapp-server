const {createCategories} = require("../controllers/categories") //man, women, kid
const express = require ("express")
const router = express.Router();


router.post("/createCategory",createCategories)

module.exports = router