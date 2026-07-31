///: Runtime tests — layer 1: hermetic, no Claude Desktop.
///:
///: A fake screen with the same shape as a real one, driven through the real
///: Runtime. What is asserted is what an operator is entitled to rely on: taking an
///: exit lands you somewhere new, an action re-reads the screen, a bad argument is
///: refused with the real signature, and the CLI never guesses between two commands.
///:
///: The fake is kept deliberately dumb. A clever fake becomes a second implementation
///: with its own bugs ([Sprint 100 open question 1](../../library/projected-identity/72-sprint-100--the-cli-test-suite.md#open-questions--honest-ones)).
///:
///: Run: npm test

import { test } from 'node:test';
import assert from 'node:assert/strict';
import { parseSource } from '../cli/surface.ts';
import { Runtime, renderValue } from '../cli/runtime.ts';
import type { AppHandle } from '../cli/runtime.ts';
import { RecordingClipboard, copyReport, nothingToCopy } from '../cli/clipboard.ts';
import { renderChange } from '../cli/render.ts';

const SOURCE = `
export abstract class Page {
  /** This page's stable id — its URL. */
  async id(): Promise<string> { return ''; }
}
export class Composer {
  /** Type text into the box. */
  async type(text: string): Promise<DraftState> { return null as any; }
  async readDraft(): Promise<string> { return ''; }
  /** Is there anything to send? A SENSOR — the only shape the CLI calls unasked. */
  async canSend(): Promise<boolean> { return false; }
  /** Click Send. */
  async send(): Promise<ConversationPage> { return null as any; }
  /** Empty the box. Parameterless, returns data, and DESTRUCTIVE — the exact shape
   *  that made "parameterless + returns data = harmless reading" a dangerous rule. */
  async clear(): Promise<DraftState> { return null as any; }
}
export class HomePage extends Page {
  readonly composer: Composer;
  /** Open the projects screen. */
  async projects(): Promise<ProjectsPage> { return null as any; }
}
export class ProjectsPage extends Page {
  /** Every project on the screen. */
  async list(): Promise<string[]> { return []; }
}
export class ConversationPage extends Page {
  readonly composer: Composer;
  async messages(): Promise<string[]> { return []; }
  async rename(name: string): Promise<void> {}
  async scrollToBottom(): Promise<void> {}
  /** Attach a file, optionally naming it. */
  async attach(path: string, label?: string): Promise<void> {}
}
`;

const surfaces = () => new Map(parseSource(SOURCE).map(c => [c.name, c]));

/** Fakes named for the classes they stand in for — the live class name IS the screen. */
function named<T extends new (...a: any[]) => any>(name: string, C: T): T {
  Object.defineProperty(C, 'name', { value: name });
  return C;
}

const Composer = named('Composer', class {
  typed: string[] = [];
  sent = 0;
  cleared = 0;
  async type(text: string): Promise<object> {
    this.typed.push(text);
    return { text: this.typed.join(''), canSend: true };
  }
  async readDraft(): Promise<string> { return this.typed.join(''); }
  async canSend(): Promise<boolean> { return this.typed.length > 0; }
  async send(): Promise<object> { this.sent++; return new ConversationPage(); }
  async clear(): Promise<object> {
    this.cleared++; this.typed = [];
    return { text: '', canSend: false };
  }
});

const ProjectsPage = named('ProjectsPage', class {
  async list(): Promise<string[]> { return ['Claude', 'Physics']; }
});

const ConversationPage = named('ConversationPage', class {
  composer = new Composer();
  renamed: string | null = null;
  scrolled = 0;
  async messages(): Promise<string[]> { return ['hello', 'hi']; }
  async rename(name: string): Promise<void> { this.renamed = name; }
  async scrollToBottom(): Promise<void> { this.scrolled++; }
  async attach(_p: string, _l?: string): Promise<void> {}
});

const HomePage = named('HomePage', class {
  composer = new Composer();
  async projects(): Promise<object> { return new ProjectsPage(); }
});

class FakeApp implements AppHandle {
  page: object = new HomePage();
  url = 'claude.ai/new';
  treeEmpty = false;
  async currentPage(): Promise<object> { return this.page; }
  async currentUrl(): Promise<string> { return this.url; }
  async tree() { return { toString: () => 'TREE', isEmpty: this.treeEmpty }; }
}

const runtimeOn = async (page: object) => {
  const app = new FakeApp();
  app.page = page;
  const rt = new Runtime(app, surfaces());
  await rt.bind();
  return { rt, app };
};

// --- Binding and moving ---

