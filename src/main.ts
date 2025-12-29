import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 🔹 Allow frontend Next.js
  app.enableCors({
    origin: 'http://localhost:3000',
    credentials: true,
  });

  // 🔹 Global validation
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );

  await app.listen(5000);
  console.log('🚀 Backend running on http://localhost:5000');
}

bootstrap();
