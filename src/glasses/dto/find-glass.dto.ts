import { PartialType } from '@nestjs/swagger';
import { CreateGlassDto } from './create-glass.dto';

export class FindOneGlassDto extends PartialType(CreateGlassDto) {
  id?: number;
}
