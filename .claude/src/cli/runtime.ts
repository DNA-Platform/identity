///: Runtime — binding to the live screen and running one command.
///:
///: This is the CLI's whole engine, and it is deliberately small. It binds the page
///: the app is actually on, resolves a typed command path against the [screen
///: model](describe.ts), invokes it, and classifies what came back. It contains **no
///: app behaviour**: no UIA, no gateway, no waiting, no retries. Anything it cannot
///: express as a call on an existing View method is a sign the View is missing
///: something, and the fix belongs in `.claude/src/`
///: ([ch.5](../../library/reference-desk/05-coding-philosophy.md)).
///:
///: The app is reached through `AppHandle` — the narrow slice of [`Claude`](../../src/claude.ts)
///: the CLI needs. A narrow interface is what lets the hermetic tests drive a fake
///: screen with no Claude Desktop present, which is what makes those tests get run.
///:
///: [The Runtime](../../library/reference-desk/14-the-runtime.md) — the specification.
///: [Sprint 102](../../library/projected-identity/74-sprint-102--lifting-the-app-into-the-cli.md) — the lift.

import type { ClassSurface } from './surface.ts';
import type { Command, ScreenModel } from './describe.ts';
import { describeScreen, findCommand, candidates } from './describe.ts';
import { renderAmbiguity, renderUnknown } from './render.ts';

/** The slice of the app the CLI uses. `Claude` satisfies it; so does a fake. */
export interface AppHandle {
  /** Reconstitute the page for the screen we are actually on — the app's own
   *  confirm-then-bind, never the CLI's guess about where we are. */
  currentPage(): Promise<object>;
  currentUrl(): Promise<string>;
  /** The live UIA tree, at any time, no failure required. */
  tree(): Promise<{ toString(): string; isEmpty: boolean }>;
}

/** One reading that changed because of an action — how the operator keeps track of
 *  app state without re-reading the whole screen. */
export interface Change {
  readonly path: string;
  readonly before: string;
  readonly after: string;
}

export type Outcome =
  | { kind: 'moved'; model: ScreenModel; from: string }
  | { kind: 'read'; command: Command; value: unknown }
  | {
      kind: 'acted';
      command: Command;
      /** Where the change happened: a component's name, or the screen itself. */
      scope: string;
      /** What actually changed, read from the scope's own looks. Empty means the
       *  action reported success but nothing observable moved — worth saying out
       *  loud rather than hiding behind a checkmark. */
      changed: readonly Change[];
      /** What you can do in that scope now — the LOCAL surface, not the whole room.
       *  A local action should not make you re-read the building. */
      surface: readonly Command[];
    }
  | { kind: 'refused'; message: string };

/** The value of a look, rendered for a person.
 *
 *  Deliberately generic: a per-type renderer here would be a hand-maintained list by
 *  another name, and the right home for "how does a Message print itself" is the
 *  class, not the CLI ([Sprint 102 open question 1](../../library/projected-identity/74-sprint-102--lifting-the-app-into-the-cli.md#open-questions--honest-ones)).
 *  So: strings pass through, arrays list, and anything with its own `toString` is
 *  trusted to know how it wants to look. */
export function renderValue(value: unknown): string {
  if (value === null || value === undefined) return '(nothing)';
  if (typeof value === 'string') return value === '' ? '(empty)' : value;
  if (typeof value === 'boolean' || typeof value === 'number') return String(value);
  if (Array.isArray(value)) {
    if (value.length === 0) return '(none)';
    return value.map((v, i) => `  ${String(i + 1).padStart(3)}. ${oneLine(v)}`).join('\n');
  }
  return oneLine(value);
}

function oneLine(value: unknown): string {
  if (value === null || value === undefined) return '(nothing)';
  if (typeof value === 'object') {
    // "Knows how to print itself" means it overrides Object.prototype.toString.
    // Asking whether its prototype merely HAS a toString is always true — every
    // object inherits one — which renders every plain object as [object Object].
    if ((value as { toString?: unknown }).toString !== Object.prototype.toString) {
      return String(value);
    }
    // A plain data object: show its fields rather than [object Object].
    return Object.entries(value as Record<string, unknown>)
      .map(([k, v]) => `${k}: ${typeof v === 'string' ? v : JSON.stringify(v)}`)
      .join('  ');
  }
  return String(value);
}

export class Runtime {
  private page: object | null = null;
  private url: string | null = null;

  constructor(
    private readonly app: AppHandle,
    private readonly surfaces: ReadonlyMap<string, ClassSurface>,
  ) {}

  /** Bind to the screen the app is actually on. Every move re-binds, because a held
   *  page can desynchronize from the app and the [Session](../../src/session.ts)'s own
   *  discipline is never to assume. */
  async bind(): Promise<ScreenModel> {
    this.page = await this.app.currentPage();
    this.url = await this.app.currentUrl().catch(() => null);
    return this.model();
  }

  model(): ScreenModel {
    if (!this.page) throw new Error('Not bound to a screen — call bind() first.');
    return describeScreen(this.page, this.surfaces, this.url);
  }

  /** The live tree, optionally filtered. Always available, on every screen, and
   *  never blocked by anything — the moment you most need to look is when something
   *  is stuck. */
  async tree(): Promise<{ toString(): string; isEmpty: boolean }> {
    return this.app.tree();
  }

  /** Resolve a command by the path a person typed. Ambiguity is reported, never
   *  guessed; an unknown name reports what IS here, because "not here" tells you
   *  which screen you are on. */
  resolve(path: string): { command: Command } | { refusal: string } {
    const model = this.model();
    const command = findCommand(model, path);
    if (command) return { command };
    const matches = candidates(model, path);
    if (matches.length > 1) return { refusal: renderAmbiguity(path, matches) };
    return { refusal: renderUnknown(path, model) };
  }

