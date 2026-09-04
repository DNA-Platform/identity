# Sprint 41 — Subjects, Authors, and References

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **coauthor:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md), [Queenie](../../../../.claude/library/..teamsmanship/..team/queenie/queenie-and-the-specification/.cover.md)
- **status:** `implementation-ready` — brainstormed and planned with Doug 2026-09-04, every requirement ruled by him live. ***Every name is a proxy.***
- **workflow:** [feature](../../../../.claude/library/..teamsmanship/19-workflows.md) — brainstorm and plan HERE, work next.
- **style:** [The Coding Style](../designing-inexplicable-phenomena/11-the-coding-style.md)

---

**The sprint makes a subject name in a book resolve to the book that covers it, without anybody typing a route.** Three classes and one framework change: `$Subject` and `$Author` become traits that are formulas with their own catalogue; the compiler emits the references section that every book shares; and `$Chemistry` gains `formula = 'new'` so a formula can start a catalogue of its own instead of adding its names to `$Type`'s.

**Doug's scope, verbatim:** *"Let's make this the sprint. Subject / Author, what the compiler spits out for references, and then Index"* — corrected a minute later to *"No index. Subject, Author, References"* and *"And the $Chemistry change to help us."*

# <a id="the-ask"></a>What Doug asked for, verbatim

*Recorded as his words, not as a brief we paraphrased. The design below is answerable to these.*

> "We need to make Subject and Author work. And then we need tags for like: Catalogues and Name, because the books that represent subjects and authors will need to be able to register something I think unless we can get it done in the book constructor.
>
> The idea is that every author is the canonical autobiography or one of its autobiographies. That will likely be an annotation that we need.
>
> We will need registration. So Subject and Author are going to be formulas. And then how might we be able to do it so that TypeOfBook specifically can decide whether book is a subject catalogue or autobiography and dynamically register instances so that the `<Subject>Mathematics</Subject>` and `<Author>Eirian</Author>` might work to have an instance appear that carries the `$$Book` reference to the right books for each? That is the feature there."

On the declaration syntax:

> "it is on the binder to emit the Subject for anything is a Catalogues tag. Similarly for Author and Names. Maybe we can use Subject for both. Something like this
>
> ```
> // Has subject Math
> <Subject>Math</Subject>
> <Subject>of: Abstract Algebra</Subject>
> <Subject>of: Group Theory</Subject>
> ```
>
> That's good for that, and notice that it declares itself with multiple. What we want is for the cover to manage those subjects so that `<Subject>Abstract Algebra</Subject>`"

On the classes:

> "I don't know how complicated they will be. I doubt we even want a base class. I think we want them to be traits that are formula, and users will subclass them to add subject-based and author-based functionality to books if needed"

On where the shared list lives:

> "In the index. The index is parenthetical. I think what we need is that someone can declare an Index - ah maybe we need to have the global thing be the References section, not an index and that is shared by all Indexes. Every book has an index and it gets the same References section injected into it. We will have to compile that thing, and it should help subject and author tags to work. Different parts of the index can be available to different books based on where they are in the hierarchy, so that it is one view but everyone shares it"

On failure and on routes:

> "It should throw an error. What happens now with a formula? The cover can check if it gets a plain subject and do a check and specifically in type of cover can throw an error"
>
> "I think, for now, we need to stick to one route per book"

On the framework change:

> "Can we have something in $Chemistry for this? We can say that a type starts fresh, disconnected from its underlying one. How can we do that: Make `formula: boolean | 'new'`. The new specifies both true and its disconnected right? And then we can support this." · *"Either that or we do specifically again, but I think we prefer it this way"*

# <a id="grounding"></a>What the reading established

*Every line below was read in the working copy this session. **State is marked**: `read` = verified by reading the source; `probe` = verified by running it. Nothing here is a guess.*

## The formula machinery already does most of this

A class whose `formula` member is truthy gets a catalogue of its own, built lazily by `catalogueOf` ([chemical.ts:946](../../../chemistry/package/src/abstraction/chemical.ts)). The protected `[cache](key)` member ([chemical.ts:1004](../../../chemistry/package/src/abstraction/chemical.ts)) files an instance under that key in every formula class up its prototype chain, appends the key to a list of known names, and marks the instance as a template. `[$formula$]` ([chemical.ts:1020](../../../chemistry/package/src/abstraction/chemical.ts)) reads the element's text children as the key, looks it up, and returns the found instance's component. `read`

**This is how `<Type>Chapter</Type>` finds `$TypeOfChapter` today, and the pattern is written out in six lines in a test** ([specification.test.tsx:126-140](../../package/src/tests/specification.test.tsx)): a subclass of `$Type` sets `resolve = false`, calls `this[cache]('Counted')` in its constructor, is passed to `$()`, and then `<Type>Counted</Type>` resolves to it. `read`

**`resolve` is the switch that decides which end of the pair a class is.** `$Type` inherits `resolve = true` from `$Chemical` and is therefore the class that resolves; every `$TypeOf*` sets `resolve = false` so what comes back does not resolve again. `$Trait` sets `resolve = false` on itself ([Writing.tsx:124](../../package/src/writing/Writing.tsx)), which is why `<Trait>Glowing</Trait>` stays literal and only produces a `pd-glowing` class name — pinned in the DOM at [labels.test.tsx:24-27](../../package/src/tests/labels.test.tsx). `read`

## A formula only resolves inside a view, and that rules out one design

`[$formula$]` is reached only from `augment`, and `augment` is called from exactly two places, both on a chemical's view output ([particle.ts:490](../../../chemistry/package/src/abstraction/particle.ts) and [:510](../../../chemistry/package/src/abstraction/particle.ts)). Chemistry's own suite has a section named *the boundary* pinning both halves: a formula rendered as a React root is not swapped, and **a formula evaluated outside a drawing is not swapped either** ([formula.test.tsx:396-405](../../../chemistry/package/tests/abstraction/formula.test.tsx)). `read`

