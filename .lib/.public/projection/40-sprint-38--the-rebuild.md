# Sprint 38 — The Rebuild

- **author:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **coauthor:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **status:** `brainstorm` — the feature list compiled and the foundation ruled in the room, 2026-09-03. **NO CODE until the requirements are approved**, and no member enters `src` without Doug's yes, one at a time. ***The title is a proxy; sprint names are his.***
- **style:** [The Coding Style](../designing-inexplicable-phenomena/11-the-coding-style.md)

---

The sprint after [The Binder](37-the-binder.md) ended in a revert. The framework source stands at `20cb87f` — lib and chemistry byte-identical to the pre-session simple, the session's tests kept as the rebuild target — **plus Doug's own hand-deletions the morning after**: `code`, `nests`, `writtenAs` and `canonicalForm` came off `$Type`, leaving it `formula`, one specification, `specifically()`, a null view. The deletions were not tidying; they were the opening statement of this sprint's design. **The rebuild is not a restoration.** Every feature re-enters under a ruling, and the rulings below say the shape.

# <a id="gates"></a>The gates, standing over everything

1. **Members and classes in `package/src` need his explicit yes BEFORE they exist** — reaffirmed in his own catchup instruction: *"No members added anywhere in Lib if I don't approve them."*
2. **`chemistry/package/src` is NEVER modified except by his direct instruction.**
3. **The conventions from the Organization pass are in force**: [The Coding Style](../designing-inexplicable-phenomena/11-the-coding-style.md) index, [The Order of a Class](../designing-inexplicable-phenomena/08-the-order-of-a-class.md), [The Closeness Rule](../designing-inexplicable-phenomena/12-the-closeness-rule.md), [The Type and the Instance](../designing-inexplicable-phenomena/10-the-type-and-the-instance.md), [Shells Over Types](../designing-inexplicable-phenomena/14-shells-over-types.md). No comments; the comment ban is the complexity detector.

# <a id="rulings"></a>The foundation rulings, verbatim — 2026-09-03

**R100 — the hierarchy is SEVEN, and it is constant.** *"I think we can get rid of Document and File, replace with Chapter and Book, and have a flat hierarchy, to really make the point that things will be constant."* And on the merge: *"Move them to Chapter and Book. Chapter and book were already those. So they can be merged in. A chapter is everything a document was plus a chapter and so too for file and book."* The essential levels: **Letter · Word · Sentence · Paragraph · Section · Chapter · Book.** *"The 7 are hardcoded but not much else."*

**R101 — `type` is a bare demanded field.** *"type should be a simple property that is not nullable: `type!: $Type;` We can do that because we will demand one in the bond constructor. reduce should be gone."* No getter/setter pair, no `_type` backing, no most-derived reduce. *"We will look for opportunities to do things with polymorphism, not building tracking systems on base classes that are brittle and destroy innovation."*

**R102 — no `canonicalForm` on the type.** *"Canonical form can live in the parser. We only do this for Letter, Word, and Sentence — Paragraphs and above are expected to be explicitly specified."* The parser holds the making-knowledge for the three levels it implicitly makes; nothing else needs a factory member.

**R103 — no `writtenAs` on the type.** *"This is the kind of thing that polymorphism should handle. Letter–Book are the essential types. type on writing carries a thing that will polymorphically descend from one of them… Specification should carry the type — T extends TypedSpecification, etc… that's how they compose. The type carries that. Things can be in switch. I don't know why we track this stuff."*

**R104 — no `nests` on the type.** *"nests is indent, it is a number, and why do we need to know if a class is nested. It is the parts of the one above it that needs to read and flatten the nested one."* Nesting-as-display is an indent number; nesting-as-model is the parent's `parts()` reading and flattening — never a flag on the nested thing's type.

**R105 — standing is the type chain.** *"You ask by type. What the writing type property returns, and see which of the 7 the type is an instance of — typeofletter? typeofbook?"* No lattice, no `kin`, no canonicalForm-parentage walk in `$Lib`. The word *kinship* is not the word — struck from the vocabulary along with the mechanism.

**R106 — `code` is nobody's property.** *"Why does the type need its code? It's a property of a reference not of a piece of writing. It's not a property of anything. Have it included in a path url."* Url formation holds the code knowledge itself — a switch over the constant 7 in the path-forming seat. *Reading, flagged, not his sentence: R69 (own address codes for List and Table) dissolves — an arrangement addresses as the level it stands at.*

**R107 — the parse makes only Letter, Word, Sentence.** Paragraph and above are authored explicitly. And **within a paragraph, newlines divide lines**: *"a paragraph can have newlines in sentences… This parses as three lines and it helps list, all non-canonical sentences."* A line is a non-canonical sentence, which is what the List rides on.

**R108 — the trait is simple.** *"The trait has the specification from type and it should use it same as type. It should extend it. This isn't hard I don't think. Simple."* `$Trait extends $Type`; a trait's specification extends the host's; used at bind and specify exactly as a type's is.

**R109 — recursion, and `indent` is the only new member.** *"One feature was recursive types. This should be easy. A paragraph can be in a paragraph now. Writing gains an indent. It is used to specify levels. The parts should read through the recursive levels. indent should be the only new member."* And from the same round: *"We need X in X for the 7 and the things that declare their types. For composition."*

