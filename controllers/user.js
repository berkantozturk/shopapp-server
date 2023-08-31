const userModel = require("../model/UserModel.s")

const getUser = async (req,res,next) => {

try {
    const user ={
        user: userID,
    }
    await product.get(user);
    res.status(200).json(product)

} catch (error) {
    console.log(error.message)
}
}
const post = async (req,res,next) => {

try {
    const user ={
        userName: req.body.newuser.postUserName,
        userLastName: req.body.newuser.postUserLastName,
        userEmail: req.body.newuser.postUserEmail,
        userPassword: req.body.newuser.postUserPassword,
        userPhone: req.body.newuser.postUserPhone,
        userAdress: req.body.newUser.postUserAdress
    }
    await product.post(user);
    res.status(200).json(product)

} catch (error) {
    console.log(error.message)
}
}

const allUser = async (req,res,next) =>{
    
    try {
        const user = await User.findById()
            res.status(200).json(user)
        
    } catch (error) {
            res.status(500).json({message: error})
    }
}

const updateUser = async (req,res,next) =>{
    try {
        const user = await user.findByIdAndUpdate(req.params.id, {$set:req.body},{new:true})
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({message:error})
    }
}

const deleteUser = async (req,res,next) => {
    try {
        const user = await user.findByIdAndDelete(req.params.id, {$set:req.body},{new:true})
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({message:error})
    }
}

module.exports=(getUser, allUser, updateUser, deleteUser);