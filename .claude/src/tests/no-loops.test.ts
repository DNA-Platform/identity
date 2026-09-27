///: No loops. This test is the rule, enforced.
///:
///: Doug, after the driver fought him for his own keyboard:
///:
///: > *This is my computer. You do not get to make a computer that prevents me from
///: > writing here. If it fails, you get the UIA tree, see what went wrong, edit the
///: > code and start again. You do not loop. YOU are the retry loop.*
///:
///: So: **nothing in the driver may act on the app more than once.** Not a retry, not
///: a second click, not a five-attempt foreground steal. A failure produces the tree,
///: minimizes, and stops. A person reads the tree, changes the code, and runs it
///: again. The intelligence is in the change, not in the repetition — repeating an
///: action that just failed, unchanged, cannot succeed for any reason except luck,
///: and it costs someone their machine while it tries.
///:
///: **Looking is not acting.** "I may have looked too early" is real evidence, and
///: reading the tree changes nothing on anyone's screen. The gateway used to buy that
///: with a flat 1000ms sleep before a single look, which charged every operation the
///: app's worst case; Doug, 2026-09-17: *"Fix. Performance is real and the mechanism
///: is too slow. Use gateways to do test and fast check."* So a verify is now
///: re-read on a tapering backoff until the app answers or a budget runs out.
///:
///: That is the ONE loop in the driver. It lives in `gateway.poll`, no action is
///: reachable from inside it, and the test below holds it to exactly that.
///:
///: This test greps the driver's own source. That is deliberate — the rule is about
///: what the code CONTAINS, not what it happens to do on one run, and a rule you can
///: only violate by being observed is not enforced at all.
///:
///: Run: npx tsx --test "src/tests/**/*.test.ts"
///:
///: [The Gateway Pattern](../../library/reference-desk/02-02-the-architecture--gateway.md) — act once, look until it answers, stand down.

