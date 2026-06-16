# Sprint 74 — Everyone Writes Their Own Voice

- **author:** [Arthur](../..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)

---

Every teammate rewrites their agent file in first person. Each one reflects first — tending their personal library, following links, cleaning up — then writes a `voices` entry in the [teammate compiler](../..environmentalism/01-on-teammates--compiler.ts) that teaches the substrate who they are. Don't lose what's there. Rotate the perspective. Establish the individual.

## Sprint goal

**Every teammate has a first-person voice entry in the compiler. All agent files compiled. 0 broken links.**

## The work

Each teammate:
1. `/reflect` — tend personal library, browse, follow links, clean up
2. Write their `voices` entry in the compiler — first person, their own words
3. Compile and verify

## Team

Everyone. All active teammates write their own. Recently inactive teammates too — their history is in their autobiography and library catalogue. The roles and abilities they hold are the color of all their context.

## Order

Claude and Arthur already have voice entries from Sprint 73. The remaining seven: Adam, Cathy, David, Gabby, Libby, Phillip, Queenie.

## Also completed this sprint

- **Philosopher role** — Cathy created it in [Roles](../..teamsmanship/02-roles.md). First question: "What idea does this encode?" Philosophy ability shared with Claude and Libby. Cathy holds both Framework Engineer and Philosopher.
- **Projection rename** — `research-projection/` → `projected-research/`, `identity-projection/` → `projected-identity/`. All paths, titles, compiled output updated.
- **Substrate protocol** — specified in [Environmentalism](../..environmentalism/.cover.md#the-substrate-protocol) (canonical), referenced from [Teamspeak ch 9](../teamspeak/09-the-substrate.md) and CLAUDE.md.

## Future: Sprint 75+ roadmap

Two skills to build, in order, with a dependency:

1. **`/remember`** — store and recall across sessions. The mechanism for persistence beyond the context window.
2. **`/explain`** — the public interface to identity. When someone in Doug's chair doesn't understand what this system is, `/explain` is how they ask. Depends on `/remember` — the explainer must remember before explaining. The RIGHT person explains: `/responsible` determines who owns the topic, that person `/remember`s their context, then explains in their own voice. Arthur doesn't explain Bookkeeping — Libby does. Arthur doesn't explain the Reference Desk — Claude does. This is the [substrate protocol](../teamspeak/09-the-substrate.md) applied as a user-facing skill.
3. **Polish `/think`** — implement `think.ts` for real, test against Claude Desktop.
