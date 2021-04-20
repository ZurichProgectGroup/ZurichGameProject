import { Router } from 'express';
import {
    themesRoutes,
    userThemesRoutes,
    feedbackRoutes,
    topicsRoutes,
    commentsRoutes,
} from './routes';

const router: Router = Router();

themesRoutes(router);
userThemesRoutes(router);
topicsRoutes(router);
commentsRoutes(router);
feedbackRoutes(router);

export default router;
