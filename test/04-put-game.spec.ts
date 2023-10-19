/* eslint-disable prettier/prettier */
import 'jest-extended';
import * as request from 'supertest';
import superdebug from 'superagent-debugger';
import { UpdateGameDto } from 'src/game/dto/game.dto';

export const updateGame = (gameId:string, userAttempt:string,secret:string ) =>
    describe('put (e2e)', () => {
        const url  = 'http://localhost:3000'
        beforeAll(() => {
            jest.setTimeout(900 * 1000);
          });
        it('/(put)', async () => {

            const  updateGameDto= {} as UpdateGameDto;
            updateGameDto.gameId=gameId;
            updateGameDto.userAttempt =userAttempt;
            updateGameDto.feedbackId=0;
            updateGameDto.secret =secret;
            updateGameDto.state='playing';
            updateGameDto.black='0000';
            updateGameDto.white='0000';
            

            //create game 
            const res = await request(url)
            .put(`/api/game/${gameId}`)
            .send(updateGameDto)
            .use(superdebug(console.info));
            if (res.error) console.debug(res.error);
                console.log('############END#########');
                const result = res.body ;
                console.log('result is ' + JSON.stringify(result));
                expect(result).toBeDefined();
        });
    })
