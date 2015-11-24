import express from 'express';
import path from 'path';
import cachifyStatic from 'connect-cachify-static';
import { isDevelopment, isProduction } from './config';
import { routesData } from '../client/routes';
import { getStaticHtmlPath } from '../server/static_html_utils';
import './my_i18n';

const server = express();
const rootDirname = path.resolve(__dirname, '..');

server.use(cachifyStatic(`${rootDirname}/public`));

if (isDevelopment()) {
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

routesData.forEach((route) => {
  let routeHandler;
  if (isProduction()) {
    routeHandler = (req, res) => {
      res.sendFile(getStaticHtmlPath(req.url));
    };
  } else {
    routeHandler = require('../client/router/route').default;
  }

  server.get(route.path, routeHandler);
});

export default server;
