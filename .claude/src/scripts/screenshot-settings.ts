import { Claude } from '../claude.ts';
import { powershellAsync } from '../shell.ts';

const app = new Claude();

async function main() {
  await app.launch();
  app.window.maximize();
  await new Promise(r => setTimeout(r, 2000));

  const url = await app.auto.uia.readUrl();
  if (!url?.includes('/settings/general')) {
    await app.auto.keyboard.sendKeys('^{,}');
    await new Promise(r => setTimeout(r, 2000));
    await app.auto.uia.invokeLink('General');
    await new Promise(r => setTimeout(r, 2000));
  }

  const handle = app.window.handle;

  // Find ALL Edit controls and list their names + values
  const result = await powershellAsync(`
    Add-Type -AssemblyName UIAutomationClient
    Add-Type -AssemblyName UIAutomationTypes
    $uia = [System.Windows.Automation.AutomationElement]
    $window = $uia::FromHandle([IntPtr]::new(${handle}))
    $cond = New-Object System.Windows.Automation.PropertyCondition(
      $uia::ControlTypeProperty, [System.Windows.Automation.ControlType]::Edit)
    $edits = $window.FindAll([System.Windows.Automation.TreeScope]::Descendants, $cond)
    foreach ($ed in $edits) {
      $name = $ed.Current.Name
      $vp = $null
      $val = ''
      if ($ed.TryGetCurrentPattern([System.Windows.Automation.ValuePattern]::Pattern, [ref]$vp)) {
        $val = $vp.Current.Value
      }
      $rect = $ed.Current.BoundingRectangle
      Write-Output "EDIT: name='$name' value='$($val.Substring(0, [Math]::Min($val.Length, 100)))' at ($($rect.X),$($rect.Y)) size=$($rect.Width)x$($rect.Height)"
    }
  `, 15000);

  console.log('All Edit controls on settings page:');
  console.log(result);

  app.window.minimize();
}

main().catch(console.error);
