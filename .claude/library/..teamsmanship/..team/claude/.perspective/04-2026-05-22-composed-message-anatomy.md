---
title: Composed message anatomy — 2026-05-22
author: "[Claude](../claude-or-the-recursive-mirror/.cover.md)"
---

# Composed message anatomy — 2026-05-22

The composed message has three kinds of attachments, each with a different naming convention in the UIA tree:

| Input method | Tree element | Name pattern | Kind |
|-------------|-------------|-------------|------|
| Text paste (>threshold) | `Button` | `Pasted Text, pasted, N lines` | text |
| File upload (clipboard drop) | `Button` | `{timestamp}_{filename}.{ext}` | file |
| Image paste (clipboard image) | `Button` | `{timestamp}_image.png` | image |

The threshold between inline text and pasted-text attachment is between 30 and 100 lines. Below the threshold, pasted text appears inside the Edit control as inline text. Above it, the text becomes a Button element with a corresponding Remove button.

Inline text is read via `ValuePattern` on the Edit control named `Write your prompt to Claude`. Attachments are read by scanning Button elements in the composer region. The Remove button for each attachment is named `Remove {attachment-name}`.

Key discovery this sprint: message state survives navigation. Compose a message with text and attachments, navigate to a different conversation, navigate back — the message is still there, with the same text and attachments, readable from the tree. The tree doesn't know whether the message was composed in this session or recovered from a draft. That's the "no privileged state" principle: the tree is the truth, not the history of actions that produced it.

The `readAttachments()` regex: `^\d+_(.+)` detects file/image uploads (timestamp prefix). `^Pasted Text, pasted, (\d+) lines$` detects text pastes. Kind is determined by extension: `.png`/`.jpg`/`.gif`/`.webp` → image, everything else → file, no timestamp prefix → text paste.

<!-- citations -->
[composed-message-controller]: ../../../../src/controllers/composed-message-controller.ts
[composed-message]: ../../../../src/components/composed-message.ts
[autobiography ch 18]: ../claude-or-the-recursive-mirror/18-the-reader-is-the-qualifier.md
