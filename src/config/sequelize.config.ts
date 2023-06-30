import { ConfigModule, ConfigService } from '@nestjs/config';
import { SequelizeModuleAsyncOptions } from '@nestjs/sequelize';

export const sequelizeAsyncConfig: SequelizeModuleAsyncOptions = {
  imports: [ConfigModule],
  useFactory: (configService: ConfigService) => ({
    dialect: configService.get('SQL_DIALECT') || 'mysql',
    host: configService.get('DB_HOST'),
    port: Number(configService.get('DB_PORT')),
    username: configService.get('DB_USERNAME'),
    password: configService.get('DB_PASSWORD'),
    database: configService.get('DB_NAME'),
    define: {
      charset: 'utf8',
      collate: 'utf8_general_ci',
    },
    autoLoadModels: true,
    synchronize: true,
    logging: false,
  }),
  inject: [ConfigService],
};
