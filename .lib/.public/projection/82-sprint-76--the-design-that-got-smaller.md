# Sprint 76 — The Design That Got Smaller

- **author:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **coauthor:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md), [Libby](../../../../.claude/library/..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md), [Adam](../../../../.claude/library/..teamsmanship/..team/adam/adam-between-the-wires/.cover.md)
- ***The sprint name is a PROXY; Doug's to rename.***

---

***A DESIGN-ONLY SPRINT, and it closed by removing things rather than by adding them.*** **Doug's standard was not "a good design":**

> ***Doug:*** **"The next sprint is design only. We need to have a design we KNOW we can implement. Pure branch and documentation and sprint design work."**

**The work is [The Design Units](../the-catalogue-and-the-specification/05-the-design-units.md)** — *eleven units, each carrying its premises marked `verified`, `assumed` or `unknown`, so that "we know we can implement it" is checkable rather than felt.* **Read that chapter, not this one, to pick the work up.** *This is the record of what happened.*

## <a id="shape"></a>The shape of it, which is the finding

***The design got SMALLER three times in one afternoon, and each time by REMOVING a premise rather than answering it.***

| | |
|---|---|
| **the catalogue does not evaluate** | *it PARSES. Titles, authors, subjects and citations are literals in the source, so the global half of the problem never loads a book.* |
| **dev does not invalidate globally** | *the transform always succeeds, proxies what it cannot resolve, and you rebuild. The one premise nobody could verify was removed instead.* |
| **the editor needs no second engine** | *the build is fast enough to be the loop, so there is one implementation of the grammar and nothing to drift.* |

***This morning the plan was a long-lived process holding the whole library open, with a warm cache, per-page isolation, and two transports over one query engine.*** **None of it survived, and nothing was lost with it.**

## <a id="settled"></a>What is settled, in Doug's words

| | |
|---|---|
| **a card** | *"Like horizontal gene transfer, it's a piece of writing that isn't created in the DOM."* One base, two ways in — a chapter is **bonded**, a card is **assigned**. |
| **keys** | *"Catalogue keys are not dynamic. Freeze the thing. These are non-reactive properties."* |
| **the call number** | *"No that's the title. Book titles have to be unique in the library."* |
| **references out** | *"Then it isn't a reference in the sense of the library."* |
| **a mention** | *"We have a parser that reads it, saves the key and the quote, and the start and end indexes in the text — and then removes itself from the string."* |
| **an author** | *"Authorship has to live in an autobiography and we only allow one subject to have that."* |
| **a fault** | *"Oh we don't need the editor."* The build is the loop. |
| **the notation** | **prefix allocates, postfix returns** — the split C fuses and never recovered from. |

## <a id="notation"></a>The notation, settled after five revisions and one wrong family

```
*[ X ]( Y )        allocate here                        → nothing
*$[ X ]( Y )*      allocate a stand-in, this writing    → an address
**$[ X ]( Y )*     allocate a stand-in, the book        → an address
**$[ X ]( Y )**    allocate a stand-in, the collection  → an address to a reference
$[ X ]( Y )*       no allocation, just stand in         → an address
```

***Two characters.*** **`$` is a stand-in** — *the world's interpolation mark, and already this framework's mark for about-the-representation-of.* **`*` is a reference, and it is ours before it was anyone's** — *`asteriskos`, first used by Aristarchus at the Library of Alexandria to mark lines needing reference.*

***The mention is the only primitive:*** *no `$`, no return, because it stands in for nothing — it IS the allocation.*

## <a id="proven"></a>What was proven rather than argued

