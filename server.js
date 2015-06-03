'use strict';

require('babel/register');
var env = process.env.NODE_ENV || 'development';
var express = require('express');
var i18n = require('i18n');
var routes = require('./routes');
var osvServer = require('./osv_server');
var cachifyStatic = require('connect-cachify-static');
var server = express();

i18n.configure({
  directory: __dirname + '/locales',
  objectNotation: true
});

server.use(cachifyStatic(__dirname + '/public'));
server.set('view engine', 'jade');
server.set('views', __dirname + '/client');

if (env === 'development') {
  var stylus = require('stylus');
  var nib = require('nib');
  var jeet = require('jeet');
  var rupture = require('rupture');
  var stylusTypeUtils = require('stylus-type-utils');

  server.use(stylus.middleware({
    src: __dirname + '/client',
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

// New experimental routes
server.get('/work', routes.workProjects);
server.get('/side-projects', routes.sideProjects);
server.get('/in-community', routes.communityProjects);
server.get('/portfolio', routes.portfolio);

// Old routes
server.get('/', routes.resume);
server.get('/resume', routes.resume);
server.get('/human-centered-design', routes.hcd);
server.get('/donations-pledge', routes.donations);
server.use('/office-street-view', osvServer);

if (!module.parent) { server.listen(process.env.PORT || 3000); }

module.exports = server;
