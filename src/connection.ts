import { createConnection} from 'typeorm';

export const connectToDatabase = async (options: any) => {
  await createConnection({
    type: 'postgres',
    host: options.host,
    port: options.port,
    username: options.username,
    password: options.password,
    database: options.database,
    synchronize: true,
    logging: false,
    entities: ['dist/entity/**/*.js']
  });


  console.log("Database initialized");
};
