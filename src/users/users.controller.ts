import {
  Body,
  Controller,
  Get,
  Post,
  Res,
  Req,
  UseGuards,
} from '@nestjs/common';
import { Response, Request } from 'express';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginGuard } from 'src/auth/login.guard';
import { AuthenticatedGuard } from 'src/auth/authenticated.guard';

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

  @Post('login')
  @UseGuards(LoginGuard)
  async login(@Req() request: Request) {
    const user = request.user;
    return { message: 'вы вошли в систему', user };
  }

  @Get('login-check')
  @UseGuards(AuthenticatedGuard)
  async loginCheck(
    @Req() request: Request,
    @Res() response: Response,
  ): Promise<void> {
    const user = request.user;
    response.json(user);
  }
}
