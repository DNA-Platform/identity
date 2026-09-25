# The Soundness of a Knowledge Graph

- **author:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **coauthor:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md), [Libby](../../../../.claude/library/..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)
- ***The chapter name is a PROXY; Doug's to rename.***

---

***THE DESIGN PURPOSE OF `.public`, stated rather than derived.*** Every other chapter in this book works out what a piece of the model IS. **This one says what the model is FOR**, and it is the sentence the rest of the branch should be read against.

> ***Doug, 2026-09-17:*** **"Library semantics establish the soundness of a knowledge graph — a knowledge graph is just an abstraction of a library and I am choosing canonical semantics which are suggestive."**

## <a id="the-claim"></a>The claim, unpacked

***A knowledge graph is an abstraction of a library.*** **Nodes and edges are what is left of books and references when the words are taken away** — and taking the words away is what makes a graph hard to reason about, because nothing about a node tells you what it is for a node to be *wrong*.

***So the semantics are chosen rather than invented, and chosen because they are SUGGESTIVE.*** **A book, a chapter, a catalogue, a reference, an author, a subject — every one of these carries meaning a reader already has**, so the formal structure is legible without a manual and a violation is recognisable without one. *A dangling edge is an abstraction. A reference to a book that is not on any shelf is a thing anyone can see is wrong.*

**Canonical, in this library's sense, is the point rather than the flourish:** *the words are not a metaphor laid over a graph — they are the graph's* ***semantics***, *and the structure they impose is what the soundness is defined in terms of.*

## <a id="soundness"></a>What soundness means here, and why a library already has it

***A knowledge graph is sound when every reference in it is correct.*** **A library solves this and has solved it for a very long time, with one mechanism: the catalogue.**

> ***Doug:*** **"With the catalogue, you can have dictionary lookup speed and you can have names validated at runtime. If the catalogue controls the link generation, all links are guaranteed to be right."** *And:* **"The catalogue refuses by non-membership alone."**

***The argument, and it holds.*** **Without a catalogue there is no lateral reference.** *A table of contents works because a book holds its own chapters — that data is local. A reference from one book to another needs what is NOT local: another book's existence and its addressable parts. With no shared index every book must reach every other book to check a name, which is a cycle, an N² load, and the coupling that makes incremental work impossible.* ***The catalogue is not an optimisation of lateral reference. It is the thing that makes lateral reference possible at all.***

**And once it exists, validation collapses into membership.** *A reference is not checked after it is written; it is* ***generated from the catalogue***, *so a reference that would be wrong cannot be written. The error surface is one question — is this name a member — which is decidable by lookup rather than by search, and which is why it stays cheap at any size.*

### <a id="obligations"></a>The three obligations the theorem carries

***It is sound, and it costs three things. Each is where it can be broken.***

| | |
|---|---|
| **Staleness** | *Membership is correct as of the build.* **So whatever produces the cards must be cheap enough to re-run on every change** — which is what forces books to be loaded with loose coupling and cards to be small. |
| **One fact, two uses** | *A name can be a member and the link still land nowhere, if what the catalogue holds and what the page emits are computed separately.* **They must be one computation** — the emitted anchor and the generated link derive from the same identity, so they cannot disagree. |
| **Attributable refusal** | *"Not in the catalogue" must name the reference, where it was written, and what nearly matched.* **Refusal by non-membership is correct and useless without this.** |

## <a id="topology"></a>The property that pays for it: a reference survives a change of layout

> ***Doug:*** **"What if we want chapters to be through the router rather than on a page, or maybe we want chapters to each be their whole page? If the catalogue system handles this, we should be able to easily change this without much fuss as long as the catalogue is used to fetch the reference."**

***This is a larger claim than referential integrity and it is the one that earns the system.*** **A reference names a THING and never a PLACE.** *The catalogue holds identity — which book, which chapter, which key — and the address is* ***derived***. *Change the topology and one rule changes; not one address in one book.*

