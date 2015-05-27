'use strict';

require('babel/register');
var env = process.env.NODE_ENV || 'development';
var express = require('express');
var i18n = require('i18n');
var expressHandlebars = require('express-handlebars');
var routes = require('./routes');
var osvServer = require('./osv_server');
var cachifyStatic = require('connect-cachify-static');
var server = express();

i18n.configure({
  directory: __dirname + '/locales',
  objectNotation: true
});

var hbs = expressHandlebars.create({
  extname: '.hbs',
  defaultLayout: 'default',
  helpers: {
    title: function (title) {
      if (title.indexOf('Holman Gao') === -1) {
        return title + ' — Holman Gao';
      } else {
        return title;
      }
    }
  }
});

server.use(cachifyStatic(__dirname + '/public'));

server.engine('hbs', hbs.engine);
server.set('view engine', 'hbs');

if (env === 'development') {
  var stylus = require('stylus');
  var nib = require('nib');
  var jeet = require('jeet');
  var rupture = require('rupture');
  var stylusTypeUtils = require('stylus-type-utils');

  server.use(stylus.middleware({
    src: __dirname + '/assets',
    dest: __dirname + '/public/assets',
    compile: function compile(str, path) {
      return stylus(str)
        .set('filename', path)
        .use(jeet())
        .use(rupture())
        .use(stylusTypeUtils())
        .use(nib());
    }
  }));
}

server.use(express.static(__dirname + '/public'));

server.get('/', routes.index);
server.get('/human-centered-design', routes.hcd);
server.get('/donations-pledge', routes.donations);
server.use('/office-street-view', osvServer);

if (!module.parent) { server.listen(process.env.PORT || 3000); }

module.exports = server;
