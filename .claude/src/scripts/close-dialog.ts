// Recover: maximize properly, check state, go home if stuck
import { Claude } from '../claude.ts';
import { powershellSync } from '../shell.ts';

const app = new Claude();
app.window.find();

// Force maximize and foreground
powershellSync(`
  Add-Type @"
    using System; using System.Runtime.InteropServices;
    public class Recover {
      [DllImport("user32.dll")] public static extern void keybd_event(byte bVk, byte bScan, uint dwFlags, UIntPtr dwExtraInfo);
      [DllImport("user32.dll")] public static extern bool SetForegroundWindow(IntPtr h);
      [DllImport("user32.dll")] public static extern bool ShowWindow(IntPtr h, int n);
    }
"@
  [Recover]::keybd_event(0x12, 0, 0, [UIntPtr]::Zero)
  [Recover]::keybd_event(0x12, 0, 2, [UIntPtr]::Zero)
  [Recover]::ShowWindow([IntPtr]::new(${app.window.handle}), 3) | Out-Null
  [Recover]::SetForegroundWindow([IntPtr]::new(${app.window.handle})) | Out-Null
`);
await new Promise(r => setTimeout(r, 2000));

const fg = app.window.isForeground();
console.log('Foreground:', fg);

// Screenshot
app.window.screenshot('C:\\Source\\dna-platform\\dna-library\\.claude\\agents\\debug\\recovery.png');
console.log('Screenshot saved');

// Check state
const url = await app.auto.uia.readUrl();
console.log('URL:', url);

const text = await app.auto.uia.readText();
const responding = text?.includes('Claude is responding') ?? false;
const responded = text?.includes('Claude responded:') ?? false;
console.log('Responding:', responding, 'Responded:', responded);

// Try going home to reset
if (fg) {
  console.log('Navigating home...');
  await app.navigator.goHome();
  console.log('Home. Screen:', app.navigator.screen);
}

app.window.minimize();
