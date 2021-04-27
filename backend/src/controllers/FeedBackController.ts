import { Request, Response } from 'express';
import { HTTPStatusCode } from '../types';
import FeedServiceService from '../services/FeedBackService';

export default class FeedBackController {
    public static create = async (request: Request, response: Response) => {
        const { body } = request;

        try {
            const feedback = await FeedServiceService.create(body);
            response.status(HTTPStatusCode.Created).json(feedback);
        } catch (e) {
            response.status(HTTPStatusCode.InternalServerError).json(e.message);
        }
    };

    public static getAll = async (request: Request, response: Response) => {
        const feedbacks = await FeedServiceService.getAll();

        response.status(HTTPStatusCode.OK).json(feedbacks);
    };
}
