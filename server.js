'use strict';

var env = process.env.NODE_ENV || 'development';
var express = require('express');
var i18n = require('i18n');
var expressHandlebars = require('express-handlebars');
var routes = require('./routes');
var osvServer = require('./osv_server');
var cachifyStatic = require('connect-cachify-static');
var stylus;
var nib;
var jeet;
var server = express();

if (env === 'development') {
  stylus = require('stylus');
  nib = require('nib');
  jeet = require('jeet');
}

i18n.configure({
  directory: __dirname + '/locales',
  objectNotation: true
});

var hbs = expressHandlebars.create({
  extname: '.hbs',
  defaultLayout: 'default'
});

server.use(cachifyStatic(__dirname + '/public'));

server.engine('hbs', hbs.engine);
server.set('view engine', 'hbs');

if (env === 'development') {
  server.use(stylus.middleware({
    src: __dirname + '/assets',
    dest: __dirname + '/public/assets',
    compile: function compile(str, path) {
      return stylus(str)
        .set('filename', path)
        .use(jeet())
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
