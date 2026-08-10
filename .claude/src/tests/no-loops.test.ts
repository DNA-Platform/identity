///: No loops. This test is the rule, enforced.
///:
///: Doug, after the driver fought him for his own keyboard:
///:
///: > *This is my computer. You do not get to make a computer that prevents me from
///: > writing here. If it fails, you get the UIA tree, see what went wrong, edit the
///: > code and start again. You do not loop. YOU are the retry loop.*
///:
///: So: **nothing in the driver may act on the app more than once.** Not a retry,
///: not a poll, not a backoff, not a five-attempt foreground steal. A failure
///: produces the tree, minimizes, and stops. A person reads the tree, changes the
///: code, and runs it again. The intelligence is in the change, not in the repetition —
///: repeating an action that just failed, unchanged, cannot succeed for any reason
///: except luck, and it costs someone their machine while it tries.
///:
///: The one legitimate wait is a SETTLE: "I may have looked too early" is real
///: evidence, and the gateway settles once and looks once. That is not a loop.
///:
///: This test greps the driver's own source. That is deliberate — the rule is about
///: what the code CONTAINS, not what it happens to do on one run, and a rule you can
///: only violate by being observed is not enforced at all.
///:
///: Run: npx tsx --test "src/tests/**/*.test.ts"
///:
///: [The Gateway Pattern](../../library/reference-desk/02-02-the-architecture--gateway.md) — act once, look once, stand down.

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

/** A loop that contains an `await` is a loop that acts on the app repeatedly. A loop
 *  over an already-fetched array of text is not — the driver parses UIA text with
 *  plenty of those and they touch nothing. */
function repeatedActions(source: string): string[] {
  const found: string[] = [];
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
    const body = source.slice(open, i);
    if (/\bawait\b/.test(body)) {
      found.push(source.slice(m.index, Math.min(m.index + 60, source.length)).split('\n')[0].trim());
    }
  }
  return found;
}

test('NOTHING IN THE DRIVER LOOPS OVER AN ACTION — this is Doug\'s machine', () => {
  const offenders: string[] = [];
  for (const file of drivingFiles()) {
    const loops = repeatedActions(code(readFileSync(file, 'utf-8')));
    for (const l of loops) offenders.push(`${relative(SRC, file).replace(/\\/g, '/')}: ${l}`);
  }
  assert.deepEqual(offenders, [],
    'These loop with an await inside, which means they act on the running app more ' +
    'than once. A driver that repeats an action holds a computer hostage from its ' +
    'owner. Fail once, hand over the tree, minimize, stop:\n  ' + offenders.join('\n  '));
});

test('the gateway has no loop at all — not even over a read', () => {
  const source = code(readFileSync(join(SRC, 'gateway.ts'), 'utf-8'));
  assert.equal(/\b(while|for)\s*\(/.test(source), false,
    'the gateway is the discipline layer; a loop here is a loop everywhere');
  assert.match(source, /await sleep\(/, 'it may settle ONCE before it looks');
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