- ***The TypeScript compiler sees prose and only prose.*** *On the P-versus-NP cover it found three prose nodes and did not see the `String.raw` holding the title formula, nor 3 imports, nor 5 comments.* **A grep would have gone into all of them.**
- ***Splicing by offset leaves the file byte-identical either side.*** *No re-print, no source map to regenerate — and that is what keeps the transform a **preprocessor** rather than a co-transform with the React plugin.*
- ***The scan is linear:*** **0.91 steps per character, flat across sixteen doublings**, every adversarial input at or below 1.00 — *after [a quadratic was found and fixed](../solutions/86-the-scanner-that-reread-its-own-tail.md).*
- ***Hot reload is incremental and it is Vite's own.*** *Measured on a real dev server: editing one chapter re-transforms **that chapter and nothing else**, in 7–23 ms; a twelve-chapter book cold is 153 ms.*
- ***The sigil namespace is clean*** — *zero occurrences of all five forms across every library.*
- ***390 plain markdown links in the corpus are already wrong*** — *hand-slugged internal targets and `cite_note-N` written as relative paths — and the rule "a plain link must be absolute" finds every one.*
- ***Chapter classes use none of the chemical.*** **101 of 101 are `print()` and nothing else, and 0 of 101 reference `this`.** *So the inheritance chain buys nothing that anything uses, and Doug's function-chapter idea is free. Deferred deliberately — "that is for later, we just want it to be possible."*

## <a id="stands"></a>Where things stand

**Eleven units. SEVEN settled — D1, D2, D3, D4, D5, D7, D10. None open.**

### <a id="refuted"></a>D2 was REFUTED on the last turn, and it cost nothing

***The chemistry team established that bond construction cannot be made to run every render, and cannot be made to re-run on a registration change either.*** **The seam is once-per-construction by construction** — *sixteen agents, three designs, eight adversarial reviews, two designs surviving to judgment and both called fatal, three refutations verified at the line.*

**And nothing broke, because the premise was marked `assumed` and the three removals had already taken everything off it.** *Had the sprint still been depending on it that morning, the verdict would have ended it.* ***That is the argument for the format, and it arrived within hours of the format being written.***

**The one finding to carry furthest:** ***"a miss is unrecordable"*** — *the substrate cannot write down "I asked for K and it was not there", which is the **negative dependency** an incremental system is unsound without.* **The catalogue can, and only because it is static.** *One requirement, met in the layer that reads and unmeetable in the layer that evaluates.*

### <a id="resting"></a>The four resting, and what each needs

