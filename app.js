const express = require('express');
const app = express();

app.get('/test',function(req,res){
    console.log(req.query.msisdn)
    res.end('hello, '+ req.query.msisdn)
})

const server = app.listen(8081,function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})