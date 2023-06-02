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
import { ConstructionsService } from './constructions.service';
import { CreateConstructionDto } from './dto/create-construction.dto';
import { UpdateConstructionDto } from './dto/update-construction.dto';
import { Response } from 'express';

@Controller('constructions')
export class ConstructionsController {
  constructor(private readonly constructionsService: ConstructionsService) {}

  @Post()
  async create(
    @Body() createConstructionDto: CreateConstructionDto,
    @Res() response: Response,
  ): Promise<void> {
    const newConstruction = await this.constructionsService.create(
      createConstructionDto,
    );
    response.json({ message: 'новый обьект успешно создан', newConstruction });
  }

  @Get()
  async findAll(@Res() response: Response): Promise<void> {
    const constructions = await this.constructionsService.findAll();
    response.json({ message: 'получены все объекты', constructions });
  }

  @Get(':id')
  async findOne(
    @Param('id') id: string,
    @Res() response: Response,
  ): Promise<void> {
    const findOneConstruction = await this.constructionsService.findOne(+id);
    response.json({ message: `получен объект #${id}`, findOneConstruction });
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateConstructionDto: UpdateConstructionDto,
    @Res() response: Response,
  ): Promise<void> {
    const updatedConstruction = await this.constructionsService.update(
      +id,
      updateConstructionDto,
    );
    response.json({
      message: `объект #${id} успешно обновлён`,
      updatedConstruction,
    });
  }

  @Delete(':id')
  async remove(
    @Param('id') id: string,
    @Res() response: Response,
  ): Promise<void> {
    const deleted = this.constructionsService.remove(+id);
    response.json({
      message: `объект #${id} успешно удалён`,
      deleted,
    });
  }
}
