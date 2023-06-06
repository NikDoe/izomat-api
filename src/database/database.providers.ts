import { Sequelize } from 'sequelize-typescript';
import { ProvidersToken } from 'src/constants';
import { User } from '../users/entities/user.entity';
import { Dialect } from 'sequelize';

export const databaseProviders = [
  {
    provide: ProvidersToken.DATABASE_PROVIDERS_TOKEN,
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: <Dialect>process.env.SQL_DIALECT || 'mysql',
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT),
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        define: {
          charset: 'utf8',
          collate: 'utf8_general_ci',
        },
      });
      sequelize.addModels([User]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
