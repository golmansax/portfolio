var express = require('express');
var app = express();
var expressHandlebars = require('express-handlebars');

app.listen(process.env.PORT || 3000);

app.engine('hbs', expressHandlebars());
app.set('view engine', 'hbs');

app.get('/', function(req, res) {
  res.render('index');
});

app.get('/assets/main.css', function(request, response) {
  response.sendfile('./public/main.css');
});
