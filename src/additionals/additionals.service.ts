import { Injectable } from '@nestjs/common';
import { CreateAdditionalDto } from './dto/create-additional.dto';
import { UpdateAdditionalDto } from './dto/update-additional.dto';
import { Additional } from './entities/additional.entity';

@Injectable()
export class AdditionalsService {
  async create(createAdditionalDto: CreateAdditionalDto): Promise<Additional> {
    return {};
  }

  async findAll(): Promise<Additional[]> {
    return [];
  }

  async findOne(id: number): Promise<Additional> {
    return {};
  }

  async update(
    id: number,
    updateAdditionalDto: UpdateAdditionalDto,
  ): Promise<Additional> {
    return {};
  }

  async remove(id: number): Promise<Additional> {
    return {};
  }
}
