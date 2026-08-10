///: Surface — what the code says you can do, read from the code's own syntax tree.
///:
///: The screen model must never be hand-listed. A hand-maintained command table is
///: the drift that put deleted class names in [ch.12](../../library/reference-desk/12-the-app.md)
///: for six sprints while reading as authoritative.
///:
///: **This reads the TypeScript AST, not the text.** The first version matched source
///: with regular expressions and failed exactly the way regex parsers fail: it
///: understood class fields but not *constructor parameter properties*, which is how
///: the driver declares most of its components — so `composer` and `artifacts` were
///: invisible and the Conversation screen showed no exits at all. The compiler
///: already knows the answer; asking it is both simpler and correct.
///:
///: One parser serves two callers, which is what keeps them honest: the
///: [generator](generate-surface.ts) runs it over `.claude/src/**` to emit
///: [the typed surface](surface.generated.ts), and the tests run it over fixtures.
///: They cannot disagree about what a method is.
///:
///: [The Runtime](../../library/reference-desk/14-the-runtime.md) — derived, never declared.

import ts from 'typescript';
import { readFileSync, readdirSync, statSync } from 'fs';
import { join, extname, relative } from 'path';

export interface Param {
  readonly name: string;
  readonly type: string;
  readonly optional: boolean;
}

/** What one method promises. `returns` is the declared type, verbatim from source. */
export interface MethodSurface {
  readonly name: string;
  readonly params: readonly Param[];
  readonly returns: string;
  readonly isAsync: boolean;
  /** The author's own doc comment — a better description than anything we could
   *  generate, and already written. */
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
  /** Where the class was declared, relative to `src/` — `pages/conversation.ts`,
   *  `components/chat-list.ts`, `gateway.ts`. This is how the CLI tells a PLACE
   *  from a VALUE, and it is not a list anyone maintains: the architecture already
   *  requires that the objects modelling the screen live in `pages/` and
   *  `components/` ([layers](../../library/reference-desk/02-01-the-architecture--layers.md)). */
  readonly origin: string;
}

/** The View layer — the directories whose classes model what is on the screen.
 *  A class declared here is somewhere you can BE. A class declared anywhere else is
 *  infrastructure or a value: `TreeSnapshot` has methods, but you read it, you do
 *  not stand in it. */
export const PLACE_DIRS = new Set(['pages', 'components']);

/** Directories that are not part of the app's surface: throwaway capture
 *  scaffolding, the migration exporters, evidence, and the CLI itself — the CLI
 *  must never describe itself as something you can do to the app. */
export const NOT_SURFACE_DIRS = new Set(['scripts', 'tests', 'debug', 'trees', 'exports', 'cli', 'shortcut']);

/** `Promise<ConversationPage>` → `ConversationPage`; `Promise<void>` → `void`. */
export function unwrapPromise(type: string): string {
  const m = /^Promise\s*<([\s\S]*)>$/.exec(type.trim());
  return m ? m[1].trim() : type.trim();
}

/** Does this type name a screen you can be on? That is what makes a method an EXIT
 *  rather than an action — navigation returns the next page, so a page-typed return
 *  IS a door.
 *
 *  Match the SUFFIX, never a word boundary: `/\bPage\b/` has no boundary between
 *  "n" and "P" in `ConversationPage`, and that bug silently classified every door in
 *  the app as a look. */
export function namesAPage(type: string): boolean {
  return unwrapPromise(type)
    .split('|')
    .map(part => part.replace(/\[\]$/, '').trim())
    .some(part => /Page$/.test(part));
}

/** Does this type name a PLACE — somewhere you can be, and act from?
 *
 *  A page is a place. So is a menu, a modal, a panel, the sidebar: anything the app
 *  models as an object with its own actions. That is what makes it a door.
 *
 *  **A list is not a place.** `projects(): ProjectItem[]` hands you data about the
 *  screen; `menu(): ConversationMenu` puts you somewhere new. Same "returns a class
 *  we know about", opposite meaning, and the array is the whole distinction.
 *
 *  This started as `namesAPage`, and the narrower rule had a real bug behind it:
 *  `menu()` takes no parameters and returns a value, so it classified as a LOOK —
 *  and looks are read before and after every action to report what changed. Calling
 *  `menu()` OPENS the conversation menu. An unrelated action would have opened it
 *  twice. A look must be harmless; going through a door need not be. */
export function namesAPlace(type: string, surfaces: ReadonlyMap<string, ClassSurface>): boolean {
  const parts = unwrapPromise(type)
    .split('|')
    .map(p => p.trim())
    .filter(p => p !== 'null' && p !== 'undefined' && p !== '');
  if (parts.length === 0) return false;
  if (parts.some(p => p.endsWith('[]'))) return false;   // a list is a reading
  return parts.some(p => isPlaceClass(p, surfaces));
}

/** Is this class a place? It is if the app declared it in the View layer.
 *
 *  "Has methods" is not enough — `TreeSnapshot` has seven and is a value. "Is a
 *  Page" is too narrow — that is the rule that made `menu()` look harmless. Where
 *  the app puts the class is the answer it already gave. */
export function isPlaceClass(name: string, surfaces: ReadonlyMap<string, ClassSurface>): boolean {
  if (/Page$/.test(name)) return true;   // a page is a place, wherever it is declared
  const cls = surfaces.get(name);
  if (!cls) return false;                // unknown and not a page: assume data
  return PLACE_DIRS.has(cls.origin.split('/')[0]);
}

