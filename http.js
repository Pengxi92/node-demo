var http = require('http');
var url = require("url");

http.createServer(function(req, res) {
  var pathname = url.parse(req.url).pathname;

  console.log(req.url, req.url.indexOf('80'));
  if (req.url.indexOf('start') !== -1) {
    console.log(req.url, url.parse(req.url), url.parse(req.url).pathname);
  }
  
  res.writeHead(200, {'Content-Type': 'text/plain'});

  res.end('hello world');
}).listen(8010);

console.log('Server running at http://127.0.0.1:8010/');