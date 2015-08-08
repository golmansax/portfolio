import RouterRoute from './client/router/route';
import express from 'express';
import cachifyStatic from 'connect-cachify-static';
import i18n from 'i18next';

const server = express();
const env = process.env.NODE_ENV || 'development';

server.use(cachifyStatic(__dirname + '/public'));

if (env === 'development') {
  const stylus = require('stylus');
  const nib = require('nib');
  const jeet = require('jeet');
  const rupture = require('rupture');
  const stylusTypeUtils = require('stylus-type-utils');

  server.use(stylus.middleware({
    src: __dirname + '/client',
    dest: __dirname + '/public/assets',
    compile: (str, path) => {
      return stylus(str)
        .set('filename', path)
        .use(jeet())
        .use(rupture())
        .use(stylusTypeUtils())
        .use(nib());
    },
  }));
}

server.use(express.static(__dirname + '/public'));

i18n.init({
  lng: 'en-US',
  ns: {
    namespaces: [
      'app',
      'community_projects',
      'work_projects',
      'side_projects',
      'resume',
    ],
    defaultNs: 'app',
  },
  returnObjectTrees: true,
});

server.get('/work', RouterRoute);
server.get('/work/:projectId', RouterRoute);
server.get('/side-projects', RouterRoute);
server.get('/side-projects/:projectId', RouterRoute);
server.get('/in-community', RouterRoute);
server.get('/in-community/:projectId', RouterRoute);
server.get('/', RouterRoute);
server.get('/resume', RouterRoute);

export default server;
