var express = require('express');
var app = express();

var i18n = require('i18n');

app.listen(process.env.PORT || 3000);

i18n.configure({
  directory: __dirname + '/locales',
  objectNotation: true
});
app.use(i18n.init);

var expressHandlebars = require('express-handlebars');
var hbs = expressHandlebars.create({
  extname: '.hbs',
  helpers: {
    '__': function () {
      return i18n.__.apply(this, arguments);
    }
  }
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');

app.get('/', function (req, res) {
  res.render('index');
});

app.get('/assets/main.css', function (request, response) {
  response.sendfile('./public/main.css');
});
