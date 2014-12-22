(function () {
  'use strict';

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
    defaultLayout: 'default',
    helpers: {
      '__': function () {
        return i18n.__.apply(this, arguments);
      }
    }
  });

  app.engine('hbs', hbs.engine);
  app.set('view engine', 'hbs');

  var stylus = require('stylus');
  var nib = require('nib');
  app.use(stylus.middleware({
    src: __dirname + '/stylesheets',
    dest: __dirname + '/public/assets',
    compile: function compile(str, path) {
      return stylus(str).set('filename', path).use(nib());
    }
  }));

  app.use(express.static(__dirname + '/public'));

  app.get('/', function (req, res) {
    res.render('index');
  });

  app.get('/human-centered-design', function (req, res) {
    var link = 'https://docs.google.com/viewer?' + [
      'srcid=0BzCKqkqhnFJQRFFyTDZFQ1R6OGs',
      'pid=explorer',
      'efh=false',
      'a=v',
      'chrome=false',
      'embedded=true'
    ].join('&');

    res.render('hcd', { link: link });
  });

  var osvApp = express();
  osvApp.use(express.static(__dirname + '/vendor/office-street-view/dist/'));

  app.use('/office-street-view', osvApp);
})();
