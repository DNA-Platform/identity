# The Card Catalogue

- **author:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **coauthor:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md), [Libby](../../../../.claude/library/..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md), [Adam](../../../../.claude/library/..teamsmanship/..team/adam/adam-between-the-wires/.cover.md)
- ***The chapter name is Doug's word; the section names are PROXIES.***

---

***THE DESIGN SESSION OF 2026-09-17, recorded as it was decided rather than after.*** **Its standard is [The Soundness of a Knowledge Graph](../the-semantics-of-books/18-the-soundness-of-a-knowledge-graph.md)** — *read that first; this chapter is what the thesis turns into when it is built.* **The commission this book opened with was reframed the same day and the reframing governs:** *the binder is not being rewritten so a stylesheet can be edited faster.* ***It exists to produce the catalogue, run the specification, provide a realtime development workflow, and validate a knowledge graph as fast as it can be validated.***

## <a id="found"></a>What was already there, which is most of it

***Seven things were found in the code rather than designed, and they decide how much of this is new work.***

**1 · THE CATALOGUE EXISTS, ONE DRAWER DEEP.** *[`assembly/routes.ts`](../../package/.binding/assembly/routes.ts) generates `$$Book.shelve([{ name, address }])` on every bind.* **That is a card catalogue with exactly one query — a book by its name — whose cards hold addresses rather than identities.**

**2 · A TITLE IS ALREADY A DOCUMENT MENTION.** *[`Title.tsx`](../../package/src/library/Title.tsx): `override get meaning() { return super.meaning ?? this.document; }`, and `document` returns the mention class.* ***So a document's card is produced by its title, and "mentions get assembled into a catalogue" is a walk over titles rather than a mechanism to invent.*** **This is the largest piece of good news in the session.**

**3 · A CARD IS ALREADY A MENTION PLUS WHAT STANDS WITH IT.** *[`CatalogueCard.tsx`](../../package/src/library/CatalogueCard.tsx) specifies `a catalogue card carries the title of a book` — a composition holding a title.*

**4 · THE PARSER IS OURS AND SAID SO IN ADVANCE.** *[`Parser.tsx`](../../package/src/utilities/Parser.tsx): "it's not markdown, WE should be parsing that… One expression, and the syntax is free to move without asking another language's permission."* **One catch: `link()` is anchored `^…$`, so it only reads a link when the WHOLE writing is one.** *Mentions stand inline, so they must be found inside a string and split out — the shape `parse` already performs at every level, but new work at each.*

**5 · NON-MEMBERSHIP DOES NOT REFUSE. IT GUESSES.** *One line, in `$Book`, `$Subject`, `$Author`, `$Canonical` and `$Participant`:*

```ts
protected override address(): string { return this.standing() ?? super.address(); }
```

***`standing()` is the catalogue lookup; `??` is "unless it is missing, then".*** **So a name nobody published becomes a link to a fragment on whatever page we happen to be on** — *not a broken link a reader reports, a silent one that lands somewhere plausible.* **It was deliberate — "a name for a book that is not here yet" — and the thesis reclassifies it rather than discovering it.**

**6 · THE SHELF IS ADDRESS-BOUND AND BOOK-ONLY.** *`shelved` maps a name to an address STRING, which is the topology-binding the thesis forbids; and it holds books, so every chapter and heading falls through to `#slug(name)`, a guess, unconditionally.*

**7 · `$Catalogue` NAMES TWO NODE KINDS.** *In `reference/` it is a mention; in `library/` it is a book that catalogues books. The comment beside it manages the collision by export discipline — "the two never meet because only that one is re-exported by `index`."* ***One word, two kinds, kept apart by module plumbing rather than by meaning — which is exactly what a vocabulary carrying a membership test may not do.***

## <a id="rulings"></a>What Doug ruled

### <a id="syntax"></a>The two sides, and which bracket is which

> ***Doug:*** **"[] and []() would be refers to · [[]] and [[]]() would be referred to as (mentioned as)"**

***DOUBLING DECLARES. SINGLE REFERS.*** **The declaration side is the doubled bracket, which is the inverse of MediaWiki**, *and right here because declaring is the rarer, more deliberate act and doubling marks deliberateness.*

| written | reads as |
|---|---|
| `[[great]]` | *this is referred to as* **great** — the key is the copy |
| `[[This is Important]](important)` | *says* **This is Important**, *keyed as* `important` |
| `[great]` | *refers to whatever is referred to as* **great** |
| `[Doug](MY Library Log)` | *says* **Doug**, *refers to* `MY Library Log` |

