// only required for dev
// in prod, foundry loads index.js, which is compiled by vite/rollup
// in dev, foundry loads index.js, this file, which loads my-system.ts

window.global = window; // some of your dependencies might need this
import * as MYSYSTEM from './my-system.ts';
