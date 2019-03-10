import { GraphQLModule } from '@graphql-modules/core';
import gql from 'graphql-tag';

import { UserService } from './user.service';

export const UserModule = new GraphQLModule({
  providers: [UserService],

  typeDefs: gql`
    type User {
      id: ID!
      firstName: String
      lastName: String
      email: String!
    }
  `,
  resolvers: {
    User: {}
  }
});
