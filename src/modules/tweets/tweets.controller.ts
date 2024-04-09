import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TweetsService } from './tweets.service';
import { CreateTweetDto } from './dto/create-tweet.dto';
import { UpdateTweetDto } from './dto/update-tweet.dto';

@Controller('tweets')
export class TweetsController {
  constructor(private readonly tweetsService: TweetsService) {}

  @Post()
  async create(@Body() createTweetDto: CreateTweetDto) {
    return await this.tweetsService.create(createTweetDto);
  }

  @Get()
  findAll() {
    return this.tweetsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tweetsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateTweetDto: UpdateTweetDto) {
    return this.tweetsService.update(id, updateTweetDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.tweetsService.remove(id);
  }

  @Get(':id/getlikes')
  getLikes(@Param('id') id: string) {
    return this.tweetsService.getUserLikes(id);
  }

  @Post(':id/like')
  likeTweet(@Param('id') id: number, @Body('userId') userId: string) {
    return this.tweetsService.likeTweet(userId, id);
  }
}
