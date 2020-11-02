const express = require('express');
const server = express();

server.get('/', function(req, res){
  res.send('Ok');
});

server.listen(3333, function(){
  console.log("Ok");
});