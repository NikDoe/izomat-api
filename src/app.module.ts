import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { GlassesModule } from './glasses/glasses.module';
import { DoorsModule } from './doors/doors.module';
import { ConstructionsModule } from './constructions/constructions.module';

@Module({
  imports: [UsersModule, GlassesModule, DoorsModule, ConstructionsModule],
})
export class AppModule {}
