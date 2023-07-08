import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { InjectModel } from '@nestjs/sequelize';

import { CreateDoorDto } from './dto/create-door.dto';
import { UpdateDoorDto } from './dto/update-door.dto';
import { FindOneDoorDto } from './dto/find-door.dto';

import { Door } from './entities/door.entity';

@Injectable()
export class DoorsService {
  constructor(@InjectModel(Door) private doorModule: typeof Door) {}

  async create(createDoorDto: CreateDoorDto): Promise<Door> {
    const { name, vendor_code } = createDoorDto;
    const check = await this.checkNameAndCode(name, vendor_code);

    if (check) {
      const newDoor = await this.doorModule.create({ ...createDoorDto });
      return newDoor;
    }
  }

  async findAll(): Promise<Door[]> {
    return await this.doorModule.findAll();
  }

  async findOne(props: FindOneDoorDto): Promise<Door> {
    return await this.doorModule.findOne({ where: { ...props } });
  }

  async update(id: number, updateDoorDto: UpdateDoorDto): Promise<Door> {
    const { name, vendor_code } = updateDoorDto;
    const existedDoor = await this.doorModule.findByPk(id);

    if (!existedDoor) throw new NotFoundException('объект не найден');

    const check = await this.checkNameAndCode(name, vendor_code);

    if (check) {
      await this.doorModule.update({ ...updateDoorDto }, { where: { id } });
      const updatedDoor = await this.doorModule.findByPk(id);
      return updatedDoor;
    }
  }

  async remove(id: number): Promise<Door> {
    const removed = await this.doorModule.findByPk(id);

    if (!removed) throw new NotFoundException('объект не найден');

    await this.doorModule.destroy({ where: { id } });
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
