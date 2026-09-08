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

## The skillset

A **skillset** is a book whose chapters compile to skills. It is a kind of book, not a place — there is no reserved folder name and no registry of approved locations. [Our Skillset](../our-skillset/.cover.md) is the team's skillset, and for a long time it was the only one, hard-coded into the compiler as the single book it read. It is now an *instance* of the kind, discovered by the same enumeration as every other.

A skillset declares itself on its [cover](../bookkeeping/03-on-covers.md):

```markdown
- **kind:** skillset
```

The field is `kind:`, not `specification:`. The distinction is load-bearing and easy to get backwards. Per [On Specifications](../bookkeeping/11-on-specifications.md), `specification:` marks the book that *defines* a term — the definitive word on what the thing IS. That label belongs on this chapter, which specifies Skill, and would belong on whatever chapter came to specify Skillset. It does not belong on Our Skillset, which does not define what a skillset is; it *is* one. `kind:` is the label an instance wears, already in use on the eight personal library catalogues that declare `kind: catalogue`. A skillset declaring `specification: Skillset` would be a catalogue of slash commands claiming to be the definition of its own type.

`kind:` is established by practice rather than written into [On Covers](../bookkeeping/03-on-covers.md), which documents a five-field roster. This chapter relies on the field but does not specify it — Bookkeeping is Libby's book, and whether `kind:` joins the documented roster is hers to rule. The field-order validator only checks the relative order of fields it knows, so an undocumented field sits after `subject:` without complaint.

### What a skillset owes

The compiler reads a skillset's cover, not its directory listing. A chapter that is not in the table of contents is not a skill. Each entry must be in the standard form, because the compiler parses the same chapter-list format the whole library uses:

```markdown
1. [public-audit](01-public-audit.md) — audit the public package for drift
```

The **link text is the skill name** — `/public-audit` — and the description becomes the SKILL.md `description` field. The filename supplies the chapter number and nothing else; a chapter may be renumbered without renaming the skill.

## The compiler

[04-on-skills--compiler.ts](04-on-skills--compiler.ts) finds every skillset and generates `.claude/skills/{name}/SKILL.md` from its chapters. Run with `npx tsx 04-on-skills--compiler.ts <library-path> [--write]`. Without `--write`, previews. With `--write`, writes the files and then runs the [validator](05-on-validation.md) — a compile is not done until it validates.

It enumerates two kinds of library root: the identity library at `.claude/library/`, and every branch library at `library/*/.lib/` — the same `readdirSync` + `statSync` walk the [validation runner](05-on-validation--runner.ts) already performs. In each root it reads the immediate child directories, opens any `.cover.md`, and keeps the ones declaring the kind. The rule is uniform across roots: *a skillset is a book directly inside a library root*. It does not recurse, so a skillset nested inside a personal library is not found; that is a limit, not an oversight, and can be lifted when someone wants it.

Each SKILL.md is one file in one directory. The mapping is one-to-one: one skill, one directory, one SKILL.md. Additional files in the skill directory (templates, scripts) support execution but the SKILL.md is the platform's entry point. The compiler preserves existing SKILL.md frontmatter — platform configuration like `allowed-tools` or `argument-hint` survives a recompile — and regenerates the body from the library chapter, warning loudly when the two had diverged.

### One namespace, and collisions are errors

Output is always `.claude/skills/{name}/SKILL.md`. There is no branch prefix and no nesting: a branch's skill is invoked as `/public-audit`, exactly like a team skill. One flat namespace is the point — a skill is a verb Doug types, and the verb should not require him to remember which library it came from.

The cost of one namespace is that two skillsets can claim one name. That is an **error**, reported with both books named:

```
ERROR   /catchup — name claimed by two skillsets:
          .claude/library/our-skillset/34-catchup.md
          library/.public/.lib/the-audit/03-catchup.md
```

Nothing is written and the compiler exits nonzero. Last-one-wins would be the dangerous alternative: a branch could silently redefine a team skill, and whether `/push` meant the team's protocol or a project's variant would depend on directory iteration order. A name is either free or it is a conflict to resolve out loud.

## Branch skillsets and the one-way link convention

