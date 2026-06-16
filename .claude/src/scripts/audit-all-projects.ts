import { Claude } from '../claude.ts';

const app = new Claude();

const PROJECTS = [
  'Ana Studies English',
  "Ana's Fiverr Inbox",
  'Career',
  'Chemistry',
  'DNA Patternity',
  'Eirian',
  'Georgia',
  'Grammar',
  'Inexplicable Phenomena',
  'Investing',
  'Learning',
  'Life',
  'Miscellaneous',
  'Neuroscience',
  'Nikolai',
  'Number Theory',
  'Physics',
  'Russia',
  'Semantic Reference Theory',
  'Seren',
  'Turkey',
];

async function auditProject(name: string): Promise<void> {
  await app.navigator.resetToHome();
  await new Promise(r => setTimeout(r, 1000));
  await app.navigator.goToProjects();
  await new Promise(r => setTimeout(r, 2000));

  const clicked = await app.auto.uia.invokeLink(name);
  if (!clicked) {
    // Project might need scrolling to find
    await app.auto.uia.clickByName(name);
  }
  await new Promise(r => setTimeout(r, 3000));

  const url = await app.auto.uia.readUrl();
  if (!url?.includes('/project/')) {
    console.log(`  COULD NOT OPEN`);
    return;
  }

  // Read the UIA tree and find file elements
  const names = await app.auto.uia.allNames();

  // Files show as "ControlType.Button | filename, type, N lines"
  // or "ControlType.Text | filename"
  // Look for file-like elements in the Files section
  const fileButtons = names.filter(n =>
    n.startsWith('ControlType.Button |') &&
    (n.includes(' lines') || n.includes('.md') || n.includes('.ts') || n.includes('.json') || n.includes('.css') || n.includes('.html') || n.includes('.tsx') || n.includes('.jsx'))
  );

  const checkboxes = names.filter(n =>
    n.startsWith('ControlType.CheckBox | Select:')
  );

  if (fileButtons.length === 0 && checkboxes.length === 0) {
    console.log(`  No files`);
    return;
  }

  // Use checkboxes as the authoritative file list (each file has one)
  const files = checkboxes.map(n => {
    const match = n.match(/Select: (.+)/);
    return match ? match[1] : n;
  });

  for (const f of files) {
    // Flag problems
    const problems: string[] = [];
    if (f === '.cover.md' || f.startsWith('.cover')) problems.push('WRONG NAME - should be legacy-conversation-history');
    if (f === 'cover.md') problems.push('WRONG NAME - should be legacy-conversation-history');

    const suffix = problems.length > 0 ? ` *** ${problems.join(', ')} ***` : '';
    console.log(`  ${f}${suffix}`);
  }
}

async function main() {
  await app.launch();
  app.window.maximize();
  await new Promise(r => setTimeout(r, 2000));

  for (const name of PROJECTS) {
    console.log(`[${name}]`);
    try {
      await auditProject(name);
    } catch (e: any) {
      console.log(`  ERROR: ${e.message}`);
    }
  }

  app.window.minimize();
  console.log('\nAudit complete.');
}

main().catch(console.error);