**R110 — the table is a TYPE, not a trait.** *"Types not traits. Table is a type of thing and the type can be specified like writing. The cell is always the type below. We need a type utility that can take paragraph and return the type of sentence, word, letter so we know what below means. Table should take columns, specify that columns must divide cells, and in the view get the cells in the right form. I don't see why it needs any more complexity."* The columns member is his one-word answer: **`$columns`**. TableTrait does not return; the kept table tests rewrite to the type spelling.

**R111 — the type keeps the name it caches under.** *"Type should keep track of the name it uses to cache. `name = 'Type'` / `this.cache(this.name)`. And then we use that for traits."* **Approved member: `name` on `$Type`.** His correction of where names live: *"my type names were on templates… We can read types and get templates."*

**R112 — the frame wears the type chain as `pd-` classes.** *"We can probably enumerate the templates of the prototype chain back to type (don't use type except for type I suppose) on writing and frame the thing in a div that is styled inline with the pd- (public dollarsign) prefix and the dash-separated version: `.pd-table-of-contents pd-chapter` — something like that."* **`pd-` is his name — public dollarsign.**

**R113 — anchor in anchor is fine; the means-narrowing is struck.** *"An anchor in anchor should be fine. It just provides its parts and the topmost anchor controls it. Someone wouldn't do this but it doesn't break anything. Types need to be right."* And the battery row was struck as a feature in the same breath — *"Shallow battery? What does this mean"* — the word was the session's proxy, and the need underneath it is R109's recursion.

**R114 — indent is computed in the bond.** *"starts at 0. Incremented on elements of the block that have the same time in the bond constructor of writing recursively I think. See if you can make that work."* *Reading, flagged: "same time" read as "same TYPE."* Never authored; the notation's nesting IS the authoring, and his closing sentence is the license to probe the mechanism.

**R115 — the `pd-` chain is confirmed as read.** The type's template chain, every ancestor template's `name` kebab-cased on one framing div, the root `Type` excluded unless the writing is itself a type. His word: *"Correct as read."*

**R116 — `Reflection.tsx` replaces `$Lib` and the `$$` spelling.** *"Call it Reflection.tsx and use a pattern like Html. Get rid of Lib $$ and just make methods on reflection."* One small class, one exported instance, named methods — the below-utility, the ask, the bind-to-read-as — where the `$$` overloads were. **Reflection is his name; the METHOD names are owed** — normalish proxies taken at build and flagged for his strike. The kept tests spelling `$$` rewrite with it.

**R117 — a phrase is a sentence.** *"Phrase is a sentence. Now that we can have recursive types, it is a sentence that goes in sentences. I see why we need something like nested for the parser. Use default index for this — indent of the template, but set the indent to zero if it parses at the sentence level."* Clarified in his next breath: *"phrase will have: `indent = 1`. If someone wants to make a recursive type for the parser they can do that too. We don't need to support more than indent = 1 — you can just check indent > 0."* **So the default is a literal class field, any recursive kind declares its own, and the parser's whole nested-test is `indent > 0`** — zeroed when the parse seats it at sentence level. This unblocks F4: Ref is a type of phrase, and a phrase lends its words through the read-through.

**R118 — flattening is for the `$X` classes only.** *"We need to do removing base class of the $X members, not the types and not the specifications which should both use polymorphism. Type carries the polymorphism in most cases."* A kind's CLASS extends `$Writing` flat and free; its TYPE descends the TypeOf chain and its SPECIFICATION descends the specification chain — those two spines carry everything standing needs.

**R119 — only Letter, Word, Sentence are ever BUILT, and there are three parse functions.** *"The only things ever built are letter-sentence… No creation of book. Get rid of $$. There can be three parse functions, one for each type. Don't try to make things more abstract than they need to be."* `many.test` promise 3 rewrites: reading-as above Sentence hands back the standing writing, builds nothing. And the line grammar: *"line breaks parse as a sort of period for a sentence, and a double line break would have a newline sentence I suppose, thoroughly non-canonical or maybe just an error. Maybe the parser doesn't support double line breaks"* — **the double-line-break fate is his open 'maybe', bubbled below.**

**R120 — a bare-text section implies at most ONE paragraph.** *"Section with one block of text — parses that as one paragraph and the text is what's in it. No more than one. The parse is the paragraph parse and at most one is inserted."*

**R121 — the title is required, and the chapter implies downward.** *"We can parse, like the section, a title with a single paragraph as an implied section with an implied paragraph and then the parse is sentences… Title is required. In practice this will almost never happen."* A cover has no blank-line prose — *"It should have a title. It will help having an author and subject. We can make figures for cover art later."* **No lowering machinery in the binder; the implied single wraps at each level are the whole story.**

**R122 — the reference family keeps its seven.** *"Keep the 7. I decided that. Dissolve $$Document and $$File with document and file obviously."* The `$$X` class-per-level form survives the flattening; only the two dying levels take their references with them.

**R123 — no double line break.** *"No double line break. Causes an error."* A paragraph carrying one fails with its reason drawn.

**R124 — the title is required on section AND chapter, and the wraps are bond edits.** *"Title is required on section and chapter, the title of the chapter is the title of the first section… The title is a noncanonical paragraph that parses with a section over it. Some of these should just be in the bond constructor. Section-Book shouldn't be in the parser. These are simple edits that go in the bond constructor. We need block editing."* The chapter's title IS its first section's; a bare title implies its section; and the implied wraps for Section–Book are the bond constructor editing its own block — the parser never sees them.

