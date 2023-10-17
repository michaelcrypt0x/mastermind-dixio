import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
//import { AppController } from './app.controller';


import { GameModule } from './game/game.module';

@Module({
  imports: [GameModule],

})
export class AppModule {}
