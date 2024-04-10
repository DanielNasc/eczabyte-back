import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { LikesService } from 'src/modules/likes/likes.service';
import { UsersService } from 'src/modules/users/users.service';

@Controller('likes')
export class LikesController {
  constructor(
    private readonly likesService: LikesService,
    private readonly usersService: UsersService, // Inject UsersService
  ) {}

  // Create a like
  @Post()
  async createLike(@Body() data: { userId: string; tweetId: number }) {
    // Check if the user exists before creating the like
    const user = await this.usersService.findOne(data.userId);
    if (!user) {
      throw new Error('User not found');
    }

    return this.likesService.create({
      tweetId: data.tweetId,
      userId: data.userId,
    });
  }

  // Get all likes
  @Get()
  async getAllLikes() {
    return this.likesService.findAll();
  }

  // Get likes by user ID
  @Get('user/:userId')
  async getLikesByUser(@Param('userId') userId: string) {
    return this.likesService.findByUserId(userId);
  }

  // Get likes by tweet ID
  @Get('tweet/:tweetId')
  async getLikesByTweet(@Param('tweetId') tweetId: number) {
    return this.likesService.findByTweetId(tweetId);
  }

  // Delete a like by ID
  @Delete('user/:userId/tweet/:tweetId')
  async deleteLike(
    @Param('userId') userId: string,
    @Param('tweetId') tweetId: number,
  ) {
    return this.likesService.deleteByTweetIdAndUserId(tweetId, userId);
  }
}
