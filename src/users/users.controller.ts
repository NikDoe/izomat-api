import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async findAll(@Res() response: Response): Promise<void> {
    const users = await this.usersService.getAllUsers();
    response.json({ message: 'получены все пользователи', users });
  }

  @Post('signup')
  async createNewUser(
    @Body() createUserDto: CreateUserDto,
    @Res() response: Response,
  ) {
    const newUser = await this.usersService.createNewUser(createUserDto);
    response.json({ message: 'регистрация прошла успешно', newUser });
  }
}