  /** Check the arguments against the signature the surface already parsed, so a
   *  wrong call is refused with the real signature instead of a stack trace. */
  checkArgs(command: Command, args: readonly string[]): string | null {
    const required = command.params.filter(p => !p.optional).length;
    if (args.length < required || args.length > command.params.length) {
      const shape = command.params
        .map(p => (p.optional ? `[${p.name}]` : `<${p.name}>`)).join(' ');
      const expected = command.params.length === 0
        ? 'no arguments'
        : `${required === command.params.length ? required : `${required}–${command.params.length}`}: ${shape}`;
      return `"${command.path}" takes ${expected}, but got ${args.length}.`;
    }
    return null;
  }

  /** Invoke a command and say what happened.
   *
   *  An **exit** re-binds to whatever it returned, so the caller prints the new room.
   *  A **do** re-binds too: a change you cannot see is a change you cannot verify
   *  ([every action gets a confirmation read](../../library/reference-desk/05-coding-philosophy.md)).
   *  A **look** returns its value and does not disturb where we are. */
  async run(path: string, args: readonly string[] = []): Promise<Outcome> {
    const resolved = this.resolve(path);
    if ('refusal' in resolved) return { kind: 'refused', message: resolved.refusal };
    const { command } = resolved;

    const argError = this.checkArgs(command, args);
    if (argError) return { kind: 'refused', message: argError };

    const from = this.model().screen;
    // Read the scope's state BEFORE acting, so the action can report what it moved.
    // Only for a `do` — a look changes nothing and a move re-reads everything anyway.
    const beforeReadings = command.kind === 'do'
      ? await this.readScope(scopeOf(command))
      : new Map<string, string>();
    const target = this.targetFor(command);
    const method = (target as Record<string, unknown>)[leafName(command.path)];
    if (typeof method !== 'function') {
      return {
        kind: 'refused',
        message:
          `"${command.path}" is described by the code but is not callable on the live object.\n` +
          'The screen model and the running app disagree — run `tree` to see what the app shows.',
      };
    }

    const value = await (method as (...a: unknown[]) => unknown).apply(target, [...args]);

    if (command.kind === 'exit') {
      // Trust the app's own return: navigation hands back the page you landed on.
      this.page = (value && typeof value === 'object') ? value as object : await this.app.currentPage();
      this.url = await this.app.currentUrl().catch(() => null);
      return { kind: 'moved', model: this.model(), from };
    }

    if (command.kind === 'look') return { kind: 'read', command, value };

    // A local action reports LOCAL change. Re-printing the whole room after every
    // keystroke buries the one thing that moved, and makes the operator re-read a
    // building to learn that a text box now holds text. So: read the scope's own
    // looks before and after, and report the difference.
    //
    // The set of readings is DERIVED — it is the parameterless looks the surface
    // already knows about for that scope — so a new sensor on a component is
    // automatically part of what an action on it reports.
    const scope = scopeOf(command);
    const after = await this.readScope(scope);
    const changed: Change[] = [];
    for (const [path, value] of after) {
      const was = beforeReadings.get(path);
      if (was !== undefined && was !== value) changed.push({ path, before: was, after: value });
    }
    return { kind: 'acted', command, scope, changed, surface: this.surfaceOf(scope) };
  }

  /** Every parameterless look in a scope, read now. Parameterless because a reading
   *  that needs an argument is a question, not a state; and cheap because these are
   *  the same controller sensors the gateway polls. Failures are swallowed per
   *  reading — one unreadable sensor must not lose the whole report. */
  async readScope(scope: string): Promise<Map<string, string>> {
    const out = new Map<string, string>();
    for (const c of this.surfaceOf(scope)) {
      if (c.kind !== 'look' || c.params.length > 0) continue;
      const target = scope === SCREEN ? this.page! : (this.page as Record<string, unknown>)[scope];
      if (!target || typeof target !== 'object') continue;
      const fn = (target as Record<string, unknown>)[leafName(c.path)];
      if (typeof fn !== 'function') continue;
      try {
        out.set(c.path, renderValue(await (fn as () => unknown).call(target)));
      } catch { /* an unreadable sensor is not a reason to lose the rest */ }
    }
    return out;
  }

  /** The commands belonging to one scope — a component's, or the screen's own. */
  surfaceOf(scope: string): Command[] {
    const model = this.model();
    const all = [...model.exits, ...model.looks, ...model.actions];
    return scope === SCREEN
      ? all.filter(c => !c.path.includes('.'))
      : all.filter(c => c.path.startsWith(`${scope}.`));
  }

  /** `composer.type` runs on the page's `composer`; `rename` runs on the page. */
  private targetFor(command: Command): object {
    const dot = command.path.indexOf('.');
    if (dot < 0) return this.page!;
    const holder = (this.page as Record<string, unknown>)[command.path.slice(0, dot)];
    if (!holder || typeof holder !== 'object') {
      throw new Error(`"${command.path.slice(0, dot)}" is not on this screen.`);
    }
    return holder as object;
  }
}

function leafName(path: string): string {
  const dot = path.lastIndexOf('.');
  return dot < 0 ? path : path.slice(dot + 1);
}

/** The name used for "the page itself" rather than one of its components. */
export const SCREEN = '(screen)';

/** `composer.type` is scoped to the composer; `rename` is scoped to the screen. */
export function scopeOf(command: Command): string {
  const dot = command.path.indexOf('.');
  return dot < 0 ? SCREEN : command.path.slice(0, dot);
}
