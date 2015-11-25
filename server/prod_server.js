import express from 'express';
import path from 'path';

const server = express();
server.use(express.static(path.resolve(__dirname, '..', 'public')));

export default server;
