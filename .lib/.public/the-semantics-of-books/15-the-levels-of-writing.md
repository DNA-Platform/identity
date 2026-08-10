# The Levels of Writing

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **coauthor:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)

---

*The derivation stops at [Level One has one primitive](02-composition.md). This chapter is what that primitive turned out to be when it was built — the settled account, written to be read instead of a sprint. Built in [Writing](../projection/10-writing.md); the record of how it was found is there.*

## Six levels, and a document is one of them

Doug's list, given 2026-08-10: **letter, word, sentence, paragraph, section, document.** Those are the *types of writing*. **Chapter, book, subject and library are things done with a document** — they are not further levels of writing, which is why `$Book` composes chapters and is not itself writing.

`$Writing` is the base and the generalization. A level **composes the level below it**; a letter composes nothing and is the floor. There is no separate abstraction for "a composition" — the class was always there, and two levels had simply been built outside it and were copying it out by hand.

**Each level declares exactly four things**, and nothing else:

| level | composes | how prose divides | counts from | valid when |
|---|---|---|---|---|
| document | sections | *(not divided — handed or written)* | 1 | it has a summary |
| section | paragraphs | at blank lines | **0** | its title is not empty |
| paragraph | sentences | at its stops | 1 | it has a letter or number |
| sentence | words | words and the syntax between | 1 | it has a letter or number |
| word | letters | into graphemes | 1 | letters, numbers, apostrophes |
| letter | — | — | — | it is one grapheme |

*A section counts from 0 because its first paragraph is its title — the canonical is the special first, at every level.*

## Writing arrives two ways, and both are the framework's

A bond constructor is handed **an ordered sequence**, not one child per child ([the grouping](../../../chemistry/.lib/composition/03-binding-constructor.md#what-it-actually-receives--the-grouping)):

- **inline** writing — text, and any chemical whose template declares `inline` — is gathered into one block per run, reachable as that block's `$elements`;
- **anything not inline** arrives as **its own argument**, in place.

So a chapter written *prose · figure · prose* reaches its bond as **three arguments**. Keeping only the first is what made written parts disappear for two sprints, and the fix was to keep the sequence — there was never anything to invent.

## The parse

`parts()` walks the writing in order. A **written part** stands where it was written; the prose between written parts is divided as that level divides prose. **Mixing is the point** — a figure between two paragraphs leaves the paragraphs alone, and the numbering counts across both.

**A part is recognised by two facts, and both are needed:** it is at the **level below**, and it is **not inline**. Level alone is not enough — an author's name *is* a sentence, but it sits **inside** one, so its level would make it a part of the paragraph holding it. Standing and kind are different questions.

**The parse is post-hoc and pure** — a reading of the writing, recomputed, never stored. *"Someone has to be doing something interesting to render the parsed input. It shouldn't be used in the standard view at all"* (Doug). The standard view renders the **block**, which is why a written part already draws itself; what the parse adds is that it **exists**.

## Used and mentioned

`role` is a property of writing: **`use` | `mention`**, `use` the default, declared per class and never assigned.

Used writing means what it says. **Mentioned writing stands for itself** — a space, a comma, a quoted word. `$Punctuation` is a word that is mentioned.

Two laws follow, and they are one law seen twice:

- **A mention is not parsed.** It stands for itself, so there is nothing beneath it to find; the parse stops where the mention starts.
- **What is written is present; what is used is what is read.** A sentence's *parts* are everything in it, syntax included, so positions count the syntax. Its **words** are the used ones.

**This is `parenthetical` one level up.** A book's copy passes over its parenthetical chapters exactly as a sentence's words pass over its syntax — present in the writing, absent from the reading.

## A figure

A figure is a **paragraph that draws something**. What it draws is its **content, and content is not writing** — a list of names, a card, a piece of source. The only words a figure has are its **caption**, which is its copy.

So **a figure is valid because it has something to draw**, not because it has letters. That distinction is the whole of it: a paragraph of prose with no letters is nothing, but a code listing with no caption at all is a perfectly good figure. Each kind states what it means by having content, in its own words — the `$Cover` pattern.

Whether the caption reads as prose is **the kind's to decide**: a listing's label is parenthetical, a plate's caption is read.

## What is not settled

- **A document requires a summary and not a title**, though the canonical part at every level already carries one — section → canonical paragraph, document → canonical section, book → cover. One validity line, Doug's to rule.
- **Syntax as a typed word** ([48's R24](../projection/06-sprint-48--subjects-and-the-library.md#writing)) — punctuation is a mentioned word today and carries no type. The walk allows more; nothing was built.
- **The specialization** — the markdown implementation itemized, `$Page` replaced because books do not have pages, and each book given its own specialized parts. That is [the second half of the same arc](../projection/10-writing.md#the-second-sprint--the-specialization).
