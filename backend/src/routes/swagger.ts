import { Router } from 'express';
import swaggerUi from 'swagger-ui-express';
import yaml from 'yamljs';
import path from 'path';

const spec = yaml.load(path.resolve('swagger.yaml'));

export default (router: Router) => {
    const swaggerRouter: Router = Router();

    swaggerRouter
        .use('/', swaggerUi.serve)
        .get('/', swaggerUi.setup(spec));

    router.use('/api-docs', swaggerRouter);
};
