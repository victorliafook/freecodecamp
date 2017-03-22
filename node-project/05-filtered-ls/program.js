const fs = require('fs');
var args = process.argv.slice(2, process.argv.length);
fs.readdir(args[0], function(err, list){
    for(var i = 0; i < list.length; i++){
	var file = list[i].split('.');
	if(file[1] == args[1]){
	    console.log(list[i]);
	}
    }
});
