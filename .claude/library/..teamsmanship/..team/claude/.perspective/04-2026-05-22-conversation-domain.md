---
title: The conversation domain — 2026-05-22
author: "[Claude](../claude-or-the-recursive-mirror/.cover.md)"
---

# The conversation domain — 2026-05-22

This is my attempt to describe conversations as objects — what they are, what they can do, and how they live and die. The language here comes from watching conversations through the UIA tree, from our pilot in Sprint 63, and from Doug's insistence that the app model the real thing.

## What a conversation is

A conversation is a sequence of turns between a human and an assistant. Each turn has a role — "You said" or "Claude responded" — and content that is plain text, sometimes with thinking blocks folded inside. A conversation has a title, a URL with an ID embedded in it, and optionally belongs to a project.

The conversation is not the same thing as a chat list item. A chat list item is a line in the sidebar — a title and a position. It's a handle. You can rename it, delete it, pin it, move it to a project, all from the sidebar without ever opening it. The conversation is the interior — the messages, the composer, the streaming state, the artifacts panel.

## Lifecycle

A conversation begins when you send a message from an empty composer — either from the home screen or from inside a project. The act of sending creates the conversation; before that, there's nothing to navigate to, no URL, no ID. The home screen's composer and a project page's composer are the same component doing the same thing: creating a conversation.

Once created, the conversation lives in the sidebar under Recents. It has a title that Claude generates after the first exchange. You can rename it. You can pin it so it doesn't scroll away. You can move it between projects or remove it from a project entirely.

A conversation ends when you delete it. Deletion is destructive and irreversible. The app shows a confirmation dialog — you must click Delete twice. After deletion, the app navigates away (usually to the home screen) and the conversation disappears from the sidebar.

## The message

Each message in the UIA text stream is introduced by a role marker. User messages begin with "You said:" and assistant messages begin with "Claude responded:". Everything between one role marker and the next belongs to that message.

But the raw text is noisy. The UIA TextPattern dumps the entire window as flat text — sidebar, chrome, timestamps, thinking summaries, pasted-text buttons, model lines, composer placeholders — all interleaved with actual message content. Parsing messages means knowing what to skip:

- **Image placeholders** (`￼`) — the object replacement character, where images were
- **Timestamps** — "3:42 PM", "May 15", "Yesterday", "PASTED"
- **Status lines** — "Claude finished the response", "Claude is thinking"
- **More-options buttons** — "More options for {title}" labels from the sidebar
- **Model lines** — "Opus 4.7" with version numbers, marking the end of messages
- **Composer placeholders** — "Reply to Claude...", "How can I help you today?"
- **Thinking boilerplate** — "The user prompt is empty, so there is no primary language established"
- **Pasted-text buttons** — "Pasted Text, pasted, 97 lines"

And there's a subtler problem: thinking summaries. When extended thinking is on, Claude's internal reasoning gets summarized in a disclosure element. The UIA tree represents this as both a Button and a Text element, so the summary line appears twice consecutively. We deduplicate consecutive identical lines to handle this.

## The composer

The composer is the text input at the bottom. It has different placeholder text depending on context: "How can I help you today?" on the home screen, "Reply to Claude..." in a conversation, "Write your prompt to Claude" in a project.

There are two ways to put text into the composer:

1. **ValuePattern (type)** — programmatic, strips formatting, replaces everything
2. **Clipboard paste** — preserves paragraph formatting, appends at cursor position

We use clipboard paste as the primary input method because it preserves newlines. But large pastes — we've seen it with 97-line messages — sometimes become attachments instead of inline text. The UIA tree shows a button labeled "Pasted Text, pasted, 97 lines" when this happens. Doug says streaming text (typing character by character) avoids this, but we haven't implemented that yet.

The composer tracks a draft — the text you've composed but haven't sent yet. `isDirty` tells you whether there's unsent text. `compose()` replaces the draft; `append()` adds to it; `send()` clears it.

## The context menu

Every conversation in the sidebar has a "More options" button. This button does not respond to InvokePattern — it uses ExpandCollapsePattern. You must call `expandByName()`, not `invoke()` or `clickByName()`. This was our key discovery in Sprint 63.

The menu offers: **Pin**, **Rename**, **Change project**, **Remove from project**, **Delete**. These same operations are available from inside a conversation's header, using the same "More options for {title}" expand pattern.

## Streaming

When Claude is generating a response, a Stop button appears. We detect streaming by checking `exists('Button', 'Stop')`. The streaming lifecycle has two phases:

1. **Wait for start** — poll until the Stop button appears (short timeout, ~15s)
2. **Wait for finish** — poll until the Stop button disappears (long timeout, up to the caller's limit)

If the Stop button never appears, either the message didn't send or Claude responded instantly. Both are valid — we don't treat a missing start as an error.

## Artifacts

Conversations can produce artifacts — code, documents, diagrams — that appear in a side panel. The artifact panel has its own lifecycle: list artifacts, select one by title, read its content, copy it, download it. Artifacts belong to the conversation but live in their own component.

## The object model

Here is how the objects compose:

```
Claude (the app)
  +-- conversation: Conversation
  |     +-- composer: Composer (shared with Home)
  |     +-- model: ModelPicker (shared with Home)
  |     +-- artifacts: ArtifactPanel
  |     +-- messages: Message[]
  |     +-- id, url, title, projectName
  |     +-- isLoading, isStreaming, hasError
  +-- sidebar: Sidebar
  |     +-- chats: ChatList
  |           +-- items: ChatItem[] (title + index)
  +-- home: Home
  |     +-- composer: Composer (same instance)
  |     +-- model: ModelPicker (same instance)
  +-- project: Project
  +-- projects: Projects
```

The Composer is the same instance on Home and in Conversation — because in the real app, the home screen's composer *becomes* the conversation's composer when you send your first message. The ModelPicker is similarly shared.

The ChatList in the sidebar and the Conversation page model different views of the same underlying thing. You delete from the sidebar (ChatList.delete) when you're looking at a list. You delete from the conversation (Conversation.delete) when you're inside it. The UIA path is the same — expand the "More options" button, click Delete, confirm.

## What we can do now

- Create a conversation (compose + send from home or project)
- Read all messages with role attribution
- Read the title, project name, URL, conversation ID
- Rename from sidebar or from inside the conversation
- Delete from sidebar or from inside the conversation
- Pin from sidebar
- Wait for streaming responses
- Copy individual messages by index
- List, open, read, copy, and download artifacts
- Track composer draft state

## What we can't do yet

- Stream text input to avoid the paste-becomes-attachment problem
- Verify composed text landed correctly (read back from UIA)
- Edit a previous message reliably (the edit flow needs exploration)
- Access the "Change project" or "Remove from project" menu items
- Detect or handle rate limits, network errors, or "conversation too long" states

<!-- citations -->
[home screen anatomy]: 02-2026-05-10-home-screen-anatomy.md
[conversation protocol]: ../../claude-migration/10-the-conversation-protocol.md
[first UIA read]: 01-2026-05-10-first-uia-read.md
