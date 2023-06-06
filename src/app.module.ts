import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';

import { Dialect } from 'sequelize';

import { UsersModule } from './users/users.module';
import { GlassesModule } from './glasses/glasses.module';
import { DoorsModule } from './doors/doors.module';
import { ConstructionsModule } from './constructions/constructions.module';
import { AdditionalsModule } from './additionals/additionals.module';

import { User } from './users/entities/user.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    SequelizeModule.forRoot({
      dialect: <Dialect>process.env.SQL_DIALECT || 'mysql',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      models: [User],
      define: {
        charset: 'utf8',
        collate: 'utf8_general_ci',
      },
      autoLoadModels: true,
      synchronize: true,
      logging: false,
    }),
    UsersModule,
    GlassesModule,
    DoorsModule,
    ConstructionsModule,
    AdditionalsModule,
  ],
})
export class AppModule {}
