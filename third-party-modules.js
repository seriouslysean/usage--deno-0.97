// Doesn't use node_modules, need to include remotely
// See https://deno.land/x for supported modules

// Requires the unstable flag
// https://deno.land/manual@v1.9.2/runtime/stability
// https://github.com/c4spar/deno-cliffy
import { Select } from 'https://deno.land/x/cliffy@v0.18.2/prompt/select.ts';
// Chalk requires env access
// See https://deno.land/manual/getting_started/permissions
// https://github.com/canonic-epicure/chalk-deno
import chalk from 'https://deno.land/x/chalk_deno@v4.1.1-deno/source/index.js'
import { spacer } from './utils.js';

spacer('Third Party Modules');

const color = await Select.prompt( {
    message: `Pick an example`,
    options: [
        {
            name: 'Red',
            value: chalk.hex('#ff0000')('Red'),
        },
        {
            name: 'Green',
            value: chalk.hex('#00ff00')('Green'),
        },
        {
            name: 'Blue',
            value: chalk.hex('#0000ff')('Blue'),
        },
        // Add a line break to the options
        Select.separator('--------'),
        {
            name: 'Yellow',
            value: chalk.hex('#ffff00')('Yellow'),
        },
        {
            name: 'Purple',
            value: chalk.hex('#ff00ff')('Purple'),
        },
    ]
} );

console.log(`The selected color is "${color}"!`);

spacer();
