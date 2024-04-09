import { Module } from '@nestjs/common';
import { globalModules } from './modules/global';
import { featureModules } from './modules';

@Module({
  controllers: [],
  providers: [],
  imports: [...globalModules, ...featureModules],
})
export class AppModule {}

// @Module({
//   controllers: [],
//   providers: [],
//   imports: [
//     ...globalModules,
//     ...featureModules,
//     AuthModule,
//     UsersModule,
//     TweetsModule,
//   ],
// })
