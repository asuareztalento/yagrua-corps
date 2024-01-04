import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as _ from 'lodash';
import { LoggerFactory } from './utils/logger.factory';
import { ValidationPipe, VersioningType } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const appDescription = _.get(process.env, 'APP_DESCRIPTION', 'YaGrua corps and tow-trucks');
  const appName = _.get(process.env, 'APP_NAME', 'YaGrua Corps API');
  const appVersion = _.get(process.env, 'APP_VERSION', '1');

  const app = await NestFactory.create(AppModule, {
    logger: LoggerFactory(appName),
  });

  app.enableVersioning({
    defaultVersion: appVersion,
    type: VersioningType.URI,
  });

  // DTO validation
  app.useGlobalPipes(new ValidationPipe({ disableErrorMessages: false, whitelist: true }));

  // swagger
  const config = new DocumentBuilder()
    .setTitle(appName)
    .setDescription(appDescription)
    .setVersion(appVersion)
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);

  await app.listen(Number(process.env.HTTP_PORT));
}
bootstrap();
