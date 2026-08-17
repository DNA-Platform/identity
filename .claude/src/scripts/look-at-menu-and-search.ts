///: Open the conversation menu and the search box, and print what the tree shows.
///:
///: The recovery workflow, again: `isMenuVisible()` looks for `MenuItem | Rename`
///: and said no even though the menu expanded, and the sidebar search verify never
///: passed. Rather than guess at either, look.
///:
///: Run: npx tsx src/scripts/look-at-menu-and-search.ts

import { Claude } from '../claude.ts';

const show = (label: string, names: string[]) => {
  console.log(`\n--- ${label} (${names.length}) ---`);
  for (const n of names) console.log('  ' + n);
};

async function main(): Promise<void> {
  const app = new Claude();
  if (!await app.attach()) {
    console.error('Claude Desktop is not running.');
    return;
  }

  try {
    const before = await app.auto.uia.allNames();
    show('BEFORE — anything menu-ish', before.filter(n => /Menu|More options/i.test(n)).slice(0, 12));

    const conversations = await app.sidebar.conversations();
    if (conversations.length === 0) { console.log('no conversations'); return; }
    const first = conversations[0];
    console.log(`\nexpanding the menu for: ${JSON.stringify(first.name)}`);

    await app.auto.uia.expandByName(`More options for ${first.name}`);
    await new Promise(r => setTimeout(r, 1200));

    const after = await app.auto.uia.allNames();
    const fresh = after.filter(n => !before.includes(n));
    show('WHAT APPEARED when the menu opened', fresh);
    show('every MenuItem on the tree', after.filter(n => n.startsWith('ControlType.MenuItem')));

    await app.auto.keyboard.sendKeys('{ESCAPE}');
    await new Promise(r => setTimeout(r, 600));

    // --- Search ---
    const beforeSearch = await app.auto.uia.allNames();
    await app.auto.uia.invokeByName('Search');
    await new Promise(r => setTimeout(r, 1200));
    const afterSearch = await app.auto.uia.allNames();
    show('WHAT APPEARED when Search was invoked',
      afterSearch.filter(n => !beforeSearch.includes(n)).slice(0, 25));
    show('every Edit on the tree', afterSearch.filter(n => n.startsWith('ControlType.Edit')));

    await app.auto.keyboard.sendKeys('{ESCAPE}');
  } finally {
    await app.navigator.resetToHome().catch(() => {});
    await app.window.minimize().catch(() => {});
    app.auto.shell.close();
  }
}

main().then(() => process.exit(0), e => { console.error(e?.detail ?? e); process.exit(1); });
