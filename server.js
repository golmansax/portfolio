'use strict';

require('babel/register');
var RouterRoute = require('./client/router/route');
var env = process.env.NODE_ENV || 'development';
var express = require('express');
var cachifyStatic = require('connect-cachify-static');
var server = express();
var i18n = require('i18next');

server.use(cachifyStatic(__dirname + '/public'));

if (env === 'development') {
  var stylus = require('stylus');
  var nib = require('nib');
  var jeet = require('jeet');
  var rupture = require('rupture');
  var stylusTypeUtils = require('stylus-type-utils');

  server.use(stylus.middleware({
    src: __dirname + '/client',
    dest: __dirname + '/public/assets',
    compile: function(str, path) {
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
server.use(function(req, res, next) {
  res.locals.currentPath = req.path;
  res.locals.navbarLinks = [
    { text: 'Work', url: '/work' },
    { text: 'Side Projects', url: '/side-projects' },
    { url: '/in-community', text: 'In Community' }
  ];
  next();
});

i18n.init({
  lng: 'en-US',
  ns: {
    namespaces: [
      'app',
      'community_projects',
      'work_projects',
      'side_projects',
      'resume'
    ],
    defaultNs: 'app'
  },
  returnObjectTrees: true
});

server.get('/work', RouterRoute);
server.get('/work/:projectId', RouterRoute);
server.get('/side-projects', RouterRoute);
server.get('/side-projects/:projectId', RouterRoute);
server.get('/in-community', RouterRoute);
server.get('/in-community/:projectId', RouterRoute);
server.get('/', RouterRoute);
server.get('/resume', RouterRoute);

if (!module.parent) { server.listen(process.env.PORT || 3000); }

module.exports = server;
