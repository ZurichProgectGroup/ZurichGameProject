import { Response } from 'express';
import { HTTPStatusCode, CustomRequest } from '../types';

export default async function protectedRoute(req: CustomRequest, res: Response, next) {
    const { user } = req;

    if (!user) {
        res.sendStatus(HTTPStatusCode.Forbidden);
    }

    next();
}
