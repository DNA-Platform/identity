// Test the Session: it tracks where the app is. Remember a page → inSync TRUE
// while we're on it; move → inSync FALSE; re-remember → TRUE again. That is the
// whole contract: you either find out you're on the remembered page (resume) or
// you're not (start from home). Disposable.

import { Claude } from '../claude.ts';

const app = new Claude();

function check(label: string, got: boolean, expect: boolean): void {
  console.log(`[test] ${got === expect ? 'PASS' : 'FAIL'} — ${label} (got ${got}, expected ${expect})`);
}

async function main(): Promise<void> {
  const home = await app.launch();

  // 1. Remember where we are, then confirm we're in sync with it.
  await app.session.remember();
  console.log(`[test] remembered: ${app.session.rememberedUrl}`);
  console.log(`[test] live url:   ${await app.currentUrl()}`);
  check('inSync on the remembered page', await app.session.inSync(), true);

  // 2. Move somewhere else — now the session is out of sync.
  await home.sidebar().projects();
  console.log(`[test] moved to:   ${await app.currentUrl()}`);
  check('inSync after moving away', await app.session.inSync(), false);

  // 3. Remember the new page — in sync again.
  await app.session.remember();
  console.log(`[test] re-remembered: ${app.session.rememberedUrl}`);
  check('inSync after re-remember', await app.session.inSync(), true);

  // 4. A fresh Session object (new "process") reads the same persisted file and
  //    agrees — this is the cross-process resume check.
  const fresh = new (await import('../session.ts')).Session(app);
  check('a fresh Session agrees we are in sync', await fresh.inSync(), true);
}

main()
  .catch(e => console.error('[test] ERROR:', (e as Error).message))
  .finally(() => { app.window.minimize(); console.log('[test] minimized.'); });
