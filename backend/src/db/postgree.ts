import { Sequelize, SequelizeOptions } from 'sequelize-typescript';
import Theme from '../models/Theme';
import UserTheme from '../models/UserTheme';

export const initPostgreeDB = () => {
    const sequelizeOptions: SequelizeOptions = {
        host: process.env.POSTGRES_HOSTNAME,
        port: Number(process.env.POSTGRES_PORT),
        username: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DB,
        dialect: 'postgres',
    };
    const sequelize = new Sequelize(sequelizeOptions);
    sequelize.addModels([Theme, UserTheme]);
    return sequelize;
};
export default initPostgreeDB;
