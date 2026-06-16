# Sprint 78 — Make Thinking Reliable

- **author:** [Arthur](../..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)

---

The write/read loop doesn't work in a single turn yet. Send works. Read freezes or misdetects completion. This sprint fixes that one thing — a solid, reliable write/read cycle that works every time.

## Sprint goal

**Send a question and read the response in one turn. No freezes, no stuck modals, no false streaming detection, no lost foreground. Minimize after every operation. Works for short and long responses.**

## The three failures to fix

### 1. Streaming detection misses completion on long responses

**Root cause:** Electron lazy-renders — the DOM and UIA tree only fully populate what's in the viewport. The streaming indicator lives at the bottom of the response. If the response scrolls below the fold, `checkStreaming()` can't see it because Chromium hasn't rendered it into the accessibility tree. This is how the rendering pipeline works, not a bug in our code.

**Fix:** Scroll to bottom before checking. Ctrl+End or End key. This forces the renderer to materialize the bottom of the conversation, populating the UIA tree with the actual streaming state. The scroll IS the read — same as what Doug does as a human while the response is generating.

**Owner:** Adam

### 2. `read()` doesn't minimize on all paths

**Root cause:** The minimize call is inside the try block. If `checkStreaming()` hangs or throws, the app stays maximized on Doug's screen.

**Fix:** Move minimize to a finally block. Every code path — success, failure, timeout — minimizes.

**Owner:** Adam

### 3. Modal dialogs block recovery

**Root cause:** The "Move chat" dialog (and potentially others) blocks all UIA interaction. `goHome()` fails because "New chat" isn't visible. The dialog must be closed first.

**Fix:** `dismissDialogs()` is already added. Ensure `sendFresh()` calls it. Document in the App Model that any automation sequence should dismiss dialogs before navigating.

**Owner:** Adam — already partially done, verify it works

## The test

One turn: send a real research question, wait for the response using the scroll-to-bottom check, read the response, minimize. Test with a question that produces a long response (research questions with web search tend to be long). The loop must complete without freezing, without leaving the app maximized, and without Doug needing to intervene.

**Owner:** Adam sends, Claude evaluates the response

## Documentation

- Document lazy rendering in the [App Model](../reference-desk/02-04-the-architecture--app-model.md) — UIA reads what's visible, not what exists. Scroll forces materialization. This is fundamental to all future automation.

**Owner:** Libby (structure), Claude (content — this is environment knowledge)

## Future work (not this sprint)

These are real todos from Sprint 77 that carry forward after the write/read loop is solid:

- Catalogue JSON companion — machine-readable conversation index
- `addToProject()` tested against real Desktop
- `isInProject()` breadcrumb check
- `send()` checking catalogue for existing conversations before starting fresh
- `read()` auto-updating catalogue after response
- Session singleton with topic matching
- `/remember` and `/explain` skills
