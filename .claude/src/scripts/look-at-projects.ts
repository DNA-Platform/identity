///: Walk to the Projects screen and print the tree. Read-only.
///:
///: This is the recovery workflow, as a script: something failed, so LOOK at what
///: the app actually shows instead of guessing a bigger regex. Written because
///: `parseCardName` was splitting project cards on `"Updated …"`, a prefix the app
///: no longer renders.
///:
///: Run: npx tsx src/scripts/look-at-projects.ts

import { Claude } from '../claude.ts';

async function main(): Promise<void> {
  const app = new Claude();
  if (!await app.attach()) {
    console.error('Claude Desktop is not running.');
    return;
  }

  try {
    await app.sidebar.projects();
    const tree = await app.tree();
    console.log(`\nURL: ${await app.currentUrl()}\n`);
    console.log(`${tree.size} elements — ${tree.types().map(t => `${t.type} ${t.count}`).join(', ')}\n`);
    for (const el of tree.elements) {
      if (el.type === 'ListItem' || el.type === 'Hyperlink' || el.type === 'Button') {
        console.log(`  ${el.type.padEnd(10)} ${JSON.stringify(el.name)}`);
      }
    }
  } finally {
    // Give the computer back. Never exit() — that would close Doug's app.
    await app.navigator.resetToHome().catch(() => {});
    await app.window.minimize().catch(() => {});
    app.auto.shell.close();
  }
}

main().then(() => process.exit(0), e => { console.error(e?.detail ?? e); process.exit(1); });