test('binding names the screen the app is actually on', async () => {
  const { rt } = await runtimeOn(new HomePage());
  assert.equal(rt.model().screen, 'HomePage');
});

test('taking an exit lands you on the screen it returned', async () => {
  const { rt } = await runtimeOn(new HomePage());
  const out = await rt.run('projects');
  assert.equal(out.kind, 'moved');
  assert.equal(out.kind === 'moved' && out.model.screen, 'ProjectsPage');
  assert.equal(out.kind === 'moved' && out.from, 'HomePage');
  assert.equal(rt.model().screen, 'ProjectsPage', 'and the runtime is now there');
});

test('an exit on a component works the same — the door is wherever it is', async () => {
  const { rt } = await runtimeOn(new HomePage());
  const out = await rt.run('composer.send');
  assert.equal(out.kind, 'moved');
  assert.equal(out.kind === 'moved' && out.model.screen, 'ConversationPage');
});

// --- Looking ---

test('a look returns its value and does not move you', async () => {
  const { rt } = await runtimeOn(new ConversationPage());
  const out = await rt.run('messages');
  assert.equal(out.kind, 'read');
  assert.deepEqual(out.kind === 'read' && out.value, ['hello', 'hi']);
  assert.equal(rt.model().screen, 'ConversationPage');
});

// --- Doing ---

test('an action reports LOCAL change, not the whole room', async () => {
  const page = new ConversationPage();
  const { rt } = await runtimeOn(page);
  const out = await rt.run('rename', ['Sheaf cohomology']);
  assert.equal(out.kind, 'acted');
  assert.equal(page.renamed, 'Sheaf cohomology', 'the app method really ran');
  assert.equal(out.kind === 'acted' && out.scope, '(screen)', 'scoped to the page itself');
  assert.ok(out.kind === 'acted' && out.surface.every(c => !c.path.includes('.')),
    "the local surface is the screen's own commands, not the components'");
});

test('a component action is scoped to that component and reports what moved', async () => {
  const page = new ConversationPage();
  const { rt } = await runtimeOn(page);
  const out = await rt.run('composer.type', ['what is a sheaf?']);
  assert.equal(out.kind, 'acted');
  assert.equal(out.kind === 'acted' && out.scope, 'composer');

  // The APP's own return value is the report — Composer.type hands back its state.
  assert.deepEqual(out.kind === 'acted' ? out.result : null,
    { text: 'what is a sheaf?', canSend: true },
    'the CLI reports what the app said, it does not compose its own account');

  // And the app's SENSORS corroborate it.
  const changed = out.kind === 'acted' ? out.changed : [];
  const sensor = changed.find(c => c.path === 'composer.canSend');
  assert.ok(sensor, `expected composer.canSend to change; got ${JSON.stringify(changed)}`);
  assert.equal(sensor.before, 'false');
  assert.equal(sensor.after, 'true');

  assert.ok(out.kind === 'acted' && out.surface.every(c => c.path.startsWith('composer.')),
    "only the composer's own surface is offered back");
});

test('THE CLI NEVER CALLS AN ACTION IT WAS NOT ASKED TO — not send, not clear', async () => {
  // The bug this pins: `send()` and `clear()` take no parameters and return data,
  // so the old rule called them a harmless "look" — and looks were read before AND
  // after every action to report what changed. Typing would have SENT THE MESSAGE.
  const page = new ConversationPage();
  const { rt } = await runtimeOn(page);
  await rt.run('composer.type', ['hello']);
  assert.equal(page.composer.sent, 0, 'typing must never send');
  assert.equal(page.composer.cleared, 0, 'typing must never clear');

  await rt.run('rename', ['x']);
  assert.equal(page.composer.sent, 0);
  assert.equal(page.composer.cleared, 0);
});

test('only sensors are sampled — is/has/can, the app\'s own word for harmless', async () => {
  const page = new ConversationPage();
  const { rt } = await runtimeOn(page);
  const sampled = await rt.readSensors('composer');
  assert.deepEqual([...sampled.keys()], ['composer.canSend'],
    'readDraft is a reading, but only the app can say a method is safe to call ' +
    'unasked, and is/has/can is how it says it');
});

test('an action that moves nothing observable SAYS so — a checkmark would hide it', async () => {
  const page = new ConversationPage();
  const { rt } = await runtimeOn(page);
  const out = await rt.run('scrollToBottom');
  assert.equal(out.kind, 'acted');
  assert.deepEqual(out.kind === 'acted' ? out.changed : null, [],
    'no sensor moved, and the outcome reports that honestly');
  const text = renderChange('scrollToBottom', '(screen)', [], []);
  assert.match(text, /No sensor/i, 'a bare checkmark would hide it');
});

