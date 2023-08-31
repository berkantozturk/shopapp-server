const categories = require("../model/categoriesModel")

const createCategories = async (req,res)=>{

    try {
        const categories ={
            categoriesGender: req.body.newcategories.createCategoriesGender, //man, women, kid
        }
        await categories.create(categories);
        res.status(200).json(type)
    } catch (error) {
        console.log(error.message)
    }
}
module.exports=(createCategories);