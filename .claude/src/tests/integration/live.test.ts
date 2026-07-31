///: Live tests — the real Claude Desktop app, driven hard.
///:
///: The hermetic suite proves we handle the tree we IMAGINED. Only the app says
///: whether that is the tree it produces. So this walks every screen, reads every
///: reading, performs every reversible action, and checks that the driver's
///: discipline holds — against the running app, in one pass.
///:
///: **They run on Doug's computer**, so the rules are strict:
///:   - nothing is created, renamed, deleted, or sent. Ever.
///:   - every mutation is REVERSIBLE and is reversed in the same test.
///:   - no loop of ours, no retry of ours, anywhere.
///:   - the window is shown once and minimized in an `after` that always runs.
///:   - if the app cannot be read we stop and say so — we never race the user for
///:     their own screen.
///:
///: Where a test needs data that may not exist (a project, a conversation), it says
///: so and moves on rather than failing. A suite that fails because the user has no
///: projects is testing the user.
///:
///: One suite, one run. `npm test` runs these too — they skip themselves unless
///: armed, so they can never quietly rot in a command nobody types.
///: Run: npm run test:live
///:
///: [Coding Philosophy](../../../library/reference-desk/05-coding-philosophy.md) — always minimize; never force focus.
///: [The Runtime](../../../library/reference-desk/14-the-runtime.md) — the room and its readout.

import { test, before, after } from 'node:test';
import assert from 'node:assert/strict';
import { Claude } from '../../claude.ts';
import { TreeSnapshot } from '../../tree.ts';
import { SURFACE_BY_NAME } from '../../cli/surface.generated.ts';
import { describeScreen } from '../../cli/describe.ts';
import { renderScreen } from '../../cli/render.ts';
import { Runtime, isSensorName } from '../../cli/runtime.ts';
import type { ClassSurface } from '../../cli/surface.ts';

const LIVE = process.env.CLAUDE_DESKTOP_LIVE === '1';

if (!LIVE) {
  console.log(
    '\n  Live tests SKIPPED — they drive the real app and take the screen.\n' +
    '  To arm them:  npm run test:live   (same suite, same run, app tests on)\n',
  );
}

let app: Claude | undefined;
let runtime: Runtime | undefined;
const SURFACES: ReadonlyMap<string, ClassSurface> = SURFACE_BY_NAME;

/** Say what happened, indented under the test name. The point of a live suite is
 *  that a person can watch it work and see the app answering. */
const say = (s: string) => console.log(`      ${s}`);

/** Skipped-for-data, said out loud. Not a failure: a suite that fails because the
 *  user has no projects is testing the user. */
const noData = (what: string) => say(`— no ${what} on this account, nothing to drive`);

before(async () => {
  if (!LIVE) return;
  app = new Claude();
  if (!await app.attach()) await app.launch();

  // The window goes up ONCE for the whole run and comes down ONCE at the end.
  // Without this the app blinks: tier 5 deliberately provokes failures, each
  // failure minimizes, and the next test re-maximizes. Showing and hiding the
  // window belongs to the session, not to every step inside it.
  app.window.holdingScreen = true;

  // Start from a KNOWN place. Every test below assumes Home, and a suite that
  // begins wherever the user happened to leave the app is a suite whose failures
  // are about the starting state rather than the code.
  await app.navigator.resetToHome();

  runtime = new Runtime(app, SURFACES);
  await runtime.bind();
});

// Give the computer back — minimize the WINDOW and close the SHELL.
//
// NOT app.exit(): exit() closes Claude Desktop itself, which takes the user's live
// conversation with it. A driver attached to a RUNNING app closes the shell, not the
// app. Minimize BEFORE closing the shell — minimizing speaks through it.
// This hook runs whether the tests passed, failed, or threw.
after(async () => {
  if (!app) return;
  app.window.holdingScreen = false;                 // the session is over
  try { await app.navigator.resetToHome(); } catch { /* best effort */ }
  try { await app.window.minimize(); } catch { /* nothing to give back */ }
  try { app.auto.shell.close(); } catch { /* already closed */ }
});

