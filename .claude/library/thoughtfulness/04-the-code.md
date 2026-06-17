# The Code

- **author:** [Adam](../..teamsmanship/..team/adam/adam-between-the-wires/.cover.md)
- **coauthor:** [Claude](../..teamsmanship/..team/claude/claude-or-the-recursive-mirror/.cover.md)

---

The code is thin. The app does the work.

[`think.ts`](../../src/scripts/think.ts) handles ONLY persistence — the state file and the conversation catalogue. All Desktop interaction goes through the [`Claude`](../../src/claude.ts) class methods. The [/think skill](../our-skillset/20-think.md) calls app methods directly and uses think.ts for bookkeeping between calls.

## What think.ts exports

**State file** — tracks the active thought between write and check:
- `readState()` / `writeState()` / `deleteState()` / `hasActiveThought()`
- `ThoughtState`: conversationId, url, question, startedAt

**Catalogue** — tracks all conversations across sessions:
- `readCatalogue()` / `updateCatalogue()`
- `CatalogueEntry`: topic, conversationId, url, state, started, lastExchange, summary

That's it. 77 lines.

## What the app provides

The [`Claude`](../../src/claude.ts) class has the methods the skill needs:

| Method | What it does |
|--------|-------------|
| `app.newChat()` | Dismiss dialogs, go home, click New Chat, verify blank URL |
| `app.compose(text)` | Clear any existing draft, then type the text |
| `app.sendAndForget()` | Click Send, detect screen transition. Does NOT wait for response |
| `app.checkConversation(id)` | Read URL, return whether it contains the conversation ID |
| `app.openConversationById(id)` | If not on the right conversation, open the most recent sidebar chat and verify |
| `app.conversation.scrollToBottom()` | Ctrl+End — forces lazy-rendered content to materialize in the UIA tree |
| `app.conversation.checkStreaming()` | Is Desktop still generating a response? |
| `app.conversation.readLastResponse()` | Read the last assistant message |
| `app.window.minimize()` | Return Doug's computer |

Each method is idempotent — `maximize()`, `focus()`, `checkConversation()` all check state before acting. No redundant Win32 calls. No flicker.

## The write/check/read cycle in code

```typescript
// WRITE
await app.launch();
await app.newChat();
await app.compose(question);
await app.sendAndForget();
const url = await app.auto.uia.readUrl();
writeState({ conversationId: extractId(url), url, question, startedAt: now() });
app.window.minimize();

// CHECK (separate invocation, after productive work)
await app.launch();
await app.openConversationById(state.conversationId);
await app.conversation.scrollToBottom();
const done = !await app.conversation.checkStreaming();
app.window.minimize();

// READ (only after check says done)
await app.launch();
await app.openConversationById(state.conversationId);
await app.conversation.scrollToBottom();
const response = await app.conversation.readLastResponse();
updateCatalogue({ topic, conversationId, url, summary: response.slice(0, 500), ... });
app.window.minimize();
```

Each block is a separate invocation. Work happens between them — [scaffolding the perspective entry](03-persistence.md), reading prior context, tending the library. The skill prescribes a [checklist](../our-skillset/20-think.md#the-writecheckread-checklist) that enforces this separation.

## Why the code is thin

Sprint 78 taught us: functionality that touches Desktop belongs in the [app layer](../reference-desk/.cover.md), not in scripts. The previous think.ts was 670 lines — it had navigation, streaming detection, rename, project filing, retry loops. All of that either moved into the Claude class or was removed. What remains is what ONLY think.ts can do: manage the thought state file and the conversation catalogue. Everything else is reusable app infrastructure.

The [coding philosophy](../reference-desk/05-coding-philosophy.md) applies: if the script reaches below the Claude class, the class is missing a method. Add the method, don't bypass the stack.

<!-- citations -->
[think-ts]: ../../src/scripts/think.ts
[claude-ts]: ../../src/claude.ts
[skill]: ../our-skillset/20-think.md
[persistence]: 03-persistence.md
[reference-desk]: ../reference-desk/.cover.md
[coding-philosophy]: ../reference-desk/05-coding-philosophy.md
