import { Op, literal } from 'sequelize';
import BaseService from './BaseService';
import Topic, { TopicCreationAttributes } from '../models/Topic';
import Comment from '../models/Comment';

export default class ThemeService implements BaseService {
    public static getAll = () => Topic.findAll({
        raw: true,
        attributes: {
            exclude: ['updatedAt', 'deletedAt'],
            include: [
                [
                    literal(`(
                        SELECT COUNT(*)::int
                        FROM comments
                        WHERE comments."topicId" = "Topic".id AND comments."deletedAt" IS NULL
                    )`),
                    'commentsCount',
                ],
            ],
        },
    });

    public static create = (data: TopicCreationAttributes) => Topic.create(data);

    public static getById = async (id: number) => {
        const topic = await Topic.findOne({
            where: { id },
            attributes: {
                exclude: ['updatedAt', 'deletedAt'],
                include: [
                    [
                        literal(`(
                        SELECT COUNT(*)::int
                        FROM comments
                        WHERE comments."topicId" = "Topic".id AND comments."deletedAt" IS NULL
                    )`),
                        'commentsCount',
                    ],
                ],
            },
            include: [{
                // @ts-ignore
                model: Comment,
                attributes: {
                    exclude: ['topicId', 'parentId', 'parentPath', 'updatedAt', 'deletedAt'],
                    include: [
                        [
                            literal(`(
                                CASE
                                   WHEN comments."id" IS NOT NULL THEN
                                       (SELECT (select count(*)::int
                                                from comments c
                                                where c."parentPath" ~ concat('*.', comments."id", '.*')::lquery
                                                  AND c."deletedAt" IS NULL))
                                   else 0
                                   END
                            )`),
                            'repliesCount',
                        ],
                    ],
                },
                where: {
                    parentId: {
                        [Op.is]: null,
                    },
                },
                required: false,
            }],
        });

        return topic?.get({ plain: true });
    };

    public static delete = (id: number) => Topic.destroy({
        where: {
            id,
        },
    });
}
