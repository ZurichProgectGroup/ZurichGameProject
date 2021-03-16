# Api development
1. Create .env file
2. Generate sertificates https://medium.com/@nitinpatel_20236/how-to-create-an-https-server-on-localhost-using-express-366435d61f28
3. Add 127.0.0.1 local.ya-praktikum.tech to  /etc/hosts
4. `docker-compose up`
5. `npx sequelize-cli db:migrate `
6. `tsc`
7. `nodemon ./dist.app.js`
8. Swagger at https://local.ya-praktikum.tech/api-docs/

# Mongo
1. install mongodb
https://docs.mongodb.com/manual/administration/install-community/
2. launch
`brew services start mongodb/brew/mongodb-community`
3. create user
//TODO: how to add via mongo-init.js?
`mongo`
`use <MONGO_DB from .env>`
`db.createUser({
...   user: <MONGO_USERNAME from .env>,
...   pwd: <MONGO_PASSWORD from .env>,
...   roles: [
...   {role: "userAdminAnyDatabase", db: <MONGO_DB from .env> },
...   {role: "readWriteAnyDatabase", db: <MONGO_DB from .env> },
...   {role: "dbAdminAnyDatabase", db: <MONGO_DB from .env> }
...   ]
...   });
