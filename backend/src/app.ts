import express, { Express } from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import router from './router';
import { initMongoDB } from './db/mongo';
import { initPostgreeDB } from './db/postgree';

dotenv.config();
initMongoDB();
const server: Express = express();
const PORT = process.env.PORT || 3000;
const postgreedb = initPostgreeDB();

server
    .disable('x-powered-by')
    .enable('trust proxy')
    .use(express.json())
    .use(cookieParser())
    .use(router);

(async () => {
    try {
        await postgreedb.sync({ alter: true });
    } catch (e) {
        console.log('postgreedb error', e);
    }
    server.listen(PORT);
    console.log('Backend server started at Port: ', PORT);
})();
