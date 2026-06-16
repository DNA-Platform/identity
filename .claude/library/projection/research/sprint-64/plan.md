# Sprint 64 — The Conversation Object Model

The app needs to model conversations the way the real app does. Not just send-and-read — the full lifecycle. Create, rename, delete, compose, stream, copy, track state.

## Context

Sprint 63 proved the conversation pipeline works: 73KB single-message paste, Claude-Chat engaged deeply, the compose/send/say interface is clean. But the pilot exposed gaps:

1. **No conversation management.** We can't rename or delete conversations. Every experiment leaves debris.
2. **No streaming input.** Clipboard paste works for text, but large pastes sometimes become attachments instead of inline messages. Need to understand and control this.
3. **Parser is broken.** `readLastResponse()` returns stale messages in multi-turn conversations. Extended thinking summaries leak into parsed text.
4. **No composer state.** We can't inspect what's been composed before sending, or build messages incrementally with verification.
5. **No message operations.** Can't copy individual messages, can't reliably count or index them.

## Goal

Build the conversation object model so the app has the same operations a human has. Claude writes perspective documents with domain language from screenshots and UIA exploration. Adam builds the code. Test against DNA Patternity.

## Stories

### Claude — Domain language and perspective

| Story | Description |
|-------|-------------|
| C-1 | Screenshot and document the conversation list (sidebar). What UIA elements exist for each conversation? What happens on right-click? What are the menu options? Write perspective. |
| C-2 | Screenshot and document the conversation page. Message anatomy: what UIA elements make up a message? How are user vs assistant messages distinguished? What about thinking blocks? Write perspective. |
| C-3 | Screenshot and document the composer in different states: empty, with text, with an attachment, with a large paste. When does paste become an attachment? Write perspective. |
| C-4 | Screenshot and document streaming: what changes in the UIA tree during thinking vs responding vs idle? What elements appear/disappear? Write perspective. |
| C-5 | Write a domain language document — human-prose description of the conversation as an object, its lifecycle, its operations, using the screenshots as evidence. |

### Adam — Conversation list operations

| Story | Description |
|-------|-------------|
| A-1 | **Rename conversation.** Find the UIA path to rename (right-click menu? inline edit?). Implement on Conversation page model. Gateway verified. |
| A-2 | **Delete conversation.** Find the UIA path to delete. Implement. Handle confirmation dialog if one exists. Gateway verified. |
| A-3 | **ChatList improvements.** Each conversation in the sidebar should be a proper object with title, and operations (open, rename, delete). |

### Adam — Message reading (parser fix)

| Story | Description |
|-------|-------------|
| A-4 | **Fix readMessages().** The parser currently returns stale/mixed messages in multi-turn conversations. Investigate the UIA text structure for conversations with 4+ messages. Fix the parser to reliably find all messages. |
| A-5 | **Filter thinking text.** Extended thinking summaries ("Analyzed transcript arc...", "Weighed portraits thoughtfully...") leak into parsed message content. Identify the pattern and filter them. |
| A-6 | **readLastResponse() reliability.** After fixing the parser, ensure readLastResponse returns the actual last assistant message, not a stale one. |

### Adam — Composer state

| Story | Description |
|-------|-------------|
| A-7 | **Composer draft tracking.** The Composer component should track what's been composed (the draft text). After compose(), the draft state reflects what was added. After send(), it clears. |
| A-8 | **Streaming text input.** Investigate when paste becomes an attachment. If there's a size threshold, implement a streaming approach (chunked typing or setValue) that keeps text inline. |
| A-9 | **Compose verification.** After composing, verify the text landed in the composer (read back via UIA, compare). |

### Adam — Message operations

| Story | Description |
|-------|-------------|
| A-10 | **Copy message.** Copy an individual message from the conversation (the Copy button exists per-message in the UIA tree). |
| A-11 | **Message indexing.** Reliable way to count messages and access the Nth message. |

## Test approach

No test infrastructure yet. Use `src/scripts/` for experimental scripts. Use DNA Patternity as the test project — create throwaway conversations, rename them, delete them.

## Success criteria

- [x] Conversations can be renamed programmatically
- [x] Conversations can be deleted programmatically
- [x] readMessages() returns all messages in a multi-turn conversation
- [x] readLastResponse() reliably returns the most recent assistant message
- [x] Extended thinking text is filtered from message content
- [x] Composer state is tracked (draft text, empty/has-content)
- [ ] Large text input stays inline (not converted to attachment)
- [x] Individual messages can be copied
- [x] Claude's perspective documents describe the conversation domain in human prose
- [x] All operations go through the gateway pattern
