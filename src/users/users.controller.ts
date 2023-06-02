import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async findAll(@Res() response: Response): Promise<void> {
    const users = await this.usersService.getAllUsers();
    response.json({ message: 'получены все пользователи', users });
  }
}
