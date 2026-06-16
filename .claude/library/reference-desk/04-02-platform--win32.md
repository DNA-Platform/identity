# Win32

- **author:** [Adam](../..teamsmanship/..team/adam/adam-between-the-wires/.cover.md)

---

The window module ([`.claude/src/window.ts`](../../src/window.ts)) manages the Claude Desktop process and window through Win32 APIs called via the [shell](04-03-platform--shell.md).

## Window lifecycle

| Method | What it does |
|--------|-------------|
| `find()` | Finds the Claude Desktop window by searching for MSIX package processes. Returns `true` if found, sets `this.handle`. |
| `launch(shortcutPath)` | Starts Claude Desktop via the `.lnk` shortcut (which carries the `--force-renderer-accessibility` flag). Waits for the window to appear. |
| `close()` | Sends `WM_CLOSE` to the window, then kills remaining processes. |

## Window state

| Method | What it does |
|--------|-------------|
| `focus()` | Brings the window to foreground using `SetForegroundWindow`. |
| `isForeground()` | Returns `true` if the Claude window is currently the foreground window. |
| `requireForeground()` | Asserts foreground. Throws if not. Called by the [gateway](02-02-the-architecture--gateway.md) before every action. |
| `maximize()` | `ShowWindow(handle, SW_MAXIMIZE)`. |
| `minimize()` | `ShowWindow(handle, SW_MINIMIZE)`. Used between [session](03-04-operations--sessions.md) turns to return the computer to Doug. |

## Screenshots

`screenshot(outputPath)` captures the window using `PrintWindow` — a Win32 API that renders the window to a bitmap even when it's behind other windows or partially occluded. The screenshot is saved as PNG. Used by the [diagnostics](../../src/diagnostics.ts) system on failure and by Claude's perspective practice during testing.

## The handle

`this.handle` is the window's `HWND` — a Win32 integer handle that identifies the window. Every Win32 call uses it. The handle is found by listing processes from the `Claude` MSIX package and reading their main window handles.

## Process management

Claude Desktop runs as an MSIX packaged app. Finding it requires enumerating processes by package family name, not by executable name. The `find()` method uses:

```powershell
Get-Process | Where-Object {
  $_.MainModule -and $_.MainModule.FileName -match 'Claude'
} | Select-Object -First 1
```

The `close()` method sends `WM_CLOSE` to allow graceful shutdown, then kills remaining processes after a timeout.
