import { GameService } from './game.service';
import { Game } from './game.entity';
import { UpdateGameDto } from './dto/game.dto';
export declare class GameController {
    private readonly gameService;
    constructor(gameService: GameService);
    getAllGames(): Promise<Game[]>;
    getOneGame(gameId: string): Promise<Game[]>;
    initGame(): Promise<string>;
    updateGame(gameId: string, updateGameDto: UpdateGameDto): Promise<UpdateGameDto>;
}