// ---------------------------------------------------------------------------
// Reading the syntax tree
// ---------------------------------------------------------------------------

function isPublic(node: ts.HasModifiers): boolean {
  const mods = ts.getModifiers(node) ?? [];
  return !mods.some(m =>
    m.kind === ts.SyntaxKind.PrivateKeyword || m.kind === ts.SyntaxKind.ProtectedKeyword);
}

function hasModifier(node: ts.HasModifiers, kind: ts.SyntaxKind): boolean {
  return (ts.getModifiers(node) ?? []).some(m => m.kind === kind);
}

/** The JSDoc above a member, flattened to one line. The compiler hands us the
 *  association, so there is no "is this comment really attached?" guesswork — which
 *  the text-matching version had to do by hand, and got wrong. */
function docOf(node: ts.Node): string {
  const jsDoc = (node as { jsDoc?: ts.JSDoc[] }).jsDoc;
  if (!jsDoc || jsDoc.length === 0) return '';
  const comment = jsDoc[jsDoc.length - 1].comment;
  const text = typeof comment === 'string'
    ? comment
    : (comment ?? []).map(c => (c as ts.JSDocText).text ?? '').join('');
  return text.split('\n').map(l => l.trim()).filter(Boolean).join(' ').trim();
}

function typeText(node: ts.TypeNode | undefined, source: ts.SourceFile, fallback = 'unknown'): string {
  return node ? node.getText(source).replace(/\s+/g, ' ').trim() : fallback;
}

/** Parse one file's classes from its syntax tree. */
export function parseSource(text: string, fileName = 'source.ts'): ClassSurface[] {
  const source = ts.createSourceFile(fileName, text, ts.ScriptTarget.ES2022, true);
  const classes: ClassSurface[] = [];

  const visit = (node: ts.Node): void => {
    if (ts.isClassDeclaration(node) && node.name) {
      const methods: MethodSurface[] = [];
      const properties: PropertySurface[] = [];

      for (const member of node.members) {
        // Constructor parameter properties — `constructor(readonly composer: Composer)`.
        // This is how the driver declares most components, and it is exactly the case
        // the regex parser could not see.
        if (ts.isConstructorDeclaration(member)) {
          for (const p of member.parameters) {
            const declaresProperty =
              hasModifier(p, ts.SyntaxKind.ReadonlyKeyword) || hasModifier(p, ts.SyntaxKind.PublicKeyword);
            if (declaresProperty && isPublic(p)) {
              properties.push({ name: p.name.getText(source), type: typeText(p.type, source) });
            }
          }
          continue;
        }
        if (!isPublic(member as ts.HasModifiers)) continue;

        if (ts.isMethodDeclaration(member) && member.name) {
          methods.push({
            name: member.name.getText(source),
            params: member.parameters.map(p => ({
              name: p.name.getText(source),
              type: typeText(p.type, source),
              optional: Boolean(p.questionToken) || Boolean(p.initializer),
            })),
            returns: typeText(member.type, source, 'void'),
            isAsync: hasModifier(member, ts.SyntaxKind.AsyncKeyword),
            doc: docOf(member),
          });
        } else if (ts.isPropertyDeclaration(member) && member.name) {
          properties.push({ name: member.name.getText(source), type: typeText(member.type, source) });
        } else if (ts.isGetAccessor(member) && member.name) {
          properties.push({ name: member.name.getText(source), type: typeText(member.type, source) });
        }
      }

      const base = node.heritageClauses
        ?.find(h => h.token === ts.SyntaxKind.ExtendsKeyword)
        ?.types[0]?.expression.getText(source) ?? null;

      classes.push({
        name: node.name.getText(source),
        extends: base,
        methods,
        properties,
        origin: fileName.replace(/\\/g, '/'),
      });
    }
    ts.forEachChild(node, visit);
  };

  visit(source);
  return classes;
}

/** Every class in the app's surface, keyed by class name. The generator walks the
 *  disk with this; the CLI reads the generated artifact instead. */
export function readSurfaces(root: string): Map<string, ClassSurface> {
  const map = new Map<string, ClassSurface>();
  const walk = (dir: string): void => {
    for (const entry of readdirSync(dir).sort()) {
      const full = join(dir, entry);
      if (statSync(full).isDirectory()) {
        if (NOT_SURFACE_DIRS.has(entry)) continue;
        walk(full);
      } else if (extname(entry) === '.ts' && !entry.endsWith('.generated.ts')) {
        // The path is recorded RELATIVE to src, because it is meaningful data —
        // which layer a class belongs to — not a machine-specific location.
        const origin = relative(root, full);
        for (const cls of parseSource(readFileSync(full, 'utf-8'), origin)) map.set(cls.name, cls);
      }
    }
  };
  walk(root);
  return map;
}

/** A class's own members plus everything it inherits, nearest declaration winning. */
export function flatten(className: string, surfaces: ReadonlyMap<string, ClassSurface>): ClassSurface {
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
  for (const cls of [...chain].reverse()) {          // base first, so overrides win
    for (const m of cls.methods) methods.set(m.name, m);
    for (const p of cls.properties) properties.set(p.name, p);
  }
  return {
    name: className,
    extends: chain[0]?.extends ?? null,
    methods: [...methods.values()],
    properties: [...properties.values()],
    // The class's OWN declaration site, not a base's — where you are is what
    // decides whether you are a place.
    origin: chain[0]?.origin ?? '',
  };
}
