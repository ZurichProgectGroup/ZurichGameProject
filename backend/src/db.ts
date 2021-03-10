import { Sequelize } from 'sequelize-typescript';
import { development } from './config/config';

export default () => {
    const sequelize = new Sequelize(development);

    sequelize.addModels([`${__dirname}/models`]);

    return sequelize;
};
