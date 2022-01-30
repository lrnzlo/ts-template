import { config } from 'dotenv-safe';
config();

/**
 * @description
 * This is a test function.
 * 1. Once should be able to import that in other location via import "@src/main"
 * 2. process.env.TEST should return "ENV VARIABLE TEST"
 * 3. Run ts-node (or yarn ts-node if you don't have ts-node globally installed) src/main should return:
 * 4. Hello, world from TS! This is a salute from ENV VARIABLE TEST. 

 */
function helloTS(): void {
    console.log(`Hello, world from TS!\nThis is a salute from ${process.env.PROVA}`);
}

export default helloTS;