const express  = require('express');
const router = express.Router();

router.get('/add-product', (req,res,next) => {
    res.send('<form action = "/admin/add-product" method = "POST"> <input type = "text" name = "userName"> <input type = "text" name = "password">  <button>Send </button></form> ' )
})

router.post('/add-product' ,(req,res,next) => {
    const obj = req.body;
    for(let key in obj){
        console.log(obj[key])
    }
    res.redirect('/')
})


module.exports = router;