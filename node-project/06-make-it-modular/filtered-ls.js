const fs = require('fs');

module.exports = function(dir, ext, callback){
    fs.readdir(dir, function(err, data){
        if(err)
	    return callback(err);
	var list = Array();
	for(var i = 0; i < data.length; i++){
	    if(data[i].split('.')[1] == ext)
		list.push(data[i]);
	}
	callback(null, list);
    });      
};
