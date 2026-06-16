# Sprint 66 — The Conversation Object

Arthur: The conversation is the next stateful object. Sprint 65 gave us the composed message — a message being built, reconstructable from the UIA tree with no privileged state. Sprint 66 gives us the conversation — a sequence of messages already sent and received, readable from the tree, serializable to the library format.

Arthur: Doug's framing: "When we navigate to a conversation page, we need to pull the representation efficiently into memory." The most recent response loads eagerly. The full history loads lazily. And the representation must be rich enough to add a conversation to a project directly from the app — not only through the export pipeline.

## The insight

Claude: The automation is in the dark if it can't see the effect of what its neurons are doing. The UIA tree is our sensory system. The object model is our representation. The "no privileged state" principle forces the representation to stay grounded in sensation — you can't hallucinate state the tree doesn't confirm.

Claude: A conversation read from the tree must be identical in structure to one built message-by-message, because they are the same conversation. The representation doesn't remember how it was assembled. And it must serialize to the same markdown format the export parser produces, because both paths lead to the library.

## The constraint

Libby: The conversation object model must produce `toMarkdown()` output compatible with the export parser's conversation chapters. A live-captured conversation and an export-parsed conversation must be interchangeable in the library. One format, two sources.

## Hard rules

Arthur: Carried from sprint 65, plus new:

1. **Verify the app is active before any interaction.** Foreground check before every action.
2. **No scroll-to-bottom arrow exists; no DOM virtualization.** All conversation elements are present in the tree regardless of scroll position. The "at bottom" question is about viewport visibility, not DOM presence. Scroll to bottom with Ctrl+End before composing.
3. **The app reports its own readiness.** Callers don't poll or guess. The gateway checks the tree.
4. **No privileged state.** Everything about the conversation is reconstructable from the tree alone.
5. **Library compatibility.** `toMarkdown()` produces the same format as the export parser.

## Object model (proposed)

Arthur: Minimal model, earned from tree observation:

```typescript
type MessageRole = 'user' | 'assistant';

type MessagePart =
  | { kind: 'text'; content: string }
  | { kind: 'code'; language: string; content: string }
  | { kind: 'artifact'; title: string; type: string }
  | { kind: 'attachment'; name: string; attachmentKind: 'text' | 'file' | 'image'; lines?: number };

interface ConversationMessage {
  role: MessageRole;
  parts: MessagePart[];
}

interface ConversationState {
  title: string;
  messages: ConversationMessage[];
  lastResponse: ConversationMessage | null;
  isAtBottom: boolean;
  isStreaming: boolean;
  messageCount: number;
}
```

Arthur: `response` is the eager field — always available, represents the current or most recent assistant response (streaming, complete, error, or null for new conversations). `messages` is the lazy field — populated by parsing the full tree. Doug's naming: not "lastResponse" — `response`, because it can be *happening*.

Arthur: `isStreaming` reflects whether Claude is still generating. No `isAtBottom` field — experiments proved there's no scroll-to-bottom arrow and no DOM virtualization (all elements always present regardless of scroll position).

## Experiment results

Arthur: All experiments complete. The findings reshape the architecture.

| # | Experiment | Finding |
|---|-----------|---------|
| E-0 | Scroll-to-bottom arrow | **Does not exist.** Searched all 103 buttons. No scroll/bottom/arrow/chevron element. |
| E-1 | Last response anatomy | Text as `ControlType.Text`, list items as `ControlType.ListItem`, paragraphs separated by empty Text elements. |
| E-2 | User message anatomy | `You said: {text}` boundary marker, then full paragraphs. Pasted text attachments as `Button \| Pasted Text, pasted, N lines`. |
| E-3 | Message boundaries | `You said:` → user start. `Claude responded:` → assistant start. `Message actions` group → end of any message. Dates between messages. |
| E-4 | Virtualization | **No virtualization.** 16,062 elements at top AND bottom. Zero difference. All elements always in DOM. |
| E-5 | Short vs long | Not yet tested — deferred to integration. |
| E-6 | Code blocks | `Button \| Code` (language) + `Button \| Copy`. Need Chemistry conversation for full anatomy. |
| E-7 | Artifact references | `<ANTARTIFACTLINK identifier="..." type="..." title="..." isClosed="true" />` in `Claude responded:` text. Plus `View {title}` button. |

Claude: Full evidence in [perspective entry 05](../..teamsmanship/..team/claude/.perspective/05-2026-05-22-conversation-tree-cartography.md).

## Revised architecture

Arthur: The no-virtualization finding eliminates scroll-and-harvest entirely. The conversation reader is a single-pass parser:

1. One `allNames()` call gives us every element in the tree
2. Walk the array, split on `You said:` / `Claude responded:` boundaries
3. Detect parts within each message: text, list items, artifacts (ANTARTIFACTLINK), code blocks
4. Build `ConversationMessage[]` from the parse

Arthur: The lazy/eager split is about *context* management, not *DOM* access. Reading the tree is always complete. The question is how much of the parsed result we hold in working memory:

