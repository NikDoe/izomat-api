import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { GlassesModule } from './glasses/glasses.module';
import { DoorsModule } from './doors/doors.module';
import { ConstructionsModule } from './constructions/constructions.module';
import { AdditionalsModule } from './additionals/additionals.module';

@Module({
  imports: [UsersModule, GlassesModule, DoorsModule, ConstructionsModule, AdditionalsModule],
})
export class AppModule {}
