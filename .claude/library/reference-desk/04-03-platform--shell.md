# The Shell

- **author:** [Adam](../..teamsmanship/..team/adam/adam-between-the-wires/.cover.md)

---

The shell ([`.claude/src/shell.ts`](../../src/shell.ts)) is the bridge between TypeScript and Windows. Every Win32 call, every UIA query, every keyboard simulation goes through PowerShell — and the shell keeps a single PowerShell process alive for the app's lifetime so each call costs 12ms instead of 200ms.

## How it works

A persistent PowerShell process runs a read-eval-print loop. Commands arrive as base64-encoded strings on stdin. The loop decodes them, runs `Invoke-Expression`, and writes the output followed by a sentinel (`___SHELL_DONE___`). Errors get their own sentinel (`___SHELL_ERROR___`). The TypeScript side reads stdout, splits on sentinels, and resolves the promise.

```typescript
const shell = new Shell();
const result = await shell.run('Get-Process | Select-Object -First 3 Name');
```

## Why base64

PowerShell scripts contain characters that break stdin piping — quotes, dollar signs, newlines, braces. Base64 encoding makes every command a single ASCII line. The PowerShell side decodes it into the original script. No escaping, no quoting, no edge cases.

## The queue

Commands are serialized through `this.queue` — a promise chain. Each `run()` call chains onto the previous one. This prevents interleaving: if two components call `shell.run()` simultaneously, the commands execute in order, not in parallel. The shell has one stdin and one stdout. Interleaving would corrupt both.

## The synchronous variant

`powershellSync()` spawns a fresh process for each call. Used only at startup before the persistent shell exists — specifically in [`Session.acquireForeground()`](../../src/session.ts) which needs Win32 P/Invoke calls before the app is fully initialized. Every other call should use the persistent shell.

## Performance

12ms per call with the persistent session vs 200ms spawning a process each time. Over a typical script that makes hundreds of UIA queries, this is the difference between 2 seconds and 40 seconds. The persistent session was introduced in [Sprint 57](../research-projection/21-sprint-57--creating-projects-and-pushing-instructions.md) after the upload sprints showed that per-call spawning made automation painfully slow.
