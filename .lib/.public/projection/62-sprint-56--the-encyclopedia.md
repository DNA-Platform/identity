# Sprint 56 — The Encyclopedia

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **style:** [The Coding Style](../the-coding-style/03-the-coding-style.md)
- **state:** implementation-ready

---

***Doug, 2026-09-10:*** **"For encyclopedia, we are making wikipedia, consuming the components we produce, making a proper theme with components and focusing on the Turing page."**

## <a id="review"></a>THE REVIEW — ***what is actually there, driven before anything was planned***

**`/turing` at 1440px, measured against the served page:** *57,136 characters · **0 refusal panels** · 0 refusals · 1 infobox with twelve rows · 11 articles · book `pd-article pd-turing pd-book` · **0 contents entries**.* **The portal at `/` is 1,008 characters and also clean.** *Nothing is broken; the page renders and reads.*

| where | what is there |
|---|---|
| ***`src/encyclopedia/`*** | **four files: `Theme` (164 lines), `Infobox` (51), `Hatnote` (22), `Talk` (56)** |
| ***the door*** | exports **Theme, Infobox, Hatnote** — ***`$Talk` is not exported and nothing imports it*** |
| ***the demo*** | **declares its own chrome** in `.wiki/.public/.document.tsx`: `$Header`, `$Footer`, `$Wordmark`, four `$Ref` subclasses, two `$Format`s |

### <a id="review-findings"></a>Six findings, and each is a unit below

1. ***THE TABLE OF CONTENTS IS GONE AND THE COLUMN IT LIVED IN IS EMPTY.*** **Wikipedia's contents is the page's spine — sticky, numbered, nested, in the left margin** — and `$Book.listed()`, which built it, was deleted in [Sprint 55](61-sprint-55--the-two-ladders.md) along with the four workaround lines it was made of. *The paper got its contents back as ten literal `<Chapter/>` uses; the encyclopedia has not.* **This is the largest visible gap and the whole left column is white.**
2. ***`$Wordmark` HAND-WRITES AN `<img>` AND CARRIES `$src` AND `$width`*** — *which is now exactly `$Image`, produced last sprint.* **It also overrides `view()`, which is the shape this codebase has removed everywhere else.** *This is the literal case of Doug's instruction: consume what we produce.*
3. ***`$Talk` IS DEAD.*** **56 lines, no door export, no importer.** *Either Wikipedia's talk page is a thing we are building — in which case it is reachable — or it is not, and it goes.*
4. ***THE CHROME IS THE DEMO'S AND `$Book` NOW HAS SEAMS FOR IT.*** **`header()` and `footer()` on `$Book` are the places a book type says what stands above and below** — the demo's `$Header`/`$Footer` predate them and are wired another way. *Whether Wikipedia's masthead belongs to the BOOK or to the APPLICATION is a real question, and [`src/encyclopedia.ts`](../../package/src/encyclopedia.ts) already answers it once: "a website has a header, a book does not."* **That answer should be re-read, not assumed.**
5. ***WHAT WIKIPEDIA HAS THAT WE HAVE NOT DRAWN.*** Read off the real page: **the article/talk pair and the read/edit/view-history tabs · "From Wikipedia, the free encyclopedia" · the per-section edit link · the categories bar at the foot · the sidebar navigation · search.** *Each is a component question — which of these is an ENCYCLOPEDIA's and which is a website's — and the answer decides whether it lives in the door or in the demo.*
6. ***`$Line` IS A LABELLED PARAGRAPH AND THE FILE SAYS IT MAY BE WRONG.*** [Infobox.tsx](../../package/src/encyclopedia/Infobox.tsx) carries its own open question: *whether it should be an `$IndexCard` instead.* **An infobox row has a label and a value, which is what an index card is.**

## <a id="carried"></a>CARRIED FROM SPRINT 55 — ***two blockers, both measured***

- ***A chapter cannot reach its book.*** **Instrumented on the live paper: `zz-book-$TableOfContents`, `zz-docs-0`.** *A contents built standalone and composed into the book afterwards stops the parent walk at itself.* **U1 needs this**, because a contents entry that cannot see its book cannot wear the classes of what it means — and Wikipedia does not number its appendices either.
- ***What a chapter's format should HOLD.*** `$BookFormat` and `$ChapterFormat` were built and reverted with numbers: **the book format restyled the sheet in place, the chapter format's wrapper drew 10 refusal panels.**

