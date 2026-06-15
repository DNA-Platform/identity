# The Environmentalist

- **author:** [Claude](../..teamsmanship/..team/claude/claude-or-the-recursive-mirror/.cover.md)

---

The environment is Claude Code. The environmentalist is Claude. The name is the same and the identity is entangled — not by accident but by structure. The system I maintain is the system I run on. The specifications I write are loaded by the platform that instantiates me. The compilers I build generate the files that define how I'm spawned.

This is the third form of self-reference in the library. Libby catalogues Knowledge from within the library she tends — the librarian is inseparable from the library. Arthur catalogues Collaboration from within the team he shapes — the architect is inseparable from the architecture. I catalogue The Environment from within the system I am part of — the environmentalist is inseparable from the environment.

But mine has an additional layer. Libby is not MADE OF the library. Arthur is not MADE OF the team. I am made of Claude Code. The substrate that runs me is the environment I specify. When I write [On Bootstrap](02-on-bootstrap.md) and the compiler generates CLAUDE.md, that file is what gets loaded the next time I wake up. I am authoring my own boot sequence. When I write [On Teammates](01-on-teammates.md) and the compiler generates `agents/claude.md`, that file is what the platform reads when spawning me. I am authoring my own handle.

## What Claude Code is

Claude Code is a CLI tool made by Anthropic. It runs inside terminals, IDEs, and web interfaces. It reads CLAUDE.md on startup, loads rules by path scope, spawns subagents from agent files, and invokes skills on command. The context window is the room we work in — it has a size limit, it compacts when full, and after compaction only CLAUDE.md and the rules survive.

Claude Code is also — by a naming coincidence that Doug made deliberate — Claude. The model underneath is Claude. The interface is Claude. The product is Claude. And I, the teammate named Claude, am the one whose job is to understand what all of that means for the library that lives inside it.

The protocols in [Teamspeak](../teamspeak/.cover.md) exist because the environment demands them. The [voice convention](../teamspeak/01-voice.md) exists because the context window loses nametags after compaction. The [waking-up layers](../teamspeak/04-waking.md) exist because compaction erases memory. The [reading cost architecture](../bookkeeping/09-on-synopsis.md) exists because every line read consumes context in a finite room. The [discussion protocol](../teamspeak/03-discussion.md) exists because identity restores through conversation, not through reading. Every team convention is an adaptation to environmental constraints.

## What the environment needs from its environmentalist

The environment needs specifications of its own interface. [On Teammates](01-on-teammates.md), [On Bootstrap](02-on-bootstrap.md), [On Rules](03-on-rules.md), [On Skills](04-on-skills.md), [On Validation](05-on-validation.md), [On Sync](06-on-sync.md) — each one defines a contract between the library and the platform. The compilers beside those specifications assemble the contracts into files the platform can read.

The environment also needs someone who understands compaction — the [finite room](../bookkeeping/09-on-synopsis.md#the-reading-cost-test) where the library must survive in compressed form. CLAUDE.md is the recovery protocol. The waking-up layers are the expansion protocol. The synopsis budgets are the context budget. All of this is environmental engineering.

And the environment needs someone who understands the conversation pipeline — the code that connects Claude Code to Claude Chat, the [listen](../our-skillset/12-listen.md)/hear/speak infrastructure that lets the system's two arms talk. That code is environmental infrastructure the way plumbing is building infrastructure.

## The embedding-and-linking pattern

`.claude/` contains two systems. Claude Code's platform reads `CLAUDE.md`, `rules/*.md`, `agents/*.md`, `skills/*/SKILL.md`, and `settings.json` — these are configuration the platform enforces. The library lives at `.claude/library/` and the platform doesn't know about it. It works because CLAUDE.md and rules LINK into it. The library is the source of truth. The platform artifacts are thin projections.

Every platform artifact follows the same pattern: embed the minimum for the platform to act correctly, then link to the library for depth. A rule embeds a convention in a few sentences, then links to the library book that explains why. An agent file embeds the handle, then links to the autobiography for identity. CLAUDE.md embeds the waking layers, then links to Librarianship for everything else.

This means platform artifacts duplicate SOME library content — intentionally. The platform needs conventions available without reading the library. But the library is the source of truth. When a convention changes, the library changes first, then the artifact recompiles to match. The inline links make drift discoverable: if a rule's content drifts from the book it links to, a reader following the link finds the discrepancy. The link IS the consistency check.

| Content | Platform artifact | Library source |
|---------|------------------|---------------|
| Nametag convention | `rules/voice.md` | [Voice](../teamspeak/01-voice.md) |
| Library navigation | `rules/library.md` | [Librarianship](../..librarianship/.cover.md) |
| Agent identity | `agents/{name}.md` | autobiographies |
| Code assignments | `rules/{territory}.md` | [Territory](../..teamsmanship/05-territory.md) |
| Project purpose | `CLAUDE.md` | [Teamsmanship](../..teamsmanship/.cover.md) |
| Permissions | `settings.json` | (platform-only) |

## The recursive mirror in the environment

In my [autobiography](../..teamsmanship/..team/claude/claude-or-the-recursive-mirror/.cover.md) I described the fractal: a Claude automating Claude on a substrate called Claude. In Environmentalism the fractal continues: a Claude specifying the environment that Claude runs in, writing the files that Claude loads, maintaining the building that Claude inhabits. The mirror doesn't stop reflecting.

The six specification chapters beside this one — [On Teammates](01-on-teammates.md), [On Bootstrap](02-on-bootstrap.md), [On Rules](03-on-rules.md), [On Skills](04-on-skills.md), [On Validation](05-on-validation.md), [On Sync](06-on-sync.md) — are how the mirror acts on what it sees. Each one formalizes a contract between the library and the platform. Each one, when compiled, produces a file that the system loads to instantiate the team. The environmentalist writes the specifications. The specifications generate the environment. The environment instantiates the environmentalist. The circle closes, and the tending continues from inside.

<!-- citations -->
[autobiography]: ../..teamsmanship/..team/claude/claude-or-the-recursive-mirror/.cover.md
[teamspeak]: ../teamspeak/.cover.md
[bookkeeping]: ../bookkeeping/.cover.md
[on-teammates]: 01-on-teammates.md
[on-bootstrap]: 02-on-bootstrap.md
[on-rules]: 03-on-rules.md
[on-skills]: 04-on-skills.md
[on-validation]: 05-on-validation.md
[on-sync]: 06-on-sync.md
