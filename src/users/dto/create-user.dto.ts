import {
  IsEmail,
  IsNotEmpty,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'username' })
  @Matches(/^([^0-9]*)$/, { message: 'имя не должно содержать цифры' })
  @MaxLength(20, { message: 'максимальная длинна имени 20 символов' })
  @MinLength(2, { message: 'имя не должно быть кароче 2 символов' })
  @IsNotEmpty({ message: 'имя пользователя обязательно для заполнения' })
  readonly username: string;

  @ApiProperty({ example: 'PDPOKDpkdp89723' })
  @MinLength(6, { message: 'пароль не должен быть кароче 6 символов' })
  @IsNotEmpty({ message: 'пароль обязателен для заполнения' })
  readonly password: string;

  @ApiProperty({ example: 'username@email.com' })
  @IsEmail({}, { message: 'невалидный email' })
  @IsNotEmpty({ message: 'email обязателен для заполнения' })
  readonly email: string;
}
