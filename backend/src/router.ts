import { Router } from 'express';
import {
    themesRoutes,
    swaggerRoutes,
    userThemesRoutes,
    feedbackRoutes,
} from './routes';

const router: Router = Router();

themesRoutes(router);
userThemesRoutes(router);
swaggerRoutes(router);
feedbackRoutes(router);

export default router;
