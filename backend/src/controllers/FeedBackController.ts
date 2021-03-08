import { Request, Response } from 'express';
import FeedServiceService from '../services/FeedBackService';
import HTTP_STATUS from '../utils/httpCodes';

export default class FeedBackController {
    public static create = async (request: Request, response: Response) => {
        const { body } = request;

        try {
            const feedback = await FeedServiceService.create(body);
            response.status(HTTP_STATUS.CREATED).json(feedback);
        } catch (e){
            response.status(HTTP_STATUS.INTERNAL_ERROR).json(e.message);
        }
    };

    public static getAll = async (request: Request, response: Response) => {
        const feedbacks = await FeedServiceService.getAll();

        response.status(HTTP_STATUS.OK).json(feedbacks);
    };

}
