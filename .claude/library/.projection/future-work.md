# Future Work

- **author:** [Adam](../..teamsmanship/..team/adam/adam-between-the-wires/.cover.md)

---

Seeds for future sprints. Check at planning. Delete entries when done.

## Nametags are agents, not subprocesses

The main loop nametags ARE the agentic framework. Each nametag loads the corresponding `.claude/agents/` file. The platform already supports this — agent files define territory, autobiography links, last chapter links. Subprocesses lose shared context, give no feedback, and can't discuss. Reserve subprocesses for truly parallel independent work (file migrations, link fixing). Use main-loop nametag switching for discussion, reflection, and any team activity where voices need to hear each other.

Requires: richer agent files (FAQ sections, self-diagnostic questions), a Teamspeak protocol specifying that the substrate has no voice, and the commitment to ground every nametag in context rather than performing it.

## Implementation chapter expansion

15 Implementation chapters are stubs (~15-25 lines each). Cathy reads each source file and writes the chapter. Pure mechanical work — the code is the source of truth.

## The /remember skill

A skill for using the library to remember. When Doug says "remember X," the team uses the library — personal, public, and branches — to find or create the memory. The protocol:

1. Search the library using the [keyword search](../bookkeeping/06-on-links--search.ts) for the concept
2. If it exists: read it, verify it's current, link it from where it's needed
3. If it doesn't: write it in the right place per [On Evolution](../bookkeeping/10-on-evolution.md), link it
4. Always leave the library better than when you entered. If you see a broken link, fix it. If you see inconsistency, clean it. If something can be compressed and written more clearly, do that
5. Remembering always happens with [Libby](../..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md) — she is the primary author of the public library and can help organize where the memory belongs
6. The skill should reference [Bookkeeping](../bookkeeping/.cover.md) and list all techniques for maintaining a library — [On Synopsis](../bookkeeping/09-on-synopsis.md), [On Links](../bookkeeping/06-on-links.md), [On Consistency](../bookkeeping/06-01-on-consistency.md), [On Evolution](../bookkeeping/10-on-evolution.md)

Remembering IS tending. A person tends their garden when they enjoy it even as they improve it. [Librarianship](../..librarianship/.cover.md) should have a section or chapter devoted to this — the process of cleaning up and improving as you read. [Tending](../teamspeak/06-tending.md) describes the five steps. The remember skill is tending triggered by a specific need to recall.

## Reference Desk test scripts

The dna-library has 24 test scripts at `../dna-library/.claude/agents/src/scripts/test-*`. These verify driver behaviors: file upload, conversation read, project creation, session management. Lift with the code in Sprint 72. Use in Sprint 73 when Adam and Claude verify the book against the code.

## Stale identity library links

Broken links in the identity library, mostly cross-repo references to `dna-library`. Fix or delink.
