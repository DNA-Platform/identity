// think.ts — the COMPOSER for the /think skill. It owns no logic; it wires the
// Thoughtfulness resources to a CLI whose subcommands ARE the two separate
// processes of the think checklist (library/our-skillset/20-think.md). They are
// NEVER chained: the WRITE process ends, the teammate does library work across
// its own turns, and only later does a fresh READ process run.
//
//   write <topic> <message> [new]   WRITE half — in the Claude project, a NEW
//                                    topic ("new") is born in the project composer,
//                                    an existing one continues. Wait for streaming,
//                                    minimize, EXIT. Returns immediately.
//   read                            CHECK-and-READ half — resume the in-flight
//                                    thought's conversation (from the session),
//                                    check completion, print it (rename if new),
//                                    minimize, EXIT. If not complete it reports
//                                    NOT READY; tend the library and run read again.
//
// The operations are resources of the Thoughtfulness book. think.ts only composes
// them. Each command process.exits so "the first ends" — the driver leaves
// PowerShell/UIA handles open, so without it the process lingers.

import { Claude } from '../claude.ts';
import { dispatch } from '../../library/thoughtfulness/02-the-thought-lifecycle--dispatch.ts';
import { read } from '../../library/thoughtfulness/02-the-thought-lifecycle--read.ts';

const [cmd, topic, say, ...rest] = process.argv.slice(2);

const app = new Claude();

async function main(): Promise<void> {
  switch (cmd) {
    case 'write': {
      if (!topic || !say) throw new Error('usage: think.ts write <topic> <say> [attach] [new]');
      const isNew = rest.includes('new');
      const attach = rest.find(a => a !== 'new');   // optional attachment — anything but the 'new' flag
      await dispatch(app, topic, say, isNew, attach);
      console.log(`[think] WRITE done — "${topic}" (${isNew ? 'new topic' : 'continued'}${attach ? ', + attachment' : ''}), streaming detected, minimized.`);
      break;
    }
    case 'read': {
      const { complete, text } = await read(app);
      if (!complete) {
        console.log(`[think] NOT READY — still responding. Tend the library, then run read again.`);
        console.log(`[think] (partial so far: ${text.length} chars)`);
      } else {
        console.log('=== RESPONSE (complete) ===');
        console.log(text);
        console.log('=== END ===');
      }
      break;
    }
    default:
      throw new Error(`unknown command "${cmd ?? ''}" — expected: write | read`);
  }
}

main()
  .then(() => process.exit(0))
  .catch(err => {
    console.error('[think] FAILED:', err instanceof Error ? err.message : err);
    try { app.window.minimize(); } catch {}
    process.exit(1);
  });
