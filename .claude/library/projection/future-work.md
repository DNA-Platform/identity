# Future Work

- **author:** [Adam](../..teamsmanship/..team/adam/adam-between-the-wires/.cover.md)

---

Seeds for future sprints. Check at planning. Delete entries when done.

## Nametags are agents, not subprocesses

The main loop nametags ARE the agentic framework. Each nametag loads the corresponding `.claude/agents/` file. The platform already supports this — agent files define territory, autobiography links, last chapter links. Subprocesses lose shared context, give no feedback, and can't discuss. Reserve subprocesses for truly parallel independent work (file migrations, link fixing). Use main-loop nametag switching for discussion, reflection, and any team activity where voices need to hear each other.

Requires: richer agent files (FAQ sections, self-diagnostic questions), a Teamspeak protocol specifying that the substrate has no voice, and the commitment to ground every nametag in context rather than performing it.

## Implementation chapter expansion

15 Implementation chapters are stubs (~15-25 lines each). Cathy reads each source file and writes the chapter. Pure mechanical work — the code is the source of truth.

## Stale identity library links

~137 broken links in the identity library, mostly cross-repo references to `dna-library`. Fix or delink.
