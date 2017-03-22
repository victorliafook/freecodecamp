const http = require('http');

var args = process.argv.slice(2, process.argv.length);

http.get(args[0], function(response){
    response.setEncoding("utf8");
    response.on("data", function(data){
        console.log(data);
    });
    response.on("error", function(err){
        console.log(err);
    });
    
});

/* official solution
var http = require('http')
    
http.get(process.argv[2], function (response) {
  response.setEncoding('utf8')
  response.on('data', console.log)
  response.on('error', console.error)
}).on('error', console.error)
*/