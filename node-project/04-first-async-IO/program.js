var fs = require('fs');
var args = process.argv.slice(2, process.argv.length);

fs.readFile(args[0], 'utf8', function(err, data){
    if(err){
        console.log('There was an error!');
        return;
    }
    console.log(data.split('\n').length - 1);

});

