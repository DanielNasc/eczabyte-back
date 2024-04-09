import { IsNotEmpty } from 'class-validator';

export class CreateTweetDto {
  @IsNotEmpty()
  content: string;

  @IsNotEmpty()
  author: any;

  @IsNotEmpty()
  idUser: string;
}
