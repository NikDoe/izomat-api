import { ConflictException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { CreateGlassDto } from './dto/create-glass.dto';
import { UpdateGlassDto } from './dto/update-glass.dto';

import { Glass } from './entities/glass.entity';
import { FindOneGlassDto } from './dto/find-glass.dto';

@Injectable()
export class GlassesService {
  constructor(@InjectModel(Glass) private glassModule: typeof Glass) {}

  async create(createGlassDto: CreateGlassDto): Promise<Glass> {
    const { name, vendor_code } = createGlassDto;
    const existedGlassName = await this.findOne({ name });

    if (existedGlassName)
      throw new ConflictException('Объект с таким именем уже существует');

    const existedVendorCode = await this.findOne({ vendor_code });

    if (existedVendorCode)
      throw new ConflictException('Объект с таким vendor_code уже существует');

    const newGlass = await this.glassModule.create({ ...createGlassDto });
    return newGlass;
  }

  async findAll(): Promise<Glass[]> {
    return await this.glassModule.findAll();
  }

  async findOne(props: FindOneGlassDto): Promise<Glass> {
    return await this.glassModule.findOne({ where: { ...props } });
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
