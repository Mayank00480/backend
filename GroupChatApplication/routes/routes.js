const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser')
const router = express.Router();


router.get('/login',(req,res,next) => {
    res.send('<form onsubmit="localStorage.setItem(`username`, document.getElementById(`username`).value)" action="/" method="GET"><input id="username" type="text" name"title"><button type="submit">add</button></form>')
    
} );

router.use('/',(req,res,next)=>{
//file se data fetch krna hai 
// res.send(`<form action = "/" method = "POST" onsubmit = "document.getElementById('inp2').value = localStorage.getItem("username")" >  <input type = "hidden" name = "userName" id ="inp2" type = "text"> <input name = "message" id ="inp3" type = "text"> <button>send</button></form>`)
if(req.body.userName){
    fs.appendFileSync("./file.txt" , ` ${req.body.userName} : ${req.body.message} `)
}
const data = fs.readFileSync('./file.txt' , 'utf-8')
// if(data){
//     res.send(data);
// }
res.send(`${data && data} <br> <form action="/" method="POST" onsubmit="document.getElementById('inp2').value = localStorage.getItem('username');">  
  <input type="hidden" name="userName" id="inp2" type="text">
  <input name="message" id="inp3" type="text">
  <button>send</button>
</form>`);

})

// router.post('/' , (req,res,next) => {
//     console.log(req.body);
//     res.send("Good");
// })


module.exports = router;
