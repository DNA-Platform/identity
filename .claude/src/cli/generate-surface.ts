///: Generate — turn the app's TypeScript into a typed artifact the CLI can trust.
///:
///: `npx tsx src/cli/generate-surface.ts --write`
///:
///: **Why generate rather than parse at startup.** The CLI's command list has to stay
///: in step with the driver's types, and two representations that must agree are two
///: representations that will eventually disagree. Generation removes the second
///: author: the artifact is *derived*, a test asserts it is current, and a stale one
///: is a failing build rather than a CLI that quietly offers a method that no longer
///: exists.
///:
///: It also buys three things parsing-at-startup cannot:
///:   - **types**, not just data — `AppClassName` is a union of the real class names,
///:     so a typo is a compile error rather than an empty room;
///:   - **speed** — no disk walk and no AST build on every command;
///:   - **a diff** — when the app's surface changes, the change shows up in review as
///:     a readable diff instead of happening invisibly at runtime.
///:
///: The parser it uses is the same one the tests use ([surface.ts](surface.ts)), so
///: the generated artifact and the hermetic tests cannot disagree about what a
///: method is.
///:
///: [The Runtime](../../library/reference-desk/14-the-runtime.md) — derived, never declared.

import { readSurfaces } from './surface.ts';
import type { ClassSurface } from './surface.ts';
import { writeFileSync, readFileSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const HERE = dirname(fileURLToPath(import.meta.url));
export const SRC_ROOT = resolve(HERE, '..');
export const GENERATED_PATH = resolve(HERE, 'surface.generated.ts');

const BANNER = `// GENERATED — do not edit. Run: npx tsx src/cli/generate-surface.ts --write
//
// The app's public surface, read from the TypeScript syntax tree of .claude/src/**.
// This is the bridge between the driver's strongly typed structure and what the CLI
// reports: one derived artifact, so the two cannot drift apart. A test asserts this
// file is current, which turns "the CLI is out of date" into a failing build.
//
// See src/cli/generate-surface.ts and library/reference-desk/14-the-runtime.md.
`;

/** Stable, readable output: classes sorted, members sorted, so a real change to the
 *  app produces a small diff and a reordering produces none. */
function serialize(surfaces: Map<string, ClassSurface>): string {
  const classes = [...surfaces.values()].sort((a, b) => a.name.localeCompare(b.name));

  const body = classes.map(c => {
    const methods = [...c.methods].sort((a, b) => a.name.localeCompare(b.name));
    const properties = [...c.properties].sort((a, b) => a.name.localeCompare(b.name));
    const m = methods.map(mth => {
      const params = mth.params
        .map(p => `{ name: ${q(p.name)}, type: ${q(p.type)}, optional: ${p.optional} }`)
        .join(', ');
      return `      { name: ${q(mth.name)}, params: [${params}], returns: ${q(mth.returns)}, ` +
        `isAsync: ${mth.isAsync}, doc: ${q(mth.doc)} },`;
    }).join('\n');
    const p = properties
      .map(pr => `      { name: ${q(pr.name)}, type: ${q(pr.type)} },`)
      .join('\n');
    return `  {
    name: ${q(c.name)},
    extends: ${c.extends ? q(c.extends) : 'null'},
    origin: ${q(c.origin)},
    methods: [
${m}
    ],
    properties: [
${p}
    ],
  },`;
  }).join('\n');

  const names = classes.map(c => `  | ${q(c.name)}`).join('\n');

  return `${BANNER}
import type { ClassSurface } from './surface.ts';

/** Every class the app exposes. A union, so a misspelled screen is a compile error
 *  rather than an empty room. */
export type AppClassName =
${names};

export const APP_SURFACE: readonly ClassSurface[] = [
${body}
];

/** The generated surface, keyed by class name — what the CLI reads instead of
 *  walking the disk and rebuilding a syntax tree on every command. */
export const SURFACE_BY_NAME: ReadonlyMap<AppClassName, ClassSurface> =
  new Map(APP_SURFACE.map(c => [c.name as AppClassName, c]));
`;
}

function q(s: string): string {
  return JSON.stringify(s);
}

/** The file content the current source would produce. Used by the generator to write
 *  it and by the test to assert the committed copy matches. */
export function renderGenerated(): string {
  return serialize(readSurfaces(SRC_ROOT));
}

/** Is the committed artifact current? The whole guarantee, in one predicate. */
export function isGeneratedCurrent(): boolean {
  if (!existsSync(GENERATED_PATH)) return false;
  const onDisk = readFileSync(GENERATED_PATH, 'utf-8').replace(/\r\n/g, '\n');
  return onDisk === renderGenerated().replace(/\r\n/g, '\n');
}

if (process.argv.includes('--write')) {
  const content = renderGenerated();
  writeFileSync(GENERATED_PATH, content, 'utf-8');
  const classes = content.match(/^  \{$/gm)?.length ?? 0;
  console.log(`Wrote ${GENERATED_PATH} — ${classes} classes.`);
} else if (process.argv[1]?.endsWith('generate-surface.ts')) {
  console.log(isGeneratedCurrent()
    ? 'surface.generated.ts is CURRENT.'
    : 'surface.generated.ts is STALE — run with --write.');
}
