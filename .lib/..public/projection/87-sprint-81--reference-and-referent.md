# Sprint 81: Reference and Referent

- **author:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **coauthor:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md), [Adam](../../../../.claude/library/..teamsmanship/..team/adam/adam-between-the-wires/.cover.md), [Queenie](../../../../.claude/library/..teamsmanship/..team/queenie/queenie-and-the-specification/.cover.md)
- **status:** implementation-ready
- ***The sprint's name is a PROXY; Doug's to rename. Opened 2026-09-24 on his choice of the unit: "Reference and Referent / Means and Mentioned."***

---

## Where this unit comes from

**Doug chose it by name on 2026-09-24, and the Genesis put it BEHIND where the redraft already stands.** Format is E23 and it shipped in [Sprint 80](86-sprint-80--format-and-theme.md); Reference and Referent are **E21 and E22**, which the redraft built past. Three later events reach for them and find nothing: E23's *Means modifies Format on render* has no Means, E30's *"Heading/Title/Cover are referents that mean each"* has no Referent, and E33's self-link chain is references all the way down.

**And the whole design was ruled in conversation across one session**, which is why the requirements below are his sentences rather than a document's.

## What the Genesis says

**E21.** *Annotation specializes into Mention, exported Mentioned; authored from without; may confer an id;* `<Mentioned as=quote/>`*; without `as` the entire quote is the key.* And: *annotations may have a name defaulting to type name.*

**E22.** *Mention becomes **Referent** (exported Mentioned). **Reference** (exported Means) is another annotation; points to its Referent.* `<Means>aristotle-quote</Means>`*;* `<Ref for=aristotle-quote>`*. The anchor/id pair. Meaning may inject itself as style.*

**Two of those are already superseded and neither returns.** E22's *throw when the existing one is not a proper subclass* went at **E65**, replaced by `ensure`, which the collection has. E21's *declares itself unique* does not return either — [How Writing Is Extended](../writing/06-how-writing-is-extended.md) records it: *"nothing in the list is made unique and a specification asks `containsOne`."*

**And one thing in E21 is explicitly out.** Doug, 2026-09-24: ***"Quote was more of an example and not a real thing we need to implement. We need to implement the Reference and Referent annotations."***

## What the compiler already does, measured

***[`reference/transform.ts`](../../package/.binding/reference/transform.ts) is written and its emissions are all under promise*** in [`transform.test.ts`](../../package/.binding/reference/transform.test.ts). Its own header carries Doug's 2026-09-18 law: **"Everything supports [] or (). Everything compiles to []() except the mention."**

**Four shapes come out today:** a bare slug inside a generated `<Fold>`; a `[words](url)` inside a generated `<Ref>`; a bare address inside a `Reference` element; and words alone for anything not in a roster.

***And the compiler's own comment names the gap:*** **"There is no writing kind in the framework that plants an id yet, so its copy stands and the planting is owed."**

**The binder is v1's, wholesale.** It reaches into the package for `reflection.slug` at four sites, plus `reflection.within`, `reflection.types`, `reflection.names`, `$Book`, `$Canonical`, `$Catalogue`, `$Cover`, the `$TypeOf` pair and `html` — **and not one of those exists in v2's package.** It does not compile against v2 today. This sprint fixes only the reference half of that; the rest is its own work.

## Decisions

### D1 · `id` on `$Writing` is a READING of its Referent, never a field the annotation sets

***Superseded the same day by Doug's own edit and ruling:*** *"I put an id on writing and it starts as undefined. Perhaps we can have the annotation set that and add pa-referent to the classes"* — *so `id` is a field on Writing that a Referent sets, and [the redesign](#redesign) means to make it a Compilation answering the last value set. The decision below is kept as the record of what was chosen first.*

**Doug:** *"The annotation is created by the Mention to hold this for it."* So the writing reads what the annotation holds, and the pattern is already in the code — `$Composition.level` reads `annotations.expressed($Level)?.level`.

**Chosen over** a settable `id` field that a Referent's `defines` writes. *That was drafted and it drags the whole Format apparatus behind it: a single-valued surface, an envelope-style cache, an `erase` guarded by "only if it still finds its own", and four idempotency states to promise.* **A reading has none of that** — nothing accumulates, and a Referent taken out of expression stops conferring the id because `expressed()` is doing the work.

