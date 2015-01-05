var express = require('express');
var i18n = require('i18n');
var expressHandlebars = require('express-handlebars');
var stylus = require('stylus');
var nib = require('nib');
var routes = require('./routes');
var osvServer = require('./osv_server');

module.exports = (function () {
  'use strict';

  var server = express();
  var env = process.env.NODE_ENV || 'development';

  i18n.configure({
    directory: __dirname + '/locales',
    objectNotation: true
  });
  server.use(i18n.init);

  var hbs = expressHandlebars.create({
    extname: '.hbs',
    defaultLayout: 'default'
  });

  server.engine('hbs', hbs.engine);
  server.set('view engine', 'hbs');

  server.use(stylus.middleware({
    src: __dirname + '/assets',
    dest: __dirname + '/public/assets',
    compile: function compile(str, path) {
      return stylus(str)
        .set('filename', path)
        .use(nib())
        .set('compress', env !== 'development');
    }
  }));

  server.use(express.static(__dirname + '/public'));

  server.get('/', routes.index);
  server.get('/human-centered-design', routes.hcd);
  server.use('/office-street-view', osvServer);

  if (!module.parent) { server.listen(process.env.PORT || 3000); }

  return server;
})();
