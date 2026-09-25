# Sprint 63 — The Encyclopedia

- **author:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **coauthor:** [Gabby](../../../../.claude/library/..teamsmanship/..team/gabby/gabby-and-the-visual-voice/.cover.md), [Phillip](../../../../.claude/library/..teamsmanship/..team/phillip/phillip-and-the-visible-layer/.cover.md)
- **style:** [The Coding Style](../the-coding-style/03-the-coding-style.md)
- **status:** `implementation-ready` — *brainstormed 2026-09-11 and planned the same day; Doug redirected to this sprint before Sprint 62 closed, so [what 62 still owes](68-sprint-62--clean-foundations.md#stand) is carried at the foot*
- ***The chapter name is a proxy; Doug's to rename.***

---

***Doug, 2026-09-11, the brief:*** **"Let's close out the sprints on latex. It's good. And let's get Wikipedia stood up. You have all the patterns there. You can drive a browser. Right now we had the homepage almost pixel perfect… brainstorm a plan for restoring the homepage, modernizing its theme and formatting while keeping everything in the encyclopedia folder, and building components to go on the Turing page and just in general being ready to move forward… We want the wikipedia page to bear a strong strong resemblance to Wikipedia because you can fetch the site directly, but everything you need to make should be easily and elegantly made inside this framework, with validation, formatting, theming, dependency injection, and just in general using the component model. Make the code look like the rest of the code."**

***And the rulings at the brainstorm, verbatim:*** *the component library lives in* **"encyclopedia — and it should likely have more formats and more components. But the theme and formats are about adapting the existing ones too"** · *the ring is restored by* **"the kind writes its prop into its format"** · *the components are found by comparison —* **"Furniture is not a domain word. What is missing? Do the comparison and create the components we need to build wikipedia pages like that"** · **"Close 62 first: audit the eight, then Wikipedia"** · *the line between folder and app:* **"An encyclopedia might have a header. An article might. So perhaps it lives in there. There's not that much that should live in the app for the pages, but for the home page, we imagine there would be code that's specific"** · *the content:* **"Read the source, put it all in there. It's not that long"** · *the theme:* **registration, for a kind a Theme is its theme, fetched through `$`** · *the scope:* **"Focus entirely on encyclopedia… you'll get regression in latex… You have per component format. More than theme, I would think we would use that but why not use the latex project as a guide."**

## <a id="measured"></a>What was measured before a requirement was written

**The portal, Wikipedia's and ours, region by region:** wordmark and tagline · the ten featured languages around the globe · search with its language chooser · "Read Wikipedia in your language" · the full edition list by article count · the Foundation text with app badges · twelve other projects · the licence line. **Ours has every region.** *Two faults:* every one of the ten languages draws at `545,148`, position one's place, because `$Language` takes `at` from the markup and `$LanguageFormat` declares its own `$at` that nothing fills, and the globe's background resolves to `url("")` for the same reason — [`$Format.handed()`](../../package/src/writing/Format.tsx) is the seam and neither format overrides it; and the ten are a month stale — Wikipedia today lists English 7,237,000+, 日本語, Deutsch, Français, Русский, Español, Italiano, 中文, Polski, Português, and ours has two pairs swapped.

**The article, Wikipedia's Alan Turing at 1280 wide against ours:**

| Wikipedia's | theirs | ours | in the framework |
|---|---|---|---|
| header bar: wordmark, search, Donate / Create account / Log in, 66px high | 1 | 1, no search, the wordmark overlapping the links and the title | the app's `$Header` |
| main menu, left, 186 wide at x 53 | 1 | 0 | none |
| title, 28.8px Linux Libertine, at x 264 | 1 | `$Title` | present |
| toolbar: Article · Talk · Read · View source · View history | 5 tabs | 0 | none |
| "From Wikipedia, the free encyclopedia" and the short description | 1 + 1 | `$Subject` | present |
| contents, sticky, left under the menu, 176 wide | 32 rows | 32 rows, in the right column | `$TableOfContents`, misplaced |
| hatnotes | 5 | 0 | `$Hatnote` in `src`, and a second in the demo |
| infobox floated right in the lead, 310 wide, image, caption, headers, 32 cells | 1 | 1 as its own column, 12 lines, no image | `$Infobox` |
| headings h2 / h3 / h4 | 10 / 20 / 2 | 10 / 20 / 2 | matches |
| thumbnails floated right, 200 wide, captioned | 14 | 0 | `$Figure`, and the theme floats it |
| quotations | 14 | 0 | `$Quote` |
| citation marks | 294 | 12 | `$Citation` |
| reference lists, numbered | 2, 256 entries | 1 document of paragraphs numbered by hand | `$References`, `$Notes`, `$Entry` |
| sister project boxes | 4 | 0 | none |
| navboxes at the foot | 6 | 0 | none |
| categories | 1 | 0 | none |
| site footer | 1 | written in `.margin.tsx`, never drawn | `$Book.footer()` empty |
| links: internal · external · interwiki · red | 204 · 425 · 13 · 2 | four `$Ref` kinds | present |

**The article column is 752 wide at x 264; the body is 16px sans; the infobox 14.08px; the h2 24px Linux Libertine.** *Wikipedia's own API serves the article as clean HTML — 1,086,131 bytes, 33 sections, 14 thumbnails, 14 quotations, 5 hatnotes, the infobox, 6 navboxes, 4 sister boxes, 848 citation marks over two reference lists, 1,093 internal links, the categories as page properties — saved to the session's scratchpad and to be saved beside the book as the paper's data was.*

**The guide, [`src/article/`](../../package/src/article/):** four kinds in the four-declaration shape, one theme keeping the page, and one chrome chemical, `$Header`, which its own record calls *chrome, not writing* — a `$Chemical` so it is not parsed, not listed, not stripped. **The encyclopedia folder takes that shape.** *What is new is the per-component format beside a kind whose look is its own.*

## <a id="actors"></a>Actors

- **A1 · the reader**, who sees Wikipedia and is not asked to notice it is not.
- **A2 · the author of an encyclopedia book**, who writes `<Infobox>`, `<Hatnote>`, `<Navbox>`, `<Categories>` plainly, subclasses nothing, and registers a theme once.
- **A3 · the framework**, whose kinds validate, format, theme and inject the way every other kind does.

## <a id="requirements"></a>Requirements

### <a id="r-portal"></a>The portal

| | what it demands | observed when it holds |
|---|---|---|
| **R1** | ***the ring is restored:*** `$Language` writes its `at` into its format and `$Languages` its `globe`, and each format hands it to its worn self through `handed()` | ten link boxes at ten distinct centres on Wikipedia's ellipse, the ring's background image non-empty, a screenshot beside Wikipedia's at 1280 |
| **R2** | ***the portal is current from the site:*** the ten languages in Wikipedia's order with Wikipedia's counts, read from `www.wikipedia.org` by a saved script | the ten names and counts on our page equal the portal's on the day the script ran, and the script is beside the book |
| **R3** | ***the home page's own code stays the app's*** — the ring, the search, the project cards, the edition list | nothing portal-shaped enters `src` |

### <a id="r-folder"></a>The encyclopedia folder

| | what it demands | observed when it holds |
|---|---|---|
| **R4** | ***every encyclopedia kind is a four-declaration file in `src/encyclopedia/`*** with its format beside it where its look is its own, on the article folder's shape | `ls src/encyclopedia` reads like `ls src/article`; each file interface · class · type · specification, and a format class where one is needed |
| **R5** | ***a theme is one per type, by registration, fetched through `$`*** — a kind asks for its theme in its own scope and gets its own, the book's otherwise; a format reads its theme's values | `$(Infobox, Theme)(InfoboxTheme)` in a book restyles every infobox in that book and nothing else; the encyclopedia theme keeps only the page — grid, palette, type scale — and its `@select` groups fall to the page's own |
| **R6** | ***the existing kinds are adapted, not duplicated:*** one `$Hatnote`, the demo's second deleted; `$Infobox` gains image, caption and headers; `$Figure` wears Wikipedia's thumbnail; `$Quote`, `$References`, `$Notes`, `$Entry`, `$Citation` used as they are; `$TableOfContents` placed by format; `$Book.footer()` draws the site footer | each adapted kind visible on `/turing`, counted |
| **R7** | ***the missing kinds exist:*** the navbox, the categories, the sister project box, the main menu, the header bar with its search, the toolbar tabs — an encyclopedia page's own, so the folder's | each a kind an author writes plainly, each drawn on `/turing` where Wikipedia draws it |
| **R8** | ***the code looks like the rest:*** no comments, classes not elements in every selector, formats as styled chemicals fetched through `$`, the order of a class, the audit's verdict CLEAN per new file | the audit table for the folder; `grep -c '//' src/encyclopedia` at 0 |

### <a id="r-article"></a>The article

| | what it demands | observed when it holds |
|---|---|---|
| **R9** | ***the article is read whole from Wikipedia*** — text, 33 sections, 14 thumbnails, 14 quotations, 5 hatnotes, the infobox, 256 references in two lists, 6 navboxes, 4 sister boxes, the categories — written into chapter files by a saved script | the counts on `/turing` equal the API's counts, and the script and its source stand beside the book as `.paper/` does for the paper |
| **R10** | ***the layout is Vector's, in numbers:*** header 66 high; main menu 186 wide at x 53; contents beneath it 176 wide, sticky; article column 752 at x 264; infobox 310 floated right in the lead; thumbnails 200 floated right; title 28.8px Linux Libertine, h2 24px, body 16px sans | the boxes read by the same driver on both pages agree to a few pixels; the header overlaps nothing |
| **R11** | ***the page bears a strong resemblance:*** a screenshot beside Wikipedia's at 1280 is read as the same page | the region census, element for element, equal |
| **R12** | ***every citation numbers itself and lands*** — the Sprint 59 mechanism on the Turing book, its references as keyed entries in two lists | `cited.mjs` on `/turing`: every mark a number, every landing |

### <a id="r-gates"></a>The gates

| | what it demands | observed when it holds |
|---|---|---|
| **R13** | ***the wiki's served tree is compiled by the syncing compiler*** from Sprint 61, and its 26 chapter files stand on the standard shape | `.wiki/.public/build.mjs` never empties; every chapter one class and one `print()` |
| **R14** | ***`npm run verify:wiki` is the gate*** — `/` and `/turing` driven, the counts and the boxes asserted, red naming what failed | green at the close; red when a kind is removed |
| **R15** | ***no regression in LaTeX:*** `src/article/` and `.latex/` untouched; `verify:latex` green at every step | the paper's numbers unchanged |

## <a id="out"></a>Out of scope

The article folder and the paper · Wikipedia's appearance menu, edit links, fundraising banner, login · the talk page beyond the shell that exists · any page but `/` and `/turing`.

## <a id="approaches"></a>Approaches, at mechanism altitude

**The theme and the format — chosen: registration.** *Two shapes stood in [The Motif, ch. 4](../the-motif/04-themes-per-type-formats-per-instance.md), both Doug's words.* **A theme is values, one per type, a singleton by `$(Kind, Theme)(KindTheme)`; a format is rules, one per instance, worn and drawn, reading `this.theme.quiet` for what it needs.** *Chosen over the format carrying its values, which leaves nothing a scope can stand another theme in for.* **Sketch:**

```tsx
// the kind, in src/encyclopedia/Infobox.tsx — four declarations and its format
export class $Infobox extends $Aside implements $Infobox$ { … }
export class $InfoboxFormat extends $Format {
    selector = styled.aside;
    float = 'right';
    get background() { return this.theme.quiet; }
    …
}
// the book, in .book.tsx — one registration, and every infobox in that book wears it
$(Infobox, Theme)(InfoboxTheme);
```

**The ring — chosen: the seam.** *`$Language`'s bond writes `<LanguageFormat at={this.$at} />` in place of an empty one, and `$LanguageFormat.handed()` answers `{ at: this.$at }`; the same for the globe.* **Chosen over a ring that positions its own children, which is a framework-shaped change for a demo's page.** *The gap it exposes — a worn format cannot read the writing it clothes, so a prop crosses twice — is pitched to chemistry, not built here.*

**The article — chosen: read the source.** *Parsoid's HTML is semantic and licensed CC BY-SA, the same licence the footer already carries.* **A script maps its sections to chapter files, its thumbnails to `<Figure>`, its blockquotes to `<Quote>`, its hatnotes to `<Hatnote>`, its infobox cells to `<Infobox>` lines, its two reference groups to `<References>` and `<Notes>` of keyed entries, its citation marks to `<Citation>` by key, its navboxes and categories to the new kinds.** *The script is kept beside the book, as [`.paper/`](../../package/.latex/.public/.paper/) is kept beside the paper; [Reading the Source](../writing-a-book/02-reading-the-source.md) is the rule.*

## <a id="acceptance"></a>Acceptance examples

- **AE1 · the ring:** open `/`; ten languages stand around a visible globe; English top-left at Wikipedia's place; a screenshot beside the portal's.
- **AE2 · the infobox:** open `/turing`; the infobox stands floated right in the lead with Turing's photograph and "Turing in 1951" under it, Born, Died, Cause of death and the rest beneath.
- **AE3 · a navbox:** the foot of `/turing` carries the first navbox, collapsed, titled as Wikipedia titles it.
- **AE4 · the categories:** the last thing on `/turing` above the footer is the categories box, its first category "1912 births".
- **AE5 · a citation:** the first mark in the lead draws a number, and clicking it lands on that entry in the reference list, highlighted and fading.
- **AE6 · the gate:** `npm run verify:wiki` prints the counts and the boxes and exits 0; remove the hatnote kind's registration and it exits 1 naming the hatnote.
- **AE7 · the code:** open `src/encyclopedia/Navbox.tsx`: interface, class, type, specification, format; no comment; every selector a class.

## <a id="decisions"></a>Decisions — ***planned 2026-09-11, the reading in the room***

### <a id="d1"></a>D1 · ***The destructive compiler is replaced before any file moves***

**`.wiki/.public/build.mjs` is the OLD compiler** — 72 lines that remove every entry of the served tree not in its four-name `setup` set, the one [Sprint 61](67-sprint-61--the-chapter-file.md#stand) replaced in `.latex` after it emptied that tree once and everything was restored from git. **`.latex/.public/build.mjs` is the syncing one, 82 lines with a `.synced.json` manifest that removes only what left the source.** *Measured today: the two differ, `.wiki/.public/` carries no manifest, and the wiki's source and served trees are byte-identical with `tsc` at 0 — so the replacement is safe to make NOW and unsafe to make after a migration is half done.* **It is the first unit for that reason and no other.**

### <a id="d2"></a>D2 · ***The ring is fixed by the format reading its holder, not by a prop crossing twice***

**The brainstorm chose the seam and named a cost — *"a worn format cannot read the writing it clothes, so a prop crosses twice"* — and the codebase says the cost is not owed.** *[`$TableFormat`](../../package/src/writing/Table.tsx) is the standing precedent: `handed()` answers `{ columns: (this.parent as $Table)?.$columns }`, and the getter `gridTemplateColumns` reads the live value per instance.* **A format concatenated into a writing's block has that writing as its parent, which is how a table's grid already varies by instance.** So `$LanguageFormat.handed()` answers `{ at: this.parent?.$at }` and `$RingFormat.handed()` answers `{ globe: this.parent?.$globe }`, **and `$Language` and `$Languages` do not change at all** — *two overrides, nothing threaded, nothing added.* ***Chosen over writing the prop into the format element from the kind's bond, which changes two kinds to say what one method already asks.***

*The doubt that produced this reading is worth keeping: chemistry's [particle 11](../../../chemistry/.lib/particle/11-styled-particles.md) says a styled class is **compiled once per class**, which reads as though ten languages must share one position. It does not — the compile builds the template once and the getters become interpolations carrying live values ([`styling()`](../../../chemistry/package/src/abstraction/particle.ts)). **The precedent settled it; rereading the sentence would not have.***

### <a id="d3"></a>D3 · ***`src` is not opened until Doug has said yes, so every unit that needs it is separated from every unit that does not***

**U1 through U6 touch `.wiki` and `package.json` only.** *The kinds — adapting `$Infobox`, and the six that do not exist — are `src/encyclopedia/` and stand behind [the presentation](#presented).* **That split is the plan's shape, not a caution added to it:** a session that can be stopped at any unit boundary and still have shipped something visible is the only kind this sprint can be.

### <a id="d4"></a>D4 · ***The Turing content is READ, never written*** — [Reading the Source](../writing-a-book/02-reading-the-source.md)

**Wikipedia's API serves the article as clean Parsoid HTML, 1,086,131 bytes, and a script maps it into chapter files** the way `.paper/` maps the PDF. *The script and its source are saved beside the book.* ***A plausible substitute is exactly what a demo must not be, and this demo already carries one: 32 hand-made sections against the article's 33, 13 citation marks against 848.***

### <a id="d5"></a>D5 · ***The gate is written against what stands TODAY and tightened as content lands***

**`verify-wiki.mjs` is built early and asserts the numbers the page has when it is written**, then each unit raises them. *`verify:latex` is run unchanged at every step and is the regression gate; R15 is a step in every unit, not a unit of its own.*

## <a id="units"></a>Units

### <a id="u1"></a>U1 · ***The wiki's compiler replaced by the syncing one*** — R13

**Mechanism:** per [D1](#d1): `.latex/.public/build.mjs` taken as the source, retargeted to `.wiki`, its served-tree tools named so it never syncs over itself; run once; `.synced.json` appears; the served tree is byte-identical to what it was.

**Files:** `.wiki/.public/build.mjs`.

**Visible end:** ***a recursive diff of the three books source-to-served empty after a run; `.synced.json` listing what it synced; `/` and `/turing` drawing what they drew.***

**Depends on:** nothing. ***First, as safety.***

### <a id="u2"></a>U2 · ***The ring restored*** — R1, AE1

**Mechanism:** per [D2](#d2): `handed()` on `$LanguageFormat` and `$RingFormat`.

**Files:** `.wiki/.encyclopedia/.document.tsx`.

**Visible end:** ***ten link boxes at ten distinct centres, the globe drawn — a screenshot beside wikipedia.org at 1280.***

**Depends on:** [U1](#u1).

### <a id="u3"></a>U3 · ***The portal current from the site*** — R2

**Mechanism:** a saved script reads `www.wikipedia.org` for the ten featured languages, their order and their article counts, and writes `1-the-languages.tsx`; the script stands beside the book as `.paper/` stands beside the paper.

**Files:** a saved script beside the book (new) · `.wiki/.encyclopedia/1-the-languages.tsx`.

**Visible end:** ***the ten names and counts equal the portal's on the day it ran, English first at 7,237,000+, the two swapped pairs in Wikipedia's order.***

**Depends on:** [U2](#u2).

### <a id="u4"></a>U4 · ***The three books on the standard chapter shape*** — R13

**Mechanism:** [Sprint 61](67-sprint-61--the-chapter-file.md#stand)'s shape applied to `.wiki`: a `.chapter.tsx` per book default-exporting the book's own `$Chapter` subclass; the 26 files carrying `view()` moved to `print()` and importing `$Chapter` from `./.chapter` rather than from the package.

**Files:** `.wiki/.article/`, `.wiki/.encyclopedia/`, `.wiki/alan-turing/` — 26 chapter files, 3 new `.chapter.tsx`.

**Visible end:** ***no `view()` left in a chapter file; both pages drawing the same character count as before the move, as the paper did.***

**Depends on:** [U1](#u1).

### <a id="u5"></a>U5 · ***`verify-wiki.mjs` as the gate*** — R14, AE6

**Mechanism:** per [D5](#d5), on `verify-latex.mjs`'s shape: waits for the server; opens `/` and `/turing`; asserts the language boxes at distinct centres, the globe non-empty, the section count, every citation a number and not a key, every contents row and citation landing below the strip after a jump, 0 panels, the characters; exits non-zero naming what failed. `npm run verify:wiki` runs it.

**Files:** `.wiki/.public/verify-wiki.mjs` (new) · `package.json`.

**Visible end:** ***one run printing the numbers; red when a kind is removed, naming it.***

**Depends on:** [U2](#u2), [U4](#u4).

### <a id="u6"></a>U6 · ***The Turing article read whole*** — R9, R12

**Mechanism:** per [D4](#d4): a script reads the API's Parsoid HTML and maps sections to chapter files, thumbnails to `<Figure>`, blockquotes to `<Quote>`, hatnotes to `<Hatnote>`, infobox cells to `<Infobox>` lines, the two reference groups to `<References>` and `<Notes>` of keyed entries, and each mark to `<Citation>` by key — the Sprint 59 mechanism, unchanged.

**Files:** the saved source and script beside the book (new) · `.wiki/alan-turing/` chapter files.

**Visible end:** ***33 sections, 14 thumbnails, 14 quotations, 5 hatnotes, 256 entries in two lists; `cited.mjs` on `/turing` reporting every mark a number and every landing.***

**Depends on:** [U4](#u4) · the kinds it writes existing, which is [U8](#u8) for the ones that do not.

### <a id="u7"></a>U7 · ***`$Infobox` gains image, caption and headers*** — R6

**Mechanism:** the adaptation of a kind that exists, presented before it is written per [D3](#d3).

**Files:** `src/encyclopedia/Infobox.tsx` · the demo's duplicate `$Hatnote` deleted.

**Visible end:** ***AE2 — the infobox floated right in the lead with Turing's photograph and "Turing in 1951" beneath it.***

**Depends on:** ***Doug's yes.***

### <a id="u8"></a>U8 · ***The kinds that do not exist*** — R7, R4, R8, AE3, AE4, AE7

**Mechanism:** navbox, categories, sister box — each a four-declaration file in `src/encyclopedia/` on `src/article/`'s shape, with its format beside it where its look is its own.

**Files:** `src/encyclopedia/` (new files) · `src/encyclopedia.ts`.

**Visible end:** ***each drawn on `/turing` where Wikipedia draws it, counted; `src/encyclopedia/Navbox.tsx` opening as interface, class, type, specification, format, no comment, every selector a class.***

**Depends on:** ***Doug's yes, per kind.***

### <a id="u9"></a>U9 · ***The page chrome — main menu, header with search, toolbar*** — R7, R3

**Mechanism:** Doug: *"An encyclopedia might have a header. An article might. So perhaps it lives in there."* The three are `$Chemical` chrome on `src/article/Header.tsx`'s shape — not parsed, not listed, not stripped — and the portal's own code stays the app's.

**Files:** `src/encyclopedia/` · `.wiki/.document.tsx`, whose `$Header` they replace.

**Visible end:** ***the header bar 66 high overlapping nothing, the main menu 186 wide at x 53, five toolbar tabs.***

**Depends on:** ***Doug's yes.***

### <a id="u10"></a>U10 · ***The layout in Vector's numbers*** — R10, R11

**Mechanism:** the driver reads the same boxes on both pages and they agree to a few pixels; the encyclopedia theme keeps the page — grid, palette, type scale — and the per-kind rules move to the formats beside their kinds.

**Files:** `src/encyclopedia/Theme.tsx` · the formats.

**Visible end:** ***the region census element for element; a screenshot beside Wikipedia's at 1280 read as the same page.***

**Depends on:** [U7](#u7), [U8](#u8), [U9](#u9).

### <a id="u11"></a>U11 · ***Themes per type by registration*** — R5 — ***DESIGN OWED***

***No files, no scenarios, no dependencies.*** [The Motif, ch. 4](../the-motif/04-themes-per-type-formats-per-instance.md) is a ruling not yet built and [Sprint 62 U3](68-sprint-62--clean-foundations.md#u3) marks the same half owed. **What must be designed before it is a unit:** where a singleton theme is registered so `$(Infobox, Theme)(InfoboxTheme)` reaches every infobox in one book and no other, how a format reads its kind's theme rather than its book's, and what happens to the `@select` groups the sheet holds today. *Presented before a line.*

## <a id="scenarios"></a>Test scenarios

*Compacted 2026-09-12: the scenarios that survived became the gates — `verify:wiki` and `verify:latex` — and a promise is read where it runs; the ones that did not are in the record above.*

## <a id="risks"></a>Risks

*Compacted 2026-09-12: the risks that fired are in the stand and in [Solutions](../solutions/.cover.md) chapters 72 to 77; the rest did not fire.*

## <a id="order"></a>Order

*Compacted 2026-09-12: the sprint ran this order; what it left is [Sprint 65](71-sprint-65--the-encyclopedia-finished.md).*

## <a id="presented"></a>What is presented before it is built

1. ***`$Infobox`'s new members*** — image, caption, headers — with their callers and what each is chosen over ([U7](#u7)).
2. ***Three new kinds*** — navbox, categories, sister box — each named, its base cited, and what it does that its type could not confer ([U8](#u8)).
3. ***Three chrome chemicals*** — main menu, header with search, toolbar — and whether they are `src/encyclopedia`'s or the app's ([U9](#u9)).
4. ***The themes-per-type restructure*** ([U11](#u11)), designed first.

## <a id="carried"></a>What Sprint 62 still owes

***Doug redirected here on 2026-09-11 with [Sprint 62](68-sprint-62--clean-foundations.md#stand) at one unit of five.*** **Open there:** U3's element selectors to classes with the fingerprint, U1's member audit of the eight with the cuts, U2's comments out of `src`, U5's performance audit. *`verify:latex` — U4 — is landed and is this sprint's regression gate, so the one part of 62 this sprint depends on is the part that is done.*

## <a id="stand"></a>Where things stand — ***2026-09-11, [U1](#u1) and [U2](#u2) landed***

**[U1](#u1), the compiler — DONE.** [`.wiki/.public/build.mjs`](../../package/.wiki/.public/build.mjs) is now the syncing compiler on `.latex`'s body, with one change: the served tree's own tools are skipped by a RULE rather than a name — `verify-*.mjs` — so the wiki's gate does not have to be listed before it exists. *Run twice: **37 files synced, 3 books bound, 0 removed, both runs identical.*** **The probe scenario ran and was removed in the same command:** a file added to the source appeared in the served tree, and when it left the source the compiler **removed 1 and nothing else moved**. *One served file changed on the first run — `alan-turing/book.tsx`, which was stale against its own generator and now binds `$Contents` where it bound `$Table`, the same `.table` file in the same position.* **And the three generated `book.tsx` files left the source tree**, as Sprint 61 made them leave `.latex/aaronson/`; the compiler never read them. `tsc` on `.wiki` 0.

**[U2](#u2), the ring — DONE, and [D2](#d2) held.** Two `handed()` overrides in [`.wiki/.encyclopedia/.document.tsx`](../../package/.wiki/.encyclopedia/.chapter.tsx), nothing else touched; `$Language` and `$Languages` unchanged. **Measured in the browser at 1280 before and after:**

| | before | after |
|---|---|---|
| language boxes | 10 | 10 |
| ***distinct centres*** | ***1*** — all at `154,545` | ***10*** — `154,545` `154,811` `219,490` `219,865` `284,480` `284,875` `349,490` `349,865` `414,545` `414,811` |
| the globe | none | `url("https://upload.wikimedia.org/wikipedia/commons/8/80/Wikipedia-logo-v2.svg")` |
| panels · page errors | 0 · 0 | 0 · 0 |

***A correction worth keeping, because it would have read as a failure:*** **the globe was measured on `.pd-languages` and answered `none`, and the ring is not that element.** *A format whose `selector` does not match the element its writing wrote WRAPS rather than restyles — [`styling()`](../../../chemistry/package/src/abstraction/particle.ts) — so `$RingFormat`'s `div` stands one level above the `<section>` and carries the background.* **The driver was pointed one element up and the globe was there.** *The gate in [U5](#u5) reads the ring by walking up from `.pd-languages`, so no later run repeats this.*

***Seen, not only counted:*** the portal screenshot at 1280 reads as Wikipedia's — wordmark, tagline, the globe with ten languages around it, search, the edition list, the Foundation text, the twelve projects.

**One fault seen that is [U10](#u10)'s, recorded rather than fixed here:** *the left column runs INTO the globe — Deutsch and Français overlap it — because `$LanguageFormat` sets `textAlign: center` for every box where Wikipedia right-aligns the left column and left-aligns the right.* **Two boxes, one rule, and it belongs with the layout in numbers.**

**[R15](#r-gates) is a step, not a unit, and it ran:** `npm run verify:latex` **green after both units — 82,582 chars · 66 rows landing 66 · 43 citations landing 43 · 335 entries · 0 KaTeX errors · 0 panels**, the head's numbers unchanged.

**Next in the order:** [U3](#u3), the portal refreshed from the site; [U4](#u4), the 26 chapter files to `print()` with a `.chapter.tsx` per book; [U5](#u5), the gate. ***[U7](#u7), [U8](#u8) and [U9](#u9) wait on Doug — the four presentations are listed under [What is presented](#presented).***

**Nothing committed.**

## <a id="stand2"></a>Where things stand — ***2026-09-11, the wiki put back together; seven commits, nothing pushed***

***Doug redirected this sprint three times while it ran and each redirection is recorded where it landed.*** **"Why don't you clean up, fix the regression, and then integrate the new stuff in"** · **"You can also merge the format classes into the component file"** · **"For formatting, you can probably dissolve the folder"** · **"They used to be good… pull the page, look across breakpoints and whatever and put it back together."**

### <a id="done"></a>What is done

| | | |
|---|---|---|
| **[U1](#u1)** | ***the compiler*** | the destructive one replaced by the syncing one, tooling skipped by a RULE (`verify-*.mjs`); 37 synced, 3 bound, 0 removed, idempotent; the three stale generated `book.tsx` left the source |
| **[U2](#u2)** | ***the ring*** | Wikipedia's own geometry — odd places set `right`, even set `left`, 60/70/72/70/60 — ten boxes flanking the globe, nothing overlapping |
| **[U3](#u3)** | ***the portal current*** | a saved script reads the site into `.cover.tsx`; the two swapped pairs corrected, every count refreshed |
| **[U4](#u4)** | ***the chapter shape*** | all 26 chapters on `print()`, and the `.pd-chapter` wrapper made a pass-through so the grid places what is inside it |
| **partly [U7](#u7)** | ***`$Box` and its versions*** | `$Box` in `src/encyclopedia`, four declarations and zero members; `$Infobox` and `$Navbox` versions of it; the look in `$BoxFormat` and two subclasses, merged into their component files |

**And the branch's own shape changed twice at Doug's word:** *formats live in their component's file, and `src/formatting/` is dissolved into `src/writing/` — twelve entries where there were thirteen.*

### <a id="frame"></a>The frame, which is what was actually broken

***Every layout fault had one cause and none of them were guessed at.***

- **The contents in the right gutter** — `.table.tsx` had moved to `print()` and the other 25 had not, so only it was wrapped in `.pd-chapter`, the theme's `>` selectors could not reach it, and it auto-placed. **Fixed by making the tree uniform and placing through the wrapper.**
- **The header printed through the title** — the wordmark `<Image>` carried no width and filled its box at 500×85 inside a 49px strip; and `$HeaderFormat` said `styled.div` where `$Header` writes a `<section>`, so it wrapped instead of restyling and the flex sat one level above its children. **Two one-line fixes; the same `selector` fault was found again in `$PortalDocumentFormat` and fixed the same way.**
- **A contents row clipping mid-word** — a nested row is `flex: 0 0 100%` with `padding-left` in content-box, so the indent was added to a full-width track; and the shrink rule was written for the ANCHOR, which is not the flex item, **which also means the `order: 1` beside it had never done anything.**
- **The article column at 137px below 1119** — the narrow template gave one track while `grid-column: 2` still stood, so an implicit second column appeared. ***The narrow template now keeps three tracks with the sides at zero, so no override has to win.***

### <a id="numbers"></a>The numbers

**Breakpoints CLEAN on `/`, `/turing` and `/article` at 1920, 1440, 1280, 1120, 1000, 768, 640, 480 and 360** — no horizontal scroll, nothing crossing the viewport, no clipped text. *At 1280 `/turing` reads: header 1184×54, title at y72, contents 176 wide in column 1, article column 752 at x264, infobox 310 floated right — **Wikipedia's own numbers.*** **tsc src 0 · `.wiki` 0 · rollup 0 · suite 104 of 104 · `verify:latex` green at 82,582 chars, 66 rows landing 66, 43 citations landing 43, 335 entries, 0 panels · the portal 2,370 chars, `/turing` 58,567, `/article` 18,795, each 0 panels and 0 page errors.**

### <a id="caught"></a>Two things caught that would have read as green

1. ***A false green.*** **rollup failed and the suite and `verify:latex` then passed against the dist from before the move** — 104 of 104 and the paper's numbers, all stale. [Solutions 5](../solutions/05-the-suite-that-passed-against-a-stale-build.md), third form. **The gate order is rollup FIRST and its exit code read**, and a gate command that pipes `tsc` into `head` reads `head`'s exit code, which is how the second one hid.
2. ***A page checked as crops.*** **The ring was reported done on *ten distinct centres* while the left column was printed across the globe in the session's own screenshot.** *A true number about a broken screen.* **The instrument that replaced it is the breakpoint sweep, and it found five widths of faults the numbers never mentioned.**

### <a id="left"></a>What is left

- ***The pill.*** "Read Wikipedia in your language" draws in the serif face with its icon over the text. **Its own rules apply at 0,2,1 and lose to the encyclopedia theme's `.pd-document:not(.pd-cover):not(.pd-table-of-contents):not(.pd-chapter) .pd-level-1` at 0,5,0** — *the roster [What Natural Means](../the-coding-style/07-what-natural-means.md) names as a concept nobody has named yet.* **Both ways to win make the codebase worse, and the honest reading is the demo's: Wikipedia's is a CONTROL and the demo wrote a `<Heading>`.** *Doug's.*
- ***The navbox is off the page*** until its groups survive the parse — written as `<Section><Heading/><Paragraph/></Section>`, they are dissolved to bare paragraphs, so every `> .pd-section` rule matches nothing.
- ***`$IllustrationFormat` is declared in `Image.tsx`***, because `$Image` — the base — is what wears it. **Its name and its wearer disagree; `$ImageFormat` is the obvious reading and it is Doug's to give.**
- **[U6](#u6)** the Turing article read whole from the API · **[U8](#u8)** the kinds that do not exist · **[U9](#u9)** the chrome · **[U10](#u10)** Vector's layout in numbers · **[U11](#u11)** themes per type, still design owed.
- ***Sprint 62 still owes*** its member audit, its comment sweep and its performance audit; `verify:latex` — the one part this sprint leaned on — is landed.

## <a id="recarve"></a>RECARVED 2026-09-12 — ***the encyclopedia's files and classes made pristine***

***Doug:*** **"You are focusing on the files and classes of encyclopedia entirely… you will strive to have an app that is exactly well organized to its purpose with one custom page and two normal. Turing will attempt to be byte identical with serious regression tests guiding your implementation. EVERYTHING on the page including the appearance selector."** *And the rule the whole recarve turns on:* **"Like latex, the other two pages beside wikipedia itself are the ones that need to come straight from encyclopedia like latex did."*** [U1](#u1)–[U5](#u5) are done; [U6](#u6)–[U11](#u11) stand; the units below are new and the numbering does not go back.*

### <a id="d6"></a>D6 · ***The placement question, asked in order, first hit wins***

| | question | answer |
|---|---|---|
| **1** | does ***any*** encyclopedia have it? | `src/encyclopedia/` |
| **2** | is it a ***look*** with no new meaning? | a `$Format` in the book's `.chapter.tsx` |
| **3** | is it a ***name with rules*** and no look? | a `$TypeOfX` in `.chapter.tsx`, written in as `<TypeOfX />` |
| **4** | both a kind ***and*** a look of its own? | a class — and only then |

***The rule under it is the framework's own, read off [`multiple.test.tsx`](../../package/.tests/multiple.test.tsx) and [The Spelling of a Kind](../the-coding-style/05-the-spelling-of-a-kind.md):*** **a consumer kind is a Specification and a `$TypeOfX` with a name — nothing in the framework is touched — and THE CLASS ROW IS ADDED ONLY WHEN THE KIND HOLDS A LOOK OF ITS OWN.** *The demo has it inverted: 35 classes, 0 types, 0 specifications.*

### <a id="d7"></a>D7 · ***The LaTeX test, applied: two normal pages declare NOTHING***

**The paper takes six kinds from `src/article` and declares two classes.** *`/turing` and `/article` must take everything from `src/encyclopedia` and declare **zero**; only the portal — wikipedia.org's own home page — carries page-local code.* ***Measured as `grep -c "^export class" .wiki/alan-turing .wiki/.article` reading 0.***

### <a id="d8"></a>D8 · ***The gate is written first and drives the work***

***Doug: "serious regression tests guiding your implementation… Don't make me say 12 times that it doesn't look right."*** **`verify:wiki` gains `/turing` measured against a recording of `en.wikipedia.org/wiki/Alan_Turing`, region by region and count by count, at five widths, with the dynamic parts operated.** *Nothing is reported done that the gate has not said.*

### <a id="d9"></a>D9 · ***A class survives only with a stated reason, and the reason is one of two***

**It holds a look of its own, or it is a DI scope.** *An empty subclass is not a wart — `$AaronsonChapter extends $Chapter { }` is how DI is scoped, and Doug ruled it: a Chapter and a Book subclass in each spot.* ***No class survives because it needed a name.***

## <a id="target"></a>The target, measured at 1280 on 2026-09-12

| region | en.wikipedia.org | ours today |
|---|---|---|
| **header bar** | **0,0 · 1280×66**, full bleed | 48,0 · 1184×54 |
| **wordmark** | 84,14 · 140×38 | 68 · 96×16 |
| **main menu** | 44,17 · 20×32 | — none |
| **contents** | 32,136 · **208**×361 | 48,178 · 176×858 |
| **title** | 264,90 · 600×40 | 48,72 · 1184×40 |
| ***article column*** | ***264 · 752*** | ***264 · 752*** ✓ |
| ***infobox*** | ***706 · 310*** | ***706 · 310*** ✓ |
| **page tools / tabs** | 264,130 · 752×33 · 256,130 · 96×32 | — none |
| **footer** | 44 · 1192×99 | — not drawn |

**Counts on the real page:** *h2 **10** · h3 **20** · thumbnails **6** · quotations **14** · hatnotes **5** · citation marks **294** · reference entries **256** · navboxes **6** · sister box **1** · categories **1** · infobox rows **18**.* **Ours: 92 sections, 12 citations, and none of the rest.**

***The appearance selector measured 0×0 under every selector tried — it is a Vector 2022 dropdown and FINDING IT IS PART OF [U12](#u12), not an excuse.***

## <a id="units2"></a>Units — the recarve

### <a id="u12"></a>U12 · ***The gate, extended to `/turing` and driving everything after*** — D8

**Mechanism:** `verify-wiki.mjs --baseline` records `en.wikipedia.org/wiki/Alan_Turing` beside the portal, at the same five widths: the eleven regions above plus the appearance selector once its element is found, and the eleven counts. Every other run checks ours against the recording and names each drift. The dynamic parts are operated on both pages.

**Files:** `.wiki/.public/verify-wiki.mjs` · `.wiki/.public/.portal/portal.json`.

**Visible end:** ***one run printing, per width, how many of the regions and counts match, and naming every one that does not.***

**Depends on:** nothing. ***First.***

### <a id="u13"></a>U13 · ***The deletions*** — D6, D9

**Mechanism:** nine classes, two files and five framework members go, each because a thing that already exists does the job.

**Files:** `.wiki/.article/.hatnote.tsx` and `.wiki/.article/.margin-page.tsx` *(deleted whole)* · `.wiki/alan-turing/.margin.tsx` · `.wiki/.encyclopedia/.document.tsx` · `src/writing/Composition.tsx`.

| deleted | because |
|---|---|
| `$Hatnote` + `$HatnoteFormat` | `src/encyclopedia` exports a four-declaration `$Hatnote`; [R6](#r-folder) ordered this and it never happened |
| `.margin-page.tsx` | ***byte-identical*** to `alan-turing/.margin.tsx` and imported by nothing |
| `footer` in `.margin.tsx` | dead — nothing imports it; the site footer is `$Book.footer()` |
| `$Editions` `$Foundation` `$Projects` `$Licence` | four classes whose whole body is "a document that concats one format" |
| `$Logo` | ***it is `$Image`*** — `$source`, `$width`, `$height`, draws an `<img>` |
| `$Project` | an `$IndexCard` whose `view()` wraps it in a format |
| `$EditionList` + `$EditionListFormat` | `display: none` — never drawn, and the picker reads the constant |
| `where` `select` `selectMany` `single` `concatenate` | zero callers anywhere; decided code with no consumer |

**Visible end:** ***the three pages draw what they drew, by the gate; `.wiki` loses two files and nine classes.***

**Depends on:** [U12](#u12) · Doug's yes for the five framework members.

### <a id="u14"></a>U14 · ***The moves — what any encyclopedia has goes to the reading*** — D6 q1, D7

**Mechanism:** four words leave the demo for `src/encyclopedia/`, each as a four-declaration file, `$Header` and `$Footer` and `$Search` as `$Chemical` chrome on `src/article/Header.tsx`'s precedent.

**Files:** `src/encyclopedia/Header.tsx`, `Footer.tsx`, `Search.tsx`, `Line.tsx` *(new)* · `src/encyclopedia/Infobox.tsx` *(loses `$Line` — the file is the word)* · `.wiki/.document.tsx`, `.wiki/.encyclopedia/.document.tsx`.

**Visible end:** ***the header, footer and search draw as they draw now, imported from the reading; `src/encyclopedia.ts` grows by four.***

**Depends on:** [U13](#u13) · ***Doug's yes per file.***

### <a id="u15"></a>U15 · ***The merges — the portal's three files take their standard shape*** — D6, Doug's structure

**Mechanism:** ***Doug:*** *"components local to the page… would go in `.chapter.tsx` and DI is configured in `.book`."* The portal's remaining kinds and formats — the ring, the language, the card, the three format bases — merge into `.chapter.tsx` beside `$WikipediaChapter`; every `$(…)` registration merges into `.book.tsx`; `.document.tsx` shrinks to the one-line DI scope.

**Files:** `.wiki/.encyclopedia/.chapter.tsx`, `.book.tsx`, `.document.tsx`.

**Visible end:** ***`.encyclopedia/.document.tsx` 474 lines → 1; all four books carry the same three files in the same three shapes.***

**Depends on:** [U14](#u14).

### <a id="u16"></a>U16 · ***The kinds `/turing` needs, in the reading*** — R7, D6 q1

**Mechanism:** `Categories`, `SisterBox`, `MainMenu`, `Toolbar` and the appearance selector, each four declarations on `Navbox.tsx`'s shape, each a version of `$Box` where it is one. ***Every name is a proxy and every kind is presented before it is written.***

**Files:** `src/encyclopedia/` (new) · `src/encyclopedia.ts`.

**Visible end:** ***each drawn on `/turing` where Wikipedia draws it, counted by the gate.***

**Depends on:** ***Doug's yes, per kind and per name.***

### <a id="u17"></a>U17 · ***The two normal pages declare nothing*** — D7

**Mechanism:** every kind `/turing` and `/article` use comes from `@dna-platform/public/encyclopedia`; their folders hold `.book`, `.chapter`, `.document` and content.

**Files:** `.wiki/alan-turing/`, `.wiki/.article/`.

**Visible end:** ***`grep -c "^export class" .wiki/alan-turing .wiki/.article` reads 0, and both pages draw what the gate demands.***

**Depends on:** [U14](#u14), [U16](#u16).

### <a id="u18"></a>U18 · ***The Turing content read whole*** — R9, R12 *(supersedes [U6](#u6))*

**Mechanism:** the saved script maps the API's Parsoid HTML into chapter files — 10 h2, 20 h3, 6 thumbnails, 14 quotations, 5 hatnotes, 18 infobox rows, 294 citation marks, 256 entries, 6 navboxes, the sister box, the categories.

**Files:** the script and its source beside the book · `.wiki/alan-turing/` chapter files.

**Visible end:** ***the gate's eleven counts equal the recording's.***

**Depends on:** [U16](#u16), [U17](#u17).

### <a id="u19"></a>U19 · ***The Vector frame in numbers*** — R10, R11

**Mechanism:** the header full bleed at 1280×66, the wordmark 140×38 at x84, the main menu at x44, the contents 208 wide at x32, the title 600 at x264, the tabs and page tools at y130, the footer 1192 — the encyclopedia theme's page, with the body left alone since it already matches.

**Files:** `src/encyclopedia/Theme.tsx` · the formats beside their kinds.

**Visible end:** ***every region within the gate's slack at all five widths.***

**Depends on:** [U16](#u16), [U18](#u18).

## <a id="scenarios2"></a>Test scenarios — the recarve

*Compacted 2026-09-12: the scenarios that survived became the gates — `verify:wiki` and `verify:latex` — and a promise is read where it runs; the ones that did not are in the record above.*

## <a id="risks2"></a>Risks — the recarve

*Compacted 2026-09-12: the risks that fired are in the stand and in [Solutions](../solutions/.cover.md) chapters 72 to 77; the rest did not fire.*

## <a id="order2"></a>Order

*Compacted 2026-09-12: the sprint ran this order; what it left is [Sprint 65](71-sprint-65--the-encyclopedia-finished.md).*

## <a id="pitches"></a>Feature requests, with the pain and why each is not a wart

***Doug: "Report feature requests to me with the implementation pain and why its not a wart."*** *Each below is a place the framework has no seam and the demo must therefore do something ugly; none is a defect in what exists.*

1. ***A book cannot reach another chapter's content.*** `ChapterSpecification` holds that a chapter writes its document in `print()` and holds only annotations, so nothing walking `_block` reaches into a sibling chapter. **The pain:** the portal's search needs the edition list a different chapter holds, and the honest answer today is a shared constant. **Why it is not a wart:** the rule is right — a chapter IS a reference — and the missing thing is a way to ask a book for what its chapters printed.
2. ***A worn format cannot read the writing it clothes.*** `handed()` exists and works, but every prop crosses twice. **The pain:** two methods per format that only copy a field. **Why it is not a wart:** `$TableFormat` proves the seam is real and sound; what is missing is the format reading its holder directly.
3. ***A theme rule outranks a worn format's at what reads as equal specificity.*** **The pain:** a value a format must own has to be left out of the theme's group entirely, which is invisible to whoever edits the theme later. **Why it is not a wart:** the cascade is doing what CSS says; what is missing is the compiler knowing that a format is nearer its writing than a theme is.
4. ***A partial restatement of a prefix SPLITS a group rather than moving it.*** **The pain:** a subclass that restates one member of four silently leaves three under the parent's selector. **Why it is not a wart:** the move-the-whole-group rule is deliberate and documented; what is missing is a refusal when a restatement is partial.

## <a id="parity"></a>The parity census — ***2026-09-12, en.wikipedia.org/wiki/Alan_Turing at 1900, logged out***

***Doug: "Look ours isn't even close. What is missing? Compare the two, and does your plan have everything needed to bring these two to parity? If not, adjust your plan."*** **It did not. Six regions were missing and the tabs were counted as one thing where the page has two.**

| region | theirs at 1900 | ours | covered by |
|---|---|---|---|
| main menu button | 204,17 · 20×32 | — | [U16](#u16) |
| wordmark | 244,14 · 140×22 | 68 · 96×16 | [U14](#u14) |
| ***tagline*** | ***244,41 · 140×11*** | ***—*** | ***[U20](#u20) NEW*** |
| header search | 452,17 · **1042**×32 | — | [U14](#u14) |
| user links | 1494,25 · 202×16 | present | [U14](#u14) |
| contents | 208,136 · 228×345 | 48 · 176 | [U19](#u19) |
| ***contents (Top) row*** | ***208,172 · 228×28*** | ***—*** | ***[U23](#u23) NEW*** |
| ***languages button*** | ***1272,94 · 165×32*** — "162 languages" | ***—*** | ***[U21](#u21) NEW*** |
| article / talk tabs | 468,130 · 96×32 | — | [U16](#u16) |
| ***read / source / history*** | ***1167,130 · 233×32*** — a SECOND group | ***—*** | ***[U21](#u21) NEW*** |
| ***page indicators*** | ***1377,171 · 47×22*** — the ⊕ and the lock | ***—*** | ***[U21](#u21) NEW*** |
| title | 476,90 · 796×40 | 48 · 1184 | [U19](#u19) |
| ***"From Wikipedia, the free encyclopedia"*** | ***476,171 · 948×23*** | ***—*** | ***[U21](#u21) NEW*** |
| hatnotes | 476,209 · 948×26, five of them | — | [U16](#u16), [U18](#u18) |
| infobox | 1114,276 · 310×1257 | 706 · 310 | ✓ width |
| ***infobox title*** | ***1121,283 · 296×44*** | ***—*** | ***[U24](#u24) NEW*** |
| ***infobox image*** | ***1121,330 · 296×356*** — the photograph | ***—*** | ***[U24](#u24) NEW*** |
| ***infobox caption*** | ***1122,664 · 294×21*** — "Turing in 1951" | ***—*** | ***[U24](#u24) NEW*** |
| navbox · categories · sister box · footer | present | — | [U16](#u16), [U18](#u18) |
| ***appearance panel*** | ***drawn for a logged-out reader in a real browser*** | ***—*** | ***[U22](#u22) NEW*** |

***And the content, which is what the eye sees first:*** **their body carries 424 external links and 30 images; our prose carries zero links, zero citation marks and no photograph.** *That is [U18](#u18) and it is the largest single gap.*

***One honest limit:*** **headless Chrome measures `.vector-appearance-landmark` at 0×0 at 1280 AND at 1900, while a real browser draws it for the same logged-out reader.** *So [U22](#u22) builds ours and the gate asserts OURS — its three groups and their options — rather than baselining theirs from a driver that will not draw it. The earlier note saying it is signed-in-only was wrong and is corrected here.*

### <a id="u20"></a>U20 · ***The wordmark and its tagline*** — NEW

**Mechanism:** the header's mark is a wordmark over a tagline, not a bare image; `$Header` composes both and the format stacks them.

**Files:** `src/encyclopedia/Header.tsx`.

**Visible end:** ***"WIKIPEDIA" 140×22 at x244 with "25 years of the free encyclopedia" 140×11 beneath it.***

**Depends on:** [U14](#u14).

### <a id="u21"></a>U21 · ***The title bar — what stands beside and beneath the title*** — NEW

**Mechanism:** five things the real page puts around its title and our plan had none of: the languages button, the Article/Talk group, the Read/View source/View history group as a SECOND group, the page indicators, and the "From Wikipedia, the free encyclopedia" line. Each is a kind in `src/encyclopedia/` or a part of the toolbar, decided by [D6](#d6) and presented before it is written.

**Files:** `src/encyclopedia/` · `src/encyclopedia.ts`.

**Visible end:** ***the languages button at x1272 reading "162 languages", two tab groups at y130, the indicators at x1377, and the site line at y171.***

**Depends on:** ***Doug's yes, per kind.***

### <a id="u22"></a>U22 · ***The appearance panel*** — NEW, ***and it is back in scope***

**Mechanism:** three groups of options — Text small/standard/large, Width standard/wide, Color automatic/light/dark — each a choice that changes what the reader sees. The reading half is the encyclopedia theme's; the panel is a kind.

**Files:** `src/encyclopedia/` · `src/encyclopedia/Theme.tsx`.

**Visible end:** ***the panel standing right of the article with its three groups and eight options, and choosing one visibly changing the page — driven, not asserted.***

**Depends on:** [U19](#u19) · ***Doug's yes on the kind and the name.***

### <a id="u23"></a>U23 · ***The contents' own parts*** — NEW

**Mechanism:** the real contents opens with a "(Top)" row that means the head of the article, and carries a hide control; ours has neither.

**Files:** `src/library/TableOfContents.tsx` *(presented first — it is foundational)* or `src/encyclopedia/`.

**Visible end:** ***a (Top) row 228×28 at the head of the contents, and the contents 228 wide at x208.***

**Depends on:** [U19](#u19) · ***Doug's yes if it touches `src/library`.***

### <a id="u24"></a>U24 · ***The infobox's title, image and caption*** — NEW

**Mechanism:** `$Infobox` gains what the real one opens with — a title, an optional subtitle, an image and its caption — above the labelled lines it already draws. The image is `$Image`, which exists.

**Files:** `src/encyclopedia/Infobox.tsx`.

**Visible end:** ***"Alan Turing" 296×44, the photograph 296×356, "Turing in 1951" 294×21, then the eighteen rows.***

**Depends on:** [U14](#u14) · ***Doug's yes.***

## <a id="stand3"></a>Where things stand — ***2026-09-12, evening: two pages from one reader, the title block measured, three commits, nothing pushed***

***Doug's rulings of the day, verbatim, each built as given:*** **"If it goes in a book, it's a type of writing. Yes, those things are writing."** · **"$Description is this parenthetical thing that formats itself in [] or something similar. $Caption is a type of description that is non-annotative. $Image can use the description… Description should live in Writing."** · **"You can make an application folder with all of the controls. Make $Control its key thing in its type hierarchy."** · **"We want numbering from the references… it belongs in the framework and numbering has to be native."** · **"We don't like coding to elements. Yes we override view to change element type, being careful to reapply classes. But we format to classes."** · **"$Box and $Line stay."** · **"Wikipedia is the default encyclopedia theme… the encyclopedia theme should create the Turing page."** · **"Pull the markup, write regression… Get failing regression tests as you pull all the info you need from the reference page and then make them green."** · **".document.tsx is not something you are allowed to create. But this in .chapter. It was to be for all the chapter-like components in the repo. On top of subclassing book, that one was to be for DI."**

### What is done — commits `d3c509d`, `299433e`

| | | |
|---|---|---|
| **kinds** | `$Description` · `$Caption` in `src/writing/Description.tsx` | a sentence that starts parenthetical and prints `[…]`; a caption shown as it is; *for an image a sentence is a description, for an illustration a caption* — two registrations, no member |
| **the application door** | `src/application/` — `$Control`, `$Search`, `$Menu` + `$Summary`, `$Header`, `$Toolbar`, `$Appearance` | wired in the seven places a door is wired; `src/encyclopedia/` keeps Theme, Infobox, Box, Hatnote, Navbox, Talk |
| **native numbering** | `$Entry.view()` writes `data-number={this.number()}`; its key is its `id` on the `<p>` | the article theme's `counter(entry)` deleted; the paper draws the same numbers from the data — `verify:latex` green, 43 of 43 landing |
| **the reader** | `.wiki/.public/read-page.mjs <page> <book>` | Notes and References as their own chapters, sub-headings nested as the page nests them, lists nested as deep as the page goes, hidden spans left hidden, the Turing page and the Manual of Style both read from it, no page-local code |
| **the gate** | `verify-wiki.mjs` records the LOOK of 33 title-block elements off each real page | 130 failures at first light, 1 of 33 matching; **turing 31 of 33, article 26 of 33** green; 294 of 294 marks landing on 256 numbered entries |
| **two syncers** | `sync.ts` out of `prebuild` | it copied served → source before every rollup, undoing every `.wiki` edit made before a build — the cause of three vanished files this sprint; the compiler's direction is the ruling |

### What the reading corrected — thirty documents of the Designing cluster, [catchup](../../../../.claude/library/our-skillset/34-catchup.md)

- **The view law:** `$Menu.view()` constructed and called `parts()`; its locals were `Said` and `Held`, struck by name in [The Shape of TSX](../the-coding-style/06-the-shape-of-tsx.md). Gone: the browser's own `::details-content` is the one panel box.
- **A heading's copy draws as bare text**, so a menu shown as a mark carries its word as a `$Description` rather than hiding it with a font size of zero.
- **`@select` selects classes** — the formats did `input`, `button`, `summary`, `img`; corrected. `$Appearance`, which predates the sprint, still selects `h3`, `h4`, `label`, `input`.
- **Themes per type, formats per instance** ([The Motif 04](../the-motif/04-themes-per-type-formats-per-instance.md)) — the encyclopedia sheet carries the per-kind look because a theme rule outranks a worn format's ([pitch 3](#pitches)); measured twice this sprint.
- **Pitch 4 in the flesh:** the infobox's label cell lost its `display` because the prefix was restated on a member the base had not decorated — the group split.

## <a id="recarve3"></a>RECARVED 2026-09-12, evening — ***the title block whole, the manual, the audit***

***Doug: "It is matching the title and separator region and getting that whole area straightened out, making the manual control on the article page and having that implemented, and then a general code audit to look for the kind of lean elegance we expect in this codebase. All for this sprint."***

### <a id="d10"></a>D10 · ***Two files a book writes, and no third***

**`.chapter.tsx` carries the book's chapter subclass, its normal document, and every chapter-like kind the book's chapters share; `.book.tsx` carries the book subclass and its DI.** *`.document.tsx` is not a file anyone may create.* **The four link kinds every `.wiki` book shares stand in `.wiki/.chapter.tsx` at the application's root**, on the same word. *This supersedes the `.document.tsx` row of [The Book's Little Framework](../writing-a-book/04-the-book-s-little-framework.md#files), which is corrected in the same act.*

### <a id="d11"></a>D11 · ***A look is measured or it is not claimed***

**Every element of the title block is recorded off the real page — face, size, weight, colour, rules, spacing — and compared; an element whose real counterpart cannot be found is dropped from the list, never assumed.** *"Get failing regression tests… then make them green."* A pair measures the thing a reader sees: a heading's face apart from its rule, an image's box apart from its font.

### <a id="d12"></a>D12 · ***A manual is a document of menus***

**A `$Section` keeps every section-kind beneath it — a `$Menu` inside the contents' section survives the parse — while a kind keeps only its own kind and the rung beneath.** *So the Manual of Style box, whose groups open, is a document whose parts are sections and menus:* **`$Manual extends $Document`** *in `src/encyclopedia`, its title and its field in its first section, each group a `$Menu`, its foot a section of links.* ***`$Manual` is Doug's word and stays a proxy until he keeps it.***

### <a id="d13"></a>D13 · ***The audit is a reading, per class***

**No tool and no refuters:** *the workflow that tried died on the session limit with nine of nineteen agents done, and [the skill](../the-public-skillset/04-public-audit-code-patterns.md) says the instrument was wrong anyway.* **One reader, the canon open, a verdict on every class, each non-clean verdict anchored to a count, to Doug's three sentences, or to what the framework says against what the code can say; a defect with one clear answer is fixed and then reported; a feature is routed, never decided.**

### <a id="u25"></a>U25 · ***No `.document.tsx`*** — D10

**Mechanism:** the four `.document.tsx` files are deleted; `.wiki/.chapter.tsx` takes the four links; each book's `.chapter.tsx` takes its `Document` line; the reader's emitter and the gate import from `./.chapter` and `../.chapter`; the canon row corrected.

**Files:** `.wiki/.chapter.tsx` *(new)* · `.wiki/.article/.chapter.tsx` · `.wiki/alan-turing/.chapter.tsx` · `.wiki/.encyclopedia/.chapter.tsx` · `.wiki/.public/read-page.mjs` · `../writing-a-book/04-the-book-s-little-framework.md`.

**Visible end:** ***`find .wiki -name .document.tsx` reads nothing; both gates green with the same numbers.***

**Depends on:** nothing. ***First — it is a ruling.***

### <a id="u26"></a>U26 · ***The title block and its separators, whole*** — D11

**Mechanism:** the styles list grows to what the region holds and the two pages still differ on — the selected tab's underline (`li.selected`), the page indicators, the subpage line on the Manual of Style, the search field's mark, the languages button's mark and chevron, the tools mark's alignment, the lead's bold name — each recorded from the real page, red, then green in the theme or the reader. The 2 elements unread on Turing and 7 on the Manual of Style are each either found or dropped.

**Files:** `.wiki/.public/verify-wiki.mjs` · `src/encyclopedia/Theme.tsx` · `src/application/*.tsx` · `.wiki/.public/read-page.mjs`.

**Visible end:** ***every listed element looks as Wikipedia's on both pages, and a 1280 screenshot of each title block beside the real one that Doug cannot tell apart.***

**Depends on:** [U25](#u25).

### <a id="u27"></a>U27 · ***The manual*** — D12

**Mechanism:** the reader takes `table.sidebar` off the page — its title, its field, each `.sidebar-list` as a group, `.sidebar-below` and `.sidebar-navbar` as its foot — and writes `<Manual>`; `$Manual extends $Document` with four declarations and a format that places it right of the lead; the theme draws a group's summary as Wikipedia does; the gate counts its groups and its links.

**Files:** `src/encyclopedia/Manual.tsx` *(new)* · `src/encyclopedia.ts` · `src/encyclopedia/Theme.tsx` · `.wiki/.public/read-page.mjs` · `.wiki/.public/verify-wiki.mjs`.

**Visible end:** ***the Manual of Style box standing right of the lead with its seven groups opening, counted equal to the real page's.***

**Depends on:** [U25](#u25) · ***Doug's yes on the name.***

### <a id="u28"></a>U28 · ***The audit, and what it fixes*** — D13

**Mechanism:** every class in `src/application`, `src/encyclopedia`, `Description.tsx`, `Entry.tsx`, the four `.book`/`.chapter` files, the reader and the gate gets a verdict line in this chapter; defects with one clear answer are fixed and measured — the `:not()` rosters named, the element selectors in `$Appearance`, dead members, comments that are no longer true; features are listed under [the pitches](#pitches) with their pain.

**Files:** every file the verdicts name · this chapter.

**Visible end:** ***the report in this chapter, every class on it; both gates green after the fixes; a candid answer to "is it clean" that says what the instrument could not see.***

**Depends on:** [U26](#u26), [U27](#u27) — *it reads settled code.*

## <a id="scenarios3"></a>Test scenarios

*Compacted 2026-09-12: the scenarios that survived became the gates — `verify:wiki` and `verify:latex` — and a promise is read where it runs; the ones that did not are in the record above.*

## <a id="risks3"></a>Risks

*Compacted 2026-09-12: the risks that fired are in the stand and in [Solutions](../solutions/.cover.md) chapters 72 to 77; the rest did not fire.*

## <a id="order3"></a>Order

*Compacted 2026-09-12: the sprint ran this order; what it left is [Sprint 65](71-sprint-65--the-encyclopedia-finished.md).*

## <a id="stand4"></a>Where things stand — ***2026-09-12, night: the title block green by the gate and wrong by Doug's eye, the manual built wrong once and read right, the loop measured***

***Doug's words of the evening, verbatim, each an instruction:*** **"I want this to look like this, including From Wikipedia… Two separators. The name and tagline."** · **"Yours is missing what serves as the underline for the title."** · **"This is our contents. Kind of a nightmare. Needs to match. The space under the Title and Wikipedia — too much space between that and the text. In general, margin / padding is kind of off."** · **"Our image is a bit too big. Remeasure. Alan looks too large."** · **"Get the blues of the appearance selector. Why not implement it? Wouldn't that component just access the theme and change the values? It would be a GREAT opportunity to prove this."** · **"Why don't you work on the compiled version so you have live updating? Is that why you are slow? And then back propagate the issue until we make a sync process for the binder."**

### What is done — commits `f7a7357`, `6bb165b`, `e89f5f0`, nothing pushed

| | | |
|---|---|---|
| **the indicators and the subpage line** | read into the synopsis; placed by flex, the format's wrapper never named | the twelve hydration errors were a format's `<div>` inside a `<p>`; an image stands beside the site line, not in it |
| **the tabs and the three buttons** | 32px tall; the bar under the selected tab; Wikipedia's four SVG marks painted by the theme through `painted()`; the burger and the logo to the pixel | the gate measures `height` on tabs and buttons only |
| **the title's reference** | `display: block` on the anchor wrapping the heading | inline, its line box stood the title 47px tall against Wikipedia's 40 |
| **the toolbar's rows** | margin 0 said by the theme | the worn format's 0 lost to the base theme's paragraph margin — pitch 3, measured a third time |
| **the magnifier** | `field_backgroundColor`, not `field_background` | the shorthand declared after the image wiped it |
| **the contents column** | 16px padding, heading and rows 12px in, rows 28px, Wikipedia's chevron hung 23px left of the word and turned when open | the heading rule had matched every row's summary — a summary is a heading — until it named the section's heading |
| **the gate** | 17 regions on Turing, 34 looks, `boxShadow` read on rule pairs, absent menus skipped | Turing 17 of 17 and 33 of 34; the Manual of Style 15 of 17 and 30 of 34, the rest pairs the page has no element for |

### What was measured and corrected tonight

- **The gate was blind to a shadow.** Wikipedia underlines its title bar with `box-shadow: 0 1px #a2a9b1`; `looked` read borders, margins and padding, so the *title rule* pair passed with no rule drawn. Doug saw it before the instrument did. `boxShadow` joined the list for rule pairs, the pair went red, and the bar spans the text's width under both the title and the languages button. — [D14](#d14).
- **`parts()` keeps a nested writing of its OWN kind, and otherwise only the rung beneath** — read in `Composition.parts()`, not remembered. The manual built as a `$Box` kept paragraphs only: every menu drew inside a `<p>`, the field refused *"a piece of writing says something, and this one says nothing at all"*, 36 hydration errors, one refusal panel. A document inside the lead's document is kept whole, and a document's parts are sections, so the menus survive. **[D12](#d12) was right; the first build did not read it.**
- **The loop was measured.** The demo tree under `.wiki/.public` is live under Vite. The package is not: a rebuilt `dist` without `serve.sh` reproduced *"does not provide an export named"* at once — the failure `serve.sh` documents. Doug refreshing between cycles saw a broken page, not a stale one. — [D16](#d16).
- **The counts already agree:** manual groups 11 of 11, manual links 90 of 90, and the manual opens under the gate's pointer.

## <a id="recarve4"></a>RECARVED 2026-09-12, night — ***Doug's five corrections, the appearance selector made real, the loop***

### <a id="d14"></a>D14 · ***A look the gate cannot read is not green***

`looked` must hold every property Wikipedia draws a listed element with. A pair that passes while the eye sees a difference is a defect of the instrument before it is a defect of the theme, and the instrument is corrected first. *Chosen over* widening the tolerance or trusting a screenshot.

### <a id="d15"></a>D15 · ***The appearance panel writes the theme's values***

The theme is a format that is a singleton with values, and a field is a bond. The panel finds its theme by reflection and assigns `size`, `measure` and the palette; the sheet re-draws because the values changed. No second mechanism, no event, no store. *Chosen over* a CSS class per choice, which would be a second theme written by hand. **Measured first with one value, `size`, before the rest is built.**

### <a id="d16"></a>D16 · ***The loop is measured before it is trusted***

Work goes into the served tree where it can, because that is live. The package's loop is a unit of its own, and the experiment that fixes it is measured once, on the failure reproduced tonight, before `serve.sh` changes. *Chosen over* aliasing `src` on faith — the config's own note says why rollup owns the graph.

### <a id="u26b"></a>U26 · ***continued — Doug's five, each a pair***

**Mechanism:** each thing Doug named becomes a pair that is red before it is green: **the title rule** (`boxShadow`, done); **the site line to the first text** — Wikipedia's `#siteSub` ends at 194 and the first hatnote begins at 209, fifteen pixels, ours measured against it; **the infobox image** — Wikipedia's is 250 wide in a 310 box, ours read from the same source and measured; **the contents column** — 28px rows, 12px in, the chevron, against the shot Doug sent; **"Alan looks too large"** — the title measures 28.8px on a 39.6px line on both pages, so what is large is the photograph, and the pair says so.

**Files:** `.wiki/.public/verify-wiki.mjs` · `src/encyclopedia/Theme.tsx` · `src/encyclopedia/Infobox.tsx` · `.wiki/.public/read-page.mjs`.

**Visible end:** ***Doug's crop and ours indistinguishable at 2×; his contents shot and ours the same.***

### <a id="u27b"></a>U27 · ***continued — the manual as a document***

**Mechanism:** `$Manual extends $Document`, `definition = 'aside'`, no registration; the reader writes one `<Section>` — the heading its title, the field, the menus with their own menus inside, the two foot lines; the format selects under `> .pd-section`. The failure of the first build stands recorded above.

**Visible end:** ***the manual right of the lead, no refusal, no hydration error, 11 groups and 90 links, the second group opening.***

### <a id="u29"></a>U29 · ***The appearance selector, implemented*** — D15

**Mechanism:** `$Appearance` becomes a control (`$Appearance extends $Control`, one file in `src/application`), so `reflection.theme(this)` reaches the theme it stands in; each choice assigns — Text: `size` 14px, 16px, 20px; Width: `measure` standard or none; Color: the palette Wikipedia's night mode uses (paper `#101418`, ink `#f8f9fa`, link `#88a3e8`, rule `#54595d`, quiet `#27292d`), Automatic reading `prefers-color-scheme`. The radios are drawn as Codex draws them — 20px, `#72777d` ring, 6px `#36c` ring when chosen — the blues Doug asked for. The gate operates all three and reads the sheet's values back.

**Files:** `src/application/Appearance.tsx` · `src/encyclopedia/Theme.tsx` · `.wiki/.article/.book.tsx` · `.wiki/.public/verify-wiki.mjs`.

**Visible end:** ***choosing Dark turns the page dark without a reload; choosing Large grows the text; the gate proves each.***

**Depends on:** [U26](#u26b) · ***Doug's yes to `$Appearance` as a control and to the panel assigning the theme's fields*** · **design owed and measured first:** a written theme field re-draws the worn sheet.

### <a id="u30"></a>U30 · ***The loop*** — D16

**Mechanism:** three parts, each measured. **(a)** the gate takes `--only <target>`, so one page costs one page. **(b)** the package loop: on the failure reproduced tonight, two candidates are tried once each — `rollup -c -w` with Vite watching `dist` and a full reload on change, and Vite reading `src` with the config's cycle-order warning tested rather than assumed — and the one that survives is written into `serve.sh`. **(c)** the binder's other direction: `build.mjs --back` carries a served-tree edit to its source for the files its manifest lists, so working live in the served tree is safe — Doug's "sync process for the binder".

**Files:** `serve.sh` · `.wiki/.public/vite.config.ts` · `.wiki/.public/build.mjs` · `.wiki/.public/verify-wiki.mjs` · `package.json`.

**Visible end:** ***a theme edit reaches Doug's browser without a restart; one page's gate runs in under a minute; an edit made in the served tree is in git.***

## <a id="scenarios4"></a>Test scenarios

*Compacted 2026-09-12: the scenarios that survived became the gates — `verify:wiki` and `verify:latex` — and a promise is read where it runs; the ones that did not are in the record above.*

## <a id="risks4"></a>Risks

*Compacted 2026-09-12: the risks that fired are in the stand and in [Solutions](../solutions/.cover.md) chapters 72 to 77; the rest did not fire.*

## <a id="order4"></a>Order

*Compacted 2026-09-12: the sprint ran this order; what it left is [Sprint 65](71-sprint-65--the-encyclopedia-finished.md).*

