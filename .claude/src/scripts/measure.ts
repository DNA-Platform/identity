///: Measure — a stopwatch on each layer of the driver.
///:
///: Read-only: it never navigates, never types, never closes the app. It restores
///: the window (a minimized window's tree does not update) and times what the driver
///: already does.
///:
///: **Reach for this before theorising.** When the driver felt glacially slow, all
///: three plausible explanations were wrong — it was not the app, not the UIA tree,
///: and not the polling. Running this found the real cause in one pass: `Window`
///: spawning a fresh PowerShell process per call, and the gateway paying for the
///: foreground check twice per action. A stopwatch settles in seconds what argument
///: cannot settle at all.
///:
///: Run: npx tsx src/scripts/measure.ts
///:
///: [The Shell](../../library/reference-desk/04-03-platform--shell.md) — what a call costs.
///: [Windows UIA](../../library/reference-desk/04-01-platform--uia.md) — what the tree costs.
///: [Pitfalls](../../library/reference-desk/07-pitfalls.md) — glacial automation is almost never the app.

import { Window } from '../window.ts';
import { Shell, powershellSync } from '../shell.ts';
import { Uia } from '../uia.ts';
import { Diagnostics } from '../diagnostics.ts';
import { Gateway } from '../gateway.ts';

async function t<T>(label: string, fn: () => T | Promise<T>): Promise<T> {
  const start = Date.now();
  try {
    return await fn();
  } finally {
    console.log(`${String(Date.now() - start).padStart(6)}ms  ${label}`);
  }
}

function section(title: string): void {
  console.log(`\n--- ${title} ---`);
}

async function main(): Promise<void> {
  const shell = new Shell();
  const window = new Window(shell);
  const uia = new Uia(window, shell);
  const diagnostics = new Diagnostics(window, uia);
  const gateway = new Gateway(diagnostics, window);

  if (!await window.find()) {
    console.error('Claude Desktop is not running — nothing to measure.');
    return;
  }
  const handle = window.handle!;

  section('a fresh process per call — what Window used to do');
  await t('plain Get-Process, fresh process', async () => {
    powershellSync(`Get-Process -Name claude -EA SilentlyContinue | Select-Object -First 1 -ExpandProperty Id`);
  });
  await t('fresh process + INLINE C# Add-Type (the C# compiler runs)', async () => {
    powershellSync(`
      Add-Type @"
        using System; using System.Runtime.InteropServices;
        public class FgCheckM { [DllImport("user32.dll")] public static extern IntPtr GetForegroundWindow(); }
"@
      if ([FgCheckM]::GetForegroundWindow() -eq [IntPtr]::new(${handle})) { 'true' } else { 'false' }
    `);
  });

  section('the persistent shell — one process, kept alive');
  await t('warm-up (spawns it)', () => shell.run('1'));
  await t('trivial round trip', () => shell.run('1'));
  await t('trivial round trip', () => shell.run('1'));

  section('Window, now through that shell');
  await t('window.find()', () => window.find());
  await t('window.state()          — foreground AND minimized, one crossing', () => window.state());
  await t('window.requireForeground()', () => window.requireForeground());
  await t('window.waitForUia()', () => window.waitForUia());

  section('the UIA tree — the thing everyone assumes is slow');
  const raw = await shell.run(`
    Add-Type -AssemblyName UIAutomationClient
    Add-Type -AssemblyName UIAutomationTypes
    $uia = [System.Windows.Automation.AutomationElement]
    $w = $uia::FromHandle([IntPtr]::new(${handle}))
    $w.FindAll([System.Windows.Automation.TreeScope]::Descendants,
      [System.Windows.Automation.Condition]::TrueCondition).Count`, 60_000);
  console.log(`         raw descendants: ${raw}`);
  const snap = await t('uia.snapshot()', () => uia.snapshot());
  console.log(`         → ${snap.size} named elements`);
  await t('uia.readUrl()', () => uia.readUrl());
  await t('uia.allNames()', () => uia.allNames());

  // The textbook UIA optimisation, measured rather than assumed. On a tree this
  // small the CacheRequest setup costs more than the crossings it saves.
  await t('the same walk with a CacheRequest (slower here — see ch.4-01)', () => shell.run(`
    Add-Type -AssemblyName UIAutomationClient
    Add-Type -AssemblyName UIAutomationTypes
    $uia = [System.Windows.Automation.AutomationElement]
    $w = $uia::FromHandle([IntPtr]::new(${handle}))
    $cr = New-Object System.Windows.Automation.CacheRequest
    $cr.Add($uia::NameProperty); $cr.Add($uia::ControlTypeProperty)
    $cr.TreeScope = [System.Windows.Automation.TreeScope]::Element -bor [System.Windows.Automation.TreeScope]::Descendants
    $cr.AutomationElementMode = [System.Windows.Automation.AutomationElementMode]::None
    $act = $cr.Activate()
    try {
      $all = $w.FindAll([System.Windows.Automation.TreeScope]::Descendants,
        [System.Windows.Automation.Condition]::TrueCondition)
      $sb = New-Object System.Text.StringBuilder
      foreach ($el in $all) {
        $n = $el.Cached.Name
        if ($n) { [void]$sb.AppendLine($el.Cached.ControlType.ProgrammaticName + ' | ' + $n) }
      }
      $sb.ToString()
    } finally { $act.Dispose() }`, 120_000));

  section('the gateway — what one disciplined action costs');
  await t('waitFor(() => true)     — a predicate that passes immediately', () => gateway.waitFor(async () => true));
  await t('act(noop, () => true)   — no target', () =>
    gateway.act(async () => {}, async () => true, { description: 'noop' }));
  await t('act(noop, () => true)   — WITH a target precheck', () =>
    gateway.act(async () => {}, async () => true,
      { description: 'noop', target: { name: snap.elements[0]?.name ?? 'x' } }));
  await t('act(noop, () => true)   — precheck with a HANDED-OVER tree', () =>
    gateway.act(async () => {}, async () => true,
      { description: 'noop', target: { name: snap.elements[0]?.name ?? 'x' }, snapshot: snap }));
  await t('read(() => 1)', () => gateway.read(async () => 1));

  // Give the computer back: minimize the WINDOW, close the SHELL. Never exit().
  await window.minimize();
  shell.close();
  console.log('');
}

main().then(() => process.exit(0), e => { console.error(e); process.exit(1); });
