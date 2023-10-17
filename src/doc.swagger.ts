import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ConfigService } from '@nestjs/config';

export const initSwaggerDocumentation = (app: NestExpressApplication) => {
  app.use(['/api/doc/swagger', '/api/doc/swagger-json']);

  const swaggerDoc = new DocumentBuilder()
    .setTitle('MasterMind-dixio API')
    .setDescription('API for MasterMind-dixio admin app')
    .setVersion('V1.0')
    .setExternalDoc('download open-api json', '/api/doc/swagger-json')
    .build();

  const document = SwaggerModule.createDocument(app, swaggerDoc);
  SwaggerModule.setup('api/doc/swagger', app, document, {
    swaggerOptions: { defaultModelsExpandDepth: 0 },
  });
};
