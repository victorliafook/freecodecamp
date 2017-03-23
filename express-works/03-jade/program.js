var express = require('express');
var path = require('path');

var app = express();
console.log( __dirname)
app.set('view engine', 'pug');
app.set('views', __dirname);

app.get('/home', function(req, res) {
  res.render('index', {date: new Date().toDateString()})
})
app.listen(process.argv[2]);