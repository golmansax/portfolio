(function (exports) {
  'use strict';

  var express = require('express');
  var app = express();

  var i18n = require('i18n');

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

  var routes = require('./routes');
  app.get('/', routes.index);
  app.get('/human-centered-design', routes.hcd);
  app.use('/office-street-view', require('./osv_app').app);

  exports.app = app;
  if (!module.parent) { app.listen(process.env.PORT || 3000); }
})(exports);
