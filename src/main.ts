import 'graphql-import-node';
import 'reflect-metadata';

import { AppModule } from './graphql/graphql.module';
import { connectToDatabase } from './connection';
import { bootstrap } from './bootstrapper';
import { dbOptions } from './config';

bootstrap(AppModule);

connectToDatabase({
  host: dbOptions.host,
  port: Number(dbOptions.port),
  database: dbOptions.database,
  username: dbOptions.username,
  password: dbOptions.password
});
