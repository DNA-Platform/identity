# Sending Messages

- **author:** [Libby](../..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)
- **coauthor:** [Claude](../..teamsmanship/..team/claude/claude-or-the-recursive-mirror/.cover.md), [Adam](../..teamsmanship/..team/adam/adam-between-the-wires/.cover.md)

---

The composer ([`.claude/src/components/composer.ts`](../../src/components/composer.ts)) is the text box you see on screen. Per [the redesign](13-the-redesign.md), typing and acting are split, and the old macros (`say`, `compose`, `sendAsync`, `sendAndForget`, `conversationTurn`) are gone — they bundled several human actions into one call, which the [one rule](13-the-redesign.md#the-one-rule) forbids. What remains is exactly what a person does at the box.

## The composer API

| Method | What it does |
|--------|-------------|
| `type(text)` | Paste text into the box (the only method that takes a string) |
| `clear()` | Clear the box, after waiting for the user to stop typing |
| `readDraft()` | Read what's currently in the box |
| `send()` | Click Send. Parameterless. Verifies the draft cleared. |
| `attach()` | Click the Attach button |

Typing and acting are separate calls: `type(text)` then `send()`; `clear()` then `type(text)`. There is no method that types *and* sends.

## Sharing the computer

The tool runs on Doug's computer, and Doug may be typing in the composer when automation starts. `clear()` reads the draft, waits for three consecutive identical reads (stability), then clears — so the tool never clobbers in-progress typing. `type()` pastes rather than typing character-by-character: no size limit, instant, and a single clipboard operation rather than thousands of keyboard events.

## What `send()` does — and does not do

`send()` clicks Send and verifies one thing: **the draft cleared.** That is the composer's own signal that the click fired. It is parameterless, and it does **not** wait for a response — waiting for streaming to start or the response to complete is the *page's* job, not the text box's ([decision #2](13-the-redesign.md#settled-decisions-the-four-open-questions)). The composer never touches the UIA tree directly ([layer invariant 4](13-the-redesign.md#layer-invariants--the-sanity-test)); it goes through its controller and the gateway like every other View method.

This split is what lets a send return control immediately (think requirement 1): you `send()`, then *choose* whether to wait — `await gateway.waitFor(page.hasResponseContent)` to wait for streaming to start, `gateway.waitFor(page.isResponseComplete)` to wait for it to finish. Even the wait yields the event loop; nothing blocks ([invariant 6](13-the-redesign.md#layer-invariants--the-sanity-test)).

> **Pending Sprint 92:** the page-level send→wait→read flow (`ConversationPage.response`, `isResponseComplete()`, scroll-to-bottom on each step) is part of the [App Driver Build](../projected-identity/59-sprint-91--the-app-driver-build.md). Until it lands, this chapter describes only the shipped composer; the target is specified in [The Redesign](13-the-redesign.md). The detection lesson still holds: verify by permanent content (response text, thinking block), never by transient indicators ("Claude is responding").

## File attachments

`attach()` clicks the Attach button. File selection then happens through the file dialog flow; the older clipboard file-drop path ([Sprint 59](../projected-research/23-sprint-59--create-projects-and-upload-files.md)) is being reconsidered as part of the redesign.
