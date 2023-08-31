const { allUser, verifyUser, deleteUser, updateUser, addUser } = require("../controllers/user.js")
const express = require('express');

const router = express.Router();

router.get("/allUser",verifyUser, allUser)
router.delete("/deleteUser", verifyUser, deleteUser)
router.put("/updateUser", verifyUser, updateUser)
router.post("/createUser", verifyUser, addUser)

module.exports = routes;
