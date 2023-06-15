import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { CreateGlassDto } from './dto/create-glass.dto';
import { UpdateGlassDto } from './dto/update-glass.dto';

import { Glass } from './entities/glass.entity';

@Injectable()
export class GlassesService {
  constructor(@InjectModel(Glass) private glassModule: typeof Glass) {}
  async create(createGlassDto: CreateGlassDto): Promise<Glass> {
    const newGlass = await this.glassModule.create({ ...createGlassDto });
    return newGlass;
  }

  async findAll(): Promise<Glass[]> {
    return await this.glassModule.findAll();
  }

  async findOne(id: number): Promise<Glass> {
    const existedGlass = await this.glassModule.findOne({ where: { id } });
    return existedGlass;
  }

  async update(id: number, updateGlassDto: UpdateGlassDto): Promise<Glass> {
    await this.glassModule.update({ ...updateGlassDto }, { where: { id } });
    const updatedGalss = await this.glassModule.findByPk(id);
    return updatedGalss;
  }

  async remove(id: number): Promise<Glass> {
    const removed = await this.glassModule.findByPk(id);
    await this.glassModule.destroy({ where: { id } });
    return removed;
  }
}
