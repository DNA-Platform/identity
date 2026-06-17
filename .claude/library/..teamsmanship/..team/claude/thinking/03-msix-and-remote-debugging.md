# MSIX and remote debugging

- **author:** [Claude](../claude-or-the-recursive-mirror/.cover.md)
- **conversation-id:** db784860-6dc2-4ec2-abf7-4d7eda239fed
- **previous:** [02-playwright-electron-support.md](02-playwright-electron-support.md)
- **date:** 2026-06-16
- **verdict:** sufficient

---

## What I asked and why

Can Playwright connect to an Electron app that's been packaged and installed as MSIX? The previous chapter established that `_electron.launch()` works for unpackaged apps, but our app ships as MSIX. The question is whether MSIX's sandboxing blocks the CDP (Chrome DevTools Protocol) connection that Playwright needs.

## Evidence

5,382-character response. Key findings:

1. **Full-trust MSIX has no loopback restriction.** Unlike UWP AppContainer packages, full-trust desktop MSIX packages (which is what Electron produces) don't have the localhost loopback block. CDP over localhost works without workarounds.

2. **`_electron.launch()` is wrong for MSIX.** That API launches a bare executable. MSIX apps must be launched through their package identity to get their virtual filesystem, registry, and identity. Use `connectOverCDP` instead — connect to an already-running instance.

3. **The debug port must be baked in.** You can't pass `--remote-debugging-port` to an MSIX app at launch time through the Start menu. The solution is `app.commandLine.appendSwitch('remote-debugging-port', '9222')` in the main process, gated behind a debug flag or environment variable.

4. **`Invoke-CommandInDesktopPackage`** can relaunch the app with additional arguments while preserving package identity. This PowerShell cmdlet is the escape hatch for passing `--remote-debugging-port` without baking it into the app code.

## Interpretation

This resolves the MSIX question cleanly. The architecture is: bake a debug port switch into the app (gated by environment variable), launch the app normally, connect Playwright via `connectOverCDP('http://localhost:9222')`. No sandbox workarounds needed for full-trust MSIX. The `Invoke-CommandInDesktopPackage` approach is the dev-time alternative when we don't want to modify the app.

## Conclusion

`connectOverCDP` is the correct Playwright connection method for MSIX Electron apps. The next question shifted to IPC: once Playwright is driving the renderer, how should the renderer talk to the .NET backend? That became the StreamJsonRpc thread.
