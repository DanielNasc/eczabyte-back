import { Injectable } from '@nestjs/common';
import { CreateTweetDto } from './dto/create-tweet.dto';
import { UpdateTweetDto } from './dto/update-tweet.dto';
import { PrismaService } from '../global/prisma/prisma.service';

@Injectable()
export class TweetsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createTweetDto: CreateTweetDto) {
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

  async findAll() {
    return this.prisma.tweet.findMany({
      include: {
        likes: true,
      },
    });
  }

  async findOne(id: string) {
    return this.prisma.tweet.findMany({
      include: {
        likes: true,
      },
      where: {
        authorId: id,
      },
    });
  }

  async update(id: number, updateTweetDto: UpdateTweetDto) {
    return this.prisma.tweet.update({
      where: {
        id,
      },
      data: {
        content: updateTweetDto.content,
      },
    });
  }

  async remove(id: number) {
    return this.prisma.tweet.delete({
      where: {
        id,
      },
    });
  }

  async likeTweet(userId: string, tweetId: number) {
    return this.prisma.like.create({
      data: {
        userId,
        tweetId,
      },
    });
  }

  async getUserLikes(userId: string) {
    return this.prisma.like.findMany({
      where: {
        userId,
      },
    });
  }
}
