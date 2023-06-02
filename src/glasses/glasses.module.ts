import { Module } from '@nestjs/common';
import { GlassesService } from './glasses.service';
import { GlassesController } from './glasses.controller';

@Module({
  controllers: [GlassesController],
  providers: [GlassesService],
})
export class GlassesModule {}
