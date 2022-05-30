require('dotenv').config()
const express = require("express")
const res = require('express/lib/response')
const mongoose = require('mongoose')
const method = require('method-override')
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
app.use(method('_method'))
app.use(express.urlencoded({extended:false}));
app.use(express.json())

//Routes
//Index route 
app.get('/products', (req,res) =>{
 Product.find({}, (err, allProducts) => {
    res.render('Index', {products: allProducts})
 }) 
})

// Delete
app.delete('/products/:id', (req,res) =>{
    Product.findByIdAndDelete(req.params.id, (err) =>{
        if (!err){
            res.status(200).redirect('/products')
        }else{
            res.status(400).json(err)
        }

    })
})


// New route
app.get('/products/new', (req, res) => {
    res.render('New');
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

//update
app.put('/products/:id', (req, res) => {
   
    Product.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedProduct) => {
        if (!err) {
            res.status(200).redirect('/products')
        } else {
            res.status(400).json(err)
        }
    })
})

//edit
app.get('/products/:id/edit', (req,res)=>{
    Product.findById(req.params.id, (err, foundProduct)=>{

        if(!err){
            res.render('Edit', {product: foundProduct})
        }else{
            res.status(400).json(err)
        }
    })

})

// Show route 
app.get('/products/:id',(req, res)=>{
    Product.findById(req.params.id, (err, foundProduct) =>{
        res.render('Show', {product: foundProduct})
    })
});     

app.listen(PORT, () => console.log(`Listening to port ${PORT}`))