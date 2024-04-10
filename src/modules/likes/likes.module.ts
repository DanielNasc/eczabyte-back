import { Module } from '@nestjs/common';
import { LikesController } from './likes.controller';
import { LikesService } from './likes.service';
import { LikesRepository } from './repositories/likes.repository';
import { PrismaService } from '../global/prisma/prisma.service';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [UsersModule],
  controllers: [LikesController],
  providers: [LikesService, LikesRepository, PrismaService],
  exports: [LikesService],
})
export class LikesModule {}