Every book file in the test corpus is `$(<Chapter>…)` at module scope ([02-symmetry.tsx:5](../../.wiki/corpus/gauge-theory/02-symmetry.tsx)), and the compiler emits the same shape ([emit.ts:14-27](../../binding/emit.ts)). **So a formula written directly in a book's prose would stand as a bare word, silently.** `read`

***RUN, WITH A CONTROL, AGAINST BOTH PACKAGES' SOURCE.*** Doug asked for this to be proved rather than argued — *"If every book creates its subject author registration, and I think every book should be in somewhere, we shouldn't have to worry too much about references actually. Let's prove that."* **It was proved, and it does not hold.** `probe`

| what was built | after `$()` | after mounting | drawn as |
|---|---|---|---|
| `$(<Writing>{section}<Type>Cover</Type></Writing>)` — **a book file's exact shape** | `$Type` | **still `$Type`** | `class="pd-type"` |
| the same tree written inside a chemical's `view()` | — | **`$TypeOfCover`** | `pd-cover` |

**Drawing does not rescue it, and nothing throws.** The unresolved annotation degrades to the base type's own class name and the page renders looking fine. *An earlier version of this proof used a hand-made container that returned its children directly rather than holding a `$Block`, and it reported the opposite; that container was not what `$Writing` does, and the result was discarded.*

***So registered classes alone are not enough while book files are built at module scope.*** Two ways to close it, and the cheap one is a template string: **the compiler emits each chapter as a class with its prose in `view()`**, after which every formula resolves and no references wiring is involved at all — which is what Doug's instinct wanted. The other is for the compiler to write the resolved class in at emit time, so nothing resolves at runtime.

***This is why the compiler emits the declarations rather than the book registering itself*** — Doug's own ruling, and the reason `$TypeOfBook.specifically` is not the place. There is a second reason: `books.ts` is one dynamic import per route ([emit.ts:30-35](../../binding/emit.ts)), so a book that is only mentioned is never loaded, and a registrar living in it would never run. `read`

## The shared references section already exists

`$References` sets `$pid = '$references$'` and `persist = true` in its bond constructor ([References.tsx:22-23](../../package/src/reference/References.tsx)). Hydration is keyed by pid, and `propagate` pushes every committed write to every other chemical enrolled under the same pid ([hydration.ts:27-37](../../../chemistry/package/src/implementation/hydration.ts)). **So every book's references section is already one shared object with many instances.** `read`

`reassemble()` ([References.tsx:41-62](../../package/src/reference/References.tsx)) turns each stored path string back into a reference object by reading its two-letter code and looking the class up in `prints` — so `Bk:algebra` already becomes a `$$Book` with no new machinery. `read`

`$TypeOfBook.specifically` already appends a parenthetical `$Index` holding a `$References` to every book ([Book.tsx:52-59](../../package/src/book/Book.tsx)), and `$TypeOfChapter.specifically` does the same with a `$References` at chapter grade ([Chapter.tsx:51-57](../../package/src/book/Chapter.tsx)). `read`

## The collision that forces the framework change

`branch()` ([chemical.ts:889-898](../../../chemistry/package/src/abstraction/chemical.ts)) walks the class chain upward while each class is a formula, and `[cache]` files the name into every class it collects. For a subject the chain would be `$SubjectOfAbstractAlgebra → $Subject → $Trait → $Type`, **so subject names would land in the same catalogue as `Book`, `Chapter`, `Cover`, `Section`, `Word`, `Reference` and `Path`.** `read`

Two silent consequences. A subject named `Cover` would never register at all, because `[cache]` returns early when an ancestor already holds the key ([chemical.ts:1007](../../../chemistry/package/src/abstraction/chemical.ts)). A subject named `Physics` would make `<Type>Physics</Type>` resolve to it. `read`

**A class field cannot mark the class that declared it.** `class Subject extends Trait { formula = 'new' }` gives every subclass's template its own `formula` property answering `'new'` — measured. So `branch()` cannot stop at "the first class that says `'new'`"; it would stop at `$SubjectOfAbstractAlgebra` and leave `$Subject`'s catalogue empty. `probe`

`.formula` is read in exactly three places in all of `$Chemistry` — `isFormula` ([chemical.ts:883](../../../chemistry/package/src/abstraction/chemical.ts)), the declaration ([chemical.ts:978](../../../chemistry/package/src/abstraction/chemical.ts)), and `[$formula$]`'s guard ([chemical.ts:1021](../../../chemistry/package/src/abstraction/chemical.ts)) — **and all three only test truthiness, so `boolean | 'new'` breaks nothing that exists.** `read`

# <a id="actors"></a>Actors

- **A1 — the author of a book.** Writes covers and chapters. Writes `<Subject>` and `<Author>` and never writes a route.
- **A2 — the compiler.** Walks the corpus, reads the declarations, emits one class per declared subject and author, and emits the shared references section.
- **A3 — the reader.** Opens a page in a browser and clicks a subject to reach the book that covers it.
- **A4 — a library developer.** Subclasses `$Subject` or `$Author` to attach rules or behaviour to every book on that subject.

# <a id="requirements"></a>Requirements

