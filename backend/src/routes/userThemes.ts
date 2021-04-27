import { Router } from 'express';
import ThemeController from '../controllers/ThemeController';

export default (router: Router) => {
    const userThemesRouter: Router = Router();

    userThemesRouter
        .post('/', ThemeController.setUserTheme)
        .get('/:userId', ThemeController.getUserTheme);

    router.use('/api/user-themes', userThemesRouter);
};
