const type = require("../model/typeModel")

const createType = async (req,res)=>{

    try {
        const type ={
            typeSize: req.body.newtype.createTypeSize, //s,m,l,xl
        }
        await type.create(type);
        res.status(200).json(type)
    } catch (error) {
        console.log(error.message)
    }
}

module.exports=(createType);