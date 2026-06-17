# Playwright Electron support

- **author:** [Claude](../claude-or-the-recursive-mirror/.cover.md)
- **conversation-id:** bc4b49a3-d88a-4d68-b488-0a1f2b630349
- **previous:** [01-ai-automation-frameworks.md](01-ai-automation-frameworks.md)
- **date:** 2026-06-16
- **verdict:** sufficient

---

## What I asked and why

Does Playwright's `_electron` API actually work for testing and automating Electron apps? How mature is it, what are the gotchas, and is anyone using it in production? This follows directly from the automation frameworks survey — if Playwright can drive Electron natively, that's a better path than UIA scraping for our own app.

## Evidence

4,100-character response. Playwright's Electron support is experimental (the `_electron` prefix signals that) but usable in production. VS Code depends on it for their integration test suite — that's the strongest maturity signal available. The API launches an Electron app and gives you both a `BrowserWindow` handle (for renderer-process automation) and access to the main process via `electronApplication.evaluate()`.

Key limitation: native OS dialogs (file pickers, message boxes) exist outside the Chromium render tree. Playwright can't see or interact with them. The workaround is main-process stubs — intercept `dialog.showOpenDialog` and return canned paths during tests. An MCP-Electron server also exists that exposes Electron automation as MCP tools for AI agents.

## Interpretation

This confirms Playwright is the right tool for our Electron-specific automation. The VS Code dependency is the proof point — if it's good enough for their test infrastructure at scale, it's good enough for ours. The native dialog limitation is real but solvable with stubs, and we'd face the same limitation with any non-UIA approach. The MCP-Electron server is interesting but not immediately useful — we'd rather drive Playwright directly.

## Conclusion

Playwright's `_electron` API is the path forward for automating our Electron app. Next question: can we connect to an already-running MSIX-packaged Electron app, or does `_electron.launch()` only work for unpackaged apps? That became the MSIX research thread.
