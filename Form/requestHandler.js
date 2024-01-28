const fs = require('fs')

function requestHandler(req , res){

    
        if(req.url === '/'){
            let readData = fs.readFileSync('./message.txt');
            res.setHeader('Content-Type','text/html');
            if(readData != undefined)
            {
                
                res.write(`<p>${readData}</p>`)
                
            }
           
            res.write('<form action = "/message" method = "POST"><input name = "message"> <button type = "submit">send</button></form>')
            
            res.end();
        }
         if(req.url === '/message'){
             const body = [];
             req.on('data',(chunk) => {
                 body.push(chunk);
             })
             
             req.on('end',()=>{
                 const parsedData = Buffer.concat(body).toString();
                 const realData = parsedData.split('=')[1];
                 fs.writeFileSync('message.txt',realData);
                 res.writeHead(302, {
                    'Location': '/', // Specify the new path for redirection
                  });
                  res.end()
                
             } )
           
         }
    
    // For Redirect
        // if(req.url === '/message'){
        //     fs.writeFileSync('./message.txt', 'Hello');
        //     res.statusCode = 302;
        //     res.setHeader('Location' , '/');
        //     res.end();
        // }
    
    }
module.exports = requestHandler
//module.exports.reqHandler = requestHandler;