import express from 'express';
import path from 'path';

const server = express();

// Mimic site being loaded at /portfolio in production
server.use('/portfolio', express.static(path.resolve(__dirname, '..', 'public')));

export default server;
