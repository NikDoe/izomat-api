import { Injectable, UnauthorizedException } from '@nestjs/common';

import * as bcrypt from 'bcrypt';

import { ValidUserType } from 'src/types';

import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  async validateUser(
    username: string,
    password: string,
  ): Promise<ValidUserType> {
    const existingUser = await this.usersService.findOneUser({ username });

    if (!existingUser) {
      throw new UnauthorizedException(
        'пользователя с таким username не существует',
      );
    }

    const validPassword = bcrypt.compare(password, existingUser.password);

    if (!validPassword) {
      throw new UnauthorizedException('неверные данные');
    }

    if (existingUser && validPassword) {
      return {
        userId: existingUser.id as string,
        username: existingUser.username,
        email: existingUser.email,
      };
    }

    return null;
  }
}