test('the app\'s own words lead the report — the CLI quotes, it does not narrate', () => {
  const text = renderChange('composer.clear', 'composer', [], [],
    'text:   canSend: false');
  assert.match(text, /✓ composer\.clear/);
  assert.match(text, /canSend: false/, "what the app returned is IN the report");
});

test('the change report reads as a difference, not a dump', () => {
  const text = renderChange('composer.type', 'composer',
    [{ path: 'composer.readDraft', before: '(empty)', after: 'hello' }],
    [{ path: 'composer.send' } as never]);
  assert.match(text, /✓ composer\.type/);
  assert.match(text, /Changed on composer/);
  assert.match(text, /composer\.readDraft/);
  assert.match(text, /→/);
  assert.match(text, /Here in composer/);
  assert.ok(!/Exits/.test(text), 'a local action does NOT reprint the whole room');
});

test('an action on a component reaches the component, not the page', async () => {
  const page = new ConversationPage();
  const { rt } = await runtimeOn(page);
  await rt.run('composer.type', ['what is a sheaf?']);
  assert.deepEqual(page.composer.typed, ['what is a sheaf?']);
});

// --- Refusals: the operator is told the truth, never guessed at ---

test('too few arguments is refused with the real signature', async () => {
  const { rt } = await runtimeOn(new ConversationPage());
  const out = await rt.run('rename', []);
  assert.equal(out.kind, 'refused');
  assert.match(out.kind === 'refused' ? out.message : '', /<name>/);
  assert.match(out.kind === 'refused' ? out.message : '', /takes/);
});

test('too many arguments is refused, and optional parameters are honoured', async () => {
  const { rt } = await runtimeOn(new ConversationPage());
  assert.equal((await rt.run('attach', ['a.txt'])).kind, 'acted', 'optional arg may be omitted');
  assert.equal((await rt.run('attach', ['a.txt', 'label'])).kind, 'acted', 'or supplied');
  const tooMany = await rt.run('attach', ['a', 'b', 'c']);
  assert.equal(tooMany.kind, 'refused');
});

test('a command that is not on this screen reports what IS here', async () => {
  const { rt } = await runtimeOn(new ProjectsPage());
  const out = await rt.run('rename', ['x']);
  assert.equal(out.kind, 'refused');
  const msg = out.kind === 'refused' ? out.message : '';
  assert.match(msg, /no "rename" on the Projects screen/);
  assert.match(msg, /list/, 'it names the real surface');
  assert.match(msg, /tree/, 'and points at the tree when model and app disagree');
});

test('a command described by the code but missing on the object is a disagreement, not a crash', async () => {
  // The surface says ProjectsPage.list exists; this live object does not have it.
  const Hollow = named('ProjectsPage', class {});
  const { rt } = await runtimeOn(new Hollow());
  const out = await rt.run('list');
  assert.equal(out.kind, 'refused');
  assert.match(out.kind === 'refused' ? out.message : '', /disagree/);
});

// --- Rendering a look's value ---

test('values render for a person: strings, empties, lists and objects', () => {
  assert.equal(renderValue('hello'), 'hello');
  assert.equal(renderValue(''), '(empty)');
  assert.equal(renderValue(null), '(nothing)');
  assert.equal(renderValue([]), '(none)');
  assert.equal(renderValue(true), 'true');
  assert.match(renderValue(['a', 'b']), /1\. a[\s\S]*2\. b/);
  assert.match(renderValue({ title: 'Sheaf', count: 4 }), /title: Sheaf {2}count: 4/);
});

test('an object that knows how to print itself is trusted to', () => {
  class Pretty { toString() { return 'I am a sheaf'; } }
  assert.equal(renderValue(new Pretty()), 'I am a sheaf');
});

// --- Handing things over ---

test('a copy reports the true size of what it placed', () => {
  const text = 'line one\nline two';
  assert.match(copyReport('messages', text), /17 characters, 2 lines/);
  assert.match(copyReport('title', 'x'), /1 characters, 1 line\b/);
});

test('a look that produced nothing leaves the clipboard alone, and says so', async () => {
  const clip = new RecordingClipboard();
  assert.match(nothingToCopy('readDraft'), /left alone/);
  assert.equal(clip.last, null, 'nothing was written');
});

test('the clipboard seam records instead of touching the real clipboard', async () => {
  const clip = new RecordingClipboard();
  await clip.write('payload');
  assert.equal(clip.last, 'payload');
});
