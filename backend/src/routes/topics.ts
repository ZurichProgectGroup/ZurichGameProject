import { Router } from 'express';
import TopicsController from '../controllers/TopicsController';
import { protectedRoute } from '../middleware';

export default (router: Router) => {
    const topicsRouter: Router = Router();

    topicsRouter
        .post('/', [protectedRoute], TopicsController.create)
        .get('/', [protectedRoute], TopicsController.getAll)
        .get('/:id', [protectedRoute], TopicsController.getById)
        .delete('/:id', [protectedRoute], TopicsController.delete);

    router.use('/topics', topicsRouter);
};
