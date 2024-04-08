import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TweetsModule } from './tweets/tweets.module';
import { globalModules } from './modules/global';
import { featureModules } from './modules';
import { AuthModule } from './modules/auth/auth.module';
@Module({
  controllers: [],
  providers: [],
  imports: [
    ...globalModules,
    ...featureModules,
    AuthModule,
    UsersModule,
    TweetsModule,
  ],
})
export class AppModule {}
