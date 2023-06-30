import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
import { APP_PIPE } from '@nestjs/core';

import { UsersModule } from './users/users.module';
import { GlassesModule } from './glasses/glasses.module';
import { DoorsModule } from './doors/doors.module';
import { ConstructionsModule } from './constructions/constructions.module';
import { AdditionalsModule } from './additionals/additionals.module';
import { AuthModule } from './auth/auth.module';
import { ValidationPipe } from './pipes/validation.pipe';

import { sequelizeAsyncConfig } from './config/sequelize.config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    SequelizeModule.forRootAsync(sequelizeAsyncConfig),
    UsersModule,
    GlassesModule,
    DoorsModule,
    ConstructionsModule,
    AdditionalsModule,
    AuthModule,
  ],
  providers: [
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
  ],
})
export class AppModule {}
