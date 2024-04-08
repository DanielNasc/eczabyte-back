import { Injectable } from '@nestjs/common';
import { CreateTweetDto } from './dto/create-tweet.dto';
import { UpdateTweetDto } from './dto/update-tweet.dto';
import { PrismaService } from 'src/service/prisma.service';

@Injectable()
export class TweetsService {
  private prisma = new PrismaService();

  create(createTweetDto: CreateTweetDto) {
    return this.prisma.tweet.create({
      data: {
        content: createTweetDto.content,
        author: {
          connect: {
            id: createTweetDto.idUser,
          },
        },
      },
    });
  }

  findAll() {
    return this.prisma.tweet.findMany({
      include: {
        likes: true,
      },
    });
  }

  findOne(id: string) {
    return this.prisma.tweet.findMany({
      include: {
        likes: true,
      },
      where: {
        id,
      },
    });
  }

  update(id: string, updateTweetDto: UpdateTweetDto) {
    return this.prisma.tweet.update({
      where: {
        id,
      },
      data: {
        content: updateTweetDto.content,
      },
    });
  }

  remove(id: string) {
    return this.prisma.tweet.delete({
      where: {
        id,
      },
    });
  }

  likeTweet(userId: string, tweetId: number) {
    return this.prisma.like.create({
      data: {
        userId,
        tweetId,
      },
    });
  }

  getUserLikes(userId: string) {
    return this.prisma.like.findMany({
      where: {
        userId,
      },
    });
  }
}
