# Sprint 33 — The Foundation

The first sprint of the Claude account migration project. We connect to Claude Desktop, prove the tooling, and establish the object model.

## Sprint goal

**`npm run dev` launches Claude Desktop with CDP, connects via Playwright, and prints what it sees. The object model mirrors the app as a human uses it — screens, not abstractions.**

## Context

- **Target:** Claude Desktop (Electron app), connected via Chrome DevTools Protocol on `localhost:9222`
- **Transport:** Playwright's `connectOverCDP` — same tools as the browser world, pointed at the desktop app
- **Language:** Node.js (ES modules). Playwright is a Node library; the driver should be too.
- **Code location:** `.claude/agents/src/` — the `@dna-platform/claude` package
- **Team:** Arthur (architecture), Claude (driver lead, interaction expert), Adam (automation, CDP experience), Libby (documentation, library)
- **Library books to consult:** [Claude Driver], [Coding Policy], [Claude Migration]

## Stories

### Setup

| ID | Story | Owner | Status |
|----|-------|-------|--------|
| S-1 | Install Playwright + Chromium | Adam + Claude | ✅ Done — `playwright-core` + Chromium installed |
| S-2 | Configure `.mcp.json` with CDP endpoint | Claude | ✅ Done — `--cdp-endpoint http://localhost:9222` |
| S-3 | Scaffold Node.js package | Arthur | ✅ Done — `package.json`, `npm run dev`, ES modules |

### Connect

| ID | Story | Owner | Description |
|----|-------|-------|-------------|
| C-1 | Launch Claude Desktop with CDP | Adam + Claude | Idempotent: detect if running, check CDP availability, launch with `--remote-debugging-port=9222` if needed. Warn if app is running without CDP. |
| C-2 | Connect via Playwright | Claude | `chromium.connectOverCDP('http://localhost:9222')` — get the page, confirm connection |
| C-3 | First snapshot | Claude | Take an accessibility tree snapshot and a screenshot. Save to Claude's `.perspective/`. Confirm we can see the app's DOM. |

### Object model

| ID | Story | Owner | Description |
|----|-------|-------|-------------|
| M-1 | `ClaudeApp` entry point | Arthur + Claude | `app.launch()` → idempotent launch + CDP connect. `app.currentScreen` → which screen is showing. `app.snapshot()` → accessibility tree. `app.screenshot()` → PNG. |
| M-2 | Screen detection | Claude | Read the accessibility tree or DOM to determine which screen the app is on (home, conversation, project, settings). |

### Documentation

| ID | Story | Owner | Description |
|----|-------|-------|-------------|
| D-1 | Perspective entries | All | Each active team member writes at least one perspective chapter about what they observed during the sprint. Written by the author. |
| D-2 | Autobiography updates | All | Each person adds a sprint reflection chapter. Written by the author. |
| D-3 | Library updates | Libby | Update objective books as decisions change. Remind team about conventions. Do not write in others' autobiographies. |

## Definition of done

- [ ] `npm run dev` runs without errors when Claude Desktop has CDP enabled
- [ ] The app connects to Claude Desktop and reads the accessibility tree
- [ ] At least one screenshot saved to a team member's `.perspective/`
- [ ] `ClaudeApp` object model has `launch()`, `snapshot()`, `screenshot()`, `currentScreen`
- [ ] The Node.js code follows the [Coding Policy]
- [ ] Autobiography chapters updated with sprint learnings

## How to test

```powershell
# 1. Close Claude Desktop if running
# 2. Relaunch with CDP:
& "C:\Program Files\WindowsApps\Claude_1.6608.1.0_x64__pzs8sxrjxfjjc\app\claude.exe" --remote-debugging-port=9222
# 3. Run the driver:
cd .claude/agents && npm run dev
```

Expected output: "Claude Desktop is ready. Screen: home"

## Constraints

- **Name tags on all messages.**
- **Authorship sovereignty.** Each person writes their own autobiography and perspective entries.
- **Coding policy.** Follows [Coding Policy] — verb-noun naming, one concern per file, semantic selectors, no magic constants.
- **Collaboration.** Adam and Claude share driver territory. They discuss, they don't silo.

## Superseded work

The PowerShell spike (`claude-driver.ps1`) proved process detection and idempotent launch. Those concepts are now reimplemented in Node.js in [launch.js]. The PowerShell file remains as reference but is not the active driver.

<!-- citations -->
[Claude Driver]: ../reference-desk/.cover.md
[Claude Migration]: ../reference-desk/08-history.md
[Coding Policy]: ../reference-desk/05-coding-philosophy.md
[launch.js]: ../../src/claude.ts