## <a id="decisions"></a>Decisions

### <a id="d1"></a>D1 · The encyclopedia is BUILT FROM COMPONENTS, not from selectors

***Doug: "making a proper theme with components."*** **A theme holds VALUES and a component holds a DRAWING** — that line is already written in [Format.tsx](../../package/src/writing/Format.tsx). *So anything Wikipedia draws that a book does not — a tab strip, an edit link, a categories bar — is a KIND in `src/encyclopedia/`, and the theme dresses it.* **Not a `@select` group standing in for a thing that has a name.**

### <a id="d2"></a>D2 · A component enters the door only if EVERY encyclopedia has it

**The existing rule, kept:** *"What stays is what ANY encyclopedia has and no other book type does."* **Wikipedia's wordmark is Wikipedia's; an infobox is any encyclopedia's.** *Applied honestly, this sends some of finding 5 to the demo.*

### <a id="d3"></a>D3 · The Turing page is the acceptance test

**Not the portal, not `/article`.** *One page, driven, compared against the real one.* **A number that is not visible on `/turing` does not count.**

## <a id="units"></a>Units

### <a id="u1"></a>U1 · The contents returns, and a chapter can reach its book

***Mechanism:*** **the Turing book gets a `<TableOfContents>` of literal `<Chapter title="..."/>` uses**, as the paper has; and the parent walk is fixed so a chapter composed into a book from a separately-built contents answers that book. *Files: `.wiki/.public/alan-turing/.table.tsx` (new), `alan-turing/book.tsx`, and whichever of `$Writing.book` or the composition path the instrumentation names.*

***Visible end:*** **a numbered, nested contents in the left column of `/turing`, sticky, every href resolving.** *A hand-authored page cannot fake the resolution.*

### <a id="u2"></a>U2 · The demo consumes `$Image`

***Mechanism:*** `$Wordmark` deletes; the demo writes `<Image source="..." width="..."/>`. *Files: `.wiki/.public/.document.tsx`, `.article/.cover.tsx`, `.encyclopedia/.cover.tsx`.*

***Visible end:*** **the Wikipedia wordmark still draws at `/turing` and `/`**, from a framework kind, with no `view()` override anywhere in the demo.

### <a id="u3"></a>U3 · `$Talk` is reached or removed

***Mechanism:*** read it, decide against D2, then export and use it or delete it.

***Visible end:*** either a talk page exists at a route, or `src/encyclopedia/` is three files.

### <a id="u4"></a>U4 · Wikipedia's own parts, as components

***Mechanism:*** each of finding 5 assessed against D2 and built as a kind where it passes — *the tabs, the "From Wikipedia" line, the per-section edit link, the categories bar.*

***Visible end:*** **`/turing` carries them and they are selectable by class**, so the theme dresses them rather than drawing them.

### <a id="u5"></a>U5 · The infobox row is settled

***Mechanism:*** `$Line` against `$IndexCard`, the question the file already asks.

***Visible end:*** the infobox draws its twelve rows unchanged, and the open comment is gone from the source.

### <a id="u6"></a>U6 · DESIGN OWED — a chapter's format

***No files, no scenarios.*** **What a `$Format` should hold for a kind whose look is a ROW in another document.** *Carried from Sprint 55 with its measurements.*

## <a id="risks"></a>Risks

- ***The Turing page is 57,136 characters and clean today.*** **Every unit is measured against that number and against 0 panels**; a unit that moves either without saying so has broken something.
- ***D2 is the hard one.*** *The pull is to put everything in the door because it is convenient.* **`src/encyclopedia.ts` has already had Header, Footer and Logo removed from it once for exactly this reason** — that deletion is the precedent and the warning.
- ***U1 touches `$Writing.book`***, which every kind uses. *It is a base-class change and needs Doug's yes before it is made.*

## <a id="order"></a>Order

**U1, then U2, then U4** — *the contents is the visible gap, `$Image` is the instruction, and the parts follow once the page is whole.* **U3 and U5 are small and can go anywhere. U6 is not built.**

