const type = require("../model/pictureModel")

const getPicture = async (req,res)=>{

    try {
        const picture ={
            Picture: req.body.newtype.getPicture,
        }
        await picture.create(picture);
        res.status(200).json(picture)
    } catch (error) {
        console.log(error.message)
    }
}

getPicture

module.exports=(getPicture);