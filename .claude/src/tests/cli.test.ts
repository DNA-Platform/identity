///: CLI tests — layer 1: hermetic, no Claude Desktop, milliseconds.
///:
///: These assert the promises the CLI makes to its operator, not how it makes them.
///: The load-bearing one is **no drift**: the command list is derived from the code,
///: so adding a method to a page must make it appear with no second edit. It is
///: tested by adding a real method to a real class, never by comparing against a
///: frozen list of expected commands — a frozen list would re-introduce exactly the
///: drift the design exists to prevent.
///:
///: Run: npm test
///:
///: [The CLI Test Suite](../../library/projected-identity/72-sprint-100--the-cli-test-suite.md) — the three layers.

import { test } from 'node:test';
import assert from 'node:assert/strict';
import { parseSource, flatten, unwrapPromise, namesAPage } from '../../cli/surface.ts';
import { describeScreen, findCommand, candidates } from '../../cli/describe.ts';
import { renderScreen, renderUnknown, placeName } from '../../cli/render.ts';

/** A stand-in written in the shape of the real driver: a Page base, a concrete page,
 *  and a component the page holds. Small on purpose — a clever fake becomes a second
 *  implementation with its own bugs. */
const SOURCE = `
export abstract class Page {
  /** This page's stable id — its URL. */
  async id(): Promise<string> { return ''; }
  sidebar(): Sidebar { return this._sidebar; }
  abstract get screenType(): string;
}

export class Composer {
  /** Type text directly into the box. The human equivalent: typing. */
  async type(text: string): Promise<void> {}
  async readDraft(): Promise<string> { return ''; }
  /** Click Send, confirm the message left the box, then reconstitute the page. */
  async send(): Promise<ConversationPage> { return null as any; }
}

export class ConversationPage extends Page {
  readonly composer: Composer;
  /** The conversation's messages, read from the tree. */
  async messages(): Promise<ChatMessage[]> { return []; }
  async rename(name: string): Promise<void> {}
  async scrollToBottom(): Promise<void> {}
  private async secret(): Promise<void> {}
  get screenType(): string { return 'conversation'; }
}
`;

const surfaces = () => {
  const map = new Map(parseSource(SOURCE).map(c => [c.name, c]));
  return map;
};

class FakeComposer {
  async type(_text: string): Promise<void> {}
  async readDraft(): Promise<string> { return ''; }
  async send(): Promise<unknown> { return null; }
}
class ConversationPage {
  readonly composer = new FakeComposer();
}
// The live instance's class name is what names the screen, so the fake must be
// named for the screen it stands in for.
Object.defineProperty(FakeComposer, 'name', { value: 'Composer' });

const model = () => describeScreen(new ConversationPage(), surfaces(), 'claude.ai/chat/abc');

// --- Reading the code's own surface ---

test('a method signature is read from source, with parameter names and types', () => {
  const conv = surfaces().get('ConversationPage')!;
  const rename = conv.methods.find(m => m.name === 'rename')!;
  assert.deepEqual(rename.params, [{ name: 'name', type: 'string', optional: false }]);
  assert.equal(rename.returns, 'Promise<void>');
  assert.ok(rename.isAsync);
});

test('private members are not part of the surface — they are not things you can do', () => {
  const conv = surfaces().get('ConversationPage')!;
  assert.equal(conv.methods.find(m => m.name === 'secret'), undefined);
});

test('a doc comment directly above a method becomes its description', () => {
  const conv = surfaces().get('ConversationPage')!;
  const messages = conv.methods.find(m => m.name === 'messages')!;
  assert.match(messages.doc, /read from the tree/);
});

test('inherited members are included, because they are on that screen too', () => {
  const flat = flatten('ConversationPage', surfaces());
  assert.ok(flat.methods.some(m => m.name === 'id'), 'Page.id() is available on every page');
  assert.ok(flat.methods.some(m => m.name === 'messages'), 'and the page keeps its own');
});

test('a Promise return type is unwrapped, and a Page return names a door', () => {
  assert.equal(unwrapPromise('Promise<ConversationPage>'), 'ConversationPage');
  assert.equal(unwrapPromise('string'), 'string');
  assert.ok(namesAPage('Promise<ConversationPage>'));
  assert.ok(namesAPage('Promise<ProjectPage | null>'), 'a nullable page is still a door');
  assert.ok(!namesAPage('Promise<string>'));
});

