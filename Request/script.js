const http = require('http')

const server = http.createServer((req,res) =>{
    if(req.url === '/home')
    {
          res.write('<h1> Welcome to Home </h1>')
    }
    else if(req.url === '/about'){
        res.write('<h1> welcome to About Us Page </h1>')
    }
    else if(req.url === '/node'){
        res.write('<h1> Welcome to nodejs project </h1>')
    }

    res.end();
})

server.listen(4555);