import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/modules/global/prisma/prisma.service';
import { UpdateUserDto } from '../dto/update-user-dto';
import { CreateUserDto } from '../dto/create-user-dto';

@Injectable()
export class UsersRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async findAll() {
    return this.prismaService.user.findMany({
      select: {
        id: true,
        username: true,
        email: true,
        likes: true,
        tweets: true,
      },
    });
  }

  async findOneOrFail(id: string) {
    return this.prismaService.user.findUniqueOrThrow({
      where: { id },
      select: {
        id: true,
        username: true,
        email: true,
        likes: true,
        tweets: true,
      },
    });
  }

  async findByUsername(username: string) {
    return this.prismaService.user.findUniqueOrThrow({
      where: { username },
      select: {
        id: true,
        username: true,
        password: true,
        email: true,
        likes: true,
        tweets: true,
      },
    });
  }

  async create(data: CreateUserDto) {
    return this.prismaService.user.create({ data });
  }

  async update(id: string, data: UpdateUserDto) {
    return this.prismaService.user.update({
      where: { id },
      data,
    });
  }

  async delete(id: string) {
    return this.prismaService.user.delete({
      where: { id },
    });
  }
}
