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

`powershellSync()` spawns a fresh process for each call. It exists for one-shot scripts that have no app and no shell — nothing in the driver should use it.

This paragraph used to say it was "used only at startup before the persistent shell exists — specifically in `Session.acquireForeground()`." **Both halves were false.** There is no such method on [`Session`](../../src/session.ts), and [`Window`](../../src/window.ts) used `powershellSync` for every one of its eleven methods, for the entire life of the process. The chapter described the intention; the code did something else; and because the chapter read as authoritative, nobody checked. See [pitfalls § A chapter that describes the intention](07-pitfalls.md).

## Performance

Measured on this machine, July 2026:

| | cost |
|---|---|
| persistent shell, trivial round trip | **0–1ms** |
| `powershellSync`, plain `Get-Process` | **~300ms** |
| `powershellSync` + inline `Add-Type` C# | **~440ms** |

Process startup dominates: the inline C# compile adds roughly 130ms on top of a 300ms floor that you pay for existing. That floor is why the persistent session was introduced in [Sprint 57](../projected-research/21-sprint-57--creating-projects-and-pushing-instructions.md), and it is why `Window` moving onto the shell took a do-nothing gateway action from **1675ms to 2ms**.

Two rules follow, and they are the whole chapter:

**Anything called more than once goes through the persistent shell.** The [gateway](02-02-the-architecture--gateway.md) calls `requireForeground()` before every action. At two spawns per check, the driver spent most of its life waiting for PowerShell to start.

**Declare P/Invoke types once, guarded.** `Add-Type` with inline C# invokes the C# compiler, and in a fresh process it is *always* the first time. Inside the persistent session, a `PSTypeName` guard means it compiles once and never again:

```powershell
if (-not ([System.Management.Automation.PSTypeName]'DriverWin32').Type) {
  Add-Type @' ... '@
}
```
