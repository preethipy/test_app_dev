var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello! Closet Server demo on friday 3:20PM\n');

});

var server = app.listen(3000, function () {
  var port = server.address().port;

  console.log('Your nodejs app is listening at port %s',  port);
});
