import express, { Express } from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import router from './router';
import initDb from './db';

dotenv.config();

const server: Express = express();
const PORT = process.env.PORT || 3000;
const db = initDb();

server
    .disable('x-powered-by')
    .enable('trust proxy')
    .use(express.json())
    .use(cookieParser())
    .use(router);

(async () => {
    await db.sync({ alter: true });

    server.listen(PORT);
})();
