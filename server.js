'use strict';

require('babel/register');
var env = process.env.NODE_ENV || 'development';
var express = require('express');
var routes = require('./routes');
var osvServer = require('./osv_server');
var cachifyStatic = require('connect-cachify-static');
var server = express();

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
server.use(function (req, res, next) {
  res.locals.currentPath = req.path;
  res.locals.navbarLinks = [
    { text: 'Work', url: '/work' },
    { text: 'Side Projects', url: '/side-projects' },
    { url: '/in-community', text: 'In Community' }
  ];
  next();
});

// New experimental routes
server.get('/work', routes.workProjects);
server.get('/work/:projectId', routes.workProjects);
server.get('/side-projects', routes.sideProjects);
server.get('/side-projects/:projectId', routes.workProjects);
server.get('/in-community', routes.communityProjects);
server.get('/in-community/:projectId', routes.workProjects);
server.get('/', routes.portfolio);
server.get('/resume', routes.resume);

// Old routes
server.get('/human-centered-design', routes.hcd);
server.get('/donations-pledge', routes.donations);
server.use('/office-street-view', osvServer);

if (!module.parent) { server.listen(process.env.PORT || 3000); }

module.exports = server;
