import { Module } from '@nestjs/common';
import { GlassesService } from './glasses.service';
import { GlassesController } from './glasses.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Glass } from './entities/glass.entity';

@Module({
  imports: [SequelizeModule.forFeature([Glass])],
  controllers: [GlassesController],
  providers: [GlassesService],
})
export class GlassesModule {}
