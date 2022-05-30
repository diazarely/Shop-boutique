require('dotenv').config()
const express = require("express")
const res = require('express/lib/response')
const mongoose = require('mongoose')
const app = express()
const PORT = 3000
const Product = require('./models/Product.js')

//Connection to database
    mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    mongoose.connection.once('open', () => console.log('Connected to Mongo'))
    

//Setup Engine
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

//middleware
app.use(express.urlencoded({extended:false}));
app.engine

//Routes
//Index route 
app.get('/products', (req,res) =>{
 Product.find({}, (err, allProducts) => {
    res.render('Index', {products: allProducts})
 }) 
})
// New route
app.get('/products/new', (req, res) => {
    res.render('New');
});

// Show route 
app.get('/products/:id',(req, res)=>{
    Product.findById(req.params.id, (err, foundProduct) =>{
        res.render('Show', {product: foundProduct})
    })
});     

//create route
app.post('/products', (req, res) => {
    //products.push(req.body);
   // console.log('req.body', req.body);
   Product.create(req.body, (err, createdProduct)=> {
       res.redirect('/products')
      // res.send(createdFruit)
   })
});

app.listen(PORT, () => console.log(`Listening to port ${PORT}`))