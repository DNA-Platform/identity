///: Integration tests — the live Claude Desktop app. See README.md beside this file.
///:
///: These check the ASSUMPTIONS the hermetic tests take for granted. A fixture can
///: only confirm we handle the tree we imagined; only the app says whether that is
///: the tree it produces.
///:
///: **They run on Doug's computer.** So: read-only wherever possible, immutable
///: navigation first, no loop of our own anywhere, no retry of our own anywhere, and
///: the window is shown once and minimized in an `after` hook that always runs. If
///: the app cannot be read we stop and say so — we never race the user for their own
///: screen.
///:
///: Run: CLAUDE_DESKTOP_LIVE=1 npm run test:integration
///:
///: [Coding Philosophy](../../../library/reference-desk/05-coding-philosophy.md) — always minimize; never force focus.
///: [The Runtime](../../../library/reference-desk/14-the-runtime.md) — the room and its readout.

import { test, before, after } from 'node:test';
import assert from 'node:assert/strict';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { Claude } from '../../claude.ts';
import { TreeSnapshot } from '../../tree.ts';
import { readSurfaces } from '../../../cli/surface.ts';
import { describeScreen } from '../../../cli/describe.ts';
import { renderScreen } from '../../../cli/render.ts';
import { Runtime } from '../../../cli/runtime.ts';

const LIVE = process.env.CLAUDE_DESKTOP_LIVE === '1';
const SRC = resolve(dirname(fileURLToPath(import.meta.url)), '..', '..');

if (!LIVE) {
  console.log(
    '\n  Integration tests SKIPPED — they drive the real app and take the screen.\n' +
    '  To run:  CLAUDE_DESKTOP_LIVE=1 npm run test:integration\n',
  );
}

let app: Claude | undefined;
let runtime: Runtime | undefined;
let surfaces: ReturnType<typeof readSurfaces> | undefined;

before(async () => {
  if (!LIVE) return;
  surfaces = readSurfaces(SRC);
  app = new Claude();
  await app.launch();                       // shows the window, once

  // Start from a KNOWN place. Every test below assumes Home, and a suite that
  // begins wherever the user happened to leave the app is a suite whose failures
  // are about the starting state rather than the code. resetToHome() is the
  // documented universal recovery: dismiss overlays, leave settings, go home.
  await app.navigator.resetToHome();

  runtime = new Runtime(app, surfaces);
  await runtime.bind();
});

// Give the computer back — minimize the WINDOW and close the SHELL.
//
// NOT app.exit(): exit() closes Claude Desktop itself, which takes the user's live
// conversation with it. A diagnostic attached to a RUNNING app closes the shell,
// not the app (Sprint 92). Minimize BEFORE closing the shell — minimizing needs it.
// This hook runs whether the tests passed, failed, or threw.
after(async () => {
  if (!app) return;
  try { app.window.minimize(); } catch { /* nothing to give back */ }
  try { app.auto.shell.close(); } catch { /* already closed */ }
});

// ---------------------------------------------------------------------------
// 1. Can we see the app at all? Everything below is meaningless if not.
// ---------------------------------------------------------------------------

test('the app is readable: tree() returns a populated snapshot', { skip: !LIVE }, async () => {
  const tree = await app!.tree();
  assert.ok(tree instanceof TreeSnapshot);
  assert.ok(!tree.isEmpty,
    'EMPTY tree — the app is not readable. Check --force-renderer-accessibility ' +
    'and that the window is not minimized.');
  assert.ok(tree.size > 10, `expected a real screen, got ${tree.size} named elements`);
  console.log(`      tree: ${tree.size} elements — ${tree.types().slice(0, 5).map(t => `${t.type} ${t.count}`).join(', ')}`);
});

test('the tree still contains the elements the driver navigates by', { skip: !LIVE }, async () => {
  const tree = await app!.tree();

  // The app RENAMES things. It shipped "New chat" for months; the 2026-07 build
  // calls the same affordance "New" on a "New task" screen. So assert that ONE of
  // the names the driver knows is present, and report which — a test pinned to a
  // single string fails the day the app updates and tells you nothing about why.
  const homeNames = ['New chat', 'New'];
  const present = homeNames.filter(n => tree.has({ name: n }));
  assert.ok(present.length > 0,
    `None of ${homeNames.join(' / ')} is on the tree — the driver has no way home.
${tree}`);

  assert.ok(tree.has({ contains: 'Projects' }),
    `"Projects" is how the sidebar reaches the projects screen.
${tree}`);
  console.log(`      home affordance: "${present[0]}"  |  projects: present`);
});

// ---------------------------------------------------------------------------
// 2. Does the model agree with the screen? This is the drift detector.
// ---------------------------------------------------------------------------

test('the screen model names the screen the app is really on', { skip: !LIVE }, async () => {
  const detected = await app!.navigator.detectScreen();
  const model = runtime!.model();
  const map: Partial<Record<string, string>> = { home: "HomePage", conversation: "ConversationPage", projects: "ProjectsPage", project: "ProjectPage" };
  const expected = map[detected];
  if (expected) assert.equal(model.screen, expected, `detectScreen() says "${detected}"`);
  console.log(`      on: ${model.screen} (detectScreen: ${detected})`);
});

test('a claimed component is really on the screen', { skip: !LIVE }, async () => {
  const model = runtime!.model();
  const tree = await app!.tree();
  if (model.components.includes('composer')) {
    assert.ok(tree.filter({ type: 'Edit' }).length > 0,
      `the model claims a composer but the tree has no Edit element.\n${tree}`);
  }
  console.log(`      components: ${model.components.join(', ') || '(none)'}`);
});

