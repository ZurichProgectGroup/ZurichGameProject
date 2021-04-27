import path from 'path';
import express from 'express';
import compression from 'compression';
import 'babel-polyfill';
import serverRenderMiddleware from './server-render-middleware';

const app = express();

// I recommend use it only for development
// In production env you can use Nginx or CDN
app.use(compression())
    .use(express.static(path.resolve(__dirname, '../dist')));

app.get('/*', serverRenderMiddleware);

// eslint-disable-next-line import/prefer-default-export
export { app };
