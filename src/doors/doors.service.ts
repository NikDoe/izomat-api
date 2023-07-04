import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { CreateDoorDto } from './dto/create-door.dto';
import { UpdateDoorDto } from './dto/update-door.dto';

import { Door } from './entities/door.entity';

@Injectable()
export class DoorsService {
  constructor(@InjectModel(Door) private doorModule: typeof Door) {}

  async create(createDoorDto: CreateDoorDto): Promise<Door> {
    const newDoor = await this.doorModule.create({ ...createDoorDto });
    return newDoor;
  }

  async findAll(): Promise<Door[]> {
    return [];
  }

  async findOne(id: number): Promise<Door> {
    return await this.doorModule.findOne({ where: { id } });
  }

  async update(id: number, updateDoorDto: UpdateDoorDto): Promise<Door> {
    await this.doorModule.update({ ...updateDoorDto }, { where: { id } });
    const updatedDoor = await this.doorModule.findByPk(id);
    return updatedDoor;
  }

  async remove(id: number): Promise<Door> {
    const removed = await this.doorModule.findByPk(id);

    if (!removed) throw new NotFoundException('объект не найден');

    await this.doorModule.destroy({ where: { id } });
    return removed;
  }
}
