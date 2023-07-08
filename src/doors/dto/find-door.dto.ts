import { PartialType } from '@nestjs/swagger';
import { CreateDoorDto } from './create-door.dto';

export class FindOneDoorDto extends PartialType(CreateDoorDto) {
  id?: number;
}
