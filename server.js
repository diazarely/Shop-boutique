const express = require("express")
const app = express()
const PORT = 3000
const products = require('./models/products.js')

//Setup Engine
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

//middleware
app.use(express.urlencoded({extended:false}));

//Routes
//Index route 
app.get('/products', (req,res) => res.render('Index',{products:products}))

// New route
app.get('/products/new', (req, res) => {
    res.render('New');
});

// Show route 
app.get('/products/:id',function(req, res){
    res.render('Show', {product : products[req.params.id]});
});     

//create route
app.post('/products', (req, res) => {
    products.push(req.body);
    console.log('req.body', req.body);
   res.redirect('/products')
});

app.listen(PORT, () => console.log(`Listening to port ${PORT}`))