import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/modules/global/prisma/prisma.service';
import { CrateLikeDTO } from '../dto/CreateLike';

@Injectable()
export class LikesRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create({ tweetId, userId }: CrateLikeDTO) {
    return this.prisma.like.create({
      data: {
        tweetId,
        userId,
      },
    });
  }

  async findAll() {
    return this.prisma.like.findMany();
  }

  async findByTweetId(tweetId: number) {
    return this.prisma.like.findMany({
      where: {
        tweetId,
      },
    });
  }

  async findByUserId(userId: string) {
    return this.prisma.like.findMany({
      where: {
        userId,
      },
    });
  }

  async deleteByTweetIdAndUserId(tweetId: number, userId: string) {
    return this.prisma.like.deleteMany({
      where: {
        tweetId,
        userId,
      },
    });
  }

  async deleteAllLikesForTweet(tweetId: number) {
    return this.prisma.like.deleteMany({
      where: {
        tweetId,
      },
    });
  }
}
