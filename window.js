import { spacer } from './utils.js';

spacer('Window Object');

// https://deno.land/typedoc/interfaces/window.html
const logger = (e) => {
    console.log(`Event fired "${e.type}"`);
};
window.addEventListener('load', logger);
window.addEventListener('unload', (e) => {
    logger(e);
    // Add spacer after unload logger
    spacer();
});

// If spacer was here it would fire before the unload function
// which puts the spacing in a weird order
