///: Test 15 — Shell serialization under rapid gateway polling.
///: Fire 10 UIA reads at 50ms intervals. All should return valid data.
///: Tests that the shell's promise queue serializes correctly.
///:
///: [The Gateway Pattern](../../library/reference-desk/02-02-the-architecture--gateway.md) — tapering poll starts at 50ms.
///: [The Shell](../../library/reference-desk/04-03-platform--shell.md) — persistent PowerShell session.

import { Claude } from '../claude.ts';

const app = new Claude();

async function main() {
  await app.launch();
  try {
    const results: { index: number; length: number; ms: number }[] = [];
    const start = Date.now();

    // Fire 10 reads at ~50ms intervals (simulating gateway rapid polling)
    const promises: Promise<void>[] = [];
    for (let i = 0; i < 10; i++) {
      const idx = i;
      promises.push((async () => {
        await new Promise(r => setTimeout(r, idx * 50));
        const t0 = Date.now();
        const names = await app.auto.uia.allNames();
        const elapsed = Date.now() - t0;
        results.push({ index: idx, length: names.length, ms: elapsed });
      })());
    }

    await Promise.all(promises);
    const total = Date.now() - start;

    console.log(`[test-15] 10 rapid UIA reads completed in ${total}ms`);
    let passed = true;
    for (const r of results.sort((a, b) => a.index - b.index)) {
      const ok = r.length > 0;
      if (!ok) passed = false;
      console.log(`  [${r.index}] ${r.length} elements in ${r.ms}ms ${ok ? '✓' : '✗ EMPTY'}`);
    }

    console.log(`[test-15] ${passed ? 'PASS' : 'FAIL'}: ${results.filter(r => r.length > 0).length}/10 reads returned valid data`);
  } finally {
    app.window.minimize();
  }
}

main().catch(e => {
  console.error(`[test-15] FAIL: ${(e as Error).message}`);
  try { app.window.minimize(); } catch {}
});
