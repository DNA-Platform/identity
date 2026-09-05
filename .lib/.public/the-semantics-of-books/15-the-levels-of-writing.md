# The Levels of Writing

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **coauthor:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)

---

*The derivation stops at [Level One has one primitive](02-composition.md). This chapter is what that primitive turned out to be once it was built — the settled account, written to be read instead of a sprint. Built in [Writing](../projection/10-writing.md), reshaped in [The Parse](../projection/13-the-parse.md); the records of how it was found are there.*

---

> ## ⚠ <a id="which-model"></a>WHICH MODEL THIS ACCOUNT DESCRIBES — read this before the chapter
>
> ***This is the settled account of v1, which now stands at [`package/.archive/`](../../package/.archive/).*** **The model was rebuilt as v2 in [`package/src/`](../../package/src/) across [Composition](../projection/27-composition.md), [The Block](../projection/28-the-block.md) and [The Bind](../projection/29-the-bind.md), and this chapter was not rewritten with it.** *It is still worth reading — the reasoning is Doug's and most of it survived — but it may not be read as a description of the code.*
>
> ***Measured 2026-08-29 by grep across both trees, not remembered:***
>
> | this chapter says | v1 | v2 | |
> |---|---|---|---|
> | **six levels, and a book is not writing** | six | ***seven*** — `$File` joined, and **[`$Book extends $File`](../../package/src/book/Book.tsx)**, so a book **is** writing now | *the load-bearing one* |
> | **`role`, and use vs. mention** | 9 files | ***0 files*** | *the whole idea is absent* |
> | **a figure is a caption** | 3 files | ***0 files*** | `$Figure`, `$Caption` both gone |
> | **`valid()` / `$valid(condition, reason)`** | 37 files | ***0 files*** | *replaced by `specify()` and a [`$Specification`](../../package/src/utilities/Specification.ts) of `$`-prefixed rules* |
> | **nothing carries a number** | true | ***false*** — [`$Writing.index`](../../package/src/writing/Writing.tsx), assigned by the parse | *and [the numbering rule is unpicked](../projection/29-the-bind.md#handoff-index)* |
> | **a section composes sections OR paragraphs** | true | ***false*** — `$Section` composes paragraphs; `$Document` composes sections | |
>
> ***Two claims in this chapter were never true of EITHER tree, and [K40](../projection/29-the-bind.md#k40) is where that was caught.*** **There has never been a `level` getter anywhere** — *grep, both trees, zero* — **so *"LEVEL ALONE DECIDES"* has always been an intention.** *And "too high → it throws" is not what happens: [U219](../projection/29-the-bind.md#u219) ruled everything not-at-my-level to be **below**, and [R345](../projection/29-the-bind.md#r345) then found the failure happening one grade earlier still, at the section's own specification.*
>
> ***One thing this chapter asked for and did not have, it now has.*** **[*"One walk, written once, and it is a tool"*](#the-parse) is true for the first time** — *[`utilities/Parser.tsx`](../../package/src/utilities/Parser.tsx), with all seven levels calling `parser.parse`.* **It divides by `accept`, which each level supplies, rather than by level.**
>
> ***This block is a marker, not a rewrite.*** *A settled account is rewritten when the thing it accounts for settles, and v2 is mid-sprint. **[The Bind](../projection/29-the-bind.md) is the current state of the model**; read it for the code and this chapter for the reasoning.*

## Six levels, and a document is one of them

Doug's list: **letter, word, sentence, paragraph, section, document.** Those are the *types of writing*. **Chapter, book, subject and library are things done with a document** — they are not further levels, which is why `$Book` composes chapters and is not itself writing.

`$Writing` is the base and the generalization. A level **composes the level below it**; a letter composes nothing and is the floor.

**Each level declares exactly three things**, and nothing else:

| level | composes | how prose divides | valid when |
|---|---|---|---|
| document | sections | *(not divided — handed or written)* | it has a summary |
| section | paragraphs | at blank lines, and at everything else the notation marks | its title is not empty |
| paragraph | sentences | at its stops, stepping over code spans and targets | it has a letter or number |
| sentence | words | into words and the syntax between them, composites whole | it has a letter or number |
| word | letters | into graphemes | one unbroken run with a letter or number |
| letter | — | — | it is one grapheme |

**A section composes sections OR paragraphs, and the union is not a compromise.** *A section is like a subject, which can have other subjects inside it* (Doug). Prose can only ever divide into paragraphs, so a **written** part may be a section and a **composed** one never is. Nesting is structural — the tree is kept — and the flat list is a getter that reaches through it, exactly as `$Book.paragraphs` always did.

**There is no counting column, because nothing carries a number.** A part's place is its position in what composes it; `at(n)` reads `parts()[n]`. A number is something a **reference** holds — that is what a `$Location` *is* — never a property of a part.

## The canonical stands at zero, at every level

A section's title **is its part zero**: not a member lifted out of the block, not a paragraph rebuilt from its text on every ask, but the written object standing where it was written. `$Title` is **paragraph grade**, because that is the level it stands at.

That makes the shape one specification seen at two scales: a book is a **cover at chapter zero** plus a parenthetical synopsis; a section is a **title at paragraph zero** plus a summary that may be parenthetical. Where a construct is carved right, the same figure turns up one grade down.

## Writing arrives as one block

**Everything below a document is inline**, so the framework groups a writing's own writing into **one block** and hands it over as one thing. A bond that receives a sequence throws, because that means something inside it declared itself apart from the prose.

`inline` therefore means only what chemistry means by it — *this arrives inside the block* — and it carries no part of the parse's judgement. It used to carry both, and a figure made inline vanished from its own section until the two jobs were separated.

## The parse

**One walk, written once, and it is a tool**: it takes a block and the levels that block accepts, and treats each element by its level.

- **too high** — it cannot stand here, so it **throws**, naming both levels;
- **too low** — it is text, and its copy joins the prose around it;
- **at an accepted level** — it **is** a part, the very object that was written.

The prose between written parts is divided and composed as that level divides prose. **Mixing is the point** — a figure between two paragraphs leaves the paragraphs alone, and both are read in the order they were written.

**LEVEL ALONE DECIDES, and this is what makes derived kinds free.** `level` is a getter, so it is inherited: a kind the model has never heard of is handled without the walk being told anything about it. There is no class name anywhere in the walk, and no registry of kinds. A section subclass is a section; a figure is a paragraph; a kind derived from *those* is handled at the same depth, because inheritance is not a case.

**The parse writes nothing.** Not a number, not a role. That is what lets a composed part **carry a parent** — and a lineage is what a scope needs in order to reach through prose. While the parse wrote, threading a parent looped the page, because a write to a parented chemical wakes its whole ancestry and re-runs the reading that made it.

**The parse does not judge, either.** An empty piece is not a piece; a whitespace one is, because a space between two words is syntax. Everything else it composes is kept — and a part that will not validate is a **validation failure**, which the framework catches, keeps on the instance and draws where it stands. Dropping it made the parts shorter than the writing and told nobody.

**The parse is post-hoc and pure** — a reading of the writing, recomputed, never stored. *"Someone has to be doing something interesting to render the parsed input. It shouldn't be used in the standard view at all"* (Doug). The standard view renders the **block**, which is why a written part already draws itself; what the parse adds is that it **exists**.

## The notation is the levels' own

**Markdown is not a kind of writing. It is how writing is written** — *"just a part of `$Section`, not `$MarkdownSection`… the canonical language for writing compositions"* (Doug). So the levels speak it themselves, and the word appears nowhere in the package.

A section divides at blank lines **and** pulls a fence whole **and** cuts at a heading. A **heading is a `$Title`, standing among the paragraphs** — and a heading of *any* depth is the same grade, so `# X / ## Y / ### Z / # A` is **four sections and no tree**. *Doug: "the levels and nesting can be handled elsewhere."* Depth is a containment to bolt on later; the parse does not carry one it was never asked for. A composite at word grade — a link, a code span, a formula, an escape — is pulled **whole** before anything is split into words, so a target never becomes prose and mathematics keeps its underscores.

**Only a blank line divides prose.** Three lines under single newlines are one paragraph — a stanza — and a quotation broken over several lines is one quoted paragraph. A **list** is the exception and it is not one: the notation marks each item, so each item is a paragraph in its own right.

**A notation is still an axis rather than a level** — `divide` and `compose` are the axis, and anyone may answer them differently. What changed is the **default**: the levels now come with the canonical language already spoken.

## Used and mentioned

`role` is a property of writing: **`use` | `mention`**, `use` the default.

Used writing means what it says. **Mentioned writing stands for itself** — a space, a comma, a quoted word. `$Punctuation` is a word that is mentioned.

- **Mentioning propagates by LINEAGE.** A part is mentioned if what holds it is. *Doug's image is the argument: it is like a thing in quotes, and quoting a word does not dissolve its letters — `"cat"` still has a c, an a and a t, all inside the quotation.* It used to be **written** onto every composed part, and that write is exactly what a parse may not do.
- **What is written is present; what is used is what is read.** A sentence's *parts* are everything in it, syntax included. Its **words** are the used ones.

**This is `parenthetical` one level up.** A book's copy passes over its parenthetical chapters exactly as a sentence's words pass over its syntax — present in the writing, absent from the reading, **and its own parts still its own.**

## A figure, and a name

**A figure is a caption.** *Doug: "maybe the default figure is just a caption and to subclass it is to add something that's pure view… the whole point of the caption is that you have satisfied its role as a paragraph. So now you can do whatever you want with the subclasses."* So `$Figure` is a paragraph carrying a `$Caption` — a sentence, possibly parenthetical but **never absent** — and it is valid because it has one. `drawn()` returns nothing. A subclass overrides `drawn()` and nothing else.

**That is the whole of it, and it is deliberately the top.** `$Figure` is *the thing added* at this level; the framework ships no kind beneath it. A book that wants an equation, a rule, a plate declares its own — as the demo does with `$Equation` and `$Rule`. *The earlier reading of a figure as "content that is not writing" was wrong: it swept a picture, a thematic rule and a code listing together, and a listing is source rather than a picture.*

**Content that is not writing is a separate idea, and it has its own class.** `$Code` is Doug's name and is framework-level *because code is going to be live in this framework*. It recurs one grade down as **a word whose content is not writing** — an inline formula, an inline code span — which stand today as `$Formula` and `$Snippet`, both phrases that mention rather than say. *The real answer is Doug's and is owed: **one `$Code` with an `inline` boolean whose LEVEL moves** between paragraph and phrase. That needs dynamic layering, which the framework does not have.*

**A `$Phrase` is a name, and it is word grade.** *"Why not make a `$Phrase` a type of word — maybe it's a word that can contribute multiple words if that's possible (if not we treat it as one)"* (Doug). It is the second: one word that admits what a name contains, spaces among them. It exists because an author's name was claiming to be a **sentence**, and a name sits inside a sentence rather than standing as one — so the misfit was never in the parse, it was in the level the name declared. `$Author`, `$Subject` and `$Canonical` are phrases.

## Validation says why

A class states **why** it is not valid, in the same place `$check` states that a parameter was wrong: one collection per bond, one raise, **both kinds together**, so a reader can see whether they are related.

`$valid(condition, reason)` works exactly as `$check` does — it **returns its condition** and records the reason when the condition is false. So `valid()` keeps answering true or false and every call site is unchanged. The rule that comes with it: **never short-circuit in front of a `$valid` call**, because a swallowed call is a reason nobody hears.

## What is not settled

- **A document requires a summary, and it is the first paragraph of the first section** — ruled by Doug, and **not yet built**. The demo is written the other way round, so landing it moves fifteen chapters' summaries to the top as parenthetical opening paragraphs, which is authorial work rather than a refactor.
- **Syntax as a typed word** ([48's R24](../projection/06-sprint-48--subjects-and-the-library.md#writing)) — punctuation is a mentioned word and carries no type. The walk allows more; nothing was built.
- **The word-grade form of *content that is not writing*** — `$Formula` and `$Snippet` stand there now, but as two classes where Doug named **one**: a single `$Code` whose `inline` boolean moves its level. That is **dynamic layering**, and it is the largest thing this account is missing.
- **A list is a paragraph and its items are its sentences.** *Doug: "I would put list at the paragraph level and let items be the sentences within it — see how much more elegant that is?"* Today the parse makes each item its own marked paragraph. The change was attempted, broke six promises, and was reverted rather than left red.
- **Whether the fixed hierarchy holds.** *Doug: "ultimately we will probably need to make the composition types dynamic, and `$Letter`–`$Document` become canonical starting points that start in the right type. Maybe. But I want to see how far we can go with a fixed hierarchy and see what happens."* That is the standing instruction for this whole chapter.
- **Whether a written part should survive to its own level.** A word-grade part written inside a section is *too low*, so its copy joins the text run and the object does not reach the sentence that would hold it. `compose` receives text; carrying elements would keep it. Nothing needs it today, and that is why it was not built.
