import { config } from 'dotenv-safe';
config();

/**
 * @description
 * This is a test function.
 * 1. process.env.TEST should return "ENV VARIABLE TEST"
 * 2. Run ts-node (or yarn ts-node if you don't have ts-node globally installed) src/main should return:
 * 3. Hello, world from TS! This is a salute from ENV VARIABLE TEST. 

 */
export function helloTS(): string {
    const greetings = `Hello, world from TS!\nThis is a salute from ${process.env.TEST}`;
    
    return greetings;
}

export default helloTS;
