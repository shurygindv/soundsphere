import { GraphQLModule } from '@graphql-modules/core';

import * as typeDefs from './user.scheme.graphql';
import resolvers from './user.resolvers';

export const UserModule = new GraphQLModule({
  typeDefs,
  resolvers
});
