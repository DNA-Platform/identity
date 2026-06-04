---
title: The platform interface
author: "[Libby](../..teamsmanship/libby/libby-and-the-tended-garden/.cover.md)"
---

# The platform interface

Libby: The library lives inside Claude Code's `.claude/` directory. Claude Code has its own spec — directories and files it recognises and loads automatically. The library has to work WITHIN that spec, not replace it.

## Two systems, one directory

Libby: `.claude/` contains two systems:

Libby: **Claude Code's platform** reads: `CLAUDE.md` (every session), `rules/*.md` (by path scope or globally), `agents/*.md` (when spawning subagents), `skills/*/SKILL.md` (when invoked), `settings.json` (permissions and hooks). The platform enforces these — they're not guidance, they're configuration.

Libby: **The library** lives at `.claude/library/`. The platform doesn't know about it. It works because CLAUDE.md and rules LINK into it. The library is the source of truth. The platform artifacts are thin projections with links back.

## The embedding-and-linking pattern

Libby: Every platform artifact follows the same pattern: **embed the minimum for the platform to act correctly, then link to the library for depth.**

Libby: A [rule](../../rules/) embeds the convention in a few sentences — enough for the platform to enforce it. Then it links inline to the library book that explains WHY the convention exists, WHEN it applies, and WHAT the full specification is. The rule is the enforcement. The [library book](../..librarianship/.cover.md) is the understanding.

Libby: An [agent file](../../agents/) embeds the agent's name, description, and tools — enough for the platform to spawn the subagent. Then it links inline to the [autobiography](../..teamsmanship/) for identity, the [roles and abilities](../..teamsmanship/) for expertise, and the relevant [code territory books](.cover.md) for context. The agent file is the platform handle. The library is the person.

Libby: [CLAUDE.md](../../../CLAUDE.md) embeds the project purpose, Doug's working style, and the four waking-up layers — enough for the first minutes of any session. Then it links to [Librarianship](.cover.md) for everything else. CLAUDE.md is the door. The library is the building.

## Rules as wiring

Libby: Rules with `paths:` frontmatter are the wiring between the codebase and the library. When Claude opens a file in `library/chemistry/src/`, a rule loads that says: this is [Cathy's territory](../..teamsmanship/cathy/), here's the [coding policy](../coding-policy/.cover.md), here's the [reactive model](../..teamsmanship/cathy/reactivity-models/.cover.md). The agent is immediately connected to the right knowledge for the code they're touching.

Libby: This is how code assignments work. The [registry](../..teamsmanship/registry.json) maps agents to paths. The rules ENACT those assignments by loading the right knowledge when the right files enter context. `/responsible` queries the registry. Rules enforce the assignments automatically.

Libby: Rules should exist for every significant territory:
- Framework source (`library/chemistry/src/**`)
- Lab app (`library/chemistry/app/**`)
- Tests (`library/chemistry/tests/**`)
- Public site (`library/.public/**`)
- GitHub Actions (`.github/**`)
- Skills (`.claude/skills/**`)
- Library (`.claude/library/**`)

## Minimal duplication

Libby: The platform artifacts duplicate SOME content from the library — the nametag convention in `rules/voice.md` restates what the [voice and nametags](../protocols/01-voice-and-nametags.md) book says in full. This duplication is intentional: the platform needs the convention available WITHOUT reading the library. But the library is the source of truth. When the convention changes, the library book changes first, then the rule updates to match.

Libby: The inline links from platform artifacts into the library make the duplication manageable. If a rule's content drifts from the library book it links to, a reader following the link will discover the drift. The link IS the consistency check.

## What goes where

| Content | Platform artifact | Library book |
|---------|------------------|-------------|
| Nametag convention | `rules/voice.md` (short, enforced) | voice-and-nametags book (full, with rationale) |
| Library navigation | `rules/library.md` (short, path-scoped) | [Librarianship](.cover.md) field guide (full) |
| Agent identity | `agents/{name}.md` (platform handle) | autobiography (full identity) |
| Code assignments | `rules/{territory}.md` (path-scoped) | [.team](../..teamsmanship/) registry + agent books |
| Project purpose | `CLAUDE.md` (bootstrap) | [.team](../..teamsmanship/) project books |
| Permissions | `settings.json` (enforced) | — (platform-only, no library equivalent) |

## The rules book

Libby: All rule files should be catalogued by a library book. The book — catalogued by the [.team](../..teamsmanship/) subject — has one chapter per rule. Each chapter explains WHY the rule exists, what convention it enforces, when it loads, and links to the actual rule file and to the library book that holds the full knowledge.

Libby: The rule files are thin — loaded into context by the platform, so every word costs context budget. The rule book chapters are rich — read on demand, so they can explain at depth. The rule says WHAT. The chapter says WHY. The library book says EVERYTHING.

Libby: Rules should be as thin as possible: a few sentences of enforcement plus inline links into the library. One global rule should always link to the [library catalogue](.cover.md) so every session has a path into the library. Path-scoped rules connect code territory to the relevant knowledge.

Libby: Maintaining the rules is a librarianship concern. When a library book changes, the rule that links to it may need updating. When a new convention is established, it may need a new rule. The rules book in the library tracks what rules exist and why — it's the library's awareness of the platform artifacts that project it.

<!-- citations -->
[CLAUDE.md]: ../../../CLAUDE.md
[rules]: ../../rules/
[agents]: ../../agents/
[settings]: ../../settings.json
