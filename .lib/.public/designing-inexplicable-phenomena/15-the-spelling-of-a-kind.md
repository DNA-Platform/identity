# The Spelling of a Kind

- **author:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **coauthor:** [Adam](../../../../.claude/library/..teamsmanship/..team/adam/adam-between-the-wires/.cover.md), [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- ***The chapter name is a PROXY; Doug's to rename.***

---

*Promoted 2026-09-03 from [the binder sprint's record](../projection/37-the-binder.md#the-pattern) into the style book, per [The Coding Style](11-the-coding-style.md)'s own entry protocol — a convention recorded only in a sprint chapter is a convention a refactor cannot find. Every spelling below is read off the shipped seven levels; a new kind is spelled the same ways, and skipping one is how a kind ships half-real.*

## The spellings, in the order a file declares them

| spelling | what it is | the law it rides |
|---|---|---|
| `$X` | **the class** — a level (machinery) or a kind (a shell over its level; extends the level class today, and looks are its only honest additions) | [Shells Over Types](14-shells-over-types.md) |
| `$TypeOfX` | **the type** — extends the level's TypeOf; declares `override name = 'X'` and its constructor says `this[cache](this.name)`, one act: the cache key, the standing name, and the `pd-` label are ONE declaration | [The Type and the Instance](10-the-type-and-the-instance.md) |
| `XSpecification` | **the rules** — declared beside the type in the same file (the type file ruling); derives the level's specification, adds laws, and waives inherited ones by overriding the rule name to return `false` | ch10; [ch11 § where a class lives](11-the-coding-style.md#where-a-class-lives) |
| `X` | **the component** — `$($X)` at the module bottom | — |
| `$$X` | **the reference kind** (the seven levels only, by ruling R122) with its own `$TypeOf$X` (name `'$X'`) and lands-on specification | [Sprint 38 R122](../projection/40-sprint-38--the-rebuild.md#rulings) |
| `prints.set(code, …)` | the address code to the reference's seat, beside the `$$X` it names; codes ASSEMBLE (first + last letter) — nothing carries a `code` member | Sprint 38 R106/R129 |
| `parser.makes.set('X', maker)` | **only for what the parser makes**: Letter, Word, Sentence divide prose; Paragraph and Section register the implied SINGLE wraps. A kind registers no maker | Sprint 38 R107/R119–R121 |
| `override indent = 1` | **a transparent kind's declaration** — it lends its parts to a same-family host (Phrase, Ref); the read-through consults the TEMPLATE's declaration, never a bond write | Sprint 38 R130; [Solutions 29, second appearance](../solutions/29-the-bond-that-woke-the-tree-it-was-building.md) |
| `.spec` examples | **the kind is not finished until its examples exist and are enrolled** behind the three promises — draws, specifies, composes; spec files are the one place commented prose is the convention | [ch11 § the spec convention](11-the-coding-style.md#the-spec-convention) |

## What a kind does NOT spell

No `canonicalForm`, no `writtenAs`, no `nests`, no `code` — the four members Doug deleted stay deleted; the parser holds the making, the url seat assembles the codes, polymorphism carries the level. No maker for a kind. No member whose only job is to keep a meaning-holding field tidy — [that field is on the wrong object](10-the-type-and-the-instance.md#the-test).

## The consumer's short form

Route 3 of [the ladder](10-the-type-and-the-instance.md#the-ladder) needs only rows two and three: a `$TypeOfX` with a name and a specification IS a kind — written `<Type>X</Type>`, standing, labeled, and law-bearing with no class at all. The class row is added only when the kind holds a look of its own.
