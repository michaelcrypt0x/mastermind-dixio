import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Game } from './game.entity';
import { CreateGameDto } from './dto/game.dto';

@Injectable()
export class GameService {
  constructor(
    @Inject('GAME_REPOSITORY')
    private gameRepository: Repository<Game>,
  ) {}

  async findAll(): Promise<Game[]> {
    return this.gameRepository.find();
  }

  async findOne(gameId: number): Promise<Game | null> {
    return this.gameRepository.findOneBy({ gameId });
  }

  async createOne(createGameDto: CreateGameDto): Promise<Game | null> {
    return this.gameRepository.create(createGameDto);
  }
}