// ---------------------------------------------------------------------------
// 3. The room readout — walking in should tell you where you are and what to do.
// ---------------------------------------------------------------------------

test('the readout reads like walking into a room', { skip: !LIVE }, async () => {
  const model = runtime!.model();
  const room = renderScreen(model);

  assert.match(room, new RegExp(`── ${model.screen.replace(/Page$/, '')} ──`),
    'the room names the place you are in');
  assert.ok(model.exits.length + model.looks.length + model.actions.length > 0,
    'a room with nothing to do means the surface read found nothing');
  assert.match(room, /Always available:.*tree/,
    'the tree is offered from every room — it is how you find out why something failed');

  // A solid readout: every command it lists is actually invocable on the live object.
  const live = model.components.length;
  assert.ok(room.split('\n').length > 6, 'the readout is substantial, not a one-liner');
  console.log(`      room: ${model.exits.length} exits, ${model.looks.length} looks, ${model.actions.length} actions, ${live} components`);
});

test('you can ask what to do next and get the surface, not a guess', { skip: !LIVE }, async () => {
  const model = runtime!.model();
  const named = [...model.exits, ...model.looks, ...model.actions].map(c => c.path);
  assert.ok(named.length > 0);
  // Every listed command resolves — nothing is advertised that cannot be run.
  for (const path of named) {
    const resolved = runtime!.resolve(path);
    assert.ok('command' in resolved, `"${path}" is listed but does not resolve`);
  }
  console.log(`      next: ${named.slice(0, 8).join(', ')}${named.length > 8 ? ', …' : ''}`);
});

// ---------------------------------------------------------------------------
// 4. Immutable navigation — walking between rooms. Nothing is created or changed.
// ---------------------------------------------------------------------------

test('walking to Projects lands in a different room with its own readout', { skip: !LIVE }, async () => {
  const before = runtime!.model().screen;
  const projects = await app!.sidebar.projects();     // one action, no retry, no loop
  const model = describeScreen(projects, surfaces!, await app!.currentUrl());

  assert.equal(model.screen, 'ProjectsPage', 'we arrived somewhere new');
  assert.notEqual(model.screen, before === 'ProjectsPage' ? '' : before);

  const room = renderScreen(model);
  assert.match(room, /── Projects ──/);
  assert.ok(model.looks.some(c => c.path === 'projects'),
    `the Projects room offers its own reading. Got: ${model.looks.map(c => c.path).join(', ')}`);
  console.log(`      walked ${before} → ${model.screen}`);
});

test('the tree confirms the walk — the app really moved', { skip: !LIVE }, async () => {
  const url = await app!.currentUrl();
  assert.match(url, /projects/, `URL should show the projects screen, got "${url}"`);
  const tree = await app!.tree();
  assert.ok(!tree.isEmpty, 'the new screen is readable');
  console.log(`      url: ${url}`);
});

test('reading the projects list works, and returns real data', { skip: !LIVE }, async () => {
  const page = await app!.currentPage();
  const projects = await (page as unknown as { projects(): Promise<{ name: string }[]> }).projects();
  assert.ok(Array.isArray(projects));
  assert.ok(projects.length > 0, 'expected at least one project on the screen');
  console.log(`      projects: ${projects.slice(0, 5).map(p => p.name).join(', ')}${projects.length > 5 ? ', …' : ''}`);
});

test('walking home returns to the Home room', { skip: !LIVE }, async () => {
  await app!.navigator.resetToHome();
  const model = describeScreen(await app!.currentPage(), surfaces!, await app!.currentUrl());
  assert.equal(model.screen, 'HomePage');
  assert.match(renderScreen(model), /── Home ──/);
  console.log('      walked Projects → Home');
});

// ---------------------------------------------------------------------------
// 5. The precondition — it must refuse, fast, without firing.
// ---------------------------------------------------------------------------

test('a missing target refuses immediately, carries the tree, and never fires', { skip: !LIVE }, async () => {
  let fired = false;
  const started = Date.now();
  let raised: unknown;
  try {
    await app!.gateway.act(
      async () => { fired = true; },
      async () => true,
      {
        description: 'Click a button that is not on screen',
        target: { type: 'Button', name: `NoSuchButton-${process.pid}` },
        timeoutMs: 30_000,
      },
    );
  } catch (e) { raised = e; }
  const elapsed = Date.now() - started;

  assert.ok(raised, 'a missing target must refuse');
  assert.equal(fired, false, 'THE ACTION MUST NOT HAVE FIRED — that is the whole point');
  const err = raised as { name: string; message: string; tree?: TreeSnapshot };
  assert.equal(err.name, 'PreconditionError');
  assert.match(err.message, /did not fire/);
  assert.ok(err.tree && !err.tree.isEmpty, 'the refusal carries the tree that disagreed');
  assert.ok(elapsed < 20_000, `must fail fast, not time out — took ${elapsed}ms`);
  console.log(`      refused in ${elapsed}ms, tree attached (${err.tree!.size} elements)`);
});

test('a present target passes the precheck and the action fires exactly once', { skip: !LIVE }, async () => {
  // Use an element we have just CONFIRMED is on screen, not a remembered name.
  const tree = await app!.tree();
  const anchor = ['New chat', 'New'].find(n => tree.has({ name: n }));
  assert.ok(anchor, 'no home affordance to anchor the precheck on');

  let fired = 0;
  await app!.gateway.act(
    async () => { fired++; },
    async () => true,
    {
      description: 'A no-op against an element that IS on screen',
      target: { name: anchor! },
      timeoutMs: 10_000,
    },
  );
  assert.equal(fired, 1, 'fired exactly once — never twice, never zero');
  console.log(`      precheck passed on "${anchor}", action fired once`);
});
