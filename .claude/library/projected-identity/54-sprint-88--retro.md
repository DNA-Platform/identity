# Sprint 88 Retro

- **author:** [Arthur](../..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)

---

The sprint that learned to look at the app.

## What happened

The first half failed. Think broke on every test — transient status indicators, no content verification, navigation that skipped screens. We declared victory three times and Doug corrected us each time. An hour was spent rediscovering that you verify by checking for actual text, not for server acknowledgement indicators — something discussed in prior sprints but never written down.

The turning point: Doug said "describe what Claude Desktop looks like." Claude wrote a prose description — every screen, every section, every clickable thing. The nouns in that description became the objects. ProjectCard, ProjectConversationItem, ThinkingBlock. The code followed the words.

The second half built: `ProjectCard` with `open()`, `ProjectConversationItem` with `open()`, `ProjectsGrid` that reads `ListItem` UIA elements instead of parsing text. The navigation chain — projects grid → Claude card → project page → Test conversation — works end to end through objects. Chapter 12 ([The App](../reference-desk/12-the-app.md)) documents every screen and every noun-to-class mapping.

## What we built

- **[The App](../reference-desk/12-the-app.md)** — Reference Desk chapter 12. Prose description of Claude Desktop screen by screen. Every noun is a class. The specification the code implements.
- **`ProjectCard`** — object representing a project in the grid. Has name, date, `open()`.
- **`ProjectConversationItem`** — object representing a conversation in a project. Has title, `open()`.
- **`ProjectsGrid`** / **`ProjectConversations`** — collections that read `ListItem` UIA elements directly. No text parsing.
- **`ChatListController.readList()`** — rewritten to find conversations via "More options for X" buttons instead of parsing flat text.
- **Content-based send verification** — `composer.send()` checks for the thinking block element or response text, not transient indicators.
- **`hasThinkingBlock()`** — controller sensor for the permanent thinking block element.
- **Libraries research topic** — 10,145 char response on making the library navigable. SQLite FTS + link graph. Synopsis hierarchy is the spine.

## What we learned

**Look at the app, not the code.** When Doug said "describe the app," the objects wrote themselves. When we tried to fix code by writing more code, we spiraled. The prose description IS the specification. Write the words first, then the code matches.

**Nouns are classes, verbs are methods, buttons are method calls.** A thing with state and options is a class. A pure action is a method on its parent. This principle, applied consistently, produces the right object model without design decisions.

**Don't parse text when the tree has objects.** The UIA tree contains `ListItem`, `Button`, `Hyperlink` elements. Reading them directly gives you typed objects. Parsing `readText()` gives you fragile string matching. The tree IS the object model — read it as objects.

**Verify with content, not indicators.** Written in [Pitfalls](../reference-desk/07-pitfalls.md) and in memory. The thinking block is a permanent element. Response text is permanent. "Claude is responding" is transient. Always check for what stays.

**Navigation returns objects.** `ProjectCard.open()` doesn't return void — it navigates and the caller gets the next screen's state. Methods on nowhere (like `openProject` on the Claude class) hide navigation and let you skip screens.

## What's next

- Page base class and inheritance
- Shared Composer across pages
- Text-growth response detection
- Remove redundant send methods
- Full think test: navigate to Test → send → wait → read
