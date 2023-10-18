/* eslint-disable prettier/prettier */
import 'jest-extended';
import * as request from 'supertest';
import superdebug from 'superagent-debugger';

export const findAll = () =>
    describe('findAll (e2e)', () => {
        const url  = 'http://localhost:3000'
        beforeAll(() => {
            jest.setTimeout(900 * 1000);
          });
        it('/(find)', async () => {
            //create game 
            const res = await request(url)
            .get(`/api/games`)
            .use(superdebug(console.info));
            if (res.error) console.debug(res.error);
                console.log('############END#########');
                const result = res.body ;
                console.log('result is ' + JSON.stringify(result));
                expect(result).toBeDefined();
        });
    })
