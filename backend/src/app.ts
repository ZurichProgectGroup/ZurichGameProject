import express, { Express } from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import router from './router';
import {initMongoDB} from './db/mongo';
import {initPostgreeDB} from './db/postgree';

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
    await postgreedb.sync({ alter: true });

    server.listen(PORT);
})();
