import { SequelizeOptions } from 'sequelize-typescript';
import dotenv from 'dotenv';

dotenv.config();

const development: SequelizeOptions = {
    host: process.env.POSTGRES_HOSTNAME,
    port: Number(process.env.POSTGRES_PORT),
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    dialect: 'postgres',
};

const production: SequelizeOptions = {};

export {
    development,
    production,
};
