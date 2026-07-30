///: Surface — what the code says you can do, read from the code itself.
///:
///: The screen model must never be hand-listed. A hand-maintained command table is
///: the drift that put deleted class names in [ch.12](../library/reference-desk/12-the-app.md)
///: for six sprints while reading as authoritative. So the CLI derives its command
///: list from two sources that both track the code and cannot disagree with it:
///:
///:   1. the LIVE INSTANCE — what page object we are actually holding, and which
///:      components it actually has (runtime reflection);
///:   2. the SOURCE — the method signatures, because a return type is what tells us
///:      a method is an EXIT (`Promise<ConversationPage>`) rather than an action.
///:
///: Return types are erased at runtime, which is why (2) exists. This is the same
///: read the [introspect tool](../library/reference-desk/09-codebase-index--introspect.ts)
///: performs, narrowed to what the CLI needs.
///:
///: Add a method to a page and it appears in the CLI with no second edit. That
///: property is the point, and it is what [Sprint 100](../library/projected-identity/72-sprint-100--the-cli-test-suite.md)
///: tests by adding a real method rather than comparing to a frozen list.
///:
///: [The Claude Nexus](../library/projected-identity/71-sprint-99--the-claude-nexus.md) — describe() derived, never declared.
///: [Codebase Index](../library/reference-desk/09-codebase-index.md) — reading the source before writing code.

import { readFileSync, readdirSync, statSync } from 'fs';
import { join, extname } from 'path';

export interface Param {
  readonly name: string;
  readonly type: string;
  readonly optional: boolean;
}

/** What one method promises. `returns` is the declared type with `Promise<>` peeled. */
export interface MethodSurface {
  readonly name: string;
  readonly params: readonly Param[];
  readonly returns: string;
  readonly isAsync: boolean;
  /** The `/** … *\/` line above it, if any — the author's own words about the method. */
  readonly doc: string;
}

export interface PropertySurface {
  readonly name: string;
  readonly type: string;
}

export interface ClassSurface {
  readonly name: string;
  readonly extends: string | null;
  readonly methods: readonly MethodSurface[];
  readonly properties: readonly PropertySurface[];
}

/** `Promise<ConversationPage>` → `ConversationPage`; `Promise<void>` → `void`. */
export function unwrapPromise(type: string): string {
  const m = /^Promise\s*<([\s\S]*)>$/.exec(type.trim());
  return m ? m[1].trim() : type.trim();
}

/** Does this type name a screen you can be on? That is what makes a method an EXIT
 *  rather than an action — the app hands you the next page, which is precisely the
 *  navigation contract in [Architecture Patterns]. Also true through a union or an
 *  array, so `ConversationPage | null` still reads as an exit. */
export function namesAPage(type: string): boolean {
  // Match the SUFFIX, not a word boundary: `ConversationPage` has no boundary
  // between "n" and "P", so /\bPage\b/ silently classifies every door as a look.
  return unwrapPromise(type)
    .split('|')
    .map(part => part.replace(/\[\]$/, '').trim())
    .some(part => /Page$/.test(part));
}

/** Split a parameter list on top-level commas — `a: Map<string, number>, b` has one
 *  comma that does NOT separate parameters. Depth-counting, not splitting on ','. */
function splitParams(raw: string): string[] {
  const out: string[] = [];
  let depth = 0;
  let current = '';
  for (const ch of raw) {
    if (ch === '<' || ch === '(' || ch === '[' || ch === '{') depth++;
    else if (ch === '>' || ch === ')' || ch === ']' || ch === '}') depth--;
    if (ch === ',' && depth === 0) { out.push(current); current = ''; continue; }
    current += ch;
  }
  if (current.trim()) out.push(current);
  return out.map(s => s.trim()).filter(Boolean);
}

function parseParams(raw: string): Param[] {
  return splitParams(raw).map(p => {
    const eq = p.indexOf('=');
    const withoutDefault = eq >= 0 ? p.slice(0, eq).trim() : p;
    const colon = withoutDefault.indexOf(':');
    const namePart = (colon >= 0 ? withoutDefault.slice(0, colon) : withoutDefault).trim();
    const type = colon >= 0 ? withoutDefault.slice(colon + 1).trim() : 'unknown';
    const optional = namePart.endsWith('?') || eq >= 0;
    return { name: namePart.replace(/\?$/, ''), type, optional };
  });
}

/** The doc comment immediately above `index`, flattened to one line.
 *
 *  "Immediately" is enforced: if anything but whitespace sits between the comment's
 *  close and the member, the comment belongs to something else and is not borrowed.
 *  The author's own words are the best description a command can have — better than
 *  anything the CLI could invent — so this is how a method explains itself. */
