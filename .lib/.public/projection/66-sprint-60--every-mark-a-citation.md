# Sprint 60 — Every Mark a Citation

- **author:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **coauthor:** [Gabby](../../../../.claude/library/..teamsmanship/..team/gabby/gabby-and-the-visual-voice/.cover.md)
- **style:** [The Coding Style](../the-coding-style/03-the-coding-style.md)
- **status:** `closed` — *planned and closed 2026-09-11; the written footnote owed to chemistry's fix, see Where things stand*
- ***The chapter name is a proxy; Doug's to rename.***

---

***The end, from chapter zero:*** **every bracket mark the demo's prose carries is a citation that numbers itself and lands — 42 today, none as text — a citation list draws `[191, 194, 193]` as the paper does, the paper's notes stand as footnotes drawn at the bottom, the cited entry's landing highlight fades, a mark is set with LaTeX's space, and equation numbers draw at the right.** *Doug: "Please put all the links that were in the document. Most have disappeared."*

**Read first:** this chapter · [Sprint 59 § Where things stand](65-sprint-59--the-population-that-never-drew.md#stand) · [Writing a Book, ch. 4](../writing-a-book/04-the-book-s-little-framework.md) · [The Motif, ch. 4](../the-motif/04-themes-per-type-formats-per-instance.md) · chemistry's [particle/11 § animation](../../../chemistry/.lib/particle/11-styled-particles.md#animation) · [Sprint 58 § the sweep](64-sprint-58--the-chapter-that-is-its-view.md#sweep) · `.latex/.public/.paper/bibliography.mjs` and `pnp-notes.json` · then the code named in each unit.

## <a id="requirements"></a>Requirements — ***the register***

| | demand | state |
|---|---|---|
| **R1** | every `[n]` mark a citation to the paper's nth entry | landed, 42 — [U1](#u1) |
| **R2** | one citation carrying several keys | landed — [U2](#u2) |
| **R3** | footnotes written at their phrase and drawn at the bottom, with a coalescing abstraction | the keyed Notes chapter landed; the written form and the footer owed to chemistry — [U3](#u3) |
| **R4** | the landing highlight fades | landed, and the page jumps like a link — [U4](#u4) |
| **R5** | LaTeX's space before a mark; rows landing below the strip | landed, 66 of 66 — [U5](#u5) |
| **R6** | equation numbers at the right | landed, per document — [U6](#u6) |
| **R7** | a citation of nothing refused | owed: no bond-time seat, the key drawn |

## <a id="decisions"></a>Decisions — ***the register***

- <a id="d1"></a>**D1** · the mapping a script over `references.tsx`, the key the entry's order — *held, `marks.mjs`.*
- <a id="d2"></a>**D2** · several keys are one citation — *held; and the brackets moved into the writing by ruling.*
- <a id="d3"></a>**D3** · footnotes coalesce and the place is an abstraction — *design owed, now with its reason: the gathering needs the scratchpad at bond, where the orphan is.*
- <a id="d4"></a>**D4** · the fade a base rule over chemistry's keyframes — *held; one block compiled.*

## <a id="units"></a>Units — ***the register***

- <a id="u1"></a>**U1** · the marks — 35 mapped, 0 unmapped, 3 lists; 42 citations.
- <a id="u2"></a>**U2** · the citation list — `keys()`, `entries()`, `numbers()`, `marks()`; `[1, 2]` pinned.
- <a id="u3"></a>**U3** · footnotes — the keyed Notes chapter, 50 notes, one mark placed by reading; the written form owed.
- <a id="u4"></a>**U4** · the fade seen — and the smooth scroll taken back by the page.
- <a id="u5"></a>**U5** · the space and the strip — `.pd-heading` in the landing rule; 0 to 66 of 66.
- <a id="u6"></a>**U6** · equation numbers — `(n)` at the right; the prefix refused once.

## <a id="scenarios"></a>Test scenarios

*Six stood here; the ones that survived are the citation promises in `.tests/citation.test.tsx`, and the drivers in `.latex/.public/.paper/` — `rows.mjs`, `cited.mjs`, `marks.mjs` in report mode — are the rest.*

## <a id="risks"></a>Risks

*Three stood here. K1 fired: the demo's prose carries a tenth of the paper, so one note's sentence was in it; the rest stand unmarked in the chapter, not forced.*

## <a id="order"></a>Order

*Ran U4, U6, U5, U2, U1, U3.*

## <a id="stand"></a>WHERE THINGS STAND — ***2026-09-11, closed, three commits from `0a8196f`; nothing pushed***

**Landed and seen, in order:** the fade compiles to one `@keyframes landed` on chemistry's build and runs ([U4](#u4)); the base theme's landing rule names `.pd-heading`, so the paper's contents rows landing below the strip went from 0 of 65 to 66 of 66 with the encyclopedia's 32 unchanged, and the seven marks take LaTeX's space ([U5](#u5)); a numbered equation draws `(n)` at the right — the first spelling refused by the styled compiler, *one prefix names one selector*, so the relative position joined the `equation` group ([U6](#u6)); a citation carries several keys, `keys()`, `entries()`, `numbers()`, `written()` joining, `$Ref.url()` admitting the comma list ([U2](#u2)); `marks.mjs` mapped 35 marks with none unmapped, so the paper draws 42 citations all numbered, `[203, 6]`, `[130, 68]`, `[191, 194, 193]` as the paper sets them ([U1](#u1)); and the notes ([U3](#u3)) in the form that is clean today — a keyed Notes chapter placed last, 50 entries generated from the paper by `notes-chapter.mjs`, the 15 exponents the extractor took for notes left out, and one footnote placed by `footnotes.mjs` where a mark's own words stand in our prose, note 43 after *"have this property."*, drawing `20`, its place among the notes, superscript, landing on it.

**Rulings taken on the way, each recorded in [Writing a Book, ch. 4](../writing-a-book/04-the-book-s-little-framework.md#citations):** the fade acts like a link, so the demo's page takes back latex.css's smooth scroll in its own `page.css`, since the theme may write no rule on body or html — the entry is in view and blue at a third of a second; a citation's default colour is Wikipedia blue and the paper's is ink, *"there's no color in Aaronson"*, the cite green gone; the brackets are in the thing so a writer controls them — `$Citation.written()` draws `[n]` through one seam, `marks()`, and `$Footnote` overrides it to the bare number, while the encyclopedia keeps its own bracket rules because its writer wrote the bare number; equations stay numbered per document, `(1) (1) (2) (3) (4)`, because *"if we don't have it in Aaronson, we don't have a model for it"* and the paper's page could not be read — pdfjs left the root `node_modules` today and was never a declared dependency.

**The written footnote, owed with its reason:** *"a footnote written at its phrase and drawn at the foot"* needs the foot to gather what the chapters draw, and the only place a book can gather that is the scratchpad at bond — where today every inline part keeps its orphan too ([Solutions 71](../solutions/71-the-population-that-never-drew.md)). So the footer stays the empty template method it is, and the margin that moves the gathering point is designed with it, when chemistry evaluates children once. Doug: *"a footnote isn't required… coordinated at the book level… I don't want to see a mess."*

**Gate at the close:** tsc src 0, `.latex` 0 · suite 104 of 104 · the paper 42 citations, 335 entries, 66 rows, 0 panels, 0 errors, 82,582 characters · `/turing` 12 citations, 0 panels · 3.18 million characters of CSS on the page are latex.css's fonts inlined by vite in dev, a note for Sprint 62's audit.
