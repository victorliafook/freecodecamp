var length = process.argv.length;
var args = process.argv.slice(2, length);
var res = 0;

length = length - 2;
for(var i = 0; i < length; i++){
    res += Number(args[i]);
}
console.log(res);
