///: Place tests — layer 1: hermetic, no Claude Desktop, milliseconds.
///:
///: **A look must be harmless.** That is the promise this file exists to hold, and
///: it was broken: `ConversationPage.menu()` takes no parameters and returns a
///: value, so it classified as a LOOK — and the runtime reads every parameterless
///: look before and after an action to report what changed. Calling `menu()` OPENS
///: the conversation menu. An unrelated action would have opened it twice, on Doug's
///: screen, silently.
///:
///: The fix is the rule these tests pin: a method that returns a PLACE is a door,
///: not a reading. A page is a place; so is a menu, a modal, a panel, the sidebar. A
///: LIST of places is data about the screen, not somewhere you can stand.
///:
///: That rule is also the lift: once a menu is a room, `go menu` walks into it and
///: `look` shows what is there — with no CLI special-casing, because the app already
///: models it as an object with its own actions.
///:
///: Run: npx tsx --test "src/tests/**/*.test.ts"
///:
///: [The Runtime](../../library/reference-desk/14-the-runtime.md) — derived, never declared.

import { test } from 'node:test';
import assert from 'node:assert/strict';
import { parseSource, namesAPlace, isPlaceClass } from '../cli/surface.ts';
import { describeScreen } from '../cli/describe.ts';
import { Runtime } from '../cli/runtime.ts';
import type { AppHandle } from '../cli/runtime.ts';
import { SURFACE_BY_NAME } from '../cli/surface.generated.ts';
import type { ClassSurface } from '../cli/surface.ts';

/** The real shapes, reduced: a page with a door to a menu, a reading that returns a
 *  list of surfaced items, and a menu that can be closed. */
const SOURCE = `
export class ConversationMenu {
  /** Rename the conversation. */
  async rename(name: string): Promise<void> {}
  /** Click Add to project — returns the Move chat modal. */
  async addToProject(): Promise<MoveConversationModal> { return null as any; }
  async close(): Promise<void> {}
}
export class MoveConversationModal {
  async projects(): Promise<ProjectItem[]> { return []; }
}
export class Sidebar {
  async projects(): Promise<ProjectsPage> { return null as any; }
}
export class ConversationPage {
  /** The three-dot conversation menu — reached from the page header. */
  async menu(): Promise<ConversationMenu> { return null as any; }
  sidebar(): Sidebar { return null as any; }
  /** The conversation's messages, read from the tree. */
  async messages(): Promise<ChatMessage[]> { return []; }
  async title(): Promise<string> { return ''; }
  async scrollToBottom(): Promise<void> {}
}
export class ProjectsPage {
  /** Every project on the screen. */
  async projects(): Promise<ProjectItem[]> { return []; }
}
`;

// The fixture is declared as living in `components/` — where a class is declared is
// what makes it a place, so a fixture must say where it lives, exactly like the app.
const surfaces = () => new Map(parseSource(SOURCE, 'components/fixture.ts').map(c => [c.name, c]));

/** The generated surface, widened to a plain string key — the union type is a
 *  guarantee for callers, not a constraint on a test that sweeps every class. */
const REAL: ReadonlyMap<string, ClassSurface> = SURFACE_BY_NAME;

// --- The rule ---

test('a page is a place', () => {
  assert.ok(namesAPlace('Promise<ConversationPage>', surfaces()));
});

test('a menu, a modal and a panel are places too — a place is not only a page', () => {
  const s = surfaces();
  assert.ok(namesAPlace('Promise<ConversationMenu>', s));
  assert.ok(namesAPlace('Promise<MoveConversationModal>', s));
  assert.ok(namesAPlace('Sidebar', s));
});

test('a LIST of places is a reading, not a place — you cannot stand in a list', () => {
  assert.equal(namesAPlace('Promise<ProjectItem[]>', surfaces()), false);
  assert.equal(namesAPlace('Promise<ConversationMenu[]>', surfaces()), false);
});

test('plain data is never a place', () => {
  const s = surfaces();
  assert.equal(namesAPlace('Promise<string>', s), false);
  assert.equal(namesAPlace('Promise<void>', s), false);
  assert.equal(namesAPlace('boolean', s), false);
});

test('an optional place is still a place — "| null" is not a different room', () => {
  assert.ok(namesAPlace('Promise<ConversationPage | null>', surfaces()));
});

// --- The safety property this file exists for ---

