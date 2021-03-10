import { Router } from 'express';
import {
    themesRoutes, userThemesRoutes, topicsRoutes, commentsRoutes,
} from './routes';

const router: Router = Router();

themesRoutes(router);
userThemesRoutes(router);
topicsRoutes(router);
commentsRoutes(router);

export default router;
