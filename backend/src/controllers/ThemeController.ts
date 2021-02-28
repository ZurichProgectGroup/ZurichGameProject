import { Request, Response } from 'express';
import ThemeService from '../services/ThemeService';
import UserThemeService from '../services/UserThemeService';

// TODO error handling

export default class ThemeController {
    public static create = async (request: Request, response: Response) => {
        const { body } = request;

        const theme = await ThemeService.create(body);
        response.status(201).json(theme);
    };

    public static getAll = async (request: Request, response: Response) => {
        const themes = await ThemeService.getAll();

        response.status(200).json(themes);
    };

    public static delete = async (request: Request, response: Response) => {
        const { id } = request.params;

        await ThemeService.delete(Number(id));

        response.sendStatus(200);
    };

    public static setUserTheme = async (request: Request, response: Response) => {
        const { body } = request;

        const res = await UserThemeService.setUserTheme(body);

        response.status(200).json(res);
    };

    public static getUserTheme = async (request: Request, response: Response) => {
        const { userId } = request.params;

        const theme = await UserThemeService.getUserTheme(Number(userId));

        response.status(200).json(theme);
    };
}
