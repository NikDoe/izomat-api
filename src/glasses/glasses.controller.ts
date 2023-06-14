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
import { ApiTags } from '@nestjs/swagger';

import { GlassesService } from './glasses.service';
import { CreateGlassDto } from './dto/create-glass.dto';
import { UpdateGlassDto } from './dto/update-glass.dto';
import { Response } from 'express';

@ApiTags('glasses')
@Controller('glasses')
export class GlassesController {
  constructor(private readonly glassesService: GlassesService) {}

  @Post()
  async create(
    @Body() createGlassDto: CreateGlassDto,
    @Res() response: Response,
  ): Promise<void> {
    const newGlass = await this.glassesService.create(createGlassDto);
    response.json({ message: 'объект успешно создан', newGlass });
  }

  @Get()
  async findAll(@Res() response: Response): Promise<void> {
    const glasses = await this.glassesService.findAll();
    response.json({ message: 'получены все данные', glasses });
  }

  @Get(':id')
  async findOne(
    @Param('id') id: string,
    @Res() response: Response,
  ): Promise<void> {
    const findOneGlass = await this.glassesService.findOne(+id);
    response.json({ message: `получен объект #${id}`, findOneGlass });
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateGlassDto: UpdateGlassDto,
    @Res() response: Response,
  ): Promise<void> {
    const updatedGlass = await this.glassesService.update(+id, updateGlassDto);
    response.json({ message: `объект #${id} успешно обновлён`, updatedGlass });
  }

  @Delete(':id')
  async remove(
    @Param('id') id: string,
    @Res() response: Response,
  ): Promise<void> {
    const deleted = await this.glassesService.remove(+id);
    response.json({ message: `объект #${id} успешно удалён`, deleted });
  }
}
