const express = require('express');
const cors = require('cors');
const port = 3000;
const app = express();
const router = ('./routes/productModel');
const mongoose = require('mongoose'); 
const mongoString = "mongodb+srv://berkantozturk:berkant1@cluster0.vvx74ph.mongodb.net/shop-app";


mongoose.connect(mongoString, { useNewUrlParser: true , useUnifiedTopology: true })
    .then(() => {
        console.log('MongoDB\'ye bağlantı başarılı');
        app.listen(port, () => {
            console.log("App listening on port " + port);
        });
    })
    .catch((error) => {
        console.log("There is an error : " + error.message);
    });

const corsOptions = {
    origin: '*', 
    methods: 'GET,PUT,POST,DELETE',
};

app.use(cors(corsOptions));
app.post('/', (req, res) => {
});

app.post('/createProduct/',async (req,res)=>{
    try {
        const product = await (req.body)
        res.status(200).json(product);
        
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})
