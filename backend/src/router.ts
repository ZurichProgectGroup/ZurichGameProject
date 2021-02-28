import { Router } from 'express';
import { themesRoutes, swaggerRoutes, userThemesRoutes } from './routes';

const router: Router = Router();

themesRoutes(router);
userThemesRoutes(router);
swaggerRoutes(router);

export default router;
