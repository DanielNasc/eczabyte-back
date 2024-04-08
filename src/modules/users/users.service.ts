import * as bcrypt from 'bcrypt';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UsersRepository } from './repositories/users.repository';
import { UpdateUserDto } from './dto/update-user-dto';
import { CreateUserDto } from './dto/create-user-dto';

export const roundsOfHashing = 10;

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async findAll() {
    return await this.usersRepository.findAll();
  }

  async findOne(id: string) {
    try {
      return await this.usersRepository.findOneOrFail(id);
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: error.message,
        },
        HttpStatus.NOT_FOUND,
        {
          cause: error,
        },
      );
    }
  }

  async findByUsername(username: string) {
    try {
      return await this.usersRepository.findByUsername(username);
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: error.message,
        },
        HttpStatus.NOT_FOUND,
        {
          cause: error,
        },
      );
    }
  }

  async create(createUserDto: CreateUserDto) {
    try {
      const hashedPassword = await bcrypt.hashSync(
        createUserDto.password,
        roundsOfHashing,
      );
      createUserDto.password = hashedPassword;
      return await this.usersRepository.create(createUserDto);
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'O Email ou o Username já existem',
        },
        HttpStatus.CONFLICT,
        {
          cause: error,
        },
      );
    }
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    if (updateUserDto.password) {
      const hashedPassword = await bcrypt.hashSync(
        updateUserDto.password,
        roundsOfHashing,
      );
      updateUserDto.password = hashedPassword;
    }
    return await this.usersRepository.update(id, updateUserDto);
  }

  async delete(id: string) {
    return await this.usersRepository.delete(id);
  }
}
