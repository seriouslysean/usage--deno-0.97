import { spacer } from './utils.js';

spacer('Read Files');

// https://deno.land/manual/examples/read_write_files
const readme = await Deno.readTextFile('./README.md');
const title = readme.split('\n').shift();

console.log(`The first line of the README is "${title}"`);

spacer();
