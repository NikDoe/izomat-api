import { PickType } from '@nestjs/swagger';
import { UserObject } from './response';

export class ValidUser extends PickType(UserObject, [
  'id',
  'username',
  'email',
] as const) {}
