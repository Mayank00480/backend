const http = require('http')
//const fs = require('fs');
const reqHandler = require('./requestHandler.js')
http.createServer(reqHandler).listen(8000);