import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Game } from './game.entity';
import { CreateGameDto } from './dto/game.dto';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class GameService {
  constructor(
    //@Inject('GAME_REPOSITORY')
    @InjectRepository(Game)
    private gameRepository: Repository<Game>,
  ) {}

  async findAll(): Promise<Game[]> {
    return this.gameRepository.find();
  }

  async findOne(gameId: string): Promise<Game | null> {
    return this.gameRepository.findOneBy({ gameId });
  }

  async createOne(createGameDto: CreateGameDto): Promise<Game | null> {
    const game = await this.gameRepository.save(createGameDto);
    return game;
  }
}
