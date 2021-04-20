import { Request, Response } from 'express';
import { HTTPStatusCode } from 'types';
import ThemeService from '../services/ThemeService';
import UserThemeService from '../services/UserThemeService';

// TODO error handling

export default class ThemeController {
    public static create = async (request: Request, response: Response) => {
        const { body } = request;

        const theme = await ThemeService.create(body);
        response.status(HTTPStatusCode.OK).json(theme);
    };

    public static getAll = async (request: Request, response: Response) => {
        const themes = await ThemeService.getAll();

        response.status(HTTPStatusCode.OK).json(themes);
    };

    public static delete = async (request: Request, response: Response) => {
        const { id } = request.params;

        await ThemeService.delete(Number(id));

        response.sendStatus(HTTPStatusCode.OK);
    };

    public static setUserTheme = async (request: Request, response: Response) => {
        const { body } = request;

        const res = await UserThemeService.setUserTheme(body);

        response.status(HTTPStatusCode.OK).json(res);
    };

    public static getUserTheme = async (request: Request, response: Response) => {
        const { userId } = request.params;

        const theme = await UserThemeService.getUserTheme(Number(userId));

        response.status(HTTPStatusCode.OK).json(theme);
    };
}
