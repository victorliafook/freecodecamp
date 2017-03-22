const http = require('http');

var args = process.argv.slice(2, process.argv.length);
var collectedData = "";

http.get(args[0], function(response){
    response.setEncoding("utf8");
    response.on("data", function(data){
        collectedData += data;
    });
    response.on("error", console.error);
    response.on("end", function(){
        console.log(collectedData.length);
        console.log(collectedData);
    })
});

/* Official Solution

var http = require('http')
var bl = require('bl')

http.get(process.argv[2], function (response) {
  response.pipe(bl(function (err, data) {
    if (err) {
      return console.error(err)
    }
    data = data.toString()
    console.log(data.length)
    console.log(data)
  }))
})

*/