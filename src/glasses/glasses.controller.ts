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
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';

import { GlassesService } from './glasses.service';
import { CreateGlassDto } from './dto/create-glass.dto';
import { UpdateGlassDto } from './dto/update-glass.dto';
import { Response } from 'express';

import {
  CreateGlassResponse,
  DeleteGlassResponse,
  FindOneGlassResponse,
  GetAllGlassResponse,
  UpdateGlassResponse,
} from './types';
import { BadRequestErrorType } from 'src/common/types';

@ApiTags('glasses')
@Controller('glasses')
export class GlassesController {
  constructor(private readonly glassesService: GlassesService) {}

  @ApiOperation({
    summary: 'Создание нового объект стекла',
  })
  @ApiBody({
    description: 'объект для создания нового стекла',
    type: CreateGlassDto,
  })
  @ApiOkResponse({ type: CreateGlassResponse })
  @ApiBadRequestResponse({ type: BadRequestErrorType })
  @Post()
  async create(
    @Body() createGlassDto: CreateGlassDto,
    @Res() response: Response,
  ): Promise<void> {
    const newGlass = await this.glassesService.create(createGlassDto);
    response.json({ message: 'объект успешно создан', newGlass });
  }

  @ApiOperation({
    summary: 'Получение массива всех стёкл',
  })
  @ApiOkResponse({ type: GetAllGlassResponse })
  @Get()
  async findAll(@Res() response: Response): Promise<void> {
    const glasses = await this.glassesService.findAll();
    response.json({ message: 'получены все данные', glasses });
  }

  @ApiOperation({
    summary: 'получение конкретного обьекта по ID',
  })
  @ApiOkResponse({ type: FindOneGlassResponse })
  @Get(':id')
  async findOne(
    @Param('id') id: string,
    @Res() response: Response,
  ): Promise<void> {
    const findOneGlass = await this.glassesService.findOne(+id);
    response.json({ message: `получен объект #${id}`, findOneGlass });
  }

  @ApiOperation({
    summary: 'изменение конкретного объекта стекла',
  })
  @ApiBody({ type: UpdateGlassDto })
  @ApiOkResponse({ type: UpdateGlassResponse })
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateGlassDto: UpdateGlassDto,
    @Res() response: Response,
  ): Promise<void> {
    const updatedGlass = await this.glassesService.update(+id, updateGlassDto);
    response.json({ message: `объект #${id} успешно обновлён`, updatedGlass });
  }

  @ApiOperation({
    summary: 'Удаление конкретного объекта стекла',
  })
  @ApiOkResponse({ type: DeleteGlassResponse })
  @Delete(':id')
  async remove(
    @Param('id') id: string,
    @Res() response: Response,
  ): Promise<void> {
    const deleted = await this.glassesService.remove(+id);
    response.json({ message: `объект #${id} успешно удалён`, deleted });
  }
}
