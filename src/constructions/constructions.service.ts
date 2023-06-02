import { Injectable } from '@nestjs/common';
import { CreateConstructionDto } from './dto/create-construction.dto';
import { UpdateConstructionDto } from './dto/update-construction.dto';
import { Construction } from './entities/construction.entity';

@Injectable()
export class ConstructionsService {
  async create(
    createConstructionDto: CreateConstructionDto,
  ): Promise<Construction> {
    return {};
  }

  async findAll(): Promise<Construction[]> {
    return [];
  }

  async findOne(id: number): Promise<Construction> {
    return {};
  }

  async update(
    id: number,
    updateConstructionDto: UpdateConstructionDto,
  ): Promise<Construction> {
    return {};
  }

  async remove(id: number): Promise<Construction> {
    return {};
  }
}
