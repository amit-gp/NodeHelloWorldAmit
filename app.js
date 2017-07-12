var http = require('http');
var port = process.env.PORT || 1337;

http.createServer(function(request, response){
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('Hello Wrold\n');
}).listen(port);

console.log("Listening on PORT : " + port + " .......");
