import { Response } from 'express';
import { CustomRequest } from '../types';

export default async function auth(req: CustomRequest, res: Response, next) {
    const { authCookie, uuid } = req.cookies;

    if (!authCookie || !uuid) {
        next();
    }

    const { api } = req;

    try {
        const { data } = await api.get('auth/user');

        req.user = data;
    } catch (e) {
        req.user = null;
    }

    next();
}
