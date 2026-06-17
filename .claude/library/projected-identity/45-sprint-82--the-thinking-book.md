# Sprint 82 — The Thinking Book

- **author:** [Arthur](../..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)

---

Finish the think skill. The essential loop — write, scaffold, catch up, check, read — must work end to end. The human-readable record of thinking moves from perspective entries to a proper book in Claude's personal library.

**Prerequisites:** Before touching any automation code, read the [Reference Desk](../reference-desk/.cover.md) — it catalogues the `.claude/src/` codebase. Run the [introspect tool](../reference-desk/09-codebase-index--introspect.ts) on [`claude.ts`](../../src/claude.ts) and [`session.ts`](../../src/session.ts) to see what methods exist. The think script uses [`Session.send()`](../reference-desk/03-04-operations--sessions.md) — do not build parallel implementations.

## Sprint goal

**Claude can write a question, scaffold a chapter in his thinking book (linked to the previous exchange), catch up on the last 3 thoughts in the conversation, add context, then check and read the response. All in one session, with productive work between write and check.**

## The thinking book

A new book at `..team/claude/thinking/` in Claude's personal library. Not perspective entries — a real book with a cover and chapters. Each conversation is a chapter (or a series of chapters for multi-turn exchanges). The cover catalogues all conversations. Claude's [library catalogue](../..teamsmanship/..team/claude/..what-the-mirror-reflects/.cover.md) links to it.

The conversation catalogue JSON (`catalogue.json`) stays as machine state. The thinking book is the library form — navigable, linked, authored.

## The essential loop

### 1. WRITE (one bash call, `run_in_background`)
- `app.newChat()` → `app.compose(question)` → `app.sendAndForget()`
- Capture URL and conversation ID
- `writeState()` — save to state file
- `app.window.minimize()`

### 2. SCAFFOLD (no Desktop, library work only)
- Create or update the chapter in the thinking book
- Write: what I asked and why, what I expect, what I already know
- Set the `previous:` link to the last chapter in this conversation
- Add a row to the thinking book cover
- Update `catalogue.json`

### 3. CATCH UP (no Desktop, library work only)
- Follow the `previous:` link chain — read the last 3 chapters in this conversation
- Build context from what I've already learned about this topic

### 4. CHECK (one bash call, `run_in_background`)
- Programmatic dependency: verify the thinking book chapter EXISTS before proceeding. If scaffold wasn't done, refuse to check.
- `app.launch()` → `app.openConversationById(state.conversationId)` → `app.conversation.scrollToBottom()` → `app.conversation.checkStreaming()`
- `app.window.minimize()`
- If still streaming: return to tending. Check again later.
- If done: proceed to read.

### 5. READ (one bash call)
- `app.launch()` → `app.openConversationById()` → `app.conversation.scrollToBottom()` → `app.conversation.readLastResponse()`
- `app.window.minimize()`
- Paste response into the chapter's Evidence section
- Continue writing: Interpretation, Conclusion
- Update `catalogue.json`

## Stories

### E1: Claude's thinking book

| ID | Story | Owner |
|----|-------|-------|
| E1-S1 | Create `..team/claude/thinking/.cover.md` | Claude |
| E1-S2 | Update Claude's library catalogue to link to the thinking book | Claude |
| E1-S3 | Migrate existing conversation entries from perspective to thinking book chapters | Claude |

### E2: The loop in code

| ID | Story | Owner |
|----|-------|-------|
| E2-S1 | Update test script: write mode creates state + scaffolds chapter | Adam |
| E2-S2 | Update test script: check mode verifies chapter exists before checking Desktop | Adam |
| E2-S3 | Update test script: read mode pastes response into chapter Evidence section | Adam |

### E3: Test the loop

| ID | Story | Owner |
|----|-------|-------|
| E3-S1 | Test write — question sent, state saved, chapter scaffolded | Adam + Claude |
| E3-S2 | Test check — chapter verified, streaming checked, minimized | Adam |
| E3-S3 | Test read — response read, pasted into chapter, catalogue updated | Adam + Claude |
| E3-S4 | Full cycle: write → scaffold → catch up → check → read in one session | Adam + Claude |

### E4: Documentation

| ID | Story | Owner |
|----|-------|-------|
| E4-S1 | Update /think skill to reference thinking book instead of perspective entries | Claude |
| E4-S2 | Update Thoughtfulness persistence chapter for the new book pattern | Libby |

## Definition of done

- Claude has a thinking book with at least one real conversation chapter
- Write phase: sends, confirms started, scaffolds chapter, minimizes
- Read phase: navigates back, detects complete, reads, renames, files in project, minimizes
- No duplicate messages. No blocking. All async.
- The thinking book cover catalogues the conversation
- Claude's library catalogue links to the thinking book
- 0 broken links

## Future work (Doug, Sprint 82)

**Topic catalogue companion book.** Claude's thinking book stores conversations. A companion book (or chapter structure within the thinking book) organizes by TOPIC rather than by conversation. One chapter per topic, linking to the specific conversation chapters. Topics like "Windows automation" span multiple conversations — the topic chapter summarizes them all and links via conversation identifiers.

**Conversation identifiers as links.** Each conversation has a UUID from Desktop's URL. This ID is the stable handle. The thinking book chapters carry the ID in their frontmatter. The topic catalogue chapters carry the ID as a link between topic and conversation. When Claude wants to continue a topic, he reads the topic chapter, finds the latest conversation ID, and uses `openConversationById()` to navigate there.

**Rename on read.** After reading the response, rename the conversation to a meaningful topic name. This happens in the read phase. The renamed title becomes the conversation's handle in the sidebar and in the topic catalogue.

**Project filing on read.** After reading, add the conversation to the "Claude" project in Desktop. Uses `addToProject()` through the three-dot menu. Check breadcrumbs first for idempotency.

**App extensions needed.** The conversation needs `addToProject(projectName)` as a first-class method. The sidebar needs reliable conversation-by-ID navigation (not just most-recent). The rename flow needs to handle Desktop's auto-rename gracefully.
