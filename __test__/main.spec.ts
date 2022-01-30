import {helloTS} from '../src/main';

describe('Test of src/main.ts', () => {
    it('Should return TEST variable from .env file', () => {
        expect(helloTS()).toEqual('Hello, world from TS!\nThis is a salute from ENV VARIABLE TEST');
    });

});