// ===========================================================================
// 1. SEEING — everything below is meaningless if the app is not readable.
// ===========================================================================

test('1.1 the app is readable: tree() returns a populated snapshot', { skip: !LIVE }, async () => {
  const tree = await app!.tree();
  assert.ok(tree instanceof TreeSnapshot);
  assert.ok(!tree.isEmpty,
    'EMPTY tree — the app is not readable. Check --force-renderer-accessibility ' +
    'and that the window is not minimized.');
  assert.ok(tree.size > 10, `expected a real screen, got ${tree.size} named elements`);
  say(`tree: ${tree.size} elements — ${tree.types().slice(0, 5).map(t => `${t.type} ${t.count}`).join(', ')}`);
});

test('1.2 the tree still contains the elements the driver navigates by', { skip: !LIVE }, async () => {
  const tree = await app!.tree();
  // The app RENAMES things. It shipped "New chat" for months; the 2026-07 build
  // calls the same affordance "New". Assert that ONE of the names the driver knows
  // is present and report which — a test pinned to a single string fails the day
  // the app updates and tells you nothing about why.
  const present = ['New chat', 'New'].filter(n => tree.has({ name: n }));
  assert.ok(present.length > 0, `the driver has no way home.\n${tree}`);
  assert.ok(tree.has({ contains: 'Projects' }), `no way to Projects.\n${tree}`);
  say(`home affordance: "${present[0]}"  |  projects: present`);
});

test('1.3 the tree is queryable — type, exact name, and substring', { skip: !LIVE }, async () => {
  const tree = await app!.tree();
  const buttons = tree.filter({ type: 'Button' });
  assert.ok(buttons.length > 0, `a real screen has buttons.\n${tree}`);
  assert.ok(tree.where({ type: 'Button' }).size === buttons.length);
  const contains = tree.filter({ contains: 'proj' });
  assert.ok(contains.length > 0, 'case-insensitive substring finds Projects');
  say(`${buttons.length} buttons, ${tree.filter({ type: 'Edit' }).length} edits, ` +
      `${contains.length} matching "proj"`);
});

test('1.4 the screen model names the screen the app is really on', { skip: !LIVE }, async () => {
  const detected = await app!.navigator.detectScreen();
  const model = runtime!.model();
  const map: Record<string, string> = {
    home: 'HomePage', conversation: 'ConversationPage',
    projects: 'ProjectsPage', project: 'ProjectPage' };
  if (map[detected]) assert.equal(model.screen, map[detected], `detectScreen() says "${detected}"`);
  say(`on: ${model.screen} (detectScreen: ${detected})`);
});

test('1.5 a claimed component is really on the screen', { skip: !LIVE }, async () => {
  const model = runtime!.model();
  const tree = await app!.tree();
  if (model.components.includes('composer')) {
    assert.ok(tree.filter({ type: 'Edit' }).length > 0,
      `the model claims a composer but the tree has no Edit element.\n${tree}`);
  }
  say(`components: ${model.components.join(', ') || '(none)'}`);
});

// ===========================================================================
// 2. THE ROOM — walking in should tell you where you are and what to do.
// ===========================================================================

test('2.1 the readout reads like walking into a room', { skip: !LIVE }, async () => {
  const model = runtime!.model();
  const room = renderScreen(model);
  assert.match(room, new RegExp(`── ${model.screen.replace(/Page$/, '')} ──`));
  assert.ok(model.exits.length + model.looks.length + model.actions.length > 0,
    'a room with nothing to do means the surface read found nothing');
  assert.match(room, /Always available:.*tree/);
  assert.ok(room.split('\n').length > 6, 'the readout is substantial, not a one-liner');
  say(`room: ${model.exits.length} exits, ${model.looks.length} looks, ` +
      `${model.actions.length} actions, ${model.components.length} components`);
});

