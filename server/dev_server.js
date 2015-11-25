import express from 'express';
import path from 'path';
import { assetMiddleware } from './asset_utils';
import { routesData } from '../client/routes';
import { getStaticHtmlPath } from '../server/static_html_utils';
import routeHandler from '../client/router/route';

const server = express();
const rootDirname = path.resolve(__dirname, '..');

server.use(assetMiddleware);

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

server.use(express.static(`${rootDirname}/public`));

routesData.forEach((route) => server.get(route.path, routeHandler));

export default server;
