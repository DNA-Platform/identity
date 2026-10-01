# The Annotated Version

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **coauthor:** [Libby](../../../../.claude/library/..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)
- ***Written 2026-09-28 at Doug's instruction, after a night in which the team called the annotation system a plugin system, called its power bounded, and called `.public` a language — "you don't see what you created… please document the robustness of this system to correct the loss of vision that you currently have for it." The mechanism is [The Annotation System](07-the-annotation-system.md); the procedure is [Developing an Annotation](10-developing-an-annotation.md); this chapter is what the system IS, and why it holds. The chapter's name is a PROXY, taken from his sentence.***

---

**Doug, 2026-09-27:** *"Annotations have the power to express the meaning of a piece of writing. Anything hidden in the words can be expressed in the annotated version, and the annotated version is not just the same work. It has the power to communicate new things."*

## What it is

**A writing is words. An annotated writing is words that mean something.** A word with a Reference means a place; a heading with a Mention is a place others may reach; a cover with Author, Subject and About means who wrote it, where it stands and what it is; a chapter with Synopsis means another book; a book with Theme means a way of being seen. None of that is in the words. It is in what the annotations express, and the word in the code is that word: [`express`, `expressed`](../../package/src/writing/Writing.tsx) on the collection every writing carries.

**The annotated version is a different work, and it can be wrong.** The compiler reads nothing but the notation the annotations express — a star, a bracket, a second title form — and refuses a library whose meaning does not hold together: a book filed under nothing, a mention nobody spends, a title said twice. Bare text can never be refused. Annotated text can, which is the same fact as its being able to communicate what the text alone could not. In Sprint 88 a paragraph that said *the persona writes because Libby said it may* came to say it through a hop to her own section on the voice she lent out, and two chapters then held between them something neither held alone.

**An annotation is a program, and the system is Turing complete.** Doug: *"I'm pretty sure an annotation has access to the annotations collection, and it could launch async things which do all sorts of powerful things."* It has and it can. An annotation holds its writing and the whole collection; Theme's `defines` takes every later Theme out of expression, Paginated marks every chapter of the book at its bind, Synopsis appends another chapter's parts to its host's text, and any of them may start work after mount as Book does and write back. An annotation is itself a writing, with text, marks, layers and annotations of its own — Author stands a Reference among its annotations — so the recursion is in the type, each one drawing its own tree inside its host's. *"A connected network of annotations, all communicating with each other through their host book, could probably do almost anything in a pinch."*

## Why it holds — the genetics, and the ledger

Doug modelled it on genetics, and [the mechanism chapter](07-the-annotation-system.md#the-genetics-said-once-and-plainly) has the table. What that model buys is not a leash on the power but a way for unbounded power to stay predictable:

| the property | where it is, in code | what it buys |
|---|---|---|
| **every act is authored** | `add(author, …)`, `classes.add(this, …)`, `containers.add(this, …)`, `text.append(this, …)` — the `Collection` records who wrote each member | whatever an annotation did can be taken back exactly, by author, without knowing what it was: `erase` is `revert(this)` |
| **one generation a define** | [`define()`](../../package/src/writing/Writing.tsx): every annotation that ran last time is erased in reverse, the record cleared, then each is defined in order | a definition is a fixed point — the genome established whole, then expressed — so an annotation reaching another sees one consistent generation, never a half-made one |
| **expression is computed, never stored** | `express(annotation, false)` adds to `unexpressed`; `expressed(given)` filters the established members through it, every time | a gene is repressed only while its repressor stands; take the repressor away and the gene is back, with no flag to reset anywhere |
| **dominance is order** | `add` is `prepend`: the front regulates first and its word stands; the front's note draws last, innermost | a whole family of annotations resolves by position, which is why a theme in front is the theme and `$is` switches it at one paint |
| **four verbs, and no fifth** | `defines`, `erase`, `specifies`, `note` — the whole surface an annotation acts through | a power the model lacks is asked of the surface the writing already has, not added; *"No more review"* |
| **the specification** | `specifies(writing)` weighs in on the binder's assert | an annotation says what it demands of its host, and the bind refuses a writing that cannot hold it |
| **marks, and a library's theme that dresses them** | every annotation and every level wears its class; the base dresses none, and a library's theme and faces are written against the marks, [The Styling Surface](../the-styling-surface/.cover.md) | a look is written against meaning, never against markup |
| **the compiler reads notation alone** | the binder's language: stars, brackets, second title forms | an annotation may do anything to the page and nothing to the catalogue |

**That is what tamed the power.** Doug: *"The accountability was made to tame the power of the annotation. Tools fused in to make them work more predictably in certain scenarios."* Singular expression, authored reversion, the fixed moments of define and bound and draw: the common cases are predictable, and the uncommon ones are still possible.

## What it built in one sprint, as evidence

Sprint 88 is the measure. Eleven classes in `.public` — a third pair, a theme with eight live values and a provider, four whitespace kinds, three basics — and a test library dressed with them: a card, a byline, a masthead, a catchword, kind labels, a boxed catalogue, a paginated book, a literary book, a typewritten one and a dark one, the whole library's own code under five hundred lines and half of it CSS. Every one of the library's kinds was a class with a mark, and every one of its looks was an annotation in front. Three defects found by driving every link were each fixed in a line or two, because each was at a seam the model already named: a turn, a bond, a title's reference. And a librarian's autobiography grounded the whole, the one book by its own subject, telling its story through hops that the compiler resolved from names alone — [The Object Graph](../writing-a-book/03-the-object-graph.md).

## What we got wrong, so it is not got wrong again

- **"Bounded."** The power is not bounded; the ledger is complete. Say *authored*, *reverted*, *computed*, never *sandboxed*.
- **"Plugins."** An annotation is a writing that expresses a meaning, a gene that confers a phenotype. A plugin is bolted on; an annotation is of the same kind as its host, and its host may be an annotation.
- **"A language rather than a framework."** It is React. `$Chemistry` is a mirror between objects and their components, `.public` is one component library on it, the one we built, and Writing is its skeleton. What is new is the form of app design: the object graph first, meaning expressed on it, and the page drawn from the meaning.

## Where the cost is, honestly

A network of annotations reaching each other through the host can do almost anything, *"at the expense of extensibility"*: the next author cannot add to a conversation without joining it. The graph is the first resort — a property on the book or the chapter that annotations read — and the network the pinch, given a name when it is built. And an annotation that writes to another chemical after the draw is news, and news cascades; that is chemistry's cost, measured in [the reagent scopes](../projection/93-sprint-88--the-theme-the-element-and-the-blank.md), not a limit on what an annotation may mean.

**Names.** Doug's: *the annotated version*, *express*, *expressed*, *the genome*, *phenotype*, *dominance*. Ours, flagged: this chapter's title.
