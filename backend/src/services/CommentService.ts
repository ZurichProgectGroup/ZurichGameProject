import { Op, literal } from 'sequelize';
import BaseService from './BaseService';
import Comment, { CommentCreationAttributes } from '../models/Comment';

export default class CommentService implements BaseService {
    public static create = (data: CommentCreationAttributes) => Comment.create(
        data,
        {
            fields: ['text', 'topicId', 'authorId', 'parentId'],
        },
    );

    public static getChildren = (id: number) => Comment.findAll({
        raw: true,
        attributes: {
            include: [
                [
                    literal(`
                    (SELECT (select count(*)::int
                        from comments c
                        where c."parentPath" ~ concat('*.', "Comment"."id", '.*')::lquery
                        AND c."deletedAt" IS NULL))
                    `),
                    'repliesCount',
                ],
            ],
            exclude: ['topicId', 'parentPath', 'updatedAt', 'deletedAt'],
        },
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
