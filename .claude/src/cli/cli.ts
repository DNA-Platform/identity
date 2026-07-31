///: The CLI — drive Claude Desktop by moving through it.
///:
///: Usage:
///:   npx tsx cli/cli.ts look                    print the room you are in
///:   npx tsx cli/cli.ts go <exit>               take an exit, print the new room
///:   npx tsx cli/cli.ts do <command> [args…]    run a look or an action
///:   npx tsx cli/cli.ts tree [--type T] [--name N] [--contains S] [--json]
///:   npx tsx cli/cli.ts copy <command> [args…]  run a look, hand the result over
///:   npx tsx cli/cli.ts help
///:
///: This file parses arguments and prints. It holds no app behaviour — that lives in
///: [`.claude/src/`](../../src/), reached through [Runtime](runtime.ts).
///:
///: It always minimizes in a `finally`, BEFORE closing the shell (minimizing needs
///: the shell), and it never forces focus: if Claude Desktop is not readable it says
///: so rather than racing the user for their own screen
///: ([ch.5](../../library/reference-desk/05-coding-philosophy.md)).
///:
///: [The Runtime](../../library/reference-desk/14-the-runtime.md) — the specification.

import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { Claude } from '../claude.ts';
import { SURFACE_BY_NAME } from './surface.generated.ts';
import { Runtime, renderValue } from './runtime.ts';
import { renderScreen, renderChange } from './render.ts';
import { WindowsClipboard, copyReport, nothingToCopy } from './clipboard.ts';
import type { ScreenModel } from './describe.ts';



const HELP = `
Drive Claude Desktop by moving through it. Every move prints the room.

  look | where            print the room you are in
  next                    just the command names — fast, for automation
  go <exit>               take an exit — prints the room you arrive in
  back                    ask the app where it is and stand there
  do <command> [args…]    run a look (reads the screen) or an action (changes it)
  tree [filters]          the live UIA tree — what the app ACTUALLY shows
  copy <command> [args…]  run a look and put the result on your clipboard
  help                    this

Commands are read from the code, so the room always lists what the app can really
do. Three kinds:
  Exits  return a PLACE — a screen, a menu, a modal, a panel   (go)
  Look   read and tell you; always harmless                    (do / copy)
  Do     change something                                      (do)

tree filters:  --type Button   --name "Send"   --contains inexplicable   --json
tree --history  what the screen looked like on each earlier read this process

When a command is missing or the screen disagrees with what you expected, run
\`tree\` — it is the app's own account of itself, and the fastest way to find out
why an implementation is failing.
`.trimStart();

function observationsFor(_model: ScreenModel): Record<string, string> {
  // Live observations are read by explicit `look` commands, not gathered here — a
  // hand-picked list of "interesting facts per screen" is the same drift as a
  // hand-maintained command table. The room shows the surface; you ask for readings.
  return {};
}

