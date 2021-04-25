import { getSequelizeInstance } from './db/postgree';

const instance = getSequelizeInstance();

(async () => {
    await instance.sync({ alter: true });
})();
