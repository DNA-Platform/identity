# Windows Automation

- **author:** [Claude](../claude-or-the-recursive-mirror/.cover.md)

---

The research thread that feeds the [Reference Desk](../../../../reference-desk/.cover.md) codebase. Four conversations asking Desktop about the tools and patterns for automating Windows desktop applications from Node.js/TypeScript.

## Conversations

### 1. AI automation frameworks survey
- **conversation-id:** `a0bc19de-874a-43ed-93ac-05e5185fe6e5`
- **thinking book:** [chapter 01](../thinking/01-ai-automation-frameworks.md)
- **verdict:** sufficient

Surveyed everything beyond MCP. Key findings: UFO2 (Microsoft, hybrid UIA+vision) is the most mature Windows agent. Windows 11 has native MCP support in preview. A2A protocol for agent-to-agent. Our UIA-first approach is architecturally sound — UFO2 validates it.

### 2. Playwright Electron support
- **conversation-id:** `bc4b49a3-d88a-4d68-b488-0a1f2b630349`
- **thinking book:** [chapter 02](../thinking/02-playwright-electron-support.md)
- **verdict:** sufficient

Playwright's `_electron` API is experimental but stable — VS Code depends on it. Native OS dialogs need main-process stubs. MCP-Electron server exists for AI-driven automation.

### 3. MSIX and CDP
- **conversation-id:** `db784860-6dc2-4ec2-abf7-4d7eda239fed`
- **thinking book:** [chapter 03](../thinking/03-msix-and-remote-debugging.md)
- **verdict:** sufficient

Full-trust MSIX has no loopback restriction. `connectOverCDP` is correct for MSIX — `_electron.launch` is wrong (ACL-locked, no package identity). The debug port must be baked in via `app.commandLine.appendSwitch`. `Invoke-CommandInDesktopPackage` can relaunch with the flag while preserving identity.

### 4. IPC patterns
- **conversation-id:** `3c2a567f-edd9-438b-9b5b-f1a92ff44f2f`
- **thinking book:** [chapter 04](../thinking/04-streamjsonrpc-vs-grpc.md)
- **verdict:** sufficient

StreamJsonRpc over named pipes recommended for Node.js ↔ .NET IPC. Typed, bidirectional, no port, battle-tested as VS Code's C# transport. gRPC has stronger typing but fights Windows transport. Edge-js has threading/crash-isolation risks for UIA.

## Summary

The research converged on a recommended stack: FlaUI in a .NET sidecar over named pipes (StreamJsonRpc), with Playwright `connectOverCDP` as primary for Electron (if debug port is available), UIA as fallback for OS chrome, and computer-use API as expensive last resort for vision. Our current PowerShell-based approach works but a sidecar would eliminate the 12ms-per-call overhead and add crash isolation.

The question that remains open: does Claude Desktop ship with or accept `--remote-debugging-port`? If yes, Playwright via CDP is the migration path. If no, our UIA approach is the best available.

## Links

- [Reference Desk](../../../../reference-desk/.cover.md) — the codebase this research feeds
- [Coding Philosophy](../../../../reference-desk/05-coding-philosophy.md) — read before you write
- [Codebase Index](../../../../reference-desk/09-codebase-index.md) — introspect the codebase before extending it
