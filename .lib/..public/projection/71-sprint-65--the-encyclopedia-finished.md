# Sprint 65 — The Encyclopedia, Finished

- **author:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **coauthor:** [Gabby](../../../../.claude/library/..teamsmanship/..team/gabby/gabby-and-the-visual-voice/.cover.md), [Queenie](../../../../.claude/library/..teamsmanship/..team/queenie/queenie-and-the-specification/.cover.md)
- **style:** [The Coding Style](../the-coding-style/03-the-coding-style.md)
- **status:** `implementation-ready` — *handed off from [Sprint 64](70-sprint-64--themes-by-registration.md) on 2026-09-12; every unit below was planned there or in [Sprint 63](69-sprint-63--the-encyclopedia.md) and is cited by its anchor, so nothing is re-planned here.*
- ***The chapter name is a proxy; Doug's to rename.***

---

***Doug, the brief, verbatim:*** **"The next sprint, we go back to what is in encyclopedia. We want to finish that up. We had a nice list and want to get it done. We need to apply this code there and work off the rest of the list."** — *this code* being the book and theme shape of Sprint 64, and *the list* being [Sprint 63's two lists](69-sprint-63--the-encyclopedia.md#stand4) and [Sprint 64's units](70-sprint-64--themes-by-registration.md#units). His standing orders on the way: **"Can we please fix structural things before styling and can we try to fix everything at once, and then do the gates at the end?"** · **"I don't want the gate run for a while. I want style bugs to be one cleanup at the end now."** · **"Don't be sending off untrained contexts to mess everything up."**

## <a id="where"></a>Where things stand — ***2026-09-12, the handoff***

**Next action: `/ce-plan` on [Sprint 66](72-sprint-66--themes-and-formats.md), where the appearance unit went; then `/ce-work` here, starting at [U3](#u3).** *Updated 2026-09-13.*

**What to read, and what each is load-bearing for:** [Sprint 64's stand](70-sprint-64--themes-by-registration.md#stand) — how a theme is made and found now, and the two lessons that cost an hour each; [The Theme That Arrived on the Second Paint](../solutions/73-the-theme-that-arrived-on-the-second-paint.md) — the same, as a defect; [The Mirror With Two Directions](../solutions/72-the-mirror-with-two-directions.md) — **re-bind a demo after editing its source**, or a browser shows you last hour's code; [The Shape of TSX, using `$` right](../the-coding-style/06-the-shape-of-tsx.md#the-dollar) — DI reaches only what is fetched through `$`, which U1 depends on; the paper's [`.book.tsx`](../../package/.latex/aaronson/.book.tsx) — the shape U1 copies to the wiki.

**Complete, at `364d197` and `46449ec`, nothing pushed:** [U1](#u1) — every `.chapter.tsx` under `.wiki` gone, `.wiki/.book.tsx` carrying `$Wiki` and the four links and registering no theme, the article and the portal extending it, alan-turing renamed turing through the entry, the reader and the served tree, the encyclopedia theme's rules reading its values. *Cover, synopsis and contents as typed documents, listed under U1, were not done — the third sprint to carry them, and the reason the team was fired on 2026-09-13: [The Cover Is a Cover](../the-type-system/08-the-cover-is-a-cover.md). They are the first unit of Sprint 66's re-plan.*

**Reverted at `a35c7f9`:** the flow built at `76e9930`, where the reader wrote each article as one document so the floats had a column to flow in — a shape of ours where Doug had given [the section the book holds](72-sprint-66--themes-and-formats.md#where). [U5](#u5) is his design, and it is **built in [Sprint 67](73-sprint-67--the-flow-the-book-holds.md)** — the book holds the flow and the Encyclopedia does the layout.

**Handed to [Sprint 66](72-sprint-66--themes-and-formats.md):** [U2](#u2), the appearance panel — brainstormed 2026-09-13 into a theme of values the panel writes and formats that read it.

**Not started:** [U3](#u3), [U4](#u4), [U6](#u6).

**How to see it:** `sh serve.sh` at the package root; the paper at `http://localhost:5310/`, the wiki at `http://localhost:5311/turing`, `/article`, `/`. The paper's LaTeX and Markdown buttons switch its theme in two to three seconds.

**Verification at handoff:** suite 101 of 101; `verify:latex` green on both readings; the wiki gate last run green at commit `e89f5f0` and **not run since**, by Doug's order, until the cleanup at the end.

**Wrong turns already taken, so they are not taken again:** registering a paragraph kind on a menu ([Solutions 75](../solutions/75-the-registration-that-took-the-summary.md)); reaching the theme by walk ([Solutions 73](../solutions/73-the-theme-that-arrived-on-the-second-paint.md)); a declared-only field as a store; a field initialised from reflection; aborting images in the gate ([Solutions 76](../solutions/76-the-image-that-drew-its-words.md)); a `wide_` prefix beside the base's ([Solutions 77](../solutions/77-the-prefix-that-took-the-base-s-rule.md)).

## <a id="units"></a>Units — carried, not re-planned

### <a id="u1"></a>U1 · ***The wiki's books in the paper's shape*** — [Sprint 64 U3](70-sprint-64--themes-by-registration.md#u3), [U4](70-sprint-64--themes-by-registration.md#u4)
**Mechanism:** every `.chapter.tsx` under `.wiki` deleted; `.wiki/.article/.book.tsx` carries the article book, its chapter kind, its document kind, the four link kinds and the theme registration on `Book` it already has; the Turing book and the portal extend or mirror it; the reader writes chapters that import from the package and from `../.article/.book`, and fetch their document through `$` where the book's kind must take; cover, synopsis and contents become typed documents with their logic in their specifications, the book finding them by type.
**Files:** `.wiki/.chapter.tsx` *(deleted)* · `.wiki/*/.chapter.tsx` *(deleted)* · `.wiki/.article/.book.tsx` · `.wiki/alan-turing/.book.tsx` · `.wiki/.encyclopedia/.book.tsx` · `.wiki/.public/read-page.mjs` · `src/library/Cover.tsx` · `src/library/Synopsis.tsx` · `src/library/TableOfContents.tsx` · `src/library/Row.tsx` · `src/library/Book.tsx`.
**Visible end:** ***no `.chapter.tsx` anywhere; both wiki pages and the portal draw as before; the three classes gone.***

### <a id="u2"></a>U2 · ***The appearance panel hands the book a theme*** — [Sprint 64 U5](70-sprint-64--themes-by-registration.md#u5), Sprint 63 R7
**Mechanism:** `$Appearance` becomes a control writing; each choice is a handler that hands the book a named theme composed from `$EncyclopediaTheme` — palette for Light and Dark, `size` for Small, Standard and Large, `measure` for Standard and Wide — through the book's setter, as the paper's switch does; the radios drawn as Codex draws them, *the blues*.
**Design owed before it is buildable:** how three aspects compose into one named class without eighteen files.
***Handed to [Sprint 66](72-sprint-66--themes-and-formats.md) on 2026-09-13:*** no named class at all — a theme is values the panel writes, a format reads them; the visible end is [AE1 to AE4](72-sprint-66--themes-and-formats.md#acceptance-examples) there.

### <a id="u3"></a>U3 · ***A contents row's word navigates, its arrow toggles*** — [Sprint 64 U7](70-sprint-64--themes-by-registration.md#u7)
**Visible end:** ***the driver clicks the word and the row stays; clicks the arrow and it opens.***

### <a id="u4"></a>U4 · ***The switch's cost*** — [Sprint 64's stand](70-sprint-64--themes-by-registration.md#stand)
**Mechanism:** the profile at `1cfbca2` put nine tenths of a re-draw in three readings re-done per render — `reflection.beneath`, `reflection.numbered`, `$Writing.kind` — each pure for the life of a writing. Made cheap where they live, measured by the same profile before and after; the first paint pays too.
**Visible end:** ***a switch under half a second on the paper; the profile showing the three readings gone from its top.***

### <a id="u5"></a>U5 · ***One flow across chapters*** — [Sprint 64 U6](70-sprint-64--themes-by-registration.md#u6), R6 — ***DONE, as [Sprint 67](73-sprint-67--the-flow-the-book-holds.md)***, where the design was re-heard from Doug and built: the Encyclopedia's view puts the chapters in their groups and hands each to the template method for that part.

### <a id="u6"></a>U6 · ***The cleanup — every stylistic item, then the gates*** — [Sprint 63's list](69-sprint-63--the-encyclopedia.md#stand4)
**Mechanism:** the eleven items as Doug listed them — below 1120, the hide buttons, infobox rows, body thumbs, the manual's look, the three panels' rows, the lead's bold and italics verified, nested contents rows, the appearance radios, the footer, the site line as a block — each a pair red then green, **worked as one cleanup at the end**, the gates run once on the restarted server before the commit that closes.

***Filed 2026-09-13, Doug, with a crop of the Turing contents: "There is a style bug with the table of contents."*** *It joins **nested contents rows**, which is the item already on the list. What the crop shows, in the words it was seen in and not yet diagnosed:* **the rows beneath an open row begin at the same left edge as the row that holds them** — *Family, School, Christopher Morcom and University and work on computability all start where "Early life and education" starts, so nothing in the column reads as nested;* **and a row stands in the column while the row that holds it is closed** — *Government apology and pardon is drawn between Death and Further reading with Death's chevron still shut.* ***Measured against wikipedia.org at the cleanup, never repaired from the crop.***

***Filed 2026-09-13, Doug, with a crop of the real Manual of Style box: "Add to the style queue to get the design of this right. We need it in the style corrections at the end."*** *It joins **the manual's look**, already on the list. What the crop shows, read off it and not yet measured against ours:* **the search field stands alone across the box and the Search button sits on its own line beneath it, centred** — *ours puts field and button on one row;* **the foot is two lines, `Simplified · Contents · Tips` centred and then `V · T · E` on a line of its own** — *ours draws them as two centred paragraphs;* **each group is a pale blue band with its name centred and `[show]` hard right in link blue**, *and the bands are separated by white rather than touching;* **the title is centred link-blue above a white field area.** *The same crop carries the sample-layout thumbnail with its caption and an expand mark at the lower right, which ours does not draw.* ***Every one of these is measured against en.wikipedia.org at the cleanup before anything is changed.***

***And the method is ruled, not left to taste.*** **Doug, with the box at full size: "When we get to style cleanup I expect this to be seriously cleaned up. Ours looks nothing like this which is the real one and the only way to fix that is to pull markup for many breakpoints and fix it."** *So the manual is not repaired from a picture and not repaired at one width: **the real box is read off en.wikipedia.org at every pinned width the gate already drives**, markup and computed styles together, and ours is fixed against that recording — the same way the title block and the contents column were done in [Sprint 63](69-sprint-63--the-encyclopedia.md#stand4).* **Seriously cleaned up is the standard, and "ours looks nothing like this" is the verdict it has to overturn.**
**Visible end:** ***both wiki gates green at every pinned width; the paper's gate green; Doug's crops and ours indistinguishable at 2×.***

## <a id="order"></a>Order

**[U1](#u1) *done, the typing owed and now Sprint 66's first unit* · [U5](#u5) *Doug's design, the section the book holds, unbuilt* · [U2](#u2) *in Sprint 66* · [U3](#u3) · [U4](#u4) · [U6](#u6) with the gates at the very end.**

**Names owed to Doug**, carried from 63 and 64: `$Manual`, `$Option`, `$Sheet` *(deleted)*, `--only`, `--at`, `reflection.above`, and the theme members `band_`, `held_`, `mainMenu_`, `tabGroup_`, `paneName_`, `named_`, `siteRow_`, `indicator_`, `subpage_`, `bar_`, `tab_`, `broad_`, `underline_`.