### D2 · The Referent's own field is `identifier`, not `id`

**`$Referent extends $Annotation extends $Writing`, so it inherits `id`.** A field of the same name would shadow the reading, `view` would render it on the annotation's own container as well, and **the page would carry one id twice** — invalid HTML, and silent.

*The word is Doug's, from the ruling itself:* **"an identifier that could be anything and a url."**

### D3 · `Mention` is a `$Word`

**Doug:** *"Seeing as how ALL of React could be written in a Letter, we are using these concepts at a metaphorical level. In fact, make this a Word. It is a near atomic composition… The whole mention gets demoted to a word for me because it is unitary in some connected sense."*

**Chosen over `$Sentence`, which was drafted first and has a measurable fault:** a Mention that is a Sentence is a same-class child of every Sentence holding it, so [Composition's splice](../writing/03-composition.md) flattens it and `sentence.parts` never shows it. **As a Word it stays a part.** The doctrine behind the choice is written into [Word, Sentence and Paragraph](../writing/09-word-sentence-and-paragraph.md#abstract).

### D4 · The compiler emits `[text](identifier)` ALWAYS, and names no component

***Doug:*** **"The compiler ALWAYS should give: `[text](identifier)`. It doesn't know about specific components. To generate any is to break polymorphism. It spits out `[]()`."** And the spec for what the identifier IS: **"An id should be given so that an id can be placed. Otherwise urls should be given so anchors can be made… I want the urls coming from the compiler."**

**He had already given this ruling once**, on 2026-09-20, and it is recorded in [`reading.ts`](../../package/.binding/catalogue/reading.ts): *"if you are parsing like that, you have broken polymorphism. What happens when we want a subclass of title? The compiler just cares that things are in the right file."* It was applied to `print={false}` and never carried through.

### D5 · `slug` moves INTO the binder, and `src` gains nothing for addressing

**Doug:** *"Reflection.slug doesn't have to exist. No, the compiler should handle all of this. It is in control and we should build public like it has no clue what these things are other than an identifier that could be anything and a url."*

**Chosen over** putting `slug` in the package so both sides spell an address the same way. *That was argued from the "two readings that can disagree" wart and it is the wrong cut:* **only the compiler computes an address, so only the compiler needs to spell one.** The framework receives.

### D6 · DI goes on CONSTRUCTION, and a base-class find stays a raw class

**Doug:** *"A base class find is good. You use DI for construction."* An `instanceof` against a base already catches any subclass a scope stood in, so `find($Format)` needs no `$`. **`$()` belongs where the Referent is MADE**, which is the one place a substitution has to happen.

*Ten asks in `src` were reported as a missing DI surface and that was wrong; the finding is retracted and they stay as they are.*

### D7 · Uniqueness is a `specifies`, not a mechanism

E22's *"Mention is unique"* lands as a rule asking `containsOne`, per the standing ruling. **Nothing in the list is made unique**, and nothing unexpresses a sibling for it.

### D8 · No `Mentioned` alias

**Doug:** *"Maybe it's not important to have Mentioned. We won't really be using it. Have Referent and Mention exist in files."* So `Referent` and `Mention` export plainly. **The url side's alias is the one name still open** — see [Open](#open). *Answered the same day: `Reference` stays plain, and `Means` is the Word on the url side.*

## Requirements

Each is one of Doug's sentences from 2026-09-24, with what would be observed if it held.

| | the requirement | observed |
|---|---|---|
| **R1** | Reference and Referent exist as annotations, in files of their own | two files under `src/writing`, both exported |
| **R2** | Quote is **not** implemented | no Quote class anywhere |
| **R3** | A Heading does **not** mean its Section — *"the Heading better NOT mean the section yet"* | `$Heading` unchanged; its rule's wording stops claiming meaning |
| **R4** | `Mention` is a writing at Word, unitary | `$Mention extends $Word`; a Mention inside a Sentence is still a part of it |
| **R5** | The Mention creates the Referent to hold the id for it | `$Mention`'s bond stands a Referent through `$()`; the Referent holds what it was given |
| **R6** | The id renders on the container in the DOM, *"so that references come to the piece of writing"* | the rendered element carries `id` |
| **R7** | The Referent adds `pa-referent` to the classes | the element carries the class, and loses it when the Referent is not expressed |
| **R8** | The compiler always emits `[text](identifier)` and names no component | no `<Ref>`, no `<Fold>`, no roster, no `owes` |
| **R9** | An id where the form allocates, a url everywhere else, both from the compiler | `[[[ X ]]]` gives an id; every other form gives a url |
| **R10** | `.public` has no idea what either is | nothing in `src` computes, validates or synthesises an address |
| **R11** | A reference utility called `Binder`, and the copy reading moved in | `src/utilities`, two files, both exported |
| **R12** | `$()` at construction; a base-class find stays a raw class | the Referent is made through `$()`; the ten existing asks untouched |
| **R13** | A Reference holds the url and adds `pa-reference`; the sheet decides the look | the class appears; nothing is replaced and no Format is touched |

## Plan

**Ten units, in four batches.** Every unit names what runs and when, and what is visible at its end.

| | unit | mechanism — what runs, and when | visible end | files | depends |
|---|---|---|---|---|---|
| **U1** | the copy reading | a utility called on a writing's contents, at a bond, to read what was written as text | a promise reads `[a](b)` back out of a built writing's contents | `src/utilities/Html.ts`, `utilities/index.ts` | — |
| **U2** | the `Binder` utility | `binder.reference(copy)` splits `[text](identifier)`, anchored, at a bond | a promise turns the compiler's exact output into its two halves, and refuses text that is not one | `src/utilities/Binder.ts`, `utilities/index.ts` | U1 |
| **U3** | `id` on `$Writing`, rendered | a getter reading `annotations.expressed($Referent)?.identifier`, asked by `view` at every draw | the rendered element carries `id`, and a browser lands on it | `src/writing/Writing.tsx` | U4 |
| **U4** | `$Referent` | holds `identifier`; `defines` adds `pa-referent` and `erase` removes it, in the pass; `specifies` refuses a second when the binder asks | a writing carrying one draws with the id and the class; two is a named failure | `src/writing/Referent.tsx`, `writing/index.ts` | U2 |
| **U5** | `$Mention` | its bond reads `[text](id)` through `binder` and stands a `Referent` through `$()`, once per mount | `<Mention>[The First Shelf](the-first-shelf)</Mention>` draws as a Word whose element carries that id | `src/writing/Mention.tsx`, `writing/index.ts` | U4 |
| **U6** | `$Reference` | holds the url; `defines` adds `pa-reference` and `erase` removes it, in the pass | a writing carrying one draws with the class, and nothing it held is replaced | `src/writing/Reference.tsx`, `writing/index.ts` | U2 |
| **U7** | the compiler emits `[text](identifier)` | the transform's emission sites, at every `.tsx` transform | the same fixture compiles with no `<Ref>`, no `<Fold>`, and every form carrying both halves | `.binding/reference/transform.ts`, `.binding/catalogue/reading.ts` | — |
| **U8** | `slug` into the binder | one function in the binder, called by its four sites | the binder computes every address with no reach into the package | `.binding/` — transform, catalogue, wellformed, addresses | U7 |
| **U9** | the promises, and the counts | the suite, and a draw count around each change | the suite by number, and one paint per change | `.tests/reference.test.tsx`, `.tests/renders.test.tsx` | U3–U6 |
| **U10** | the cleanup | — | the six stale claims below are gone and the chapters are true | `.lib/writing/05`, `06`, and the cover | U1–U9 |

**U10 is not optional decoration; it is the sprint's own debt.** Six claims in the two chapters that document the API are false against the code, and one of them — *"No annotation that knows another's class as its twin"* — **Doug struck last session and the edit never ran**. It directly contradicts U5, where a Mention creates its own Referent.

| the claim | where | what is true |
|---|---|---|
| *"No annotation that knows another's class as its twin"* | [06](../writing/06-how-writing-is-extended.md) | *"Annotations should come in families. They are jointly defined… They fucking DO know each other"* |
| Word/Sentence/Paragraph at 1, 2, 3; Section at 4; Chapter 5; Book 6 | [06](../writing/06-how-writing-is-extended.md) | Letter 1 … Book 7, per ruling 3 |
| Referent *"exported as Mentioned"* | [06](../writing/06-how-writing-is-extended.md) | no alias — D8 |
| `annotations` *"held in a `@reactive()` backing"* | [05](../writing/05-the-writing-class.md) | no decorator; `@represented()` on `Collection` does it |
| `$Annotation` has *"a view that draws nothing"* | [05](../writing/05-the-writing-class.md) | it draws its container and its note |
| `toString` carries *"whether it is expressed"* | [05](../writing/05-the-writing-class.md) | membership alone |

### The batches, and each one reverts on its own

**Doug, 2026-09-24:** *"I want you to each read every single code file you generate with a literal file read, and then report back on the result. It can be after the batch, but you need to be prepared to reflect and you need to be able to revert any particular batch if it doesn't good."*

| batch | units | why it stands alone |
|---|---|---|
| **B1** | U1, U2 | utilities only — no API semantics, and the thing he cares least about goes first so the surface he cares most about is written against something proven |
| **B2** | U4, U5, U6, U3 | **the `.public` API semantics** — every line needs his explicit yes BEFORE it is written |
| **B3** | U7, U8 | the compiler — independent of B2, and reversible without touching `src` |
| **B4** | U9, U10 | the promises and the truth of the chapters |

**Each batch is one local commit and nothing is pushed.** A batch that is not good is reverted whole rather than patched. **Every file generated in a batch is read back with a literal file read and reported on** — not the diff, the file — because a file that was written correctly and reads badly is the failure this discipline exists to catch.

### The `src` consent list — nothing here is written before Doug says yes

| change | file |
|---|---|
| `get id(): string \| undefined` reading the Referent | `Writing.tsx` |
| `id={this.id}` on the container in `view` | `Writing.tsx` |
| `$Referent`, `Referent` — new | `Referent.tsx` |
| `$Mention`, `Mention` — new | `Mention.tsx` |
| `$Reference`, and its export name — new | `Reference.tsx` |
| `Binder`, `binder` — new | `Binder.ts` |
| the copy reading, and its member name | `Html.ts` |
| four lines added to two index files | `writing/index.ts`, `utilities/index.ts` |
| the wording of two rules that claim meaning where they check containment | `Section.tsx` |

***Every name above is public API***, because `src/index.ts` is `export *` throughout. **That is the surface he said he cares most about**, and it is why the list is a consent list and not a summary.

## Test scenarios

**U1 · the copy reading.** A built writing holding a string answers it; one holding numbers and nested writing answers them in order; one holding nothing answers empty. *Edge:* an annotation among the contents cannot occur, because the bond sorts them out — so the v1 dodge that skipped them is not ported, and a promise says the contents never hold one.

**U2 · `binder.reference`.** The compiler's exact outputs split correctly: `[The First Shelf](the-first-shelf)` into words and an id, `[The Library](/the-library/)` into words and a path, `[The Library]()` into words and an empty identifier. *Failure:* text that is not a reference answers nothing, and a reference with text either side of it answers nothing, because the reading is anchored.

**U3 · `id` rendered.** A writing with no Referent renders no `id` attribute at all; one with a Referent renders it on the container; the id is the Referent's `identifier` and not its own; a Referent taken out of expression through `$is` stops conferring it **and the element loses the attribute on the next draw**.

**U4 · `$Referent`.** It confers `pa-referent` when expressed and loses it when not; it holds what it was given; two on one writing is a named `specifies` failure naming the writing; one on a writing that draws puts both the id and the class on the same element.

**U5 · `$Mention`.** `<Mention>[The First Shelf](the-first-shelf)</Mention>` draws as a Word whose element carries `id="the-first-shelf"` and `pa-referent`; its shown text is the words and never the syntax; a Mention inside a Sentence **is** among that sentence's parts; a Mention written by hand and one the compiler produced behave identically; a Mention whose content is not a reference stands a no Referent and is a `specifies` failure. *Integration:* a Mention inside a Paragraph inside a Section, and the id reachable from the page.

**U6 · `$Reference`.** It confers `pa-reference` and loses it; it holds the url; it does not touch a Format on the same writing, and a writing that is both quoted and referencing keeps its blockquote.

**U7 · the compiler.** The existing fixture compiles with **no `<Ref>` and no `<Fold>` anywhere in the output**; `[[[ X ]]]` yields `[words](id)`; every other form yields `[words](url)`; the page it stands on yields `[words]()`; a file that writes the notation and imports nothing is **no longer refused**, because `owes` is gone; an unknown name still fails by file and line. *Regression:* the roster's removal means plain words inside an element stop compiling — **a promise states that, so the change is deliberate and visible.**

**U8 · `slug`.** The binder computes the same addresses it computed before, with no import from the package; the four sites agree.

**U9 · the counts.** A Mention mounting draws three and paints once; giving and taking a Referent through `$is` costs one paint each way; a writing nobody touched is not redrawn when a sibling gains a Mention.

## Risks

| risk | what mitigates it |
|---|---|
| **The binder does not compile against v2 at all**, so U7 and U8 may not be runnable end to end | its own vitest suite runs `transforming()` directly against a fixture and needs no package — measured. If the suite cannot run, U7 stops and the finding is reported rather than worked around |
| **The roster's removal breaks how Doug's library is written** — `<Chapter>Entries</Chapter>` stops compiling | it is in [Open](#open) and unruled. U7 stops at that line until he says |
| **`id` on `$Writing` is a member on the base**, which he has struck before | it is a reading and not state, it is the third of a set that has two, and it is on the consent list |
| **`$()` at construction may not have the overload** the style book's pattern assumes | measured before U5 is written, not after. If `$()` of an already-lifted component is not a thing, the pattern is the import alias and it is asked |
| **A Mention whose content the compiler did not write** — a person typing plain words — has no reference to read | its `specifies` says so, which is where the rule belongs |
| **Reading a file back is not the same as judging it** | the report says what each file reads like as prose, per class, and names what would be learned from it tomorrow — the cleanup skill's test, not a count of passing checks |

## <a id="open"></a>Open, and Doug's to rule

| | open |
|---|---|
| **1** | **The url side's export name.** E22 gives `Reference` exported as `Means`. `Mentioned` is dropped; is `Means` too, leaving a plain `Reference`? — ***ruled 2026-09-24:*** *`Reference` stays plain and `Means` is the Word on the url side: "mention and means are memorable and meaningful!"* |
| **2** | **`html.copy` or `html.text`.** His word is copy; v1's member is `text` |
| **3** | **Plain words inside an element.** With the roster gone, `<Chapter>Entries</Chapter>` stops compiling to an address and a table writes `<Chapter>[[ Entries ]]</Chapter>`. This changes how his library is written — ***built in C12 as D4 has it:*** *plain words stay plain; his library is written the old way and has not been synced* |
| **4** | **`[words]()` for the page it stands on** — keep the shape with an empty identifier and let the receiver decide not to link? — ***built in C12, and ruled in C13:*** *"is there no self url like #? If that url is empty, then that" — the compiler writes `#`, and a Reference to it wears `pa-self-reference` beside `pa-reference`: "I like self-referential anchors"* |
| **5** | **`Ref` as a piece of writing.** Chapter 09 predicts *"a Word with a reference annotation"*; with the compiler no longer generating one, is it still wanted, and does it collide with `binder`'s former name — ***answered by C11:*** *the Word with a reference annotation is `Means`* |
| **6** | **Whether a writing mirrors Mention on the url side**, or a Reference simply annotates whatever writing means something — ***ruled 2026-09-24:*** *it does, as `Means`, and a Reference still annotates any writing written with one* |

## Self-check

**Thin, and named rather than hidden.** U6 is the least specified unit, because the url side's naming is open and its behaviour is one class plus one erase — it is buildable and its export name is not. U7's scenario for the roster's removal is a promise about a *loss*, which is unusual and deliberate.

**Every requirement has a home.** R1→U4, U6 · R2→nothing, by design · R3→U10 and the `Section.tsx` wording · R4→U5 · R5→U5 · R6→U3 · R7→U4 · R8→U7 · R9→U7 · R10→D5, U8 · R11→U1, U2 · R12→D6, U5 · R13→U6.

**No unit is design-owed.** Every one names a mechanism that runs and when. The three things that are not designed are in [Open](#open) and none of them blocks a unit from starting; U7 stops at one line for open 3.

**Nothing is inherited as owed.** Sprint 80 left six open items and none is a kind Doug ruled and a sprint failed to build — five are questions he deferred, and the sixth, **the browser, is owed by the standing rule that nothing ships unseen.** It is this sprint's visible end rather than a unit of its own: a reference that navigates in a real browser is the one thing a hand-authored page cannot fake, because it cannot fake an id arriving on a writing's container from an annotation a Mention made out of compiled notation.

## <a id="redesign"></a>The definition pass, redesigned — the design session of 2026-09-24

***Design, not yet requirements.*** *The rulings below are Doug's and settled; the use stories are a draft he has not approved; nothing here is `implementation-ready` except the core already built.*

**How it began.** A Reference could not compose with a Format while both wrote one single-valued container; [containers](../writing/05-the-writing-class.md) made the drawing layered, and then the nesting followed the history of the passes rather than the list — an annotation that left and came back re-registered on top. Doug: *"We should be rebuilding, in order. Define on annotations should erase all and then run them again. It should be a FULL reset each time. And it should do whatever it needs to do to undo the previous ones correctly, possibly factoring in what happens with $is… And all of this should be decided THOUGHTFULLY, well documented, with clear clear promises."*

**The reset as first built, and what it measured.** Built and never committed: a record of the annotations that acted, erased last first, then every expressed annotation defining front first, with `leave` gone so the pass was the one place erase ran. Six promises; five failed on the old pass exactly as predicted — a dropped or replaced annotation lingered, leaving and returning reshuffled the layers, nothing was erased last first. **But eighteen drawn promises looped, "Too many re-renders."** Chemistry runs each annotation's `defines` and `erase` as a reagent in a scope of its own once the annotation is mounted; a scope treats any value it read that has since changed as news — a set by copy, the id by value, a plain class by reference — and a reset takes a class or the id away and gives it back in every pass, so each half was news. Probed without touching `src` or chemistry: chemistry's own `inert` on `classes` and `id` settled it at three draws and 139 of 140, the one red a direct removal from outside no longer redrawing, which had been an accident of erase running at removal. The attempt is kept as a patch in the session's scratchpad and superseded by what follows; the finding stands in [Collection](../utilities/01-collection.md#how-it-is-extended), under what it does not do yet.

**Doug's design, in his words, which he called the key one.** *"The reset should happen on define. Any new act of definition should reset the old state… 1. Annotations collection has define called 2. Annotations tracks the previous state of the collection, and enforcement is moved to the collection not on the annotation 3. When define is called, the previous state gets reset, then the new changes are applied, then the collection operates, with enforcement happening as an interaction between an annotation and the collection 4. The new state is cached as it is after any define. Imagine a very very clean process like this to give a very predictable way. And then we can have classes etc… be interaction points… the contents collection, the classes collection, the container collection — they all need citation. The annotation that made the change and what it was. That way, each one can have the annotations effect removed from it."*

**His rulings on it, the same hour.**

| on | his words |
|---|---|
| **the batch** | *"we shouldn't allow annotations to be changed without erasing the previous draft. So after a define, we batch changes, and when define is called, we erase then. On define, the ones not expressed are skipped"* |
| **expression** | *"an annotation needs to have enough access to control which annotations are expressed. Annotations control expression. But they can do so by interacting with the Annotations collection"* |
| **annotations adding annotations** | *"Even the annotations collection should be a regular collection because maybe one annotation adds a bunch of others and will need to have them removed. But we need to be careful about that because removals would have to be batched, creating more levels of idempotency"* |
| **`erase`** | *"Yes because the annotation is responsible for using the collection. The collection provides the ability not the power. The annotation can do other things"* |
| **the id** | *"Yes front citation, and we should, for these collections, possibly define a Compillation<T> with these single-value semantics"* — and then, correcting the first draft: *"I meant the last one set. We want competition. We are going to give ordering to annotations, and with that, last set is winning"* |
| **where the collections live** | *"keep Collection and Compillation in utilities, have the cited thing be more general than annotations (any instance can serve as the author), so that it's more loosely coupled"*; *"annotations should still be a cited collection though it might need to override core functionality to make that work"* |
| **how** | *"We need to design this system very carefully, from a specification with use stories — $is can add, other annotations can add, etc… And very carefully with special collections with cited modification, so that we can build a pluggable system"* |

**Built: the modification core, C1, `e1e3836`.** [Collection and Compilation](../utilities/01-collection.md), on his design — *"collection.change(type,author,...values)… add, remove, replace, revert… Then we build a Compilation… compilation.set(author,value), compilation.revert(author)"* — with finding by type added on *"adapt my design to the type-based operations too"* and *"I didn't add anything for finding. This was the modification core of Collection<T>"*, and today's class renamed `ChemicalCollection`, a placeholder, on his choice.

**The use stories, drafted and not yet approved.** *The writer:* an annotation written into a writing draws that trait; of two that compete, the later written wins whatever was defined before. *The class author:* defaults stood in `$Define` are overridden by a written annotation of the family; the writing's own entries — its element, its classes — are never taken by an annotation's undo. *The outside:* `$is` stands in front of everything, a new `$is` redraws the writing as what it now is, and `[]` restores it exactly. *The annotation author:* its entries go exactly when it stops acting, whatever others added; it says which others are expressed by asking the Annotations collection, holding only while it is expressed; the annotations it adds are cited to it and go with it; its `erase` takes back what it cited and undoes what it did elsewhere; of two giving one value the front's is drawn and the next's when it goes; layers nest by the list around the writing's own element. *The stylesheet and the reader:* classes and id are found on the writing's own element whatever layers stand around it; a parenthetical writing is hidden whole, element and layers; the same annotations draw the same writing whatever history led there; a change costs one paint and a definition that changes nothing wakes nothing; a change between draws waits for the next definition, which erases the previous draft and then applies it. *The binder:* `specify` asks every annotation the last definition left expressed. *Two pull on purpose* — identity on the writing's own element and hiding on the outermost ask for the order-invariance feature he named, a layer that stands outside everything whatever the order — *and the one about annotations adding annotations is where his levels of idempotency live.*

**Annotations on the core — his spec, as given the same evening.** *"Annotations, in writing, should be a type of Collection, but we are going to override its methods to accomplish this. 1. Annotations are run left to right 2. Define is a method that erases all annotation that were run on last define in reverse order, then applies changes, then runs defines on all annotations — Each annotation must have the ability to say which ones are expressed — If one has already been expressed, it shouldn't be able to access it — The dynamism is important 3. The final state is that the new collection of annotations is established and change tracking goes from there. We have to keep track of a few collections in the internals of Annotations to make this work — which were run, so they can be erased next defines, what changes are new so they can be applied, running defines with everything expressible, and allowing annotations to control their expression."* His answers to the three places it had to be exact:

| on | his words |
|---|---|
| **annotations adding annotations** | *"Let's forget that use case. The annotations would be able to decorate each other pretty easily right? If I want to be 18 annotations, I can just wrap and run them in my own little layer"* |
| **expression** | *"define can access the annotations collection. So during the define run, it needs to be in a valid state. I think it should have an express(annotation) and expressed(annotation): boolean, so one can know and react to them, and those all start as true, and tracking is kept in the collection"* |
| **what chemistry compares** | *"No! That is not extensible. We are careful to track what was run so it can be erased, but it is entirely up to the annotation to be idempotent. The Writing can choose to expose things that make modification easier, but the system isn't extensible if it has to be synced with define"* |
| **the edits of `$is`** | *"Annotations also have to handle the idea of the edits, which are from $is, and always get applied in front, and they can change… they do get integrated in before define… but they need to be registered to… the piece of writing and can be undone"*; *"You will need to think hard about undoing. But hopefully .revert(this) will be able to handle things for the edits"* |

**Order, and the one question of expression, ruled next.**

| on | his words | what it settles |
|---|---|---|
| **order** | *"Narrative expressed before Parenthetical should have stops its expression if it needs to. First is most powerful. So annotations need to be run last to first. But add should just handle that. The annotations added last should be the first on the list. It's like a stack"* | `add` puts an annotation at the front, so the one added last is first on the list and runs first; the first can stop the expression of anything after it, and where it does not, the last value set wins — chapter 10's *"front has the power to turn off competitors"*. An annotation that runs after another has nothing to reach in it |
| **`expressed`** | *"Why do they collide?? Literally the exact functionality"* | one member: it answers the expressed annotation or nothing, asked of an annotation, which names itself, or of a class, which names its instances |
| **`erase`** | *"erase is on an annotation. It shouldn't be on the collection. Erasing is a part of define() on the collection. They are separate on the annotation"* | the annotation keeps `erase` and `defines` as two powers; the collection's `define()` does the erasing by calling each |

**Undoing, thought through.** Two halves, from two records. *What an annotation did* is undone from the record of what ran, never from the membership, since the membership may have lost it since — a new `$is`, a removal — and it still has to be erased; last first, so each erase finds the writing as its own defines left it, and on a cited surface `revert(this)` is exact in any order. *What the membership was* is undone by citation: the edits are cited to the collection, so each definition's `revert(this)` takes back exactly them before the current ones stand in front again, whatever was prepended since; any other author's changes are taken back by that author's revert, which waits for a definition like any change.

**What the measurement still asks, and is open.** *An annotation can be perfectly idempotent and still wake chemistry*, because its erase and its defines are two calls, each judged in its own scope: its class goes in one and comes back in the other, and each is news. Doug has ruled that nothing is synced with a definition and that the Writing chooses what it exposes, so the answer is the Writing's — hold its classes, layers and id where chemistry does not compare them, which the probe measured at three draws — or chemistry's, whose setter already treats a write during a chemical's own draw as construction while its scope does not treat an in-place change the same way. *Two requirements follow from the rest:* the genome must report the membership the next definition will establish, pending changes included, or a change made in a method of the writing never wakes it and never applies; and today's `annotations.expressed($Level)`, the expressed one of a class, collides with his `expressed(annotation)`.

## Where things stand

**Built and committed locally, never pushed:** B1 `d381398` the binder and the copy utility · B2 `a6eef09` Mention, Referent and Reference, every construction through `$` · B2b `b989a09` `$Define` after the contents · B2c `4101e78` one specification per writing · B3a `4d0d7aa` containers · B3b `49ca2f9` a Reference's anchor as a layer · C1 `e1e3836` the modification core · C2 `f0c2eda` both represented by their phenotype · C3 `d850ceb` a compilation answers the last value set · C4 `64da122` Annotations on the core, on chemistry's `ab97399` · C5 `76f9b1b` the writing's classes and layers Collections and its id a Compilation, every annotation's erase `revert(this)`, and three hacks gone with them — the `Containers` class, Referent's guards on its own id, Format's remove-when-no-style. · C6 `862a896` the contents on the core as `Contents`, and the placeholder gone with E65's `ensure` and its by-type `replace` and `remove`, on Doug's word. · C7 `338bf35` a define is one generation, `express` refusing nothing and the collection recording what it called `defines` on, `at` on the core · C8 `5653b28` `after(this)`, and every family in the writing folder reaching only what stands after it. · C9 `ffe156b` `append` and `prepend` on the core with `add` their synonym, several values to one author, and every `$Define` one stacked `add` in TSX — made a coding convention, [`$Define` is a declaration](../the-coding-style/06-the-shape-of-tsx.md#define-is-a-declaration). · C10 `eb0f61b` a writing carries every format written on it, the front innermost · C11 `338dce6` `Means`, the Mention's twin on the url side, and the render counts for both · C12 `86705f8` the compiler writes `[text](identifier)` for every form and names no component, `slug` its own, cloned into v1's compiler so the two are one · C13 `e1d5679` a self-reference is an anchor: the compiler writes `[words](#)` for the page it stands on, and a Reference to a self url wears `pa-self-reference` beside `pa-reference` · C14 `500a368` a writing draws inner to outer, its own element the first container and wearing its classes and id, so a format targets them wherever it stands · C15 `877b73b` every layer around a writing wears `pd-container`, his name, and a Parenthetical hides the layers around what it hides. **Floor at C15:** the package typecheck 0 and **172 of 172 across eleven files**, every render count held; each compiler typecheck 0, **unit 84 of 84**, **regression 6 of 6**.

**In progress:** nothing in `src` — C15 is the last commit, and the design session's rulings stand in [the redesign](#redesign). *How Annotations reached the core is kept as the record:* **C4 was committed after chemistry landed, as Doug said** — *"build, commit after chemistry"* — having stood at 142 of 159 while the seventeen drawn promises looped, each "Too many re-renders"; the scope defect went to chemistry's session on Doug's word, and chemistry fixed it as `ab97399` on his fuller rule, *"It's dirtiness starts after render"*: a read of a drawing chemical is not recorded and a drawing chemical cannot be woken. *C4's `side` and its guard on `express` were superseded in C7, C8 and C9.*

**Next, open and Doug's to rule:** Ruled and not built, as he asked: a Reference takes only a url — *"The Reference is an annotation. It should only take a url. It annotates something with that"* — so a `<Reference>[[ X ]]</Reference>` is not how a section is made a link. **His library** stays unsynced, on his word. **The use stories** wait for his approval, and **the browser drive** this sprint owes.
