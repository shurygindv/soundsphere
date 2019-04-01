import {GraphQLModule} from '@graphql-modules/core';

// modules
import {UserModule} from './modules/user/user.module';
import {TrackModule} from './modules/track/track.module';

export const AppModule = new GraphQLModule({
  imports: [UserModule, TrackModule],
});
