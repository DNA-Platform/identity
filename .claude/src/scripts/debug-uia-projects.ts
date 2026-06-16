import { Claude } from '../claude.ts';
import { powershellAsync } from '../shell.ts';

const app = new Claude();

async function main() {
  await app.launch();
  app.window.maximize();
  const h = app.window.handle;

  console.log('Searching for elements matching "Project"...');

  const script = `
    Add-Type -AssemblyName UIAutomationClient
    Add-Type -AssemblyName UIAutomationTypes
    $uia = [System.Windows.Automation.AutomationElement]
    $window = $uia::FromHandle([IntPtr]::new(${h}))
    $all = $window.FindAll([System.Windows.Automation.TreeScope]::Descendants,
      [System.Windows.Automation.Condition]::TrueCondition)
    foreach ($el in $all) {
      if ($el.Current.Name -match 'Project') {
        $ct = $el.Current.ControlType.ProgrammaticName
        $nm = $el.Current.Name
        Write-Output "$ct | $nm"
      }
    }
  `;

  const result = await powershellAsync(script, 15_000);
  console.log(result || '(no output)');

  console.log('\nSearching for elements matching "New chat"...');
  const script2 = `
    Add-Type -AssemblyName UIAutomationClient
    Add-Type -AssemblyName UIAutomationTypes
    $uia = [System.Windows.Automation.AutomationElement]
    $window = $uia::FromHandle([IntPtr]::new(${h}))
    $all = $window.FindAll([System.Windows.Automation.TreeScope]::Descendants,
      [System.Windows.Automation.Condition]::TrueCondition)
    foreach ($el in $all) {
      if ($el.Current.Name -match 'New chat|Artifact|Customize') {
        $ct = $el.Current.ControlType.ProgrammaticName
        $nm = $el.Current.Name
        Write-Output "$ct | $nm"
      }
    }
  `;

  const result2 = await powershellAsync(script2, 15_000);
  console.log(result2 || '(no output)');
}

main().catch(e => console.error('Error:', e.message));
