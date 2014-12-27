(function (exports) {
  'use strict';

  var express = require('express');
  var server = express();

  var i18n = require('i18n');

  i18n.configure({
    directory: __dirname + '/locales',
    objectNotation: true
  });
  server.use(i18n.init);

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

  server.engine('hbs', hbs.engine);
  server.set('view engine', 'hbs');

  var stylus = require('stylus');
  var nib = require('nib');
  server.use(stylus.middleware({
    src: __dirname + '/assets',
    dest: __dirname + '/public/assets',
    compile: function compile(str, path) {
      return stylus(str).set('filename', path).use(nib());
    }
  }));

  server.use(express.static(__dirname + '/public'));

  var routes = require('./routes');
  server.get('/', routes.index);
  server.get('/human-centered-design', routes.hcd);
  server.use('/office-street-view', require('./osv_server').server);

  exports.server = server;
  if (!module.parent) { server.listen(process.env.PORT || 3000); }
})(exports);
