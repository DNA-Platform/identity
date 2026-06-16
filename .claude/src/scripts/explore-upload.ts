import { Claude } from '../claude.ts';
import { powershellAsync } from '../shell.ts';

const app = new Claude();

async function main() {
  await app.launch();
  app.window.maximize();
  await new Promise(r => setTimeout(r, 2000));

  // Press Escape first in case a dialog is open
  await app.auto.keyboard.sendKeys('{ESCAPE}');
  await new Promise(r => setTimeout(r, 500));

  // Expand Add files menu
  await app.auto.uia.expandByName('Add files');
  await new Promise(r => setTimeout(r, 1000));

  // Press Enter to select Upload from device
  await app.auto.keyboard.sendKeys('{ENTER}');
  console.log('Pressed Enter');

  // Quick check — 1 second
  await new Promise(r => setTimeout(r, 1000));

  // List ALL top-level windows
  const windowList = await powershellAsync(`
    Add-Type -AssemblyName UIAutomationClient
    Add-Type -AssemblyName UIAutomationTypes
    $uia = [System.Windows.Automation.AutomationElement]
    $desktop = $uia::RootElement
    $cond = New-Object System.Windows.Automation.PropertyCondition(
      $uia::ControlTypeProperty, [System.Windows.Automation.ControlType]::Window)
    $windows = $desktop.FindAll([System.Windows.Automation.TreeScope]::Children, $cond)
    foreach ($w in $windows) {
      $name = $w.Current.Name
      $cls = $w.Current.ClassName
      Write-Output "$cls | $name"
    }
  `, 10000);
  console.log('All windows:\n', windowList);

  // Also try finding the dialog by class name #32770 (standard Windows dialog)
  const dialogSearch = await powershellAsync(`
    Add-Type -AssemblyName UIAutomationClient
    Add-Type -AssemblyName UIAutomationTypes
    $uia = [System.Windows.Automation.AutomationElement]
    $desktop = $uia::RootElement
    $cond = New-Object System.Windows.Automation.PropertyCondition(
      $uia::ClassNameProperty, '#32770')
    $dialogs = $desktop.FindAll([System.Windows.Automation.TreeScope]::Children, $cond)
    foreach ($d in $dialogs) {
      Write-Output "Dialog: $($d.Current.Name)"
      $edits = $d.FindAll([System.Windows.Automation.TreeScope]::Descendants,
        (New-Object System.Windows.Automation.PropertyCondition(
          $uia::ControlTypeProperty, [System.Windows.Automation.ControlType]::Edit)))
      foreach ($ed in $edits) { Write-Output "  Edit: $($ed.Current.Name)" }
    }
  `, 10000);
  console.log('Dialog by class:', dialogSearch || 'None');
}

main().catch(console.error);