**R125 — the names are chosen in dialogue.** *"Use two word names to make things make sense if it is needed… There is no ladder. There is composition and the composition hierarchy… Discuss names with 20 turns in dialogue and choose ones that read naturally as you talk. Use them in a sentence… Choose great names."* And his challenge — *"Why do you need either?"* — is a design input, not rhetoric: the dialogue must first ask whether each method deserves to exist.

# <a id="the-design"></a>The design as it stands — the foundation

- **Seven level classes, seven types, constant.** Document and File deleted; Chapter absorbs Document member-for-member, Book absorbs File. The `$$Document`/`$$File` reference forms and `TypeOfDocument`/`TypeOfFile` merge the same way.
- **`$Type` is bare:** `formula`, one specification, `specifically()`, null view. `$Trait` extends it and extends its specification.
- **`$Writing.type!: $Type`** — demanded in the bond. The specification rules that policed type presence/uniqueness shrink accordingly (Queenie re-derives the base battery).
- **`Reflection.tsx` is the asking seat** (R116): the Html pattern — a class, an exported instance, named methods. It answers *below* (the 7-ladder), the ask (`writing.type` instanceof the asked TypeOf), and the bind-to-read-as. `Lib.tsx` and the `$$` spelling are deleted; call sites and kept tests rewrite.
- **Codes live in url formation** — one switch over the 7 where paths are printed and followed. No `code` member anywhere.
- **`indent` on `$Writing`** — a number, the only new member for recursion; starts 0, incremented in the bond on same-type elements of the block, recursively (R114); `parts()` reads through recursive same-kind levels and flattens. A phrase is a sentence with the template's default indent, zeroed when parsed at sentence level (R117).
- **The frame** — a div wearing `pd-` kebab classes read off the type's template chain, `.pd-table-of-contents pd-chapter`; no style attribute anywhere, classes only. *Reading, flagged: the chain is the TYPE's prototype chain of templates, each contributing its `name`, the root `Type` excluded unless the writing is itself a type.*

# <a id="register"></a>The feature register

