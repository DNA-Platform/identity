# Sprint 81: Reference and Referent

- **author:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **coauthor:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md), [Adam](../../../../.claude/library/..teamsmanship/..team/adam/adam-between-the-wires/.cover.md), [Queenie](../../../../.claude/library/..teamsmanship/..team/queenie/queenie-and-the-specification/.cover.md)
- **status:** closed 2026-09-25
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

***Compacted to a register at the close, 2026-09-25.*** *The units ran in four batches, each one local commit that could be reverted whole, every generated file read back — Doug: "you need to be able to revert any particular batch if it doesn't good." What ran, and where it landed:*

| | unit | landed |
|---|---|---|
| **U1** | the copy reading, `html.copy` | B1 `d381398` |
| **U2** | `binder.reference`, splitting `[text](identifier)` | B1 `d381398` |
| **U3** | `id` on `$Writing`, drawn on its element | B2 `a6eef09`; a Compilation a Referent sets since C5 `76f9b1b`, drawn as its `value` since C19 `b6b29ce` |
| **U4** | `$Referent` | B2 `a6eef09` |
| **U5** | `$Mention`, a Word standing a Referent | B2 `a6eef09`, reading its contents in `$Define` since B2b `b989a09` |
| **U6** | `$Reference` | B2 `a6eef09`; its anchor a layer since B3b `49ca2f9` |
| **U7** | the compiler writes `[text](identifier)` | C12 `86705f8`, cloned into v1's compiler |
| **U8** | `slug` into the binder | C12 `86705f8` |
| **U9** | the promises and the counts | every batch; 172 of 172 at the close |
| **U10** | the six stale claims in the Writing docs | three stood until the close and were made true there, with three more found beside them — [the cleanup](#cleanup) |

**Beyond the plan**, on rulings given as the work ran: one specification per writing, B2c `4101e78`; containers, B3a `4d0d7aa`; the modification core and the annotations on it, C1 `e1e3836` to C9 `ffe156b`, from [the redesign](#redesign); multiple formats, C10 `eb0f61b`; Means, C11 `338dce6`; a self-reference an anchor, C13 `e1d5679`; the drawing inner to outer, C14 `500a368`; `pd-container`, C15 `877b73b`; the audit's clear fixes, C16 `7b9346e`; Annotations reshaped, C17 `81cb8b1`; and the cleanup, C18 `d402a1e` to C20 `747e0e7`.

*The consent list and the table of batches are spent: every name on the list went to Doug before it was written, and every batch landed.*

## Test scenarios

*Compacted at the close: the scenarios became the promises — `.tests/reference.test.tsx`, `.tests/renders.test.tsx` and the compiler's `reference/transform.test.ts` — and a scenario that survived is a promise, read where it runs.*

## Risks

*Compacted at the close. Two fired. The compiler never compiled against the redraft: its suite ran the transform directly, as the mitigation had it, and its regression bound pages v1 drew — [Solutions 05, the fourth appearance](../solutions/05-the-suite-that-passed-against-a-stale-build.md#the-fourth-appearance). And the roster's removal changed how Doug's library is written, so his library was left unsynced on his word. The rest did not fire.*

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

*It passed before the work started, and is spent.*

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

## <a id="cleanup"></a>The cleanup and the close, 2026-09-25

**The rulings the sprint's code stands on**, as the handoff of 2026-09-25 recorded them:

| | his words |
|---|---|
| the compiler | *"The compiler ALWAYS should give: `[text](identifier)`. It doesn't know about specific components."* · *"Fix the compiler in ..public. We need this to be done."* · *"clone it and put it in v1 too so that it runs there and is in both places."* |
| a self-reference | *"is there no self url like #? If that url is empty, then that… have a pa-reference and a pa-self-reference (both)… I like self-referential anchors."* |
| the url side | *"Twin of mention for the Mention… mention and means are memorable and meaningful!"* · *"The Reference is an annotation. It should only take a url. It annotates something with that."* |
| formats | *"Allow multiple formats! Promise it, in fact."* · *"document that formats should be written to be order invariant with other formats."* |
| the drawing | *"The parent's container should be first… we should render inner to outer and that should be documented."* · *"Yes, put a framework class: pd-container."* |
| the annotations | *"$is represents some form of edit… keep encapsulated things protected."* · *"Keep the snapshot."* · of the five families' loop: *"Keep implementing and if we keep seeing it, we'll consider… This is single subclass semantics, I think?"* |
| his library | *"Leave it unsynced."* |
| standing | commit locally as often as wanted and **never push until he says**; every change in `src` has his yes first |

**A catch-up read thirty documents toward the handoff and found three things it had not said:** *that the Genesis's own order now points at the books — Sprint 80 had written it down, "then ordering and parts at E26 and E27, which are built; and the books only at E29"; that the blockers named a Document the Genesis does not have, E33's "Chapters are the first document"; and that U10 had never run.* **Doug ruled the close:** *"Close it, fix docs."*

**The audit's raised warts, judged on his rule:** *"Cleanup now, but be pragmatic. Are they warts? I am particular. I don't care about the repeated lines of code, but I want everything to look uniform and maximally simple. Use Writing and Annotations classes as a guide. We don't always abstract just because the same thing is invented, especially if it is already relatively simple."*

| raised | judged | his words |
|---|---|---|
| the change kinds `'left'` and `'right'`, and `Side` | a wart, what remained of the `side` his C9 ruling replaced — **C18 `d402a1e`**, the kinds named for their operations | chose it: *"Change kinds"* |
| Compilation's citations and its iterator | a wart — **C19 `b6b29ce`**: the citations gone, a compiled `value`, not iterable, the view drawing `id.value` | *"compilation is supposed to have a value which is the last element of the collection and it fails to. The id was supposed to be a compilation. Nothing is compiled in this one"* · *"type Citation<T> = { author: Author; value: T }; - why is this necessary? Remove that"* · *"Compilation shouldn't be iterable… OR the set and revert. No need to know it has a collection in it… It has a compiled value. It changes based on what is set and reverted"* |
| five readings written into fields | a wart — **C20 `747e0e7`**: Referent's and Reference's `identifier`, Level's `level`, Mention's and Means' `text` getters over the contents | chose it: *"Readings as getters"* |
| `html.copy(contents)`, the receiver as a parameter | proposed as a `copy` on Contents, and **refused** | *"Don't delete Html and stop trying to fold things in to coupled abstractions. Isn't Contents just a collection of chemicals? Why do we need to specialize it"* — answered from the code: Contents makes each chemical from a given and parents it, so a class adds contents in TSX as it adds annotations, and nothing in `src` does yet; *"Keep it for now"* |
| four copies of the code that makes chemicals from givens | not a wart | his rule: repeated lines are not one |
| Format's `style` taking the theme's wrapper | not a wart: keeping both would add a field | — |
| `binder.reference` beside the Reference annotation | not a wart: one word for one thing, the form the compiler writes | — |
| Parenthetical's chain of four layers | not a wart: `:has()` cannot nest, and the limit is written in [Format and Theme](../writing/11-format-and-theme.md) | — |
| the names of C17 | his to rule, still flagged | — |

**The docs made true:** *the three claims U10 had listed that still stood — no annotation knowing another as its twin, the levels numbered one to six, a `@reactive()` backing — and three more beside them in Composition's chapter, a pair with no `defines`, an `add` with no author, a `$Define` that sees no contents; with what C18 to C20 changed, in the Writing, Utilities and Genesis docs.* **Carried as a question, not cleanup:** *a theming Format with no style still draws a span of its own.*

**And the next unit, in his words:** *"There is no newer stream afaik so if you see the topic, it was in the old conversation anyways. We did references and mentions. Chapter and Book can be next and we need to figure out how to write them. I think chapters will get their own function components. Books will be compiled to import the chapter components call the functions and send them into the book as children. We will decide if the book should be a function or go straight into the page that it represents."*

## Where things stand

**Next: `/ce-brainstorm` for Sprint 82 — Chapter and Book, E29 to E33 of the Genesis.** *Doug set the subject: "Chapter and Book can be next and we need to figure out how to write them." The brainstorm opens on his direction, which is a direction and not yet a design: "I think chapters will get their own function components. Books will be compiled to import the chapter components call the functions and send them into the book as children. We will decide if the book should be a function or go straight into the page that it represents."*

**This sprint is closed**, 2026-09-25, on its promises: *Reference and Referent in the redraft, the compiler writing what they read, the annotation system under them sound, and a cleanup to his rule. Its browser drive — a real browser following a Means and landing on a Mention — moves to Sprint 82's visible end, since a page the redraft draws is what Chapter and Book begin.*

**Rulings to carry into the brainstorm, verbatim** — the sprint's own are in [the cleanup](#cleanup) and [the redesign](#redesign), and in the Writing docs:
- **The subject:** *"Chapter and Book can be next and we need to figure out how to write them."*
- **The levels:** Letter 1 to Book 7, *"Letter is 1. Number up from there letter – book"* — so Chapter is 6 and Book 7.
- **The title:** *"Title extends Heading."* And *"Titles should have ids as part of both the book and chapter system. They are mentioned by default in the classes."*
- **The summary:** *"Why can't the summary be a summary anywhere in the children of the chapter. If there is one, we append a parenthetical one to the end."* And *"The parenthetical appended summary holds something like the first paragraph of the chapter. It's a proxy."*
- **The cover:** *"The Cover annotation can only be applied to a chapter. The book can find its cover with it. The book can lift the annotations it wants out of its cover and do whatever with them."* And *"the cover is the first, but that one also must carry the $Cover annotation which is what `<Type>Cover</Type>` will resolve to."*
- **The table of contents**, a reading and not his ruling: authored, not generated — Claude Desktop's reading of his question, *"how are you validating all chapters in the TOC if some of them don't have titles?"*
- **Standing:** commit locally as often as wanted and **never push until he says**; every change in `src` has his yes first.

**State.**
- ***Complete, committed locally, never pushed:*** every unit and batch in [the register](#plan), B1 `d381398` to C20 `747e0e7`.
- ***In progress:*** nothing.
- ***Carried to Sprint 82:*** the browser drive, as its visible end; the use stories of [the redesign](#redesign), drafted and never approved, his to approve or strike; the C17 names, flagged; the span a theming Format with no style draws, a question.
- ***Carried further:*** the rest of the compiler, whose structure pass names chapters by `<Title>` and reads a table's rows as `chapter`, `book` and `For` tags, all v1's; and the swap — *"We are retiring .public and swapping it with this one soon."*

**Blockers, each with what it waits on.** *The browser drive* waits on a page the redraft draws, which Chapter and Book begin. *The compiler's regression suite* tests the redraft's drawing only once its test library is written in the redraft's elements — Chapter, Title, Book, and the cover, synopsis and table of contents on chapters, **and no Document, which the Genesis does not have** — and on the swap. *His library* waits on his word.

**Verification at the close, 2026-09-25:** the package typecheck 0, the quick build 0 and read for each change, **172 of 172** across eleven files with every render count held, after each of C18, C19 and C20. *The compilers are untouched since C12: at C17 each typechecked 0, unit 84 of 84, regression 6 of 6, identical file for file — not re-run at the close.*

**Wrong turns already taken, so they are not taken again.**
- *A public read of the collection's citations was proposed so the view could find the writing's own layer* — *"terrible and scares me"*; the answer was an order, the writing's own container first and the drawing inner to outer.
- *A background job's "exit code 0" was reported as a green suite* — it was the trailing `echo`'s, and the log said 2 red; a job logs the tool's own exit code now.
- *The compiler's regression green was taken as evidence about the redraft* — v1 draws every page it binds; [Solutions 05, the fourth appearance](../solutions/05-the-suite-that-passed-against-a-stale-build.md#the-fourth-appearance).
- *A full reset per define was built before the collection could hold it* and looped when drawn; the scope defect was chemistry's, fixed there as `ab97399`, and the reset was rebuilt on cited collections.
- *A handoff carried its own doc cleanup as a unit and said nothing when it never ran* — three stale claims stood past the handoff; a unit that is the sprint's own debt stays in the state until it is done.
- *A member was proposed on Contents to take a utility's reading* — *"stop trying to fold things in to coupled abstractions."* A utility whose first parameter is the thing it reads is a finding to raise, never a licence to move a member.

**Read these first, for the brainstorm** — the sources the designing reads, five, a starting point rather than a boundary:
1. [The Event Stream](../the-genesis-of-writing/02-the-event-stream.md), E29 to E33, and [the conversation](../the-genesis-of-writing/01-the-conversation.md) where *"a chapter is born"* and Book arrives as the closure condition — what Chapter and Book are.
2. [What We Need to Understand Better](../the-genesis-of-writing/05-what-we-need-to-understand-better.md) and [Answering Claude Desktop, as corrected](../the-genesis-of-writing/06-answering-claude-desktop-from-the-source.md#corrected-by-claude-desktops-reply-2026-09-21) — his rulings on the title, the summary, the cover and the canonical, which correct the Genesis's own documents.
3. [The Implementation Notes](../the-genesis-of-writing/04-the-implementation-notes.md) on Chapter, Book, Part, Cover, Synopsis and Table of Contents, with [Claude Desktop's reply](../the-genesis-of-writing/07-what-to-tell-claude-desktop.md) — Cover, Synopsis and Table of Contents as Types on chapters.
4. [Section and Heading](../writing/08-section-and-heading.md) — the typed canonical, found by class and going both ways, which a Chapter's Title and a Book's cover repeat.
5. [The Binder, As Built § reading](../the-catalogue-and-the-specification/07-the-binder.md#reading) and [§ the catalogue](../the-catalogue-and-the-specification/07-the-binder.md#catalogue) — how the compiler finds a book by its files, names a chapter by its title, and addresses both.

*v1's `Chapter` and `Book`, the compiler's test library and his library log are evidence of how books are written today, never the design — the Genesis is canon.*

**Nothing to look at in a browser yet** — that is Sprint 82's to change. The promises: `npm run build:quick` and then `npx vitest run` in `library/..public/package`.
