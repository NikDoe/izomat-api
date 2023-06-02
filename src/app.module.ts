import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { GlassesModule } from './glasses/glasses.module';
import { DoorsModule } from './doors/doors.module';

@Module({
  imports: [UsersModule, GlassesModule, DoorsModule],
})
export class AppModule {}
