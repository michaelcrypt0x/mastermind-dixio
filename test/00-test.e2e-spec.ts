import { createGame } from './01-create-game.spec';
import 'jest-extended';
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';

import { AppModule } from '../src/app.module';
import { findOne } from './02-get-game.spec';
import { findAll } from './02-getAll-game.spec';

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
  //findOne('212085b8-5400-4894-b6ad-b5c318827036');
  findAll();
});