function docAbove(source: string, index: number): string {
  const before = source.slice(0, index);
  const open = before.lastIndexOf('/**');
  if (open < 0) return '';
  const close = before.indexOf('*/', open);
  if (close < 0) return '';
  if (before.slice(close + 2).trim().length > 0) return '';
  return before.slice(open + 3, close)
    .split('\n')
    .map(line => line.replace(/^\s*\*+/, '').trim())
    .filter(Boolean)
    .join(' ')
    .trim();
}

const CLASS_RE = /export\s+(?:abstract\s+)?class\s+(\w+)(?:\s+extends\s+(\w+))?/g;
// `async name(params): Promise<X> {` or `name(params): X {` or `get name(): X {`
const MEMBER_RE = /^[ \t]{2}(?!\/\/)(?:(private|protected|public)\s+)?(?:(readonly)\s+)?(?:(async)\s+)?(?:(get)\s+)?(\w+)\s*(?:\(([\s\S]*?)\))?\s*:\s*([^;{=]+?)\s*[;{]/gm;

/** Read one source file's exported classes. Members are attributed to the class
 *  whose declaration most recently preceded them — the files here declare classes
 *  top-level and in order, which is what makes that safe. */
export function parseSource(source: string, fileName = ''): ClassSurface[] {
  const classes: { name: string; extends: string | null; at: number }[] = [];
  for (const m of source.matchAll(CLASS_RE)) {
    classes.push({ name: m[1], extends: m[2] ?? null, at: m.index ?? 0 });
  }
  if (classes.length === 0) return [];

  const built = classes.map(c => ({
    name: c.name,
    extends: c.extends,
    at: c.at,
    methods: [] as MethodSurface[],
    properties: [] as PropertySurface[],
  }));

  const owner = (at: number) => {
    let found = built[0];
    for (const c of built) if (c.at <= at) found = c;
    return found;
  };

  for (const m of source.matchAll(MEMBER_RE)) {
    const [, visibility, readonly, isAsync, getter, name, params, returns] = m;
    if (visibility === 'private' || visibility === 'protected') continue;
    if (name === 'constructor') continue;
    const at = m.index ?? 0;
    const target = owner(at);
    const doc = docAbove(source, at);
    if (params === undefined) {
      target.properties.push({ name, type: returns.trim() });
    } else if (getter) {
      target.properties.push({ name, type: returns.trim() });
    } else {
      target.methods.push({
        name,
        params: parseParams(params),
        returns: returns.trim(),
        isAsync: Boolean(isAsync),
        doc,
      });
    }
  }

  return built.map(({ name, extends: ext, methods, properties }) =>
    ({ name, extends: ext, methods, properties }));
}

/** Every exported class in a directory tree, keyed by class name. */
export function readSurfaces(root: string): Map<string, ClassSurface> {
  const map = new Map<string, ClassSurface>();
  const walk = (dir: string): void => {
    for (const entry of readdirSync(dir)) {
      const full = join(dir, entry);
      if (statSync(full).isDirectory()) {
        // Scaffolding and tests are not part of the app's surface.
        if (entry === 'scripts' || entry === 'tests' || entry === 'debug' || entry === 'trees') continue;
        walk(full);
      } else if (extname(entry) === '.ts') {
        for (const cls of parseSource(readFileSync(full, 'utf-8'), full)) {
          map.set(cls.name, cls);
        }
      }
    }
  };
  walk(root);
  return map;
}

/** A class's own members plus everything it inherits, nearest declaration winning. */
export function flatten(className: string, surfaces: Map<string, ClassSurface>): ClassSurface {
  const chain: ClassSurface[] = [];
  let current: string | null = className;
  const seen = new Set<string>();
  while (current && !seen.has(current)) {
    seen.add(current);
    const cls: ClassSurface | undefined = surfaces.get(current);
    if (!cls) break;
    chain.push(cls);
    current = cls.extends;
  }
  const methods = new Map<string, MethodSurface>();
  const properties = new Map<string, PropertySurface>();
  // Walk base-first so a subclass override replaces the base's entry.
  for (const cls of [...chain].reverse()) {
    for (const m of cls.methods) methods.set(m.name, m);
    for (const p of cls.properties) properties.set(p.name, p);
  }
  return {
    name: className,
    extends: chain[0]?.extends ?? null,
    methods: [...methods.values()],
    properties: [...properties.values()],
  };
}
