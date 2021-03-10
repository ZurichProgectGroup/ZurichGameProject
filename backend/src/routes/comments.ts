import { Router } from 'express';
import CommentsController from '../controllers/CommentsController';
import { protectedRoute } from '../middleware';

export default (router: Router) => {
    const commentsRouter: Router = Router();

    commentsRouter
        .post('/', [protectedRoute], CommentsController.create)
        .get('/:id', [protectedRoute], CommentsController.getReplies)
        .delete('/:id', [protectedRoute], CommentsController.delete);

    router.use('/comments', commentsRouter);
};