*Each states what would be OBSERVED if it held. A requirement that cannot be seen satisfied is not a requirement. Where one corresponds to a drafted requirement in [Sprint 39 § the apparatus](41-sprint-39--the-road.md#apparatus), it says so rather than renumbering.*

## The framework change

**R1 — `formula` accepts `'new'`, and a class that declares it starts a catalogue of its own.** `$Chemistry`'s `formula` member is typed `boolean | 'new'`. A class declaring `formula = 'new'` is a formula, and `branch()` includes it and stops there rather than continuing to its formula ancestors.
> **Observed:** a class `$Subject extends $Trait` declaring `formula = 'new'`, with a subclass registering the name `Cover`, registers successfully; `<Subject>Cover</Subject>` resolves to it; and `<Type>Cover</Type>` still resolves to `$TypeOfCover`. Both in one test.

**R2 — `'new'` is read as the topmost class in a run, because a field cannot say which class declared it.** `branch()` stops after the first class whose template answers `'new'` **and whose parent class's template does not**.
> **Observed:** with `$SubjectOfAbstractAlgebra extends $Subject extends $Trait`, the chain collected is `[$SubjectOfAbstractAlgebra, $Subject]` — the subclass files into its own catalogue and into `$Subject`'s, and nothing reaches `$Trait` or `$Type`. Assert `$Type`'s known-name list is unchanged after registering a subject.

**R3 — nothing that exists changes behaviour.** `$Chemistry`'s suite and lib's suite both stay at their current counts, and no existing class declares `'new'`.
> **Observed:** $Chemistry 848/848 and lib 543/543 before and after the framework change, with the framework change alone in the working copy.

**R3a — whether a tag resolved is readable through an exported symbol, not a public member.** *Doug: "we want [formulaResolved] as a symbol to import, and we need to work publicly… Or just resolved and the import will be from formula?"* `$Chemistry` exports it beside `cache`, `children` and `style` ([index.ts:32](../../../chemistry/package/src/index.ts)), and `[$formula$]` sets it on the instance it hands back.

**Measured, and it is why a symbol is worth having:** `resolve` already tells the two apart — an unresolved tag is the base class reading `resolve = true`, a resolved one is the registered subclass reading `false` — **but `resolve` is an instruction, not a record.** It says *should I resolve*, and reading it as *did I resolve* is inferring a fact from a flag that only implies it. A symbol says the fact.

| | class | `resolve` |
|---|---|---|
| written and never resolved | `$Type` | `true` |
| resolved through the formula | `$TypeOfCover` | `false` |

> **Observed:** `import { resolved } from '@dna-platform/chemistry'` and `one[resolved]` answers true only for a tag the formula actually swapped. A member named `resolved` on a user's own class does not collide with it. ***The name is a proxy: `resolved` matches chemistry's existing exported-symbol convention — short, lowercase, `cache`/`children`/`style` — and `formulaResolved` is the unambiguous alternative.***

## The catalogue — three cards

*Doug, 2026-09-04: "What if these are the Card — Card can be the base class — and then we have IndexCard (base), Title, Subject, Author… they represent the three cards of the catalogue and we subclass and make one of each for the books. This is what I think will be useful." Then: "call this IndexCard and IndexCard goes in Reference. The three that subclass it are the cards in the catalogue. **This is our catalogue.**"*

**R4 — `$IndexCard` is a NEW class and it is a TRAIT; `$Title`, `$Subject` and `$Author` are kinds of card.** *Doug: "IndexCard is a trait. And it is new. The rest are all book names, and then Title and Subject and Author as types of cards."* `$ReferenceCard` is **not** renamed and is not touched.

***Being a trait is what makes one class do both jobs.*** `$Trait` and `$Reference` are sibling branches under `$Annotation`, so a class can be one or the other — and the trait branch is the one that gets both, because a trait is `$Writing` and therefore has a block. **The card is worn by the book** (so it lands in `traits`, draws `pd-math`, answers `reflection.is(book, 'Math')`, and runs its own specification over the book at `specify()`), **and it points**, because its block holds the `$$Book` and [`$Writing.means`](../../package/src/writing/Writing.tsx) already finds a reference in a block.
**All four live in `book/`.** *Doug: "Put all 4 in book."* And **`$ReferenceCard` is a different thing and is not touched** — *"They are different. ReferenceCard is a multi-reference. IndexCard is a part of the catalogue of the library."*
> **Observed:** `book/IndexCard.tsx`, `book/Title.tsx`, `book/Subject.tsx`, `book/Author.tsx` — four new files. A book carrying `<Subject>Math</Subject>` draws `pd-math` on its outer div, answers `reflection.is(book, 'Math')`, and `subject.means` answers a `$$Book` for the Math book. `reference/ReferenceCard.tsx` is byte-identical.

**R5 — `book/Title` and `writing/Title` both want the name `Title`, and the root index re-exports both folders.** The same collision `encyclopedia/Table` had with `writing/Table`, which sprint 40 resolved by giving the encyclopedia its own package surface. **Doug's rule for it, given while the four were still in `reference/`: *"put reference in a sub path called reference and it will be reference / Title."*** Applying that rule to `book/` would take `$Book`, `$Chapter`, `$Cover`, `$Synopsis`, `$TableOfContents`, `$Index`, `$Bookmark`, `$PageFold` and `$Highlight` off the root export with it, which is a much larger break than the reference folder would have been. **A folder and an export surface do not have to match** — the four could sit in `book/` and be exported through their own subpath while the rest of `book/` stays at the root. ***His to rule; it is in the open list.***
> **Observed:** `import { Title } from '<the catalogue surface>'` and `import { Title } from '@dna-platform/lib'` both compile in one file under different local names, and neither shadows the other.

**R6 — every book is registered, and gets one card of each kind.** *Doug: "let's have every book registered."*
> **Observed:** after bind, every book in the corpus has a title card, a subject card and an author card in the emitted output, and none was hand-written.

**R7 — `$Subject` and `$Author` are formulas with catalogues of their own.** Each declares `formula = 'new'` and `resolve = true`; the generated per-book subclasses declare `resolve = false` and register their name.
> **Observed:** registering a subject named `Cover` succeeds, `<Subject>Cover</Subject>` resolves to it, and `<Type>Cover</Type>` still resolves to `$TypeOfCover`. `$Type`'s known-name list is unchanged after registering a subject.

**R5 — a book wears its subjects, and a developer can attach rules to one.** Because a subject is a trait, a book carrying `<Subject>Math</Subject>` answers `reflection.is(book, 'Math')`, draws a `pd-math` class on its outer div, and runs that subject's `specification` at `specify()`.
> **Observed:** in a browser, the book's outermost div carries `pd-math`. In a test, `reflection.is(book, 'Math')` is true, and a subject subclass declaring a rule that always fails makes `book.specify()` throw with that rule's sentence. **CORRESPONDS TO R-A20.**

**R6 — a cover declares what its book covers with `of:`, and may declare several.** A cover writing `<Subject>of: Abstract Algebra</Subject>` says this book is the one for Abstract Algebra. A cover writing `<Subject>Math</Subject>` without the prefix is an ordinary mention.
> **Observed:** a cover carrying three subject elements — one plain and two prefixed — binds clean, and the compiler's output contains two generated subject classes and no class for the plain one.

**R7 — a mention resolves to the book that declared it, and the route appears in no file a person wrote.** `<Subject>Abstract Algebra</Subject>` draws as a link whose href is that book's route.
> **Observed:** `grep -rn '/algebra'` over the hand-written corpus returns nothing, and the rendered page shows an anchor with `href="/algebra"` whose text is `Abstract Algebra`. Clicking it lands on the Algebra book with no page load. **CORRESPONDS TO R-A21.**

**R8 — a mention prints its own words and stays part of the sentence.** The mention is not lifted out of the reading, and it does not draw its route as the visible text.
> **Observed:** the paragraph's `copy` is byte-identical with and without the tag, and the anchor's text is `Abstract Algebra`, never `/algebra`.

**R9 — a name nothing declares stops the build, and the message names what is declared.** *Doug: "It should throw an error."*
> **Observed:** `<Subject>Abstract Algbera</Subject>` fails with `$Subject stands for nothing called "Abstract Algbera" — it stands for Abstract Algebra, Group Theory, Math.` Add a book declaring a fourth subject, rebind, break it again: the list is one longer and nobody typed it. **CORRESPONDS TO R-A29, delivering one of its four failures.**

**R9a — a subject and an author must have RESOLVED, and that is a specification rule.** *Doug ruled this over drawing the books at the check: "you will specify that the subject and author have to resolve. this is doable. And if it's not yet, we will find a property to check if the instance has resolved."*

***The property already exists and it is `resolve`.*** Measured this session: an unresolved tag is the base class answering `resolve = true`; a resolved one is the registered subclass answering `resolve = false`, because a specimen declares `resolve = false` so it does not resolve again. **No new member.** `probe`

| | class | `resolve` |
|---|---|---|
| written and never resolved | `$Type` | `true` |
| resolved through the formula | `$TypeOfCover` | `false` |

> **Observed:** a book whose subject never resolved fails `book.specify()` with `a subject names a book this library catalogues, and this one names none`. The existing check in [`binding/specify.ts`](../../binding/specify.ts) — which imports each book and asserts `specify()` does not throw, and never renders — catches it with no change to how the check runs.

**R9b — a misspelling is red in the editor, before any build.** The compiler emits the declared names as a union type and a narrowed alias beside the classes. `Component<T>` is `React.FC<$Properties<T>>` ([element.ts:23](../../../chemistry/package/src/abstraction/element.ts)) and JSX children are checked against the props type, so narrowing `children` is enough.
> **Observed:** in the emitted output, `export type SubjectName = 'Abstract Algebra' | 'Group Theory' | 'Math'` and a narrowed `Subject`. `<Subject>Chemsitry</Subject>` is a `tsc` error naming the three valid names. **This is R-A22's static rail, delivered by a generated line rather than a framework change.**

**R10 — an author is declared and mentioned exactly as a subject is.** `<Author>of: Eirian</Author>` on an autobiography's cover; `<Author>Eirian</Author>` anywhere else. Its catalogue is separate from `$Subject`'s, so a subject and an author may share a name.
> **Observed:** a corpus with a subject `Eirian` and an author `Eirian` binds clean, and the two mentions link to different books.

**R11 — one route per book, the subject stands in the route, and a mention carries a `$$Book`.** *Doug: "for now, we need to stick to one route per book"* and *"the subjects will likely be in the paths for the books, so we can use the references to construct `$$Book` links too."* A book has one route; that route carries its subject as a step in front of it. The reference path is written with the book step **last** — `Sb:math/Bk:abstract-algebra` — so `$BookSpecification.$landsOnIt`, which reads `path.copy.split('/').pop()` and demands it start with `Bk:` ([Book.tsx:104-107](../../package/src/book/Book.tsx)), **passes with no edit to a shipped specification.**
> **Observed:** the mention's `means` answers a `$$Book` whose `path.copy` is `Sb:math/Bk:abstract-algebra`, and `book.specify()` does not throw. The app's route for that book is `/math/abstract-algebra`. **`read()` across books is NOT delivered and stays owed where [the binder chapter](37-the-binder.md) already records it.**

**R11a — the app's route pattern takes more than one segment.** `main.tsx` matches `:route` and looks up `books['/' + route]`, which only ever matches a single segment.
> **Observed:** a book at `/math/abstract-algebra` opens. This is one line of app code, not a package change.

## References — what the compiler emits

**R12 — the compiler emits the shared references section, and every book gets the same one.** The list of every book and every declared subject and author is build output, not something a reader accumulates.
> **Observed:** after bind, the generated references module lists every book in the corpus with its route. Rename a book's folder and rebind: the route changes there and `git diff` touches no hand-written file.

**R13 — the references section stays one object across books.** Two books open in one process share it, because they share the `'$references$'` pid.
> **Observed:** with two books mounted, appending a reference through one book's references section makes it appear in the other's — which is [today's behaviour](../../package/src/reference/References.tsx), asserted rather than built.

**R14 — the references section gives a book itself and everything below it.** Doug's rule, verbatim: *"The book sees its spine up and itself and everything below it"* — then refined: *"We can probably just provide access down in the references and there will be a different way to access the spine."* So **the references section is the downward reach**, and the spine upward is reached some other way.
> **Observed:** a book at `/math/abstract-algebra` sees itself and any books beneath it and does not see Consciousness. A book at `/math` sees itself and everything under it. Both read the same shared section, and `grep` finds no second copy of the data.

**R14b — the subject on a cover points UP, and its reference is a card that keeps going up.** Doug's design, verbatim: *"I think the subject on the cover will go up, and the reference there should provide a card that keeps going up."*

***This needs no new class.*** [`$ReferenceCard`](../../package/src/reference/ReferenceCard.tsx) is already a reference holding a list of references where **the first is canonical and the rest are the others** — `first`, `rest`, `path` falling back to `first.path`, and `read()` delegating to `first`. So the spine is exactly that shape: **first is the book immediately above, rest is the remaining ancestors in order.** A cover's `<Subject>Math</Subject>` links to Math by default, and the whole spine is available in `references` without another lookup.

The compiler builds the card, because it is the only thing that has the whole tree at once. Nothing walks at runtime.
> **Observed:** on a book at `/math/abstract-algebra`, the cover's subject reference is a card whose `first` is Math and whose `rest` is the library root. A breadcrumb built from `references` shows `Library › Math › Abstract Algebra` with each step a working link. On the root book, the card has no ancestors.

**R14c — the spine terminates, and a cycle stops the build.** The root book declares no subject, which is what ends the chain. Two books each naming the other as their subject would not terminate.
> **Observed:** binding a corpus where Math's cover declares Abstract Algebra and Abstract Algebra's declares Math fails with a message naming both routes. **CORRESPONDS TO R-A29's reciprocity failure**, delivered here rather than deferred.

**R14a — a parenthetical index is made out of what a book sees, and an author can print it.** *Doug: "we will create a parenthetical index out of it and give the author a way to print it if needed."* Parenthetical is the default, so it is absent from the reading until asked for. `$print` already flips it ([Writing.tsx:21-22](../../package/src/writing/Writing.tsx)) and `$References.view()` already draws nothing while parenthetical ([References.tsx:66](../../package/src/reference/References.tsx)) — the same mechanism, one grade up.
> **Observed:** the index draws nothing by default and the book's `copy` does not contain it. An author asks for it and it draws, listing exactly what R14 says that book sees.

**R15 — resolving a mention opens no other book.** The list is data; the book it points at is fetched only when the reader clicks.
> **Observed:** the network panel shows one book chunk on load and a second only after the click. **CORRESPONDS TO R-A30 and R-A36.**

**R16 — the compiler emits two things, not four.** The references section carries what exists, where it lives, and what it is called; the import map carries the loaders. `routes.ts` and `cards.ts` stop being separate generated modules and become readings of the references section.
> **Observed:** after bind, the generated output is the references section plus the import map. The home page's list of books is built from the references section. `grep` finds no hand-kept list of routes anywhere.

**R17 — the import map stays generated, and this is the one part that cannot move.** *Doug: "The compiler can wire up the router I think, but you can advise if there is another way. I prefer not to do it like that if the references section might be able to be where that lives."* **Advice given and recorded:** it can, except for the loaders. `main.tsx` calls `lazy()` on the function held in [`books.ts`](../../.wiki/app/src/library/books.ts), and a bundler splits a chunk only on an `import('./algebra/book')` specifier it can read at build time. A route string read out of the references section at runtime cannot become a module. **So the router takes its routes from the references section and touches the import map only when it actually opens a book.**
> **Observed:** the router's route table comes from the references section; `books.ts` holds nothing but loaders; and each book still arrives as its own chunk rather than everything in one bundle.

# <a id="flows"></a>Key flows

**F1 — declaring.** A1 writes `<Subject>of: Abstract Algebra</Subject>` in a cover → A2 walks the corpus, reads it, emits `class $SubjectOfAbstractAlgebra extends $Subject { resolve = false; constructor() { super(); this[cache]('Abstract Algebra'); } }` and adds the book's route to the shared references section.

**F2 — mentioning.** A1 writes `<Subject>Abstract Algebra</Subject>` → the drawing walk hands the element to `[$formula$]` → the registered class comes back → it draws as a link to that book's route.

**F3 — failing.** A1 misspells the name → nothing is registered under it → `[$formula$]` throws, naming every subject the library declares.

**F4 — extending.** A4 writes a subclass of `$Subject` with a `specification`, and every book wearing that subject is checked by it at `specify()`.

# <a id="examples"></a>Acceptance examples

**AE1 — the declaration and the mention, end to end.**

```tsx
// corpus/algebra/.cover.tsx
<Cover>
    <Title>Algebra</Title>
    <Subject>of: Abstract Algebra</Subject>
    <Subject>of: Group Theory</Subject>
    <Subject>Math</Subject>
</Cover>

// corpus/gauge-theory/02-symmetry.tsx — replaces <Ref>{'[algebra](/algebra)'}</Ref>
<Sentence>{'The group structure comes from '}<Subject>Abstract Algebra</Subject>{'.'}</Sentence>
```

renders `The group structure comes from <a href="/algebra">Abstract Algebra</a>.`

**AE2 — what the compiler writes.**

```tsx
// generated
export class $SubjectOfAbstractAlgebra extends $Subject {
    resolve = false;
    constructor() { super(); this[cache]('Abstract Algebra'); }
}
$($SubjectOfAbstractAlgebra);
```

**AE3 — the framework change.**

```ts
const fresh = (cls: any): boolean =>
    templateOf(cls)?.formula === 'new'
    && templateOf(Object.getPrototypeOf(cls))?.formula !== 'new';

function branch(cls: any): any[] {
    const chain: any[] = [];
    let at = cls;
    while (at && isFormula(at) && !Object.prototype.hasOwnProperty.call(at, $isFormulaBase$)) {
        chain.push(at);
        if (fresh(at)) break;
        at = Object.getPrototypeOf(at);
    }
    return chain;
}
```

**AE4 — the demonstration, which a hand-written page could not fake.** One page carries a hand-typed link and a resolved subject side by side. Rename the target book's folder on disk and rebind. **The resolved one follows the rename; the hand-typed one is still blue, still clickable, and dead** — and `git diff` on the page that carries both shows nothing. One act on the filesystem, two different outcomes on one page, no page edited.

# <a id="order"></a>The order, Doug's

*Verbatim: "So chemistry first. Then Subject / Author. Then configuring references so Subject / Author work. Maybe Subject / Author will just work because we create strong classes."*

1. **$Chemistry** — `formula: boolean | 'new'` and the `branch()` change. R1–R3. Nothing else moves until both suites are back at their counts.
2. **Subject and Author** — the two trait classes and what the compiler emits for them. R4–R11a.
3. **References** — the shared section, the card that goes up, the import map split. R12–R17.

***His observation is worth testing at the end of step 2 rather than assumed:*** once the compiler emits a registered class per declared name, the mention resolves through `[$formula$]` with no references wiring at all. **If that holds, R7 and R9 are demonstrable before step 3 starts** — and step 3 is then only the card, the shared list, and the router. If it does not hold, we learn it one step earlier than we otherwise would.

# <a id="size"></a>The size, measured before dividing

**The chemistry half is about fifteen lines across three files.** `formula`'s type, a four-line helper, one line inside `branch()`, one exported symbol, one assignment. **The lib half is four new files** of roughly thirty lines each, on the shape `book/Cover.tsx` already has. **The compiler half is one reader, one emitter and one template string** — the emitter has [`assemble`, `doors` and `routed` beside it](../../binding/emit.ts) as the pattern to copy, and the declaration read copies [`read.ts`](../../binding/read.ts)'s existing regex over carried source.

***One session's work, and it is not divided.***

# <a id="decisions"></a>Decisions

**D1 — `'new'` is declared on `$Title`, `$Subject` and `$Author`, and NOT on `$IndexCard`.** *This falls out of R2 and it is the reason to state it here rather than meet it during the work.* `branch()` stops at the first class saying `'new'` whose parent does not. If `$IndexCard` declared it, every card kind would file into `$IndexCard`'s single catalogue and **a subject named Math would collide with an author named Math**. With `'new'` on the three, `$IndexCard` inherits plain `formula = true` from `$Type`, and each kind gets its own catalogue. *Chosen over declaring it once on the shared base, which reads tidier and is wrong.*

**D2 — the card holds its `$$Book` in its block rather than in a member.** A trait is `$Writing`, so it has a block, and [`means`](../../package/src/writing/Writing.tsx) already finds a reference in one. *Chosen over a `book` member, which would add a member to a class Doug has not approved one on, and would duplicate what `means` does.*

**D3 — the compiler writes the cards; nothing registers at runtime.** Proved this session: a formula in a book built at module scope never resolves. *Chosen over registering in `$TypeOfBook.specifically`, which cannot reach a book that was never imported.*

**D4 — the specification asks whether the card resolved, using the exported symbol.** *Doug's ruling over drawing every book at the check.* *Chosen over rendering in the CHECK, which would catch more but changes how the check runs.*

**D5 — `$ReferenceCard` is untouched.** *Doug: "They are different."*

# <a id="units"></a>Units

*Doug's order: chemistry, then the cards, then the compiler. Each unit names what runs and what is visible.*

## Chemistry — his direct instruction, and nothing wider

**U1 — `formula: boolean | 'new'`, and `branch()` stops at the class that declared it.** · `abstraction/chemical.ts` · **Mechanism:** a `fresh()` test comparing a class's template `formula` against its parent class's template, because a class field is inherited by every subclass's template and so cannot name its own declaring class. · **Visible end:** a formula declaring `'new'` registers the name `Cover` while `<Type>Cover</Type>` still answers `$TypeOfCover`, and `$Type`'s known-name list is unchanged. · R1, R2, R3.

**U2 — an exported symbol saying a tag resolved.** · `implementation/symbols.ts`, `index.ts`, `abstraction/chemical.ts` · **Mechanism:** `[$formula$]` marks the instance it hands back, beside the existing `cache` / `children` / `style` exports. · **Visible end:** the symbol reads true only for a tag the walk actually swapped, and false for one written and never drawn. · R3a.

## The cards

**U3 — `$IndexCard`.** · `book/IndexCard.tsx` · **Mechanism:** extends `$Trait`; its block carries a `$$Book`; it exposes what it points at through the existing `means`. · **Visible end:** a book wearing one draws its `pd-` class name and `card.means` answers a `$$Book`. · R4, D1, D2.

**U4 — `$Title`, `$Subject`, `$Author`.** · `book/Title.tsx`, `book/Subject.tsx`, `book/Author.tsx` · **Mechanism:** each extends `$IndexCard` and declares `formula = 'new'` so each has its own catalogue. · **Visible end:** a subject and an author may share a name and resolve to different books. · R4, R7, R10, D1.

**U5 — the rule that a card must have resolved.** · the three card files · **Mechanism:** a specification rule reading U2's symbol; the existing build check already calls `specify()` on every book. · **Visible end:** a book with a misspelled subject fails `npm run bind` naming what the library covers. · R9, R9a.

**U6 — the export surface. DESIGN OWED — no files, no scenarios.** The `book/Title` and `writing/Title` collision is [R5](#requirements) and is Doug's to rule. *Marked unbuildable rather than guessed.*

## The compiler

**U7 — read the declarations off the covers.** · `binding/read.ts`, `binding/walk.ts` · **Mechanism:** the regex over carried source that `read.ts` already uses, looking for the card tags and the `of:` prefix. · **Visible end:** binding a corpus prints what each book declares. · R6, R8.

**U8 — emit the card classes, the union type and the narrowed alias.** · `binding/emit.ts` · **Mechanism:** a template string beside `assemble`, `doors` and `routed`. · **Visible end:** a misspelled subject is red in the editor before any build. · R6, R7, R9b.

**U9 — emit the references section and the spine card.** · `binding/emit.ts` · **Mechanism:** the compiler holds the whole tree, so each card's ancestors are known at emit; the shared section is already one object by pid. · **Visible end:** a breadcrumb reads off `references`, and renaming a folder moves the resolved link while a hand-typed one dies. · R12, R14, R14b, R14c, R16, R17, AE4.

# <a id="scenarios"></a>Test scenarios

**U1** — a `'new'` formula registers a name its ancestors already hold, and both resolve correctly · registering a subject leaves `$Type`'s name list unchanged · a subclass that redeclares `'new'` still files into its parent's catalogue · both suites at their current counts.
**U2** — the symbol is true after a real swap, false for a tag built and never drawn, and absent from a chemical that is not a formula.
**U3/U4** — a book wearing a card draws its class name; `means` answers a `$$Book`; a subject and an author sharing a name resolve apart; a card's own specification runs over the book at `specify()`.
**U5** — a misspelled name fails `specify()` with the library's own list in the message; a correct one passes; the message grows when a book is added.
**U7/U8/U9** — a cover declaring two subjects emits two classes; a book declaring none still gets a route; a cycle between two books fails the bind; the emitted union rejects a misspelling under `tsc`.

# <a id="risks"></a>Risks

**The working copy is contended.** Another session is editing `writing/Writing.tsx`. **Take a baseline before anything, and never quote a number that includes their work.**
**Chemistry's dist must be rebuilt** before lib's suite means anything after U1 or U2 — `npx rollup -c`, and this cost three separate diagnoses in sprint 40.
**U2 writes during the render walk.** Marking an instance inside `[$formula$]` is a write while something else is drawing. *Mitigation: mark the registered template rather than the drawn derivative, or keep the member off the reactive path; measure before choosing.*
**U6 blocks U4's export**, not its construction. The classes can exist and be tested before the surface is ruled.

# <a id="out"></a>Out of scope, said plainly

**The Index** — Doug cut it: *"No index. Subject, Author, References."* How an index arranges the shared section, whether a person may declare one, and the per-book views all wait.

**Also out:** the table of contents, covers as a kind, synopses, figures and illustrations, `read()` across book boundaries, nested book routes, and the Wikipedia demo itself — which is [the destination](00-planning.md#the-road), not this sprint.

# <a id="ruled"></a>Ruled during the brainstorm

**`$Trait` stays as it is — RULED, no.** *Doug: "Trait as type is fine. They are types of types and you can do `<Type>Whatever</Type>` `<Type>Glowing</Type>`."* Trait names sharing `$Type`'s catalogue is correct, because a trait **is** a type of type. Only `$Subject` and `$Author` declare `'new'`. *His condition checked: `Glowing` appears in exactly two files, [labels.test.tsx:24](../../package/src/tests/labels.test.tsx) and `tests/.spec/writing/Trait.tsx` — both tests, nothing in the framework.*

**Where this is seen — RULED, imagine it.** *Doug: "We have to just imagine for now. To do Wikipedia, we need to work on the compiler, and we don't even have folder conventions. After this and after chapter types we will definitely start on it. The binder will help."* So the demonstration runs against the books that already bind, and **Wikipedia comes after this sprint and after chapter types.** The folder conventions it needs do not exist yet, and inventing them here would be inventing them twice.

**The router — RULED with advice, see R16 and R17.**

# <a id="open"></a>Still open

1. **The `of:` prefix.** It is his own, and it is parsed out of the written text. Confirm it is the spelling rather than a prop.
2. **Whether the subject in a route is one segment or several.** `/math/abstract-algebra` has one subject step. A book under two subjects has one route, so one of them wins — which, and who decides?
3. **What the compiler does with a book that declares no subject.** It still needs a route.

# <a id="names"></a>Every name here is a proxy

`$Subject` · `$Author` · `formula = 'new'` · `of:` · `fresh()` · `$SubjectOfAbstractAlgebra` and the generated-class naming pattern · the emitted references module's name. **Doug names framework things.**

# <a id="built"></a>BUILT — 2026-09-04

***Gates at close: lib 543/543 across 25 files, `tsc` 0 · $Chemistry 848/848 across 68 files, `tsc` 0. Nothing seen in a browser, because there is nothing yet to see.***

**$Chemistry, on Doug's direct instruction and nothing wider.** `formula` is typed `boolean | 'new'`; a class declaring `'new'` starts a catalogue of its own and `branch()` stops there. **Proved by differential** — change the one word to `true` and four of six assertions fail: the class never registers, `resolved` is undefined, `resolve` stays true. And a `resolved` symbol exported beside `cache`, `children` and `style`, set on what the walk substituted in. *A symbol is never bonded, so it is not a write into another chemical's render.*

***One correction to Doug's sketch, measured rather than argued:*** a class field is initialized on every subclass's template too, so `formula = 'new'` cannot say which class declared it. `branch()` stops at the first class saying `'new'` whose parent does not.

**$Trait is deleted.** A piece of writing carries as many types as it likes; `type` is the canonical one, chosen as a type whose own name is one of the seven, else the first carried, else the class's default. `specify()` runs each distinct type class once — deduped by constructor, because the formula hands back a fresh derivative per render and identity comparison ran the canonical twice. `$typedOnce` and `$oneKind` are gone: those two rules *were* the one-type rule. 36 sites across 12 files.

**Heading is split from Title.** A section opens with its **heading** — `writing/Heading.tsx`, and the rule is `$opensWithHeading`. `Title` belongs to the book, so the name never collides and no package surface had to move.

**The catalogue, as Doug drew it.** `$Type` → `$TypeOfReference` → `$IndexCard` (reference) → `$CatalogueCard` (book) → `$Title`, `$Subject`, `$Author`. A card is **a type and a type of reference by being one** — his reason: *"we are closed under books, so any sort of metadata will frequently be a reference to the book that describes it."* Each carries `title`, `subject`, `author`, and the one matching its own kind is a self link, **set in the bond constructor and proved per instance** — a field initializer would have pointed every card at the template.

**Two holes found and closed.** `$TypeOfCell` extended `$Type` directly, so a cell had no canonical address at all; it is a paragraph now. And `TableSpecification` silenced *"a section opens with its heading"* for tables — deleted, so a table opens with a heading like any section, the heading draws, and the columns rule counts cells rather than every part.

**A writing inside the same kind stands one deeper.** Asked rather than stored: `reflection.indent` counts same-kind ancestors. ***Storing it does not work*** — a writing bonds **twice**, and on the first pass its parent's type is not yet assigned, so an assignment in a bond constructor races the parent's own bond.

**Interfaces for the seven** — `$Letter$` through `$Book$` — and `$Section$` carries `name`, answered by the heading a section opens with.

## <a id="corrected"></a>What the reading corrected

***Eleven kinds do NOT lack a reference.*** I reported that they did; `$Catalogue.code` already walks a type's name chain and returns the first code registered in `prints`, so Heading answers `Ph`, Table `Sn`, Cover `Cr`, Index `Cr`, References `Sn`. **Fifteen kinds check out.** Only Cell was genuinely missing, and only because its type named no level.

***And the codes are not chosen.*** `reflection.code` computes them from the name, and all seven fall out of it. Cover and Chapter both give `Cr`; Title and Table both give `Te` — which is evidence the codes were never meant to reach past the seven.

# <a id="where-things-stand"></a>WHERE THINGS STAND

## The next action

***The book chapters sprint: cover, synopsis, table of contents.*** Doug's words at the close. **Open it by reading this section and [chapter zero's road](00-planning.md#the-road), not by rebuilding context.**

## The state, once

**COMPLETE — the language.** Everything under BUILT above, green in both packages. **NOT DONE — the program.** Nothing registers a card, and that is correct: the compiler emits them and U8 was cut. *Doug: "We don't have a runtime. When building C#, no, there are no classes yet."*

**The language was checked by hand-writing one card the way the compiler would emit it** — nine lines. `<Subject>Math</Subject>` becomes it, `<Subject>Mathmatics</Subject>` is refused **by name**, and the book carrying it is a Math book.

## Owed, and the first is a sprint

***THE DESCENT IS IN.*** `specify()` reads its parts, so a book's whole interior is checked instead of its root alone. Doug: *"It is this sprint, it is a feature, and anything other than fixing it is making it worse."* Sixteen tests failed when it landed and all sixteen were worked through — fixtures whose sections had never opened with a heading, and every count and copy that repair shifted. **Both suites green with it in.** Recorded whole in [Solutions 46](../solutions/46-the-check-that-checked-one-node.md).

***AND IT UNCOVERED ONE THING THAT STAYS OPEN: a paragraph is not divided into sentences.*** One `$Sentence` holds a whole two-sentence paragraph, so the interior full stop trips *"a sentence stops once, at its end."* Four `.spec` examples were reduced to one sentence each so the descent could land; **that is a hold, not an answer.** A document framework that cannot carry a two-sentence paragraph is not finished, and the fix is a ruling — either the paragraph's parse divides on stops, or the sentence rule is wrong about what a sentence is.

- **The route on the card** — walk `subject` up, kebab each name, `.html` at the end. Not started.
- **`of:` at render.** A declaring subject sets its own `resolve` false in its bond constructor, so the specification skips it. **At render the template's `resolve` is what is read**, so a drawn `of:` form would still be looked up — and the compiler consumes the `of:` form, so it should never be drawn. ***Never change $Chemistry to fix this*** — Doug, explicitly.
- **`$Title` and `$Author` carry no rules of their own.**
- **A book per page.** Doug ruled it: *"I would say a book per page, and we think of a book more as an app, but be prepared to have ways to show more than one book on a page."* **No router is needed** — the public app already uses none, and `$Ref` draws a plain anchor outside one. What is missing is the build: no Vite inputs, no prerender, and the `404.html` copy exists only because routes are folder paths with no file behind them.
- **The library's own card being its own subject is NOT owed** — Doug: *"We are emitting all of that. The structure can be validated by the system that generates it."*

## Wrong turns, so they are not retried

- ***`specification` does not belong on `$Writing`.*** Writing is what is written; a specification is what must hold of it. A letter has no rules to give. It was moved there because `$Reference` and `$Type` both descend from `$Writing` — choosing by inheritance instead of by meaning.
- ***Do not make a type of a type.*** A subject IS a type; a `$TypeOfSubject` beside `$Subject` is nothing, and it made the card answer Reference as its own type.
- ***Do not change the shared `chain` fixture to fix a specification failure.*** Giving `chain.Section` a heading changed the text every content assertion reads and took sixteen failures to twenty-seven.
- ***`indent` cannot be assigned at specify.*** It is read by `parts()` during the parse, which runs at render; specify runs after, or in the compiler's check, never.
