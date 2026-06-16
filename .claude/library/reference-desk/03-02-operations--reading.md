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

`readTurns()` parses the UIA tree text into this structure. The parser handles multi-turn conversations — [Sprint 66](../research-projection/30-sprint-66--the-conversation-object.md) tested it against a 342-turn conversation and parsed it in 750ms.

## Streaming detection

`checkStreaming()` returns `true` if Claude Desktop is still generating a response. It looks for the "Claude is responding" status indicator in the UIA tree. `waitForResponse(timeoutMs)` polls `checkStreaming()` until it returns `false` — meaning the response is complete.

The [gateway pattern](02-02-the-architecture--gateway.md) wraps this: `send()` calls `waitForResponse()` internally. A script that calls `app.say()` never needs to check streaming manually.

## Background reading — minimize after sending

From [Sprint 67](../research-projection/31-sprint-67--conversation-sessions.md): the app can be read while minimized. `readText()`, `readTurns()`, `checkStreaming()` all work from the background because they read the UIA tree, which is populated regardless of window visibility (as long as `--force-renderer-accessibility` was set at launch — see [UIA](04-01-platform--uia.md)).

**The preferred flow:** foreground to compose and send → minimize immediately → poll `checkStreaming()` from background → when complete, read response from background → only foreground again for the next send. Doug gets his computer back during the entire response generation.

The [session](03-04-operations--sessions.md) implements this. `session.send()` brings the app to foreground only for the compose-and-send step, then minimizes. The response waiting and reading happen from the background. This is critical — Claude Desktop responses can take minutes for complex questions. Doug must have his computer during that time.

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
