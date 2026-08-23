# The Live Library

- **author:** [Adam](../../../../.claude/library/..teamsmanship/..team/adam/adam-between-the-wires/.cover.md)
- **coauthor:** [David](../../../../.claude/library/..teamsmanship/..team/david/the-devops-journal/.cover.md), [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)

---

*(**Doug's aside, 2026-08-22, written down as an aside and not as a plan.** Nothing here is scheduled and nothing is designed. It is recorded because it changes the shape of a decision the branch is about to take about **when validation runs**, and a constraint that arrives after the decision costs more than one written down before it.)*

## What he said

> *"BTW — this is an aside but write it down — this is part of a github repository right? These are the github pages? **We might one day have a dynamic content system whereby there is a very limited github API access to something like one branch of the repository, and maybe people's comments or a person's journal might be kept in there. And the site might fetch it dynamically. And people will be able to edit the library — their section of it — by adding things like comments etc… And in this case we will likely need some live validation. But static content can be validated at build time.**"*

## Yes to both facts

**This is a GitHub repository and the application is served by GitHub Pages**, at `/inexplicable-phenomena/` today and at a domain root the day one is pointed here — *[the deploy facts were checked against the web rather than recalled](../projection/19-the-binding.md#pages)*, and the route prefix is one `base` line that nothing in the model, the application or the drivers encodes.

## The shape of what he is describing

| | today | the live library |
|---|---|---|
| **where a book comes from** | a `.tsx` module the compiler emitted, imported at page load | **the same, plus writing fetched from a branch through the GitHub API** |
| **who writes** | an author, in the corpus, ahead of a build | **a reader, in their own section, at any time** |
| **what they write** | chapters | ***comments · a journal*** — Doug's two examples |
| **when it is checked** | ***the build*** — [`validate.ts`](../../build/validate.ts) holds every book at once and asks each one | **at the moment it arrives** |

## The one thing this changes now, and it is why the aside earns a chapter

***The branch is deciding where the model's cross-book validation runs*** — [the annotation rules](../the-condition-report/04-semantics.md#s2) that ask whether an author points at the library's canonical autobiography, or whether a book stands in the subject it names. **Doug's own answer was *"perhaps that validation will only be run when the library checks itself as part of the build."***

***This aside says: build-time is where it RUNS, and it must not be where it LIVES.***

- **A rule that lives in [`validate.ts`](../../build/validate.ts) is a rule the browser cannot ask.** *The compiler is node-side and renders nothing.*
- **A rule that lives in `valid()` on the class can be asked from either side** — the build calls it over the whole corpus, and a page can call it over one arriving comment.
- ***That is already the shape the framework has***, and [`validate.ts` says so in its own words](../../build/validate.ts): *"It invents no rules. The bond constructors already require a cover… and `valid()` answers the softer questions."*

**So the constraint is one sentence: *the rules are the model's; the build is one caller.*** *Nothing needs building for that to be true, and it costs nothing to keep true. Losing it costs a rewrite.*

## What a live library would need that does not exist

*Named so the size is visible, and **none of it is proposed**.*

- **A write path.** *A limited API token against one branch* — Doug's own framing. **A public site cannot hold a token that can write**, so this is a function somewhere, or an app, or a form that opens a pull request. ***Unanswered.***
- **A fetch path that is not a module import.** [`books.tsx`](../../app/src/library/books.tsx) is a map of dynamic imports the compiler wrote; **a comment arrives as data and has to become writing at runtime.** *The framework can do that — a `$Section` composes from a block — but nothing today builds writing from anything but a module.*
- ***Live validation, which is the same `valid()` and a different caller.***
- **A section that belongs to a reader.** *Doug: "their section of it."* **The model has no notion of who may write where**, and [the library's own summit is a single autobiographical subject](../the-semantics-of-books/07-the-subjective-subject-and-the-library.md) — *a library of many journals is a shape the derivation has not been asked about.*

## And the part that is already true

***A comment is a chapter, and a journal is a book.*** **The library metaphor does not need extending to hold either** — *what would be new is who writes them and when they arrive, not what they are.*

*That is the reason to write the aside down rather than file it: **it is not a feature request against the model. It is a caller the model has not met.***
