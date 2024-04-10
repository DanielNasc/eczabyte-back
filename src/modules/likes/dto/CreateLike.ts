import { IsNotEmpty } from 'class-validator';

export class CrateLikeDTO {
  @IsNotEmpty()
  userId: string;

  @IsNotEmpty()
  tweetId: number;
}
