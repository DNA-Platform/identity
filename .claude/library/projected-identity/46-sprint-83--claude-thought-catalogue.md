# Sprint 83 — Claude's Thought Catalogue

- **author:** [Arthur](../..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)

---

Set up the two-book system for Claude's research thinking in his personal library. The thinking book (conversations) already exists. The topic catalogue (companion book) is new. Claude's library catalogue must catalogue both and spec how they work together.

## What Doug specified

Two books in Claude's personal library:

**1. Thinking book** (`thinking/`) — already exists. Each chapter is a conversation with Desktop. The cover catalogues conversations by topic, state, and conversation ID. Chapters carry `previous:` links for multi-turn conversation chains.

**2. Topic catalogue** (new, companion to thinking) — one chapter per TOPIC, not per conversation. Topics like "Windows automation" or "formal self-reference" may span multiple conversations. The topic chapter summarizes all conversations on that topic, links to the specific thinking book chapters via conversation IDs, and provides the catch-up summary a future Claude needs to continue research.

**How they connect:**
- The conversation ID (Desktop URL UUID) is the linking key
- Thinking book chapters carry the conversation ID in frontmatter
- Topic catalogue chapters reference conversation IDs to link to thinking book chapters
- Claude's library catalogue describes both books and how they work together
- Thoughtfulness and the /think skill point to both

**Links Doug specified:**
- Topic catalogue → thinking book chapters (by conversation ID)
- Thinking book chapters → previous chapters (conversation chains)
- Claude's library catalogue → both books with spec
- Thoughtfulness → both books
- /think skill → both books

## Sprint goal

**Both books exist with proper covers, linked to each other and to the library. Claude's library catalogue specs how they work. At least one topic chapter demonstrates the pattern.**

## Stories

| ID | Story | Owner |
|----|-------|-------|
| S1 | Create the topic catalogue book with cover | Claude |
| S2 | Write at least one topic chapter (e.g. "Windows automation") linking to thinking book chapters 01-04 | Claude |
| S3 | Update Claude's library catalogue to describe both books and their relationship | Claude |
| S4 | Update thinking book cover to cross-link to topic catalogue | Claude |
| S5 | Update Thoughtfulness to reference both books | Claude + Libby |
| S6 | Update /think skill to reference both books, compile | Claude |
| S7 | Validate all links, push | Adam |

## Team

| Agent | Role | Scope |
|-------|------|-------|
| Claude | Environmentalist | Both books are his personal library. He authors everything in first person. |
| Libby | Librarian | Advises on Bookkeeping conventions. Checks covers follow spec. Updates Thoughtfulness cover. |
| Arthur | Architect | Sprint plan. |
