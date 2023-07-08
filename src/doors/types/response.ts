import { ApiProperty } from '@nestjs/swagger';
import { GlassObject } from 'src/glasses/types';

class DoorObject extends GlassObject {}

class DoorResponseObject {
  message: string;
}

export class CreateDoorResponse implements DoorResponseObject {
  @ApiProperty({ example: 'объект успешно создан' })
  message: string;

  @ApiProperty({ type: DoorObject })
  newDoor: DoorObject;
}

export class GetAllDoorsResponse implements DoorResponseObject {
  @ApiProperty({ example: 'получены все данные' })
  message: string;

  @ApiProperty({ type: DoorObject, isArray: true })
  doors: DoorObject[];
}

export class FindOneDoorResponse implements DoorResponseObject {
  @ApiProperty({ example: 'получен объект #1' })
  message: string;

  @ApiProperty({ type: DoorObject })
  findOneDoor: DoorObject;
}

export class UpdateDoorResponse implements DoorResponseObject {
  @ApiProperty({ example: 'объект #1 успешно обновлён' })
  message: string;

  @ApiProperty({ type: DoorObject })
  updatedDoor: DoorObject;
}

export class DeleteDoorResponse implements DoorResponseObject {
  @ApiProperty({ example: 'объект #222 успешно удалён' })
  message: string;

  @ApiProperty({ type: DoorObject })
  deleted: DoorObject;
}
