import { ApiProperty } from '@nestjs/swagger';

class UserProps {
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

  @ApiProperty({ type: UserProps, isArray: true })
  users: UserProps[];
}

export class SignUpResponse {
  @ApiProperty({ example: 'регистрация прошла успешно' })
  message: string;

  @ApiProperty({ type: UserProps, example: UserProps })
  newUser: {
    id: number;
    username: string;
    password: string;
    email: string;
    updatedAt: string;
    createdAt: string;
  };
}
