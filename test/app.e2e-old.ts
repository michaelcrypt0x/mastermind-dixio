import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import superdebug from 'superagent-debugger';

describe('AppController (e2e)', () => {
  let app: INestApplication;
  let url  = 'http://localhost:3000'
  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (Post)', () => {
    //create game 
    const res = await request(url)
    .post(`/api`)
    .use(superdebug(console.info));
    if (res.error) console.debug(res.error);
    console.log('############END#########');
    const result = res.body ;
    console.log('result est ' + JSON.stringify(result));
    expect(result).toBeDefined();
});
  