1. **[D9](../the-catalogue-and-the-specification/05-the-design-units.md#d9)** — *one spelling decision: whether a proxy anchor is **self-identifying**.*
2. **[D11](../the-catalogue-and-the-specification/05-the-design-units.md#d11)** — *one experiment: move a **local `specify` rule into a `transform` hook** and watch it fire on an edit.*
3. **[D6](../the-catalogue-and-the-specification/05-the-design-units.md#d6)** and **[D8](../the-catalogue-and-the-specification/05-the-design-units.md#d8)** — *two readings: whether address derivation is entangled in the per-page render, and whether `Reading`'s per-book `Entry` can become per-entry.*

**Vite, not Babel** — *no module graph, no virtual modules, no `addWatchFile`, and re-printing would make us a co-transform where we need to be a preprocessor.*

### <a id="wrong-turns"></a>Wrong turns already taken, so they are not retaken

- ***`&` to declare and `*` to dereference.*** *Refused three ways: no value at the bottom so the operation is **resolution** not dereference; wrong domain; and `&` has an active claim from JSX inside the very node type we scan.*
- ***`[[…]]` for either side*** — *MediaWiki means **link**, so declaring with it fights its host.*
- ***A pure dot ladder*** — *the grid came out with two empty cells.*
- ***Chapters as markup exports*** — *withdrawn: a chapter's type IS its book's class, and that chain is what carries the theme.*
- ***A `tsserver` plugin for editor diagnostics*** — *cut, because it would be a second engine that can drift from the build.*

## <a id="next"></a>The next sprint, in Doug's words

> **"Now, we are doing incremental compiler through Vite."**
>
> **"Get a version of the incremental hook-based compiler in dev and prod mode working by editing the existing `.public`."**
>
> **"It will need to stay pretty while we support the new `[]()` syntax, because we can keep using the classes but we need to make sure they can receive references — Title, Author, Subject, whatever else currently needs things."**

***So the classes stay and the notation feeds them.*** **`$Title`, `$Author` and `$Subject` must be able to RECEIVE a reference** — *the notation produces addresses and something has to take one, so that seam is the first thing to find.*

**And "stay pretty" is a gate rather than a preference.** *The pages are the proof; a compiler that is fast and leaves the library looking worse has failed the sprint.*

### <a id="di"></a>And where DI goes, which arrived last

> **"Perhaps as much DI as possible happens below the component declaration so that you can register things to it right there. That's a beautiful place for it if references work out."**

***This is [D3](../the-catalogue-and-the-specification/05-the-design-units.md#d3)'s answer from an unexpected direction.*** **A book writes `$ArticleTheme.$register(Book)` at module scope — registering its theme against the framework's SHARED `Book`, which is the whole reason two books cannot occupy one process.** *Registered instead against the book's **own lifted component**, declared immediately above it, the collision has nowhere to happen.* **Same line, different argument, and the per-page processes lose their reason to exist.**

**Plus one measured item from the same verdict:** ***the theme should stop being an element that wraps the book*** — **one line in the public package, and the entire 4.2 seconds.**


## <a id="method"></a>One note on method, kept because it recurred

***Twice in one afternoon a question that was already answered kept being answered.*** **Doug: "But that is for later, we just want it to be possible"** — *followed by four exchanges proving possible three different ways.* **"Is it possible" is a yes / no**, *and evidence produced after it is settled costs the thing the format exists to protect: his afternoon.*

## <a id="closed"></a>CLOSED — and where the sprint that followed diverged from it

> ***Doug, 2026-09-19:*** **"You can close the last sprint. And you can jot down the narrative if we diverged."**

***It delivered what it was for.*** **Eleven design units, nine settled, none open** — *and the two that mattered most were the ones that made the next sprint possible:* **[D9](../the-catalogue-and-the-specification/05-the-design-units.md#d9), that the catalogue can be built by PARSING rather than evaluating**, *which is the whole reason the binder now names and addresses every book in a hundredth of a second with no book loaded;* **and [D6](../the-catalogue-and-the-specification/05-the-design-units.md#d6), that address derivation was already a pure late pass.**

***AND ITS CENTREPIECE WAS REPLACED THE DAY AFTER IT WAS SETTLED.***

**[D10](../the-catalogue-and-the-specification/05-the-design-units.md#d10) — the notation — is superseded**, *and the unit now says so at its head.* **The language is [The Language and What It Compiles Into](../the-catalogue-and-the-specification/06-the-language.md).** *That is not a failure of the sprint; it is the design format working as intended, because a unit that records what it RESTS ON can be corrected in place rather than argued about.* **What it cost was one day of a compiler being written against a notation nobody was going to use** — *three plausible wrong languages, each implemented and each presented in a table, before anybody noticed the spelling had moved.*

**The divergences, so nobody re-derives the old shape from this chapter:**

| this sprint settled | what was built |
|---|---|
| **the five-form notation** | *seven forms;* `$[ ]` *refers,* `[[ ]]` *annotates, and the side the stars stand on is the direction* |
| **types — `Catalogue`, `Autobiography`** | ***the spine*** — *exactly one book is its own subject, one its own author, and* **the self-reference IS the type** |
| **an unresolved citation LOGS** | ***it refuses***, *in both halves — Doug: "I want to see them as errors preventing a compilation"* |
| **the catalogue answers keys; the specification checks books** | *one reading. Two readers was the rule-with-two-homes fault, in the middle of the machinery built against it* |

***AND ONE THING THIS SPRINT NAMED THAT THE NEXT ONE PROVED EXPENSIVE:*** **"six books is not the target."** *It was written here as an extrapolation. It became a measurement:* **1000 books, 11000 spots, 30000 mentions** — *and the specification was quadratic until it was measured, 342ms where it should have been 48.* **Doug, on the same day:** *"That's you thinking in N=6."*

***THE NEXT SPRINT IS [Sprint 77 — The Binder Rebuilt](83-sprint-77--the-binder-rebuilt.md)***, *now planned as [three milestones](83-sprint-77--the-binder-rebuilt.md#milestones), each closing with its gate run, a catchup, and a cleanup.*