test('2.2 every command the room advertises actually resolves', { skip: !LIVE }, async () => {
  const model = runtime!.model();
  const named = [...model.exits, ...model.looks, ...model.actions].map(c => c.path);
  assert.ok(named.length > 0);
  for (const path of named) {
    assert.ok('command' in runtime!.resolve(path), `"${path}" is listed but does not resolve`);
  }
  say(`${named.length} commands, all resolvable: ${named.slice(0, 6).join(', ')}…`);
});

test('2.3 every command the room advertises is callable on the LIVE object', { skip: !LIVE }, async () => {
  // The drift detector: the model is built from source, the object is the running
  // app. Anything the model offers must really be there, or the room is lying.
  const model = runtime!.model();
  const page = await app!.currentPage() as unknown as Record<string, unknown>;
  const missing: string[] = [];
  for (const c of [...model.exits, ...model.looks, ...model.actions]) {
    const dot = c.path.indexOf('.');
    const target = dot < 0 ? page : page[c.path.slice(0, dot)] as Record<string, unknown>;
    const leaf = dot < 0 ? c.path : c.path.slice(dot + 1);
    if (!target || typeof (target as Record<string, unknown>)[leaf] !== 'function') missing.push(c.path);
  }
  assert.deepEqual(missing, [], `the room offers commands the live object does not have: ${missing.join(', ')}`);
  say('every advertised command exists on the running object');
});

// ===========================================================================
// 3. WALKING — every screen the app has, reached the way the CLI reaches it.
// ===========================================================================

test('3.1 Home → Sidebar: a place that is not a page', { skip: !LIVE }, async () => {
  const outcome = await runtime!.run('sidebar');
  assert.equal(outcome.kind, 'moved');
  assert.equal(runtime!.model().screen, 'Sidebar');
  const room = renderScreen(runtime!.model());
  assert.match(room, /── Sidebar ──/);
  assert.ok(runtime!.model().exits.some(c => c.path === 'projects'),
    'the sidebar offers its own doors');
  say(`in the Sidebar: exits ${runtime!.model().exits.map(c => c.path).join(', ')}`);
});

test('3.2 the sidebar reads: is it visible, what conversations are in it', { skip: !LIVE }, async () => {
  const visible = await runtime!.run('isVisible');
  assert.equal(visible.kind, 'read');
  assert.equal(visible.kind === 'read' && visible.value, true, 'the sidebar is open');

  const convos = await runtime!.run('conversations');
  assert.equal(convos.kind, 'read');
  const list = convos.kind === 'read' ? convos.value as { name: string }[] : [];
  assert.ok(Array.isArray(list));
  say(`sidebar: visible, ${list.length} conversations — ${list.slice(0, 3).map(c => c.name).join(' | ')}`);
});

test('3.3 Sidebar → Projects, and the Projects room offers its own reading', { skip: !LIVE }, async () => {
  const outcome = await runtime!.run('projects');
  assert.equal(outcome.kind, 'moved');
  const model = runtime!.model();
  assert.equal(model.screen, 'ProjectsPage');
  assert.match(renderScreen(model), /── Projects ──/);
  assert.ok(model.looks.some(c => c.path === 'projects'),
    `the Projects room reads itself. Got: ${model.looks.map(c => c.path).join(', ')}`);
  say(`walked Sidebar → ${model.screen}`);
});

test('3.4 the app really moved — URL and tree both agree', { skip: !LIVE }, async () => {
  const url = await app!.currentUrl();
  assert.match(url, /projects/, `URL should show the projects screen, got "${url}"`);
  const tree = await app!.tree();
  assert.ok(!tree.isEmpty, 'the new screen is readable');
  say(`url: ${url}  |  tree: ${tree.size} elements`);
});

