# Sprint 58 — The Chapter That Is Its View

- **author:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **style:** [The Coding Style](../the-coding-style/03-the-coding-style.md)
- **status:** `implementation-ready` — *part one's model and mechanism are Doug's, given 2026-09-10; part two's `src` members wait on his yes*
- ***The chapter name is a PROXY; Doug's to rename.***

---

***Doug, 2026-09-10, the whole brief in his order:*** **"Sprint is finishing latex. Citations and anything else that is a bug. That's IT. We brainstorm wikipedia after that."** *Then, reading the paper's contents file:* **"I was under the impression that chapters had been updated to a subclass model. We need to change every single chapter. Are they not a type of reference now? They shouldn't even support this style of coding."** · **"There should be a validation error if they get non-annotations."** · **"That is the first part of the sprint, citations second."** · *On `ChapterSpecification`'s waiver:* **"Fine, but it also needs to say that you dontSaySomething."** · *And the model:* **"It lives in view. The chapter looks like its view."** · **"Cover, Table, Synopsis need to be chapters. We need the whole model to be that the chapter is written as a document in the view. It doesn't hold its document but it points to its document."**

**Two parts, in his order: the chapter model, then citations and every other bug the paper shows. Nothing else** — *the LaTeX apparatus that is not a bug is written down at [the end of the line](#end), and Wikipedia is a brainstorm after this closes.*

## <a id="requirements"></a>Requirements — ***the register; the full table stood here and became the record below***

| | demand | state at the close |
|---|---|---|
| **R1** | a chapter holds only annotations and says nothing; both rules | landed, `ee9ef47` — [U1](#u1) |
| **R2** | a chapter is written as a document and points to it | landed, `ee9ef47` — [U2](#u2) |
| **R3** | cover, table of contents and synopsis are chapters | landed by position, fifth commit — [U3](#u3) |
| **R4** | every chapter in both demos on the model | landed, `ee9ef47` — [U4](#u4) |
| **R5** | citations work: clicked, seen, the number the entry's | seven numbers drew at `affe5e7` by the handover; the scratchpad that replaced it draws keys until [Solutions 71](../solutions/71-the-population-that-never-drew.md) is answered — [U5](#u5), open |
| **R6** | every other bug the paper shows | [U7](#u7) open, [U8](#u8) fixed in source at the close |
| **R7** | the `.latex` integration test | [U9](#u9) open — Sprint 62 |
| **R8** | `$Writing$` structural and small; `print()` draws the block read without annotations | landed, `8cd3276` |
| **R9** | a chapter file extends the book's `.chapter` and prints its document | open — Sprint 61 |
| **R10** | the `$$` classes bare, extending Reference | landed, third commit |
| **R11** | the contents in layers again, a Row expecting a mention | landed, fourth commit |
| **R12** | one page per book, anchors the router owns | open, the router's |
| **R13** | Cover, TableOfContents, Synopsis, Book to Writing's standard | Book landed; the three open — Sprint 61 |
| **R14** | `below()` gone; the composition type hierarchy is reflection's | landed — [The Composition Type Hierarchy](../the-type-system/07-the-composition-type-hierarchy.md) |
| **R15** | themes per type, formats per instance | names landed; restructure after LaTeX — [The Motif, ch. 4](../the-motif/04-themes-per-type-formats-per-instance.md) |
| **R16** | comments leave the code per file | open — Sprint 62 |

*The rulings behind R8–R16 are gathered in [The Book's Little Framework](../writing-a-book/04-the-book-s-little-framework.md).*

## <a id="sweep"></a>The sweep — ***the paper driven and clicked, 2026-09-10, head `f2f0a38`, working copy clean***

| what a reader meets | LaTeX reading | markdown reading | verdict |
|---|---|---|---|
| **contents rows** clicked, target landed in view | **3 of 65** — *62 land at `top: 0`, UNDER the fixed 56px strip* | **1 of 65** under a 48px strip | ***BUG — [U7](#u7)*** |
| **citations** clicked, target in view | **7 of 7** *(once the driver stopped racing latex.css's smooth scroll)* | 7 of 7 | *mechanism works; the number and the space are [U5](#u5), [U6](#u6)* |
| **KaTeX errors** | **1** — `\mathrm{P}^{#P}` draws its source in red | 1 | ***BUG — [U8](#u8)*** |
| **figures** loaded, captioned `Figure n.` | 3 of 3 | 3 of 3 | ✓ |
| **equation numbers** — `data-number` present, drawn | **5 present, 0 drawn** | 0 drawn | *fidelity, not a bug a reader sees as broken — [end of the line](#end)* |
| **refusal panels · console errors** | 0 · 0 | 0 · 0 | ✓ |
| **characters** | 38,164 | 38,164 | *Sprint 57's number exactly* |

**And `/turing`: 12 of 12 citations land, drawn as Wikipedia's superscript `[1]`** — *the reference, untouched this sprint.*

## <a id="decisions"></a>Decisions

### <a id="d1"></a>D1 · ***A chapter's block holds annotations and nothing else, and its view writes the document it means***

**Doug's, verbatim above.** *So the two things `$Chapter` does today are both wrong: it takes a `$title` prop where a meaning belongs, and its bond writes a `$Ref` — a phrase, not an annotation — into its own block.* ***Chosen over*** *keeping the contents as hand-written `<Chapter title>` rows, which is exactly the style he says a chapter must not support.*

### <a id="d2"></a>D2 · ***A chapter overrides `view()`, and that is the one place a kind does***

**B4 — a kind may not override `view()` — was given for kinds of WRITING, "in the library where most implementations are terminal", and Doug called it "a rule meant to be broken someday."** *A chapter is on the other hierarchy; its view IS the chapter.* ***Written down here so the convention's one exception has a reason at the line and [The Coding Style](11-the-coding-style.md#the-drawing-conventions) can carry it.***

### <a id="d3"></a>D3 · ***The contents is derived from the book's chapters, and `.table.tsx` is deleted in both demos***

**A table of contents is a chapter whose document lists what the book's chapters mean.** *65 rows in the paper and 32 on `/turing` are hand-written today; after this they are read.* ***Chosen over*** *keeping the files, which would keep the style being struck.*

### <a id="d4"></a>D4 · ***`src` moves on Doug's yes, given above for the chapter model; part two's `src` members are asked as one batch***

### <a id="d5"></a>D5 · ***The served tree is edited directly and `build.mjs` is NOT run***

**Measured today: `build.mjs` empties `.latex/.public/` and copies `.latex/` over it, and the served tree carries `probe/probe.tsx` and three figure PNGs the source tree never had — it deleted all four and the paper stopped rendering.** *Restored from HEAD.* ***The mirror is a hazard, not a convention, and which tree is the source is Doug's to rule — until then, `.latex/.public/` is what the browser reads and is what is edited, with `.latex/` brought level by copying the other way.***

### <a id="d6"></a>D6 · ***A citation sits at the baseline on the paper and superscript on the encyclopedia; both are the page's own***

**The paper's text layer: bracket height 10.9 against body 10.9, raised 0, eight sampled.** *Not a bug to fix toward the other reading.*

## <a id="part-one"></a>PART ONE — the chapter model — ***register***

- <a id="u1"></a>**U1** · two rules on `ChapterSpecification` — landed.
- <a id="u2"></a>**U2** · `$Chapter` is its view and points to its document — landed; the positional mention with its `<Path>` is the book's.
- <a id="u3"></a>**U3** · cover, table of contents and synopsis are chapters — landed by position; the three classes to Writing's standard are R13's.
- <a id="u4"></a>**U4** · every chapter in both demos a class — landed.

## <a id="part-two"></a>PART TWO — citations, and every other bug — ***register***

- <a id="u5"></a>**U5** · a citation's number is the entry's place — the design is the scratchpad, [Writing a Book, ch. 4](../writing-a-book/04-the-book-s-little-framework.md#citations); blocked on [Solutions 71](../solutions/71-the-population-that-never-drew.md).
- <a id="u6"></a>**U6** · a citation set as LaTeX sets it, a space before the mark — open, Sprint 60.
- <a id="u7"></a>**U7** · a contents link lands below the strip, `scroll-margin-top` by the strip's height — open, Sprint 60.
- <a id="u8"></a>**U8** · no equation draws its source — `\#P` written into both trees at the close through the editor, because the shell mangles a backslash; to be seen on the next drive.
- <a id="u9"></a>**U9** · `verify-latex.mjs` is the gate — open, Sprint 62; the drivers it is made from are saved in `.latex/.public/.paper/`.
- <a id="u10"></a>**U10** · the gate, driven and seen — the numbers in Where things stand.

## <a id="scenarios"></a>Test scenarios

*Fifteen scenarios stood here; the ones that survived are promises in `.tests/` — `title`, `writing`, `book`, `authoring`, `citation` — and a promise is read where it runs.*

## <a id="risks"></a>Risks

*Six stood here. Two fired: a backslash in a shell argument silently matched nothing, twice, so every such edit goes through a script or the editor; and part one was large and part two small, which is why citations are still open at the close. The rest did not fire.*

## <a id="order"></a>Order

*Ran as written: part one as one landing, then the citations.*

## <a id="end"></a>THE END OF THE LINE — ***LaTeX work that is not a bug, written down and not done***

- ***the whole paper*** — 68,443 words, 412 citations to 256 entries, ~106 footnotes, 101 theorem labels against the demo's 6,179 / 8 / 7 / 0 / 0. *Doug: "that is definitely where this will be going."*
- ***equation numbers drawn at the right*** — five carry `data-number`, no theme draws it.
- ***`$Footnote` draws nothing*** — where a writing is drawn, [design owed since 54](60-sprint-54--the-paper-pixel-by-pixel.md#drawn).
- ***`$Appendix.letter()` throws; `$Theorem` is a shell; `$References` as an ordered list*** — the OWED lines in each file.
- ***markdown as a solid base for an article*** — Doug, today: *"We want a version of markdown that also serves as a solid base for an article."* The markdown theme extends the article theme and spends forty lines undoing it; the direction is the question.
- ***a formula that does not parse is refused rather than drawn red.***
- ***[Sprint 57's U3](63-sprint-57--finishing-latex-and-markdown.md#u3)*** — a format adds an element.
- ***a heading's id is its own text and nothing makes it unique in a book*** — `/turing` carries one twice. *To the condition report.*

## <a id="stand"></a>WHERE THINGS STAND — ***2026-09-11, the close; Sprint 59 onward is planned in [chapter zero](00-planning.md)***

**The head is `affe5e7`, seven commits since `ee9ef47`, nothing pushed; the close commits the working copy on top of it.** *What that commit carries:* `$Scratchpad` held by the book, `$Entry` keeping itself at bond, `$Citation` finding at draw, `$Notes` beside `$References`, `$Footnote extends $Citation`, the handover deleted, the theme's landing fade and footnote rules, the `\#P` fix, the citation promise rewritten with a Notes chapter. **Its gate:** tsc src 0 · suite 101 of 103 — *the two red are the citation numbers, blocked on [Solutions 71](../solutions/71-the-population-that-never-drew.md)* · the paper 76,688 characters with 285 keyed entries, 7 citations drawing their keys and landing, 5 equation numbers present, 0 panels · `/turing` untouched.

**Measured at the close and filed:** every part under a printed document bonds twice and only the first draws — chemistry's lift bonds on every render and the synthesis evaluates inline children before it compares arguments; reported in [chemistry's chapter zero](../../../chemistry/.lib/projection/00-planning.md#reported). On the new chemistry dist an override of a styled field or getter lands in the base's group without repeating `@select`, so the markdown theme's header claim is stale and no styled fix was ever owed. Keyframes are built in chemistry and `$subject` is exported, both on this branch's ask.

**What the paper is missing, in Doug's words at the close:** *"I want to see all the citations on the page working with clickable links. I want to see the citations self-number. Please put all the links that were in the document. Most have disappeared"* — 35 bracket marks stand as plain text beside the 7 citations; *"you should be coding to classes and not elements"* — four element selectors remain in the base theme and one in markdown. **Both are chunks of the plan.**

**The standing method, held:** talk while working, in the team's voices; one file per step; a question at every uncertain or ugly point; the gate after each; no member added where a mechanism exists; rollup before every suite run; every backslash edit through the editor.
