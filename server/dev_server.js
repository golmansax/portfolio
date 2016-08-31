import express from 'express';
import path from 'path';
import stylus from 'stylus';
import nib from 'nib';
import jeet from 'jeet';
import rupture from 'rupture';
import { assetMiddleware } from './asset_utils';
import routeHandler from '../client/router/route';

const server = express();
const rootDirname = path.resolve(__dirname, '..');

server.use(assetMiddleware);

server.use(stylus.middleware({
  src: `${rootDirname}/client`,
  dest: `${rootDirname}/public/assets`,
  compile: (str, filePath) => (
    stylus(str)
      .set('filename', filePath)
      .set('paths', [`${rootDirname}/node_modules`])
      .use(jeet())
      .use(rupture())
      .use(nib())
      .import('jeet')
  ),
}));

server.use(express.static(`${rootDirname}/public`));
server.get('*', routeHandler);

export default server;
