import { GraphQLModule } from '@graphql-modules/core';

import * as typeDefs from './track.scheme.graphql';
import { TrackService } from './track.service';

export const TrackModule = new GraphQLModule({
  providers: [TrackService],

  typeDefs,
  resolvers: {
    Track: {}
  }
});
