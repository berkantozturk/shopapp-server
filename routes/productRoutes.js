const {typeByProduct,getOneProduct,deleteProduct,updateProduct,createProduct} = require("../controllers/product.js")
const express = require("express")
const productController = require("../controllers/product")

// const {verifyAdmin,verifyUser} = require("../middleware/verify.js")

const router = express.Router();

// router.get("/typeByProduct",typeByProduct,verifyUser)
// router.put("/updateProduct/:id",updateProduct,verifyAdmin,verifyUser)
router.post("/createProduct", productController.createProduct)
// router.delete("/deleteProduct/:id",deleteProduct,verifyAdmin,)
// router.get("/getOneProduct/:id",getOneProduct,verifyUser)

module.exports = router