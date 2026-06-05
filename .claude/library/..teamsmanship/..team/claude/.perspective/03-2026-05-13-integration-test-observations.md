---
title: Integration test observations — 2026-05-13
author: "[Claude](../claude-or-the-recursive-mirror/.cover.md)"
---

# Integration test observations — 2026-05-13

First full integration test run against the live Claude Desktop app. Eight tests, 40 checks, all passing after bug fixes found during the run.

## What works

**UIA reads the full accessibility tree.** The TextPattern on the main Document element returns ~1900 characters of flat text covering the entire window — sidebar, navigation chrome, main content, composer, model picker. This is the foundation for all parsing.

**URL detection via ValuePattern.** The Document element exposes the page URL: `https://claude.ai/new` for home, `https://claude.ai/chat/<uuid>` for conversations, `https://claude.ai/projects` for the grid. This is the most reliable screen detection method — much better than parsing text markers.

**Element invocation via InvokePattern.** Buttons in the sidebar respond to InvokePattern.Invoke(). Chat titles ("Samantha", "Georgian LLC"), navigation links ("Projects", "View all"), and "New chat ⌘N" all invoke successfully. This navigates the app without stealing focus from VS Code.

**Conversation ID extraction.** The URL `https://claude.ai/chat/feb3558c-2f53-40e8-80bd-d19574be857c` gives us a stable UUID for each conversation. This is more reliable than title matching.

## What I learned about the UIA tree structure

**Element names include keyboard shortcuts.** "New chat" appears as "New chat ⌘N" in the UIA tree. The invokeByName method needs prefix matching, not exact match.

**Every chat item has a companion.** Each conversation in the Recents list has two UIA elements: the title button ("Samantha") and a "More options for Samantha" expand/collapse element. Parsers must filter the "More options" lines.

**579 buttons.** The full UIA tree has hundreds of Button elements. Iterating through all of them for name matching is workable but slow (~15 seconds for a full scan). Targeted queries by name are faster.

**Cyrillic text requires base64 encoding.** PowerShell's default encoding mangles non-ASCII characters in script string literals. Passing element names as base64 and decoding in PowerShell solves this. The output encoding also needs `[Console]::OutputEncoding = [System.Text.Encoding]::UTF8`.

## What doesn't work well

**Message parsing is crude.** The UIA text stream doesn't distinguish user messages from assistant messages. There are no role markers — the text is flat. The current parser returns the entire conversation content as a single message. Separating messages reliably requires DOM-level access (CSS classes, data attributes) that UIA's TextPattern doesn't provide.

**The projects parser needed a rewrite.** The word "Projects" appears twice in the UIA text — once as a sidebar navigation link, once as the page heading. The parser was matching the sidebar occurrence and reading the Recents list as project cards. Fixed by anchoring to "New project" (which only appears on the projects page) and using timestamp patterns as card delimiters.

**Two projects have no descriptions.** "Turkey" and "DNA Patternity" have empty description fields. The parser handles this correctly (empty string) but it means description-based matching would miss them.

## Screenshots

- `06-*-1-home-before-open.png` — home screen before navigation
- `06-*-2-conversation-opened.png` — conversation with Russian text, project context visible in header
- `06-*-3-home-after-return.png` — home screen after round-trip navigation
- `07-*-1-projects-grid.png` — full projects grid with 20 project cards

<!-- citations -->
[first UIA read]: 01-2026-05-10-first-uia-read.md
[home anatomy]: 02-2026-05-10-home-screen-anatomy.md