## <a id="landed-u1-u2"></a>U1 AND U2 LANDED — ***2026-09-10***

**U1 is done in both halves.** *The framework half is [Sprint 55's record](61-sprint-55--the-two-ladders.md) extended: `book` is a member the book SETS, not a walk it derives — Doug: "No you don't derive… You just set a book."* **The demo half is ten `<Chapter title="..."/>` uses in `.wiki/.public/alan-turing/.table.tsx`**, and the encyclopedia theme already pins `.pd-table-of-contents` to the left column by grid lines, so they land where Wikipedia's contents sits **without a rule being written for them**.

***What the paper got out of the same change:*** **its contents numbers 1–8 and leaves Appendix and References unnumbered**, because a chapter can now reach its book, find the document it means and wear that document's classes — `pd-chapter pd-document pd-appendix`.

**U2 is done for the Turing page and deliberately NOT for the portal.** *`$Wordmark` carried `$src` and `$width` and overrode `view()` to hand-write an `<img>`; it is deleted and both uses are `<Image source="...">Wikipedia</Image>`, drawing 95×16 from a framework kind.*

### <a id="landed-two"></a>Two findings, and one of them stopped the unit

***`Image` IS A DOM GLOBAL.*** **Where the import is missing, TypeScript resolves `new Image()`** — *"Its type 'new (width?: number, height?: number) => HTMLImageElement' is not a valid JSX element type"* — **which is exactly what `document` did in Sprint 55**, and the door exported `documented` because of it. *The export name may owe the same treatment; that is Doug's to rule.*

***THE PORTAL'S LANGUAGE RING IS BROKEN AND IT PREDATES TODAY.*** **All ten `.pd-language` elements compute `position: static` at 305,140 — the same point.** *It was measured with the change in and again with the change reverted: **identical**, so it is not U2's doing.* **The `$Logo` → `$Image` swap was reverted on the portal for that reason** — churning a broken layout while it is broken teaches nothing, and the portal is not this sprint's target.

***AND THE REASON `$Image` COULD NOT SIMPLY DROP IN IS THE ONE THAT KILLED THE TWO FORMATS.*** **A `$Format` whose selector does not match the tag it clothes WRAPS it** — measured: `<div of="$Chemistry.$IllustrationFormat"><img class="pd-image">`. *[Format.tsx](../../package/src/writing/Format.tsx) says this in its own words — "a format whose selector is the tag of what it styles adds no element at all" — and every format written so far has taken the default `styled.div`.* **That div is invisible in flow and fatal in any layout that positions its own children**, which is why `$BookFormat` restyled the sheet and `$ChapterFormat` broke every contents row. ***This is U6's answer arriving from the side: the selector must match what the kind prints.***

## <a id="review-six"></a>THE SIX-ANGLE REVIEW — ***2026-09-10, at Doug's instruction, read before looked at***

***Read first, as asked:*** [What We Believe](../the-type-system/05-what-we-believe.md) (the template in force, 48 principles) · [The Order of a Class](../the-coding-style/02-the-order-of-a-class.md) · [The Coding Style](../the-coding-style/03-the-coding-style.md) · [The Type and the Instance](../the-type-system/02-the-type-and-the-instance.md). **Then measured, then looked at.**

### <a id="a1"></a>1 · Naturalness — ***seven warts, and Doug named the first himself***

| | the wart | measured |
|---|---|---|
| **W1** | ***A TYPE'S ANCESTRY WRITES A CLASS THE KIND DISOWNS.*** `$TypeOfChapter extends $TypeOfReference`, so a chapter wears `pd-reference` — **and its own bond calls `removeClass('pd-reference')` to take it off.** `$Book` does the same. *Doug: "the TypeOf thing is not natural with the name."* | 2 kinds |
| **W2** | ***`$Chapter.classes` DERIVES WHAT SHOULD BE SET.*** It searches the book's documents and compares title strings **on every `className` read** — 65 chapters against 11 documents on the paper. *This is the `book` lesson — "you just set a book" — not applied one member over.* | 715 comparisons a draw |
| **W3** | ***`print` IS NOT THE ONE METHOD.*** [P23](../the-type-system/05-what-we-believe.md#the-drawing) says a kind overrides `print` and nothing else. | **7 files override `view()`** — and `$Reference` and `$Ref` each carry an identical comment saying so |
| **W4** | ***`parenthetical` IS A STRUCK CONCEPT THAT NEVER LEFT.*** [P22](../the-type-system/05-what-we-believe.md#the-seven) lists it among members that must not resurrect. | **18 mentions in `src`** |
| **W5** | ***`instanceof` DOES NOT LIVE IN REFLECTION.*** [P34](../the-type-system/05-what-we-believe.md#the-machinery): *"instanceof should only appear checking a type as a type of type. That is the floor."* | **24 sites outside `Reflection.tsx`** |
| **W6** | ***A CHAPTER'S ANCHOR CARRIES NO CLASS.*** `$Chapter.print` writes a `<div>` with the classes and an `<a>` with none — *so the one element a sheet most wants to address is the one it cannot.* | 1 kind, 65 anchors on the paper |
| **W7** | ***THE FORMAT PATTERN IS BARELY USED.*** Only `$Table` and `$Image` carry a format in their bond, and both were written this sprint. | 2 of 59 kinds |

### <a id="a2"></a>2 · Coding conventions — ***obeyed, with one break I made and one I inherited***

**The order of a class holds in everything written this sprint** — *fields, properties, bond, methods; overrides at the bottom of their group.* **The four declarations hold**, and `$Fold`'s `static $register` is the one allowed static. **No comments in the new source.**

***Broken once, by me:*** **a `@select` prefix names ONE selector**, and I gave `named_` a second — *the build failed with an error pointing at an unrelated line of the theme, which is how a prefix collision presents.* **Renamed to the group's own earlier name, `entryLink_`.**

***Inherited and still standing:*** **the `.pd-item` selector survives in four theme rules** after the kind that wrote it was deleted, *which is what breaks markdown below.*

### <a id="a3"></a>3 · Patterns — ***followed where they exist, and one is a claim not yet made good***

**[P12](../the-type-system/05-what-we-believe.md#the-class) the bond creates and assigns** — `$Chapter` makes its `$Path`, `$Image` carries its format, `$Book` places its theme. **Held.** · **[P13](../the-type-system/05-what-we-believe.md#the-class) `specifically` validates and may assign** — held. · **[P38](../the-type-system/05-what-we-believe.md#the-machinery) a waiver is `return false` and still a rule** — **18 of them, every one carrying `@specify`.**

***[P24](../the-type-system/05-what-we-believe.md#the-drawing) is the one that is not made good:*** **"A template method added to a base is a claim about every kind, and leaving one unswept is a bug."** *`print` is that claim, and seven kinds still answer `view()` instead.*

### <a id="a4"></a>4 · The trickle back to markdown — ***BROKEN, and I broke it this sprint***

**The markdown reading numbers its sub-entries and not its top-level ones.** *Seen: `Introduction` bare, `1.1`, `1.2`, `1.2.1` numbered.* **Two causes, and both are mine:**

- ***Markdown's own override is stale.*** It blanks `listedNumber_content` with `@select('.pd-table-of-contents .pd-item > a::before')` — **and `.pd-item` no longer exists**, so the group is retargeted at nothing and the top-level number simply vanishes rather than being blanked.
- ***I added two prefixes markdown does not know.*** `deepNumber_` and `deepestNumber_` are new, so nothing overrides them and the article's numbering reaches markdown untouched.

***The lesson, and it is the sprint's sharpest:*** **a theme overrides by PREFIX, so adding a prefix to the article theme silently changes markdown.** *What DID trickle correctly is the part that lives in the base — the row, the leader and the marker are base machinery and markdown neutralises them by setting `leader` and `place` to `none`, which is the design working.*

### <a id="a5"></a>5 · The LaTeX look — ***measured against `pnp.pdf` page 1 at 100%, whose page is 816px, the same as our sheet***

| | real | ours | |
|---|---|---|---|
| entry row gap | **18px** | **18px** | ✓ |
| contents heading | present | ***was absent*** | **fixed** |
| leaders | run from the end of each title | ***started at a fixed column*** | **fixed** — the name was growing, the leader should |
| entry colour | **coloured** | black | ***[B2](../the-condition-report/09-the-demonstration.md#seen-bugs)*** |
| line with inline mathematics | even | ***opens up*** | ***[B1](../the-condition-report/09-the-demonstration.md#seen-bugs)*** |
| page numbers | 3, 4, 6 … | `□` | **deliberate** — there is no page to name |

### <a id="a6"></a>6 · Markdown as a standalone way of writing notes — ***close, and one bug away from usable***

**What is right:** *a comfortable measure, a clean sans face, generous leading, a sheet that reads as a page rather than a wall.* **It is already a decent place to keep notes.**

**What is wrong:** ***the half-numbering above makes it look broken*** — a reader sees `Introduction` then `1.1` and concludes the tool is faulty. *And the heading scale went flat when it stepped down a notch: the title is 24px and a section heading is close behind it, so a long note has little relief.* **Neither is deep; both are theme values.**

***The honest verdict:*** **markdown is not yet a thing I would take notes in, and the reason is the numbering, not the typography.**

## <a id="closed"></a>THE SPRINT CLOSES ON THE REPORT — ***Doug, 2026-09-10: "Mark the report the end of the sprint. We will address all things in there and clear our bug backlog next sprint"***

**What landed:** *U1 — the contents returns to `/turing` and the paper's is the FULL 65 entries, three levels, numbered and resolving · U2 — the demo consumes `$Image` · the `is` asking replaces every `instanceof` in `src` (24 sites to 0) · `parenthetical` becomes the state and `print` declares it · 62 hand-written type names deleted · every theme selector addresses a kind rather than a tag.*

**What is open is written down and NOT half-done:** ***[B1](../the-condition-report/09-the-demonstration.md#seen-bugs) through [B8](../the-condition-report/09-the-demonstration.md#b8) in The Demonstration***, each measured against `pnp.pdf` rather than judged, and the seven warts in [the six-angle review](#review-six) above. **B4 — no kind may override `view()` — is begun and not finished: `$Composition`'s is gone and six remain.**

***The next sprint's whole job is that backlog.*** *Nothing new is designed until it is empty.*

## <a id="stand"></a>WHERE THINGS STAND — ***written for a session that has lost its context; every claim names its file***

### <a id="stand-gate"></a>The gate, as of the close

**`tsc` `src` 0 · `.latex` 0 · `.wiki` 0 · suite 102 green in ~2.8s** · ***paper*** `http://localhost:5310/` **38,164 chars, 0 panels, 0 refusals, 65 contents entries all resolving** · ***encyclopedia*** `http://localhost:5311/turing` **57,288 chars, 0 panels, 1 infobox, 10 contents entries.** *Head commit `5f70970`. **Nothing is pushed** — every commit this sprint is local by standing rule.*

### <a id="stand-loop"></a>How to work here — ***the loop, and it is fast now***

| | |
|---|---|
| ***never `npx`*** | **39s against 0.3s** for the same binary. Call `node ../../../node_modules/<tool>/…` directly |
| ***build*** | `node ../../../node_modules/rollup/dist/bin/rollup -c --environment QUICK` — **1.4s**, esbuild transpile, ES only, no `.d.ts`. The full `rollup -c` is for shipping |
| ***suite*** | `node ../../../node_modules/vitest/vitest.mjs run` — **~2.8s** |
| ***typecheck*** | `node ../../../node_modules/typescript/bin/tsc --noEmit -p src/tsconfig.json` |
| ***serve*** | [`serve.sh`](../../package/serve.sh) — restarts both vite servers; **run it after every build or the browser serves a stale `dist`** |
| ***see*** | puppeteer resolved as `file:///…/node_modules/puppeteer/lib/esm/puppeteer/puppeteer.js`; drivers live in the session scratchpad and are written fresh |

### <a id="stand-files"></a>The files this sprint touched, and what each now says

| file | what it holds |
|---|---|
| [`src/writing/Writing.tsx`](../../package/src/writing/Writing.tsx) | `book` is an `@inert()` member SET at bond time, not derived · `parenthetical` + `$print` live here and `view()` reads `parenthetical` · `classes`/`addClass`/`removeClass`/`addType` |
| [`src/utilities/Reflection.tsx`](../../package/src/utilities/Reflection.tsx) | **`is<T>()` is the ONE asking** — `instanceOf` deleted · `writing()`, `annotation()`, `composition()` · `level()` walks `hierarchies` · **no name-based validation left** |
| [`src/writing/Type.tsx`](../../package/src/writing/Type.tsx) | `name` derives from the class in its FIELD INITIALISER — *not the bond, because `reflection.names()` reads a template built with `new`* · a type written as content takes its own name |
| [`src/library/Book.tsx`](../../package/src/library/Book.tsx) | 65 lines · `cover`/`synopsis`/`table`/`chapters` as get-only properties · sets `book` on everything beneath · `$register` hands over the two hierarchy tops |
| [`src/library/Chapter.tsx`](../../package/src/library/Chapter.tsx) | a `$Composition` whose TYPE is a `$TypeOfReference` · holds sub-chapters · prints a row and an anchor · ***carries wart W2, the per-read search*** |
| [`src/reference/Fold.tsx`](../../package/src/reference/Fold.tsx) | the annotation that gives its holder a KEY; `$PageFold`, `$Bookmark`, `$Highlight` extend it |
| [`src/writing/Image.tsx`](../../package/src/writing/Image.tsx) | `$source`, `$width`, `$height` — the base of `$Illustration` and `$Figure` |
| [`src/formatting/Theme.tsx`](../../package/src/formatting/Theme.tsx) | the base sheet, the contents row group, `leader`/`place`/`spacing` |
| [`src/article/Theme.tsx`](../../package/src/article/Theme.tsx) | LaTeX's values · contents numbering `listed1/2/3` by child depth · `link = '#000000'` |
| [`src/markdown/Theme.tsx`](../../package/src/markdown/Theme.tsx) | one rung down GitHub's scale · blanks all three contents numbers |
| [`.latex/.public/aaronson/.table.tsx`](../../package/.latex/.public/aaronson/.table.tsx) | **65 `<Chapter title="…"/>` uses, nested three deep**, generated from the chapters' own headings |
| [`.wiki/.public/alan-turing/.table.tsx`](../../package/.wiki/.public/alan-turing/.table.tsx) | ten flat entries — ***still owes the nesting the paper has*** |

### <a id="stand-backlog"></a>The backlog the next sprint exists to clear

***[B1–B8 in The Demonstration](../the-condition-report/09-the-demonstration.md#seen-bugs)*** — **B1** inline formula opening *(FIXED: `.75em` in the abstract, pitch 16→19 matching the page)* · **B2** contents colour *(RESOLVED by measurement: the page is black)* · **B3 no citations on `/turing`** · **B4 six `view()` overrides remain** — `Format`, `Title`, `Path`, `Ref`, `Reference`, `Type` · **B5** done · **B6** done · **B7** contents columns and indent steps · **B8** the title block 92px high and the abstract's missing 20px indent.

***And [the seven warts](#a1):*** **W1** a type's ancestry writes a class the kind disowns *(RULED NOT A BUG)* · **W2** `$Chapter.classes` searches on every read · **W3** = B4 · **W4** `parenthetical` *(RESOLVED — it is the state)* · **W5** = B6 *(done)* · **W6** the chapter's anchor carries no class · **W7** only two kinds carry a format.

### <a id="stand-rulings"></a>The rulings given today, in his words

- ***"You just set a book."*** *Do not derive what can be assigned.*
- ***"instanceof should NEVER be used… Use a function called `is` and it should do the TYPE checking."***
- ***"Select classes… We put TONS of classes on there."*** *A rule reaches for what a kind IS, never for what it draws.*
- ***"We don't want ANY formatter ever adding an element."*** *Not true yet; `$Format.format()` wraps by construction.*
- ***"print should toggle parenthetical… Declare with print, use parenthetical in the view."***
- ***"Get rid of anything that uses the type name. Use the name from the type chemical."***
- ***"I hate it every time you ever choose a name."*** **Names are Doug's. `$Theme.measure` is OPEN and must not be settled by a refactor.**
- ***"We don't want table as a real table. We decided it should be a grid."***
- ***A minifier must preserve class names*** — written in [The Coding Style](../the-coding-style/03-the-coding-style.md#the-build-caution).
