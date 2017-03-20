var fs = require('fs');
var args = process.argv.slice(2, process.argv.length);
var buffer = fs.readFileSync(args[0]);

console.log(buffer.toString().split('\n').length - 1);
// note you can avoid the .toString() by passing 'utf8' as the
// second argument to readFileSync, then you'll get a String!
//
// fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1
