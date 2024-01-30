const http = require('http')
const express = require('express');
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')
const app = express();

app.use(bodyParser.urlencoded({extended:false}))

app.use('/admin',adminRoutes);
app.use(shopRoutes);
app.use((req,res,next) => {
    res.send('<h1>Page Not Found </h1>');
})

// app.use('/add-product', (req,res,next) => {
//     res.send('<form action = "/product" method = "POST"> <input type = "text" name = "userName"> <input type = "text" name = "password">  <button>Send </button></form> ' )
// })

// app.post('/product' ,(req,res,next) => {
//     const obj = req.body;
//     for(let key in obj){
//         console.log(obj[key])
//     }
//     res.redirect('/')
// })



// app.use((req,res,next) => {
//     console.log("middleware 2");
//     res.send('<h1>Hello World </h1>')
// })

app.listen(3000);
//const fs = require('fs');
// const reqHandler = require('./requestHandler.js')
// http.createServer(reqHandler).listen(8080);