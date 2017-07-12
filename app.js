var http = require('http');
var fs = require('fs');
var port = process.env.PORT || 1337;

http.createServer(function(request, response){
  var hello = require('url').parse(request.url, true).query.hello;
  if(hello === undefined){
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Hello Wrold\n');
  }
  else {
    fs.readFile('./res/index.html', (err, data) {
      if(err){
        console.log("ERROR reading file !!!!");
        response.writeHead(404, {'Content-Type': 'text/plain'});
        response.end('404 File hello not found !');
      }
      else {
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.write(data);
      }
    });

  }
}).listen(port);

console.log("Listening on PORT : " + port + " .......");
