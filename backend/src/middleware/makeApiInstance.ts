import { Response } from 'express';
import axios from 'axios';
import { CustomRequest } from '../types';

export default async function makeApiInstance(req: CustomRequest, res: Response, next) {
    const { authCookie, uuid } = req.cookies;

    let cookies = '';

    if (authCookie && uuid) {
        const cookiesData = {
            authCookie,
            uuid,
        };

        cookies = Object
            .entries(cookiesData)
            .map(([key, val]) => `${key}=${val}`)
            .join(';');
    }

    req.api = axios.create({
        baseURL: 'https://ya-praktikum.tech/api/v2/',
        headers: { Cookie: cookies },
    });

    next();
}
