import { Claude } from '../claude.ts';

const app = new Claude();

async function main() {
  await app.launch();
  app.window.maximize();
  await new Promise(r => setTimeout(r, 2000));

  // Step 1: Get to Chemistry project
  const screen = await app.navigator.detectScreen();
  console.log('Current screen:', screen);
  if (screen !== 'project') {
    await app.navigator.resetToHome();
    await new Promise(r => setTimeout(r, 1000));
    await app.navigator.goToProjects();
    await new Promise(r => setTimeout(r, 1000));
    await app.auto.uia.invokeLink('Chemistry');
    await new Promise(r => setTimeout(r, 3000));
  }

  // Step 2: Reset state — close any open menus
  console.log('\nStep 2: Reset...');
  await app.auto.keyboard.sendKeys('{ESCAPE}');
  await new Promise(r => setTimeout(r, 500));

  // Step 3: Open the Add files menu
  console.log('Step 3: Expand Add files menu...');
  const expanded = await app.auto.uia.expandByName('Add files');
  console.log('  expanded:', expanded);
  await new Promise(r => setTimeout(r, 1000));

  // Step 4: Press Enter to trigger Upload from device
  console.log('Step 4: Press Enter for Upload from device...');
  await app.auto.keyboard.sendKeys('{ENTER}');

  // Step 5: Wait and scan for the dialog
  console.log('Step 5: Scanning for dialog (10 seconds)...');
  for (let i = 0; i < 20; i++) {
    await new Promise(r => setTimeout(r, 500));

    // Scan inside Claude window
    const names = await app.auto.uia.allNames();

    // Look for anything new that wasn't there before (dialog elements)
    const dialogHints = names.filter(n =>
      n.includes('Open') ||
      n.includes('Cancel') ||
      n.includes('file') ||
      n.includes('File') ||
      n.includes('Browse') ||
      n.includes('Choose') ||
      n.includes('Drop') ||
      n.includes('drag') ||
      n.includes('Select') ||
      n.includes('Window |')
    );

    if (dialogHints.length > 3) {
      console.log(`  Found dialog elements at ${(i+1)*500}ms:`);
      for (const h of dialogHints) console.log('   ', h);

      // Step 6: Prove we can close it
      console.log('\nStep 6: Closing dialog with Escape...');
      await app.auto.keyboard.sendKeys('{ESCAPE}');
      await new Promise(r => setTimeout(r, 1000));

      // Verify it closed
      const afterClose = await app.auto.uia.allNames();
      const stillOpen = afterClose.filter(n =>
        n.includes('Open') ||
        n.includes('file name') ||
        n.includes('File name')
      );
      console.log('  After Escape, dialog elements remaining:', stillOpen.length);

      app.window.minimize();
      console.log('\nDone. Dialog found, modeled, and closed.');
      return;
    }
  }

  console.log('  Dialog not detected in Claude window after 10s');

  // Also check desktop-level
  const { powershellAsync } = await import('../shell.ts');
  const desktopWindows = await powershellAsync(`
    Add-Type -AssemblyName UIAutomationClient
    $uia = [System.Windows.Automation.AutomationElement]
    $all = $uia::RootElement.FindAll([System.Windows.Automation.TreeScope]::Children,
      [System.Windows.Automation.Condition]::TrueCondition)
    foreach ($w in $all) {
      $n = $w.Current.Name
      $c = $w.Current.ClassName
      if ($n) { Write-Output "$c | $n" }
    }
  `, 10000);
  console.log('\nDesktop windows:', desktopWindows);

  app.window.minimize();
}

main().catch(console.error);
