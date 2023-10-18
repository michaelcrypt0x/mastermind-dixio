import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { initSwaggerDocumentation } from './doc.swagger';
import { NestExpressApplication } from '@nestjs/platform-express';


async function bootstrap() {
  console.log('[MAIN] --- START BUILD APP --- ');
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.setGlobalPrefix('api');
  
  //initSwaggerDocumentation(app);
  
  await app.listen(3000);
}
bootstrap();
