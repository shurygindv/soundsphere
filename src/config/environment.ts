const serverOptions = {
  port: process.env.PORT || 7777
};

const dbOptions = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
};


export { dbOptions, serverOptions };
