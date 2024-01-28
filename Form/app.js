const http = require('http')
const express = require('express')

const app = express();

app.use((req , res, next) => {
    console.log("middleware 1")
    next();
})

app.use((req,res,next) => {
    console.log("middleware 2");
    res.send('<h1>Hello World </h1>')
})

app.listen(3000);
//const fs = require('fs');
// const reqHandler = require('./requestHandler.js')
// http.createServer(reqHandler).listen(8080);