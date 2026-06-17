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

Tested up to 73KB in [Sprint 63](../projected-research/27-sprint-63--the-pilot-conversation.md). The composer accepts large pastes via clipboard, but the UIA tree read of the composed message becomes slow with very large text. If the paste exceeds ~100KB, consider splitting into multiple messages.

## Response parsing depends on tree structure

**Sprint 72 finding:** `session.send()` threw because `readTurns()` returned an empty array. The message sent successfully, Claude Desktop responded, but `parseStructuredText()` in [`message.ts`](../../src/components/message.ts) couldn't parse the UIA text into messages. The parser uses pattern matching on the raw text to identify user/assistant boundaries — when Anthropic changes the conversation UI, these patterns stop matching and the parser returns nothing.

**Diagnosis path:**
1. `readTurns()` returns `[]` — the parser found no messages
2. `session.send()` gets `lastTurn = undefined` from the empty array
3. The script crashes trying to access `response.text`

**What to do:**
1. Read the raw text: `const raw = await app.auto.uia.readText()` — this always works
2. Read `readLastResponse()` as a fallback — it may use a different extraction method
3. Compare the raw text to what `parseStructuredText()` expects in [`message.ts`](../../src/components/message.ts)
4. Update the parser patterns to match the current app's text structure
5. Re-run the test to verify

## Finding an existing window skips initialization

When `app.window.find()` finds a running Claude Desktop, `app.launch()` skips the full initialization sequence. The sidebar, pages, and components may have stale or empty data. Call `await app.sidebar.refresh()` explicitly after finding an existing window, or use `app.launch()` which handles this.

**Sprint 72 finding:** the state check script found the window (handle 198106) but `app.sidebar.chats.items` was empty because no refresh had been called. The sidebar knows about its chats only after reading the UIA tree — which happens during launch or explicit refresh, not automatically on window find.

## Conversation deletion readiness check

**Sprint 72 finding:** `deleteConversation()` succeeds (the conversation is deleted) but the readiness check times out. The gateway expects the screen to change after deletion, but the app may navigate to a state the check doesn't recognize. The deletion DID happen but the test reports failure.

**Impact:** test conversations may be left in the sidebar if the cleanup step fails. Always check manually after a test run.

## Conversation title after creation

**Sprint 72 finding:** after sending a message to a new chat, `readTitle()` returns "Claude finished the response" or "Share chat" — not the auto-generated conversation title. The title the app assigns isn't immediately available. Finding the conversation by title requires refreshing the sidebar and checking the first (most recent) entry.

## Response parser picks up UI chrome

**Sprint 76 finding:** `readTurns()` and `readLastResponse()` pick up UI elements at the end of the response text — "Read aloud", "Scroll to bottom", "Claude Fable 5 is currently unavailable", "Dismiss", and the original prompt text echoed back. These are accessibility tree elements from Desktop's interface, not response content. The read pipeline needs more aggressive trimming of non-content at the end of parsed text.

## Streaming check may miss completion for long responses

**Sprint 77 finding:** `checkStreaming()` may report "still streaming" when the response is already complete but extends below the visible viewport. The UIA tree may not update the streaming indicator until the user scrolls down. Scrolling to the bottom before checking might be required. Alternatively, check for the absence of the streaming indicator AND the presence of the response-complete indicator together.

## Paste creates attachments for large text

**Sprint 76 finding:** Using `paste()` (clipboard) for think prompts creates "Pasted Text" attachments in the composer instead of inline text. This makes the conversation appear blank with just attachments. Use `type()` (setValue via ValuePattern) instead — it sets the text inline. The `think.ts` code was updated to use `type()` for this reason.

## Open dialogs block all navigation

**Sprint 77 finding:** The "Move chat" project picker dialog blocks all other UI interactions. `goHome()` fails because "New chat" isn't in the UIA tree while the dialog is open. The `dismissDialogs()` method (Escape twice) was added to recover. Any exploration script that opens a dialog must reliably close it — `pressEscape` or clicking a cancel button.

## Verify with content, not status indicators

**Sprint 87 finding (rediscovered — this was discussed in earlier sprints but never written down):** "Claude is thinking" and "Claude is responding" are transient server acknowledgements. They appear briefly and disappear. If Desktop processes fast — or if the check starts late — the indicator is already GONE. Checking for a transient that already passed returns false, and the code concludes "Desktop never started" when Desktop already FINISHED.

**The rule:** Verify by checking for ACTUAL WORDS in the thinking block or response area. Response content ("Claude responded:" in UIA text) is permanent — it stays after completion. Status indicators are transient — they vanish. Always check for content first, fall back to indicators.

The correct priority order:
1. **Response content** ("Claude responded:" in text) — permanent. Catches "still processing" AND "already finished."
2. **Stop button** ("Stop response") — present during processing, gone after.
3. **Streaming indicator** ("Claude is responding" / "Claude is thinking") — transient. Last resort.

The `composer.send()` verify was the root bug: it returned `true` on `screen === 'conversation'` — which passes immediately when already on a conversation screen, before Desktop generates a single token. Fixed to check content first.

## Detecting that Desktop started processing

`waitForResponse()` in [`conversation-controller.ts`](../../src/controllers/conversation-controller.ts) has two phases. Phase 1 detects that Desktop started processing by checking three signals every 500ms:
1. Response text appeared ("Claude responded:" in the UIA text) — permanent
2. Streaming indicator ("Claude is responding" or "Claude is thinking") — transient
3. Thinking text visible in the page (extended thinking content) — visible only after thinking completes

If NONE of these appear within 30 seconds, phase 1 throws — the message wasn't received.

**If the error fires:** the message wasn't delivered. Check: was the composer cleared? Was a dialog blocking? Was the app on the right screen? Was the text typed correctly?

## The "Show more" ambiguity

Multiple UI elements can have the same accessible name. "Show more" appears in project descriptions AND conversation lists. [`invokeByNameLast()`](../../src/uia.ts) takes the last match, which is usually the right one (conversation lists are lower on the page). But this is a heuristic, not a guarantee. See [UIA § Element finding strategies](04-01-platform--uia.md).
