const fs = require('fs');
const fls = require('./filtered-ls');

var args = process.argv.slice(2, process.argv.length);
fls(args[0], args[1], function(err, data){
    if(err){
	console.log("There was an error!");
	return;
    }
    for(var i = 0; i < data.length; i++){
	console.log(data[i]);
    }
});
