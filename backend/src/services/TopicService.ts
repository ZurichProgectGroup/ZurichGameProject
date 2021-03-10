import { Op } from 'sequelize';
import BaseService from './BaseService';
import Topic, { TopicCreationAttributes } from '../models/Topic';
import Comment from '../models/Comment';

export default class ThemeService implements BaseService {
    public static getAll = () => Topic.findAll();

    public static create = (data: TopicCreationAttributes) => Topic.create(data);

    public static getById = async (id: number) => {
        const topic = await Topic.findOne({
            where: { id },
            attributes: ['id', 'title', 'content', 'authorId', 'createdAt'],
            include: [{
                // @ts-ignore
                model: Comment,
                attributes: ['id', 'text', 'createdAt', 'authorId'],
                where: {
                    parentId: {
                        [Op.is]: null,
                    },
                },
            }],
        });

        return topic.get({ plain: true });
    };

    public static delete = (id: number) => Topic.destroy({
        where: {
            id,
        },
    });
}
