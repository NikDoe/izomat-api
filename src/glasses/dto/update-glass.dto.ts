import { PartialType } from '@nestjs/swagger';
import { CreateGlassDto } from './create-glass.dto';

export class UpdateGlassDto extends PartialType(CreateGlassDto) {}
