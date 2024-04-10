import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CrateLikeDTO } from './dto/CreateLike';
import { Like } from '@prisma/client';
import { LikesRepository } from './repositories/likes.repository';

@Injectable()
export class LikesService {
  constructor(private readonly likesRepository: LikesRepository) {} // Inject Prisma service

  async create(createLikeDto: CrateLikeDTO) {
    try {
      return await this.likesRepository.create(createLikeDto);
    } catch (error) {
      // Handle errors, maybe log or throw an appropriate exception
      throw new HttpException(
        {
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          error: 'Não foi possivel criar o like',
        },
        HttpStatus.CONFLICT,
        {
          cause: error,
        },
      );
    }
  }

  async findAll(): Promise<Like[]> {
    try {
      return await this.likesRepository.findAll();
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          error: 'Failed to fetch likes',
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findByTweetId(tweetId: number): Promise<Like[]> {
    try {
      return await this.likesRepository.findByTweetId(tweetId);
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          error: 'Failed to fetch likes for the tweet',
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findByUserId(userId: string): Promise<Like[]> {
    try {
      return await this.likesRepository.findByUserId(userId);
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          error: 'Failed to fetch likes for the user',
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async deleteByTweetIdAndUserId(tweetId: number, userId: string) {
    try {
      return await this.likesRepository.deleteByTweetIdAndUserId(
        tweetId,
        userId,
      );
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          error: 'Failed to delete like',
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
