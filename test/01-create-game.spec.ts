/* eslint-disable prettier/prettier */
import 'jest-extended';
import * as request from 'supertest';
import superdebug from 'superagent-debugger';

export const createGame = () =>
    describe('AppController (e2e)', () => {
        const url  = 'http://localhost:3000'
    
        it('/ (Post)', async () => {
            //create game 
            const res = await request(url)
            .post(`/api/init`)
            .use(superdebug(console.info));
            if (res.error) console.debug(res.error);
                console.log('############END#########');
                const result = res.body ;
                console.log('result est ' + JSON.stringify(result));
                expect(result).toBeDefined();
        });
    })
