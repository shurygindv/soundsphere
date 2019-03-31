import {GraphQLModule} from '@graphql-modules/core';

import * as typeDefs from './user.typedefs.graphql';
import resolvers from './user.resolver';
import {UserService} from './user.service';

export const UserModule = new GraphQLModule({
  providers: [UserService],

  typeDefs,
  resolvers,
});
