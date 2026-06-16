// Check bounding rectangles of conversation header elements
import { Claude } from '../claude.ts';
import { powershellAsync } from '../shell.ts';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DEBUG = resolve(__dirname, '..', 'debug');

const app = new Claude();

async function checkBounds(handle: number, name: string): Promise<string> {
  const escaped = name.replace(/'/g, "''");
  const result = await powershellAsync(`
    Add-Type -AssemblyName UIAutomationClient
    Add-Type -AssemblyName UIAutomationTypes
    $uia = [System.Windows.Automation.AutomationElement]
    $window = $uia::FromHandle([IntPtr]::new(${handle}))
    $cond = New-Object System.Windows.Automation.PropertyCondition(
      $uia::NameProperty, '${escaped}')
    $elements = $window.FindAll([System.Windows.Automation.TreeScope]::Descendants, $cond)
    foreach ($el in $elements) {
      $rect = $el.Current.BoundingRectangle
      $ct = $el.Current.ControlType.ProgrammaticName
      $ip = $null
      $hasInvoke = $el.TryGetCurrentPattern([System.Windows.Automation.InvokePattern]::Pattern, [ref]$ip)
      $ep = $null
      $hasExpand = $el.TryGetCurrentPattern([System.Windows.Automation.ExpandCollapsePattern]::Pattern, [ref]$ep)
      Write-Output "$ct | Name='${escaped}' | Rect=$($rect.X),$($rect.Y),$($rect.Width),$($rect.Height) | IsEmpty=$($rect.IsEmpty) | Invoke=$hasInvoke | Expand=$hasExpand"
    }
  `, 15000);
  return result || '(not found)';
}

async function main() {
  await app.launch();
  app.window.maximize();

  const handle = app.window.handle;
  if (!handle) throw new Error('No window handle');

  const title = 'Migrating Claude Chat account history and relationships';

  console.log('=== Checking element bounding rects ===\n');

  // Check the "More options" buttons
  console.log('--- More options for title ---');
  console.log(await checkBounds(handle, `More options for ${title}`));

  console.log('\n--- Standalone "More options" ---');
  console.log(await checkBounds(handle, 'More options'));

  console.log('\n--- Title rename button ---');
  console.log(await checkBounds(handle, `${title}, rename chat`));

  console.log('\n--- Share chat ---');
  console.log(await checkBounds(handle, 'Share chat'));

  console.log('\n--- Show more ---');
  console.log(await checkBounds(handle, 'Show more'));

  // Also check a "Pasted Text" button
  console.log('\n--- Pasted Text ---');
  console.log(await checkBounds(handle, 'Pasted Text, pasted, 97 lines'));
}

main().catch(e => {
  console.error(`Failed: ${e.message}`);
  process.exit(1);
});
