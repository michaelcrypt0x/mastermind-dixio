import { Repository } from 'typeorm';
import { Game } from './game.entity';
import { CreateGameDto, UpdateGameDto } from './dto/game.dto';
export declare class GameService {
    private gameRepository;
    constructor(gameRepository: Repository<Game>);
    findAll(): Promise<Game[]>;
    findOne(gameId: string): Promise<Game[] | null>;
    createOne(createGameDto: CreateGameDto): Promise<Game | null>;
    updateOne(updateGameDto: UpdateGameDto): Promise<Game | null>;
}
