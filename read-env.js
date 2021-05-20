import { spacer } from './utils.js';

spacer('Read Environment Variables');

// https://doc.deno.land/builtin/stable#Deno.env
const msg = Deno.env.get('ENV_MESSAGE') || 'unknown';

console.log(`The environment variable ENV_MESSAGE is "${msg}"`);

spacer();