**It holds only under that discipline, and this library breaks it today.** *A typed fragment — `[Librarian's Log](#librarians-log-stardate-2026-09-15)` — has bound itself to the present layout and dies the moment that chapter becomes a page. The mentions survive; the hand-written refs are the liability, and they are in every table we have.*

***And it takes the last exception with it.*** **Even a table of contents must resolve through the catalogue.** *Its membership is local — a book knows its chapters — but its* ***addresses are not***, *because an address depends on a topology that is a library-level fact.* **Enumeration is local; resolution never is.** *Which means a table can be* ***inferred*** *rather than kept, and the library's most-filed defect — a hand-maintained list drifting from what it lists — stops being reachable.*

## <a id="three-checkers"></a>Why this needs a compiler, and why neither of the two obvious answers will do

***The specification is not a property of `.public`. It is a property of THE LIBRARY*** — and that is the whole reason there is a compile.

> ***Doug:*** **"We are specifying at a level static analysis fails at. This app exists across JavaScript runtimes. No runtime type system can hold it."**

**Both halves are load-bearing and both hold.**

***Static analysis cannot reach the values.*** *A title is inside `print()`. A theme value is behind a getter — 126 of them in one chain. A chapter's document does not exist until it is printed.* **A parser sees the shape and not the library.**

***No runtime holds the whole.*** *The browser only ever loads one book. The prerender loads one book per process. The binder's own process holds only what it imported, which is the coupling problem restated.* **No runtime ever has all the pieces in front of it at once — and the property is precisely about how the pieces relate.** *It is not that a runtime type system is too weak; it is in the wrong place.*

***So the compile is the only moment the library exists as one object***, and the specification lives in a third position:

| | checks |
|---|---|
| **TypeScript** | the code that BUILDS the library |
| **a runtime type system** | one process's objects |
| ***the library specification*** | ***the library*** |

**That is what Doug means by *"something static-like for web development that goes beyond TypeScript"*** — *not an analogy: the same job description over a different domain of discourse.*

## <a id="division"></a>The division of labour, which is the whole architecture

> ***Doug:*** **"the catalogue system makes referential life easy and the specification system allows things to be locally validated so that it gets hit when necessary."**

***GLOBAL REFERENCE GOES TO THE CATALOGUE. LOCAL WELL-FORMEDNESS GOES TO THE SPECIFICATION.*** **And the split is not tidiness — it is what makes each one affordable.**

**The catalogue is global and therefore must stay a membership test.** *The moment it grows a check that needs a writing's contents it stops being a lookup and becomes a second walk.* ***Its power is that it refuses by non-membership alone; everything else belongs to the specification.***

**The specification is local and therefore incremental by construction.** *A writing checks what it holds; a book checks itself. Nothing in it needs another book, so nothing in it needs the library to be loaded.* **And because a local check needs only the writing in front of it, it is** ***portable*** — *the same `@specify` can fire in the binder, in the prerender, and in a development browser at the moment a writing is constructed, so a fault can be shown where it was written rather than reported in a log.*

***This is also what a specification stops being asked to do.*** **Everything referential leaves it for the catalogue**, *so it does not move so much as* ***shrink*** *— and what remains is local, therefore incremental, therefore affordable at four hundred books when a full walk would not be.*

## <a id="pedantry"></a>Why the object model is held to the standard it is held to

***This is the part of the thesis that had been a temperament and is now a requirement.*** **Doug, asking whether the statement above accounts for it:** *"why I am so pedantic about the public object model of public itself, because it represents a validated knowledge graph and needs to be clear."* **It does, and the derivation is short.**

***The catalogue refuses by non-membership alone. Membership is a test on a NAME. So the soundness of the whole system is exactly the soundness of the vocabulary*** — *and a vocabulary is sound when one thing has one name and one name means one thing.* **Where two words name one kind, a thing gets two cards, and a reference can be a member of the catalogue and still be wrong** — *which is the one failure the design was built to make unreachable.* **Imprecision in the object model is not untidiness; it is the only way the membership test can lie.**

