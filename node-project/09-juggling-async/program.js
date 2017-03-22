const http = require('http');

var args = process.argv.slice(2, process.argv.length);
var cont = 0;
var collectedData = Array();


for(var i = 0; i < args.length; i++){
    httpGet(i);
}



function httpGet(index){
    http.get(args[index], function(response){
        response.setEncoding("utf8");
        response.on("data", function(data){
            concatData(collectedData, index, data);
        });
        response.on("error", console.error);
        response.on("end", function(){
            cont++;
            if(cont == args.length){
                for(var i = 0; i < args.length; i++){
                    console.log(collectedData[i]);
                }
            }
                
        }); 
    });
}

function concatData(arr, index, data){
    if(!arr[index]){
        arr[index] = data;
        return;
    }
    arr[index] += data;
}


