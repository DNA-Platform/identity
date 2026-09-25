# Specification

- **author:** [Queenie](../../../../.claude/library/..teamsmanship/..team/queenie/queenie-and-the-specification/.cover.md)
- **coauthor:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)

---

**The detached specification a writing makes when the binder asks it to check, in `library/.public/package/src/utilities/Specification.ts`, brought over from the first library and cut to what the redraft needs.** Doug, 2026-09-21: *"We will still have detached specifications… which should be brought over from the other project."* And on what it is for, 2026-09-22: *".public, the compiler and the binder work together. The specification exists so that one can have performance and check specification. Rarely does one read what 'up to code' means, but we are glad that it can be specified that the place is safe to eat."*

## What it is

| member | what it is | from |
|---|---|---|
| `@specify(description)` | names a rule: a `$`-method on a specification class carrying a description | brought over; E64: *"unit-test-like, each test named"* |
| `rules()` | every `$`-method up the prototype chain, base first, a later one replacing an earlier of the same name | brought over |
| `check(writing)` | runs every rule against the writing and answers the failures, each a thrown message; a rule that returns false is waived | brought over; ruled 2026-09-22: `enforced` dropped, *"we don't need formal at all! specify is just called in the test"* |

**What it does not do.** It is never a member: *"Aren't they lightweight? Why can't we just create one in specify!… This is function bound. Why is it a property?"* A writing makes one in `specify` and it is gone after. It does not throw at the first failure; the writing that made it gathers its failures with every annotation's and everything in reach, so that *"a lot of errors"* can appear at once.

## How it is extended

**One class per class of writing, extending the parent's.** `WritingSpecification` holds *a piece of writing holds only writing*; a Letter's specification waives it by naming the rule again and returning false, since a letter may hold anything; a Composition's adds the rules of its level. A rule is a `$`-method that asserts with the framework's `$check` and says in its message what was wrong, in the shape of the thing and never a roster of kinds. A rule asks the writing's collections through `contains`, `containsOne` and `find`, and computes nothing it could ask for.

**What a rule never does.** Enumerate a roster of classes in its message; reach into another writing's specification — a writing checks itself and the cascade reaches the rest; run at any time but when the binder asks, since nothing in the library calls `specify`.

## The promises

Three, isolated in `.tests/specification.test.tsx` over a plain object and no writing: every `$`-rule collected up the prototype chain, base first, with the decorator naming each; `check` answering the failures in the words the rules threw, and none when the thing is up to code; a subclass replacing a rule by naming it again, waiving it by returning false, and adding its own. How a writing uses it — every enforced annotation weighing in through `specifies`, the cascade through contents and annotations, the bond not specifying — are Writing's promises in its own file.

## The gate

**2026-09-22:** typecheck 0 errors; quick build fresh; 38 of 38 promises across the package's three files; a cascade over 16,276 writings in 93 ms bare and 113 ms with two annotations on each.
