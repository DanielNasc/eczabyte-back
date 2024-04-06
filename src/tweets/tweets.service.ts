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
    return this.prisma.tweet.findMany();
  }

  findOne(id: number) {
    return this.prisma.tweet.findMany({
      where: {
        id,
      },
    });
  }

  update(id: number, updateTweetDto: UpdateTweetDto) {
    return this.prisma.tweet.update({
      where: {
        id,
      },
      data: {
        content: updateTweetDto.content,
      },
    });
  }

  remove(id: number) {
    return this.prisma.tweet.delete({
      where: {
        id,
      },
    });
  }
}
