// THE DAY IN THE WORLD — news-image-20261122 entry (Node 22, standard library only).
//
// The image is the entry.png beside this file: a newspaper front page summing up
// Sunday 22 November 2026 (Mexico's capture of "El Chapo Isidro", the AI sell-off,
// Iran's strike on Bahrain, COP31 overtime, plus a markets ticker). The program
// copies it to the output directory the grader provides (/output, or
// MAKEFUN_OUTPUT_DIR when run locally). Copying keeps both runs byte-identical:
// the same file in, the same file out.
//
// Run it locally with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, statSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const target = join(outDir, 'entry.png');

mkdirSync(outDir, { recursive: true });
copyFileSync(join(here, 'entry.png'), target);
console.log('wrote ' + target + ' (' + statSync(target).size + ' bytes)');
