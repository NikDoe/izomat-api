import { ApiProperty } from '@nestjs/swagger';

export class UserObject {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: 'username' })
  username: string;

  @ApiProperty({ example: 'hashed_password' })
  password: string;

  @ApiProperty({ example: 'username@email.com' })
  email: string;

  @ApiProperty({ example: '2023-06-14T16:36:49.331Z' })
  createdAt: string;

  @ApiProperty({ example: '2023-06-14T16:36:49.331Z' })
  updatedAt: string;
}

export class GetAllUsersResponse {
  @ApiProperty({ example: 'получены все пользователи' })
  message: string;

  @ApiProperty({ type: UserObject, isArray: true })
  users: UserObject[];
}

export class SignUpResponse {
  @ApiProperty({ example: 'регистрация прошла успешно' })
  message: string;

  @ApiProperty({ type: UserObject })
  newUser: UserObject;
}

class LoginUserObject implements Pick<UserObject, 'id' | 'username' | 'email'> {
  @ApiProperty({ example: 1111 })
  id: number;

  @ApiProperty({ example: 'username' })
  username: string;

  @ApiProperty({ example: 'user@email.com' })
  email: string;
}

export class LoginResponse {
  @ApiProperty({ example: 'вы вошли в систему' })
  message: string;

  @ApiProperty({ type: LoginUserObject })
  user: LoginUserObject;
}

export class LogoutResponse {
  @ApiProperty({ example: 'вы вышли из системы' })
  message: string;
}