import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, readdirSync, statSync } from 'fs';
import { join, relative, resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const SRC = resolve(dirname(fileURLToPath(import.meta.url)), '..');

/** Directories that never touch the app: parsers, generators, throwaway capture
 *  scaffolding, and the tests themselves. A `for` over an array of strings is not a
 *  loop in the sense that matters — the rule is about repeating an action against
 *  someone's running application. */
const NOT_DRIVING = new Set(['tests', 'cli', 'debug', 'trees', 'shortcut', 'scripts', 'exports']);

/** The files that actually drive Claude Desktop. */
function drivingFiles(): string[] {
  const out: string[] = [];
  const walk = (dir: string): void => {
    for (const entry of readdirSync(dir).sort()) {
      const full = join(dir, entry);
      if (statSync(full).isDirectory()) {
        if (!NOT_DRIVING.has(entry)) walk(full);
      } else if (entry.endsWith('.ts')) {
        out.push(full);
      }
    }
  };
  walk(SRC);
  return out;
}

/** Strip comments and template literals before looking for loops.
 *
 *  Without this the test fails on its own explanations — every `while` in a comment
 *  saying "this used to be a while loop" would count, and the PowerShell inside
 *  template literals is not TypeScript control flow. */
function code(text: string): string {
  return text
    .replace(/\/\*[\s\S]*?\*\//g, ' ')      // block comments, including ///: headers
    .replace(/(^|[^:])\/\/.*$/gm, '$1 ')    // line comments, but not the // in a URL
    .replace(/`[\s\S]*?`/g, '``');          // template literals (PowerShell lives here)
}

/** Every loop in the source, with the block it governs — found by matching braces
 *  from the loop keyword. The body is what the rule is actually about. */
function loops(source: string): { header: string; body: string }[] {
  const found: { header: string; body: string }[] = [];
  const loop = /\b(while|for)\s*\(/g;
  let m: RegExpExecArray | null;
  while ((m = loop.exec(source))) {
    // Walk from the loop keyword to the end of its block, matching braces.
    const open = source.indexOf('{', m.index);
    if (open < 0) continue;
    let depth = 0, i = open;
    for (; i < source.length; i++) {
      if (source[i] === '{') depth++;
      else if (source[i] === '}' && --depth === 0) break;
    }
    found.push({
      header: source.slice(m.index, Math.min(m.index + 60, source.length)).split('\n')[0].trim(),
      body: source.slice(open, i),
    });
  }
  return found;
}

/** A loop that contains an `await` is a loop that acts on the app repeatedly. A loop
 *  over an already-fetched array of text is not — the driver parses UIA text with
 *  plenty of those and they touch nothing. */
function repeatedActions(source: string): string[] {
  return loops(source).filter(l => /\bawait\b/.test(l.body)).map(l => l.header);
}

test('NOTHING IN THE DRIVER LOOPS OVER AN ACTION — this is Doug\'s machine', () => {
  const offenders: string[] = [];
  for (const file of drivingFiles()) {
    const rel = relative(SRC, file).replace(/\\/g, '/');
    // The gateway is the ONE place a loop is allowed, because the only thing it
    // repeats is a question. The test below is stricter than this one about it:
    // it pins the loop down to a verify and proves no action can be reached inside.
    if (rel === 'gateway.ts') continue;
    const loops = repeatedActions(code(readFileSync(file, 'utf-8')));
    for (const l of loops) offenders.push(`${rel}: ${l}`);
  }
  assert.deepEqual(offenders, [],
    'These loop with an await inside, which means they act on the running app more ' +
    'than once. A driver that repeats an action holds a computer hostage from its ' +
    'owner. Fail once, hand over the tree, minimize, stop:\n  ' + offenders.join('\n  '));
});

test('the gateway loops over the LOOK, and the action can never be reached from inside it', () => {
  const source = code(readFileSync(join(SRC, 'gateway.ts'), 'utf-8'));
  const all = loops(source);
  assert.equal(all.length, 1,
    'exactly one loop, in `poll`. The gateway is the discipline layer, so a second ' +
    'loop here is a second loop everywhere. Doug, 2026-09-17: "Fix. Performance is ' +
    'real and the mechanism is too slow. Use gateways to do test and fast check" — ' +
    'that bought a tapering re-read of a verify, and nothing else.');
  const [poll] = all;
  assert.match(poll.body, /await predicate\(\)/, 'what repeats is a question');
  assert.match(poll.body, /await sleep\(/, 'asked on a taper, not spun on');
  assert.equal(/\baction\b/.test(poll.body), false,
    'AND THIS IS THE RULE. Reading a tree again changes nothing on screen; clicking ' +
    'and typing again is what took Doug\'s keyboard away from him. No action is ' +
    'reachable from inside this loop.');
  assert.equal((source.match(/await action\(\)/g) ?? []).length, 1,
    'and the action is fired in exactly one place, before any looking begins');
});

test('nothing retries the foreground — the keyboard is not ours to take', () => {
  const source = code(readFileSync(join(SRC, 'window.ts'), 'utf-8'));
  assert.equal(/attempt/i.test(source), false,
    'requireForeground() used to steal focus five times, 400ms apart. That is two ' +
    'seconds of a background process taking the keyboard away from whoever is typing.');
  assert.match(source, /stepAside/,
    'the only recovery is to minimize and give the screen back');
});

test('failure means: the tree, a minimize, and a stop', () => {
  const gateway = readFileSync(join(SRC, 'gateway.ts'), 'utf-8');
  assert.match(gateway, /withTree\(/, 'every failure carries what the app actually showed');
  assert.match(gateway, /stepAside\(\)/, 'every failure gives the screen back');
  assert.match(gateway, /captureOnFailure/, 'every failure writes the evidence down');
});

test('the app is never closed to RECOVER — only when explicitly asked to exit', () => {
  for (const file of drivingFiles()) {
    const rel = relative(SRC, file).replace(/\\/g, '/');
    if (rel === 'window.ts') continue;                       // close() is DEFINED there
    const source = code(readFileSync(file, 'utf-8'));
    // Closing inside `exit()` is the user asking. Closing anywhere else is the
    // driver killing someone's app because it did not like what it saw — which is
    // exactly what `launch()` did when the accessibility tree was not ready.
    const outsideExit = source
      .replace(/async exit\(\)[\s\S]*?\n  \}/, '')
      .includes('window.close()');
    assert.equal(outsideExit, false,
      `${rel} closes Claude Desktop outside exit(). Recovery is: capture the tree, ` +
      'minimize, stop. A person then reads the tree and changes the code.');
  }
});
