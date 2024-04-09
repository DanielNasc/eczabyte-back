import { AuthModule } from './auth/auth.module';
import { TweetsModule } from './tweets/tweets.module';
import { UsersModule } from './users/users.module';

export const featureModules = [UsersModule, AuthModule, TweetsModule];
