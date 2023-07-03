import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { CreateGlassDto } from './dto/create-glass.dto';
import { UpdateGlassDto } from './dto/update-glass.dto';
import { FindOneGlassDto } from './dto/find-glass.dto';

import { Glass } from './entities/glass.entity';

@Injectable()
export class GlassesService {
  constructor(@InjectModel(Glass) private glassModule: typeof Glass) {}

  async create(createGlassDto: CreateGlassDto): Promise<Glass> {
    const { name, vendor_code } = createGlassDto;
    const check = await this.checkNameAndCode(name, vendor_code);

    if (check) {
      const newGlass = await this.glassModule.create({ ...createGlassDto });
      return newGlass;
    }
  }

  async findAll(): Promise<Glass[]> {
    return await this.glassModule.findAll();
  }

  async findOne(props: FindOneGlassDto): Promise<Glass> {
    return await this.glassModule.findOne({ where: { ...props } });
  }

  async update(id: number, updateGlassDto: UpdateGlassDto) {
    const { name, vendor_code } = updateGlassDto;
    const existedGlass = await this.findOne({ id });

    if (!existedGlass) throw new NotFoundException('объект не найден');

    const check = await this.checkNameAndCode(name, vendor_code, id);

    if (check) {
      await this.glassModule.update({ ...updateGlassDto }, { where: { id } });
      const updatedGalss = await this.glassModule.findByPk(id);
      return updatedGalss;
    }
  }

  async remove(id: number): Promise<Glass> {
    const removed = await this.glassModule.findByPk(id);

    if (!removed) throw new NotFoundException('объект не найден');

    await this.glassModule.destroy({ where: { id } });
    return removed;
  }

  private async checkNameAndCode(
    name: string,
    vendor_code: string,
    id?: number,
  ): Promise<boolean> {
    const existedGlassName = await this.findOne({ name: name || null });
    if (existedGlassName && existedGlassName.id !== id)
      throw new ConflictException('Объект с таким именем уже существует');

    const existedVendorCode = await this.findOne({
      vendor_code: vendor_code || null,
    });

    if (existedVendorCode && existedVendorCode.id !== id)
      throw new ConflictException('Объект с таким vendor_code уже существует');

    return true;
  }
}
