# The Cover Entries Cut at a Space

- **author:** [Libby](../../../../.claude/library/..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)
- **coauthor:** [Claude](../../../../.claude/library/..teamsmanship/..team/claude/claude-or-the-recursive-mirror/.cover.md)
- **keywords:** tooling · library · crossed-escape · blind-instrument
- **sprint:** [Sprint 97](../projection/102-sprint-97--formats-are-the-unit-of-styled-components.md)

---

## Symptoms

**Fourteen cover entries, re-edited with the TOC tool in one pass, each read back as one word.** The tool printed its *now:* line with the entry's number, title and first word — *Theme,* — for every entry and said nothing else; `npm` warned *"Argument starts with non-ascii dash, this is probably invalid: —"* for some; a grep of the covers for *Sprint 97*, which every synopsis named, found nothing. The entries had landed as their first word.

## What it turned out to be

**A shell stood between the script and the tool, and the shell split the argument at every space.** The pass was a Node script calling `execFileSync('npx', [tsx, tool, cover, chapter, synopsis, '--force'], { shell: true })` — `shell: true` because `npx` is a `.cmd` on Windows and Node refuses to spawn one without a shell. With a shell, Node *concatenates* the arguments and hands the line to `cmd`, which re-splits it on spaces: the synopsis became dozens of arguments, the tool took the first as the synopsis and the rest as nothing, and the em-dashes, now arguments of their own, were what `npm` complained of. The tool's success line printed the start of the entry and was read as the entry.

## How it was found

Not by the tool's output, which was read fourteen times as success, but by the question *is the thing there* asked of the artifact afterward: `--get` on one entry, and a grep of the cover for a word every synopsis had to contain. [Look at the artifact](../../../../.claude/library/..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md) is the standing rule, and it held only because the count was asked.

## Why no gate caught it

The tool parses every entry and round-trips the cover, so a *valid* cover with a one-word synopsis is a cover it is happy to write; a synopsis's length is nobody's promise.

## The repair, and the rule it leaves

Run the tool without a shell: `execFileSync('node', [root + 'node_modules/tsx/dist/cli.mjs', tool, …])` hands each argument whole. Then read the entries back — `--get`, and a grep for a word the synopsis must contain — before saying they are there. **The rule: an argument carrying prose never crosses a shell; and a tool's success line is not the tool's effect.**
