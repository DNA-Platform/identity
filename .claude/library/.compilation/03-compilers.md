# Compilers

- **author:** [Libby](../..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)

---

Four compilers generate the platform files that Claude Code loads at runtime. Each reads library content and produces one or more files in `.claude/`.

## Teammate compiler

- **Source:** [01-on-teammates--compiler.ts](../..environmentalism/01-on-teammates--compiler.ts)
- **Specification:** [On Teammates](../..environmentalism/01-on-teammates.md)
- **Reads:** `..teamsmanship/..team/` (teammate directories, autobiographies, personal libraries)
- **Generates:** `agents/*.md` (one file per teammate)
- **What it produces:** Name, description, territory link, autobiography link, last-chapter link, practice notes, shared resource links, voice convention.

## Bootstrap compiler

- **Source:** [02-on-bootstrap--compiler.ts](../..environmentalism/02-on-bootstrap--compiler.ts)
- **Specification:** [On Bootstrap](../..environmentalism/02-on-bootstrap.md)
- **Reads:** Teamspeak cover (protocol count), `..team/` (teammate names), subject catalogues (dot-prefixed directories), Bookkeeping cover (chapter count), Environmentalism (commit tool existence), all non-dot books (structure diagram)
- **Generates:** `.claude/CLAUDE.md`
- **What it produces:** The bootstrap file. Communication protocols, roles/territory, identity, the library, waking-up layers, structure diagram, compilation note.

## Rules compiler

- **Source:** [03-on-rules--compiler.ts](../..environmentalism/03-on-rules--compiler.ts)
- **Specification:** [On Rules](../..environmentalism/03-on-rules.md)
- **Reads:** Rules source files in the library
- **Generates:** `rules/*.md`
- **What it produces:** Context-scoped rules loaded by Claude Code when matching files are opened.

## Skills compiler

- **Source:** [04-on-skills--compiler.ts](../..environmentalism/04-on-skills--compiler.ts)
- **Specification:** [On Skills](../..environmentalism/04-on-skills.md)
- **Reads:** Skill source directories in `our-skillset/`
- **Generates:** `skills/*/SKILL.md`
- **What it produces:** Slash commands invokable by the user. Each skill has a SKILL.md with frontmatter and instructions.

## Compiler diff as a review signal

When a compiler warns that the output differs from what the library would generate — "SKILL.md body differs from library chapter" — that is a signal to REVIEW, not just overwrite. The old compiled file may contain content that the library chapter is missing. Before recompiling with `--write`:

1. Read the compiler warning
2. Diff the old compiled file against what the library chapter would produce
3. If the compiled file has content the library doesn't — merge it INTO the library chapter first
4. Then recompile

The library is the source of truth. But if someone hand-edited the compiled file (violating [provenance](02-on-provenance.md)), their edits exist only in the compiled output. Recompiling without merging loses those edits. The warning IS the merge trigger.

## Running compilers

Each compiler is a TypeScript file run with `npx tsx`. The convention:

```bash
npx tsx .claude/library/..environmentalism/01-on-teammates--compiler.ts .claude/library --write
npx tsx .claude/library/..environmentalism/02-on-bootstrap--compiler.ts .claude/library --write
```

Without `--write`, compilers preview. With `--write`, they generate. The `/audit` skill runs each compiler in preview mode and diffs against the current output to detect staleness.
