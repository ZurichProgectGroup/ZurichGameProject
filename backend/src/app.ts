import express, { Express } from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import path from 'path';
import fs from 'fs';
import https from 'https';
import * as OpenApiValidator from 'express-openapi-validator';
import swaggerUi from 'swagger-ui-express';
import yaml from 'yamljs';
import router from './router';
import { initMongoDB } from './db/mongo';
import { initPostgreeDB } from './db/postgree';
import { auth, errorHandler, makeApiInstance } from './middleware';

const specPath = path.resolve('swagger.yaml');
const spec = yaml.load(specPath);

dotenv.config();

let key;
let cert;
try {
    key = fs.readFileSync(path.resolve(process.cwd(), 'backend/certs/key.pem'));
    cert = fs.readFileSync(path.resolve(process.cwd(), 'backend/certs/cert.pem'));
} catch (e) {
    console.log(`serts error ${e}`);
}

const app: Express = express();
const PORT = process.env.BACKEND_PORT || 443;
initMongoDB();
const postgreedb = initPostgreeDB();

app
    .disable('x-powered-by')
    .enable('trust proxy')
    .use(express.json())
    .use(cors({
        credentials: true,
        origin: true,
    }))
    .use(cookieParser())
    .use('/api-docs', swaggerUi.serve, swaggerUi.setup(spec))
    .use(
        OpenApiValidator.middleware({
            apiSpec: specPath,
            validateResponses: true,
        }),
    )
    .use(makeApiInstance)
    .use(auth)
    .use(router)
    .use(errorHandler);

const server = key ? https.createServer({ key, cert }, app) : app;

(async () => {
    try {
        await postgreedb.sync({ alter: true });
    } catch (e) {
        console.log(`postgreedb error ${e}`);
    }

    server.listen(PORT, () => { console.log(`listening on ${PORT}`); });
})();
