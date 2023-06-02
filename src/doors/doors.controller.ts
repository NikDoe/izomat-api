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
import { DoorsService } from './doors.service';
import { CreateDoorDto } from './dto/create-door.dto';
import { UpdateDoorDto } from './dto/update-door.dto';
import { Response } from 'express';

@Controller('doors')
export class DoorsController {
  constructor(private readonly doorsService: DoorsService) {}

  @Post()
  async create(
    @Body() createDoorDto: CreateDoorDto,
    @Res() response: Response,
  ): Promise<void> {
    const newDoor = await this.doorsService.create(createDoorDto);
    response.json({ message: 'новые двери успешно созданы', newDoor });
  }

  @Get()
  async findAll(@Res() response: Response): Promise<void> {
    const doors = await this.doorsService.findAll();
    response.json({ message: 'получены все двери', doors });
  }

  @Get(':id')
  async findOne(
    @Param('id') id: string,
    @Res() response: Response,
  ): Promise<void> {
    const findOneDoor = await this.doorsService.findOne(+id);
    response.json({ message: `получены двери #${id}`, findOneDoor });
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateDoorDto: UpdateDoorDto,
    @Res() response: Response,
  ): Promise<void> {
    const updatedDoor = await this.doorsService.update(+id, updateDoorDto);
    response.json({ message: `двери #${id} успешно обновлены`, updatedDoor });
  }

  @Delete(':id')
  async remove(
    @Param('id') id: string,
    @Res() response: Response,
  ): Promise<void> {
    const deleted = await this.doorsService.remove(+id);
    response.json({ message: `двери #${id} успешно удалены`, deleted });
  }
}
