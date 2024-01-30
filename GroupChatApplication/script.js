const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const Routes = require('./routes/routes')
app.use(bodyParser.urlencoded({extended : false}));
app.use(Routes);

app.listen(4000);