**One doubling rule, learned once, and it reads aloud correctly in both directions.** *It is also `[text](target)` — the expression the parser already holds — with the brackets doubled to mean* ***mention instead of link***, *so nothing new is learned twice.* **And every markdown link already written in these libraries is the use side, which gives the migration a direction.**

***A mention in prose is therefore never casual.*** **Doug:** *"That isn't casual. That will get converted into a mention by the compiler, and a reference should be able to go there."* **`[[great]]` plants a target in the prose that a reference elsewhere can land on.**

### <a id="surface"></a>What is referrable

***NAMED MENTIONS LIVE BELOW THE CHAPTER LEVEL.*** **Doug: "Makes life easier. Titles are a document mention."** *Above and at chapter level the catalogue's spine is structural and derived from titles; below it, a thing is referrable because somebody named it.* **Sections are standard** — *"yes let's have standard section ones."*

### <a id="queries"></a>What the catalogue is asked

> ***Doug:*** **"The catalogue would have subject, title, author queries because each one has a unique book — we need to make unique the author one. And then from those you should be able to query chapter and mention, from chapter to section."**

**Three entry drawers — SUBJECT, TITLE, AUTHOR — each naming a unique book**, *and author is the one whose uniqueness has to be manufactured.* **From a book: its chapters and its mentions. From a chapter: its sections.** ***A comprehensive catalogue, and its size is N books × M chapters.***

**Every card at section scale and above carries a SYNOPSIS** — *written, or made where nobody wrote one.* **A direct mention carries none.** *Doug: "everything at section scale should have a summary or has one made. I don't think the direct mention should carry one of those."*

### <a id="static"></a>Static references are substituted in; the catalogue serves the dynamic

> ***Doug:*** **"if we are careful, all the static links could be validated at build time and even substituted in. We still want a catalogue abstraction, and we want to find a way, at build time, for the system to be able to request parts of the catalogue, so it can provide dynamic services. No API needed."**

***This is the ruling that makes the thing scale, and it should be said plainly: THE CATALOGUE IS NOT SHIPPED AND LOOKED UP.*** **A reference an author wrote is resolved during the bind and emitted as a finished link, so ordinary prose costs nothing at runtime** — *a resolved reference is just a link.* **The catalogue abstraction survives as something that hands out PARTS, for the things that genuinely have to ask.** *He raised generating it against a GitHub API and talked himself out of it in the same breath; nothing external is needed.*

### <a id="refusal"></a>Always refuse

***A reference that does not resolve fails the bind.*** **Not a report, not a dev/publish split — every bind.** *Which is what the thesis demanded and what DocBook, XML's `IDREF` and Sphinx's nitpicky mode have each demanded before us.*

### <a id="grammar"></a>The restructure — composition begins at the paragraph

> ***Doug:*** **"Maybe we have to give up on some of composition. At the bottom, just let things be strings. A composition comes at the paragraph level. But the document still requires either other documents or sections, and they require other sections or paragraphs, and they don't have to be structured."**

```
document   →  documents | sections
section    →  sections  | paragraphs
paragraph  →  strings
```

***Nothing is required to be structured, and below the paragraph there are no compositions at all.*** **This is the first answer in the session that makes the object model SMALLER rather than better organised**, *and it deletes the levels where the cost lives — `specify` walks 33,158 writings, and sentences, words and letters are most of them.*

### <a id="types"></a>The type compression

> ***Doug:*** **"We currently make an interface and a typeof and all of that… We should compress everything just to the `$` types. The type system can then be used to specify the sort of multiple inheritance that it affords by adding types to add validation, but it doesn't need us to create types for everything."**

***The `$X$` interface plus `$TypeOfX` plus `$X` triple collapses to `$X`.*** **A `$TypeOf…` survives only where a type is ADDED to something to bring validation with it** — *which is what the type system is actually for: multiple inheritance by annotation.* **The loose coupling the interfaces were buying is bought instead by dependency injection.**

### <a id="di"></a>Dependency injection, and what it is for

> ***Doug:*** **"Full `$` DI, but the DI container just works anywhere. It just needs to inherit the scoping. And I think we need bond-constructor scoping — if something happens in a bond constructor of a certain type it gets the service requested there if this type of registration is required. We'll have to see how that feels."**

**A chemistry FEATURE, therefore pitched and not taken.** *It carries two jobs at once: it is how the card catalogue exists as a service in `$`, and it is what makes the type compression above possible.* **Doug: "I think it mostly needs to exist at build time, but we should build it so that it can exist at runtime too."*

### <a id="naming"></a>The name, and the rule that found it

***The service that answers a request for part of the catalogue is the CARD CATALOGUE. It is not a new organ.*** *A reference desk was proposed and withdrawn — the closer word was already in the domain.*

**The rule it was tested against, which is a correction to how this team had written the naming principle down:**

