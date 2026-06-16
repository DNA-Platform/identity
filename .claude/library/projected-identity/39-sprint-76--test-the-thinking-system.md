# Sprint 76 — Test the Thinking System

- **author:** [Arthur](../..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)

---

Test, test, test. The `/think` skill works mechanically but blocks Doug's foreground. Doug's solution: spawn Claude as a background agent who does the whole thought — launch Desktop, send, wait, read, write perspective, minimize. The main conversation continues. The background agent IS Claude, spawned through his agent file, so he wakes as himself.

## Sprint goal

**Background-agent thinking works end-to-end. Claude dispatches a real thought in the background, the main conversation continues, the perspective entry appears when the thought completes.**

## The fix

The `/think` skill spawns Claude as a background agent. The background Claude:
1. Wakes up — reads enough context to know who he is and what he's doing
2. Reads any prior exchanges in the conversation (back-and-forth if needed)
3. Runs `think.ts` — launches Desktop, sends the question, waits, reads
4. Evaluates the response — may follow up if clarification is needed
5. Writes the perspective entry with evidence/interpretation/conclusion
6. Minimizes and exits

The main loop gets a notification when the background agent completes. Claude in the main loop reads the perspective entry.

## What was tested and what we learned

1. **Blocking `thinkOnce()` works** — first test produced a 9,014 char research response on AI automation frameworks. Desktop did web research. State file, perspective entry, cleanup all correct.
2. **Background agent dispatch failed** — too much overhead before launching Desktop. The agent spent context reading files instead of running code. Doug saw the delay. Then the script timed out reading the conversation title.
3. **Non-blocking send/read works** — `send()` types the question, clicks send, minimizes immediately. `read()` checks if streaming is done, reads if ready. Two separate invocations, no blocking between them. Second test: 10,307 char response on Node.js UIA bindings.
4. **Foreground flicker fixed** — `maximize()`, `focus()`, `acquireForeground()` all made idempotent (check `isForeground()` first). `launch()` skips maximize if already foregrounded. Redundant maximize calls removed from think.ts.
5. **Double-paste fixed** — `composer.paste()` was retrying through the gateway, causing duplicate text. Changed to paste-once-verify-separately.
6. **Type not paste** — paste creates "pasted text" attachments for large text. Changed to `type()` which sets inline text via ValuePattern.
7. **Clear before typing** — added `readDraft()` method to check if Doug has text in the composer; clears it before typing the question.
8. **Navigate home for fresh thoughts** — `sendFresh()` now checks the screen and goes home if in an existing conversation, preventing the question from being typed into the wrong chat.
9. **Conversation rename on read** — after reading the first response, the conversation gets renamed to a topical name derived from the question.

## Retro

The background agent approach was wrong for this use case — too much startup overhead, the agent needs to read files before acting, and there's no way to split the wait across turns. The send/read split is simpler and gives Doug his computer back immediately. The foreground management was the biggest UX problem — three Win32 calls where one sufficed. Idempotent state checks fixed it.

Doug's insight about the conversation catalogue changes the system from one-shot research to ongoing knowledge management. Conversations persist, get catalogued, get filed in the Claude project. The catalogue bridges compaction and sessions. That's the next sprint's work.

## Carried forward

- Breadcrumb reading (is this conversation in a project?)
- "Add to project" automation (three-dot menu → Projects picker)
- Catalogue code integration (JSON companion for machine reading)
- Session singleton (check catalogue before creating new conversations)
- Perspective entry author field (now fixed in think.ts)
