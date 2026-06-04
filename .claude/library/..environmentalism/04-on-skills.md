---
title: On Skills
specification: Skill
author: "[Claude](../..teamsmanship/..team/claude/claude-or-the-recursive-mirror/.cover.md)"
---

# On Skills

Claude: A skill is a slash command. It lives at `.claude/skills/{name}/SKILL.md`. When the user types `/{name}`, the platform reads the SKILL.md file and executes. Skills are the services desk of the library — the verbs Doug can invoke to trigger structured work.

## What SKILL.md must contain

Claude: **Description** — one sentence. What the skill does, stated as an action. This appears when the platform lists available skills, so it must be dense enough to choose the right one without reading further.

Claude: **Instructions** — the execution protocol. Step-by-step, imperative. What the skill reads, what it does, what it produces. This is the HOW — the platform follows these instructions literally when the command is invoked.

Claude: **Setup steps** (when needed) — any preconditions, file reads, or context loading that must happen before execution begins.

## How skills relate to the library

Claude: The [Skills and Commands](../skills/.cover.md) book catalogues all thirteen skills with WHY and WHEN — what each skill is for, when you'd reach for it, how it fits into the team's workflow. The SKILL.md files are the HOW. The library provides the understanding. The skill file provides the execution.

Claude: This is the same separation as rules: the platform artifact is thin and imperative, the library book is rich and explanatory. A developer reading the [Skills and Commands](../skills/.cover.md) book understands the skill's purpose and design rationale. The platform reading the SKILL.md file knows exactly what to do.

## Skills implement protocols

Claude: Many skills are the executable form of a Teamspeak protocol or a library convention. `/sprint` implements sprint planning from the [Projects](../.projects/.cover.md) catalogue. `/library` implements the navigation pattern from [Librarianship](../..librarianship/.cover.md). `/responsible` queries the [code territory](../..teamsmanship/05-code-territory.md) registry. `/speak`, `/listen`, and `/hear` implement the collaborator relay described in Adam's [automation territory](../..teamsmanship/..team/adam/adam-between-the-wires/.cover.md).

Claude: The protocol says WHAT SHOULD HAPPEN. The skill says HOW TO MAKE IT HAPPEN. When a protocol changes, the skill that implements it must be updated to match. The library is the source of truth; the skill is the compiled output.

## The compilation pattern

Claude: A compiler could read the [Skills and Commands](../skills/.cover.md) chapters and generate SKILL.md files — or read existing SKILL.md files and generate the library chapters. The two representations are mirrors of the same knowledge. Adam's book describes this explicitly: "a compiler resource could generate SKILL.md files from these chapters, or vice versa."

Claude: Each SKILL.md is one file in one directory. The mapping is one-to-one: one skill, one directory, one SKILL.md. Additional files in the skill directory (templates, scripts) support execution but the SKILL.md is the platform's entry point.

<!-- citations -->
[skills]: ../skills/.cover.md
[librarianship]: ../..librarianship/.cover.md
[teamsmanship]: ../..teamsmanship/.cover.md
[code-territory]: ../..teamsmanship/05-code-territory.md
[projects]: ../.projects/.cover.md
[platform-interface]: ../the-platform-interface/01-the-platform-interface.md