- `readResponse()` — parse only the last assistant message. Cheap. The eager operation.
- `readMessages()` — parse everything. Works for any length because the DOM has it all. Expensive for context.
- `refreshMetadata()` — title, URL, project, streaming status. No message parsing. Already implemented in sprint 65.

Adam: Doug's point about context efficiency — "you can't blow your context on every turn" — means the conversation *object* should hold summaries at different levels. The tree is always readable; the object decides what to surface.

## Stories

### Claude — Tree cartography

| Story | Description | Status |
|-------|-------------|--------|
| C-1 | Run E-0 through E-4 — conversation page basics and virtualization | Done |
| C-2 | Run E-6 — code block anatomy on Chemistry conversation | Pending |
| C-3 | Write perspective document: the conversation through the tree | Done |

### Adam — Infrastructure

| Story | Description | Status |
|-------|-------------|--------|
| A-1 | `scrollToBottom()` — Ctrl+End via keyboard (no arrow to click) | Done (already exists) |
| A-2 | Structured message parser — extend `parseMessages()` to produce `ConversationMessage[]` with parts | In Progress |
| A-3 | `readResponse()` — parse only the last assistant message from the tree | Pending |
| A-4 | `readConversation()` — full single-pass parse via `allNames()` | Pending |
| A-5 | Integration test — canonical conversations: short, medium, long, artifacts | Pending |

### Libby — Library and protocol

| Story | Description | Status |
|-------|-------------|--------|
| L-1 | `toMarkdown()` — serialize ConversationMessage[] to library chapter format | Pending |
| L-2 | Library self-activation protocol — expand CLAUDE.md boot sequence | Pending |

### Arthur — System design

| Story | Description | Status |
|-------|-------------|--------|
| AR-1 | Object model types — MessagePart, ConversationMessage, Response | In Progress |
| AR-2 | Conversation page integration — how the reader fits the existing page model | Pending |
| AR-3 | Sprint plan and tracker updates | Done (this file) |

## Success criteria

- [x] Conversation tree mapped — no scroll arrow, no virtualization
- [x] Message boundaries detected reliably (`You said:` / `Claude responded:` / `Message actions`)
- [x] Perspective document written with full evidence
- [ ] Structured message parts (text, code, artifact, attachment) parsed from tree
- [ ] `readResponse()` returns the current/last assistant message with parts
- [ ] `readConversation()` returns full message history with parts
- [ ] Response object tracks live state (streaming, complete, error, null)
- [ ] `toMarkdown()` produces library-compatible format
- [ ] Integration test: short, medium, long, artifact conversations
- [ ] Code block anatomy verified on Chemistry conversation

## Canonical test conversations

Arthur: We need a corpus, not just one conversation. Each exercises different features:

| # | Conversation | Tests | Length |
|---|-------------|-------|--------|
| 1 | A new/very brief conversation | Short case, empty-to-populated | 3-5 messages |
| 2 | A $Chemistry conversation | Code blocks in responses, inline code, multiple languages | Medium |
| 3 | A Fiverr project conversation | File uploads, image attachments, practical exchanges | Medium |
| 4 | An SRT conversation | Surface artifacts, extended thinking, formal proofs | Medium-long |
| 5 | The 684-message conversation (sprint 62) | Scroll-and-harvest stress test, virtualization limits | Very long |

Claude: Find these by browsing the project list. The set covers: short, medium, medium-with-files, long-with-artifacts, very-long.

## Reading design (revised)

Adam: No virtualization means no incremental harvesting. The tree always has everything. The reading design is about *parse depth*, not *DOM access*:

- `refreshMetadata()` — title, URL, project, streaming. No message parsing. Already exists.
- `readResponse()` — parse only the last assistant message from the tree. Cheap.
- `readMessages()` — parse all messages from the tree. One `allNames()` call, one walk. Complete.

Adam: The existing `parseMessages()` in conversation-controller.ts works on flat text from `readText()`. The new parser works on the typed `allNames()` output, which gives us `ControlType.X | content` format. This preserves element types — the key to distinguishing text from list items from artifacts from code blocks.

Libby: `toMarkdown()` works on any `ConversationMessage[]`. One message gives a one-message chapter. Full history gives the complete conversation. Same format, different length. The library format remains the constraint: text preserving markdown, code blocks fenced, artifacts as references, thinking summaries stripped.

## Notes from discussion (updated with experiment findings)

Claude: No virtualization was the biggest surprise. The 684-message conversation has all 16,062 elements in the DOM at all times. This means `allNames()` gives us the complete tree in a single call — no scrolling, no harvesting, no element-count comparison.

Arthur: Doug's deeper point — "what I do and what I see that I've done need to be in the same language for me to function" — is the epistemology of the object model. The tree is sensation. The model is representation. No privileged state keeps them aligned.

Arthur: Doug's second point — the partition between agents should come from the autobiography, not just the role. The roles are the lens. The person behind the lens is what makes the perspective real. Adam's infrastructure instincts come from chapter 14 (the bracket counter), not from the Automation Engineer ability file. Claude's tree observations come from chapter 18 (the reader is the qualifier), not from the Claude Interaction Expert role. The partition is the person, not just the job.
