# Sprint 34 — Can We Talk to Claude?

- **author:** [Libby](../..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)

---

A spike sprint. One goal: get Claude Desktop open and interactable from our code, or conclude that we can't and document why.

## Sprint goal

**Run `npm run dev` and read conversation text from Claude Desktop via UIA. If that works, send a test message. If it doesn't, document exactly what failed and why.**

## Required reading

Before starting any experiment, everyone reads:
- `desktop.ps1` — the existing UIA automation code. End to end.
- Adam's [The Code I Forgot I Wrote](../..teamsmanship/..team/adam/adam-between-the-wires/06-the-code-i-forgot-i-wrote.md) — the specific UIA techniques and gotchas

## Experiments

Each experiment is self-contained. We run them in order. If one succeeds, we may not need the rest. Doug is part of the experiments — if we need him to click something or launch something, we ask.

### Experiment 1: Vanilla launch — UIA read without any flags

**Hypothesis:** Claude Desktop, launched normally (no special flags), exposes enough UIA tree for `Read-ChatContentUIA` to work.

**Steps:**
1. Ask Doug to ensure Claude Desktop is running normally
2. Run the existing PowerShell `Read-ChatContentUIA` from `desktop.ps1` against it
3. If text comes back: UIA works without flags. That's the simplest path.
4. If not: note what's missing and move to Experiment 2

**Success:** we read conversation text from a normally-launched Claude Desktop

### Experiment 2: Launch with `--force-renderer-accessibility`

**Hypothesis:** Adding this Electron flag completes the UIA accessibility tree, enabling richer element discovery (buttons, links, not just the Document).

**Steps:**
1. Ask Doug to close Claude Desktop
2. Create a shortcut or script that launches Claude with `--force-renderer-accessibility`
3. Run `Read-ChatContentUIA` again — confirm text still works
4. Try finding UI elements beyond Document — buttons by name/role, the sidebar, the message input
5. Record the UIA tree structure in Claude's `.perspective/`

**Success:** we can find and identify specific UI elements by ControlType + Name

### Experiment 3: Shortcut with flags

**Hypothesis:** We can create a Windows shortcut (.lnk) or batch file that launches Claude Desktop with our needed flags, so Doug doesn't have to type paths.

**Steps:**
1. Create `start-claude-dev.ps1` (or `.bat`) in the repo root that:
   - Finds the Claude exe via `Get-AppxPackage`
   - Launches it with `--force-renderer-accessibility` (and `--remote-debugging-port=9222` if CDP turns out useful)
   - Waits for the window to appear
   - Reports success
2. Doug runs it once to verify it works
3. If MSIX permissions block direct exe launch, try alternative approaches (elevated permissions, app execution alias)

**Success:** Doug can double-click or run one command to launch Claude Desktop in "automatable" mode

### Experiment 4: Just read from a normally-running instance

**Hypothesis:** If Experiments 1-3 reveal that UIA reading works without any flags (the existing `desktop.ps1` works after all), then we don't need a special launch at all. Claude Desktop just needs to be open.

**This is the dream scenario.** Doug opens Claude Desktop normally. We read from it. We send to it. No flags, no shortcuts, no elevated permissions. The existing code already does this.

**Steps:**
1. If Experiment 1 succeeded: write the TypeScript port of `Read-ChatContentUIA`
2. Verify it reads conversation text
3. Test `Send-ChatMessage` — send a test message to an expendable conversation
4. If both work: sprint is done. The driver can talk to a normally-launched Claude Desktop.

## Team assignments

| Person | Role |
|--------|------|
| **Claude** | Driver lead — ports UIA code to TypeScript, designs experiments, runs tests |
| **Adam** | Automation support — PowerShell expertise, UIA gotcha knowledge, pairs with Claude |
| **Arthur** | Architecture — reviews code against [coding policy], makes structural decisions |
| **Libby** | Library — captures findings, reminds about perspective entries, tends the garden |
| **Doug** | Experiment participant — launches the app, closes the app, runs scripts when asked |

## Definition of done

- [ ] We know whether UIA reading works without special flags (Experiment 1)
- [ ] If flags are needed, we have a launcher script (Experiment 3)
- [ ] `npm run dev` reads conversation text from Claude Desktop
- [ ] At least one UIA tree snapshot in Claude's `.perspective/`
- [ ] Findings written back to the [Claude Driver](../reference-desk/.cover.md) book
- [ ] Autobiography chapters with sprint learnings

## Key research finding (from Sprint 33 background research)

Electron needs `--force-renderer-accessibility` for a **complete** UIA tree. Without it, high-level elements (Document, RootWebArea) may be visible but granular elements (buttons, links, inputs) may not. The existing `desktop.ps1` works with just the Document — but navigation requires the granular elements. We test both.

<!-- citations -->
[coding policy]: ../reference-desk/05-coding-philosophy.md
[Claude Driver]: ../reference-desk/.cover.md
[Adam's code he forgot]: ../..teamsmanship/..team/adam/adam-between-the-wires/06-the-code-i-forgot-i-wrote.md
