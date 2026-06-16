// Sprint 65: Debug the file dialog step by step.

import { Claude } from '../claude.ts';
import { FileDialog } from '../components/file-dialog.ts';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const TEST_IMAGE = resolve(__dirname, 'test-image.png');

const app = new Claude();

async function main() {
  await app.launch();
  app.window.maximize();
  app.window.requireForeground();

  console.log('[debug] Opening DNA Patternity...');
  await app.openProject('DNA Patternity');
  await new Promise(r => setTimeout(r, 1500));

  await app.message.clear();

  // Step 1: Open file dialog
  console.log('\n--- Step 1: Ctrl+U ---');
  await app.auto.keyboard.sendKeys('^u');
  await new Promise(r => setTimeout(r, 2000));

  // Step 2: Check detection with window handle
  console.log('\n--- Step 2: Detect (with window handle) ---');
  const fd = new FileDialog(app.gateway, app.window);
  await fd.detect();
  console.log(`  isOpen: ${fd.isOpen}`);

  // Step 3: Also check raw UIA tree for Open window
  console.log('\n--- Step 3: Check UIA tree ---');
  const allNames = await app.auto.uia.allNames();
  for (const name of allNames) {
    if (name.includes('Open') || name.includes('File name') || name.includes('file name')) {
      console.log(`  ${name}`);
    }
  }

  if (!fd.isOpen) {
    console.log('\n  FileDialog not detected. Trying direct detection...');
    // Try finding it manually from the window tree
    const { powershellAsync } = await import('../shell.ts');
    const handle = app.window.handle;
    const result = await powershellAsync(`
      Add-Type -AssemblyName UIAutomationClient
      $uia = [System.Windows.Automation.AutomationElement]

      # Check root children first
      $cond = New-Object System.Windows.Automation.PropertyCondition(
        $uia::NameProperty, 'Open')
      $d = $uia::RootElement.FindFirst([System.Windows.Automation.TreeScope]::Children, $cond)
      if ($d) { "root-child: $($d.Current.ClassName)"; return }

      # Check Claude window descendants
      $hwnd = [IntPtr]::new(${handle})
      $win = $uia::FromHandle($hwnd)
      $d2 = $win.FindFirst([System.Windows.Automation.TreeScope]::Descendants, $cond)
      if ($d2) { "descendant: $($d2.Current.ClassName)"; return }

      # List all top-level windows
      $trueCond = [System.Windows.Automation.Condition]::TrueCondition
      $tops = $uia::RootElement.FindAll([System.Windows.Automation.TreeScope]::Children, $trueCond)
      foreach ($t in $tops) {
        $n = $t.Current.Name
        $c = $t.Current.ClassName
        if ($n -and $n -ne '' -and $n.Length -lt 100) {
          "$n ($c)"
        }
      }
    `, 10000);
    console.log(`  result: ${result}`);
  }

  // Step 4: If detected, try typing the path
  if (fd.isOpen) {
    console.log('\n--- Step 4: Type path ---');
    await fd.typePath(TEST_IMAGE);
    await new Promise(r => setTimeout(r, 1000));

    // Screenshot before submit
    const ts = new Date().toISOString().replace(/[:.]/g, '-');
    await app.screenshot(resolve(__dirname, '..', '..', 'debug', `${ts}-before-submit.png`));
    console.log('  typed path, screenshot saved');

    // Step 5: Submit
    console.log('\n--- Step 5: Submit ---');
    await fd.submit();
    console.log('  submitted');

    await new Promise(r => setTimeout(r, 1500));

    // Step 6: Read message state
    const state = await app.message.read();
    console.log(`\n  text: "${state.text}"`);
    console.log(`  attachments: ${state.attachments.length}`);
    console.log(`  canSend: ${state.canSend}`);
  } else {
    // Close any open dialog via Escape
    console.log('\n  Dialog not detected by FileDialog. Pressing Escape...');
    await app.auto.keyboard.sendKeys('{ESCAPE}');
    await new Promise(r => setTimeout(r, 500));
  }

  // Clean up
  await app.message.clear();
  app.window.minimize();
  console.log('\n[debug] Done.');
}

main().catch(e => {
  console.error(`[debug] Failed: ${e.message}`);
  try { app.auto.keyboard.sendKeys('{ESCAPE}'); } catch {}
  try { app.window.minimize(); } catch {}
  process.exit(1);
});
