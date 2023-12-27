import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as multer from 'multer';
import {NestExpressApplication} from "@nestjs/platform-express";
import * as path from "path";

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  const config = new DocumentBuilder()
  .setTitle("PRD Management System")
  .setDescription("Description of api")
  .setVersion("1.00")
  .build();

  const document = SwaggerModule.createDocument(app,config);
  SwaggerModule.setup('/', app, document);

/*
  app.use(multer({ dest: './uploads/' }).single('file')); // Configure Multer

  app.useStaticAssets(path.join(__dirname , "../uploads"));
    */

  await app.listen(3000);

}
bootstrap();