> ***Doug:*** **"If any one obscures by being short, you have failed. But if you make something that has no short name, you are deviating from the domain! Naming is a semantic constraint satisfaction problem, and the answer isn't obscurity. It is allowing your design to change to accommodate the missing semantics to stay IN the domain."**

***And the reason the domain is load-bearing rather than decorative, in his own demonstration:*** **he asserted the catalogue was necessary, the team objected, and the DOMAIN settled it** — *real and digital libraries do not carry a catalogue by accident.* **Canonical semantics convert design speculation into an argument that can be checked against something that already exists and already works.**

## <a id="second-round"></a>The second round of rulings, 2026-09-17

***Given after the design went out for an outside reading and came back.*** **Three of them answer a proposed fix by refusing it and naming the domain's own answer instead, which is the method working rather than a disagreement.**

### <a id="a-card-is-writing"></a>A card is a writing that is never mounted

> ***Doug:*** **"In a world where everything is writing, this doesn't exist in that context at all. I would prefer it be a chemical, though we should consider just using writing as a base and making it a regular piece of writing that we `new` and assign things to, and it can be viewed but we make them like POJOs. *Like horizontal gene transfer, it's a piece of writing that isn't created in the DOM.*"**

***So the catalogue is not a compiled table beside the library; it is made of the library's own material.*** **A card extends the same base as a chapter, is constructed directly rather than rendered, and is never mounted** — *which is why it costs nothing at render time and why everything the library already knows how to do to a writing applies to it unchanged.* **The alternative — a row of data with no existence in the library — would mean nothing in the library could point at a card or say anything about one.**

### <a id="frozen-keys"></a>A key is frozen, and it is not a bond

> ***Doug:*** **"Catalogue keys are not dynamic. Freeze the thing. These are non-reactive properties."**

***Two rulings in one sentence and the second is the load-bearing one.*** **A key is a permanent commitment from the moment a thing is declared referrable — there is no rename, no alias, no "see" reference redirecting an old name.** *And a key is* ***non-reactive***: *in a substrate where every field is a bond, a reactive key would make every card an edge in the graph and a write to one would diffuse through it.*

### <a id="the-title"></a>The call number is the title

***The outside reading said the design was missing a call number*** — *a card holds identity, a call number says which shelf, and re-shelving the stacks does not reprint the cards* — ***and proposed splitting identity from address into two objects.***

> ***Doug:*** **"No that's the title. Book titles have to be unique in the library. If it gets more complicated, in the future we can do the subject and the title, but for now, globally unique titles."**

**The finding was right and the new object was not needed: the domain already carries it, and the word for it is one we have.** *And the shape of the deferral is itself canonical — subject plus title is how a call number is actually built, a class followed by a cutter.*

### <a id="citations-out"></a>A citation out is not a reference

***The same reading found that always-refuse cannot survive a reference pointing at something we do not control***, *and proposed pulling external works in as cards for things the library does not hold — the union-catalogue record.*

> ***Doug:*** **"Then it isn't a reference in the sense of the library. This is why we can point in by having the catalogue build from everything we can know. If we are building the thing, we can validate all the external links at compile time, we just can't validate that they are right."**

***The conflict dissolves rather than being patched.*** **Refusal by non-membership was never a claim about the world; a reference is a library-internal object by definition.** *An external link can be checked at build time for being well formed and reachable, and cannot be checked for saying what the citing text claims it says — and that limit is honest rather than a hole.*

### <a id="mention-is-annotation"></a>A mention is an annotation

***The reading agreed composition should stop at the paragraph and warned that the leaf cannot be a plain string, because a mention stands inside prose and would be trapped in it.*** *It proposed a content sequence of strings, mentions and references.*

> ***Doug:*** **"Mentions will be annotative, and annotations are associated with writing. A piece of writing is approximately a sequence of strings or other pieces of writing followed by a sequence of annotations and we should make that more explicit."**

```
writing  ≈  (string | writing)*  followed by  annotation*
```

***The prose stays prose. The referrable surface is the annotation list hanging off the writing that holds it.*** **This adds nothing — `$Annotation` is already a first-class thing here and a `$Type` is already one** — *it makes the existing model explicit, which is what was asked for.*

### <a id="author-is-autobiography"></a>An author is an autobiography

> ***Doug:*** **"Authorship has to live in an autobiography and we only allow one subject to have that in the library. But autobiographical works can be in a chain… We imagine that like Subject, which has to be unique to a subject, Author has to be unique to a library. Doug versus Douglas M. Rubino might be different ones, and I will handle them with different books."**

