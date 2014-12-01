var express = require('express');
var app = express();

app.listen(7704);

app.get('/', function(request, response) {
  response.sendfile('./public/index.html');
});

app.get('/assets/main.css', function(request, response) {
  response.sendfile('./public/main.css');
});
