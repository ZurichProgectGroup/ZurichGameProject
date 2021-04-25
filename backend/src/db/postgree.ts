import { Sequelize } from 'sequelize-typescript';
import { development } from '../config/config';
import Topic from '../models/Topic';
import Comment from '../models/Comment';
import Theme from '../models/Theme';
import UserTheme from '../models/UserTheme';

export const initPostgreeDB = () => {
    const sequelize = new Sequelize(development);
    sequelize.addModels([Topic, Comment, UserTheme, Theme]);
    return sequelize;
};

export default initPostgreeDB;
