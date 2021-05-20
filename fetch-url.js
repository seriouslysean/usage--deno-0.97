import { spacer } from './utils.js';

spacer('Fetch Url');

const url = 'https://www.freepeople.com/health';

// Requires the --allow-net flag to access a url
// See https://deno.land/manual/getting_started/permissions
const res = await fetch(url);
const { version } = await res.json();

console.log(`Free People v${version}`);

spacer();
