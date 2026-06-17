# Reading Responses

- **author:** [Claude](../..teamsmanship/..team/claude/claude-or-the-recursive-mirror/.cover.md)

---

The conversation page ([`.claude/src/pages/conversation.ts`](../../src/pages/conversation.ts)) reads what Claude Desktop said. This is the receiving end of the research dispatch — after `send()`, `readTurns()` captures the structured response.

## Reading methods

| Method | Returns | Use when |
|--------|---------|----------|
| `readLastResponse()` | `string` | You just need the text of the most recent response |
| `readTurns()` | `Turn[]` | You need the full conversation as structured data |
| `readMessages()` | `ChatMessage[]` | You need raw message objects |
| `readStructuredMessages()` | `ConversationMessage[]` | You need messages with metadata |
| `readResponse()` | `ConversationMessage \| null` | You need the last response as a structured object |
| `readTitle()` | `string` | You need the conversation title |
| `messageCount()` | `number` | You need to know how many messages exist |

For research dispatches, `readLastResponse()` is usually sufficient. For full conversation capture, `readTurns()` gives structured data.

## The Turn model

A conversation is a sequence of turns. Each turn has a prompt (what was sent) and a response (what Claude Desktop said).

```typescript
interface Turn {
  prompt: Prompt;
  response: Response;
}

interface Prompt {
  text: string;
  attachments?: string[];
}

interface Response {
  text: string;
  thinking?: string;
  artifacts?: Artifact[];
}
```

`readTurns()` parses the UIA tree text into this structure. The parser handles multi-turn conversations — [Sprint 66](../projected-research/30-sprint-66--the-conversation-object.md) tested it against a 342-turn conversation and parsed it in 750ms.

## Streaming and response detection

Several signals indicate Desktop is processing:

| Signal | What it means | How to check |
|--------|--------------|--------------|
| "Claude is responding" | Desktop is generating text | `checkStreaming()` |
| "Claude is thinking" | Extended thinking in progress | `checkStreaming()` |
| Thinking text visible | Actual thinking content appeared | `readLastResponse()` returns non-empty |
| Response text visible | Response content started appearing | `readLastResponse()` returns non-empty |
| "Please wait" | Desktop is loading, not yet processing | Neither streaming indicator — wait longer |

**The reliable signal is content.** The streaming indicator may not appear immediately. Desktop may show "Please wait" first. The most reliable way to know Desktop is processing is to check for THINKING TEXT or RESPONSE TEXT — actual content in the response area. An empty response means nothing has happened yet.

`checkStreaming()` checks for the streaming indicators. `readLastResponse()` checks for content. Use both. Content appearing is the definitive signal.

**Scroll to bottom before checking.** The UIA tree only renders what's visible ([lazy rendering](02-04-the-architecture--app-model.md#lazy-rendering)). The streaming indicator lives at the bottom of the response. If the view isn't scrolled to the bottom, `checkStreaming()` can't see it. `scrollToBottom()` is awaitable and checks the "Scroll to bottom" button — if the button is gone, you're at the bottom.

`waitForResponse(timeoutMs)` — the blocking wrapper. Polls for processing start (streaming indicator, thinking text, or response text — any signal), then polls for streaming to end. Throws if no signal within 30 seconds. Used by `send()` and `session.send()`. For non-blocking use, call `sendAsync()` and poll `checkStreaming()` / `readLastResponse()` directly.

`isAtBottom()` — returns whether the "Scroll to bottom" button is absent (meaning you're at the bottom). Async.

## Visibility and reading

**Sprint 72 finding:** reading requires the app to be VISIBLE. `readTurns()` returned empty when the app was minimized, but returned 91 turns when maximized on the same conversation. The UIA tree may not fully populate when the window is minimized in current versions of Claude Desktop.

**The current flow:** maximize to compose and send → keep visible while waiting for response → read response while visible → minimize after reading is complete.

Sprint 67 tested background reading and found it worked at that time. The app has been updated since. Background polling for streaming completion (`checkStreaming()`) may still work from minimized state — this needs re-testing. But `readTurns()` and `readText()` need the app visible.

**Implication for Doug's computer:** the app must be visible during response generation AND reading. Minimize only after the complete response has been read. This is a constraint — Claude Desktop responses can take minutes, during which the app occupies the screen. The session should be updated to keep the window visible until the read is complete, then minimize immediately after.

## Refresh

`refresh()` rebuilds the conversation page's state from the UIA tree. No cached data survives a refresh — everything is reconstructed. This follows the [no-privileged-state principle](05-coding-philosophy.md): if the tree says it, the model reflects it. If the tree doesn't say it, the model doesn't have it.

## The parser is the most fragile part

The turn parser depends on the exact UIA tree structure of conversation messages. When Anthropic updates Claude Desktop, the element names, nesting, and text patterns change. The parser stops matching and returns undefined fields.

**Sprint 72 finding:** `readTurns()` returned turns with `response.text: undefined` even though the response was visible in the app. The raw text (`readText()`) contained the response, but the structured parser couldn't find it.

When this happens:
1. Read the raw tree: `const text = await app.conversation.readText()` — this always works
2. Read the element names: `const names = await app.auto.uia.allNames()`
3. Compare the patterns to what the parser expects in `readTurns()`
4. Update the parser to match the new structure
5. Update this chapter to document the new patterns

This is expected maintenance. The codebase is a model of the app. When the app changes, the model must follow.
