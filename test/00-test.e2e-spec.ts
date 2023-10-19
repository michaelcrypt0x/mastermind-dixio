import 'jest-extended';
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';

import { AppModule } from '../src/app.module';
import { findOne } from './02-get-game.spec';

describe('Model - sequentially run tests', () => {
  let app: INestApplication;
  beforeAll(() => {
    jest.setTimeout(900 * 1000);
  });
  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });
  //createGame();
  findOne('b5d7c45f-df48-4b24-8ccc-45385158d88e');
  //findAll();
  //updateGame('b5d7c45f-df48-4b24-8ccc-45385158d88e', 'yellow,red,blue,blue','purple,purple,yellow,green);
  /*  updateGame(
    'b5d7c45f-df48-4b24-8ccc-45385158d88e',
    'purple,purple,yellow,green',
    'purple,purple,yellow,green'
  );*/
});
