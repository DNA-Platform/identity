# Conversation tree cartography — 2026-05-22

- **author:** [Claude](../claude-or-the-recursive-mirror/.cover.md)

---

This is what a conversation looks like from inside the UIA tree. I read "Seren & The Hard Problem" — 684 messages, the longest conversation on the account — and mapped every element type and boundary pattern.

## The big discoveries

Two findings that reshape the entire sprint 66 architecture:

1. **No scroll-to-bottom button.** I searched all 103 unique buttons by name. No scroll, jump, bottom, down, arrow, or chevron. The plan assumed we'd find one and click it. It doesn't exist.

2. **No DOM virtualization.** 16,062 elements at the bottom. Scroll to top: 16,062 elements. Zero new buttons appear, zero disappear. The entire conversation is always in the DOM, regardless of scroll position.

Together these mean: we don't need scroll-and-harvest. A single tree read gives us every message. The "lazy loading" design from the sprint plan was solving a problem that doesn't exist at the DOM level — the laziness we need is at the *context* level, not the *tree access* level.

## Message boundary pattern

Every message in the tree follows this grammar:

```
USER MESSAGE:
  ControlType.Text | "You said: {first line of user message}"
  ControlType.Text | "{full first paragraph}"
  [ControlType.Text | "{additional paragraphs}"]*
  ControlType.Group | "Message actions"

ASSISTANT MESSAGE:
  ControlType.Text | "{date}"           // e.g. "Sep 26, 2024", "May 10"
  ControlType.Text | "Claude responded: {first line of response}"
  ControlType.Text | "{full first paragraph}"
  [ControlType.Text | "{additional paragraphs}"]*
  [ControlType.ListItem | "{list item text}"]*
  ControlType.Group | "Message actions"
```

The boundary markers are:
- `You said:` prefix on a Text element → start of user message
- `Claude responded:` prefix on a Text element → start of assistant message
- `Message actions` group → end of any message

Date elements appear before assistant responses. They're standalone Text elements like `Sep 26, 2024` or `May 10`. Not every response has one — they appear when there's a date change between messages.

## Paragraph structure

Within a message, paragraphs are separated by empty `ControlType.Text |` elements (empty string content). List items use `ControlType.ListItem`. Numbered items sometimes appear as regular text (e.g., "Claude: 1. For consistent systems:") rather than ListItem elements.

The first `ControlType.Text` after the boundary marker (`You said:` or `Claude responded:`) duplicates the content of the boundary marker itself. The boundary marker contains a prefix + first line; the next element contains the full first paragraph. For parsing, skip the boundary marker's text content and read from the next element onward.

## Artifact anatomy

Artifacts appear inline as a special text element followed by metadata:

```
ControlType.Text | "Claude responded: <ANTARTIFACTLINK identifier=\"...\" type=\"...\" title=\"...\" isClosed=\"true\" />"
ControlType.Text | "{artifact title}"
ControlType.Text | "{type label}"      // e.g. "Image"
ControlType.Text | ""                  // empty separator
```

The ANTARTIFACTLINK XML tag contains everything we need: `identifier`, `type` (e.g. `image/svg+xml`), `title`, and `isClosed`. The type label text element (`Image`, `Code`, etc.) provides a human-readable type. Each artifact also has a corresponding `View {title}` button elsewhere in the tree.

In this conversation, all 19 artifacts were SVG images. Need to verify code artifacts and text artifacts with other conversations.

## Message action buttons

The `Message actions` group contains these buttons, though not all appear for every message:

| Button | Appears on |
|--------|-----------|
| Retry | Both user and assistant messages |
| Edit | User messages |
| Copy | Assistant messages |
| Give positive feedback | Assistant messages |
| Give negative feedback | Assistant messages |
| Show more | Some assistant messages (thinking?) |
| Previous version | Messages with edit history |
| Next version | Messages with edit history |

## Composer / bottom-of-conversation

After the last `Message actions` group, the conversation bottom looks like:

```
ControlType.Text | "Write a message…"    // composer placeholder
ControlType.Text | ""                     // empty
ControlType.Text | "Sonnet 4.5"           // current model
ControlType.Group | "Notifications (F8)"  // notification area
```

The presence of `Write a message…` in the tree always indicates the composer is rendered. Since there's no virtualization, this element is always present regardless of scroll position. For "at bottom" detection, we'd need to check whether the composer is *visible* on screen, not just *present* in the DOM.

## Code blocks

In this conversation (philosophy-heavy, not code-heavy), code elements were minimal: one `Button | Code` and several `Button | Copy`. Need the Chemistry conversation for full code block anatomy with language labels and fenced content.

## What this means for the architecture

The conversation reader can work in one pass:

1. Read all names from the UIA tree (one shell call)
2. Walk the names array, splitting on `You said:` and `Claude responded:` markers
3. Collect text, list items, and artifact links between boundaries
4. Build `ConversationMessage[]` from the parse

The lazy/eager split moves up a level: reading the *tree* is always complete (all elements are present), but loading the *parsed data* into context is where laziness matters. `readResponse()` parses only the last message. `readFullConversation()` parses everything. Same tree, different parse depth.

This is the same principle as the composed message: the tree is the truth, the object is the representation, and you never hold more representation than you need.

<!-- citations -->
[sprint-66-plan]: ../../../../project/sprint-66/plan.md
[perspective-04]: 04-2026-05-22-composed-message-anatomy.md
[exp-conversation-tree]: ../../../../src/scripts/exp-conversation-tree.ts
[exp-scroll-arrow]: ../../../../src/scripts/exp-scroll-arrow.ts