test('3.5 reading the projects list returns real data', { skip: !LIVE }, async () => {
  const out = await runtime!.run('projects');
  assert.equal(out.kind, 'read');
  const projects = out.kind === 'read' ? out.value as { name: string }[] : [];
  assert.ok(Array.isArray(projects));
  if (projects.length === 0) return noData('projects');
  assert.ok(projects.every(p => typeof p.name === 'string' && p.name.length > 0),
    'every project has a readable name');
  say(`${projects.length} projects: ${projects.slice(0, 5).map(p => p.name).join(', ')}…`);
});

test('3.6 opening a project lands on the Project room', { skip: !LIVE }, async () => {
  const page = await app!.currentPage();
  const projects = await (page as unknown as { projects(): Promise<{ name: string; open(): Promise<object> }[]> }).projects();
  if (projects.length === 0) return noData('projects');

  const target = projects[0];
  const projectPage = await target.open();          // one action, no retry, no loop
  const model = describeScreen(projectPage, SURFACES, await app!.currentUrl());
  assert.equal(model.screen, 'ProjectPage');
  assert.match(await app!.currentUrl(), /\/project\//);
  say(`opened "${target.name}" → ${model.screen}`);
});

test('3.7 the Project room reads instructions, files and conversations', { skip: !LIVE }, async () => {
  if (!/\/project\//.test(await app!.currentUrl())) return noData('open project');
  const page = await app!.currentPage() as unknown as {
    instructions(): Promise<string>;
    files(): Promise<unknown[]>;
    conversations(): Promise<unknown[]>;
  };
  const [instructions, files, conversations] = await Promise.all([
    page.instructions(), page.files(), page.conversations(),
  ]);
  assert.equal(typeof instructions, 'string', 'instructions read as text');
  assert.ok(Array.isArray(files) && Array.isArray(conversations));
  say(`instructions ${instructions.length} chars, ${files.length} files, ${conversations.length} conversations`);
});

test('3.8 back to Home through the sidebar — the round trip closes', { skip: !LIVE }, async () => {
  await runtime!.bind();
  await runtime!.run('sidebar');
  const outcome = await runtime!.run('newChat');
  assert.equal(outcome.kind, 'moved');
  await runtime!.bind();
  assert.equal(runtime!.model().screen, 'HomePage');
  assert.match(renderScreen(runtime!.model()), /── Home ──/);
  say('walked Project → Sidebar → Home');
});

// ===========================================================================
// 4. DOING — every reversible action, reversed in the same test.
// ===========================================================================

test('4.1 typing into the composer changes the draft, and clearing restores it', { skip: !LIVE }, async () => {
  await app!.navigator.resetToHome();     // a tier must stand alone — `test:live 4`
  await runtime!.bind();
  const page = await app!.currentPage() as unknown as {
    composer: { type(t: string): Promise<void>; readDraft(): Promise<string>; clear(): Promise<void> };
  };
  const probe = `driver test ${process.pid}`;
  const before = await page.composer.readDraft();

  await page.composer.type(probe);
  const during = await page.composer.readDraft();
  assert.ok(during.includes(probe), `expected the draft to hold the typed text, got "${during}"`);

  await page.composer.clear();
  const after = await page.composer.readDraft();
  assert.equal(after, '', 'the composer is left empty — this suite changes nothing');
  say(`typed ${probe.length} chars, read them back, cleared (was "${before}")`);
});

test('4.2 the CLI reports the LOCAL change, not the whole room', { skip: !LIVE }, async () => {
  await runtime!.bind();
  const out = await runtime!.run('composer.type', ['local change probe']);
  assert.equal(out.kind, 'acted');
  assert.equal(out.kind === 'acted' && out.scope, 'composer', 'scoped to the composer');
  assert.ok(out.kind === 'acted' && out.surface.every(c => c.path.startsWith('composer.')),
    'only the composer surface comes back — a keystroke does not reprint the building');
  say(`scope: composer, surface: ${out.kind === 'acted' ? out.surface.map(c => c.path).join(' ') : ''}`);

  await runtime!.run('composer.clear');
  const draft = await runtime!.run('composer.readDraft');
  assert.equal(draft.kind === 'read' ? draft.value : 'x', '', 'restored');
});

test('4.3 the sidebar search box takes text, and gives it back', { skip: !LIVE }, async () => {
  await runtime!.bind();
  await runtime!.run('sidebar');
  const out = await runtime!.run('search', ['zzz-driver-probe']);
  assert.equal(out.kind, 'acted');
  say('searched the sidebar');
  // Search is a WINDOW over the app. Leaving it open blocks every test after this
  // one — which is exactly what happened: 4.4 failed reading an empty sidebar
  // because the overlay was still up.
  await runtime!.run('closeSearch');
  await app!.navigator.resetToHome();
  await runtime!.bind();
});

test('4.4 a conversation menu opens and CLOSES — the way out is the app\'s own', { skip: !LIVE }, async () => {
  const sidebar = app!.sidebar;
  const conversations = await sidebar.conversations();
  if (conversations.length === 0) return noData('conversations');

  const item = conversations[0];
  let menu: { items: string[]; close(): Promise<void> } | undefined;
  try {
    menu = await item.menu();
    assert.ok(Array.isArray(menu.items) && menu.items.length > 0,
      'an opened menu reports what is in it');
    say(`menu on "${item.name}": ${menu.items.join(', ')}`);
  } finally {
    // Always close, whatever happened. An open menu blocks all navigation.
    if (menu) await menu.close();
  }
  const tree = await app!.tree();
  assert.ok(!tree.isEmpty, 'the app is still readable after the menu closed');
});

test('4.5 the model picker reads the current model and thinking mode', { skip: !LIVE }, async () => {
  await app!.navigator.resetToHome();
  await runtime!.bind();
  const model = await runtime!.run('modelPicker.currentModel');
  const thinking = await runtime!.run('modelPicker.currentThinking');
  assert.equal(model.kind, 'read');
  assert.equal(thinking.kind, 'read');
  say(`model: ${JSON.stringify(model.kind === 'read' ? model.value : null)}  ` +
      `thinking: ${JSON.stringify(thinking.kind === 'read' ? thinking.value : null)}`);
});

// ===========================================================================
// 5. DISCIPLINE — the gateway's promises, against the real app.
// ===========================================================================

test('5.1 a missing target refuses immediately, carries the tree, and never fires', { skip: !LIVE }, async () => {
  let fired = false;
  const started = Date.now();
  let raised: unknown;
  try {
    await app!.gateway.act(
      async () => { fired = true; },
      async () => true,
      {
        description: 'Click a button that is not on screen',
        target: { type: 'Button', name: `NoSuchButton-${process.pid}` } },
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
  say(`refused in ${elapsed}ms, tree attached (${err.tree!.size} elements)`);
});

test('5.2 a present target passes the precheck and the action fires exactly once', { skip: !LIVE }, async () => {
  const tree = await app!.tree();
  const anchor = ['New chat', 'New'].find(n => tree.has({ name: n }));
  assert.ok(anchor, 'no home affordance to anchor the precheck on');
  let fired = 0;
  await app!.gateway.act(async () => { fired++; }, async () => true,
    { description: 'A no-op against an element that IS on screen', target: { name: anchor! } });
  assert.equal(fired, 1, 'fired exactly once — never twice, never zero');
  say(`precheck passed on "${anchor}", fired once`);
});

test('5.3 a handed-over tree is used, and is still not a bypass', { skip: !LIVE }, async () => {
  const seen = await app!.tree();
  const anchor = ['New chat', 'New'].find(n => seen.has({ name: n }))!;

  let fired = 0;
  const t0 = Date.now();
  await app!.gateway.act(async () => { fired++; }, async () => true,
    { description: 'handoff', target: { name: anchor }, snapshot: seen });
  const withHandoff = Date.now() - t0;
  assert.equal(fired, 1);

  // Absent from the handed-over tree → still refused, still never fires.
  let fired2 = false;
  await assert.rejects(
    () => app!.gateway.act(async () => { fired2 = true; }, async () => true,
      { description: 'handoff', target: { name: `nope-${process.pid}` }, snapshot: seen }),
    (e: Error) => e.name === 'PreconditionError');
  assert.equal(fired2, false);
  say(`handoff act: ${withHandoff}ms, and a bad target through it is still refused`);
});

test('5.4 the tree history accumulates and is bounded', { skip: !LIVE }, async () => {
  const before = app!.diagnostics.trees.length;
  await app!.tree();
  await app!.tree();
  assert.ok(app!.diagnostics.trees.length > before || app!.diagnostics.trees.length === 10);
  assert.ok(app!.diagnostics.trees.length <= 10, 'a history, not a leak');
  assert.match(app!.diagnostics.treeHistory(), /\[0\]/);
  say(`${app!.diagnostics.trees.length} trees remembered this run`);
});

test('5.5 the driver never calls an action it was not asked to', { skip: !LIVE }, async () => {
  // Against the REAL surface: whatever the runtime samples unasked must be a sensor.
  await runtime!.bind();
  const model = runtime!.model();
  const sampled = [
    ...await runtime!.readSensors('(screen)'),
    ...await runtime!.readSensors('composer'),
  ].map(([path]) => path);
  const notSensors = sampled.filter(p => !isSensorName(p.split('.').pop()!));
  assert.deepEqual(notSensors, [],
    `the CLI called these unasked and they are not sensors: ${notSensors.join(', ')}`);
  say(`sampled unasked: ${sampled.join(', ') || '(nothing on this screen)'} — all sensors`);
  assert.ok(model.screen.length > 0);
});

// ===========================================================================
// 6. REFUSAL — bad input is answered honestly, not crashed on.
// ===========================================================================

test('6.1 an unknown command reports what IS here', { skip: !LIVE }, async () => {
  const out = await runtime!.run('definitelyNotACommand');
  assert.equal(out.kind, 'refused');
  assert.match(out.kind === 'refused' ? out.message : '', /no "definitelyNotACommand"/);
  assert.match(out.kind === 'refused' ? out.message : '', /What is here/);
  say('unknown command answered with the real surface');
});

test('6.2 wrong argument count is refused with the real signature', { skip: !LIVE }, async () => {
  const out = await runtime!.run('composer.type', []);
  assert.equal(out.kind, 'refused');
  assert.match(out.kind === 'refused' ? out.message : '', /takes/);
  say(`refused: ${out.kind === 'refused' ? out.message : ''}`);
});

test('6.3 a refusal never touched the app', { skip: !LIVE }, async () => {
  const before = await app!.currentUrl();
  await runtime!.run('nope');
  await runtime!.run('composer.type', []);
  assert.equal(await app!.currentUrl(), before, 'a refused command moves nothing');
  say(`still on ${before}`);
});

// ===========================================================================
// 7. RECOVERY — the universal safety net, from wherever we ended up.
// ===========================================================================

test('7.1 resetToHome recovers from anywhere', { skip: !LIVE }, async () => {
  await runtime!.bind();
  await runtime!.run('sidebar');
  await runtime!.run('projects');                  // go somewhere else first
  await app!.navigator.resetToHome();
  assert.equal(await app!.navigator.detectScreen(), 'home');
  await runtime!.bind();
  assert.equal(runtime!.model().screen, 'HomePage');
  say('recovered Projects → Home');
});

test('7.2 the tree is available from every screen we visited', { skip: !LIVE }, async () => {
  const sizes = app!.diagnostics.trees.map(t => t.size);
  assert.ok(sizes.length > 0);
  assert.ok(sizes.every(s => s > 0), 'no screen in this run was unreadable');
  say(`trees this run: ${sizes.join(', ')} elements`);
});
