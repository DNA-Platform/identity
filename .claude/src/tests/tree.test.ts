///: Tree tests — layer 1: hermetic, no Claude Desktop, milliseconds.
///: These assert what a caller is entitled to rely on, not how the code does it.
///: The load-bearing one is `empty is not the same as no match` — a precondition
///: that cannot tell "I could not see" from "it is not there" is a precondition
///: that lies, and it would reject real actions on a transient read failure.
///:
///: Run: npx tsx --test src/tests/
///:
///: [The CLI Test Suite](../../library/projected-identity/72-sprint-100--the-cli-test-suite.md) — the three layers.
///: [Tests are promises](../../library/reference-desk/10-architecture-patterns.md) — not mechanism checks.

import { test } from 'node:test';
import assert from 'node:assert/strict';
import { TreeSnapshot } from '../tree.ts';
import { DriverError, PreconditionError } from '../errors.ts';

/** A tree shaped like the real thing: what `allNames()` actually returns. */
const LINES = [
  'ControlType.Document | Claude',
  'ControlType.Button | New chat',
  'ControlType.Button | Projects',
  'ControlType.Edit | Write a message…',
  'ControlType.Button | Send',
  'ControlType.ListItem | Inexplicable PhenomenaUpdated yesterday',
  'ControlType.Button | More options for Inexplicable Phenomena',
];

const tree = () => TreeSnapshot.from(LINES, 1_000);

// --- Reading the tree ---

test('a captured line becomes a typed element with its prefix stripped', () => {
  const el = tree().find({ name: 'Send' });
  assert.equal(el?.type, 'Button', 'the ControlType. prefix does not belong in the model');
  assert.equal(el?.name, 'Send');
});

test('elements keep document order, because order is the only disambiguator', () => {
  const t = tree();
  assert.deepEqual(t.elements.map(e => e.index), [0, 1, 2, 3, 4, 5, 6]);
  assert.equal(t.elements[1].name, 'New chat');
});

test('unnamed and malformed lines are dropped — an element with no name is not addressable', () => {
  const t = TreeSnapshot.from(['ControlType.Button | Send', 'ControlType.Pane |', 'garbage', '']);
  assert.equal(t.size, 1);
});

test('a query accepts a control type with or without the ControlType. prefix', () => {
  assert.ok(tree().has({ type: 'Button', name: 'Send' }));
  assert.ok(tree().has({ type: 'ControlType.Button', name: 'Send' }));
});

// --- The distinction the precondition depends on ---

test('EMPTY means "could not see"; it is not the same as "not there"', () => {
  const blind = TreeSnapshot.empty();
  const seeing = tree();

  assert.ok(blind.isEmpty, 'an unreadable app yields an empty snapshot');
  assert.ok(!seeing.isEmpty, 'a readable app is never empty, even when nothing matches');

  // Both answer `has` with false — which is exactly why isEmpty must be consulted
  // first. A precondition that rejects on a blind read would fail actions whose
  // target was there all along.
  assert.equal(blind.has({ name: 'Send' }), false);
  assert.equal(seeing.has({ name: 'Stop response' }), false);
  assert.notEqual(blind.isEmpty, seeing.isEmpty, 'the two cases must stay distinguishable');
});

test('find returns undefined for something not on screen — an honest not-there', () => {
  assert.equal(tree().find({ name: 'Stop response' }), undefined);
});

test('find returns the first match in document order', () => {
  const t = TreeSnapshot.from([
    'ControlType.Button | Open',
    'ControlType.MenuItem | Open',
  ]);
  assert.equal(t.find({ name: 'Open' })?.type, 'Button');
});

// --- Querying ---

test('filter narrows by type, exact name, and case-insensitive substring', () => {
  const t = tree();
  assert.equal(t.filter({ type: 'Button' }).length, 4);
  assert.equal(t.filter({ name: 'Projects' }).length, 1);
  assert.equal(t.filter({ contains: 'inexplicable' }).length, 2, 'contains ignores case');
  assert.equal(t.filter({ type: 'Button', contains: 'inexplicable' }).length, 1,
    'supplied fields are ANDed');
});

test('where() narrows the snapshot but keeps original indices, so position survives', () => {
  const buttons = tree().where({ type: 'Button' });
  assert.equal(buttons.size, 4);
  assert.deepEqual(buttons.elements.map(e => e.index), [1, 2, 4, 6],
    'a filtered view still tells you where you were in the document');
  assert.equal(buttons.capturedAt, 1_000, 'a narrowed view is the same capture');
});

test('types() summarises what kind of screen you are looking at, most common first', () => {
  assert.deepEqual(tree().types(), [
    { type: 'Button', count: 4 },
    { type: 'Document', count: 1 },
    { type: 'Edit', count: 1 },
    { type: 'ListItem', count: 1 },
  ]);
});

// --- Travelling: printed for a person, serialized for a caller ---

test('toString names every element, so a person can read the screen', () => {
  const printed = tree().toString();
  for (const line of LINES) {
    const name = line.slice(line.indexOf('|') + 1).trim();
    assert.ok(printed.includes(name), `the printed tree must contain "${name}"`);
  }
  assert.ok(printed.includes('7 named elements'));
});

test('an empty tree prints why it is empty, not just nothing', () => {
  const printed = TreeSnapshot.empty().toString();
  assert.ok(printed.includes('EMPTY'));
  assert.ok(/not running|minimized|accessibility/.test(printed),
    'the reader is told what to check, not left with a blank');
});

test('toJSON is a plain serializable value — this is what travels on the wire', () => {
  const json = JSON.parse(JSON.stringify(tree().toJSON()));
  assert.equal(json.size, 7);
  assert.equal(json.capturedAt, 1_000);
  assert.equal(json.elements[4].name, 'Send');
  assert.equal(typeof json.elements[4].type, 'string');
});

// --- Errors carry the evidence ---

test('a DriverError carries the tree, and prints message-plus-tree for a person', () => {
  const err = new DriverError('Click Send').withTree(tree());
  assert.ok(err.detail.includes('Click Send'));
  assert.ok(err.detail.includes('New chat'), 'the tree travels with the message');
  assert.equal(err.toJSON().tree?.size, 7, 'and serializes for a caller');
});

test('a DriverError without a tree still prints, and serializes with tree undefined', () => {
  const err = new DriverError('Click Send');
  assert.equal(err.detail, 'Click Send');
  assert.equal(err.toJSON().tree, undefined);
});

test('a PreconditionError names what it looked for and says nothing happened', () => {
  const err = new PreconditionError('Click Send', { type: 'Button', name: 'Send' })
    .withTree(tree());
  assert.ok(err.message.includes('Send'), 'it names the element it expected');
  assert.ok(err.message.includes('Button'), 'and the control type');
  assert.ok(/did not fire/.test(err.message),
    'the caller must know the action did NOT happen — that is the whole value of a precheck');
  assert.ok(err instanceof DriverError, 'so any handler that carries a tree carries this one');
});
