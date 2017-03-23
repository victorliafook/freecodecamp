var http = require('http');
var url = require('url');
var map = require('through2-map');

var server = http.createServer(function (req, res) {
    var urlObj = url.parse(req.url, true);
    if(req.method == 'GET'){
        res.writeHead(200, { 'Content-Type': 'application/json' });
        // /api/unixtime
        if(urlObj.pathname == '/api/unixtime'){
            res.end(JSON.stringify(unixtimeHandler(urlObj.query.iso)));
            
        }
        
        //  /api/parsetime
        if(urlObj.pathname == '/api/parsetime'){
            res.end(JSON.stringify(parsetimeHandler(urlObj.query.iso)));
        }
        
        
    }
     
});
server.listen(process.argv[2]);

function unixtimeHandler(data){
    return { unixtime: (new Date(data)).getTime() };
}
function parsetimeHandler(data){
    data = new Date(data);
    return {hour: data.getHours(), minute: data.getMinutes(), second: data.getSeconds()}
}





/*Official Solution

    var http = require('http')
    var url = require('url')
    
    function parsetime (time) {
      return {
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds()
      }
    }
    
    function unixtime (time) {
      return { unixtime: time.getTime() }
    }
    
    var server = http.createServer(function (req, res) {
      var parsedUrl = url.parse(req.url, true)
      var time = new Date(parsedUrl.query.iso)
      var result
    
      if (/^\/api\/parsetime/.test(req.url)) {
        result = parsetime(time)
      } else if (/^\/api\/unixtime/.test(req.url)) {
        result = unixtime(time)
      }
    
      if (result) {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(result))
      } else {
        res.writeHead(404)
        res.end()
      }
    })
    server.listen(Number(process.argv[2]))


*/

