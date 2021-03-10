import { Request, Response } from 'express';
import { HTTPStatusCode, CustomRequest } from 'types';
import TopicService from '../services/TopicService';
import { getUsersGroupedById, mapUserToAuthor } from '../utils';

export default class TopicsController {
    public static create = async (request: CustomRequest, response: Response) => {
        const { body, user: { id } } = request;

        const theme = await TopicService.create({ ...body, authorId: id });
        response.status(HTTPStatusCode.Created).json(theme);
    };

    public static getAll = async (request: Request, response: Response) => {
        const themes = await TopicService.getAll();

        response.status(HTTPStatusCode.OK).json(themes);
    };

    public static getById = async (request: CustomRequest, response: Response) => {
        const { id } = request.params;

        const topic = await TopicService.getById(Number(id));

        if (!topic) {
            response.sendStatus(HTTPStatusCode.NotFound);

            return;
        }

        const { authorId, comments, ...topicData } = topic;

        const userIds = new Set<number>();

        userIds.add(authorId);

        comments.forEach(({ authorId: commentAuthorId }) => {
            userIds.add(commentAuthorId);
        });

        const { api } = request;

        const users = await getUsersGroupedById([...userIds], api);

        const result = {
            ...topicData,
            author: mapUserToAuthor(users[authorId]),
            comments: comments.map(({ authorId: commentAuthorId, ...commentData }) => ({
                ...commentData,
                author: mapUserToAuthor(users[commentAuthorId]),
            })),
        };

        response.status(HTTPStatusCode.OK).json(result);
    };

    public static delete = async (request: Request, response: Response) => {
        const { id } = request.params;

        await TopicService.delete(Number(id));

        response.sendStatus(HTTPStatusCode.OK);
    };
}