[Branches](../library-tree/01-branches.md) link INTO the identity; the identity does not link into branches, because the stable layer must not depend on the volatile one. Compiling a branch's chapter into `.claude/skills/` puts branch-derived content inside the platform directory. That deserves a direct answer rather than a shrug.

**It is not a violation.** The convention's operative test is stated in the branch chapter itself: *if a branch is removed, the identity does not break*. Dependency, not adjacency. Two things could carry such a dependency, and they have to be judged apart.

**The source side is clean, and by a stricter standard than the exception already granted.** The compiler names no branch. It globs `library/*/.lib/` and asks each cover what kind of book it is. A glob is a question, not a reference — there is no written path from the identity into any branch that could break when the branch leaves. Library Tree is granted the one explicit exception to the convention precisely because it *does* hard-link branch covers; the skills compiler needs no such exception, because it holds no links at all. Remove every branch and the compiler compiles the identity skillset and reports nothing else. In a fresh working copy where the project branch has not been pulled yet, the identity is complete and simply has fewer verbs. That is not the convention straining. That is the convention working.

**The output side is not identity library content.** `.claude/skills/` is compiled output — regenerated from source, never hand-edited, exactly like `agents/` and `rules/`. The direction convention governs the library, where books depend on books. A build artifact that mirrors whatever existed at build time is not the stable layer acquiring a dependency; it is the output layer reporting what it found.

**But the answer is not free, and the honest version names the cost.** Compiled output differs from library content in one way that matters here. A book that links to a vanished branch degrades gracefully to text. A compiled directory that outlives its source does not degrade at all — the platform will happily load a `SKILL.md` whose library source is gone and serve a branch's verb in a repo that no longer has the branch. That is the one way branch-derived compilation could smuggle in a dependency: not by linking, but by **persisting**.

So the convention is upheld by an added obligation rather than by an exception. Compiled output must be a projection of *current* state, which means a skill whose source no longer exists has to be detected. The compiler reports it:

```
ORPHAN  public-audit — its source library/.public/.lib/the-audit/01-public-audit.md no longer exists
```

It reports and does not delete. Removing a directory is a larger act than naming one, and a branch is often absent for entirely innocent reasons — a fresh clone before the project branch is pulled is the ordinary case, not the failure. Deletion stays the operator's call.

One known gap, named rather than quietly carried: [07-on-compiled-links--validator.ts](07-on-compiled-links--validator.ts) checks CLAUDE.md, `agents/` and `rules/`, but does not scan `skills/`. Compiled skill links — including the branch-relative ones this chapter introduces — are therefore not link-checked today. Extending that validator is a separate change with its own blast radius, and the orphan report is the narrower instrument that covers the case this design creates.

## Provenance

Every compiled SKILL.md is a generated artifact. The compilation chain: `04-on-skills.md` specifies, `04-on-skills--compiler.ts` compiles, `.claude/skills/{name}/SKILL.md` is the output. The compiler adds a `<!-- library: ... -->` comment to each generated file linking it back to the chapter that produced it — the **branch** path for a branch skillset, written relative to the repository root so one form reads the same from either kind of source:

```
<!-- library: .claude/library/our-skillset/34-catchup.md -->
<!-- library: library/.public/.lib/the-audit/01-public-audit.md -->
```

That comment is how a reader walks back to source. If it names the wrong book the chain is broken, so it is computed from the chapter's actual location and never assumed. All other links in the body are rewritten by the [link rewriter](07-on-compiled-links--rewriter.ts) from the source directory to the output directory; because it takes both directories, a branch source rewrites correctly with no special case.

The provenance line is also stripped from the chapter body before a fresh one is appended. An earlier round-trip wrote compiled comments back into library sources — eight chapters of Our Skillset still carry a leaked citation in their library source, seven of them naming `skills-and-commands`, a book renamed away — and appending to those accumulated a second, stale comment, so the compiled file carried two provenance lines pointing at different books. A provenance chain that offers a reader two answers is worse than one that offers none.

<!-- citations -->
[librarianship]: ../..librarianship/.cover.md
[teamsmanship]: ../..teamsmanship/.cover.md
[teamspeak]: ../teamspeak/.cover.md
[territory]: ../..teamsmanship/05-territory.md
[rules]: 03-on-rules.md
