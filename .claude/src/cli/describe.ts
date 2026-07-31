///: Describe — the object model of the screen you are on.
///:
///: Doug's requirement: *at each moment you should be able to ask for a pretty print
///: of a sort of object model of the screen that is on, so it is known what commands
///: are available.* This builds that model, and [render](render.ts) prints it.
///:
///: It is **derived, never declared** — from the live instance (what page object we
///: are holding, which components it actually has) and from the [source surface](surface.ts)
///: (the signatures, because a return type is what makes a method an EXIT). Add a
///: method to a page and it shows up here with no second edit.
///:
///: The classification is the whole idea, and it comes from the app's own laws:
///:   - EXIT      — returns a Page. Navigation returns the next page, so a page-typed
///:                 return IS a door. ([Architecture Patterns](../../library/reference-desk/10-architecture-patterns.md))
///:   - LOOK      — returns data and takes nothing. Reading the screen.
///:   - DO        — everything else. [P2](../../library/reference-desk/13-the-redesign.md#p2--clicks-are-parameterless-only-typing-takes-a-parameter):
///:                 a click is parameterless; only typing takes a string, so a
///:                 parametered DO is a typing action and is marked as one.
///:
///: [The Claude Nexus](../../library/projected-identity/71-sprint-99--the-claude-nexus.md) — describe() in the app, not the command.

import type { ClassSurface, MethodSurface, Param } from './surface.ts';
import { flatten, namesAPage, unwrapPromise } from './surface.ts';

export type CommandKind = 'exit' | 'look' | 'do';

export interface Command {
  /** How you invoke it: `send`, or `composer.type` for a component's method. */
  readonly path: string;
  readonly kind: CommandKind;
  readonly params: readonly Param[];
  /** For an exit, the screen it takes you to. */
  readonly leadsTo: string | null;
  /** For a look, what it hands back. */
  readonly gives: string | null;
  readonly doc: string;
  /** True when this is the one legal parametered action — typing into a box. */
  readonly types: boolean;
}

export interface ScreenModel {
  /** The class of the page object we are holding — the screen, as the code names it. */
  readonly screen: string;
  /** The page's own id (its URL). Absent when we chose not to read the live app. */
  readonly id: string | null;
  readonly exits: readonly Command[];
  readonly looks: readonly Command[];
  readonly actions: readonly Command[];
  /** Components present on this screen — composer, response, artifacts, sidebar. */
  readonly components: readonly string[];
}

/** Members the CLI never offers: infrastructure, plumbing, and the object protocol.
 *  Not a list of what you CAN do — a list of what is not part of the app's surface,
 *  which is a much smaller and much more stable thing to maintain. */
const NOT_APP_SURFACE = new Set([
  'constructor', 'toString', 'toJSON', 'bind', 'screenType',
  'auto', 'gateway', 'diagnostics', 'navigator', 'nav', 'session', 'window',
]);

function classify(m: MethodSurface): CommandKind {
  const returns = unwrapPromise(m.returns);
  if (namesAPage(m.returns)) return 'exit';
  if (m.params.length === 0 && returns !== 'void') return 'look';
  return 'do';
}

function toCommand(m: MethodSurface, prefix = ''): Command {
  const kind = classify(m);
  const returns = unwrapPromise(m.returns);
  return {
    path: prefix ? `${prefix}.${m.name}` : m.name,
    kind,
    params: m.params,
    leadsTo: kind === 'exit' ? returns.replace(/\s*\|\s*null/, '').trim() : null,
    gives: kind === 'look' ? returns : null,
    doc: m.doc,
    types: m.params.length > 0,
  };
}

/** Build the model for a page instance.
 *
 *  `page` is the live object — its constructor name is the screen and its own
 *  properties tell us which components are really there (a `ConversationPage` has a
 *  composer; a `ProjectsPage` does not). `surfaces` supplies the signatures. */
export function describeScreen(
  page: object,
  surfaces: Map<string, ClassSurface>,
  id: string | null = null,
): ScreenModel {
  const screen = page.constructor.name;
  const surface = flatten(screen, surfaces);

  const commands: Command[] = surface.methods
    .filter(m => !NOT_APP_SURFACE.has(m.name))
    .map(m => toCommand(m));

  // Components: a property on the live instance whose class we also have a surface
  // for. Reading the instance (not the declaration) is what keeps this honest — an
  // undefined component is simply not offered.
  const components: string[] = [];
  for (const prop of surface.properties) {
    if (NOT_APP_SURFACE.has(prop.name)) continue;
    const value = (page as Record<string, unknown>)[prop.name];
    if (!value || typeof value !== 'object') continue;
    const componentClass = value.constructor?.name;
    if (!componentClass) continue;
    const componentSurface = surfaces.get(componentClass);
    if (!componentSurface) continue;
    components.push(prop.name);
    for (const m of flatten(componentClass, surfaces).methods) {
      if (NOT_APP_SURFACE.has(m.name)) continue;
      commands.push(toCommand(m, prop.name));
    }
  }

  const byPath = (a: Command, b: Command) => a.path.localeCompare(b.path);
  return {
    screen,
    id,
    exits: commands.filter(c => c.kind === 'exit').sort(byPath),
    looks: commands.filter(c => c.kind === 'look').sort(byPath),
    actions: commands.filter(c => c.kind === 'do').sort(byPath),
    components,
  };
}

/** Find a command by the path a person typed. Exact, then unique suffix — so on a
 *  conversation `type` resolves to `composer.type` when nothing else offers `type`.
 *  Ambiguity is never guessed: it returns null and the caller lists the candidates. */
export function findCommand(model: ScreenModel, path: string): Command | null {
  const all = [...model.exits, ...model.looks, ...model.actions];
  const exact = all.find(c => c.path === path);
  if (exact) return exact;
  const suffix = all.filter(c => c.path.endsWith(`.${path}`));
  return suffix.length === 1 ? suffix[0] : null;
}

/** Every command whose path ends in this name — for reporting an ambiguity honestly. */
export function candidates(model: ScreenModel, path: string): Command[] {
  const all = [...model.exits, ...model.looks, ...model.actions];
  return all.filter(c => c.path === path || c.path.endsWith(`.${path}`));
}
