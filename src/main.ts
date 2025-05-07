import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Swagger configuration
  const config = new DocumentBuilder()
    .setTitle('NestJS Sample Project')  // API title
    .setDescription('API documentation for NestJS Sample Project')  // Description
    .setVersion('1.0')  // API version
    .addTag('cats')  // Optional: Add tags to organize endpoints
    .build();

  const document = SwaggerModule.createDocument(app, config); // Create Swagger document
  SwaggerModule.setup('api', app, document);  // Serve Swagger UI on `/api` route

  await app.listen(3000);
}
bootstrap();
