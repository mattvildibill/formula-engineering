# Formula Engineering Explorer

An interactive parametric Formula reference car that makes engineering systems inspectable.

## Features

Component picking; exploded assemblies; transparency; underfloor isolation; steering and suspension travel; active aero and DRS comparison.

## Architecture

React, TypeScript and Three.js; client-side geometry; Vinext/Vite and Cloudflare-compatible build.

## Run locally

Use Node.js 22.13 or later. The pinned pnpm version is declared in package.json; enable Corepack or install that version of pnpm. 

```sh
corepack pnpm install --frozen-lockfile
npm run build
npm run dev
```

Open the local URL printed by the development server (normally http://127.0.0.1:5173). Keep the development server on loopback.

## Data and configuration

No keys or external runtime APIs. Regulatory links are references; geometry and flow traces are illustrative, not certified engineering predictions.

## Deployment and source workflow

`npm run build` emits Cloudflare-compatible output under `dist/`; `npm start` runs the built Worker locally. `.openai/hosting.json` keeps logical binding declarations but contains no live project identity. The D1 schema and migrations, where applicable, are source only; no hosted database was exported. Authentication provided by ChatGPT Sites must be replaced by a trusted identity layer on other hosts before enabling private writes.

The existing ChatGPT Site remains independently hosted and was not redeployed or relinked. This repository is a version-controlled export, not an automatic two-way sync. Future changes can be reviewed here and deliberately ported to the original Site; never copy deployment identity or private data into a public commit.

## Provenance and validation

Recovered from the current ChatGPT Sites source checkout at commit `77231d90a28f1d100a160358f9e6671be63b62d9`. The migration preserves application code and makes targeted portability/privacy edits. The Sites projects were developed with ChatGPT assistance; this is not represented as unaided work.

See `VALIDATION.md` for checks actually run during migration and their limitations. Historical validation notes, if retained, describe prior work rather than a new test result. No usage, performance or adoption claims are made.

## Licensing and attribution

No new blanket open-source license is assigned: the original project did not establish a complete redistribution license for all authored code/data/assets. Third-party notices remain in their original files. Public source visibility is not a license grant. Obtain appropriate rights before redistributing assets.
