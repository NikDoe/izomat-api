import { OmitType } from '@nestjs/swagger';
import { CreateUserDto } from '../dto/create-user.dto';

export class LoginRequestBody extends OmitType(CreateUserDto, [
  'username',
] as const) {}
