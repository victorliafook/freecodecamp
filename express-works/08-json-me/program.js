var express = require('express');
var fs = require('fs');

var app = express();

app.get('/books', function(req, res){
    fs.readFile(process.argv[3], 'utf8', function(err, data){
        if(err){
            console.log(err);
            res.send(500);
        }
        try{
            res.json(JSON.parse(data));
        }catch(error){
            console.log(error);
            res.send(500);
        }
    });
    
});

  
app.listen(process.argv[2]);