***So author uniqueness needs no authority file: it comes from the library's own closure.*** **One subject has exactly one autobiography, and that book IS the author.** *Autobiographical works may chain — a team and its members, a person and a professional face — and two forms of one name are simply two books, decided by a person rather than by a mechanism.*

***One gap the outside reading named and this does not close:*** **our "author" is doing the work of author, editor, illustrator and translator at once** — *what cataloguing calls a* ***relator***, *and we have one word where the domain has many.*

### <a id="where-it-surfaces"></a>A fault surfaces in the editor

> ***Doug:*** **"I would like them to find out in the VS Code errors possibly — which is why plugins and surfacing exceptions and using those APIs might be best."**

***Not the browser, and not the build log — the editor's problem list.*** **Which makes a language-server surface a first-class target rather than a nicety, and it is not something a Babel plugin or a TypeScript transformer can reach** — *a transformer has the type graph and no values, and our facts are values.*

### <a id="the-table-bug"></a>And the table of contents was our bug, not the design's

***The reading found the one place refusal-by-membership leaks: a table addressing a book's own parts by POSITION, which is not membership by identity.*** **It is the lesson TEI learned when it retreated from XPointer to declared anchors only.**

> ***Doug:*** **"Right and I said not to. I said by chapter name so that's on you guys. Good bug."**

***The ruling was given and not built.*** **A table names its chapters by name, and no positional path survives anywhere.**

## <a id="speed"></a>What fast means, ruled while fixing something else

***These were given on 2026-09-17 about a different tool — the driver that reaches Claude Desktop — and they are recorded here because the binder is held to the same standard*** (**"be absolutely as lightning fast efficient as possible"**). *They are quoted rather than generalised, because the generalisation is Doug's to make.*

> ***Doug:*** **"Running is from the time I ask to the time it happens."**

***That is the measure, and it is not the build's internal clock.*** **It is the interval between a person changing something and seeing the consequence** — *which includes everything the team does in between, not only what the compiler does.*

> ***Doug:*** **"1 second of blink and 10 seconds of wait is a whole universe."**
>
> **"I shouldn't be waiting noticeable amounts of time for anything so if you HAVE to wait, wait 250."**
>
> **"You should never wait blind, so the absence of a confirmation is the do-and-check is just proof that you are blind."**
>
> **"The gateway is a form of primitive sight."**

***The distinction those four make together, which is the useful one:*** **a budget is a CEILING, not a cost.** *A thing that looks and looks again on a taper, returning the instant the answer arrives, may be given a generous ceiling and still be quick; a thing that SLEEPS pays its number in full every time.* **Every flat wait in a build is a confession that nothing is watching** — *and when the two largest were removed from the driver, the measured time fell from 18.5 seconds to 6.8 with no loss of correctness, because neither had been buying anything.*

> ***Doug:*** **"No branching codebases that have exponential complexity on figuring out what they do."**

***And the correction that governs how any of this gets reported:***

> ***Doug:*** **"Try not to think either of you know what things are worth. We design the framework. We control the cost."**

**A cost measured inside a system we wrote is not a fact about the world; it is a consequence of a decision, and the first question about any of them is what we designed that made it so.** *Reporting a number as though it were weather is how a design gets treated as a constraint.*

## <a id="props"></a>The open question in the substrate: props do not participate in the bond

> ***Doug:*** **"is the bond constructor only called per prop application? It might need to be called whenever props are applied as they participate in the bond too. I find myself not liking props very much for some reason."**

***Read rather than recalled, and the instinct is correct.*** **[`chemical.ts`](../../../chemistry/package/src/abstraction/chemical.ts) applies props first, as fields, under `$rendering$ = true` so the write is not news — and then:**

```js
if (this._lastBondArgs && $Synthesis.sameArgs(newArgs, this._lastBondArgs)) {
    // Children unchanged — skip bond constructor
}
```

***`newArgs` is built from CHILDREN. So a prop change re-renders and never re-runs the bond constructor.*** **Props are a second input channel that bypasses the bond entirely** — *which is exactly why they feel wrong, and why it is not a preference.*

**And it converges with the syntax ruling.** *`<Mention as="great">` puts the key in a prop, outside the bond; `[[great]](important)` puts it in the children, inside it.* ***The same instinct arriving twice from two directions.***

## <a id="open"></a>Still open

- ***What a card holds*** — the identity `{ book, chapter, key }` is the shape the topology argument demands, but the field list is not ruled.
- ***How author names are made unique***, which Doug named as a requirement and not a mechanism.
- ***Whether the bond constructor should run on prop application***, above — a chemistry feature awaiting its pitch.
- ***Where the mention parse runs*** — in the parser at every level, or once at the paragraph, now that nothing composes below it.
- ***What replaces the `??`*** at the five sites, given that always-refuse leaves no fallback to write.
