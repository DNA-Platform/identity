// Integration test: verify the diagnostic system captures failures properly.
// Tests the feedback mechanisms by deliberately triggering both success and failure paths.

import { Claude } from '../claude.ts';

const app = new Claude();

async function testSuccessRecording() {
  console.log('Test 1: Success recording');
  await app.navigator.resetToHome();
  const last = app.diagnostics.lastAction;
  console.log(`  Last action: ${last?.description} [${last?.success ? 'OK' : 'FAIL'}] ${last?.durationMs}ms`);
  console.assert(last?.success === true, 'resetToHome should succeed');
  console.log('  PASS');
}

async function testFailureCapture() {
  console.log('Test 2: Failure capture with diagnostics');
  try {
    // This should fail — no such element exists
    await app.auto.gateway.act(
      async () => { await app.auto.uia.invokeByName('NonexistentButton12345'); },
      async () => false,
      { description: 'Click nonexistent button', timeoutMs: 2_000, retries: 1 },
    );
    console.log('  FAIL — should have thrown');
  } catch (e: any) {
    console.log(`  Caught: ${e.message.slice(0, 80)}`);
    const last = app.diagnostics.lastAction;
    console.log(`  Last action: ${last?.description} [${last?.success ? 'OK' : 'FAIL'}]`);
    console.assert(last?.success === false, 'Should record failure');
    console.assert(last?.error !== undefined, 'Should have error message');
    console.log(`  Recent failures: ${app.diagnostics.recentFailures.length}`);
    console.log(`  Debug files should be in .claude/agents/debug/`);
    console.log('  PASS');
  }
}

async function testNavigationFeedback() {
  console.log('Test 3: Navigation with screen detection');
  await app.navigator.resetToHome();
  const screen = await app.navigator.detectScreen();
  console.log(`  Screen: ${screen}`);
  console.log(`  Has open dialog: ${app.navigator.hasOpenDialog}`);
  console.log(`  Has open menu: ${app.navigator.hasOpenMenu}`);
  console.assert(screen === 'home', 'Should be on home');
  console.assert(!app.navigator.hasOpenDialog, 'No dialog should be open');
  console.assert(!app.navigator.hasOpenMenu, 'No menu should be open');
  console.log('  PASS');
}

async function testProjectNavigation() {
  console.log('Test 4: Project navigation + files pane detection');

  // Navigate to a project
  await app.navigator.goToProjects();
  await app.auto.uia.invokeLink('Chemistry');
  await app.auto.gateway.waitFor(async () => {
    const url = await app.auto.uia.readUrl();
    return url?.includes('/project/') ?? false;
  }, { timeoutMs: 10_000 });
  app.navigator.screen = 'project';

  // Detect files pane
  await app.project._filesPane.detect();
  console.log(`  Files pane showing: ${app.project._filesPane.showing}`);
  console.log(`  Menu expanded: ${app.project._filesPane.menuExpanded}`);

  // Detect text content dialog
  await app.project._filesPane.textContentDialog.detect();
  console.log(`  Text dialog open: ${app.project._filesPane.textContentDialog.isOpen}`);

  console.log('  PASS');
}

async function testDiagnosticsSummary() {
  console.log('\nTest 5: Diagnostics summary');
  console.log(`  ${app.diagnostics.summary()}`);
  console.log(`  History length: ${app.diagnostics.history.length}`);
  for (const r of app.diagnostics.history.slice(-5)) {
    console.log(`    ${r.success ? 'OK' : 'FAIL'} ${r.description} (${r.durationMs}ms)`);
  }
  console.log('  PASS');
}

async function main() {
  await app.launch();
  app.window.maximize();
  await app.auto.gateway.waitFor(async () => {
    const url = await app.auto.uia.readUrl();
    return url !== null;
  }, { timeoutMs: 5_000 });

  console.log('Running diagnostic integration tests...\n');

  await testSuccessRecording();
  await testFailureCapture();
  await testNavigationFeedback();
  await testProjectNavigation();
  await testDiagnosticsSummary();

  // Reset to home and minimize
  await app.navigator.resetToHome();
  app.window.minimize();

  console.log('\nAll tests passed.');
}

main().catch(e => {
  console.error('Test suite failed:', e.message);
  app.window.minimize();
  process.exit(1);
});
