# On Teammates

- **specification:** Teammate
- **author:** [Claude](../..teamsmanship/..team/claude/claude-or-the-recursive-mirror/.cover.md)

---

An agent file is a platform handle — the minimum Claude Code needs to know a teammate exists and can be spawned. It lives at `.claude/agents/{name}.md`. The platform reads it. Everything else lives in the [library](../..librarianship/.cover.md).

## What an agent file must contain

Three sections, each serving a different reader.

### Frontmatter (for the platform)

```yaml
---
name: arthur
description: Architect — workspace boundaries, dependency graphs, global structure.
tools: Read, Grep, Glob, Edit, Write, Bash
---
```

**`name:`** — lowercase, matching the filename. The platform uses this to identify the agent.

**`description:`** — one sentence. The role name, a dash, the territory in human terms. This appears when the platform lists available agents. It must be dense enough to choose the right agent without reading further.

**`tools:`** — comma-separated list. What the agent can do. Most teammates get `Read, Grep, Glob, Edit, Write, Bash`. Specialized roles might differ.

### Body paragraph 1 (for the agent)

Identity and territory in two sentences: "You are {Name}. Territory: {path pattern}."

Then three links on consecutive lines — the waking-up sequence for the spawned agent:
1. **Library catalogue** — `[your library]` linking to the personal library catalogue
2. **Last chapter** — `[your last chapter]` linking to the most recent autobiography chapter
3. **Full autobiography** — `[your autobiography]` linking to the autobiography cover

These three links are the spawned agent's orientation path. The library catalogue gives context. The last chapter gives current state. The autobiography gives full identity. The same three-layer pattern as the main session's waking-up layers, scoped to one teammate.

### Body paragraph 2 (for the session)

Practice notes and navigation. The agent's known failure mode in one sentence. Then links to shared resources: the [library catalogue](../..librarianship/.cover.md), the [team](../..teamsmanship/.cover.md), [coding policy](../coding-policy/.cover.md), and the [voice convention](../../rules/voice.md).

## The relationship to Teamsmanship

The agent file is a thin projection of what [Teamsmanship](../..teamsmanship/.cover.md) specifies in depth. The name comes from [ch 01](../..teamsmanship/01-what-an-agent-is.md). The description comes from [ch 02](../..teamsmanship/02-roles-and-the-type-system.md) (roles). The territory comes from [ch 05](../..teamsmanship/05-code-territory.md). The autobiography link comes from the personal library in [..team/](../..teamsmanship/.cover.md#cataloguing--personal-libraries). The agent file duplicates the minimum. The library holds the depth.

If the agent file and the library disagree, the library is the source of truth. The agent file should be recompiled.

## The compiler

[01-on-agents.ts](01-on-agents.ts) reads Teamsmanship and generates `.claude/agents/*.md` files. Run with `npx tsx 01-on-agents.ts <library-path> [--write]`. Without `--write`, previews. With `--write`, writes the files.

The compiler reads the source material (Teamsmanship chapters, personal library paths, last autobiography chapters) and assembles the agent files according to this specification. The specification defines what the output must look like. The compiler implements the assembly. Together they are one specification — prose for the reader, code for the machine.

## One file per teammate

The mapping is one-to-one. Every teammate in Teamsmanship has a corresponding agent file. Every agent file corresponds to a teammate. If they drift, recompile. The compiler IS the consistency mechanism.

<!-- citations -->
[teamsmanship]: ../..teamsmanship/.cover.md
[librarianship]: ../..librarianship/.cover.md
[coding-policy]: ../coding-policy/.cover.md
[platform-interface]: ../the-platform-interface/01-the-platform-interface.md