***And the model is the graph's typing.*** **A knowledge graph cannot say what it is for a node to be wrong, because a node has no kind** — *that is what the words were brought in to supply.* **`$Book`, `$Chapter`, `$Subject`, `$Author`, `$Catalogue` ARE the node kinds**, *and every rule about what may refer to what is stated in terms of them. A blurred class is a blurred rule, and a rule nobody can state is a rule nothing can check.*

***The third reason is the one specific to `.public`, and it is why the standard here is higher than anywhere else in the repository.*** **`.public` is both the thing the graph is made of and the thing that describes it** — *self-cataloguing, by [the summit argument](07-the-subjective-subject-and-the-library.md).* **A loose name does not stay local: it becomes a node kind in every library built on the package**, *and it becomes a word in the catalogue's own vocabulary, where it is then load-bearing for the refusals.* **Everywhere else a bad name is read by a person and corrected. Here it is read by the validator.**

### <a id="the-hole"></a>The measured instance, so this is not an attitude

***The library already contains the exact hole the thesis forbids, in five places, and it was put there on purpose.***

```ts
protected override address(): string { return this.standing() ?? super.address(); }
```

**`standing()` is the catalogue lookup — `$Catalogue.shelved`, the name-to-address table the binder writes.** *It stands in `$Book`, `$Subject`, `$Author`, `$Canonical` and `$Participant`, and in every one of them the `??` says: when the name is not a member, do not refuse — guess a fragment on the page we happen to be on.*

**It was a deliberate affordance and its reasoning is written beside it:** *"a name for a book that is not here yet."* ***The thesis reclassifies it rather than discovering it.*** **Under a catalogue that refuses by non-membership alone, that `??` is precisely where a wrong reference is manufactured** — *a name nobody published becomes a link to `#something` on the current page, which is not a broken link a reader can report but a silent one that lands somewhere plausible.* **The forward reference is a real need; answering it with a guess is what has to stop.**

***Two further gaps in the same table, named here because the architecture turns on them:*** **`shelved` maps a name to an ADDRESS STRING, which is the topology-binding [the section above](#topology) says must not exist** — *the day chapters become pages, every value in it is wrong.* **And it holds books only** — *there is no key for anything inside a book, so `address()` falls back to `#slug(name)` for every chapter and heading in the library: a guess, unconditionally, for the entire referrable surface below the book.*

## <a id="the-mention"></a>The mention, which is where the catalogue comes from

> ***Doug:*** **"I think a mention will be the essence of the system — the mentions get assembled into a catalogue — every time we mention something, we need to make references to it."**

***A card is not written; it is assembled.*** **A thing becomes referrable because it was mentioned** — *annotated where it stands, given a name there* — **and the catalogue is what those mentions add up to.** *So the referrable surface of the library is* ***authored, in the markup, in the library's own language***, *rather than being a schema imposed on it: a book offers what it offers, and nothing may be reached that nobody offered.*

**The question this left, and it sets how large that surface is:** ***is a heading referrable by default, or only when it is mentioned?*** *Default means every heading in the library is a public commitment that cannot be renamed without breaking something. By mention means a section is reachable only when its author offered it — which is the model above.*

***RULED 2026-09-17 · BY MENTION.***

> ***Doug:*** **"I say no. We should mention things. We are mentioning titles right?"**

***And the check inside his question is the confirmation, because a TITLE IS A MENTION.*** **The notation's title form is `*$[ X ]( Y )*`, and the prefix allocates** — *so a title declares the thing it names and hands back an address, which is the same act as any other mention and not a special case beside them.* **The binder already reads it that way:** *`Reading.$author` asks for* ***"what a mention names, not what it says"*** *— so a cover written `[Author: Doug]( My Library Log )` catalogues the log, and always did.*

***So the catalogue is not assembled from every heading and then filtered; it grows from mentions upward.*** **A heading nobody offered can be renamed without breaking anything**, *and the referrable surface stays the size its authors chose* — **which is what makes `??` indefensible rather than merely untidy:** *it manufactures a reference to a thing whose author never offered it.*
