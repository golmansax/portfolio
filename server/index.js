import RouterRoute from '../client/router/route';
import express from 'express';
import path from 'path';
import cachifyStatic from 'connect-cachify-static';
import i18n from 'i18next';
import routes from './routes';

const server = express();
const env = process.env.NODE_ENV || 'development';
const rootDirname = path.resolve(__dirname, '..');

server.use(cachifyStatic(`${rootDirname}/public`));

if (env === 'development') {
  const stylus = require('stylus');
  const nib = require('nib');
  const jeet = require('jeet');
  const rupture = require('rupture');

  server.use(stylus.middleware({
    src: `${rootDirname}/client`,
    dest: `${rootDirname}/public/assets`,
    compile: (str, filePath) => {
      return stylus(str)
        .set('filename', filePath)
        .set('paths', [`${rootDirname}/node_modules`])
        .use(jeet())
        .use(rupture())
        .use(nib());
    },
  }));
}

server.use(express.static(`${rootDirname}/public`));

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

routes.forEach((route) => server.get(route, RouterRoute));

export default server;
