import { serve } from "https://deno.land/std@0.97.0/http/server.ts";
import { spacer } from './utils.js';

spacer('Web Server');

const port = 3000;

// https://deno.land/manual/examples/http_server
const server = serve({
    port,
});

console.log(`Listening on http://localhost:${port}/`);

for await (const req of server) {
    switch (req.url) {
        case '/':
            req.respond({
                body: 'Home!',
            });
            break;
        case '/hello':
            req.respond({
                body: 'Hello!',
            });
            break;
        case '/world':
            req.respond({
                body: 'World!',
            });
            break;
        default:
            req.respond({
                body: '404 Not Found',
            });
    }
}
