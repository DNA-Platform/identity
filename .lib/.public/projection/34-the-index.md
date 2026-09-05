# The Index

- **author:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **coauthor:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md), [Libby](../../../../.claude/library/..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)
- **status:** `closed` — ***brainstormed, approved ("Approved", with his correction executed the same hour), BUILT and compounded in one session, Doug ruling live throughout. The infrastructure is the sprint's work; the kinds ride to book territory. [Where things stand](#where-things-stand) is the handoff — written to OURSELVES, since the session continues past its own compaction.***
- **style:** [The Coding Style](../designing-inexplicable-phenomena/11-the-coding-style.md) — *the rules in force.*

---

# <a id="which-part"></a>Which part of the plan this sprint accomplishes

***This is SPRINT FOUR OF FIVE in [the reference plan](00-planning.md#the-reference-plan).*** **The plan's own line:** *"$TypeOfIndex, base and decorator; the library index as an always-loaded chapter; breadcrumbs; bookmarks and the highlighter; the trail."* **And the plan's warning stands: [chapter zero's v4 agenda](00-planning.md#v4) is four questions, none answered when the plan was carved.**

***It inherits from sprint three:*** **the catalogue system whole** — `catalogue()`, `comprehend`, `concatenate`, the printing, `read()`, `address`/`follow` — **and two holds at Doug's word:** *[the rooms](33-the-handle.md#open) ("don't run off and try. It requires serious thought") and the upward url that rides them.*

# <a id="rulings"></a>What Doug ruled at this brainstorm, verbatim

| | |
|---|---|
| **what the index IS** | *"**Index is a number that is related to the composition.** In books it will be the index in the table of contents of synopses of books. **The first will be the canonical of the subject.** First of type in type section will be canonical of type. We have to figure all of that out."* — ***position encodes canonicality; first is canonical.*** *The deleted `canonical(): T` representative returns as a READING of position — [chapter zero predicted the seat](00-planning.md#plan-blockers): "the canonical returns as a question in sprint four."* |
| **the deferral** | *"This is book stuff. We aren't there yet. But you can use parts. **We don't have a type of chapter called a synopsis yet, and so we don't know book index. Just give every book an index of 0 for now, as I initialized it. It should be a number. And do the rest according to parts.**"* — *book-index waits on the synopsis chapter-type; every book keeps its initialized 0; the position-canonicality semantics live at PARTS for now.* |
| **the closure note** | *"**The library is closed under books, but cataloguing doesn't stop. Nothing catalogues books right now**, right? So we will have to figure out how to represent that. **We will get there.**"* — ***VERIFIED in code: no `$Composition<$Book>` exists; the cataloguing surface stops one rung short of [the closure](../the-semantics-of-books/10-closure-under-books.md).*** |
| ***the sprint's true center*** | *"It's not deferred but it is index zero for now. **It is at the top of the pyramid. Uncatalogued.** What we are really designing is **something like the bookmark and highlight system. Within book references. A bookmark goes from current book down to page. A highlight goes from current book down to range of letters.** We can make others too but **I want those two to be our current two**."* — ***within-book = all glide, no jumps: the system sits inside the rooms-hold by construction, and [`address`/`follow`](33-the-handle.md#checklist) are its down-walk.*** *The range returns from [its raise-and-withdrawal](32-the-route.md#the-range) on schedule — "that's for a bookmark" was exact. **One flag per [the discipline](00-planning.md#naming-discipline): "down to page" against [sprint 19's no-page ruling](.cover.md) — read as the reading position at document grade, his to correct.*** |

## <a id="typed-steps"></a>The typed steps — his proposal, measured and standing

***Doug: "What if we put a type? `Bk:0/Cr:1/Sn:2/...` — first and last of the typename and punt on collisions right now because we have a fixed 9 so assume those 9, where book overrides File and so too for chapter and document."***

**Measured: the scheme is COLLISION-FREE across all nine without the punt** — `Lr` `Wd` `Se` `Ph` `Sn` `Dt` `Fe` `Cr` `Bk` all distinct, the working vocabulary seven with Book/Chapter overriding File/Document. **The type makes `follow` self-checking** — a step landing on the wrong kind throws naming both, sprint one's mismatch law given teeth, and a cheap cousin of the slug. **The codes take [D7's seat](32-the-route.md#d7): on the types, overridden down.** *[O2's `Nu` question](32-the-route.md#open-nu) dissolves — the scheme answers what the letters are.* `:` *is legal raw in a fragment, so* `#Bk:0/Cr:1/Sn:2` *pastes clean.*

***And the range ruled in the same breath:*** **span in the terminal step — `…/Wd:2/Lr:3-9` — with the upper bound UNBOUNDED** *("the upperbound for everything is inf: if a word has 1000000 characters, Lr is in that range right?")* — **clamped at read, never validated at write.** *"This is going to be an anchor id so as long as it's legal do that"* — **legal on both faces: RFC 3986 admits `/` `:` `-` raw in fragments (the hash-router era wrote `#/` across the whole web), and HTML5 ids admit all of it.** *The bookmark is the same walk stopped early; the highlight runs it to the floor with the stretch in the last step.*

# <a id="agenda"></a>The inherited agenda, held beside the new rulings

1. **[Chapter zero's v4](00-planning.md#v4):** base vs decorator mechanics *(what does an index look up, and where)* · the trail as stack or narrative · where the trail lives — **[the three `perhaps`](30-the-reference.md#the-three), all landing on the reader's trail-book, both axes agreed to PROTOTYPE** · the partially-loaded book *(half-dissolved by [sprint two's gate](32-the-route.md#drawing-is-linking): drawing a reference draws the link)*.
2. **The label question feeds from [the owed summary/excerpt spec](00-planning.md#summary-and-excerpt)** — *"type of synopsis will be a type of summary"* — **which is also the missing synopsis chapter-type that book-index waits on.**
3. **[The rooms](33-the-handle.md#open)** — held; four designs around the hold, not through it.
4. ***The `canonical` word carries [a documented three-way overload](00-planning.md#plan-blockers)*** — *the boolean on writing, the class on the type, and the representative* — **the representative's seat is empty and unclaimed, and any refill must not collide with the other two.**

## <a id="bookmark-ruled"></a>The bookmark's landing, and an idea filed

***Doug: "Down to chapter. My bad"*** — **the bookmark stops at chapter grade, `Bk:0/Cr:1`, and the word page is withdrawn by its own author; [sprint 19's ruling](19-the-binding.md) stands untouched.** *And two ideas floated in the same conversation, filed at [the certainty ladder's](30-the-reference.md#certainty) low rung rather than as requirements, both his and both self-closed "not for now":* **"maybe we could take screensize, take an index on it based on where the person is and index that! That would be cool"** *— a viewport-relative deeper index —* **and "maybe bookmark just goes to chapter and then has an interaction that takes them to section or paragraph… Depends on where we allow them to mark it! Not for now."** *Both await the kinds' own sprint in book territory.*

# <a id="requirements"></a>Requirements

*Numbered on from [sprint three's R46](33-the-handle.md#s14) and never renumbered.*

<a id="r47"></a>**R47 · Doug.** ***The index is a number related to the composition; canonicality is positional — first is canonical.*** *A book answers 0: the top of the pyramid, uncatalogued.* **Observable: `index` is a number everywhere; every book answers 0; the canonical of a parts-grouping is what stands first.** *Book-grade index semantics (the ToC of synopses) wait on the synopsis chapter-type and are named, not smuggled.*

<a id="r48"></a>**R48 · Doug.** ***THE INFRASTRUCTURE for the within-book reference system — not the kinds:*** *"we aren't building bookmark yet. That would go in book. We are building the infrastructure for it."* **The address grammar must EXPRESS both current kinds — a bookmark as the walk stopped at chapter (`Bk:0/Cr:1`), a highlight as the walk run to a span of letters — and the kinds themselves arrive in book territory later.** *"We can make others too but I want those two to be our current two."* **Observable: both shapes print and follow back to what they mark, with no bookmark or highlight class existing.**

<a id="r49"></a>**R49 · Doug.** ***Typed steps: a level's code is the FIRST AND LAST letters of its typename, living on the types, Book overriding File and Chapter overriding Document.*** **Measured collision-free across all nine** (`Lr Wd Se Ph Sn Dt Fe Cr Bk`), *the working vocabulary seven; kinds inherit their level's code — a Title walks as `Ph`.* **Observable: each type answers its code; no two collide, promised rather than inspected.**

<a id="r50"></a>**R50 · Doug.** ***The printed address:*** `Bk:0/Cr:1/Sn:2/Ph:0/Se:1/Wd:2/Lr:3-9` — **the book's own step first, the span in the terminal step, the upper bound UNBOUNDED and clamped at read.** *Legal on both faces: RFC 3986 fragment and HTML5 id.* **Observable: paste the fragment, land on the thing; a million-letter upper bound is not an error.**

<a id="r51"></a>**R51 · derived.** ***`follow` is self-checking: a step landing on the wrong kind throws naming both codes*** — *sprint one's mismatch law given teeth by the type in the step* — **and a spanned terminal answers the bare composition of exactly that slice.** **Observable: a stale address that lands on a section while wearing `Ph` fails; `Lr:3-9` answers seven letters.**

<a id="r52"></a>**R52 · design owed, named.** ***Persistence*** — *where bookmarks and highlights LIVE is [the three `perhaps`](30-the-reference.md#the-three) territory (the reader's book, browser-held, anonymous readers), the one item both axes agreed to PROTOTYPE; and [R27 from sprint two](32-the-route.md#r27) lands here.* **Denied files until its shape is chosen.**

# <a id="demo"></a>The demo — designed beside the requirements

***The unfakeable thing: addresses the model prints that a walk verifies from the other side.***

- <a id="ae15"></a>**AE15 — the bookmark round trip.** *Print a chapter's typed address from its book, follow it back, land on the very chapter — identity.*
- <a id="ae16"></a>**AE16 — the highlight's stretch.** *`…/Wd:2/Lr:3-9` answers a composition of exactly those letters, copies proving the span; an unbounded upper clamps instead of throwing.*
- <a id="ae17"></a>**AE17 — the wrong-kind failure.** *A step wearing `Ph` that lands on a section throws naming BOTH codes — the address caught its own rot without a slug.*
- <a id="ae18"></a>**AE18 — typed and returned.** *A deep letter's address prints with every step typed, and the fragment pasted through `follow` returns the letter.*

> *The standing surface flag: these land in the spec harness; a driven page still awaits the surface decision.*

# <a id="checklist"></a>The checklist

- [x] Sprint three closed and compounded in the same session; the room's context carried whole
- [x] Doug's index redefinition captured verbatim — position encodes canonicality
- [x] The deferrals recorded: book-index behind the synopsis type; the closure's top rung named unbuilt
- [x] Doug's word on what four builds: **the bookmark and highlight system — the two current kinds of within-book reference**
- [x] The bookmark's landing ruled — chapter grade, the page word withdrawn; the screensize idea filed as floated
- [x] The range ruled — span in the terminal step, unbounded upper, clamp at read
- [x] Requirements written — **R47–R52**
- [x] The demo designed beside the requirements — **AE15–AE18**
- [x] **THE INFRASTRUCTURE BUILT** — codes on the nine types (first-and-last, collision-free promised) · typed self-checking `follow` (wrong kind throws naming both; bare indices tolerated) · the span terminal with unbounded upper clamped · typed `address` · the bookmark shape proven (`Cr:1` round-trips)
- [x] **THE BATCH ANSWERED AND EXECUTED**, four rulings in one breath: ***descent-only fragments*** — *"Okay you can start at Cr — no harm there"*; ***THE GATE: "Approved"*** — **with the correction executed the same hour:** *"the path here is part of the url of the reference (the path) and should be held by the handle not on the writing"* — **`address`/`follow` came OFF writing; the CATALOGUE is the address authority, recursing through catalogues; every printed handle now CARRIES its path** (`Cr:1` written into it at consultation); ***the strikes:*** **`composes` struck** (*"what are you anthropomorphizing? Nothing is composing"* → **`writtenAs`**, a proxy from the specs' own *written-as* phrase, his to strike again) **and `$points` struck** — *"the reference is attached to the content and viewing a reference is viewing its clickable path; it is the writing with the reference (its meaning) that displays a clickable thing around its content"* — **`$carriesPath` restored, `$Reference.view()` draws its clickable path, `$Writing.view()` wraps its content in its meaning's anchor** *(this supersedes sprint two's the-reference-draws-the-anchor reading of O1)*; ***the scope:*** *"Use what is said in the plan. If it includes bookmark and highlight then we will do it"* — **the plan's row includes bookmarks and the highlighter: satisfied as the grammar and the path-carrying handles, the KINDS still going to book territory per his earlier word.** — **tsc 0 · 21 files · 360/360**
- [x] **Requirements approved by Doug — the gate** — *"Approved"*, with the correction above executed
- [x] **`writtenAs` re-seated on his two rules** — *"You want to minimize properties in the library"* and *"I stubbed things already. Fit to them"* — **the accepted-kind moved off the class onto the TYPE, beside `code`, in `canonicalForm`'s own getter shape**; the class-side member and the prototype-walking fallback both deleted; a configured composition reads its own type. *A field was tried first and six reds caught the real law: a plain field on a chemical is reactive and the membrane wraps CLASS VALUES, breaking `instanceof` — class-valued type members are getters, which is what `canonicalForm` had been saying all along.* — **tsc 0 · 21 files · 360/360**
- [x] **Compounded** — [Solutions 38, the sections that collapsed into one paragraph](../solutions/38-the-sections-that-collapsed-into-one-paragraph.md), with the new keyword `wrapped-value`; the rest of the queue rides in [Where things stand](#where-things-stand)
- [x] **The catchup skill authored** — [our-skillset 34](../../../../.claude/library/our-skillset/34-catchup.md), Libby with Arthur, at Doug's request, and compiled

# <a id="where-things-stand"></a>WHERE THINGS STAND — 2026-09-01, the handoff to ourselves

## The next action, as a command

***After Doug compacts: `catchup 20` — twenty grep-found documents, relevance = THE OPEN LIST BELOW.*** *Open the anchors first (this section, [the projection cover](.cover.md), [sprint three's close](33-the-handle.md#where-things-stand)), then grep from the open list's own words. Doug's instruction verbatim: "compact like 25% and then after, read 20 grepped most relevant documents to catchup."*

## Verified, with the numbers — run at the close, not remembered

**`tsc --noEmit -p src/tsconfig.json` 0 · 21 files · 360 tests · 360 passing.** *The suite grew 328 → 360 across the two sprints of this session, the `expect` count never falling. The chemistry suite was NOT re-run; nothing in chemistry was touched; `@dna-platform/chemistry` still resolves by symlink into uncommitted framework code.*

## The open list — the catchup's relevance

1. **The kinds in book territory** — bookmark and highlight as things, with **persistence** ([R52](#r52), [the three `perhaps`](30-the-reference.md#the-three)) — prototype, don't specify.
2. **The rooms and the upward url** — HELD at his word ("serious thought"); [the meditation](33-the-handle.md#open) is the primary text.
3. **The trail and decorator faces** of [the old v4 row](00-planning.md#plan-sprints), unexamined since the index was redefined.
4. **The compound queue**: [ch18](../solutions/18-the-checkpoint-that-compared-a-number-to-itself.md)'s probe-family appearance · [ch30](../solutions/30-the-suite-that-collected-nothing.md)'s slot-and-freed-seats appearance · the struck words (mint→printing, held→reduce, composes→writtenAs) to the style register · the generic-tracks-composition-hood principle to [The Type and the Instance](../designing-inexplicable-phenomena/10-the-type-and-the-instance.md).
5. **`$TypeOfCatalogue`** — still deferred; a catalogue must not be `specify()`'d until it exists.
6. **`writtenAs`** — the one proxy name still standing unstruck.
7. **THE PUSH** — records and code, through the commit tool, on Doug's word. *Nothing this session is committed.*

## Wrong turns this session — do not retry

- *A module-level maker slot; a probe aimed at a coinciding prefix; a pattern restated by eye; a class stored in a reactive field.* **All four filed** — [37](../solutions/37-the-index-that-moved-when-a-stack-ran.md), [38](../solutions/38-the-sections-that-collapsed-into-one-paragraph.md), and sprint three's close.

## Names

***His, adopted this session:*** `comprehend` · printing · `concatenate` · `read()` · the literal (prose) · the typed steps and their seven codes · `code` on the types. ***Proxies standing:*** `writtenAs` *(the specs' own phrase)*, `reduce` *(the parser's own parameter — "parser doesn't matter")*, `address`/`follow` *(now catalogue-seated)*. ***Chapter names `The Handle` and `The Index` remain proxies.***
