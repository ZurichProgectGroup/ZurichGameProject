import { Request, Response } from 'express';
import { HTTPStatusCode, CustomRequest } from '../types';
import CommentService from '../services/CommentService';
import { mapUserToAuthor, getUsersGroupedById, buildCommentTree } from '../utils';

export default class CommentsController {
    public static create = async (request: CustomRequest, response: Response) => {
        const { body, user: { id } } = request;

        const comment = await CommentService.create({ ...body, authorId: id });
        response.status(HTTPStatusCode.Created).json(comment);
    };

    public static getReplies = async (request: CustomRequest, response: Response) => {
        const { id } = request.params;
        const commentId = Number(id);

        const comments = await CommentService.getChildren(commentId);

        const userIds = new Set<number>();

        comments.forEach(({ authorId }) => {
            userIds.add(authorId);
        });

        const { api } = request;

        const users = await getUsersGroupedById([...userIds], api);

        const commentsWithUsers = comments.map(({ authorId, ...commentData }) => ({
            ...commentData,
            author: mapUserToAuthor(users[authorId]),
        }));

        response.status(HTTPStatusCode.OK).json(buildCommentTree(commentsWithUsers, commentId));
    };

    public static delete = async (request: Request, response: Response) => {
        const { id } = request.params;

        await CommentService.delete(Number(id));

        response.sendStatus(HTTPStatusCode.OK);
    };
}
