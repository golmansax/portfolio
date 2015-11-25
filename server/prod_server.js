import express from 'express';
import path from 'path';
import { routesData } from '../client/routes';
import { getStaticHtmlPath } from '../server/static_html_utils';

const server = express();
server.use(express.static(path.resolve(__dirname, '..', 'public')));

routesData.forEach((route) => {
  server.get(route.path, (req, res) => {
    res.sendFile(getStaticHtmlPath(req.url));
  });
});

export default server;
