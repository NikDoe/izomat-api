import { ConflictException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import * as bcrypt from 'bcrypt';

import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private userModel: typeof User) {}

  async getAllUsers(): Promise<User[]> {
    return await this.userModel.findAll();
  }

  async findOneUser(where: {
    id?: string;
    username?: string;
    email?: string;
  }): Promise<User> {
    return await this.userModel.findOne({ where });
  }

  async createNewUser(createUserDto: CreateUserDto): Promise<User> {
    const newUser = new User();

    const existingByUserName = await this.findOneUser({
      username: createUserDto.username,
    });

    if (existingByUserName) {
      throw new ConflictException('Пользователь с таким именем уже существует');
    }

    const existingByEmail = await this.findOneUser({
      email: createUserDto.email,
    });

    if (existingByEmail) {
      throw new ConflictException('Пользователь с таким email уже существует');
    }

    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);

    newUser.username = createUserDto.username;
    newUser.password = hashedPassword;
    newUser.email = createUserDto.email;

    return newUser.save();
  }
}
