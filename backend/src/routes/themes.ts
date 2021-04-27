import { Router } from 'express';
import ThemeController from '../controllers/ThemeController';

export default (router: Router) => {
    const themesRouter: Router = Router();

    themesRouter
        .post('/', ThemeController.create)
        .get('/', ThemeController.getAll)
        .delete('/:id', ThemeController.delete);

    router.use('/themes', themesRouter);
};