test('menu() is an EXIT, not a look — opening a menu is going somewhere', () => {
  class ConversationPage { }
  const m = describeScreen(new ConversationPage(), surfaces());
  const menu = [...m.exits, ...m.looks, ...m.actions].find(c => c.path === 'menu');
  assert.equal(menu?.kind, 'exit',
    'classified as a look, menu() gets called before and after every action — ' +
    'which opens the conversation menu as a side effect of something unrelated');
  assert.equal(menu?.leadsTo, 'ConversationMenu');
});

test('NO look anywhere in the real app returns something with its own actions', () => {
  // The generalised promise, checked against the whole generated surface rather
  // than a fixture — this is the assertion that catches the NEXT menu() someone adds.
  const offenders: string[] = [];
  for (const [name] of REAL) {
    let instance: object;
    try { instance = Object.create({ constructor: { name } }); } catch { continue; }
    Object.defineProperty(instance, 'constructor', { value: { name } });
    const model = describeScreen(instance, REAL);
    for (const look of model.looks) {
      const gives = (look.gives ?? '').replace(/\s*\|\s*null/g, '').trim();
      if (gives.endsWith('[]')) continue;              // a list is data
      // A look returning a VALUE (TreeSnapshot, a string) is fine. A look returning
      // a PLACE is the bug: reaching it means the app moved.
      if (isPlaceClass(gives, REAL)) offenders.push(`${name}.${look.path} -> ${gives}`);
    }
  }
  assert.deepEqual(offenders, [],
    'these are classified as harmless readings but hand back a live object with ' +
    'its own actions, which means reaching them CHANGES the app:\n  ' +
    offenders.join('\n  '));
});

test('a reading that returns a list of surfaced items stays a LOOK', () => {
  class ProjectsPage { }
  const m = describeScreen(new ProjectsPage(), surfaces());
  assert.ok(m.looks.some(c => c.path === 'projects'),
    'a list of projects is what is ON the screen, not a screen you walk into');
});

// --- Walking into a place, and back out ---

/** A page whose menu() hands back a live menu object, as the real app does. */
class FakeMenu {
  closed = false;
  async rename(_n: string): Promise<void> {}
  async close(): Promise<void> { this.closed = true; }
}
class ConversationPage {
  readonly opened: FakeMenu[] = [];
  async menu(): Promise<FakeMenu> {
    const m = new FakeMenu();
    this.opened.push(m);
    return m;
  }
  async messages(): Promise<string[]> { return ['hi']; }
  async title(): Promise<string> { return 'A chat'; }
  async scrollToBottom(): Promise<void> {}
}
Object.defineProperty(FakeMenu, 'name', { value: 'ConversationMenu' });

function handleFor(page: object): AppHandle {
  return {
    currentPage: async () => page,
    currentUrl: async () => 'claude.ai/chat/abc',
    tree: async () => ({ toString: () => '', isEmpty: false }),
  };
}

test('you can walk INTO a menu, and the room becomes the menu', async () => {
  const page = new ConversationPage();
  const runtime = new Runtime(handleFor(page), surfaces());
  await runtime.bind();
  assert.equal(runtime.model().screen, 'ConversationPage');

  const outcome = await runtime.run('menu');
  assert.equal(outcome.kind, 'moved');
  assert.equal(runtime.model().screen, 'ConversationMenu');
  assert.ok(runtime.model().actions.some(c => c.path === 'close'),
    'the way out is the app\'s own close(), offered like any other action');
});

test('the way out of a menu is the app\'s, and back asks the app where it is', async () => {
  const page = new ConversationPage();
  const runtime = new Runtime(handleFor(page), surfaces());
  await runtime.bind();
  await runtime.run('menu');
  await runtime.run('close');
  assert.equal(page.opened[0].closed, true, 'the app closed its own menu');

  // `back` is a re-bind: the CLI keeps no trail, it asks the app.
  const model = await runtime.bind();
  assert.equal(model.screen, 'ConversationPage');
});

test('an action never reaches through a door — readScope only reads', async () => {
  const page = new ConversationPage();
  const runtime = new Runtime(handleFor(page), surfaces());
  await runtime.bind();
  await runtime.run('scrollToBottom');
  assert.equal(page.opened.length, 0,
    'THE WHOLE POINT: an unrelated action must not have opened the menu');
});
