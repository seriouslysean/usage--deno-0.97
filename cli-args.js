import { spacer } from './utils.js';

spacer('CLI Arguments');

// All arguments passed to the script
// exist in a flat array of strings (Deno.args)
// See https://doc.deno.land/builtin/stable#Deno.args
console.log('Getting arguments in Deno is easy');

Deno.args.forEach((arg, idx) => {
    console.log(`Argument #${idx}: ${arg} (${typeof arg})`);
});

spacer();
