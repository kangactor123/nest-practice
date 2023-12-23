import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // validation pipe
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true, // query의 타입을 변환해줌
      forbidNonWhitelisted: true,
    }),
  );
  await app.listen(3000);
}
bootstrap();
