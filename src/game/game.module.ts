import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseModule } from '../database/database.module';
import { gameProviders } from './game.providers';
import { GameService } from './game.service';
import { GameController } from './game.controller';
import { Game } from './game.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Game])],
  // imports: [DatabaseModule],
  //providers: [...gameProviders, GameService],
  providers: [ GameService],
  controllers: [GameController],
})
export class GameModule {}
