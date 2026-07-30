///: Integration tests — the live Claude Desktop app. See README.md beside this file.
///:
///: These check the ASSUMPTIONS the hermetic tests take for granted. A fixture can
///: only confirm that we handle the tree we imagined; only the app can tell us
///: whether that is the tree it produces.
///:
///: They will not run without CLAUDE_DESKTOP_LIVE=1. They take Doug's screen, so
///: they run when he says so.
///:
///: Run: CLAUDE_DESKTOP_LIVE=1 npm run test:integration
///:
///: [Coding Philosophy](../../../library/reference-desk/05-coding-philosophy.md) — always minimize; never force focus.
///: [The CLI Test Suite](../../../library/projected-identity/72-sprint-100--the-cli-test-suite.md) — layer 2.

import { test, before, after } from 'node:test';
import assert from 'node:assert/strict';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { Claude } from '../../claude.ts';
import { TreeSnapshot } from '../../tree.ts';
import { readSurfaces } from '../../../cli/surface.ts';
import { describeScreen } from '../../../cli/describe.ts';

const LIVE = process.env.CLAUDE_DESKTOP_LIVE === '1';
const SRC = resolve(dirname(fileURLToPath(import.meta.url)), '..', '..');

if (!LIVE) {
  test('integration tests are skipped — they take the screen', { skip: true }, () => {});
  console.log(
    '\n  Integration tests SKIPPED.\n' +
    '  These drive the real Claude Desktop and take over the screen, so they are\n' +
    '  never automatic. To run them:  CLAUDE_DESKTOP_LIVE=1 npm run test:integration\n',
  );
}

let app: Claude | undefined;

before(async () => {
  if (!LIVE) return;
  app = new Claude();
  await app.launch();
});

// Always give the computer back — minimize BEFORE closing the shell, because
// minimizing needs the shell. A test that leaks a shell has failed even if it passed.
after(async () => {
  if (!app) return;
  try { app.window.minimize(); } catch { /* nothing to give back */ }
  try { await app.exit(); } catch { /* already gone */ }
});

test('the app is readable: tree() returns a populated snapshot', { skip: !LIVE }, async () => {
  const tree = await app!.tree();
  assert.ok(tree instanceof TreeSnapshot);
  assert.ok(!tree.isEmpty,
    'an empty tree means the app is not readable — check --force-renderer-accessibility, ' +
    'and that the window is not minimized');
  assert.ok(tree.size > 10, `expected a real screen, got ${tree.size} named elements`);
});

test('the tree contains the sidebar the driver depends on', { skip: !LIVE }, async () => {
  const tree = await app!.tree();
  assert.ok(tree.has({ name: 'New chat' }),
    `"New chat" is how goHome() navigates; if it is gone the app changed.\n${tree}`);
});

test('the screen model agrees with the screen', { skip: !LIVE }, async () => {
  const page = await app!.currentPage();
  const model = describeScreen(page, readSurfaces(SRC), await app!.currentUrl());
  const tree = await app!.tree();

  assert.equal(model.screen, page.constructor.name);
  assert.ok(model.exits.length + model.looks.length + model.actions.length > 0,
    'a screen with no commands means the surface parser found nothing — the model is blind');

  // If the model says this screen has a composer, the tree must show a text box.
  if (model.components.includes('composer')) {
    assert.ok(tree.filter({ type: 'Edit' }).length > 0,
      `the model claims a composer but the tree has no Edit element.\n${tree}`);
  }
});

test('the precondition refuses fast, and carries the tree', { skip: !LIVE }, async () => {
  const before = Date.now();
  let raised: unknown;
  try {
    await app!.gateway.act(
      async () => { throw new Error('the action must NOT fire'); },
      async () => true,
      {
        description: 'Click a button that is not on screen',
        target: { type: 'Button', name: 'ThisButtonDoesNotExist-' + Math.random() },
        timeoutMs: 30_000,
      },
    );
  } catch (e) {
    raised = e;
  }
  const elapsed = Date.now() - before;

  assert.ok(raised, 'a missing target must refuse');
  const err = raised as { name: string; message: string; tree?: TreeSnapshot };
  assert.equal(err.name, 'PreconditionError');
  assert.match(err.message, /did not fire/);
  assert.ok(err.tree && !err.tree.isEmpty, 'the refusal carries the tree that disagreed');
  assert.ok(elapsed < 20_000,
    `the whole point is failing fast — took ${elapsed}ms, which is timeout territory`);
});
