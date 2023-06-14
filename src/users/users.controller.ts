import {
  Body,
  Controller,
  Get,
  Post,
  Res,
  Req,
  UseGuards,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOkResponse,
  ApiOperation,
  ApiBody,
  ApiBadRequestResponse,
  ApiConflictResponse,
} from '@nestjs/swagger';

import { Response, Request } from 'express';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginGuard } from 'src/auth/login.guard';
import { AuthenticatedGuard } from 'src/auth/authenticated.guard';
import {
  GetAllUsersResponse,
  BadRequestErrorType,
  SignUpResponse,
  ConflictErrorType,
} from './types';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiOperation({
    summary: 'Получение всех пользователей',
    description:
      'используйте этот  ROUTE, если вы хотите получить массив состоящих из объектов данных пользователей',
  })
  @ApiOkResponse({ type: GetAllUsersResponse })
  @Get()
  async findAll(@Res() response: Response): Promise<void> {
    const users = await this.usersService.getAllUsers();
    response.json({ message: 'получены все пользователи', users });
  }

  @ApiOperation({
    summary: 'Регистрация нового пользователя',
    description:
      'используйте этот  ROUTE, если вы хотите зарегистрировать нового пользователя',
  })
  @ApiBody({
    type: CreateUserDto,
    description: 'Объект который должен прийти с клиента',
  })
  @ApiOkResponse({ type: SignUpResponse })
  @ApiBadRequestResponse({ type: BadRequestErrorType })
  @ApiConflictResponse({ type: ConflictErrorType })
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
  async login(
    @Req() request: Request,
    @Res() response: Response,
  ): Promise<void> {
    const user = request.user;
    response.json({ message: 'вы вошли в систему', user });
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

  @Get('logout')
  async logout(@Res() response: Response): Promise<void> {
    response.clearCookie(process.env.SESSION_ID_NAME);
    response.json({ message: 'вы вышли из системы' });
  }
}
