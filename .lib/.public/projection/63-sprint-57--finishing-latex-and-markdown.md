# Sprint 57 — Finishing LaTeX and Markdown

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **coauthor:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md), [Phillip](../../../../.claude/library/..teamsmanship/..team/phillip/phillip-and-the-visible-layer/.cover.md)
- **status:** `implementation-ready`

---

***Doug, 2026-09-10, closing Sprint 56:*** **"Mark the report the end of the sprint. We will address all things in there and clear our bug backlog next sprint."** *And opening this one:* ***"let's get ALL of it done. This is the sprint we finish latex and markdown!"***

**This sprint designs nothing new.** *Its whole content is a backlog that was measured before it was written down, and its end is the two pages standing beside their references without a caveat.*

## <a id="requirements"></a>Requirements — ***already written, and cited rather than restated***

**The requirements for this sprint were produced by [the six-angle review](62-sprint-56--the-encyclopedia.md#review-six) and by Doug looking at the paper.** *They live in two chapters and are not copied here; [a sprint record that restates a settled account should carry the link, not the account](../../../../.claude/library/..librarianship/17-compounding.md).*

| | what it demands | where it is written | lands in |
|---|---|---|---|
| **B1** | the line holding an inline formula opens by ~3px, not 7 | [The Demonstration](../the-condition-report/09-the-demonstration.md#seen-bugs) | ***CLOSED in 56*** — `.75em` in the abstract, pitch 16→19 |
| **B2** | the contents' colour | [ibid.](../the-condition-report/09-the-demonstration.md#seen-bugs) | ***CLOSED by measurement*** — the page is black |
| **B3** | ***the Turing page has no citations at all*** | [ibid.](../the-condition-report/09-the-demonstration.md#seen-bugs) | **[U1](#u1)** |
| **B4** | ***a kind may not override `view()`*** | [ibid.](../the-condition-report/09-the-demonstration.md#seen-bugs-more) | **[U2](#u2)** (five kinds) · **[U3](#u3)** (the sixth, design owed) |
| **B5** | `print` declares, `parenthetical` is the state | [ibid.](../the-condition-report/09-the-demonstration.md#seen-bugs-more) | ***CLOSED in 56*** |
| **B6** | `instanceof` is never written | [ibid.](../the-condition-report/09-the-demonstration.md#seen-bugs-more) | ***CLOSED in 56*** — 24 sites to 0 |
| **B7** | ***the contents' number columns and indent steps*** | [ibid.](../the-condition-report/09-the-demonstration.md#b7) | **[U6](#u6)** |
| **B8** | ***the title block sits 92px high; the abstract has no first-line indent*** | [ibid.](../the-condition-report/09-the-demonstration.md#b8) | **[U7](#u7)** |
| **W1** | a type's ancestry writes a class the kind disowns | [the review](62-sprint-56--the-encyclopedia.md#a1) | ***RULED NOT A BUG*** by Doug |
| **W2** | ***`$Chapter.classes` searches on every read*** | [ibid.](62-sprint-56--the-encyclopedia.md#a1) | **[U4](#u4)** |
| **W3** | = B4 | | **[U2](#u2)**, **[U3](#u3)** |
| **W4** | `parenthetical` | | ***RESOLVED*** — it is the state, not a strike |
| **W5** | = B6 | | ***CLOSED in 56*** |
| **W6** | ***a chapter's anchor carries no class*** | [ibid.](62-sprint-56--the-encyclopedia.md#a1) | **[U5](#u5)** |
| **W7** | ***the format pattern is barely used*** — 2 of 59 kinds | [ibid.](62-sprint-56--the-encyclopedia.md#a1) | **[U3](#u3)** — *a finding about a pattern, not a defect in 57 kinds; it is answered by designing what a format IS, never by fitting one to every kind* |
| **A4** | ***the trickle back to markdown*** | [ibid.](62-sprint-56--the-encyclopedia.md#a4) | **[U9](#u9)** — *the three numbers were fixed at the close; three `.pd-item` rules survive a deleted kind* |
| **A6** | ***markdown is not yet a place to take notes*** | [ibid.](62-sprint-56--the-encyclopedia.md#a6) | **[U9](#u9)** |
| **owed** | the encyclopedia's contents is flat where the paper's nests | [ibid.](62-sprint-56--the-encyclopedia.md#stand-files) | **[U8](#u8)** |

***Nothing in either source is unhomed.*** **Seven entries are already closed and are registered above so that a reader does not go looking for work that is done.**

## <a id="size"></a>The size of the work, measured before it was divided

***[A dispatch is checked against the SIZE of the work](../../../../.claude/library/our-skillset/29-ce-plan.md), and the measuring was done first:***

| | measured |
|---|---|
| **the six `view()` overrides** | `$Format` 2 lines · `$Title` 5 · `$Path` 2 · `$Ref` 4 · `$Reference` 3 · `$Type` 1 — ***17 lines of body across six files*** |
| **the citations** | the paper does it in **7 `<PageFold>` entries and 12 `<Citation>` marks**; `/turing` holds **88 body paragraphs** and a references section that is an empty `<Heading>` |
| **the contents geometry** | **3 values wrong** out of 8 measured, and 5 already ticked |
| **the title block** | ***one value moves four things*** — title, author, abstract heading and abstract together |
| **markdown** | **3 stale selectors** and a heading scale |

***So this is one session's work, not a division.*** **It is written as ten units because they are separately verifiable, not because they are separately owned.**

## <a id="decisions"></a>Decisions

### <a id="d1"></a>D1 · ***A kind that today overrides `view()` becomes one of two things, and never a third***

**Either it declares `parenthetical` — it is not there to be seen — or it overrides `print(content)`.** *There is no third answer, and a kind that fits neither is [U3](#u3)'s design, not a special case.*

***Chosen over*** **a guard in the framework that forbids the override.** *Doug: "You can validate NO direct view if you want, though I think that's kind of serious. I would rather add it as a convention. Maybe a rule meant to be broken someday but not in the framework, in the library where most implementations are terminal."* **So the rule is enforced by there being no violations left, and by a promise that counts them — not by machinery that forbids it.**

### <a id="d2"></a>D2 · ***What a chapter knows about its document is SET by the book, in the walk the book already makes***

**`$Book`'s bond already walks every writing beneath it to assign `book`.** *That walk is where a chapter is matched to the document whose title it names, once, and the result assigned.* ***Chosen over*** **caching the getter**, *which is the same derivation with a memo in front of it —* **Doug: "No you don't derive… You just set a book."**

### <a id="d3"></a>D3 · ***Every pixel claim in this sprint is made against the cached raster, never by eye***

**The procedure is written down** — [Public Audit Against The Page](../the-public-skillset/06-public-audit-against-the-page.md) — *and the coincidence that makes it work (a US-Letter PDF at 100% is 816 CSS pixels, and so is our sheet) is checked at the start of each measuring run rather than assumed.* ***Chosen over*** **screenshots compared side by side**, which is [what produced "you are VERY far away" against work I had called close](62-sprint-56--the-encyclopedia.md#a5).

### <a id="d4"></a>D4 · ***The encyclopedia's citations are the real article's, not invented ones***

**Wikipedia's Turing article carries its own reference list; the entries are taken from it.** ***Chosen over*** **plausible-looking citations**, *because a demonstration that fabricates a source is a demonstration that cannot be shown to anyone.* **The demo may invent CONTENT and may not invent KINDS — this is content, and it is sourced.**

### <a id="d5"></a>D5 · ***A theme value changed in `article` is checked on the markdown page in the same act***

***The sprint's sharpest lesson and it is one sentence:*** **a theme overrides by PREFIX, so adding a prefix to the article theme silently changes markdown.** *There is no mechanism that catches this — only the habit of looking at the other page before moving on.*

## <a id="units"></a>Units

### <a id="u1"></a>U1 · ***The citations reach the encyclopedia*** — B3

**Mechanism:** *the machinery exists and the demo does not use it.* **A `<PageFold>` in a reference entry gives that paragraph a key; a `<Citation>[n](key)</Citation>` anywhere in the book reaches it** — [`src/reference/Fold.tsx`](../../package/src/reference/Fold.tsx) makes the key, and the paper proves the resolution at 7 entries and 12 marks.

**Files:** `.wiki/.public/alan-turing/9-references.tsx` and its mirror in `.wiki/` · the body chapters that carry a claim worth citing · `src/encyclopedia/Theme.tsx` *only if the mark needs Wikipedia's superscript form.*

**Visible end:** ***a numbered mark after a sentence on `/turing` that jumps to the matching entry in References, and back.*** **A hand-authored page could fake the LOOK of `[1]` and could not fake the jump**, because the key is minted by the fold and read by the citation.

**Depends on:** nothing.

### <a id="u2"></a>U2 · ***No kind overrides `view()`*** — B4, W3

**Mechanism:** [D1](#d1), applied five times. *`$Type` is not drawn, so it declares `parenthetical`. `$Path`, `$Ref`, `$Reference` and `$Title` each write an element or a substitution, which is what `print(content)` is for.*

***What this BUYS, and it is the reason the rule exists:*** **`$Writing.view()` applies the classes, the meaning-and-fold anchor, and `reflection.formatted` — so a kind that replaced it was silently unreachable by every sheet and every format.** *Measured last sprint: 32 of 33 anchors on `/turing` were classless for exactly this reason, and `$Reference` and `$Ref` each carry a comment admitting it.*

**Files:** `src/writing/Type.tsx` · `src/reference/Path.tsx` · `src/reference/Ref.tsx` · `src/reference/Reference.tsx` · `src/library/Title.tsx`.

**Visible end:** ***both pages draw the same text they draw today*** — *this is a refactor and its end is that nothing moved* — **plus a promise that greps `src` for `override view()` and expects only what [U3](#u3) leaves standing.**

**Depends on:** ***Doug's yes*** — this is `src`, and it removes members.

### <a id="u3"></a>U3 · ***DESIGN OWED — a format draws without a view, and adds no element*** — B4's sixth kind, W7

***This unit is denied files, scenarios and dependencies, and it is kept as a unit so it cannot be mistaken for done.***

**What is not designed:**

- **`$Format.view()` exists to UN-INHERIT `$Writing.view()`** — *its own comment says so.* **A format has no block to draw; it holds what chemistry hands it as `this[children]`.** *Every seam `$Writing.view()` offers assumes a writing drawn FROM ITS BLOCK, and a format is not that.*
- **`$Format.format()` returns `<Worn of={this}>{drawn}</Worn>`, which ADDS AN ELEMENT** unless the selector happens to be the tag of what it styles. ***Doug: "We don't want ANY formatter ever adding an element."*** *That is a ruling the code does not yet satisfy, and it is the same question from the other end.*
- **[W7](62-sprint-56--the-encyclopedia.md#a1) belongs here too.** *That only 2 of 59 kinds carry a format is a finding about what a format IS — answering it by fitting formats to 57 kinds would be work nobody can see and would multiply the two faults above by 57.*

**What must be designed before this is buildable:** ***whether a format is a piece of writing at all***, *and if it is, what `view()` means for a thing that is worn rather than drawn.* **Two rejected attempts are on the record** — [`$BookFormat` restyled the sheet in place and `$ChapterFormat` drew ten refusal panels](62-sprint-56--the-encyclopedia.md#landed-two) — *and both failed for the same reason: chemistry restyles in place only for a class that WROTE the element it is styled as, which a format never does.*

### <a id="u4"></a>U4 · ***A chapter's classes are set, not searched*** — W2

**Mechanism:** [D2](#d2). *`$Book`'s bond walks every writing beneath it; during that walk each chapter is matched to the document whose title it names, and the document's classes are ADDED to the chapter with `addClass` — the member that already exists for this.* **The `classes` getter override is deleted.**

**Files:** `src/library/Book.tsx` · `src/library/Chapter.tsx`.

**Visible end:** ***the paper's 65 contents entries carry exactly the classes they carry today*** — *the appendices still tell themselves apart from the body* — **and the 715 title comparisons per draw become 65 done once.**

**Depends on:** ***Doug's yes*** — `src`.

### <a id="u5"></a>U5 · ***A chapter's anchor is addressable*** — W6

**Mechanism:** *`$Chapter.print` writes a `<div>` carrying the classes and an `<a>` carrying none, so the one element a sheet most wants to address — the contents row's link — is the one it cannot reach.* **The anchor gets a class.**

***BLOCKED ON A NAME, which is Doug's*** — [names are never mine to choose](../../../../.claude/library/..teamsmanship/05-territory.md). **Three shapes are on the table and they differ in more than spelling:** *the anchor takes the chapter's own classes; the anchor takes one new class Doug names; or the anchor becomes a piece of writing and is classed by the machinery that classes everything else.*

**Files:** `src/library/Chapter.tsx`, and possibly `src/article/Theme.tsx` if a rule can then stop reaching through the row.

**Visible end:** ***a theme rule that addresses the contents link directly instead of `> .pd-chapter > a`.*** **Today's `top_fontWeight` group is exactly that reach, and it is the proof.**

### <a id="u6"></a>U6 · ***The contents columns match the page*** — B7

**Mechanism:** *three values in the article theme, each already measured against the raster.* **The number column gets a width PER LEVEL rather than one width for all three; the indent step becomes 22px then 34px rather than 23px twice; a top-level group opens with a blank line.**

**Files:** `src/article/Theme.tsx` · *and [D5](#d5) — `src/markdown/Theme.tsx` is looked at in the same act.*

**Visible end:** ***the audit's table with three more ticks in it*** — level-1 title x at 117 not 134, level-3 number x at 152 not 142, and a gap before each top-level group.

**Depends on:** nothing. *Values, within [the rulings already recorded](62-sprint-56--the-encyclopedia.md#stand-rulings).*

### <a id="u7"></a>U7 · ***The title block and the abstract match the page*** — B8

**Mechanism:** ***one value moves four things.*** *LaTeX's `\maketitle` opens ~116px below the margin before the title; our cover opens ~24px.* **The abstract additionally wants a 20px first-line indent and a 36px inset rather than 40.**

**Files:** `src/article/Theme.tsx` · `src/formatting/Theme.tsx` *only if the opening belongs to every cover rather than to LaTeX's.*

**Visible end:** ***the four rows of [B8](../the-condition-report/09-the-demonstration.md#b8)'s table within a pixel*** — title at y≈212, author at y≈257, Abstract heading at y≈329, and the abstract's first line indented.

**Depends on:** ***the ruling of whether a cover's opening is LaTeX's or everyone's*** — *decidable by looking at what markdown does with it, which is [D5](#d5) again.*

### <a id="u8"></a>U8 · ***The encyclopedia's contents nests*** — owed from Sprint 56

**Mechanism:** *the same one the paper uses.* **`<Chapter>` holds sub-`<Chapter>`s, and `$Composition.parts()` keeps a nested writing of its own kind** — *the paper's `.table.tsx` is 65 entries three deep and Turing's is 10 flat.* **The encyclopedia theme numbers nothing, so nesting shows as indent alone, which is what Wikipedia does.**

**Files:** `.wiki/.public/alan-turing/.table.tsx` and its mirror.

**Visible end:** ***`/turing`'s contents indents its sub-sections the way wikipedia.org does***, and the count rises from 10 to whatever the article's own headings give.

**Depends on:** nothing. *Demo content.*

### <a id="u9"></a>U9 · ***Markdown is a place to take notes*** — A4's remainder, A6

**Mechanism:** *two things, both small.* **Three theme rules still select `.pd-item`, a class no kind writes any more** — *they are dead in both themes, and one of them, `item_marginTop`, is markdown's only spacing rule for a thing that no longer exists.* **And the heading scale went flat when it stepped down a notch: the title is 24px and a section heading sits close behind it, so a long note has no relief.**

**Files:** `src/markdown/Theme.tsx` · `src/article/Theme.tsx` *(the `.pd-item` half of a shared selector)*.

**Visible end:** ***a markdown page read as a note*** — *its contents numbers already blank, its headings stepping visibly, and no rule in either theme naming a kind that does not exist.* **The honest test is the one the review used:** *would I take notes in this?*

### <a id="u10"></a>U10 · ***The gate, driven and seen***

**Mechanism:** *the loop [written down at the close](62-sprint-56--the-encyclopedia.md#stand-loop)* — **build quick, restart both servers, drive the real browser, read the numbers.**

**Visible end:** ***the four numbers stated, not summarised:*** `tsc` on `src`/`.latex`/`.wiki`, the suite's count and time, the paper's characters / panels / contents entries, and `/turing`'s. **[No completion claim without a fresh run in the same message.](../../../../.claude/library/our-skillset/30-ce-work.md)**

## <a id="scenarios"></a>Test scenarios

| unit | scenario | input · action · expected |
|---|---|---|
| **[U1](#u1)** | ***the citation resolves*** | a `<Citation>[1](key)</Citation>` in a body chapter and a `<PageFold>key</PageFold>` in a reference entry · draw `/turing` · **the mark's `href` equals the entry's `id`, and both exist in the DOM** |
| **[U1](#u1)** | ***a citation with no fold*** | a citation naming a key nothing mints · draw · **it refuses visibly rather than drawing a dead link** — *and if it does neither, that is a finding to write down, not to route around* |
| **[U1](#u1)** | ***integration*** | `/turing` · count panels · **0** |
| **[U2](#u2)** | ***the rule holds*** | `src` · grep `override view()` · **only what [U3](#u3) leaves** |
| **[U2](#u2)** | ***nothing moved*** | both pages before and after · character count · **equal, or every difference explained** |
| **[U2](#u2)** | ***a reference is reachable by a sheet*** | `/turing` · count anchors carrying a `pd-` class · **all of them** |
| **[U4](#u4)** | ***the appendices still know themselves*** | the paper's contents · read the classes on the appendix entries · **unchanged from today** |
| **[U4](#u4)** | ***the search is gone*** | `$Chapter` · read the class · **no `searchFor` in a getter** |
| **[U4](#u4)** | ***a chapter naming no document*** | a `<Chapter title="Nothing">` · draw · **it draws its own classes and does not throw** |
| **[U6](#u6)** | ***the audit*** | `pnp.pdf` p1 raster · scan for columns of ink · **level-1 title x 117, level-2 number x 118, level-3 number x 152, right edge 718, pitch 18** — *ours within a pixel of each* |
| **[U6](#u6)** | ***markdown did not move*** | the markdown book's contents · **numbers still blank, no new prefix leaking through** |
| **[U7](#u7)** | ***the block*** | the raster · row scan · **title 212, author 257, Abstract 329** — *ours within a pixel* |
| **[U7](#u7)** | ***the abstract's first line*** | `Range.getClientRects()` over the abstract · **the first line box starts 20px right of the rest** |
| **[U8](#u8)** | ***the nesting draws*** | `/turing` · count `.pd-chapter > .pd-chapter` · **more than zero, matching the article's own sub-headings** |
| **[U9](#u9)** | ***no dead selectors*** | both themes · grep `pd-item` · **0** |
| **[U9](#u9)** | ***relief*** | the markdown page · computed sizes of title and section heading · **visibly stepped, and stated as numbers** |
| **[U10](#u10)** | ***the whole gate*** | *as above* | **four numbers, each read from a fresh run** |

## <a id="risks"></a>Risks

| | risk | what mitigates it |
|---|---|---|
| **R1** | ***a prefix added to `article` silently changes `markdown`*** — [the sprint's sharpest lesson](62-sprint-56--the-encyclopedia.md#a4) | **[D5](#d5)** — the markdown page is looked at in the same act, every time |
| **R2** | ***[U2](#u2) changes what WRAPS a drawing.*** A kind that skipped `view()` skipped the anchor and `reflection.formatted` too; giving those back may draw something new | **character counts on both pages before and after, and every difference explained rather than accepted** |
| **R3** | ***[U7](#u7) moves four things with one value***, so a fix that lands the title can miss the abstract | **all four rows measured in the same run** |
| **R4** | ***[U2](#u2), [U4](#u4) and [U5](#u5) are `src`*** and need Doug's yes before a line is written | **they are asked as one batch, and nothing in `src` moves until he answers** |
| **R5** | ***[U1](#u1) could fabricate a source*** | **[D4](#d4)** — the entries come from the real article's own list |
| **R6** | ***the pixel work could chase a colour that is not there***, as two sessions already did | **sample the darkest pixel in a region before believing a colour** — [the trap is written down](../the-public-skillset/06-public-audit-against-the-page.md) |

## <a id="order"></a>Order

**[U1](#u1) and [U8](#u8) first** — *demo content, no permission needed, and they make `/turing` a page worth measuring.* **Then [U6](#u6), [U7](#u7) and [U9](#u9)** — *theme values within recorded rulings.* **Then [U2](#u2), [U4](#u4) and [U5](#u5) on Doug's yes.* **[U10](#u10) throughout, never only at the end.** ***[U3](#u3) is designed with him or not at all.***

## <a id="check"></a>The plan checked against itself

- ***Every requirement has a home*** — **the [table above](#requirements) is the check, and seven of the sixteen entries are already closed.**
- ***Every unit names a mechanism and a visible end*** — **except [U3](#u3), which names neither and says so.**
- ***The thin section is [U5](#u5)***, *and it is thin because it is blocked on a name rather than on a design.*
- ***What this plan does NOT claim:*** **that `$Format` is fixable this sprint.** *[U3](#u3) is the honest shape of that, and [Sprint 48 is why it is written this way](06-sprint-48--subjects-and-the-library.md) — a unit whose mechanism was never designed, written as ordinary work, took a sprint down.*

## <a id="record"></a>THE RECORD OF THE SPRINT, unit by unit

| unit | state |
|---|---|
| **[U1](#u1)** citations on `/turing` | ***LANDED*** — 12 marks reading 1–12 in the order the article reads them, 12 entries, **all 12 resolving**, drawn as a bracketed superscript |
| **[U2](#u2)** no kind overrides `view()` | ***LANDED*** — five swept. `$Type` declares `parenthetical`; the other four write their element in `print`. **Both pages byte-identical afterwards**, which is what a refactor's end looks like |
| **[U3](#u3)** the format's drawing | ***DESIGN OWED, untouched by design*** |
| **[U4](#u4)** a chapter's classes are set | ***LANDED*** — the book names its chapters in the walk it already makes; 715 comparisons a draw become 65 done once, and the appendices still tell themselves apart |
| **[U5](#u5)** the chapter's anchor | ***LANDED*** — the link became a piece of writing, so it is classed by the machinery that classes everything else. **Classless anchors 65→0 and 32→0**, and `$Chapter` no longer holds a separate `$Path` |
| **[U6](#u6)** the contents columns | ***LANDED, six ticks*** — 96/118, 118/151, 151/198, pitch 18, a blank line before each top group |
| **[U7](#u7)** the title block | ***LANDED, four ticks*** — 146 / 193 / 266 / 290, the abstract inset 36 and indented 20 |
| **[U8](#u8)** the nested contents | ***LANDED*** — 32 rows, 22 nested, three deep |
| **[U9](#u9)** markdown | ***LANDED*** — the dead `.pd-item` rules gone, the paper's indent and number-steps neutralised for a note, and the heading scale stepping **24 / 20 / 16 / 14** where the title and h2 had both been 24 |
| **[U10](#u10)** the gate | ***`tsc` src 0 · .latex 0 · .wiki 0 · suite 102 green in 3.24s · paper 38,164 chars, 0 refusals, 65 rows all resolving, 0 classless anchors · `/turing` 58,826 chars, 0 refusals, 32 rows all resolving, 0 classless anchors, 12/12 citations.*** Head `7bbe64d`; **nothing pushed** |

### <a id="stand-u11"></a>U11 · ***THE SHEET ADDRESSES KINDS*** — not planned, and the thing Doug actually asked for

***Doug, after the restart:*** **"you are looking not even mostly for looks, but for the codebase using natural patterns."** *So the pass that closes this sprint is not a pixel.*

**Seventy-five `@select` groups named an ELEMENT TYPE where every writing already carries its `pd-` classes** — [the convention was written down and not kept](../the-coding-style/03-the-coding-style.md#the-drawing-conventions). ***Fifty-nine now name the kind***, the encyclopedia theme most of all, *which is the runway for wikipedia.*

***Proven, not asserted:*** **a computed-style fingerprint of 1,826 elements across all three readings — 34 properties each plus geometry and `::before`/`::after` content — taken before and diffed after.**

| | |
|---|---|
| ***the paper*** | ***0 differences across 761 elements*** |
| ***markdown*** | **three figcaptions**, 14.4px → 14px — its own rule now wins where the base's had |
| ***`/turing`*** | **eleven section headings, weight 600 → 400** — *the encyclopedia DECLARES `font-weight: normal` and that rule had never applied, out-specified by its own general `.pd-heading`.* **Wikipedia's `h2` is normal weight, so the conversion woke a dead rule** |

***AND ONE FINDING THAT APPEARED THREE TIMES IN AN AFTERNOON*** — **[a class is worn by every kind beneath the one that names it, and an element type is not](../solutions/69-the-class-that-every-kind-beneath-it-wears.md).** *A cover, a contents and a synopsis are all documents; [a contents row wears its document's classes](#u4); an illustration IS an image.* **Each cost a measured breakage and each is now commented at the line.**

***AND A REGRESSION OF MY OWN, CAUGHT BY THE CATCHUP:*** **`.pd-item`.** *I deleted three rules for it in [U9](#u9) on the evidence that it matched nothing on either page — which is absence of USE, not absence of a kind.* **`$Item` is live and prints `<li className>`.** ***Restored.***

### <a id="stand-u12"></a>U12 · ***EVERY ELEMENT A KIND WRITES CARRIES A CLASS*** — and a cell is a kind

***Doug ruled both, and they are the same rule twice.*** **A kind that wrote several elements classed only the outer one**, *which is [W6](62-sprint-56--the-encyclopedia.md#a1) — the chapter's classless anchor — appearing wherever nobody had looked.*

| | |
|---|---|
| **`$Illustration`** | wrote `<figure>`, `<img>`, `<figcaption>` and classed one. *The picture says `pd-image` and the words under it say `pd-caption`* |
| **`$Heading`** | ***already computed its level*** to choose `h2`…`h6`, and now writes it: `pd-level-1..3` **from the same reading**, so a sheet reaches a level without knowing our tag mapping |
| **`$Cell`** | ***a table's cells were "every composition that is not the heading"*** — a positional rule — **and the sheet reached them as `th, td`, elements NOTHING in this repository writes**, because [a table is a grid by Doug's own ruling](62-sprint-56--the-encyclopedia.md#stand-rulings). `cells()` asks by type now |

***The count: 75 element-naming groups to 15***, and each of the fifteen carries its reason at the line — *it reaches what the library did not write (`img`, `h1`, a foreign `figcaption`), or the element says what a class cannot, or there is no class for "any link".*

***AND ONE MEASURED THING THAT NO AMOUNT OF READING WOULD HAVE GIVEN:*** **the level class had to be `.pd-level-N` and not `.pd-heading.pd-level-N`.** *The two-class form outranks `.pd-title .pd-heading` where the old element form did not, and the paper's title fell from 23.04px to 19.2.* **Adding a class changes every tie it takes part in.**

### <a id="stand-b9"></a>ONE MORE, FOUND BY LOOKING AND FIXED — ***[B9](../the-condition-report/09-the-demonstration.md#b9)***

***`/turing` drew its body in a 135px column at any width below 1120px*** — **100 of 120 paragraphs**, *with words breaking mid-syllable* — **and every gate this page has ever had was green through it**, because a character count and a refusal count cannot see a layout. *Found by taking a screenshot at a width nobody had tried.* **The narrow rule moves `article`, `.pd-index` and `footer` to column 1 and forgets `.pd-synopsis`, which stays pinned to a column that no longer exists, so the browser makes an implicit one and gives it the width.* ***Proved pre-existing against `5f70970` before it was touched.***

### <a id="stand-instrument"></a>The instrument changed, and it is the sprint's most reusable finding

***The raster scan was replaced by the PDF's own text layer*** — **`pnp.json`, every glyph with its coordinates in a 612×792 page, which is 816 CSS pixels at 100% exactly as our sheet is.** *No calibration, no viewer offset, and the columns fall out of a two-line grouping by `y`.* **The raster had been reading about 44px low throughout — a PDF viewer's toolbar — so [B8](../the-condition-report/09-the-demonstration.md#b8)'s "92px too high" was a real fault measured against a shifted origin.** *The columns it gave were right and the vertical block was not, and nothing in the method said which.* ***[The audit chapter owes this correction](../the-public-skillset/06-public-audit-against-the-page.md).***

### <a id="stand-lessons"></a>What was learned, and where it went

- ***[A value can be said twice](../solutions/68-the-value-that-was-said-twice.md)*** — under two prefixes on one selector, or twice under one prefix — **and the later saying wins in silence.** *It cost three passes at a margin that never moved, and it was the whole of markdown's "flat scale".* **The convention now has both halves, [in the coding style](../the-coding-style/03-the-coding-style.md).**
- ***A refactor's end is that nothing moved.*** **[U2](#u2) and [U5](#u5) changed how five kinds draw and the pages came out to the same character counts** — which is the only evidence that a sweep of this shape is safe.
- ***Python's `glob` skips dotted directories***, and the served demo tree IS the dotted one. **Half a renumbering landed in the mirror and not in what the browser reads**; the fix is to name the trees rather than to match them.

### <a id="stand-open"></a>What is open

- ***[U3](#u3), and only [U3](#u3).*** **`$Format.view()` un-inherits `$Writing.view()` and `$Format.format()` wraps by construction**, so *"we don't want ANY formatter ever adding an element"* is a ruling the code does not satisfy. **[W7](62-sprint-56--the-encyclopedia.md#a1) — 2 of 59 kinds carry a format — is the same question from the other end.**
- ***Two names are Doug's and are NOT settled here:*** **`$Theme.measure`**, and **`marker_`** — *a proxy for the encyclopedia theme's citation-mark group, used because `cited_` was already taken by `.pd-cited`.*
- ***One number is 2px out and is left alone:*** **the contents row's right edge, 720 against the page's 718.** *Within the audit's own tolerance and not worth a rule.*

---

## <a id="stand"></a>WHERE THINGS STAND

> ***RUN `/ce-brainstorm`.*** **The sprint's own work is done and the next thing is Doug's to set** — *he has said it will be wikipedia.* **Nothing here is half-finished; one design is owed and it is [named below](#stand-blocked).**

### <a id="stand-objective"></a>What this sprint was for, and what he said at the end

***The objective:*** **clear the whole bug backlog — [B1–B8](../the-condition-report/09-the-demonstration.md#seen-bugs) and [the seven warts](62-sprint-56--the-encyclopedia.md#a1) — and finish LaTeX and markdown.** *Doug: "let's get ALL of it done. This is the sprint we finish latex and markdown!"*

***What he said mid-sprint, and it changed the work:*** **"you are looking not even mostly for looks, but for the codebase using natural patterns."** *So the pass that closes the sprint is [U11](#stand-u11) and [U12](#stand-u12) — the sheet addressing kinds — and not a pixel.*

***And what he said at the very end, which is the most important line in this chapter:*** **"Nope! No citations. What else did you miss? That's concerning."**

### <a id="stand-miss"></a>THE MISS, written first because it is the one thing a reader must not inherit

***I said citations worked. They work in TWO of the three readings and do not exist in the third.***

| | |
|---|---|
| ***what I measured*** | **12 of 12 citations resolve on `/turing`, 7 of 7 on the paper** — *the mark's `href` matches an `id` in the DOM* |
| ***what that could not see*** | **whether a citation LOOKS like a citation.** *`.pd-citation` has ZERO rules in [the base sheet](../../package/src/formatting/Theme.tsx)* — the article theme writes the brackets, the encyclopedia writes the superscript, **and the framework's own look draws a plain number.** *Doug was looking at the probe, which wears the base.* |
| ***the lesson, and it is one this branch keeps relearning*** | ***a resolving link is a downstream number.*** **"It resolves" is not "a reader sees a citation."** *[Look at the artifact](../the-public-skillset/06-public-audit-against-the-page.md) — and look at it in EVERY reading, not the one that flatters.* |

***WHAT ELSE WAS MISSED — asked and answered rather than apologised for.*** **Driven on the probe: nine kinds are drawn that NO rule anywhere names.**

- ***The base has no rule for `pd-citation`, `pd-appendix`, `pd-references`, `pd-synopsis`, `pd-theorem` or `pd-math`*** — **all of that styling lives in the article theme**, *so the base is not a standalone look for a book that has an apparatus.* **Grounded: a count over the three themes gives `base:0` for every one of them.**
- ***`pd-level-3` is named by the article and markdown themes and NOT by the base*** — **which is mine, from today.** *The base sizes levels 1 and 2; I added the class and stopped at two.*
- ***`pd-phrase` and `pd-sentence` are unnamed deliberately*** — **HTML has no element for them and nothing should style them.** *Those two are not a gap.*

***So the honest answer to "is latex as a component library and theme fairly functional":*** **the THEME is** — *on the paper only four classes go unnamed and two of those are the demo's own* — **and the LIBRARY'S DEFAULT LOOK is not**, which is what a consumer meets first.

### <a id="stand-done"></a>What is done, in plain words

**The whole of [B1–B8](../the-condition-report/09-the-demonstration.md#seen-dispositions) is closed**, and so are six of the seven warts.

- ***A kind writes its element in `print` and nowhere else.*** **Five `view()` overrides swept; a chapter's link became a piece of writing, so anchors no sheet could reach went 65 to 0 on the paper and 32 to 0 on `/turing`.**
- ***The paper's geometry sits on the real page's own numbers*** — **ten measured values exact**, read off the PDF's text layer rather than a raster.
- ***`/turing` cites twelve real sources, all resolving, and its contents nests 32 rows three deep.***
- ***The sheet addresses kinds*** — **75 element-naming selector groups down to 15**, each survivor carrying its reason at the line. **`$Cell` is a kind; an illustration's picture and caption say what they are; a heading says its level.**
- ***Markdown reads as a note*** — its own scale, wikipedia-blue links, and the paper's indents neutralised.

### <a id="stand-blocked"></a>What is open, each with what it waits on

| | waits on |
|---|---|
| ***A format still adds an element*** — `$Format.view()` un-inherits `$Writing.view()` and `format()` wraps by construction, so **"we don't want ANY formatter ever adding an element" is a ruling the code does not satisfy** | ***a design, and it is Doug's to open.*** [U3](#u3) was denied files all sprint on purpose |
| ***The base sheet does not style six kinds it draws***, citation among them | **a decision: is the base a LOOK, or only the machinery a theme dresses?** *Nobody has said, and the answer decides whether this is a bug or the design* |
| ***`/turing` draws "Alan Turing" on top of its own account links*** — [B14](../the-condition-report/09-the-demonstration.md#b14), pre-existing, proved before anything was touched | **nothing. It is the first thing a reader sees on the page the next sprint is about** |
| ***Four empty section headings on `/turing`*** — [B13](../the-condition-report/09-the-demonstration.md#b10) | **demo content nobody has written** |
| ***Names that are Doug's*** | `pd-caption` · `pd-level-N` · `marker_` · `keyed_` · `$Theme.measure` · the keyword `inherited-class` |

### <a id="stand-verified"></a>Verification — what was actually run

***`tsc` 0 on `src`, `.latex` and `.wiki` · suite 102 of 102 green in 2.19s.***

***Driven in a real browser:*** **paper 38,164 chars, 0 refusals, 65 contents rows all resolving, 0 classless anchors · `/turing` 58,806 chars, 0 refusals, 32 rows all resolving, 0 classless anchors, 12 of 12 citations.**

***And the instrument this sprint added, which is the reusable part:*** **a computed-style fingerprint — every element under `.pd-book` on all three readings, 1,826 of them, 34 properties each plus its box and its `::before`/`::after` content, taken before a change and diffed after.** *The whole selector refactor finished at* ***0 differences on the paper against the baseline that opened it.*** **A character count sees none of this — and neither does it see a citation with no brackets.**

### <a id="stand-wrong"></a>Wrong turns already taken — do not retry these

- ***Converting `article` to `.pd-document` without saying what it is NOT.*** **846 differences and the three-column layout gone** — a cover, a contents and a synopsis are all documents. [The whole diagnosis](../solutions/69-the-class-that-every-kind-beneath-it-wears.md).
- ***`.pd-heading.pd-level-1` rather than `.pd-level-1`.*** **The two-class form outranks `.pd-title .pd-heading` where the element form did not, and the paper's title fell 23.04px to 19.2.**
- ***`.pd-illustration .pd-image` in place of `.pd-illustration img`.*** **Moves the paper 138px** — an illustration IS an image, so the figure answers `.pd-image` too.
- ***Deleting a rule because its class matched nothing on the page.*** **That is absence of USE.** *`$Item` is live and I deleted three of its rules on that evidence.*
- ***Blaming the suite for being slow.*** **It is 2.19s.** *The machine was at 100% CPU with 0.4 GB free of 15.5 — and my own `serve.sh` had orphaned 50 node processes, which is fixed.*

### <a id="stand-read"></a>Read these first — three, and they are a starting point rather than a boundary

1. ***[The record above](#record)*** — **what the backlog was and what closed it**, unit by unit.
2. ***[The class that every kind beneath it wears](../solutions/69-the-class-that-every-kind-beneath-it-wears.md)*** — **the trap that will bite anyone touching a selector**, and the fingerprint method that catches it.
3. ***[The drawing conventions](../the-coding-style/03-the-coding-style.md#the-drawing-conventions)*** — **four conventions, all now enforced or measured**, including the one `$Format` still breaks.

### <a id="stand-see"></a>How to see it

```sh
cd library/.public/package
node ../../../node_modules/rollup/dist/bin/rollup -c --environment QUICK   # 0.3s
bash serve.sh                                                             # restarts both, ~15s
```

**The paper at `http://localhost:5310/`** — *there is a Markdown button on the strip; that is the markdown reading.* **The framework's own look at `http://localhost:5310/?probe`** — ***start there, because that is where the citation has no brackets.*** **The encyclopedia at `http://localhost:5311/turing`.**

### <a id="stand-commits"></a>The commits

***Nine local commits, head `f2f0a38`. NOTHING IS PUSHED*** — **by Doug's standing rule, project code is committed locally as often as wanted and never pushed until he says.** *And this chapter cannot be committed here at all: `library/.public/.lib` is in `.gitignore`, so the branch library lives in the working copy only.* ***That is a real exposure, and it is his to rule rather than mine to route around.***
