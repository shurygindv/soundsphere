import { GraphQLModule } from '@graphql-modules/core';
import { ApolloServer } from 'apollo-server';

import { serverOptions } from './config';

export const bootstrap = async (module: GraphQLModule<any, any, any>) => {
  const server = new ApolloServer({
      schema: module.schema,
      context: module.context,
      introspection: true,
  });

  const application = await server.listen(serverOptions.port);

  console.log(`Server ready at ${application.url}`);
};