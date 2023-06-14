import { ApiProperty } from '@nestjs/swagger';

import { User } from '../entities/user.entity';

export class GetAllUsersResponse {
  @ApiProperty({ example: 'получены все пользователи' })
  message: string;

  @ApiProperty({
    type: () => [User],
    example: [
      {
        id: 1,
        username: 'username1',
        password: 'password1',
        email: 'user1@email.com',
        createdAt: '2023-06-06T15:25:58.000Z',
        updatedAt: '2023-06-06T15:25:58.000Z',
      },
      {
        id: 2,
        username: 'username2',
        password: 'password2',
        email: 'user2@email.com',
        createdAt: '2023-06-06T15:25:58.000Z',
        updatedAt: '2023-06-06T15:25:58.000Z',
      },
    ],
  })
  users: User[];
}

export class SignUpResponse {
  @ApiProperty({ example: 'регистрация прошла успешно' })
  message: string;

  @ApiProperty({
    example: {
      id: 1,
      username: 'username',
      password: 'hashed_password',
      email: 'username@email.com',
      updatedAt: '2023-06-14T16:36:49.331Z',
      createdAt: '2023-06-14T16:36:49.331Z',
    },
  })
  newUser: {
    id: number;
    username: string;
    password: string;
    email: string;
    updatedAt: string;
    createdAt: string;
  };
}
