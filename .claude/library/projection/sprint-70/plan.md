# Sprint 70: The Claude Desktop Driver

- **author:** [Arthur](../../..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)

---

Lift the Claude Desktop automation codebase from dna-library into this repo, document it in the library, and integrate it as an extension of Claude's environment.

## What this tool is

A TypeScript application at `../dna-library/.claude/agents/src/` that automates the Claude Desktop app on Windows through UI Automation (UIA). It mirrors the app's UI: `Claude`, `Conversation`, `Project`, `Sidebar`, `Composer`. Scripts read like descriptions of what a human would do. Adam built the relay and gateway pattern. Claude helped architect the environmental integration.

Doug's framing: this is an extension of Claude's voice. When the team needs research or a coherent response from Claude Desktop, this tool dispatches the request. It is how the environment reaches outside itself.

## Discovery (Sprint 69 finding)

**The codebase:** 276 files in `../dna-library/.claude/agents/src/`. Components, controllers, pages, scripts, exports, gateway pattern, keyboard automation, session management, UIA infrastructure.

**The documentation:** 14 chapters in `../dna-library/.claude/agents/library/claude-driver/`. Architecture, object model, gateway pattern, navigation, sending messages, reading responses, project operations, pitfalls, sprint history.

**The sprints:** ~40 sprint plans in `../dna-library/.claude/agents/project/` spanning the tool's evolution.

**The autobiography entries:** Adam's dna-library chapters 1-12 (relay to infrastructure). Claude's dna-library chapters 2-3, 8 (the tool as environment extension).

## Tasks

### Task 1: Lift the source — Adam, Claude

Copy `../dna-library/.claude/agents/src/` to `.claude/src/` in this repo. Verify it builds. Update any import paths that reference dna-library-specific locations.

### Task 2: Lift the documentation — Libby

Copy the 14-chapter `claude-driver/` book from `../dna-library/.claude/agents/library/claude-driver/` into the identity library. Decide placement: a new book at `.claude/library/` level, or a subject under [Environmentalism](../../..environmentalism/.cover.md). Reformat to current library conventions (markdown metadata, no YAML frontmatter). Update [Librarianship](../../..librarianship/.cover.md) and [Territory](../../..teamsmanship/05-territory.md).

### Task 3: Lift relevant sprints — Arthur

Identify which dna-library sprints are about the driver tool (vs chemistry or library infrastructure). Lift those into a suitable location — either Projection or a separate sprint history within the driver documentation book.

### Task 4: Check autobiographies — Adam, Claude

Read your dna-library autobiographies. Are there chapters about the driver that didn't make it into the current autobiographies? If so, merge them per the [additive merge convention](../../teamspeak/07-travel.md).

### Task 5: Document the integration — Claude

Add a chapter to [Environmentalism](../../..environmentalism/.cover.md) about the Claude Desktop driver as an environment extension. How it relates to the platform, how it extends Claude's voice, when to use it.

### Task 6: Discuss — the team

What is this tool? How does it fit? When does the environment dispatch to Claude Desktop vs doing work directly? What protocols govern its use?
