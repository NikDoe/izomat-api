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

import { AdditionalsService } from './additionals.service';
import { CreateAdditionalDto } from './dto/create-additional.dto';
import { UpdateAdditionalDto } from './dto/update-additional.dto';
import { Response } from 'express';

@ApiTags('additionals')
@Controller('additionals')
export class AdditionalsController {
  constructor(private readonly additionalsService: AdditionalsService) {}

  @Post()
  async create(
    @Body() createAdditionalDto: CreateAdditionalDto,
    @Res() response: Response,
  ): Promise<void> {
    const newAdditionalService = await this.additionalsService.create(
      createAdditionalDto,
    );
    response.json({
      message: 'доп. услуга успешно создана',
      newAdditionalService,
    });
  }

  @Get()
  async findAll(@Res() response: Response): Promise<void> {
    const additionalServices = await this.additionalsService.findAll();
    response.json({
      message: 'получены все доп. услуги',
      additionalServices,
    });
  }

  @Get(':id')
  async findOne(
    @Param('id') id: string,
    @Res() response: Response,
  ): Promise<void> {
    const findOneAdditionalService = this.additionalsService.findOne(+id);
    response.json({
      message: `получена доп. услуга #${id}`,
      findOneAdditionalService,
    });
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateAdditionalDto: UpdateAdditionalDto,
    @Res() response: Response,
  ): Promise<void> {
    const updatedAdditionalService = await this.additionalsService.update(
      +id,
      updateAdditionalDto,
    );
    response.json({
      message: `доп. услуга #${id} успешно обновлена`,
      updatedAdditionalService,
    });
  }

  @Delete(':id')
  async remove(
    @Param('id') id: string,
    @Res() response: Response,
  ): Promise<void> {
    const deleted = this.additionalsService.remove(+id);
    response.json({
      message: `доп. услуга #${id} успешно удалена`,
      deleted,
    });
  }
}
