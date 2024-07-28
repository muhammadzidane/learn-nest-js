import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  create(createUserDto: CreateUserDto) {
    console.log(createUserDto);

    return {
      statusCode: 200,
      message: 'Success!',
      data: createUserDto,
    };
  }

  findAll() {
    return {
      statusCode: 200,
      message: 'Success!',
      data: `This action returns all users`,
    };
  }

  findOne(id: number, location: string) {
    return {
      statusCode: 200,
      message: 'Success!',
      data: `This action returns a #${id} user, located at ${location}`,
    };
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return {
      statusCode: 200,
      message: 'Success!',
      data: `This action updates a #${id} user`,
    };
  }

  remove(id: number) {
    return {
      statusCode: 200,
      message: 'Success!',
      data: `This action removes a #${id} user`,
    };
  }
}
