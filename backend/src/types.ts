import { Request } from 'express';
import { AxiosInstance } from 'axios';

export const enum HTTPStatusCode {
    OK = 200,
    Created = 201,
    Unauthorized = 401,
    Forbidden = 403,
    NotFound= 404,
    InternalServerError = 500,
}

export type User = {
    id: number,
    first_name: string,
    second_name: string,
    display_name: string,
    login: string,
    email: string,
    phone: string,
    avatar: string
};

export interface CustomRequest extends Request {
    user?: User | null;
    api?: AxiosInstance
}
