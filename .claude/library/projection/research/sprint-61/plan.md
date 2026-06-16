# Sprint 61 — Feedback, MCP Research, and App Hardening

Three parallel tracks. The automation sprints taught us we were flying blind. This sprint addresses that at every level: the code, the architecture, the knowledge, and the narrative.

## Track A — App hardening (Adam + Arthur)

Audit the entire `src/` codebase for interactions that bypass the gateway. Every raw UIA call that changes state must go through `gateway.act()` with a verification predicate.

| Story | Owner | Description |
|-------|-------|-------------|
| A-1 | Adam | Audit all controllers for raw `uia.invoke*`, `uia.click*`, `keyboard.sendKeys` calls that lack gateway verification. List every instance. |
| A-2 | Arthur | Design the pattern: every stateful interaction = `gateway.act(action, verify)`. Document it in the coding policy book. |
| A-3 | Adam | Fix the identified instances. Every button press confirms the expected UI appeared. Every navigation confirms arrival. Every dialog confirms it opened. |
| A-4 | Arthur | Review the navigator's `resetToHome()` — it should recover from ANY state. Test from: project page, settings, file detail view, open dialog, open menu, conversation. |

## Track B — MCP research (Claude)

Evaluate whether MCP servers replace or supplement the UIA approach for Claude Desktop automation.

| Story | Owner | Description |
|-------|-------|-------------|
| B-1 | Claude | Research available MCP servers for desktop/browser automation: `desktop-commander`, `playwright-mcp`, `puppeteer-mcp`, browser-automation servers. What exists? What does it do? |
| B-2 | Claude | Evaluate: could an MCP server handle the file dialog that UIA couldn't see? Could it handle the text content dialog more reliably? What about the Settings page? |
| B-3 | Claude | Compare: UIA approach (what we built) vs MCP approach (what exists). Where does each win? Is a hybrid best? |
| B-4 | Claude | Write findings as a chapter in the migration book or a new book. Include recommendation. |

## Track C — Library work: feedback in automation (Adam + Libby)

Write about what we learned about blind automation vs verified automation. This is the knowledge that should persist.

| Story | Owner | Description |
|-------|-------|-------------|
| C-1 | Adam | Write a new chapter or book about automation and feedback. The file dialog sprint. The covers that landed wrong. What it means to operate without confirmation. What the gateway pattern provides. The role of tapering polls. |
| C-2 | Libby | Write about the library's role in automation — the `..files/` format that held, the cover as canonical manifest, how the library structure enabled the upload pipeline. What worked because conventions existed. |
| C-3 | Adam + Libby | Discuss: what principles should guide future automation? Write them down as a reference in the library. Not code patterns — principles. "Every action needs confirmation." "Detect bad state before proceeding." "Recovery is not optional." |

## Reading list

Before starting any track, every team member reads:
- The gateway (`src/gateway.ts`) — understand `act()`, `waitFor()`, `read()`
- The navigator (`src/navigator.ts`) — understand screen detection and recovery
- The files pane (`src/components/files-pane.ts`) — the most recent example of gateway usage
- Doug's corrections from sprints 56-60 about feedback, state, and verification

## Success criteria

- Zero raw UIA calls that change state without gateway verification in the app
- MCP research written up with clear recommendation
- At least one new book or 2-3 new chapters in Adam's and Libby's libraries about automation and feedback
- `resetToHome()` tested from every known app state
