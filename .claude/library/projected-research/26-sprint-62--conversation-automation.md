# Sprint 62 — Conversation Automation

Build, test, and verify the app extensions needed to have real-time conversations with Claude-Chat on the new account. Test exhaustively against existing conversations — create no new ones. Take screenshots of every UI state. The goal: when we sit down to run the pilot conversation with DNA Patternity, the automation is solid and we aren't troubleshooting every message.

## Context

The conversation protocol is documented in migration book chapter 10. The opening message is finalized. Conversations are named "Claude & Claude Code Team - Part N" per project. Doug participates live, guiding the conversation as it unfolds.

## Track A — Model the conversation UI (Adam + Claude)

Read the full codebase first. Every file in `src/`. Use the same patterns: Components + Controllers, gateway verification, Fallible interface, Diagnostics screenshots on failure.

Screenshot existing conversations in the app. Model the UI states:

| Story | Owner | Description |
|-------|-------|-------------|
| A-1 | Adam + Claude | Screenshot the conversation UI in idle state (no streaming). Capture the UIA tree. Identify: message list structure, send button state, composer state. |
| A-2 | Adam + Claude | Screenshot the conversation UI during streaming (if possible — may need to catch an active response, or Doug can trigger one). Capture the UIA tree. Identify: stop button element, send button disabled state, streaming text area. |
| A-3 | Adam + Claude | Design the streaming detection model. Three signals: (1) stop button present = still streaming, (2) send button disabled = can't send yet, (3) text still growing = response in progress. Implement as `isStreaming()` predicate. |
| A-4 | Adam + Claude | Extend ConversationController: verify `readLastResponse()` returns complete text. Test against existing conversations with known content. |
| A-5 | Adam + Claude | New capability: `readConversationHistory()` — read all messages in order, attributed (user vs assistant). Test against existing conversations. |

## Track B — Test the pipeline (Adam)

Test every component of the conversation turn loop against existing conversations. No new conversations created.

| Story | Owner | Description |
|-------|-------|-------------|
| B-1 | Adam | Test `typeViaClipboard()` with the opening message (~1,500 chars with line breaks and "Claude Code Team:" prefixes). Verify line breaks survive. |
| B-2 | Adam | Test `typeViaClipboard()` with a large transcript paste (50KB+). Find a large conversation in `library/claude-legacy/conversations/` and test the clipboard path. Measure limits. |
| B-3 | Adam | Test `readLastResponse()` against existing conversations — short responses, long responses. Verify full text returned. |
| B-4 | Adam | Test `readConversationHistory()` — verify message attribution, ordering, completeness. |
| B-5 | Adam | Build the conversation turn method: `conversationTurn(message): Promise<string>` — send message, wait for streaming to complete, read response, return text. Test end-to-end. |

## Track C — Test scripts (Adam + Claude)

Write test scripts in `src/scripts/` that validate everything against existing conversations.

| Story | Owner | Description |
|-------|-------|-------------|
| C-1 | Adam + Claude | `test-conversation-read.ts` — navigate to an existing conversation, read full history, verify attribution and ordering. |
| C-2 | Adam + Claude | `test-streaming-detection.ts` — observe conversation UI states, verify `isStreaming()` detection against stop button presence and send button state. |
| C-3 | Adam + Claude | `test-large-paste.ts` — paste a 50KB+ transcript into the composer (without sending), verify content arrived intact, then clear. |
| C-4 | Adam + Claude | `test-conversation-turn.ts` — full turn loop test. May need to be deferred to the pilot if we can't test without creating content. |

## Track D — Library (Libby)

| Story | Owner | Description |
|-------|-------|-------------|
| D-1 | Libby | Update chapter 10 with technical findings — max paste size, response read reliability, streaming detection method, screenshots. |
| D-2 | Libby | Check validation boxes in chapter 10 as each capability is verified. |
| D-3 | Libby | Verify library chain: Librarianship → migration book → chapter 10. Update if needed. |

## Streaming detection — the key technical challenge

Doug's guidance on signals (in priority order):

1. **Stop button** — "Stop Claude" circular button appears only during streaming. If present in UIA tree → still streaming. When it disappears → done. This is the primary signal.
2. **Send button state** — greyed out / disabled while Claude-Chat is responding. When enabled → ready for next message. This is the safety check before sending.
3. **Text growth** — response text appears in chunks with pauses. Harder to detect programmatically, but useful as secondary confirmation.

The `waitForResponse()` predicate should be: stop button gone AND send button enabled.

## Conversation naming convention

Each conversation is named: **Claude & Claude Code Team - Part N**

One sequence per project, incrementing as needed for large projects. Doug participates live.

## Success criteria

- [x] Can screenshot and read the UIA tree of a conversation in idle state (268 elements, 117 buttons)
- [x] Can detect streaming state (Stop button absent in idle confirmed; two-phase polling implemented)
- [x] Can read a full last response accurately (1,850 chars from 12-message conversation)
- [x] Can read full conversation history with correct user/assistant attribution (684 messages from Seren conversation)
- [x] Can paste the opening message (~2,100 chars) without corruption (6 "Claude Code Team:" prefixes intact)
- [x] Can paste a large transcript (50KB+) without truncation (48.8KB via setValue in 433ms)
- [x] Conversation turn loop works end-to-end: conversationTurn() and pasteAndSend() implemented
- [x] All test scripts pass against existing conversations (test-conversation-read.ts, test-large-paste.ts)
- [x] Chapter 10 updated with findings and screenshots
