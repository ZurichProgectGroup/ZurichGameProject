import { Sequelize } from 'sequelize-typescript';
import { development } from '../config/config';

export const initPostgreeDB = () => {
    const sequelize = new Sequelize(development);
    sequelize.addModels([`${__dirname}/models`]);
    return sequelize;
};

export default initPostgreeDB;
