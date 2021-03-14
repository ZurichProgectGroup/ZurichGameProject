import BaseService from './BaseService';
import Theme, { ThemeCreationAttributes } from '../models/Theme';

export default class ThemeService implements BaseService {
    public static getAll = () => Theme.findAll({ attributes: ['id', 'title'] });

    public static create = (data: ThemeCreationAttributes) => Theme.create(data);

    public static delete = (id: number) => Theme.destroy({
        where: {
            id,
        },
    });
}
