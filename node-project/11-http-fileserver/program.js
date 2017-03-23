var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, res) {  
     var stream = fs.createReadStream(process.argv[3], {encoding: 'utf8'});
     stream.on('data', (chunk) => {
          console.log(`${chunk.length} bytes of data received.`);
          res.write(chunk);
     });
     
}) ;
server.listen(process.argv[2]);

/* Official solution
var http = require('http')
var fs = require('fs')

var server = http.createServer(function (req, res) {
  res.writeHead(200, { 'content-type': 'text/plain' })

  fs.createReadStream(process.argv[3]).pipe(res)
})

server.listen(Number(process.argv[2]))
*/