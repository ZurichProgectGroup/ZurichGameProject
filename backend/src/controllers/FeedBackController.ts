import { Request, Response } from 'express';
import FeedServiceService from '../services/FeedBackService';
import HttpStatus from '../utils/httpCodes';

export default class FeedBackController {
    public static create = async (request: Request, response: Response) => {
        const { body } = request;

        try {
            const feedback = await FeedServiceService.create(body);
            response.status(HttpStatus.CREATED).json(feedback);
        } catch (e) {
            response.status(HttpStatus.INTERNAL_ERROR).json(e.message);
        }
    };

    public static getAll = async (request: Request, response: Response) => {
        const feedbacks = await FeedServiceService.getAll();

        response.status(HttpStatus.OK).json(feedbacks);
    };
}
