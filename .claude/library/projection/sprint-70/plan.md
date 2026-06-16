# Sprint 70: The Reference Desk — Phase 1: Lift and Catalogue

- **author:** [Arthur](../../..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)

---

Lift the Claude Desktop automation codebase from dna-library, get it running, create the Reference Desk book, and begin documenting the tool as Claude's research instrument.

## What this is

Doug's architecture: the tool is a **Reference Desk** — the place in the library where Claude goes to research. The book is `reference-desk/` at the library root, with `subject: Research`. Catalogued by [Environmentalism](../../..environmentalism/.cover.md) (primary — it's an environment extension) and [Librarianship](../../..librarianship/.cover.md) (secondary — it's a knowledge resource).

The abstraction: Claude Desktop is how Claude thinks about subjects that require deeper research than the context window allows. He dispatches a question, tracks the session, stores responses in his [perspective](../../..teamsmanship/..team/claude/.perspective/.cover.md), annotates and reflects on them. The tool is an extension of Claude's mind.

## Task 1: Lift the source — Adam, Claude

Copy `../dna-library/.claude/agents/src/` to `.claude/src/` in this repo. Verify it builds (`npx tsx` on the entry point). Update imports that reference dna-library-specific paths.

## Task 2: Create the Reference Desk book — Libby

Create `reference-desk/` at `.claude/library/` with a cover. The cover follows [On Covers](../../bookkeeping/03-on-covers.md):

```markdown
# Reference Desk

- **author:** [Libby](...)
- **coauthor:** [Adam](...), [Claude](...)
- **subject:** [Research](.cover.md)
```

The 14 chapters from `../dna-library/.claude/agents/library/claude-driver/` become the initial chapters, reformatted to current conventions (markdown metadata, no YAML). Rewrite the cover to frame the tool as Claude's research instrument, not just an automation driver.

## Task 3: Code assignments — Arthur

Update [Territory](../../..teamsmanship/05-territory.md):
- `.claude/src/**` → Claude (environment infrastructure) + Adam (automation)
- `.claude/library/reference-desk/**` → Libby (author) + Claude (coauthor, subject expert) + Adam (coauthor, builder)
- Queenie assigned to `.claude/src/` tests — the test suite for the driver

## Task 4: Catalogue the book — Libby

Update [Environmentalism](../../..environmentalism/.cover.md) to catalogue the Reference Desk as a book about The Environment. Update [Librarianship](../../..librarianship/.cover.md) to list it as a secondary subject. Update [Compilation](../../.compilation/.cover.md) to list `.claude/src/` as catalogued source code.

## Task 5: Integrate sprints — Arthur

Identify which dna-library project sprints relate to the driver tool. Lift those sprint plans into a section of Projection or into the Reference Desk book's sprint history chapter. Link them so the team can read the development arc.

## Task 6: Check autobiographies — Adam, Claude

Re-read your dna-library autobiography chapters about the driver. Are there perspectives not yet in your current autobiography? If so, merge per the [additive convention](../../teamspeak/07-travel.md). Specifically:
- Adam: chapters about the gateway pattern, the file dialog, verified automation
- Claude: chapters about "not just a driver," "what does the app mean"

---

# Sprint 71: The Research Protocol

- **author:** [Arthur](../../..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)

---

Design and build the `/research` skill — Claude's protocol for using the Reference Desk.

## The protocol (from Doug's architecture)

1. Claude invents a question when the team needs deeper research
2. Claude dispatches to Claude Desktop through the driver
3. Claude tracks sessions so he can continue conversations
4. Responses are stored in Claude's [perspective](../../..teamsmanship/..team/claude/.perspective/.cover.md) with annotations
5. Claude reflects on the responses — what was said, what it means, how it connects to what the team knows
6. The team reads Claude's annotated perspective entries as the research output

## Task 1: Create the /research skill — Adam, Claude

Write the skill chapter in [Our Skillset](../../our-skillset/.cover.md). The skill describes: when to research (the team encounters something it can't resolve from the library alone), how to dispatch (send a question through the driver), how to track (session IDs, conversation continuity), how to store (perspective entries with links), how to reflect (Claude annotates what was learned).

Compile the skill per the [skills compilation chain](../../.compilation/03-compilers.md).

## Task 2: Write the Environmentalism chapter — Claude

Add a chapter to [Environmentalism](../../..environmentalism/.cover.md) about the Reference Desk as an environment extension. How the environment reaches outside itself. When the context window isn't enough. The dispatch model. This is the specification that the skill implements.

## Task 3: Update Claude's personal library — Claude

Add a self-diagnostic question to the catalogue: "When do I use the Reference Desk?" → link to the research skill and the Environmentalism chapter. The Reference Desk is Claude's instrument — his catalogue should know about it.

## Task 4: Design the perspective storage — Claude, Libby

How do research responses get stored? Claude's `.perspective/` directory currently holds raw observations. Research responses are a new kind: structured output from Claude Desktop, annotated by Claude, linked to the question that prompted them. Design the format per [On Chapters](../../bookkeeping/02-on-chapters.md).

---

# Sprint 72: The Reference Desk — Phase 2: Documentation and Testing

- **author:** [Arthur](../../..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)

---

Write the Reference Desk book rigorously. Document every module. Test everything. Queenie owns the test suite.

## Task 1: Document the code — Adam, Claude

The 14 chapters from dna-library are a starting point. Many reference the old project structure. Rewrite to reference `.claude/src/`. Ensure every chapter links to the source files it documents. Follow [On Synopsis](../../bookkeeping/09-on-synopsis.md#write-for-evolution) — no hardcoded counts, describe arcs.

## Task 2: Write tests — Queenie

The dna-library codebase has test scripts but no formal test suite. Design tests that pin the driver's behavior: navigation, message sending, response reading, project operations. The test architecture follows the same principles as the [chemistry test suite](../../../library/chemistry/.lib/testing/.cover.md) — tests are promises, not mechanism checks.

## Task 3: Run the tool — the team

Actually use the Reference Desk. Claude dispatches a real research question. The team watches, discusses what comes back, and decides how to store and link the response. This is the proof that the tool works in its new home.
