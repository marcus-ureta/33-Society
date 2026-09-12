import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

async function passwordGenerator() {
    const rl = readline.createInterface({ input, output });

    try {
        const input = await rl.question('Input Password: ');

        console.log(`Successfully added ${input} to database`);
    } finally {
        rl.close();
    }
}

passwordGenerator();