| # | feature | source | state |
|---|---|---|---|
| **F1** | the simple type + the seven-level collapse | R100–R104 | **ruled above; member list still to be walked one at a time** |
| **F2** | standing by type chain in `$$` | R105 | ruled |
| **F3** | the flat hierarchy — kinds onto the 7, cleanest first | [The Extension Check](38-the-extension-check.md) | gated on F1/F2 |
| **F4** | `<Ref>` three forms + router, `read()` through the catalogue | [Binder R87–R96](37-the-binder.md#requirements) | design proven pre-revert; member asks owed |
| **F5** | the table — a TYPE; cell is the type below; `$columns` approved; specification checks columns divide cells; view lays cells | R110 | **ruled**; TableTrait struck, its tests rewrite |
| **F6** | the styling frame — `name` on `$Type` approved; the `pd-` frame div off the template chain | R111 · R112 | **ruled**; chain reading flagged for his correction |
| **F7** | the binder — nine doors, CHECK as `specify()` | inventory A4 | returns pending his read; no framework members |
| **F8** | Wikimedia corpus + demo | inventory A5 | returns pending his read |
| **F9** | declarations look like declarations | [The Cleaning](../the-condition-report/06-the-cleaning.md#declarations) | waits on a chemistry refactor HE directs |
| **F10** | ~~the shallow battery~~ | R113 | **STRUCK as a feature** — the word was a proxy he did not recognize; the need is F13 |
| **F11** | ~~the `means`-narrowing~~ | R113 | **STRUCK** — anchor in anchor is fine, the topmost controls |
| **F12** | `$Index.references` narrowing | tsc map | smallest item |
| **F13** | recursion — X in X for the 7; `indent` the only new member; `parts()` reads through | R109 | **ruled**; open: authored or computed |

**The map:** 58 tsc errors under `src/tsconfig.json` at the time of ruling — ~39 from the four type-member deletions rippling, the rest the kept session tests. A test going green is the proof a feature landed.

# <a id="the-shape-ruling"></a>The shape question, asked and closed — 2026-09-03, after the build

*Doug asked whether the canonicals should be five, with Chapter and Book no longer levels. A fourteen-agent sweep mapped every seat (86 findings, two live probes, refuters on each claimed simplification): the cut's ontology gains were real but four of five claimed deletions RELOCATE rather than delete, and the gridlock is the composition grain — probed, a one-chapter book flattens to `['$Paragraph']`. Presented with the middle design as recommendation. **He ruled a third way:**

**R128 — the seven stand, related through COMPOSITION, not kinship.** *"Book and chapter are not sections. They are related through composition same as the others. Word is not a letter right? Chapter is not a section. But chapter is a composition of sections — that needs to be enforced dynamically now — and Book is a composition of chapters."* R122 closes again with its reason: the rungs are compositional relations; the written-as laws are enforced dynamically, in the specifications.

**R129 — codes ride the references; parts must not cascade.** *"You need to assemble the $$ classes right? Can't they just use the code? Do you need to put something in the reflection helper to know how to assemble a code? This is a part of parts right? We need parts to not cascade so that everything needs to be defined just because one level is called."* R106's own sentence ("a property of a reference") arriving as mechanism: the code lives with the reference form, not in a Catalogue table; and asking one level's parts may not force the ladder to be defined.

**R130 — the grain decider is the template's indent.** *"Put indent of 1 as default and use indent > 0 on template as the decider of a thing that wants to be indented — though be sure to set it right when in use."* A kind that lends its parts declares `indent = 1` as a class field; the read-through consults the TEMPLATE's declaration; instances still set right in use. No new taxonomy — the member already approved carries the distinction.

**R131 — one pass.** *"Can we do all in one pass? Is that a problem? Let's just plan it"* — then, on the plan's heels: *"Why not do as much as you can now, and then bring me blockers and designs."* The Ref round, the codes move, the no-cascade fixes, the compositional-law gaps, the indent decider, and the three small finds (the `focus()` mis-seat, `book()` deletable, stale quarantine comments) run as one pass — ruled designs built now, unruled shapes brought back as designs, chemistry untouched.

**R132 — the extension architecture, given as an exploration (*"Not sure"* flagged in his own word).** *"We also want to remove dependencies in the $X normal classes I think. Not sure. You need to architect by looking at the code, thinking about a person who might want to subclass Writing to do something special everywhere or provide default styling, and in this case, they need to generate new versions of the types. Maybe we don't want to have to do this for the fundamental classes — Paragraph, Sentence, Ref, List... because you have to rebuild a whole framework. It would be good if perhaps they could be decorated to maintain the style, and then quickly assembled by exposing the right type so that specifically can do its work. Would this be a place to test out the power of specifically? What level of interaction can you achieve with that method? That is the sort of intentional use case that motivates the lack of inheritance hierarchy in the tools of the framework. But also imagine that people, when they need a custom thing, they would probably subclass and then use $ to do DI. But if they do, we want to give them as few DI injections as possible, so we probably want things to decorate so that the inner Sentence is used to render the Phrase — things like that. Then can't you just DI sentence to achieve a new phrase? Architect this kind of thing and bring me thoughts."* **The charge: architecture with the code open, thoughts back — no code.**

**R133 — the lean-extensible charge: standardize `$`, decorate, override, add nothing.** His words, 2026-09-03 evening: *"anytime a type is used, it should be fetched using $ — `const paragraph = $(Paragraph)`? ... Very important for the DI route to work."* · *"Glad you agree about Phrase rendering with a Sentence that it runs through $ ... let's look for those opportunities."* · Ground-up consumers keep the TYPES: *"we want the types that can be exposed that run specifically, so the app can know that the thing given acts like the type when it needs to be."* · The charge: *"do an audit of all the things that we would change to make this vision real. Documentation for maintaining the conventions that are discoverable, standardizing $, everything inheriting from writing, related types like phrase and sentence, paragraph and list etc... to use composition when it makes sense to inherit from something structurally. In the list, the list itself should be rendered in Sentence, I think perhaps?"* · The constraint: *"all of this needs to not overcomplicate the members. We shouldn't have to add anything for this."* · **The OO correction, quoted whole because it corrects the implementer:** *"it's so so so so so important that you learn to write OO, and stop trying to put things on Writing, when in fact the right answer is to override something in writing. We want to frame everything. Perhaps we surround in an inline styled div with the class list returned by reflection, and we override Letter and Word and sentence or whatever to... do they need to use span rather than div? Don't implement anything literal."* — the frame's span-vs-div conditional on `$Writing` was the caught instance; the base frames in a div, the kinds override. · The process: *"plan this carefully with a review and a plan before implementing anything."* **Audit → review → plan; NOTHING implemented until he has seen the plan.** And the standard the review judges by, added in his next breath: *"us writing the technical code is not us writing complex code. The technical code is carefully chosen. It doesn't need to look gnarly to be modularized and architecturally sound for extension. We care so much about elegance and minimality."*

# <a id="feasibility"></a>The feasibility check — every ruling walked against the mechanisms we hold

*Run 2026-09-03 at Doug's order, as part of the plan. Three verdicts: STANDS (buildable as ruled), STRAINS (buildable, with a named hazard to probe first), CONFLICTS (collides with something that must give). Numbers measured in the working copy, not estimated.*

| ruling | verdict | the mechanism speaking |
|---|---|---|
| R100 seven levels | **STANDS** | measured cost: 192 `$Document`/`$File`-family name-hits across 24 src files — a sweep, and **a blanket rename has bitten twice** ([14](14-cataloguing.md)); absorb member-for-member with the suite run between steps |
| R101 `type!` demanded | **STANDS**, one strain | every construction path must assign at birth; the read-as shell constructs empty then binds — the classification repair [28 left open](28-the-block.md) becomes mandatory. And a chemical field holding a CLASS value gets membrane-wrapped ([Solutions 38](../solutions/38-the-sections-that-collapsed-into-one-paragraph.md)) — `type` holds an INSTANCE, safe; any class-holding switch stays in plain classes like Reflection |
| R102 making stops at Sentence | **RESOLVED by R119** | the promise dies as written: reading-as above Sentence returns the standing writing, builds nothing; `many.test` promise 3 rewrites to that. Three parse functions, no generic tower |
| R103 no `writtenAs` | **STANDS** | *below* on Reflection over the constant 7; the stacks stay one-liners |
| R104 · R109 · R114 indent in the bond | **STRAINS** — probe first | writing `child.indent` in a bond is the exact shape of [Solutions 29](../solutions/29-the-bond-that-woke-the-tree-it-was-building.md), *the bond that woke the tree it was building*. His "see if you can make that work" is the probe license; **if the cure is chemistry-side, it comes back as an ask** — chemistry is his |
| R105 type-chain standing | **STANDS**, one inherited hazard | instanceof across two loaded copies of the framework is false ([Solutions 05](../solutions/05-the-suite-that-passed-against-a-stale-build.md), [16](16-validation.md)); the type chain inherits it. The cure is the one-copy import the binder move already implies |
| R106 codes in url formation | **STANDS** | one 7-switch where paths print and follow; the `prints` map's fate rides Q4 |
| R107 parse floor at Sentence | **RESOLVED by R120–R121** | implied single wraps at each level — at most one paragraph in a bare-text section, an implied section under a chapter's required Title; no lowering machinery, no corpus rewrite beyond making titles present |
| R108 trait | **STANDS** | already the shape |
| R110 table as type | **STANDS**, one hazard | the view asking `parts()` is [Solutions 45](../solutions/45-the-view-that-constructed-its-parts.md)'s crash seat; the parser's WeakMap memo exists (`Parser.tsx:8`) but the crash came through conferral construction. Probe against the killer pair; if red, the induction fix re-enters as a needed mechanism under whatever name he gives it |
| R111 · R112 · R115 the `pd-` frame | **STANDS**, two wrinkles | enumerating templates up the chain may need one chemistry-side accessor — if so, his to direct. And a div cannot stand inside a `p`: the frame's tag rides `inline` — span for inline writings, div for block |
| R116 Reflection | **STANDS** | 114 `$$` call sites in src plus the tests — mechanical; method names proxied, his to strike |
| R117 phrase `indent = 1` | **STANDS** | a declaration that looks like a declaration |
| R118 flat `$X` only | **STANDS** | and it dissolves the standing tension R102 would otherwise have doubled — the type chain is the spine, so a flat class loses nothing |

# <a id="units"></a>Units — the register, in forced order

*What, never how. Each traces its rulings; ⛔ marks the two that stop and ask before touching anything of his.*

| | unit | traces | gate |
|---|---|---|---|
| **U1** | **the seven-level collapse** — Chapter absorbs Document member-for-member, Book absorbs File; `$$Document`/`$$File` and their types dissolve; 192 name-hits swept with the suite run between steps | R100 R122 | approved |
| **U2** | **`type!: $Type`** — the bare demanded field; reduce deleted; the type-policing spec rules shrink | R101 | approved |
| **U3** | **Reflection.tsx** — the Html pattern; *below* and the ask; `Lib.tsx` and `$$` deleted, 114 src sites + tests rewritten | R116 R105 R119 | approved; method names proxied |
| **U4** | **the parse floor** — three parse functions (letter, word, sentence); a line break a sort of period; implied wraps (R120–R121); the parser makes nothing above Sentence | R107 R119–R121 | approved; double-line-break fate bubbled |
| **U5** | **indent** — the Solutions-29 probe FIRST, then the bond increment and the parts() read-through; phrase `indent = 1`, checks are `indent > 0` | R109 R114 R117 | ⛔ probe first — a chemistry-side cure returns as an ask |
| **U6** | **codes in url formation** — one 7-switch where paths print and follow; `prints` keeps the seven | R106 R122 | approved |
| **U7** | **the table** — `$TypeOfTable`, `$columns`, columns-divide-cells, the view laying cells via *below* | R110 | ⛔ probe the Solutions-45 killer pair before trusting the view |
| **U8** | **the `pd-` frame** — `name` on templates, the chain enumeration, span-or-div by `inline` | R111 R112 R115 | approved; a needed chemistry accessor would return as an ask |
| **U9** | **the kept-test reconciliation** — tests contradicting rulings rewritten: the `$$` spelling, TableTrait, promise 3, the labels shape | R110 R116 R119 | approved |
| **U10** | **the Ref walk** — the `read()` seat, the three authored forms, the reference rules | F4 | **its own brainstorm round, not yet run** |

**After the register:** the binder and the demo return pending his read (F7, F8); the chemistry declarations refactor waits on his direction (F9).

**Verification:** the 58-error map to 0 · the package suite green with the rewritten tests · every kind's `.spec` examples enrolled behind the three promises · and a served page seen, because no feature ships unseen.

# <a id="names"></a>Names — chosen in the R125 dialogue, his to strike

*The dialogue's first finding honoured his challenge: the read-as needed no name — it needed deleting. R119 already killed the building, so Reflection carries one of `$$`'s two jobs, not both.*

| chosen | in a sentence | lineage |
|---|---|---|
| `reflection.stands(writing, type)` | *does this writing stand as a chapter; the reference stands as a card because it wears the trait* | **his sketch word** |
| `reflection.below(type)` | *the cell is what's below the table's type* | **his phrase** — "so we know what below means" |
| `reflection.labels(writing)` | *the frame stamps the labels reflection reads off the writing's type* | the kept test's word, moved off the member budget |
| `parser.sentences · words · letters` | *the paragraph asks the parser for its sentences* | R119's three functions, named by what they answer |

*Rejected in dialogue: `is` (lies — the ask is precisely not instanceof on the class), `composedOf` (the subject goes missing at the call site), `parts` on reflection (one word, two answers).*

# <a id="open"></a>Open — after the GO

- **U10, the Ref walk** — its own round with Doug.
- **All chosen names above** — standing for his strike.
- GO given 2026-09-03: **"GO — build U1–U9."**

# <a id="build"></a>The build ledger — /ce-work, GO given, in flight

**Three more rulings arrived DURING the build, obeyed in place:**
- **R126** — *"I don't want _type. I want a simple type property and the 7 types can assign in bond constructor and remove the specify constraint. Writing can assign the first type or nothing by default and let specify take over."* The bond assigns and only assigns; the hard `$check` left `specify()`; no dispatch at birth — the specification's own `$hasType` rule is the enforcement, reported with the rest.
- **R127** — *"What if we have composition be dynamically typed, return writing, and not do the binding at all. Isn't that easier?"* Ruled easier AND more honest: the generic left `$Composition`, `bind`/`inside`/`bound` left `$Writing`, the read-as shell is DELETED — reading-as above the parse floor answers the standing writing itself. Two named costs accepted: stacks answer untyped compositions (callers narrow by `instanceof`), and `read()` answers `Promise<$Writing>` certified by standing.
- The naming dialogue ran per R125: **`reflection.stands` · `reflection.below` · `reflection.labels` · `parser.sentences/words/letters`** — three of five words his; the read-as needed no name, it needed deleting.

**DONE, verified `tsc -p src/tsconfig.json` with ZERO errors outside tests:** U1 the seven-level collapse (Document and File deleted, Chapter and Book absorbed them, `$$Document`/`$$File` gone, `Dt`/`Fe` codes dead) · U2 `type!: $Type` with the 7 defaulting via `??=` in their bonds and a carried type overriding (D31 as one operator) · U3 `Reflection.tsx` built, `Lib.tsx` and `$$` deleted from src · U4 the parse floor (three parser functions; a section implies at most ONE paragraph; sentence prose now makes words) · U6 codes as a name→code table in the Catalogue, the url seat · R114's indent write in the bond and R117's `$Phrase extends $Sentence` with `indent = 1` · the Table with `$columns`, the divisibility rule, and the parts-drawing view.

**U9 DONE — the whole gate green: `npm run test` = tsc 0 across src AND tests, vitest 25/25 files, 535 passed · 3 skipped · 0 failed.** The three skips are named U10 targets written into the tests themselves: the worn Card's reading (loops the renderer today), the means-anchor over a url-bearing Ref, and `read()` through the catalogue — the reference family is U10's round. The v1 archive suite stands at 286/287 with 6 files failing on the five pre-existing stale `librarycard` imports — measured at catchup BEFORE this build, not collateral.

**THE PROBES RETURNED, and the feasibility table called both:**
- **Solutions 45 FIRED exactly where predicted** — the rebuilt `$Table.view()` asked `parts()` and the worker died of heap exhaustion, the victim floating with load; convicted by only-mode bisection down to one test, cured by the law itself: **the view reads the block, it never parses** — a pure element read, columns chunking, nothing constructed. Second appearance of the same defect at the same seat; Solutions 45 updated rather than duplicated.
- **Solutions 29 ACQUITTED** — the R114 indent write in the bond was neutered as a differential and the crash did not move; restored as ruled, guarded to first assignment, suite green over it.
- **A third finding neither probe named:** chemistry's eager check calls `valid()`, and `valid()` forwarding to `specifically` was a birth dispatch wearing a boolean's clothes — with throws escaping through a seat that expects `true`/`false`. Under R126 `valid()` answers `true` and validity is specify's alone; **the bond-failure panels for model violations are gone with it**, which is a visible behavior change he should know about.

**Mechanisms that arrived during U9, each within a ruling and each standing for his strike:**
- **`parser.makes`** — the making registry, R102's sentence taken literally: Letter/Word/Sentence register their makers; **Paragraph and Section register the R120/R121 implied SINGLE wraps** (their class reduces dissolved), so a retyped arrangement rides its type's grade for free. R124's bond-block-editing remains the owed final home for the wraps.
- **`reflection.declared`** — D31's "the check asks the class before the type" kept: standing consults the writing class's own default type, read once off a memoized template.
- **`$References` declares its birth facts in its own bond** (`$pid` `'$references$'`, `persist`) — sprint 36's shipped persistence recalled at construction, which R126's specify-time granting alone could not honour. **His yes owed on this seat.**

# <a id="one-pass"></a>The one pass — built under "do as much as you can", 2026-09-03 evening

**THE CARD LOOP CONVICTED, AND THE EARLIER ACQUITTAL OVERTURNED:** the writer was R114's own bond write — `one.indent = this.indent + 1` on a CHILD chemical. Chemistry muffles self-writes during a bond; cross-chemical writes REACT (`chemical.ts:286`, documented intent), so every render's fresh derivative re-fired it: 522 bonds, 0 views, then React's re-render limit. The trait was innocent — a bare reference-in-reference reproduces it. The earlier differential had acquitted the write only because it was probing a DIFFERENT crash (the table view). **His "see if you can make that work" now has its answer: a cross-chemical bond write cannot work; the mechanism that does is R130's own** — the write is DELETED and the read-through gate consults declarations: same-family carried type AND (mutual level — section-in-section — OR the TEMPLATE's declared indent > 0, read off a bare `new` with no bond and no side effects: `reflection.indent`). `$Ref` declares `override indent = 1` — the gate immediately caught that its transparency had been riding the deleted write.

**Also landed, each traced:** the three missing written-as laws (a paragraph is written as sentences, a sentence as words, a word as letters — same-level permitted, corpus stayed green) · both `read()` bodies follow an address through `book().catalogue().follow()` per R72, external and route urls failing with spoken sentences · the Card test and the read() test UNSKIPPED and green · `book()` off `$Book` · the codes table out of the Catalogue, `reflection.code` assembling first+last with `prints` the one registry (R129's own suggestion) · stale quarantine comments swept.

**Gates fresh: tsc 0 on src/tsconfig, vitest 25/25 files, 537 passed · 1 skipped · 0 failed.** The one skip is the means-anchor test — a RULING, not debt (shape A: a Reference always mints a $Path from a url-copy; shape B: url joins the reference interface; the choice decides whether $carriesPath relaxes).

**ASKS STANDING (with the groundwork's signatures), still needing his yes:** `$Path.read(from)` as the proper one-home seat for the fragment walk (the two inline read() bodies say the same three lines twice today — flagged as the thing said twice) · the means-anchor shape (A or B) · the R95 corpus registry export (route→book map the app fills from the binder's books.ts; nothing consumes location.hash today) · the `references` seat at the book root (`focus()` mis-seats; the honest fix is a member or the seat moving — unknown-cast reach failed) · whether books may nest (gates `book()`-adjacent walks) · the gate/law disagreement: the read-through reads nested Chapters/Books through while their own specifications fail them — align which way? · the `declared()` side-effect note ($References's birth facts fire once per class during a stands walk — bounded, tied to the standing References ask).

**R134 — the book apparatus, given as brainstorm seeds (his hedges kept: perhaps/maybe/likely/hopefully).** His words, 2026-09-03 night: *"We need $Subject and $Author as... traits probably. They will likely need to be dynamic in a way things are usually not. Both will likely be dynamic. Perhaps every book that has a synopsis gets a strongly typed subject that goes along with it, and the compiler generates them. Maybe we make $$Book to be a trait and a reference at once using the type system, and subject and author are kinds of books. We can figure out how to register the books that are subject to being authors and subjects, but we should get with the binder (compiler) some strong typing on the names of subjects, because when the app is specified we will get errors at build time."* And the furnishings: *"We will need Cover, Synopsis, TableOfContents, Index (maybe more in it) and we will need to think about how all of these work in a way that can be evolved easily if needed. They can largely be compositional I should think, but then we need to build the parts in the framework that we need. We will likely want Illustration for the cover, and we might want Figure. Hopefully the Table will work for TableOfContents but we will need various types of references. For indexes, I believe we want to do something like one index that every book in the library views different, and it can be a master catalogue of ALL books in the library flattened. We want to find a compositional way of doing these things so that the specification can give us a lot of support."* **Brainstorm altitude — requirements and designs back for his ruling; nothing enters src on seeds.**

**R135 — the `$` convention, his shape:** *"The whole point of $ being disconnected DI is that it is trivial to run things through it. You need a code convention. Don't assign properties. Assign constants close to use. But you should be able to do this."* — the seat idiom is a CONSTANT at the seat, `const Sentence = $(Sentence)`, built from the local; never stored on a member.

**R136 — the self-evident change, asked and answered:** *"is there a self evident change that follows patterns and doesn't add lots of members or maybe even any members, but it uses decoration/composition and has look baseclasses on the topmost $X implementations? The types and specifications can inherit on purpose. They carry the polymorphism."* The three sweeps' convergent answer, presented for his ruling: **meaning inherits (type + specification chains, deepened on purpose); looks decorate (the class rail is the look rail — `$Writing.frame` the universal label seat, kinds override `view()` only); seats ask (every framework self-use fetches through `$` as a constant close to use).** Net members ≤ 0.

**THE AUDIT BENCH VERDICT (nine agents; 17 upheld · 5 amended · 2 rejected):** rejected — List/Table views onto `parts()` (Solutions 45 by name, second conviction dated this very day; the lawful door is specify-time materialization per the References pattern) and the Reflection DI seam (scope answers would poison the global memos — reflection stays class-fetched, the named exception). Seam count for a maintainer: ~11 concepts with two traps → six, no traps. The full unit register U11a–U19, the documentation register (five edits + ONE new chapter — the kind-spellings pattern), the 17-ask decision surface, and the ordered risks live in the audit output; rulings first, docs second (the timing law before the sweep — registration-before-first-parse is the one live two-populations form), the mechanical wave third, conditionals as ruled.

# <a id="extension-architecture"></a>The extension architecture — probed and designed, 2026-09-03 night, NOTHING IMPLEMENTED

*Seven agents: four mappers (one ran a 7-probe vitest file against the live lib, green then deleted), an architect, a skeptic at full effort, a synthesis. The audit-review-plan sweep Doug chartered runs beside it; this section is the probed half.*

**THE DI TABLE, per seat, for "can't you just DI sentence?":** the five makers + `$Ref.reduce` — **NO** (eval form binds the literal element type; `askedFor` never on the synthesis path, `chemical.ts:480-497`); plain JSX `<Sentence>` in a view — **NO**; an explicit ask `$(Sentence)` inside an asker window — **YES**, probed, drew its mark (`chemical.ts:1554-1571`); the specimen route on a written sentence — **NO** (`formula` gate; only `$Type` is a formula); **the TYPE seat — YES twice over**: `<Type>Name</Type>` swaps at paint AND re-resolves its specimen through `$` with the writer as asker (`chemical.ts:1029`) — the type is DI-able where the class is not; `$Phrase` when Sentence is registered — **NO**, a Phrase IS a Sentence by class and holds no inner to swap, which is the decoration argument stated by the machine itself.

**SPECIFICALLY'S LADDER, measured:** proven — enforce (aggregated failures, waivable by rule-name override), augment (References/Index creation, Law-44-shaped), configure (`$pid ??=`, persist), dress-by-standing (pd- labels). Its ceiling: it runs after construction and outside the paint — **the styling-and-structure rail, never the construction rail**. Call regime stated honestly: `specify()` has zero production callers except the binder's CHECK and tests.

**THE RECOMMENDED SHAPE (skeptic: holds, with structural conditions):** Move 1, makers that ask — six one-line edits resolving each maker's component through `$` before evaling; lawful (pure read), perf-bounded (~1,700 walks / ~7,600 constructions per deep parse). Move 2, decoration where rendering flows — `$Phrase` + the Ref chain render through a held inner fundamental (Law-29 probe mandatory for the parsed-while-mounted case); `$Title`/`$List`/`$Table` get per-kind rulings — their views build their own DOM so decoration buys model-substitution only, and Table argues against on Solutions-45 grounds. Move 3, the type rail always — pd- CSS, consumer types, the written-type formula channel. **THE KEYSTONE CONDITION:** scope reach requires lineage and the demo's books are module-scope roots — every scoped claim is conditional on books born inside a scope's bond (or held via `on=`); until that canon ruling, the honest global override points are `parser.makes.set` and `prints.set`.

**DEFECTS FOUND EN ROUTE:** `$Title.frame`/`$List.frame` return `view()` and skip label emission — pd-title/pd-list never reach the DOM (one line each, his yes) · the persist accessor lacks an equivalence guard (re-specify churns hydration; fence before the configure pattern is taught) · first-wins name sealing (`chemical.ts:1007`) means a consumer's type can never re-seat a base name — ruling owed.

**HIS OPEN QUESTIONS, from the synthesis:** first-wins sealing intended? · is RENDERS-THROUGH an accepted revision of shells-over-types, said out loud? · who calls `specify()` in production and how deep? · are module-scope books canon, or do books move inside scopes (everything scoped hangs on this)? · does the idle facade channel become the dress rail in a later pass (subsuming the hardcoded Prose/Heading/Article/Body imports)? · when decoration lands, is Phrase+Ref honest enough?

# <a id="where-things-stand"></a>WHERE THINGS STAND — the sprint CLOSES here, 2026-09-03

**HANDED OFF. The next session opens on [Sprint 39 — The Road](41-sprint-39--the-road.md), which opens at Wave 0: the decision surface walked with Doug.** This sprint ran one day: brainstormed at dawn (R100–R122), built U1–U9 by noon, ran the one pass and the three sweeps by night (R123–R136), and composed its successor at Doug's word — *"compose, then compound and handoff and we can meet again for the next sprint."*

**Verified at the close, fresh runs:** `npm run test` exit 0 — tsc 0 on `src/tsconfig.json`, vitest **25/25 files, 537 passed · 1 skipped · 0 failed**; the skip is the means-anchor, a Wave-0 ruling, its comment naming its round. v1 archive 286/287 on pre-existing stale imports. **63 uncommitted paths — the push is Doug's call, with the commit tool.** Chemistry untouched all sprint.

**Compounded (edit-first, two chapters):** [Solutions 45](../solutions/45-the-view-that-constructed-its-parts.md) — second appearance at its own seat, the view that cannot construct as the durable cure; [Solutions 29](../solutions/29-the-bond-that-woke-the-tree-it-was-building.md) — second appearance through its own left-open door (the cross-chemical indent write), plus the instrument lesson: **a differential acquits only the crime it probes.**

**Wrong turns, so nobody retries:** the generic's cast (died with R127); the accept-nothing hole in untyped compositions; the birth dispatch added and removed within the hour (R126 arrived mid-build); the table view asking parts() — Solutions 45 by name; the bond indent write — Solutions 29 by name, first acquitted by a differential aimed at the wrong crash; the `$Composed` alias import (deduped); three python escape stumbles (raw strings for regex-bearing patches).

**THE LIVE PLAN IS [CHAPTER ZERO](00-planning.md#the-road)** — at Doug's order, all remaining work compiled there as THE ROAD TO THE WIKIPEDIA DEMO: the Wave-0 decision surface (28 items batched by what each gates), the docs wave, the mechanical sweep, the conditionals and Ref remainder, the book apparatus, the binder's return, the demo. This chapter holds the rulings and the record; chapter zero holds what is intended next.

**U1–U9 BUILT AND GREEN, 2026-09-03, in the same session as the brainstorm.** The numbers, each from a fresh run: **`npm run test` exit 0 — tsc 0 errors on `src/tsconfig.json` (src and tests both), vitest 25/25 files, 535 passed · 3 skipped · 0 failed of 538.** The three skips are U10's named targets, written as `it.skip` with the round named in a comment beside each. v1 archive: 286/287, its 6 red files the pre-existing stale `librarycard` imports from before this build. **NOTHING IS COMMITTED — the push is his call.** Chemistry untouched throughout; every cure that might have been chemistry-side turned out lib-side.

**What U10 opens on:** the three skips, the means-url question (`means` finds a `path`-bearing element, so a markdown-form Ref without a `<Path>` child draws no anchor), `$Path.read`, the `$$X` reference walk, and R95's route half.

**Asks standing for his review, none silently decided:** the `$References` birth facts in its own bond; `valid()` returning `true` (panels gone — validity speaks only at specify); the implied wraps living in `parser.makes` until R124's bond block-editing; `reflection.declared` as the class-standing seat; the proxies `makes` · `chain` · `declared` · `levels` beside the dialogue's `stands` · `below` · `labels`. Wrong turns recorded: the generic's cast (deleted with the generic, by his own R127), the accept-nothing hole in untyped compositions (restored to accept-all), the birth dispatch added and removed within the hour (R126 arrived mid-build), and the table view asking `parts()` — Solutions 45's second appearance at the very seat it names.
