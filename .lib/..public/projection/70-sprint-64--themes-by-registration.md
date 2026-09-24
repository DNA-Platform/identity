# Sprint 64 — Themes by Registration

- **author:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **coauthor:** [Gabby](../../../../.claude/library/..teamsmanship/..team/gabby/gabby-and-the-visual-voice/.cover.md), [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **style:** [The Coding Style](../the-coding-style/03-the-coding-style.md)
- **status:** `implementation-ready` — *brainstormed and planned 2026-09-12, night; Doug: "First, implement this in the natural way with the latex one"; out of [Sprint 63's](69-sprint-63--the-encyclopedia.md#stand4) two lists; the chemistry half is with the other session.*
- ***The chapter name is a proxy; Doug's to rename.***

---

***Doug, the brief, verbatim:*** **"All text on our page starts blue and turns black far later. What are you doing with theme resolution that it isn't resolving correctly? We need the theme to NEVER be wrong and it's a bug if on ANY render the theme is wrong."** · **"We write this framework, you hack your own code. I need you to fix this everywhere… The goal is code that is implemented to naturally fit into its environment. It sounds like themes need to be singletons that are bound to the document."** · **"The book is not actually a parent in the tree sense. If you want page scope, just register globally. Registering to the document type is the most general way. Register document to Document, register everything to that type of document."** · **"Maybe the best way to do the theme is to register a singleton globally. Everyone gets that."** · **"You can do 'single' as the token."** · **"Right now, registration is by hand. When you create custom things and they are meant to be registered not imported, you register them yourself."** · **"What if we get rid of .chapter entirely, everything goes into .book, and you can create your own document and book and chapter if you like, and in the $register of your book, you are expected to wire up your document."** · **"Do we even get any value out of having a cover document class, a synopsis or table of contents? Maybe those should just be types… It's not polymorphic. The book can validate. So that it's not so complicated to have polymorphism on Document. You simply type it."** · **"It does where it always should have been — in the specification of the type."** · **"Yes latex-style theme hack should be removed. In fact, let's test that this works through latex first."** · **"Reregistering would be more elegant, and then you can have different themes that control the different aspects of appearance. It's a great test of the flexibility of our DI theme system."** · on the flow across chapters: **"It can be a component the encyclopedia registers as a singleton in the Encyclopedia book $register, and a document can DI it and put things in it, and then the book puts things where it wants."** · **"No hacks. We need the solution that is right for this framework."**

## <a id="read"></a>What the code says, read before the requirements

- **A theme is found today by a walk.** [`reflection.theme`](../../package/src/utilities/Reflection.tsx) walks a writing's parents for a `$Theme` annotation and falls back to the base template; a parent whose bond has not run has no block, so the first draw of anything beneath it falls back. **That fallback is the blue first paint.**
- **The theme is worn by concatenation.** [`$Book`](../../package/src/library/Book.tsx)'s bond concatenates `Theme` into its block when none was written; DI swaps in the registered sheet. The LaTeX book's `wears()` re-registers and then **filters its own block by hand** to swap the annotation — the file itself says those lines belong in `$Book` and cannot live there. **That is the hack to delete.**
- **Registration already has scope, reach and asker**, the later of equals wins, and as of chemistry `249758a` a registration may say `'single'`: *for A, a B is THIS ONE C.* The base theme's `static $register(within)` is already `$(within, Theme)($(this))`.
- **A book is not a lineage parent.** Chapters' documents are made by chapter components; nothing beneath a document reaches the book by chemistry's lineage. Scope is the document's, or global.

## <a id="requirements"></a>Requirements — `requirements-only`

Each names what is observed when it holds.

- **R1 · A theme is a registered singleton.** The page's theme is registered once, globally or for a document type, with `'single'`; every ask for `Theme` from anything drawn answers the same instance. *Observed:* two asks from two writings are identity-equal; the LaTeX paper registers `$ArticleTheme` this way and draws.
- **R2 · A theme is asked, never walked, never worn by concatenation.** A writing's `theme` is an ask in its own scope; `reflection.theme`'s walk and its base-template fallback are deleted; `$Book` no longer concatenates a theme, and the package registers the base `Theme` globally so an ask always answers. *Observed:* on `/turing` and `/latex` the first paint is in the registered theme — a probe reading the colour of a meaning anchor within the first frame after load finds the theme's colour, not the browser's blue; and no render ever differs from the last.
- **R3 · Switching is re-registering.** The LaTeX paper's switch registers `$MarkdownTheme` `'single'` and the page re-draws; `wears()` and the block filtering are gone. *Observed:* pressing Markdown changes the paper's look with no reload; `verify:latex` drives both readings green. **Depends on chemistry: an ask re-draws when its registration changes** — asked of the other session; if it cannot, the switch writes the one singleton's values instead and this sprint says so.
- **R4 · `.book` carries the book and what is its own; `.chapter` is gone.** A book's file declares its book, its document kind, its theme registration, its custom kinds and formats, and a `static $register` that wires them by hand — the document kind registered for `Document`, and everything else to that document type. Chapters extend the package's `$Chapter`. *Observed:* `find .wiki .latex -name .chapter.tsx` is empty; both demos draw as before.
- **R5 · Cover, synopsis and table of contents are typed documents.** `<Cover>`, `<Synopsis>` and `<TableOfContents>` are the book's document carrying a type; what each did as a class — the synopsis parenthetical until printed, the contents' rows — lives in that type's specification; the book finds them by type through reflection and validates. *Observed:* the three classes are gone from `src/library`; the paper's cover, synopsis and contents and the Turing page's are unchanged to their gates.
- **R6 · One flow across chapters.** A component the encyclopedia book registers as a singleton in its `$register`; a document obtains it by DI and puts its writing into it; the book places it where it wants. *Observed:* on `/article` the section after the lead wraps beside the manual; on `/turing` "Early life and education" wraps beside the infobox. **Design owed:** the path by which a document puts writing into a component elsewhere is designed at plan time, not assumed — Doug: *"Is there a path?"*
- **R7 · The appearance panel re-registers themes.** Light, Dark and the sizes are themes; choosing one registers it `'single'` and the page re-draws — the same mechanism as R3, on the encyclopedia. *Observed:* Dark on `/turing` turns the page dark live; Large grows the text. Depends on R3.
- **R8 · A contents row's word navigates and its arrow toggles**, never both from one press. *Observed:* the driver clicks the word and the row stays as it was; clicks the arrow and the row opens.
- **R9 · `@media` emits in the right order** — chemistry's, the other session's, an `@media` decorator. *Observed here:* the rail is 248 wide at 1920 and no width below 1120 scrolls sideways, the two cases Sprint 63 measured.

**Out of scope, by ruling:** the package loop (*"not for now"*), a reader cache (*"you don't make decisions like this"*), paragraph formats for essential types (*"we would have to have designed this"* — a pitch), and every stylistic item on [Sprint 63's list](69-sprint-63--the-encyclopedia.md#stand4), which is one cleanup with the gates at the very end.

## <a id="actors"></a>Actors

- **A1** the reader of a page, who must never see a wrong theme, on any render.
- **A2** the author of a book, who registers what is the book's own in `.book` and writes chapters that extend the package's `$Chapter`.
- **A3** the author of a theme, who declares a sheet and registers it as a singleton, globally or for a document type.
- **A4** the other session, which holds chemistry: `'single'` (done), the `@media` decorator (dispatched), the re-draw on re-registration (asked).

## <a id="flows"></a>Flows

- **F1 · The LaTeX proof, first.** The paper's `.book` registers `$ArticleTheme` `'single'`; `wears()` is deleted; the switch re-registers `$MarkdownTheme`; `verify:latex` drives both readings. *Realises R1, R2, R3.*
- **F2 · First paint on Turing.** With R2 in place, the encyclopedia theme is asked by every writing; a first-frame probe joins the wiki gate. *Realises R2.*
- **F3 · The book file.** `.chapter.tsx` removed from both demos; `.book.tsx` registers document and theme; the reader writes chapters that import from the package and `./.book`. *Realises R4, R5.*
- **F4 · The flow.** The encyclopedia's `$register` registers the flow component; documents put their writing into it; the manual and the infobox stand in one flow. *Realises R6.*
- **F5 · Dark.** The appearance panel re-registers. *Realises R7.*

## <a id="acceptance"></a>Acceptance examples

| | example | could a hand-authored page fake it? |
|---|---|---|
| **AE1** | `verify:latex` green with `wears()` deleted and Markdown chosen | no — the switch is the mechanism |
| **AE2** | a first-frame probe on `/turing` reads the meaning anchor's colour as the theme's, never blue | no — timing, not markup |
| **AE3** | two asks for `Theme` from two writings are the same instance | no — identity |
| **AE4** | `/article` wraps its second section beside the manual | no — floats do not cross boxes by prose |
| **AE5** | Dark chosen on `/turing` turns the page dark with no reload | no |
| **AE6** | the driver clicks a contents word and the row does not open | no |

## <a id="risks"></a>Risks

*Compacted 2026-09-12: K2, K5, K6 and K7 fired and are answered in the stand and in [Solutions 73](../solutions/73-the-theme-that-arrived-on-the-second-paint.md); K1 was overtaken by the reassignment; K3 and K4 moved to [Sprint 65](71-sprint-65--the-encyclopedia-finished.md).*

## <a id="order"></a>Order

*Compacted 2026-09-12: U1 and U2 ran; the rest is [Sprint 65](71-sprint-65--the-encyclopedia-finished.md).*

## <a id="handoff"></a>The chemistry handoff, 2026-09-12, night — what each contract changes here

- **`'single'` is identity and persistence, not broadcast.** One instance, bonded once through its own component, shared by every mount and outliving them; a chemical that only reads its member in a view is not woken by a write to it. *So the panel switches by re-registering, never by writing the singleton.*
- **The emit owns the order of a ranged level.** Plain levels first, then `max-width` descending, then `min-width` ascending; no new spelling. *So the two measured reds are re-measured, not re-written.*
- **A registration re-draws what it reaches.** A scope registration reacts what the scope mounted; a class-root registration reacts every mounted instance of the type; nothing before a render context; refused inside a draw, allowed in a handler. *So the switch is a handler that registers.*
- **`registered()` walks the class chain by name.** *So every theme registered is a named class.*
- **An ask is `$(Component)` with a current asker** — the chemical bonding or drawing — walking its lineage, each step answering from its own catalogue and then its class chain. Outside a draw there is no asker and the ask returns the component itself, whose representative is the base template — which is the base theme.

## <a id="decisions"></a>Decisions

### <a id="d1"></a>D1 · ***A theme is asked, and the sheet is worn once, by the book's view***
`reflection.theme(writing)` becomes an ask; `reflection.formatted` wears the asked theme for the book kind only, since the sheet is one per page. *Chosen over* keeping the annotation in the block, which is the two-phase paint, and over wearing per document, which is a sheet per document.

### <a id="d2"></a>D2 · ***The book's file registers, by hand, what is the book's own***
Its theme `'single'`, its document kind, its chapter class, its link kinds, its formats. *Chosen over* a package default the book cannot see — Doug: "you register them yourself."

### <a id="d3"></a>D3 · ***Where the lineage does not reach, the document kind registers too***
Measured in U1 by identity: if a chapter's document does not find the book's registration, the document kind registers the same held instance, and the record says so. *Chosen over* assuming either way.

### <a id="d4"></a>D4 · ***A switch is a handler that registers a named theme***
*Chosen over* writing the instance, which does not broadcast.

## <a id="units"></a>Units

### <a id="u1"></a>U1 · ***The LaTeX proof*** — D1, D2, D3 · F1
**Mechanism:** `$Theme.$register(within)` registers `'single'`; the paper's `.book` carries its chapter class, registers `$ArticleTheme` so, and deletes `wears()`; its switch handler registers `$MarkdownTheme`; `$Book`'s bond stops concatenating a theme and its specification asks instead of counting; `reflection.theme` asks; `reflection.formatted` wears the asked theme at the book. An identity test asks `Theme` from the book, from a chapter's document and from a paragraph, and expects one instance.
**Files:** `.latex/aaronson/.book.tsx` · `.latex/aaronson/.chapter.tsx` *(deleted)* · `src/writing/Theme.tsx` · `src/library/Book.tsx` · `src/utilities/Reflection.tsx` · the public suite.
**Visible end:** ***the paper switches to Markdown by registration alone, `verify:latex` green on both readings, three asks one instance.***

### <a id="u2"></a>U2 · ***First paint on Turing*** — D1 · F2
**Mechanism:** `.wiki/.article/.book.tsx` registers `$EncyclopediaTheme` `'single'`; a first-frame probe joins the wiki gate.
**Visible end:** ***no blue on any render.***

### <a id="u3"></a>U3 · ***The book file*** — D2 · F3
**Mechanism:** `.chapter.tsx` deleted in the wiki demo; `.wiki/.article/.book.tsx` carries the book, its document kind, its chapter class, the theme registration and the four link kinds; the reader writes imports from the package and from `../.article/.book`.
**Visible end:** ***no `.chapter.tsx` anywhere; both pages draw as before.***

### <a id="u4"></a>U4 · ***Cover, synopsis and contents as typed documents*** — R5
**Mechanism:** each a type with a specification and a component writing the book's document carrying that type; the book finds them by type through reflection; the contents' rows made by its specification or written as rows — decided with the code open.
**Visible end:** ***the three classes gone; both gates unchanged.***

### <a id="u5"></a>U5 · ***The appearance panel re-registers*** — D4 · F5 — *design owed: how three aspects compose into one named class.*

### <a id="u6"></a>U6 · ***One flow across chapters*** — R6 — ***design owed, not a unit yet.***

### <a id="u7"></a>U7 · ***The contents row's word and arrow*** — R8
**Mechanism:** `$Summary.view()` follows a link pressed inside it without toggling; the arrow toggles.

### <a id="u8"></a>U8 · ***R9 re-measured*** — the gates once, at the end.

## <a id="risks2"></a>Risks, continued

*Compacted 2026-09-12: K2, K5, K6 and K7 fired and are answered in the stand and in [Solutions 73](../solutions/73-the-theme-that-arrived-on-the-second-paint.md); K1 was overtaken by the reassignment; K3 and K4 moved to [Sprint 65](71-sprint-65--the-encyclopedia-finished.md).*

## <a id="order2"></a>Order

*Compacted 2026-09-12: U1 and U2 ran; the rest is [Sprint 65](71-sprint-65--the-encyclopedia-finished.md).*

## <a id="stand"></a>Where things stand — ***2026-09-12, the close: handed off to Sprint 65***

**Next action: `/ce-work` on [Sprint 65](71-sprint-65--the-encyclopedia-finished.md), starting at its U1.** This sprint is closed; nothing here is resumed.

**Doug's rulings on the way, verbatim:** *"Put a theme property on writing. It asks parent for theme. On document and book, have it store and make theme instead. One property and two overrides."* · *"The theme is for the whole book — register the theme to $Book."* · *"specifically shouldn't create the theme. It validates that it's assigned if anything. You can have this done in the bond constructor."* · *"Okay let's call this a success. It's slow but we'll just have to handle that later."*

**Complete, each line measured, at commit `02cee14`, nothing pushed:** a writing's `theme` asks its parent through `reflection.above`; a book and a document make theirs in their bond by `$check(theme, '!')` and their specifications say one is there; the package loads the bare theme on `Book`; the paper's and the encyclopedia's books register theirs on `Book` as one instance; the paper switches by handing the book another, which runs down to its documents; the wiki entry opens one book by route so one registration stands; `reflection.theme` walks nothing. The Turing page, the Manual of Style and the portal wear the right theme on first paint, zero blue anchors, zero errors; `verify:latex` green on both readings; the suite 101 of 101 with the five theme tests rewritten to the ruling. The paper's `.chapter` and `.document` folded into `.book`.

**Not done here, carried to Sprint 65 by anchor:** U3 to U8 — the wiki's `.chapter` files, the three typed documents, the appearance panel, the flow across chapters, the contents row's click, the gates.

**Blockers:** none. The switch's two to three seconds is a unit there, not a blocker.

**Wrong turns, so they are not retried:** registering a paragraph kind on a menu; reaching a theme by walk at draw; a declared-only field as a store; a field initialised from reflection at module load; a separate sheet chemical handed the same book, which kept its last drawing; and a package rebuild without re-binding the demo, which served last hour's switch for an hour — [Solutions 72](../solutions/72-the-mirror-with-two-directions.md) to [77](../solutions/77-the-prefix-that-took-the-base-s-rule.md).

**Pointers:** [Solutions 73](../solutions/73-the-theme-that-arrived-on-the-second-paint.md) — the defect and the design in one place; [the motif on themes](../the-motif/04-themes-per-type-formats-per-instance.md#built) — what stands and what is not built; the paper's [`.book.tsx`](../../package/.latex/aaronson/.book.tsx) — the shape the wiki copies.
