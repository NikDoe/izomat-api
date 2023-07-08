import { Response } from 'express';

import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
} from '@nestjs/common';

import {
  ApiBadRequestResponse,
  ApiBody,
  ApiConflictResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';

import { DoorsService } from './doors.service';
import { CreateDoorDto } from './dto/create-door.dto';
import { UpdateDoorDto } from './dto/update-door.dto';

import {
  CreateDoorResponse,
  DeleteDoorResponse,
  FindOneDoorResponse,
  GetAllDoorsResponse,
  UpdateDoorResponse,
} from './types';

import {
  BadRequestErrorType,
  ConflictErrorType,
  NotFoundErrorType,
} from 'src/common/types';

@ApiTags('doors')
@Controller('doors')
export class DoorsController {
  constructor(private readonly doorsService: DoorsService) {}

  @ApiOperation({ summary: 'Создание нового объекта дверей' })
  @ApiBody({ description: 'Объект полученный из запроса', type: CreateDoorDto })
  @ApiOkResponse({ type: CreateDoorResponse })
  @ApiBadRequestResponse({ type: BadRequestErrorType })
  @Post()
  async create(
    @Body() createDoorDto: CreateDoorDto,
    @Res() response: Response,
  ): Promise<void> {
    const newDoor = await this.doorsService.create(createDoorDto);
    response.json({ message: 'новые двери успешно созданы', newDoor });
  }

  @ApiOperation({
    summary: 'Получение массива всех дверей',
  })
  @ApiOkResponse({ type: GetAllDoorsResponse })
  @Get()
  async findAll(@Res() response: Response): Promise<void> {
    const doors = await this.doorsService.findAll();
    response.json({ message: 'получены все двери', doors });
  }

  @ApiOperation({
    summary: 'получение конкретного обьекта по ID',
  })
  @ApiOkResponse({ type: FindOneDoorResponse })
  @ApiNotFoundResponse({ type: NotFoundErrorType })
  @ApiConflictResponse({ type: ConflictErrorType })
  @Get(':id')
  async findOne(
    @Param('id') id: string,
    @Res() response: Response,
  ): Promise<void> {
    const findOneDoor = await this.doorsService.findOne(+id);
    response.json({ message: `получены двери #${id}`, findOneDoor });
  }

  @ApiOperation({
    summary: 'изменение конкретного объекта дверей',
  })
  @ApiBody({ type: UpdateDoorDto })
  @ApiOkResponse({ type: UpdateDoorResponse })
  @ApiNotFoundResponse({ type: NotFoundErrorType })
  @ApiConflictResponse({ type: ConflictErrorType })
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateDoorDto: UpdateDoorDto,
    @Res() response: Response,
  ): Promise<void> {
    const updatedDoor = await this.doorsService.update(+id, updateDoorDto);
    response.json({ message: `двери #${id} успешно обновлены`, updatedDoor });
  }

  @ApiOperation({
    summary: 'Удаление конкретного объекта дверей',
  })
  @ApiOkResponse({ type: DeleteDoorResponse })
  @ApiNotFoundResponse({ type: NotFoundErrorType })
  @Delete(':id')
  async remove(
    @Param('id') id: string,
    @Res() response: Response,
  ): Promise<void> {
    const deleted = await this.doorsService.remove(+id);
    response.json({ message: `двери #${id} успешно удалены`, deleted });
  }
}
