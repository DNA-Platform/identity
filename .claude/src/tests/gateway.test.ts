///: Gateway tests — layer 1: hermetic, no Claude Desktop, milliseconds.
///:
///: These exist because the driver was *glacially slow* and the cause turned out to
///: be discipline charged twice: `act` required the foreground, then the `waitFor`
///: inside it required the foreground again — and each check spawned two PowerShell
///: processes. A do-nothing action with an instantly-true verify cost 1.7 seconds.
///:
///: So the promises here are about COST, and they are counted, not timed. A timing
///: assertion on a machine that also runs Claude Desktop is a flaky test; a count of
///: how many times the gateway asked is a fact about the code. If someone puts the
///: second check back, `one action asks for the foreground exactly once` fails and
///: names the reason.
///:
///: Run: npx tsx --test src/tests/
///:
///: [The Gateway Pattern](../../library/reference-desk/02-02-the-architecture--gateway.md) — act once, look repeatedly.
///: [Tests are promises](../../library/reference-desk/10-architecture-patterns.md) — not mechanism checks.

import { test } from 'node:test';
import assert from 'node:assert/strict';
import { Gateway } from '../gateway.ts';
import { Diagnostics } from '../diagnostics.ts';
import { TreeSnapshot } from '../tree.ts';
import type { Uia } from '../uia.ts';
import type { Window } from '../window.ts';

const LINES = [
  'ControlType.Document | Claude',
  'ControlType.Button | New',
  'ControlType.Button | Projects',
];

/** A window that counts what it was asked, and never touches Windows. */
function countingWindow() {
  const calls = { requireForeground: 0 };
  const window = {
    requireForeground: async () => { calls.requireForeground++; },
  } as unknown as Window;
  return { window, calls };
}

/** A Uia that counts tree reads. The whole point of the snapshot handoff is that
 *  this number stops going up. */
function countingUia() {
  const calls = { snapshot: 0 };
  const uia = {
    snapshot: async () => { calls.snapshot++; return TreeSnapshot.from(LINES); },
    allNames: async () => LINES,
  } as unknown as Uia;
  return { uia, calls };
}

function build() {
  const { window, calls: windowCalls } = countingWindow();
  const { uia, calls: uiaCalls } = countingUia();
  const diagnostics = new Diagnostics(
    { screenshot: async () => '' } as unknown as Window, uia);
  return { gateway: new Gateway(diagnostics, window), diagnostics, windowCalls, uiaCalls };
}

// --- The cost of discipline ---

test('one action asks for the foreground exactly once', async () => {
  const { gateway, windowCalls } = build();
  await gateway.act(async () => {}, async () => true, { description: 'noop' });
  assert.equal(windowCalls.requireForeground, 1,
    'act() checks, then polls. If the poll checks again, every action pays the ' +
    'foreground cost twice — which is what made the driver glacial.');
});

test('one read asks for the foreground exactly once', async () => {
  const { gateway, windowCalls } = build();
  await gateway.read(async () => 1);
  assert.equal(windowCalls.requireForeground, 1);
});

test('a bare waitFor is its own operation, so it does pay for its own check', async () => {
  const { gateway, windowCalls } = build();
  await gateway.waitFor(async () => true);
  assert.equal(windowCalls.requireForeground, 1);
});

test('a verify that passes late still only checks the foreground once', async () => {
  const { gateway, windowCalls } = build();
  let n = 0;
  await gateway.act(async () => {}, async () => ++n >= 4, { description: 'slow verify' });
  assert.equal(n, 4, 'the LOOK was retried');
  assert.equal(windowCalls.requireForeground, 1, 'the CHECK was not');
});

// --- The precheck, and the handoff that keeps it from re-reading ---

test('a precheck with no snapshot reads the tree itself', async () => {
  const { gateway, uiaCalls } = build();
  await gateway.act(async () => {}, async () => true,
    { description: 'go', target: { name: 'New' } });
  assert.equal(uiaCalls.snapshot, 1);
});

test('a caller that already looked hands its tree over, and the gateway does not re-read', async () => {
  const { gateway, uiaCalls } = build();
  const seen = TreeSnapshot.from(LINES);
  await gateway.act(async () => {}, async () => true,
    { description: 'go', target: { name: 'New' }, snapshot: seen });
  assert.equal(uiaCalls.snapshot, 0,
    'the navigator reads the tree to CHOOSE the affordance; making the gateway ' +
    'walk the same screen again milliseconds later is pure duplication');
});

test('a handed-over tree still refuses a target that is not in it — the handoff is not a bypass', async () => {
  const { gateway } = build();
  let fired = false;
  const seen = TreeSnapshot.from(LINES);
  await assert.rejects(
    () => gateway.act(async () => { fired = true; }, async () => true,
      { description: 'go', target: { name: 'NotOnScreen' }, snapshot: seen }),
    (e: Error) => e.name === 'PreconditionError');
  assert.equal(fired, false, 'the action must not have fired');
});

test('no target means no precheck and no tree read at all', async () => {
  const { gateway, uiaCalls } = build();
  await gateway.act(async () => {}, async () => true, { description: 'noop' });
  assert.equal(uiaCalls.snapshot, 0);
});

// --- The remembered trees ---

test('every tree the system takes is remembered, oldest first', async () => {
  const { gateway, diagnostics } = build();
  await gateway.tree();
  await gateway.tree();
  assert.equal(diagnostics.trees.length, 2);
  assert.ok(diagnostics.trees[0].capturedAt <= diagnostics.trees[1].capturedAt);
});

test('the remembered trees are bounded — this is a history, not a leak', async () => {
  const { gateway, diagnostics } = build();
  for (let i = 0; i < 25; i++) await gateway.tree();
  assert.equal(diagnostics.trees.length, 10);
});

test('the history reports age and shape, so you can pick which one to print', async () => {
  const { gateway, diagnostics } = build();
  assert.match(diagnostics.treeHistory(), /No trees read yet/);
  await gateway.tree();
  const report = diagnostics.treeHistory();
  assert.match(report, /\[0\]/);
  assert.match(report, /3 elements/);
  assert.match(report, /Button 2/, 'it says what was on the screen, not just how much');
});

test('lastTree is the most recent read and does not go looking again', async () => {
  const { gateway, diagnostics, uiaCalls } = build();
  await gateway.tree();
  const before = uiaCalls.snapshot;
  assert.equal(diagnostics.lastTree?.size, 3);
  assert.equal(uiaCalls.snapshot, before, 'reading the history must never touch the app');
});
