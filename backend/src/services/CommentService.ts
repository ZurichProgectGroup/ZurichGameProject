import { Op, literal } from 'sequelize';
import BaseService from './BaseService';
import Comment, { CommentCreationAttributes } from '../models/Comment';

export default class CommentService implements BaseService {
    public static create = (data: CommentCreationAttributes) => Comment.create(data);

    public static getChildren = (id: number) => Comment.findAll({
        raw: true,
        attributes: ['id', 'text', 'authorId', 'parentId', 'createdAt'],
        where: {
            [Op.and]: [
                literal(`"parentPath" ~ '*.${id}.*'`),
            ],
        },
    });

    public static delete = (id: number) => Comment.destroy({
        where: {
            id,
        },
    });
}
