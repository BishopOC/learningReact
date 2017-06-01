var express = require('express');
var server = express();
var port = process.env.PORT || 8080;

server.use(express.static(__dirname + '/client'));

server.get('/', function(req, res){
  res.sendFile('index.html', {root: __dirname + '/client'});
});

server.listen(port, function(){
  console.log('listening on port ', port);
});
