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

const key = fs.readFileSync(path.resolve(process.cwd(), 'certs/key.pem'));
const cert = fs.readFileSync(path.resolve(process.cwd(), 'certs/cert.pem'));

const app: Express = express();
const PORT = process.env.PORT || 443;
initMongoDB();
const postgreedb = initPostgreeDB();

app
    .disable('x-powered-by')
    .enable('trust proxy')
    .use(express.json())
    .use(cors({
        credentials: true,
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

const server = https.createServer({ key, cert }, app);

(async () => {
    await postgreedb.sync({ alter: true });

    server.listen(PORT, () => { console.log(`listening on ${PORT}`); });
})();
