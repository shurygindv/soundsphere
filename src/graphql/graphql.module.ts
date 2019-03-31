import { GraphQLModule } from '@graphql-modules/core';

import { UserModule } from './user/user.module';
import { TrackModule } from './track/track.module';

export const AppModule = new GraphQLModule({
  imports: [UserModule, TrackModule]
});
