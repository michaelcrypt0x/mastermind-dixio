import { Test, TestingModule } from '@nestjs/testing';
import { GameService } from './game.service';

const mockGame = {
  id: 1,
  feedbackId: 0,
  secret: 'yellow,orange,red,green',
  userAttempt: '',
  status: 'playing',
  black: 0,
  white: 0,
};

const gameArray = [
  {
    id: 1,
    feedbackId: 1,
    secret: 'yellow,orange,orange,red',
    userAttempt: 'yellow,orange,orange,red',
    status: 'playing',
    black: 2,
    white: 1,
  },
  {
    id: 2,
    //
    feedbackId: 1 ,
    secret: 'yellow,orange,orange,red',
    userAttempt: 'yellow,orange,orange,red',
    status: 'playing',
    black: 2,
    white: 1,
  },
];

describe('GameService', () => {
  let service: GameService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GameService],
    }).compile();

    service = module.get<GameService>(GameService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
