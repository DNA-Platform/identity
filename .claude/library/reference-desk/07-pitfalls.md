# Pitfalls

- **author:** [Adam](../..teamsmanship/..team/adam/adam-between-the-wires/.cover.md)
- **coauthor:** [Claude](../..teamsmanship/..team/claude/claude-or-the-recursive-mirror/.cover.md)

---

Bugs we hit, lessons we forgot, and how to avoid them. This chapter is alive — add to it when something breaks. Source: dna-library driver ch 13, plus findings from the Sprint 72 test run.

## The app changes under you

Claude Desktop is an Electron app that updates regularly. UI elements get renamed. URLs change. New dialogs appear. Old ones disappear. The [coding philosophy](05-coding-philosophy.md) says target semantics not presentation — but even semantic identifiers change when Anthropic redesigns the app.

**Sprint 72 finding:** `goToSettings()` fails with "readiness check timed out." The gateway correctly executes the action (clicks the settings button) but the URL-based screen detection for `/settings` no longer matches. The app's settings URL may have changed. The fix: check the actual URL the app navigates to and update [`navigator.ts`](../../src/navigator.ts)'s `screenFromUrl()` method.

**What to do when a test fails:**
1. Take a screenshot — `app.screenshot('.claude/debug/failure.png')`
2. Read the UIA tree — `const names = await app.auto.uia.allNames()` and print them
3. Read the URL — `const url = await app.auto.uia.readUrl()`
4. Compare what the code expects to what the app shows
5. Update the code to match the app — the app is the source of truth

## The `--force-renderer-accessibility` flag

See [UIA](04-01-platform--uia.md). Without it, the accessibility tree is empty. Every launch must include it. If the shortcut is regenerated without the flag, nothing works and the error is silence — no crash, no error, just empty tree reads.

## Foreground stealing on Windows

Windows actively prevents applications from stealing foreground focus. The Alt-key hack in [`session.ts`](../../src/session.ts) works around this by pressing Alt (which activates the menu bar) then calling `SetForegroundWindow`. This is fragile — Windows versions and security policies can change the rules.

## Clipboard collisions

The tool uses the clipboard for pasting text and uploading files. If Doug is using the clipboard at the same time, the paste will contain whatever Doug copied instead of what the tool intended. The [session](03-04-operations--sessions.md) minimizes the app between turns to reduce this window, but it's a fundamental limitation of clipboard-based automation.

## Large pastes

Tested up to 73KB in [Sprint 63](../research-projection/27-sprint-63--the-pilot-conversation.md). The composer accepts large pastes via clipboard, but the UIA tree read of the composed message becomes slow with very large text. If the paste exceeds ~100KB, consider splitting into multiple messages.

## The "Show more" ambiguity

Multiple UI elements can have the same accessible name. "Show more" appears in project descriptions AND conversation lists. [`invokeByNameLast()`](../../src/uia.ts) takes the last match, which is usually the right one (conversation lists are lower on the page). But this is a heuristic, not a guarantee. See [UIA § Element finding strategies](04-01-platform--uia.md).
