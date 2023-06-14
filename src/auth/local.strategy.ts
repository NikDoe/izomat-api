import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from './auth.service';
import { ValidUserType } from 'src/users/types';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super();
  }

  async validate(username: string, password: string): Promise<ValidUserType> {
    const user = await this.authService.validateUser(
      username.toLowerCase(),
      password,
    );

    if (!user) {
      throw new UnauthorizedException('неизвестный пользователь');
    }

    return user;
  }
}