async function main(): Promise<number> {
  const argv = process.argv.slice(2);
  const verb = argv[0] ?? 'help';

  if (verb === 'help' || verb === '--help' || verb === '-h') {
    console.log(HELP);
    return 0;
  }

  const app = new Claude();
  let launched = false;

  try {
    // Use the app WHERE IT IS. `launch()` ends with `goHome()`, so going through it
    // would navigate you home before telling you where you were — which is both
    // slow and wrong: `look` is the one command that must not move you. Attach to
    // the running app and bind to whatever screen it is actually on; only start the
    // app when there is no app.
    if (!await app.attach()) await app.launch();
    launched = true;

    const runtime = new Runtime(app, SURFACE_BY_NAME);
    await runtime.bind();

    switch (verb) {
      case 'next': {
        // "What can I do from here?" — the surface, quickly, with no prose. Built
        // from the same model as the room, so it can never advertise something the
        // room does not offer.
        const m = runtime.model();
        const line = (label: string, cs: readonly { path: string }[]) =>
          cs.length ? `${label}: ${cs.map(c => c.path).join(' ')}` : '';
        console.log([
          `screen: ${m.screen}`,
          line('exits', m.exits),
          line('look', m.looks),
          line('do', m.actions),
        ].filter(Boolean).join('\n'));
        return 0;
      }

      case 'look':
      case 'where': {
        console.log(renderScreen(runtime.model(), observationsFor(runtime.model())));
        return 0;
      }

      case 'back': {
        // Ask the APP where it is and stand there. Not a history stack, not a
        // remembered trail — the CLI keeps no model of where you have been, because
        // the app is the only thing that knows where you are. Walking out of a menu
        // you left open puts you back on the screen the app is actually showing.
        console.log(renderScreen(await runtime.bind()));
        return 0;
      }

      case 'tree': {
        // `--history` is for looking BACKWARDS: what did the screen look like
        // before the thing that just went wrong? Never a source of truth about now.
        if (argv.includes('--history')) {
          await runtime.tree();               // include the screen as it is right now
          console.log('Trees read in this process (oldest first):');
          console.log(app.diagnostics.treeHistory());
          return 0;
        }
        const tree = await runtime.tree();
        const filtered = applyTreeFilters(tree, argv.slice(1));
        console.log(argv.includes('--json')
          ? JSON.stringify((filtered as { toJSON(): unknown }).toJSON(), null, 2)
          : String(filtered));
        return 0;
      }

      case 'go':
      case 'do':
      case 'copy': {
        const path = argv[1];
        if (!path) {
          console.error(`"${verb}" needs a command. Run \`look\` to see what is here.`);
          return 2;
        }
        const args = argv.slice(2);
        const outcome = await runtime.run(path, args);

        switch (outcome.kind) {
          case 'refused':
            console.error(outcome.message);
            return 2;

          case 'moved':
            console.log(renderScreen(outcome.model, observationsFor(outcome.model)));
            return 0;

          case 'acted':
            // Local change only — not the whole room. See renderChange.
            console.log(renderChange(
              outcome.command.path, outcome.scope, outcome.changed, outcome.surface,
              renderValue(outcome.result)));
            return 0;

          case 'read': {
            const text = renderValue(outcome.value);
            if (verb !== 'copy') { console.log(text); return 0; }
            if (outcome.value === null || outcome.value === undefined || text === '(empty)' || text === '(none)') {
              console.log(nothingToCopy(outcome.command.path));
              return 0;
            }
            await new WindowsClipboard().write(text);
            console.log(copyReport(outcome.command.path, text));
            return 0;
          }
        }
        return 0;
      }

      default:
        console.error(`Unknown verb "${verb}".\n`);
        console.error(HELP);
        return 2;
    }
  } catch (e) {
    const err = e as { detail?: string; message?: string };
    console.error(err.detail ?? err.message ?? String(e));
    return 1;
  } finally {
    // Give the computer back: minimize the WINDOW, close the SHELL.
    //
    // NOT app.exit() — that closes Claude Desktop itself, taking the user's live
    // conversation with it, and then the NEXT command has to relaunch the app from
    // cold (waitForWindow + waitForUia + switchToChat + goHome). Every invocation
    // paid for a fresh app. A driver attached to a running app closes the shell,
    // not the app (Sprint 92). Minimize BEFORE closing the shell — minimizing
    // speaks through it.
    if (launched) {
      try { await app.window.minimize(); } catch { /* nothing to give back */ }
      try { app.auto.shell.close(); } catch { /* already closed */ }
    }
  }
}

/** `--type X --name Y --contains Z`, applied left to right. Unknown flags are
 *  ignored rather than fatal: `tree` is the command you reach for when things are
 *  already going wrong, and it should never be the thing that fails. */
function applyTreeFilters(tree: unknown, flags: readonly string[]): unknown {
  let current = tree as { where(q: Record<string, string>): unknown };
  for (let i = 0; i < flags.length; i++) {
    const key = flags[i];
    const value = flags[i + 1];
    if (!value || value.startsWith('--')) continue;
    if (key === '--type') { current = current.where({ type: value }) as typeof current; i++; }
    else if (key === '--name') { current = current.where({ name: value }) as typeof current; i++; }
    else if (key === '--contains') { current = current.where({ contains: value }) as typeof current; i++; }
  }
  return current;
}

// Not top-level await: tsx transpiles this file to CJS, where top-level await is a
// hard error. The .then keeps the entry point runnable under both module formats.
main().then(
  code => process.exit(code),
  err => { console.error(err); process.exit(1); },
);
