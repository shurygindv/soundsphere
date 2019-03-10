import { GraphQLModule } from '@graphql-modules/core';
import gql from 'graphql-tag';

import { TrackService } from './track.service';

export const TrackModule = new GraphQLModule({
  providers: [TrackService],

  typeDefs: gql`
    type Track {
      id: ID!
      name: String
      dataTODOTYPE: String
      author: String
      length: Float
    }
  `,
  resolvers: {
    Track: {}
  }
});
