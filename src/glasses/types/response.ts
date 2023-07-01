import { ApiProperty } from '@nestjs/swagger';
import { CreateGlassDto } from '../dto/create-glass.dto';

class GlassObject extends CreateGlassDto {
  @ApiProperty({ example: '2023-07-01T12:37:59.171Z' })
  createdAt: string;

  @ApiProperty({ example: '2023-07-01T12:37:59.171Z' })
  updatedAt: string;
}

class GlassResponseObject {
  message: string;
}

export class CreateGlassResponse implements GlassResponseObject {
  @ApiProperty({ example: 'объект успешно создан' })
  message: string;

  @ApiProperty({ type: GlassObject })
  newGlass: GlassObject;
}

export class GetAllGlassResponse implements GlassResponseObject {
  @ApiProperty({ example: 'получены все данные' })
  message: string;

  @ApiProperty({ type: GlassObject, isArray: true })
  glasses: GlassObject[];
}

export class FindOneGlassResponse implements GlassResponseObject {
  @ApiProperty({ example: 'получен объект #1' })
  message: string;

  @ApiProperty({ type: GlassObject })
  findOneGlass: GlassObject;
}

export class UpdateGlassResponse implements GlassResponseObject {
  @ApiProperty({ example: 'объект #1 успешно обновлён' })
  message: string;

  @ApiProperty({ type: GlassObject })
  updatedGlass: GlassObject;
}

export class DeleteGlassResponse implements GlassResponseObject {
  @ApiProperty({ example: 'объект #222 успешно удалён' })
  message: string;

  @ApiProperty({ type: GlassObject })
  deleted: GlassObject;
}
