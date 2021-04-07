const {
  MONGO_USERNAME,
  MONGO_PASSWORD,
  MONGO_PORT,
  MONGO_DB
} = process.env;

db.createUser(
        {
            user: MONGO_USERNAME,
            pwd: MONGO_PASSWORD,
            roles: [
                {
                    {role: "userAdminAnyDatabase", db: MONGO_DB },
                    {role: "readWriteAnyDatabase", db: MONGO_DB },
                    {role: "dbAdminAnyDatabase", db: MONGO_DB }
                }
            ]
        }
);
