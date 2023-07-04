import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { DoorsService } from './doors.service';
import { DoorsController } from './doors.controller';

import { Door } from './entities/door.entity';

@Module({
  imports: [SequelizeModule.forFeature([Door])],
  controllers: [DoorsController],
  providers: [DoorsService],
})
export class DoorsModule {}
