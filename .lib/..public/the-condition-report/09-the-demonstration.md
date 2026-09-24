# The Demonstration

- **author:** [Phillip](../../../../.claude/library/..teamsmanship/..team/phillip/phillip-and-the-visible-layer/.cover.md)
- **coauthor:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md), [Queenie](../../../../.claude/library/..teamsmanship/..team/queenie/queenie-and-the-specification/.cover.md)

---

***The demonstration was [scoped OUT of the audit](01-how-to-read-this.md#the-scope) on 2026-08-23 and is scoped BACK IN on 2026-08-24, by Doug, in the room:*** **"We need to audit the demo and compiler and the demo needs to be zippy."**

*Nine entries were parked under that first scoping and every one still stands. **This chapter is not those** — it is what a first measured pass found, and the finding that governs it is one sentence.*

> ***THE DEMONSTRATION DOES AT RUNTIME WHAT THE COMPILER EXISTS TO DO AT BUILD TIME.*** **Every fault below is that sentence in a different place.**

## <a id="i28"></a>I28 — Every route loaded the whole library · ***partly fixed, measured both sides***

**Measured against the dev server, four routes, cold:**

| route | before | | after | |
|---|---|---|---|---|
| **`/title`** — *four headings, 69 DOM nodes* | ***8,369 ms*** | 169 resources | ***885 ms*** | **51 resources** |
| **`/page`** | ***8,937 ms*** | 172 resources | ***3,091 ms*** | **68 resources** |
| **`/books`** — ***the landing page*** | ***8,724 ms*** | 171 resources | ***8,279 ms*** | **158 resources** |
| **`/`** | ***13,136 ms*** | 171 resources | *as `/books`* | |

***The counts were IDENTICAL across every route, which is the whole diagnosis*** — **a page of four headings fetched the same 169 modules as everything else.** *Grouped, on `/title`: **67 framework · 55 the demonstration's books** · 30 other · 11 node_modules · 1 chemistry.*

**The cause was [`sections/index.ts`](../../.archive/app/src/sections/index.ts) importing all three sections at module scope**, *and a section imports its books.* ***Only two numbers and a flag are needed eagerly*** — the header's case count and the sidebar's filter — **so the catalogue stays and the component arrives by dynamic import**, which is [the one-door-per-book shape the compiler already emits](../../build/stages/catalogue.ts).

***The metadata now lives once.*** *Each section's `sectionData` block was a second home for the same three fields and is deleted.*

## <a id="i29"></a>I29 — ***The shelf cannot draw a spine without the whole library in memory*** · not fixed

***THIS IS THE ONE THAT MATTERS, and it is a design fault rather than a wiring one.***

**[`the-team/card.tsx`](../../.archive/app/src/sections/book/library/the-team/card.tsx) builds every card by reading it off the LIVING BOOK:**

```tsx
$(<LibraryCard name="The Algebra of Perspective" … synopsis={line(algebra)} chapters={titles(algebra)} />)
```

*`line(book)` reads the book's synopsis tagline; `titles(book)` reads its chapters.* ***So a card cannot exist until its book does***, **and the shelf — the landing page — waits on 158 modules before it draws one spine.** *Measured: **8.3 seconds to visible.***

***The compiler's generated catalogue fails exactly this, in its own words:***

> **"NOTHING HERE IMPORTS A BOOK. A card is a book present without the book, and a module that reached for one would be handling the item it stands in for."**

**The compiler reads its cards off living books at BUILD time and emits literals.** *The demonstration has no build step, so it does the same reading at LOAD time and pays for it on every visit.* ***That is the same fault as [I28](#i28), one grade deeper: not a stray import but the card's DEFINITION reaching for the thing it stands in for.***

**Making the four books dynamic was tried and reverted, with the attempt recorded [in the file](../../.archive/app/src/sections/the-books.tsx):** *requests fell 156 → 84 **and every spine vanished***, because the cards went with them.

***The shape of the fix is already in that same file*** — **`The Team`'s card carries its chapters as literals and takes its book from a `written` slot filled later.** *Four cards need what one already has.*

## <a id="s23"></a>S23 — ***The classes drawer teaches a model the framework no longer has***

**`the classes` on the page demonstration opens a drawer that prints framework source. It prints this:**

```tsx
class $Word extends $Writing {
  divide() { return []; }      // a word is the floor: it holds no parts
  compose() { return this; }   // and composes to itself
}
```

***Every line of that is now false.*** **[`Word.tsx`](../../package/src/writing/Word.tsx) reads `export class $Word extends $Writing<$Letter> implements $Composition<$Letter>`, with a `parts()` that returns letters** — *and the floor is [`$Letter`](../../package/src/writing/Letter.tsx), whose `parts()` returns `[this]`.* **[The floor moved down a grade this sprint](../projection/21-semantics-then-drawing.md#the-floor-closes), by Doug's own ruling, and the drawer was not told.**

***The drawer is a TRANSCRIPTION of source rather than a reading of it***, **which is the demonstration committing [the fault the whole compiler exists to prevent](../../build/stages/catalogue.ts):** *a second reading that can disagree with the first.* **And it is the worst place for it to happen** — *a drawer labelled "the classes" is read as authoritative, so [every place the code says something the theory does not is a place a reader learns the theory wrong](.cover.md).*

**Doug found it by eye:** *"I don't think 'the classes' works in algebra in the demo."* ***The mechanism works in all five lenses — measured — and what it SAYS is wrong***, which is why no gate caught it.

## <a id="o15"></a>O15 — The top bar is a state machine nobody has drawn

***Doug, 2026-08-24: "we need to be very careful with those top buttons that they really work. I am not sure all of them should be available to click in all states. You have a state machine. Be careful."***

**What the bar offers, measured:** `book` · `github` · `night` · `reading` · `compare` · `edit` · `the classes` · `the books →`.

| | measured |
|---|---|
| **`the classes`** | ***works in all five lenses*** — the page grows by exactly 779 characters each time |
| **`edit`** | ***works*** — opens a textarea carrying 3,372 characters of source. **It first read as dead**, because [an instrument counting `innerText` cannot see a textarea's value](../solutions/26-the-red-that-exercised-nothing.md) |
| **`the books →`** | ***a plain `<a href>` — a FULL page load***, not a lens change, and nothing on the bar says so |
| ***what is NOT known*** | **whether every combination is legal.** *Five lenses × three actions, and the demonstration has no statement of which pairs are meant to exist* |

***Nothing is disabled and nothing is marked.*** **The bar presents eight controls as one kind of thing where there are at least three** — *a lens that swaps a rendering, a toggle that opens a pane, and a link that leaves the page* — **and [a count cannot see that](01-how-to-read-this.md#why-no-gate).**

## <a id="dispositions"></a>Dispositions — ***updated [Working Well By Default](../projection/22-working-well-by-default.md), 2026-08-25***

| entry | ruling |
|---|---|
| **[I28](#i28)** | ***DONE.*** *Sections load on demand and the landing page no longer waits on the library* |
| **[I29](#i29)** | ***DONE, and the mechanism was not what this chapter said.*** **Profiled: last byte at 351 ms, first paint at 2,412 — 2,061 ms with NOTHING LEFT TO FETCH.** *It was never loading; it was CONSTRUCTION, which is why neither bundling nor lazy loading could have fixed it.* **The cards carry their own text with [a promise asserting it against the living books](../../.archive/app/src/sections/book/library/the-team/card.tsx), and only then could the imports go dynamic** — *the reverted attempt did those in the other order.* ***3,520 ms → 1,638; construction 2,061 → 1,028; the shelf's chunk 284 kB → 74; five spines still standing*** |
| **[S23](#s23)** | ***STILL OPEN.*** *The classes drawer still transcribes source rather than reading it* |
| **[O15](#o15)** | ***STILL OPEN.*** *Which control pairs are legal is a design statement nobody has made* |

## <a id="what-building-it-found"></a>Two more, found by building the fix

### <a id="i34"></a>I34 — RESOLVED · The demonstration could not be built at all

***Built and served, `/books` threw `Cannot read properties of undefined (reading 'chapters')` and rendered 21 nodes.*** **Built UNMINIFIED and served, it was 73 nodes, 1,179 characters, 0 errors — identical to the dev server.** *The mechanism is the one [already fixed in the sibling application a sprint earlier](../../app/vite.config.ts): a bond constructor is found by the class's NAME, and a minifier renames it.*

**Nothing ships the demonstration, so nobody had ever found out.** ***Closed with the one line the sibling config already carried, plus a build script so it can be run at all.***

### <a id="o18"></a>O18 — RESOLVED · The drivers and the server met only by hand

***Neither vite config set a port.*** *Vite served **5173**; `verify-demo` and `verify-book` defaulted to **5199**, `verify-library` to **5299**, and every document in the library said 5199.* **The only thing bridging them was somebody remembering a flag, and [a driver that cannot connect stalls rather than saying so](../solutions/26-the-red-that-exercised-nothing.md).** ***Closed: the ports are declared, and `npm run dev` then `npm run verify` works with none.***


---

## <a id="seen-bugs"></a>SEEN ON THE PAGE — ***bugs Doug raised looking at the paper, 2026-09-10***

***Doug: "Put this on the bugs list… Both bugs… No citations is a serious bug."*** **Each is a thing a reader sees, so each is written as what was SEEN and not as a diagnosis.**

| | what is seen | where |
|---|---|---|
| **B1** | ***A LINE THAT CARRIES INLINE MATHEMATICS OPENS UP AND THE PARAGRAPH GOES RAGGED.*** In the abstract, the line holding `P ?= NP` is taller than the lines around it, so the block loses its rhythm. **Doug, with the line ringed: "that particular equation… the result here is so distracting that it's awful. You can break with norms."** *Either the leading is set for every line or the inline formula is set smaller; the norm may be broken because the fault is worse than the norm.* | `/` — the abstract, and every paragraph carrying `<Math>` |
| **B2** | ***THE TABLE OF CONTENTS LOST ITS COLOUR AND IT IS A REGRESSION.*** **Doug: "The colors on the table don't look right to me. We have regression and I really loved the table. I want this pixel perfect. The table is the star of this."** *The article theme's `link` was `hsl(0, 100%, 33%)`, then black — and the entries are LINKS, so they follow it. The real page colours them; the cached `pnp.pdf` page 1 is the reference and it must be sampled rather than guessed.* | `/` — every contents entry |
| **B3** | ***THE TURING PAGE HAS NO CITATIONS AT ALL.*** **Doug: "No citations is a serious bug."** *Not broken — ABSENT: no `<Citation>` is written in any Turing chapter, and `9-references.tsx` holds no `<PageFold>` for one to reach. The paper does both, so the machinery works and the demo does not use it.* | `/turing` |

***None of the three is a framework fault on its face*** — **B1 is a theme value, B2 is a theme value I changed, B3 is demo content that was never written.** *They are here because the reader cannot tell the difference, and [the demonstration is what is being judged](#seen-bugs).*

### <a id="seen-bugs-more"></a>THREE MORE, ruled from the six-angle review — ***Doug, 2026-09-10***

| | the bug | his words |
|---|---|---|
| **B4** | ***A KIND MAY NOT OVERRIDE `view()`.*** **Seven files do**, and `$Reference` and `$Ref` each carry an identical comment admitting it. `view()` is where the classes, the meaning and the formats are applied; a kind that replaces it silently drops all three. **The rule is not a convention any more — it is not allowed.** | *"serious wart… The idea is we control class names and whatever else. It's dangerous to reimplement that if not awful. I would say we just shouldn't allow it"* |
| **B5** | ***`print` AND `parenthetical` ARE ONE IDEA SAID TWICE.*** `parenthetical` is not struck after all — it is the state, and `print` is how an author declares it. **`print` toggles `parenthetical`; the view reads `parenthetical` alone.** *Today `$Composition.view()` reads both, which is the same decision made in two places.* | *"print should toggle parenthetical, and parenthetical used to denote when things are not necessarily there to be viewed. Declare with print, use parenthetical in the view"* |
| **B6** | ***`instanceof` IS NEVER WRITTEN, AND `reflection.instanceOf` GOES WITH IT.*** **24 sites outside reflection today.** One asking, named `is`, does the TYPE checking — *and a class check is not a type check, which is exactly the danger: a kind CARRIES types it does not derive from, so `instanceof` answers a different question from the one being asked.* | *"instanceof should NEVER be used. Reflect.instanceOf should not be used. Use a function called `is` and it should do the TYPE checking. instanceof is dangerous in this framework"* |

***AND ONE FINDING RULED NOT A BUG.*** **`removeClass('pd-reference')` in `$Book` and `$Chapter` stands.** *Doug: "if there's a better way don't remove the class, but this is a structural framework. Removing a css class because we want conceptual but not view semantics is okay in principle for something as big as this."*

### <a id="b7"></a>B7 · THE TABLE OF CONTENTS, MEASURED AGAINST THE PAGE — ***Doug: "there's spacing on there, nuanced indenting. You are VERY far away"***

***Both measured in pixels, not judged by eye.*** **The real page is `pnp.pdf` p1 at 100%, whose page is 815px and whose text margin begins at x=96; our sheet is 816px and ours begins at x=96, so the two are directly comparable.** *The real page was measured by scanning the raster for columns of ink; ours by asking the DOM.*

| | real | ours | out by |
|---|---|---|---|
| ***level 1 — number x*** | **96** | **96** | ✓ |
| ***level 1 — title x*** | **117** | **134** | ***+17*** — our number column is 2.6em where the page gives it 21px (≈1.45em) |
| ***level 2 — number x*** | **118** | **119** | ✓ — the first indent step is right |
| ***level 3 — number x*** | **152** | **142** | ***−10*** — we step the same 1.6em twice; the page steps 22px then 34px |
| ***right edge of the row*** | **718** | **720** | ✓ |
| ***row pitch*** | **18px** | **18px** | ✓ |
| ***top level weight*** | bold | bold | ✓ |
| ***lower levels weight*** | regular | regular | ✓ *(was bold at every level — inherited from the row; fixed by weighting the anchor and the number rather than the row)* |

***THE THREE FAULTS, stated as what is wrong rather than as what to type:***

1. ***THE NUMBER COLUMN IS ONE WIDTH FOR EVERY LEVEL AND THE PAGE GIVES EACH LEVEL ITS OWN.*** *A `1` needs less room than a `1.2.1`, and LaTeX sizes each level's box to its own numbers* — **ours is 2.6em at levels 1 and 2 and 3.4em at level 3, which is why a top-level title sits 17px too far right while a third-level number is cramped.**
2. ***THE INDENT STEP IS UNIFORM AND THE PAGE'S IS NOT.*** **22px then 34px on the page; 23px then 23px in ours.** *The second step is larger because the number it makes room for is longer.*
3. ***THERE IS NO SPACE BETWEEN TOP-LEVEL GROUPS.*** *The page opens a blank line before each new chapter; ours runs them together.* **A `.5em` top margin on the top level was added and is not yet checked against the page.**

***WHAT IS ALREADY RIGHT AND SHOULD NOT BE TOUCHED:*** **the row pitch, the left margin, the right edge, the leader running from the title to the marker, and the ink** — *sampled from the raster: title `rgb(0,0,0)`, abstract `rgb(9,3,1)`, top entry `rgb(5,0,5)`, sub entry `rgb(3,0,6)`, page number `rgb(4,0,4)`.* **The page is BLACK throughout; the blue cast in a screenshot is subpixel rendering and not ink, so the article theme's black links are correct and the earlier "colours off" reading was of the MARKDOWN page, not this one.**

***AND WHAT WE CANNOT HAVE:*** **the page numbers.** *The page ends every row with 3, 4, 6, 7 …; there is nothing to paginate here, so the row ends in `□` — [the deliberate choice](../the-coding-style/03-the-coding-style.md), and the one place the reading admits it is not a page.*

### <a id="b8"></a>B8 · THE TITLE BLOCK AND THE ABSTRACT, MEASURED — ***and B1 turns out to be a matter of degree***

***Same method: the raster scanned for rows of ink, ours asked of the DOM, both against a page whose text runs x=96 to x=718.***

| | real | ours | out by |
|---|---|---|---|
| ***title, top*** | **y 212** | **y 120** | ***−92*** — the page opens 116px below the margin before the title; we open 24px below it |
| ***title, ink width*** | **69px** (`P ?= NP` at the title size) | **43px tall box, full-measure wide** | *the formula is set much larger than the page sets it* |
| ***author, top*** | **y 257** | **y 169** | ***−88*** — carried down from the title |
| ***Abstract heading, top*** | **y 329** | **y 213** | ***−116*** |
| ***abstract block, inset*** | **36px each side** (132 → 682) | **40px each side** (136 → 680) | *4px* |
| ***abstract first-line indent*** | **20px** | none seen | ***missing*** |
| ***abstract line pitch*** | **16px** | **16px** | ✓ |
| ***the line holding the formula*** | **19px — the page opens it by 3** | **23px — we open it by 7** | ***more than double*** |

***THE FINDING THAT CHANGES [B1](#seen-bugs):*** **the real page opens that line too.** *An inline formula is taller than the type around it and `\baselineskip` gives way — by three pixels.* **So the fault is not that our line opens; it is that ours opens by seven, which reads as a broken paragraph where three reads as typesetting.** *The repair is therefore to SET the inline formula smaller until the opening is ~3px, not to force the leading — which is what Doug meant by "make that particular equation smaller".*

***AND THE VERTICAL RHYTHM IS THE LARGEST SINGLE DIFFERENCE ON THE PAGE.*** **Everything above the contents sits about 100px too high**, because `\maketitle` opens a deep space before the title and our cover opens almost none. *One value, and it moves the title, the author, the abstract heading and the abstract together.*

## <a id="seen-dispositions"></a>DISPOSITIONS — ***every one of B1 through B8, closed [in Sprint 57](../projection/63-sprint-57--finishing-latex-and-markdown.md) on 2026-09-10***

| | ruling |
|---|---|
| **[B1](#seen-bugs)** | ***CLOSED in 56.*** The inline formula is set `.75em` in the abstract and the line opens by 3 where the page opens by 3 — measured, the abstract's pitches read 16 then 19 |
| **[B2](#seen-bugs)** | ***CLOSED by measurement.*** The page is BLACK; the blue cast is subpixel rendering, so the article theme's black links were already right |
| **[B3](#seen-bugs)** | ***CLOSED.*** Twelve `<PageFold>` entries and twelve `<Citation>` marks on `/turing`, numbered in the order the article reads them so the hand-written numbers agree with the list. **Driven: 12 of 12 resolve**, drawn as a bracketed superscript |
| **[B4](#seen-bugs-more)** | ***CLOSED for five of six kinds.*** `$Type` declares `parenthetical`; `$Path`, `$Ref`, `$Reference` and `$Title` write their element in `print`. **Classless anchors 65→0 on the paper and 32→0 on `/turing`.** `$Format` is the one left and it is [a design owed](../projection/63-sprint-57--finishing-latex-and-markdown.md#u3), not an exception |
| **[B5](#seen-bugs-more)** | ***CLOSED in 56.*** `print` declares and `parenthetical` is the state |
| **[B6](#seen-bugs-more)** | ***CLOSED in 56.*** 24 `instanceof` sites to 0 |
| **[B7](#b7)** | ***CLOSED, six ticks.*** Each level has its own number column and its own step, read off the paper's own text layer rather than a raster: **numbers at 96 / 118 / 151 and titles at 118 / 151 / 198, ours exact at every one.** Row pitch 18 and a full blank line — 36 — before each new top-level group |
| **[B8](#b8)** | ***CLOSED, four ticks.*** **Title 146, author 193, Abstract heading 266, abstract first line 290** — ours exact at every one. The abstract is inset 36px and indents its first line 20px |

***AND THE INSTRUMENT CHANGED.*** **The raster scan was replaced by the PDF's own text layer** — *every glyph with its coordinates, which needs no calibration and carries no viewer offset.* **The raster's numbers were about 44px low throughout, which is a PDF viewer's toolbar**; the columns it gave were right and the vertical block was not, and nothing in the method said which.

### <a id="b9"></a>B9 · FOUND BY LOOKING, AND FIXED — ***the encyclopedia drew its body in a 135px column below 1120px***

***Nobody had opened `/turing` at a laptop width.*** **Measured at 1100: 100 of 120 body paragraphs at 135px** — *a column narrower than the sidebar beside it, with words breaking mid-syllable.* **Above 1120 it was correct, which is why every previous drive missed it: they ran at 1280 and read character counts.**

***The cause is one omission.*** **The encyclopedia's wide layout is three columns and pins the text to the middle one; the narrow override collapses the grid to `1fr` and moves the text to column 1 — but it lists `article`, `.pd-index` and `footer` and NOT `.pd-synopsis`.** *So the synopsis stayed pinned to column 2, which is no longer an explicit column, so the browser makes an IMPLICIT one and gives it the width the synopsis asks for.* **Column 1 got what was left: 135px.**

***Pre-existing, and proved so rather than assumed:*** **the same measurement against the pre-sprint build gives the identical spread**, `135×100, 297×12, 829×6, 95×2`.

**Fixed by naming the synopsis in the narrow rule.** *Measured after: 704 / 904 / 912 at 800 / 1000 / 1100, and 602 / 872 at 1130 / 1400 unchanged.*

***The lesson is about the instrument, not the grid:*** **a character count and a refusal count cannot see a layout**, *and both were green through every drive this page has ever had.* **What found it was a screenshot at a width nobody had tried.**

### <a id="b10"></a>B10–B13 · SEEN BY DOUG LOOKING AT THE PAGES — ***2026-09-10, filed as reported***

***Doug: "Don't think recency in what I say is importance. I am reporting bugs. You file them and stay on track with the important stuff."*** **So these are filed as SEEN, with what was done, and none of them displaced the sprint's own work.**

| | what is seen | disposition |
|---|---|---|
| **B10** | ***MARKDOWN'S LINKS ARE BLACK.*** *Doug: "I would like to see wikipedia blue in the markdown! But not the latex obviously."* **The article theme sets links black because a printed paper has no links to follow, and markdown DESCENDS from article, so it inherited the decision** — the same trickle that broke the contents numbering | ***FIXED.*** Markdown takes the base's own `#3366cc`, and answers the two groups that out-specify it. **Measured: contents entries and citations `rgb(51,102,204)` in markdown, `rgb(0,0,0)` on the paper** |
| **B11** | ***MARKDOWN'S HEADING SCALE IS ONE NOTCH TOO HIGH.*** *Doug: "I would like what heading 1 is to be heading 2… and heading 2 to be 3, 3 to be 4."* | ***FIXED.*** Every level takes the next one down GitHub's scale: **20 / 16 / 14 / 13.6 against a 16px body**, where it was 24 / 20 / 16 / 14. The paper is untouched at 23.04 / 19.2 / 16 / 14.67 |
| **B12** | ***EVERY REFERENCE ENTRY DREW AS A BLUE LINK*** — twelve paragraphs coloured as links with nothing to follow. **A `<PageFold>` makes a writing POINTABLE, and `view()` writes the `id` on the same anchor that carries an `href` when there is one**, so an entry that is only a TARGET was painted as a destination | ***FIXED, and in the base rather than the demo:*** an anchor that only names itself is not a link. **Now an entry with a URL is blue and an entry without is text** — which is what the real article does |
| **B13** | ***FOUR SECTIONS ON `/turing` ARE EMPTY HEADINGS*** — `Articles`, `Books`, `Works cited` and `Notes` draw their headings and their rules with nothing beneath | ***OPEN — demo content, never written.*** *Not a fault of any kind; the chapters exist and say nothing* |

***AND ONE QUESTION FILED RATHER THAN ANSWERED:*** **should markdown's `h2` be bold?** *Doug: "I don't think I necessarily want heading 2 to be bold in markdown. In fact, I doubt it."* **Tried, and it disappears:** *at the new scale an `h2` is 16px, exactly the body size, and markdown turns rules off (`ruling = '0'`), so an unbolded section head is indistinguishable from a paragraph.* ***Left bold.*** **The two ways to have it: give markdown back GitHub's rule under `h1`/`h2`, or leave the weight.** *His call, not mine.*

### <a id="b14"></a>B14 · ***THE ENCYCLOPEDIA'S MASTHEAD COLLIDES WITH ITS OWN ACCOUNT LINKS***

***Seen at 1440px:*** **`Alan Turing` is drawn ON TOP of `Donate · Create account · Log in`.** *The title's box is `48, 87, 1344 × 40` and the account row sits at `124, 108` — inside it.*

***Pre-existing and proved so before anything was touched:*** **identical boxes on both sides of [the naturalness pass](../projection/63-sprint-57--finishing-latex-and-markdown.md#stand-u11)**, *which is the only reason it is filed rather than fixed — it belongs to the demo's own chrome and not to a kind.*

**OPEN.** *It is the first thing a reader sees on the page we are about to spend a sprint on.*
