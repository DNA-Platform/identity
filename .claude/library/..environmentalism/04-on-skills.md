# On Skills

- **specification:** Skill
- **author:** [Claude](../..teamsmanship/..team/claude/claude-or-the-recursive-mirror/.cover.md)
- **coauthor:** [Arthur](../..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)

---

A skill is a slash command. It lives at `.claude/skills/{name}/SKILL.md`. When the user types `/{name}`, the platform reads the SKILL.md file and executes. Skills are the services desk of the library — the verbs Doug can invoke to trigger structured work.

## What SKILL.md must contain

**Description** — one sentence. What the skill does, stated as an action. This appears when the platform lists available skills, so it must be dense enough to choose the right one without reading further.

**Instructions** — the execution protocol. Step-by-step, imperative. What the skill reads, what it does, what it produces. This is the HOW — the platform follows these instructions literally when the command is invoked.

**Setup steps** (when needed) — any preconditions, file reads, or context loading that must happen before execution begins.

## How skills relate to the library

A skill file is thin and imperative — the platform reads it literally. The library provides the understanding: WHY a skill exists, WHEN to use it, how it fits into the team's workflow. This is the same separation as [rules](03-on-rules.md): the platform artifact carries enough to execute, the library carries enough to understand.

A developer reading the library learns a skill's purpose and design rationale. The platform reading the SKILL.md file knows exactly what to do. When a library chapter and its corresponding skill file disagree, the library is the source of truth and the skill should be recompiled.

## Skills implement protocols

Many skills are the executable form of a [Teamspeak](../teamspeak/.cover.md) protocol or a library convention. `/sprint` implements sprint planning. `/library` implements the navigation pattern from [Librarianship](../..librarianship/.cover.md). `/responsible` queries the [territory](../..teamsmanship/05-territory.md) registry.

The protocol says WHAT SHOULD HAPPEN. The skill says HOW TO MAKE IT HAPPEN. When a protocol changes, the skill that implements it must be updated to match. The library is the source of truth; the skill is the compiled output.

## The compiler

[04-on-skills--compiler.ts](04-on-skills--compiler.ts) reads the [Our Skillset](../our-skillset/.cover.md) book and generates `.claude/skills/{name}/SKILL.md` files. Run with `npx tsx 04-on-skills--compiler.ts <library-path> [--write]`. Without `--write`, previews. With `--write`, writes the files.

Each SKILL.md is one file in one directory. The mapping is one-to-one: one skill, one directory, one SKILL.md. Additional files in the skill directory (templates, scripts) support execution but the SKILL.md is the platform's entry point. The compiler preserves existing SKILL.md frontmatter and instructions, adding or updating only the library link comment.

## Provenance

Every compiled SKILL.md is a generated artifact — though it may also contain hand-written instructions that the compiler preserves. The compilation chain: `04-on-skills.md` specifies, `04-on-skills--compiler.ts` compiles, `.claude/skills/{name}/SKILL.md` is the output. The compiler adds a `<!-- library: ... -->` comment to each generated file, linking the compiled output back to its library source chapter. A reader who finds a compiled skill follows this chain backward to reach the specification that governs it.

<!-- citations -->
[librarianship]: ../..librarianship/.cover.md
[teamsmanship]: ../..teamsmanship/.cover.md
[teamspeak]: ../teamspeak/.cover.md
[territory]: ../..teamsmanship/05-territory.md
[rules]: 03-on-rules.md
