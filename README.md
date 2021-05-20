# Deno Usage

Deno is a runtime for JavaScript/TypeScript which tries to be web compatible and use modern features wherever possible.

## Facts

* Ryan Dahl worked on [node.js](https://nodejs.org/) from 2009-2018
* In 2018 he gave a talk entitled [10 Things I Regret About Node.js](https://www.youtube.com/watch?v=M3BM9TB-8yA)
* During that talk, he announced [Deno](https://deno.land/)
* **D-E-N-O is an anagram of N-O-D-E**
* Both Node and Deno were built for the same purpose, just with different goals
* Node has been criticised for various security issues, so Deno was built with a security first approach in mind

## Features

* Uses the V8 engine and Rust under the hood which supposedly delivers similarly good performance to C++ with a security first approach
* All features work via opt-in by the user
    - Environment variable access, net access, file access, plugins, etc.
* Does not rely on `NPM` or `node_modules` at all
    - Libraries are imported by URL from the Deno site
    - For instance:
        ```
        import { serve } from “https://deno.land/std@0.50.0/http/server.ts";
        ```
    - On first run, the library is downloaded and cached
* Has support for the `window` object, even though we're writing backend code
    - https://deno.land/typedoc/interfaces/window.html

## Examples

To run these examples you will need to [install Deno](https://deno.land/manual/getting_started/installation).

### All features work via opt-in by the user

If you run any of the following examples below without the proper allow flag, you will see a `PermissionDenied` error.

#### Environemnt Variable Access

Use the `--allow-env` flag to allow access:
  - `deno run --allow-env read-env.js` to see `unknown`
  - `ENV_MESSAGE=Hello deno run --allow-env read-env.js` to see `Hello`

#### File Access

Use the `--allow-read` flag to allow file read access:
  - `deno run --allow-read read-file.js`

#### Net Access

Use the `--allow-net` flag to allow net access:
  - `deno run --allow-net fetch-url.js` for global access
  - `deno run --allow-net="www.freepeople.com" fetch-url.js` for specific access

### Does not rely on `NPM` or `node_modules` at all

This example uses [cliffy](https://github.com/c4spar/deno-cliffy) and [chalk](https://github.com/canonic-epicure/chalk-deno).

Use the `--unstable` and `--allow-env` flags to run the third party modules:
  - `deno run --unstable --allow-env third-party-modules.js`

_Note: Versioning is done by adding the version to the import url. NPM is still useful as an easy way to reference scripts and commands._

### Has support for the `window` object

Deno's `window` object supports both `onload`/`onunload` and `addEventListener` with the `load` and `unload` events.
  - `deno run window.js`

## Web Server

A simple web server can be created using Deno's built in http server:
  - `deno run --allow-net server.js`
  - Go to `Home`, http://localhost:3000/
  - Go to `Hello`, http://localhost:3000/hello
  - Go to `World`, http://localhost:3000/world
  - Go to `404` (Any Other Page), http://localhost:3000/404

_Note: If you prefer something more akin to [express.js](https://expressjs.com/) (though this is really more like [Koa](https://koajs.com/)), you could check out [Oak](https://github.com/oakserver/oak). I'm sensing a theme here with the anagrams._

## Links
- [Deno (official)](https://deno.land/)
- [Deno Benchmarks (official)](https://deno.land/benchmarks)
- [Deno vs. Node, Most Important Differences](https://javascript.plainenglish.io/deno-vs-node-js-here-are-the-most-important-differences-62b547443be1)
- [Deno Server in 60 Lines](https://typeofnan.dev/writing-your-first-deno-server-in-60-lines/)
- [Deno vs. Node Performance](https://mayankchoubey.github.io/Deno-vs-Node-Performance/)
- [Deno by Example](https://decipher.dev/deno-by-example/)
