import { Injectable } from '@nestjs/common';
import { CreateDoorDto } from './dto/create-door.dto';
import { UpdateDoorDto } from './dto/update-door.dto';
import { Door } from './entities/door.entity';

@Injectable()
export class DoorsService {
  async create(createDoorDto: CreateDoorDto): Promise<Door> {
    return {};
  }

  async findAll(): Promise<Door[]> {
    return [];
  }

  async findOne(id: number): Promise<Door> {
    return {};
  }

  async update(id: number, updateDoorDto: UpdateDoorDto): Promise<Door> {
    return {};
  }

  async remove(id: number): Promise<Door> {
    return {};
  }
}
