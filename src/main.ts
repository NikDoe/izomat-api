import * as session from 'express-session';
import * as passport from 'passport';

import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const swaggerConfig = new DocumentBuilder()
    .setTitle('IZOMAT')
    .setDescription('documetation of izomat glass API')
    .build();

  const swaggerDocument = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('documetation', app, swaggerDocument);

  app.use(
    session({
      name: process.env.SESSION_ID_NAME,
      secret: process.env.SECRET_SESSION_KEY,
      resave: false,
      saveUninitialized: false,
    }),
  );
  app.use(passport.initialize());
  app.use(passport.session());
  await app.listen(3001);
}
bootstrap();
