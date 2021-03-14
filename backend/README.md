# Api development
1. Create .env file
2. `docker-compose up`
3. `npx tsc src/app.ts`
4. `nodemon ./dist/app.js`
5. Swagger at http://localhost:3000/api-docs/

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
