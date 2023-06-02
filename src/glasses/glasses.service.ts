import { Injectable } from '@nestjs/common';
import { CreateGlassDto } from './dto/create-glass.dto';
import { UpdateGlassDto } from './dto/update-glass.dto';
import { Glass } from './entities/glass.entity';

@Injectable()
export class GlassesService {
  async create(createGlassDto: CreateGlassDto): Promise<Glass> {
    return {};
  }

  async findAll(): Promise<Glass[]> {
    return [];
  }

  async findOne(id: number): Promise<Glass> {
    return {};
  }

  async update(id: number, updateGlassDto: UpdateGlassDto): Promise<Glass> {
    return {};
  }

  async remove(id: number): Promise<Glass> {
    return {};
  }
}
