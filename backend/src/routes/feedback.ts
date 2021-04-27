import { Router } from 'express';
import FeedBackController from '../controllers/FeedBackController';

export default (router: Router) => {
    const feedbackRouter: Router = Router();
    feedbackRouter.put('/', FeedBackController.create);
    feedbackRouter.get('/', FeedBackController.getAll);
    router.use('/api/feedback', feedbackRouter);
};