// --- The screen model ---

test('the screen is named by the live object, not by anything declared', () => {
  assert.equal(model().screen, 'ConversationPage');
  assert.equal(model().id, 'claude.ai/chat/abc');
});

test('a method returning a Page is an EXIT and says where it leads', () => {
  const send = findCommand(model(), 'composer.send')!;
  assert.equal(send.kind, 'exit');
  assert.equal(send.leadsTo, 'ConversationPage');
});

test('a parameterless method returning data is a LOOK', () => {
  assert.equal(findCommand(model(), 'messages')?.kind, 'look');
  assert.equal(findCommand(model(), 'composer.readDraft')?.kind, 'look');
});

test('a method that changes something is a DO, and one taking a string is typing', () => {
  const rename = findCommand(model(), 'rename')!;
  assert.equal(rename.kind, 'do');
  assert.ok(rename.types, 'P2: only typing takes a parameter, so a parametered do is typing');
  assert.equal(findCommand(model(), 'scrollToBottom')?.types, false);
});

test('components are read from the LIVE instance, so an absent one is not offered', () => {
  assert.deepEqual(model().components, ['composer']);

  class BarePage {}
  const bare = describeScreen(new BarePage(), surfaces());
  assert.deepEqual(bare.components, [], 'a page with no composer offers no composer commands');
});

test('a component contributes its methods under its own name', () => {
  assert.ok(findCommand(model(), 'composer.type'), 'reachable by full path');
  assert.ok(findCommand(model(), 'type'), 'and by unique suffix, because nothing else offers it');
});

test('an ambiguous name is never guessed', () => {
  const m = model();
  // `id` exists on the page; nothing else offers it, so it resolves.
  assert.ok(findCommand(m, 'id'));
  // A name on neither resolves to nothing rather than to something nearby.
  assert.equal(findCommand(m, 'nonexistent'), null);
  assert.deepEqual(candidates(m, 'nonexistent'), []);
});

// --- No drift: the property the whole design rests on ---

test('adding a method to a page makes it appear, with no second edit anywhere', () => {
  const before = model();
  assert.equal(findCommand(before, 'pin'), null, 'not there yet');

  const grown = SOURCE.replace(
    '  async scrollToBottom(): Promise<void> {}',
    '  async scrollToBottom(): Promise<void> {}\n  /** Pin this conversation. */\n  async pin(): Promise<void> {}',
  );
  const after = describeScreen(
    new ConversationPage(),
    new Map(parseSource(grown).map(c => [c.name, c])),
  );

  const pin = findCommand(after, 'pin');
  assert.ok(pin, 'the new method is offered without touching the CLI');
  assert.equal(pin.kind, 'do');
  assert.match(pin.doc, /Pin this conversation/, 'and it explains itself in the author\'s words');
});

// --- What the operator sees ---

test('the room names where you are and lists every door, look and action', () => {
  const text = renderScreen(model(), { title: 'Sheaf cohomology', messages: '4' });
  assert.match(text, /Conversation/, 'the place is named without the Page suffix');
  assert.match(text, /Sheaf cohomology/, 'live observations are shown');
  assert.match(text, /Exits/);
  assert.match(text, /composer\.send/);
  assert.match(text, /→ Conversation/, 'a door says where it goes');
  assert.match(text, /Look/);
  assert.match(text, /Do/);
  assert.match(text, /tree/, 'the tree is always offered — it is how you debug the model');
});

test('a parameter is shown in the signature, so you know what to supply', () => {
  const text = renderScreen(model());
  assert.match(text, /rename <name>/);
  assert.match(text, /composer\.type <text>/);
});

test('observations that are empty are not rendered as blanks', () => {
  const text = renderScreen(model(), { title: '', messages: '0' });
  assert.ok(!/title/.test(text), 'an unread observation is omitted, not shown empty');
  assert.match(text, /messages/);
});

test('an unknown command reports what IS here — "not here" is information', () => {
  const text = renderUnknown('delete', model());
  assert.match(text, /no "delete" on the Conversation screen/);
  assert.match(text, /messages/, 'it lists the real surface');
  assert.match(text, /tree/, 'and points at the tree when the model and app disagree');
});

test('placeName turns a class into a place', () => {
  assert.equal(placeName('ConversationPage'), 'Conversation');
  assert.equal(placeName('HomePage'), 'Home');
  assert.equal(placeName('ProjectsPage'), 'Projects');
});
