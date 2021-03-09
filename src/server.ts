/* eslint-disable import/no-extraneous-dependencies */
import path from 'path';
import express from 'express';
import compression from 'compression';
import 'babel-polyfill';
import webpack from 'webpack';
import devMiddleware from 'webpack-dev-middleware';
import hotMiddleware from 'webpack-hot-middleware';
import cookieParser from 'cookie-parser';
import serverRenderMiddleware from './server-render-middleware';
import config from '../webpack/client.config';

// @ts-ignore
const compiler = webpack({ ...config, mode: 'development' });

const app = express();

app.use(compression())
    .use(devMiddleware(compiler, {
        publicPath: '/',
    }))
    .use(hotMiddleware(compiler))
    .use(express.static(path.resolve(__dirname, '../dist')))
    .use(cookieParser({
        httpOnly: true,
        sameSite: 'none',
    }));

app.get('/*', serverRenderMiddleware);

// eslint-disable-next-line import/prefer-default-export
export { app };
