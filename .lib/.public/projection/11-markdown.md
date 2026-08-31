# Markdown

- **author:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **style:** [The Coding Style](../designing-inexplicable-phenomena/11-the-coding-style.md) — *the rules in force, and the register to check before a tidy crosses one.*

---

*Opened 2026-08-10 as a brainstorm. **Status: `implementation-ready`** — the [Plan](#plan) was set 2026-08-11, enriching this chapter in place. This is the back half of the arc [Writing](10-writing.md) opened — Doug cut that sprint in two at the interview's close, and [the second half is what closes it](10-writing.md#the-second-sprint--the-specialization). The cut is a session boundary, not a change of subject.*

*Sprints are **named, not numbered**; the title is the implementer's and stands for correction.*

*Narrowed at this brainstorm by Doug's own ruling: **"No fourth book. This is more of a refactoring to prove things work, though with a `$Figure` to show non-text interactions."** What the first half's record still lists for this half — the four books specialized, per-book aesthetics, The Team's chapter — is **moved, not dropped**, and named in [Out of scope](#out-of-scope-named).*

## The workflow

[ce-brainstorm](../../../../.claude/library/our-skillset/28-ce-brainstorm.md) → [ce-plan](../../../../.claude/library/our-skillset/29-ce-plan.md) → [ce-work](../../../../.claude/library/our-skillset/30-ce-work.md) → [ce-review](../../../../.claude/library/our-skillset/33-ce-review.md) → [ce-compound](../../../../.claude/library/our-skillset/31-ce-compound.md).

## Rulings from the interview — 2026-08-10, verbatim

Four answers, and **three of them declined the menu they were offered.** Each decline was a correction of altitude, and each one is recorded because the question it replaced was the wrong question.

- **On `$Page`, declining a routing decision:** *"You don't need to get rid of the concept of `$Page`. What does it mean? What role does it play in each part of the demo? To keep demos isolated, what does that mean? You can repeat implementations for the demo. Think more abstractly. I doubt you are modeling a page in all cases. Maybe you are in one."* **The question was where `$Page` should go; the question is what it means.** Answered by reading — see [What each surface models](#what-each-surface-models--read-2026-08-10).

- **On markdown, declining one class at one level:** *"Well, maybe `$Markdown` is itemized? You can have a markdown section, or a markdown paragraph. Maybe you can make references out of markdown, or a markdown code block as a code block. Are you sure that markdown is the only level you want to use markdown? Think a bit harder about it."*

- **The charge, given as the answer to *what would mean this half happened*:** *"Okay make a markdown mini framework that's reusable for the demo, and port into it, test it, and we can consider it for the main framework if it works. It should be the case that we can now insert things at the paragraph or sentence level into a regular section, so do use that functionality possibly."*

- **On scope:** *"No fourth book. This is more of a refactoring to prove things work, though with a `$Figure` to show non-text interactions."*

- **On who decides:** *"I need you to decide on R1–R10. I operate at a higher level but I am happy to answer specific questions."* **So every requirement below is the implementer's decision** and none of them is waiting on a ruling. What is Doug's is quoted; what is decided is marked so.

## What each surface models — read 2026-08-10

*Doug asked what `$Page` means in each part of the demo. This is the answer, read off each demo's own vocabulary rather than argued. **Each claim is `read`** — the file was opened and the exported names are cited.*

| demo | its vocabulary | what it models |
|---|---|---|
| **The Manifold** | `Page`, `Spread`, `LeftPage`, `RightPage`, `Folio`, `DogEar`, `Ribbon`, `PageTurn`, `RunningHead`, `TocPage` ([manifold.styled.ts](../../package/app/src/sections/book/manifold.styled.ts)) | **a page** — a physical codex, open |
| **The Team** | `Manuscript`, `Spread`, `Body`, `Margin`, `Folio`, `Leaf`, `Plate`, `Slip`, `Listing` ([the-team.styled.ts](../../package/app/src/sections/the-team.styled.ts)) | a **manuscript** — body and margin, the scholarly apparatus |
| **The Shelf** | `Room`, `Board`, `Spine`, `Drawer`, `DrawerCard`, `Face`/`Reverse`, `Colophon` ([shelf.styled.ts](../../package/app/src/sections/book/shelf.styled.ts), [catalogue.styled.ts](../../package/app/src/sections/book/catalogue.styled.ts)) | **a room and a card catalogue**. `Face`/`Reverse` is a *card's* two sides; no folio anywhere |
| **`/page`** | `Backdrop`, `BookSkin`, `GithubSkin`, `NightSkin`, `AnatomySkin`, `Kicker`, `ReadingsBar` ([page.tsx](../../package/app/src/sections/page/page.tsx)) | **no page at all** — one document in four dresses |

**So Doug's suspicion holds, and the irony is exact: the demo named `$Page` is the one that does not model a page, and the Manifold — which never claimed to — models one hardest.**

**What `/page`'s `$Page` actually is: a lens.** The word *skin* is the tell, and [the code already knows](../../package/app/src/sections/page/sheet.tsx) — the four are revealed as `new Perspective('book')`, `'github'`, `'night'`, `'anatomy'`. That is move one of the three in [Ways of Reading](../designing-inexplicable-phenomena/04-ways-of-reading.md#the-three-moves): *one live object rendered a way*. **The machinery is right and the name is a category error.** And one of the four is not even a dress — `anatomy` is a *reading rendered*, move two, a report **about** the document rather than a presentation of it.

**On isolation, which was the third question.** Those 560 lines are `.markdown h1`, `.markdown p`, `.markdown code` — CSS reaching into generic markup the model emitted; the four skins differ *only* in that CSS, which is why nothing about them is specialized. **The Team already shows what isolation means here:** its own `$Heading extends $Title` drawing itself, its own `$Plated`, `$Circuit`, `$Slipped`, `$Listed` ([figures.tsx](../../package/app/src/sections/book/library/the-team/figures.tsx)). Repeated implementations, per book. **The framework shares the *kind*; the demo repeats the *implementation*.** Doug: *"You can repeat implementations for the demo."*

## The starting condition — verified 2026-08-10 by reading the source

- **`$Markdown` is not writing.** **Read** — it extends `$Chemical` and runs its own parse into a hand-rolled `Entry[]` union of `heading | paragraph | math | rule`, builds `$Paragraph`s through `$()`, and re-implements `words`, `formulas` and `title` by hand (`markdown.tsx:8-93` *(since replaced by `app/src/markdown/`)*).
- **And the same parse runs a second time, inline.** **Read** — the anatomy lens calls `parse(this.$source)` again and re-derives paragraphs, words and formula counts in its own `view()` ([sheet.tsx:78-85](../../package/app/src/sections/page/sheet.tsx)). **Two populations of one reading** — which is [the chapter that wrote its sections twice](../solutions/13-the-chapter-that-wrote-its-sections-twice.md) wearing a different coat, one level up, and it is still standing.
- **The itemization is a four-line override per level, and one level already does the hard part.** **Read** — `$Section.divide` splits on `/\n{2,}/` ([Section.tsx:52](../../package/src/writing/Section.tsx)), which **is markdown's paragraph rule**; `$Sentence.compose` already **forks on kind**, making a `$Word` where there are letters and a mentioned `$Punctuation` where there are not ([Sentence.tsx:41-43](../../package/src/writing/Sentence.tsx)). That fork is where a markdown link becomes a reference. One more branch, not a new mechanism.
- **`$Latex` is a `$Chemical`, not writing.** **Read** — [latex.tsx:6](../../package/app/src/sections/page/latex.tsx). A formula is therefore outside the model entirely: it cannot be a part, cannot be numbered, and cannot be counted except by the hand-written `formulas` getter that reaches into `$elements` looking for instances.
- **The prior art for a part that responds is shipped.** **Read** — `$RibbonMark` and `$Return` are `$Sentence` subclasses that draw themselves as marks ([marks.tsx](../../package/app/src/sections/book/library/the-manifold/marks.tsx)); `$Highlight` is a `$Sentence` carrying `$first`/`$last`, a span of writing named by position ([Highlight.tsx](../../package/src/reference/Highlight.tsx)). R9 is built from these, not invented — per [the link built three times](../solutions/03-the-link-i-built-three-times.md).
- **The app has no test surface.** **Read** — `tsconfig.json` includes only `src/**` and `tests/**`; the app compiles under its own [app/tsconfig.json](../../package/app/tsconfig.json), whose `include` is `src/**` relative to the app and carries no test glob. `vitest.config.ts` aliases `@` to the package `src` only. So a test placed in the app **would run under the package's vitest and would not be typechecked by either project.** Named here rather than discovered at work.
- **`marked` and `katex` are dependencies of the package, not the app.** **Read** — [package.json](../../package/package.json) `dependencies`. A fact, not a decision: the machinery a markdown framework needs is already a lib dependency, which is why promotion later is cheap.

### The finding this half turns on

**Markdown's syntax is *mentioned* and its content is *used*.**

`**`, `` ` ``, `[`, `](`, `)` are marks that stand for themselves. The words between them are the writing. So a markdown sentence parses to `**` · `bold` · `**`, and `words` passes over the markers **exactly as it passes over commas** — because [that specification already shipped](../the-semantics-of-books/15-the-levels-of-writing.md#used-and-mentioned) in the mechanism half.

**Which means markdown renders out of the model rather than being applied to it.** Bold is not CSS on a `<b>`; it is a word that knows the syntax standing around it. That is specialization at word grade, and it costs one `compose()` fork.

---

# Requirements

*Decided 2026-08-10 by the implementer, on Doug's instruction that he operates at a higher level. Identifiers are internal bookkeeping and never his interface. Every requirement names **what would be observed** if it held.*

## Actors

- **A1 — The author writing in markdown.** Writes a source that is prose plus fenced and inline notation.
- **A2 — The reader.** Meets the specialized parts standing where they were written, and acts on the one that responds.
- **A3 — The implementer.** Asks a *regular* section what it holds, and is answered with the written parts at their written positions.

## The mini framework — markdown, itemized

- **R1. Markdown is itemized per level — and it is THREE, not four.** A markdown section, a markdown paragraph, a markdown sentence, each overriding only `divide()` and `compose()`; `level`, `first` and `canonical` are inherited. *Doug: "maybe `$Markdown` is itemized? You can have a markdown section, or a markdown paragraph."* **There is no markdown word** — no markdown syntax survives to word grade, so a markdown word is a regular word. The `Entry[]` union dies. *Seen: three classes, six small overrides, and no second parse anywhere in the demo.*

- **R1a. Markdown is a NOTATION — a third axis, orthogonal to the levels.** *Libby's ruling, and the answer to Doug's "are you sure markdown is the only level you want to use markdown?"* It is not a level (levels compose downward; markdown appears at every level) and not a role (`role` is a property markdown *deploys*, not one it is). **A notation supplies exactly `divide`, `compose`, and which marks are mentioned — nothing else.** Plain prose is the identity notation; markdown and LaTeX are two instances. *Notation is to the levels what a lens is to a chemical: one concept spent across all of them.* **The register owes it ONE ROW — the axis** — not a class per notation per level. *Seen: a markdown section differing from a regular section only in its two overrides, and the register carrying one new row rather than six.*

- **R2. Markdown syntax is mentioned; markdown content is used — and where that specification strains, the strain is the finding.** `**`, `` ` ``, `[`, `](`, `)` parse as mentioned parts at word grade, and `words` passes over them as it passes over a comma. **But a link's URL and a fence's info string are neither used nor mentioned.** A mention *stands for itself* — a comma means the comma. A URL stands for a destination; `python` after a fence selects a kind. **That is a pointer, a third role, and a two-valued specification cannot hold it.**

  **`role` does NOT gain a third value.** *DECIDED, Cathy's, and it is the stronger reading:* the resolution is that neither was ever word-grade writing. The link is a sentence-grade reference ([R4](#the-mini-framework--markdown-itemized)); the fence is a paragraph-grade kind ([R3](#the-mini-framework--markdown-itemized)). **The strain is the specification correctly declining to call a pointer *writing*** — the word *mention* had been doing two jobs, standing-for-itself and being-syntax-that-points, and only the first is mention. *Seen: `role` unchanged at `use | mention`; a markdown sentence's `words` counting `text` and not `https`, `x` or `com`; and no part of the model calling a URL a word.*

- **R3. A fenced code block is a written part at paragraph grade, and the fence's info string selects its kind.** *Doug's original charge: "itemizing it at various levels to give a targeted code block or other features that prove we can customize" — **the info string is markdown's own customization point**, which is why the specialization hook is not invented.* *Seen: a section holding a fence answers it from `parts()` at the index it was written, with the prose still counting around it, and two different info strings giving two different figure kinds.*

- **R4. A markdown link is a reference at sentence grade, inline — and it splits by where it points.** *Doug: "maybe you can make references out of markdown."* *Libby's ruling:* an **internal** target — something the library holds — makes it a true `$Reference<T>` whose `read()` dereferences to the **object**; that is a citation, the same act as `$Author` and `$Cite`. An **external** target has no object to read, so it reads to a **place**: `$Link` is `$Reference` specialized to point *out of* the library. **And either way, an unresolvable target renders as its text** — a broken link is cosmetic, never structural. *Seen: it stays inside the sentence that holds it and is **never** a part of the paragraph above — the same specification that protects the cover's author, and a regression on the shipped demo if it breaks; an internal link reading to the object; an external one travelling to a place; a broken one still reading as prose.*

- **R5. It is a mini framework, reusable across the demo, and it lives in the demo.** *Doug: "a markdown mini framework that's reusable for the demo… we can consider it for the main framework if it works."* So it is **not** in `src/`, and promotion is explicitly a later decision, not a stretch goal of this sprint. *Seen: the whole of it under the app, imported by more than one surface, with `src/` unchanged by it.*

- **R11. The syntax set is named, and adding to it adds a FORK, never a kind.** *Doug: "Add in additional syntax. Though it's not really different."* The initial set, placed by grade — and the placing is the whole content of the requirement, because a mark's grade is what decides where it lands:

  | grade | syntax | what it becomes |
  |---|---|---|
  | **bounds a section** | `#`–`######`, `---` | a heading bounds a section and **is** that section's title — its canonical paragraph; a break bounds without titling |
  | **paragraph** | ```` ``` ````, `$$…$$`, `>`, `- ` / `1. `, `![alt](src)` | written parts: a fence is a figure keyed by info string, display math a figure, a blockquote a quoted paragraph, each list item a paragraph with its bullet mentioned, an image a figure |
  | **sentence** | `[text](url)` | a reference — [R4](#the-mini-framework--markdown-itemized) |
  | **word** | `**…**`, `*…*`, `_…_`, `~~…~~`, `` `…` ``, `$…$`, `\x` | mentioned marks around used words; inline math a part whose content is not writing; an escape one mentioned part |

  **Why it is "not really different":** every row is a branch in an existing `divide()` or `compose()`. No row adds a level, a role, or a class the model did not already have. *Seen: the table above satisfied one row at a time, with the count of new classes staying at three.*

- **R12. An inline mark that does not pair is punctuation. A block part that does not close is a validity question.** *Doug: "What do you do with asterisks in regular text? It might be a problem or a validation failure."*

  **Neither, for the inline case — and it is not a fallback, it is the same answer regular text already gives.** In a regular section today, `*` falls into `$Sentence.divide`'s non-letter run and `compose()` makes it a mentioned `$Punctuation`. **Pairing is a fact about two marks, not a property of one**, so a single `*` cannot be *wrong*: being a delimiter was never its own property. Markdown therefore adds **pairing**, not a kind — where a pair is found the enclosed run is used writing with mentioned marks either side; where none is found the mark is a run with no letters, which `compose()` already knows how to place.

  **And the notation agrees without bending.** CommonMark's own rule for unmatched emphasis is *treat it as literal text*, which in our vocabulary reads *it stays a mention that stands for itself*. Two systems reaching the same answer independently is evidence the use/mention specification was carved right.

  **Where validation IS the right answer: block grade.** An unterminated fence is not an asterisk problem — it is a written part with nothing to draw, and `$Figure.valid()` already answers that in the kind's own words. The line maps onto a real structural difference: **inline marks arrive inside a block's elements**, where an unpaired mark is just a mark; **block-level parts arrive as their own bond argument**, where an unterminated one has no content at all.

  **DECIDED, the implementer's, and cheap to overturn:** an escape and the mark it escapes are **one** mentioned part. An escape's whole job is to say *the next mark is not syntax*, and splitting them would put a mark in the writing that the author wrote in order to prevent one.

  *Seen: **`2 * 3` parses identically in a regular section and a markdown section** — same parts, same words, same count. `**bold**` differs from the same string in a regular section **only** in that the two `**` runs are recognised as a pair. And an unterminated fence is invalid in its own words rather than swallowing the rest of the section.*

## The port

- **R6. The existing page is ported onto it, and both hand-written parses die.** *Doug: "port into it."* *Seen: title, paragraphs, words and formulas **read off the model**, and the anatomy lens reading `parts()` rather than calling `parse()` a second time.*

- **R7. Nothing on screen regresses.** *Seen: `/page` renders all four lenses, the formulas still typeset, and the Living Page's counts still move when a word is typed — the 226→227 check that has stood since Sprint 45.*

- **R13. The markup contract is DECIDED, not discovered.** *Arthur's finding, and the one call in this half the room must make deliberately.* The three dresses style **generic emitted markup** — `.markdown h1`, `.markdown p`, `.markdown code`, `.markdown a`, `.markdown hr`, `.markdown .display-math`. **That is a CSS-to-markup contract, not a parse dependency**, and R7 forces the choice: either the ported model keeps emitting that markup, or the three dresses' selectors are rewritten against what specialized parts actually draw.

  **The decision is the second, and it is the standing direction rather than a preference.** *"Always move the whole demo app in the direction of specialization of the parts."* Keeping the `.markdown` selectors would preserve exactly the thing this half exists to end — CSS reaching into generic markup a parse emitted. **It is more work and it is the work.** *Seen: no `.markdown <tag>` selector left in the three dresses, and each dress differing by what its parts draw rather than by what its stylesheet overrides.*

  **What survives the port untouched, verified by reading:** the Living Page's editing pane (it depends only on `$source`, a string, so the keystroke path is preserved), the shelf's route to `/page` (a bare `window.location.href`, zero parse dependency), and `ReadingsBar`/`Chip`/`ChipValue` (presentational; only their input numbers change source). **What moves:** the four lenses in `sheet.tsx`, the deleted `parse()` and `Entry[]`, and the classes drawer's `?raw` targets.

  **And the payoff worth naming:** post-port the four lenses split cleanly into **three presentations and one report** — move one and move two of [the three moves](../designing-inexplicable-phenomena/04-ways-of-reading.md#the-three-moves). Anatomy stops being a fourth skin and becomes the reading lens, fed by `parts()`.

## Insertion into a regular section — the point of the half

- **R8. A *regular* section holds a written part at paragraph grade and a written part at sentence grade, and answers both at their written positions.** *Doug: "It should be the case that we can now insert things at the paragraph or sentence level into a regular section, so do use that functionality."* **Regular** means plain hand-written prose — not a markdown section — so the claim is about the mechanism and not about markdown. *Seen: a plain section with a code block between two of its paragraphs and a reference inside one of its sentences, and the parts list showing the code block at paragraph grade and the reference **inside** the sentence rather than beside it.*

## The figure

- **R9. One figure kind shows a non-text interaction: it holds REFERENCES to the section's parts, and acting on one lights that part in the prose standing around it.** *Doug: "with a `$Figure` to show non-text interactions."* **DECIDED, Gabby's**, and built from shipped prior art rather than a new mechanism.

  **What it holds: references, not the parts.** The parts live in the section, which is their only home. The figure carries `section.at(i)` — reading one forward lands on the very part the prose renders, and that shared identity is what makes the figure a **corroborating sibling** under [the second specification of views](../designing-inexplicable-phenomena/04-ways-of-reading.md#two-specifications-for-every-view): acting on one lighting the other is a *check*, not a claim.

  **What acting changes: one `$Highlight`, held by the section.** No second highlighting is invented. **The section is the common renderer of both surfaces** and hands the highlight *down* to its prose and to its figure — the prose never learns from the figure, and nothing computes `parent` at render, which [would tell the truth at binding and lie on screen](../solutions/09-the-parent-that-changed-on-screen.md). It is the shape `contents.tsx` already uses, setting `this.shelf.$reading` on an explicitly-held reference.

  **And it retires a hack.** The manifold's DOM `light(id)` + `.lit` + `setTimeout` **is** the second highlighting this replaces.

  **It must not announce itself** — no button chrome, no pointer underline. The response *is* the discovery, per [the specification that cost three corrections](../solutions/03-the-link-i-built-three-times.md).

  **Answered, Cathy's — and the answer is two shipped classes rather than one.** Gabby was right to raise it. `$Highlight` is a **letter span in its parent's copy**, and the promise says so in its own title — *"a highlight is the reference a highlighter leaves — first and last letter of its parent"*, with `p.copy.slice(4, 9) === 'frame'` ([book.test.tsx:416](../../package/tests/book/book.test.tsx)). **So a highlight cannot name a figure**, because a figure contributes no letters to the copy. That is the domain being honest: you cannot run a highlighter over a plate.

  **The part being attended to is held as a [`$Bookmark`](../../package/src/book/Bookmark.tsx)** — a `$Sentence` implementing `$Reference$<T>`, which is exactly *a held reference to a place*, shipped since Sprint 47 with its grain-rounding specification. **A highlight is what a bookmark renders as when its target is prose**; a written part lights as itself, because there is no ink to mark. Two facts, two shipped classes, nothing invented.

  *Seen: the figure responds to the reader, its content is not counted among the words, and the prose numbers around it unchanged. It makes the first half's static parts list live.*

## Tests

- **R10. The mini framework is tested, and the test seam is RESOLVED — not discovered.** *Doug: "test it."* **DECIDED, Queenie's.**

  **What a green exercises today, exactly.** `npm run test` is `tsc --noEmit` then `vitest run`. The `tsc` uses the *package* tsconfig, whose `include` is `src` + `tests` only — **the app is invisible to it.** `vitest.config.ts` sets no `test.include`, so the default glob runs every `.test.tsx` under the package, **including any under `app/`**. Put those together and a test placed in the app **runs, is counted in the green, and is typechecked by neither project.**

  **This is [the stale-build specification](../solutions/05-the-suite-that-passed-against-a-stale-build.md) wearing new clothes.** There the green checked *different code*; here it checks a *weaker specification* — "runs without throwing" standing in for "typechecks and runs." Same disease: the code the number counts is not the code the checks covered.

  **The decision.** Tests co-locate under `app/src/**` as `.test.tsx` — the app tsconfig's existing `src/**/*.tsx` glob already takes them, so no glob changes. **And the gate gains the app project:** `tsc --noEmit && tsc -p app/tsconfig.json --noEmit && vitest run`. Every test in the green is then typechecked by exactly one project and run by the runner, with no hole in the intersection.

  **Said before work rather than during:** the app has never been typechecked in the gate, so turning it on will surface whatever type debt was always there. **That first red is the truth about a rung that never ran** — measure the delta and fix-or-baseline it; it is not damage this change introduced.

  *Seen: a stated count of new promises, where they live, and **whether they are typechecked** — a number reported with its scope attached, because a gate is only as strong as the smallest coverage in its pipeline.*

## Math, and the gate

- **R14. Math is placed in the model rather than standing beside it.** `$Latex` today extends `$Chemical`, so a formula is **outside writing entirely** — it cannot be a part, cannot be numbered, and is counted only by a hand-written getter reaching into `$elements` looking for instances of a class. Under the itemization, **display math is a paragraph-grade figure** and **inline math is the same pattern one level down** — a part whose content is not writing. *Seen: `formulas` read off `parts()` exactly as `words` is; a display formula standing at its own index with the prose numbered around it; and no getter anywhere scanning `$elements` for a class.*

  **The kind inline math needs is the figure pattern at word grade, and it has no name.** `$Figure` is Doug's, at paragraph level; its one-level-down sibling is **unnamed, and the population is reported rather than named**.

- **R15. The app's type gate is turned on, its debt is counted as a delta, and the defect it was hiding is fixed.** *Found while resolving [R10](#tests), and it is not a hypothetical.*

  **`cd app && tsc --noEmit` exits 0 having typechecked ZERO files.** `tsc -p app/tsconfig.json --noEmit` typechecks **46** and reports **5 errors**. Every recorded *"app `tsc` 0"* came from the first. **Four are typing debt** — `$LibraryCard` against `$IndexCard<$Referent$>`, and three `$`-backed accesses on a computed type.

  **The fifth is a live crash, driven and confirmed 2026-08-11.** [the-manifold.tsx:603](../../package/app/src/sections/the-manifold.tsx) passes bare `held` where the binding is `this.held`. Opening the manifold's cover takes the page down: **`Unexpected Application Error! ReferenceError: held is not defined`**, four console errors, React Router's boundary catching it. It has shipped since `13829ab` — **through every sprint that recorded *"driven, zero page errors… the manifold."*** *Seen: the manifold opening and reading with no page error, and the app's error count stated before and after.*

  **And a third gate is stale:** `app/verify-book.mjs` fails at its own step three, looking for `[data-book="algebra"]` when spines are labelled by card name (`The Algebra of Perspective`). A driver that cannot reach the shelf cannot have proven anything past it. *Seen: the driver completing.*

  **The lesson is filed, not absorbed.** A green whose scope was never stated is not evidence — this is [the suite that passed against a stale build](../solutions/05-the-suite-that-passed-against-a-stale-build.md) a second time, and **a symptom filed twice means the cause was never found**, which is [our own specification](../solutions/13-the-chapter-that-wrote-its-sections-twice.md).

## What is seen — this sprint's visible end

*Designed here, beside the requirements, per [the specification written out of Sprint 48](../solutions/04-the-sprint-that-planned-what-it-had-not-designed.md).*

**The claim that cannot be faked.** A hand-authored page can fake a rendered code block, a bold word, and a link. **It cannot fake a plain hand-written section whose parts list holds a code block at paragraph grade and a reference nested inside a sentence — and cannot fake clicking a part in a figure and watching the prose it came from light up.** A rendered figure is easy; a figure that is a second reading of the same object, agreeing with the first, is not.

## Out of scope, named

*Moved by Doug's "no fourth book," not dropped. Each was on the record for this half in [the first half's chapter](10-writing.md#the-second-sprint--the-specialization) and is carried forward so nothing silently falls.*

- **The fourth book.** Algebra remains a bare `$Book` with no reader, and the shelf keeps routing it to `/page`.
- **The Shelf, The Team and The Manifold specialized**, and the per-book aesthetics — *"don't reuse across books"*, *"each demo a unique aesthetic"*.
- **The Team's chapter for this sprint.**
- **Promotion of the mini framework into `src/`.** Doug: *"we can consider it for the main framework if it works."* An explicit later decision, and this sprint does not lobby for it.
- **Renaming `$Page`.** The population is reported above; the name is Doug's and [naming is not the implementer's](08-the-author.md). Nothing is renamed on our own word.
- **Types.** Still ruled a sprint of its own, still behind this arc.
- **The historical vocabulary sweep, now done for both words.** *Fail* was swept from the whole branch library and from the code on Doug's order, 2026-08-10 — **"Remove the concept of failure from all documents. You are referring to validation right?"** *Mint* was swept 2026-08-11 on his third asking — **"We aren't in the business of money. Minting is not a domain word."** — leaving only the chapters that record the ruling itself and one use of *mint* as a colour. The replacement was not chosen: [Sprint 46](03-sprint-46--the-book.md) already carried his word — *"minting is a coin word, not a book word — the word is **rendering**."* Still queued: *fail* across the team library, the personal libraries and the skills.
- **The standing direction outlives both halves:** *"Always move the whole demo app in the direction of specialization of the parts."*

## Key flows

- **F1 — An author writes markdown.** The source divides at `##` into sections, at blank lines into paragraphs, at stops into sentences; fences arrive as written parts at paragraph grade; links and emphasis arrive inside the sentences that hold them.
- **F2 — A reader meets it.** Everything draws where it stands. Nothing announces that it is special. One figure responds when acted on.
- **F3 — The model is asked.** `section.parts()` answers prose and written parts together, in order, numbered — and the anatomy lens is that answer rendered, not a second parse of the same source.

## Acceptance examples

- **AE1.** A markdown sentence's `parts()` holds `**` as a mentioned part; its `words` does not.
- **AE2.** A section holding a fence answers it from `parts()` at its written index, with the prose numbered around it.
- **AE3.** Two different fence info strings give two different figure kinds in the same section.
- **AE4.** A markdown link is a part of the sentence holding it and never of the paragraph above. *(Regression: the shipped cover's author depends on this specification.)*
- **AE5.** A **regular** hand-written section answers a paragraph-grade insert and a sentence-grade insert at their written positions.
- **AE6.** Clicking a part in the figure highlights that part in the prose; the figure's content is not counted among the section's words.
- **AE7.** `/page` renders all four lenses with no console error, and the Living Page's word count still moves on a keystroke.
- **AE8.** Both suites green against a **rebuilt** chemistry `dist` — chemistry from **635**, lib from **164** — plus the new promises, counted and stated, and their typecheck status stated with them.
- **AE9.** **`2 * 3` parses identically in a regular section and a markdown section** — same parts, same words, same count. The unpaired mark is punctuation in both.
- **AE10.** A markdown sentence's `words` counts `text` from `[text](https://x.com)` and does **not** count `https`, `x` or `com`. The URL is a target, never a word.
- **AE11.** An unterminated fence is invalid **in its own words** and does not swallow the rest of the section.
- **AE12.** No `.markdown <tag>` selector remains in the three dresses, and each dress differs by what its parts draw rather than by what its stylesheet overrides.
- **AE13.** `role` is still exactly `use | mention`. No third value was added.
- **AE14.** The gate runs `tsc -p app/tsconfig.json --noEmit` over **46** app files, and the app's pre-existing type debt is reported as a delta rather than as damage.
- **AE15.** **The manifold opens and reads with no page error.** *(A live crash on `main` today — this is a regression check on a page that is currently down.)*
- **AE16.** `formulas` is read off `parts()`, and no getter anywhere scans `$elements` for instances of a class.
- **AE17.** `app/verify-book.mjs` completes instead of failing at the shelf.
- **AE18.** R9's figure sets a **bookmark**, and a highlight appears only where the attended part is prose. No second highlighting exists; the manifold's DOM `light(id)`/`.lit`/`setTimeout` is gone.

## Owed before the plan — CLOSED 2026-08-11

*Everything this section listed has been answered, and each answer moved into the requirement it belongs to rather than staying here. Recorded closed so the plan cannot inherit a question that was settled.*

- **R10's seam** — resolved by Queenie, and resolving it uncovered [R15](#math-and-the-gate).
- **R1's four classes** — it is **three**. No markdown syntax survives to word grade.
- **R9's grain** — answered: a highlight is a letter span and cannot name a figure, so the attended part is held as a `$Bookmark` and a highlight is what that renders as over prose.
- **What markdown *is*** — a notation, a third axis ([R1a](#the-mini-framework--markdown-itemized)).
- **Whether `role` needs a third value** — no. A pointer is not writing ([R2](#the-mini-framework--markdown-itemized)).
- **The asterisk** — an unpaired inline mark is punctuation; an unclosed block is a validity question ([R12](#the-mini-framework--markdown-itemized)).
- **The markup contract** — decided rather than discovered ([R13](#the-port)).
- **Math** — placed in the model ([R14](#math-and-the-gate)).

**Two things stand open and both are Doug's, not the plan's:**

- **The sprint's title** is the implementer's and stands for correction.
- **Two names are owed and neither is invented.** The kind inline math needs — the figure pattern at word grade — and whatever the `/page` demo's four lenses are called now that they are demonstrably not pages. **Both populations are reported above; neither is named.**

## Names owed, none taken

*Per the standing specification: nothing framework-level is self-named, and every work report carries this section.*

| the thing | where its population is reported | status |
|---|---|---|
| the figure pattern at **word** grade (inline math) | [R14](#math-and-the-gate) | **unnamed, owed** |
| what `/page`'s four lenses are, given none models a page | [What each surface models](#what-each-surface-models--read-2026-08-10) | **unnamed, owed** — `$Page` keeps its concept by Doug's ruling |
| the three markdown levels | [R1](#the-mini-framework--markdown-itemized) | **proxies** — named after the level they specialize, correctable |
| what the *anatomy* lens becomes once it reads `parts()` — Phillip calls it **reading** | [the walk](#the-walk--what-doug-clicks-and-what-each-click-confirms) | **proxy, owed** |
| the facing-page lens — **compare** on the bar, *parallel text* in the code | [the centrepiece](#the-centrepiece--one-text-two-notations) | **proxy from the domain, owed.** *"Twin" was invented and is struck.* |
| the fence kind that draws a section's own reading and responds | [U13](#u13-u14--the-figure-that-responds-and-the-drawer-built-and-driven) | **proxy, owed** — its info string is `parts` |
| the word-grade kind whose content is not writing — inline math, a code span | [R14](#math-and-the-gate), [the mini framework](#the-mini-framework--u4u5-u6-u19-built-and-green) | **UNNAMED, owed.** Reached for **three times** now; `$Figure` is Doug's at paragraph level and this is its sibling one level down. |
| *notation* | [R1a](#the-mini-framework--markdown-itemized) | **Libby's**, from the domain, not invented for the code |

---

---

# Plan

*Set 2026-08-11. **WHAT, not HOW.** Unit identifiers are never renumbered; a split keeps the original number and the new unit takes the next unused one. Every unit names **a mechanism** — what runs, and when — **and a visible end**, per [the failure filed against Sprint 48](../solutions/04-the-sprint-that-planned-what-it-had-not-designed.md).*

*Doug's instruction at the plan: **"Ensure that the demonstration reflects the work so that I can confirm it in the review. Remember that code should be displayed like it is in manifold and algebra."** The demonstration is therefore designed first, below, and the units are cut from it.*

## The demonstration, designed first

**The confirmation surface is `/page`.** No new book (Doug's cut), no new route. What changes is that the surface stops being four dresses over one blob and becomes **the model, met five ways** — and each way confirms a different part of the work.

### The centrepiece — one text, two notations

**The claim this sprint makes is that a written part and a found part are the same thing.** The demonstration says it in one screen:

```
   A REGULAR SECTION                    A MARKDOWN SECTION
   plain prose, hand-written            the same text, in notation
   ─────────────────────────            ─────────────────────────
   prose…                               prose…
   <CodeBlock/>   ← WRITTEN             ```ts          ← FOUND
   prose… <Reference/> …prose           prose… [text](url) …prose
   2 * 3                                2 * 3

   parts()                              parts()
   ─────────────────────────            ─────────────────────────
   0  paragraph  (canonical)            0  paragraph  (canonical)
   1  paragraph                         1  paragraph
   2  figure     ← at its index         2  figure     ← at its index
   3  paragraph                         3  paragraph
      └ 3.4 reference (in sentence)        └ 3.4 reference (in sentence)
   4  paragraph  "2 * 3"                4  paragraph  "2 * 3"
      └ * mentioned, 2 and 3 used          └ * mentioned, 2 and 3 used
```

**The two lists agree everywhere except where a markdown pairing actually occurred.** That is [AE9](#acceptance-examples) and [R8](#insertion-into-a-regular-section--the-point-of-the-half) made visible together, and **a hand-authored page cannot fake it** — faking it means hand-writing two lists that agree, which is precisely the drift the parse exists to prevent.

### What each surface confirms

| the surface | what Doug does | what it confirms |
|---|---|---|
| **the twin** (above) | reads two parts lists | R8, R12, AE5, AE9 — written and found are the same |
| **the three dresses** — book · github · night | switches between them | R7, R13 — each differs by what its **parts draw**, with no `.markdown <tag>` selector alive |
| **the report** (anatomy, rebuilt) | reads it | R1, R2, R3, R4, R6, R14 — every part by level, index, kind and **role**, counted; markers listed as *mentioned*, words as *used*, a URL counted as neither |
| **the source pane** | types one word | R7 — the counts move, the 226→227 check that has stood since Sprint 45 |
| **the code drawer** | opens it | R11, and Doug's *"ways to view key pieces of code"* |
| **the figure** | clicks a part | R9 — the prose lights; nothing announced it was clickable |

### The walk — what Doug clicks, and what each click confirms

*Phillip's, at the level of panes. The control bar after the port: **book · github · night · reading · compare · edit · the classes · the books →**. (*reading* is what the anatomy lens becomes; *compare* is new. **Both names are owed** — see [Names owed](#names-owed-none-taken).)*

1. **book** — the document typeset. Baseline.
2. **book → github → night** — three presentations of one object, meaning constant. *The positive half of AE12.*
3. **reading** — the parts list: every part at its grade, numbered, a display formula standing as its own row. → **AE16, AE2.**
4. **compare — the centrepiece.** The twin, above. → **AE9, AE5/R8, AE1, AE10, AE4.**
5. **edit, inside compare** — type a word, the counts move (**AE7**); type a lone `*`, punctuation on both sides (**AE9**); type an unterminated fence, invalid in its own words and the section survives (**AE11**); two fences, two info strings, two kinds (**AE3**).
6. **the figure** — click a part, its prose lights, and the figure's content is not in the word count. → **AE6, AE18.** *The climax.*
7. **the classes** — the three markdown levels and `role` in the source. → **the read rung for the negatives.**
8. **the books → the manifold, open the cover** — no page error. → **AE15**, a regression on a page that crashes today.

### The three rungs — and the four things no click can prove

**Phillip's finding, and it is a hole in the review rather than in the work: the screen confirms presence, never absence.** Four claims have no click, and if the plan does not say so, Doug reaches for one that cannot exist.

| rung | how it is confirmed | what lands here |
|---|---|---|
| **the click-walk** | Doug clicks it | AE1–AE7, AE9–AE11, AE15, AE18 |
| **the read rung** | the classes drawer, plus a grep **shown in the report** | **AE12** (no `.markdown` selector), **AE13** (no third `role` value), **AE16**'s negative half (no `$elements` scan), **R5** (`src/` untouched) |
| **the reported numbers** | stated with their scope | AE8, AE14, AE17 |

**Every negative claim in this sprint is a grep, and the grep is part of the demonstration** — not a line in a work report. A green that says *"no `.markdown` selector remains"* is worth nothing without the command and its empty output beside it.

### The demo source is the script

**Phillip's second finding, and it is a unit rather than a note.** The demo's markdown source is not a sample — it is **the script the whole walk runs on**. Every syntactic case must be authored into it or the acceptance example has nothing on screen to land on: a `2 * 3`, a `**bold**`, a `` `code` ``, a `[text](https://x.com)`, **two** differently-fenced blocks, display and inline math, an unterminated fence, and the figure. See [U22](#the-gates).

### The code drawer — the sharper version of the move

**Code is displayed exactly as the manifold and the page already display it**, and the pattern is identical in both: **a `?raw` import of the real file**, a name-to-source registry, prism `Highlight` with per-line numbers, a tabbed drawer. The manifold dresses it warm on cream with `themes.github` and reaches it by a dog-ear; the page dresses it dark with `themes.nightOwl`. **The machinery is shared; the dress is the demo's own** — which is the isolation specification, and why this is a repeat of the pattern rather than a reuse of the components.

**And it goes one turn tighter than the appendix did.** The drawer's first tab is the mini framework's own `divide()` — **shown by the code-block kind that `divide()` produces.** The listing cannot drift from the file because it *is* the file, read at build.

*The pasted-source trap is already filed: The Team's appendix once held a hand-pasted copy in a constant that was **never rendered at all**, and nothing complained for two sprints.*

## Decisions

**D1 — The manifold's crash is fixed FIRST, before any unit of this sprint.** *Chosen over: scheduling it with the rest — every "driven" claim this sprint makes is worthless while a demo page is down, and the fix is one identifier.*

**D2 — The gate gains the app project before any app code is written.** *Chosen over: adding it at the end — a gate installed after the work grades the work, which is the same shape as writing the review after the refactor. [R15](#math-and-the-gate) exists because that gate was never installed at all.*

**D3 — Three markdown levels, each subclassing its regular level and overriding only `divide()` and `compose()`.** *Chosen over: a standalone parallel hierarchy — which is exactly what `$Markdown` is today and what this half exists to end.*

**D4 — A fence's kind is chosen by its info string, and adding a kind does not edit the parse.** *Chosen over: a switch inside `compose()` — which makes every new kind a change to the notation itself, and the info string is markdown's own customization point.*

**D5 — The three dresses are rewritten against specialized parts; no `.markdown <tag>` selector survives.** [R13](#the-port). *Chosen over: keeping the markup contract, which is cheaper and preserves the exact thing this half exists to end.*

**D6 — The attended part is a `$Bookmark`; a highlight is what it renders as over prose.** *Chosen over: widening `$Highlight` to name parts — which contradicts its shipped promise and its own test.*

**D7 — Math is placed in the model at two grades, and `$Latex` stops standing beside it.** *Chosen over: leaving `$Latex` a `$Chemical` — which is why `formulas` is a hand-written getter scanning `$elements` for a class today.*

**D8 — The driver is rebuilt as part of this sprint, not after it.** *Chosen over: leaving it — three of its selectors are stale, and [U13](#what-is-seen--librarypublicpackageapp) deletes the `.lit` mechanism eleven of its checks assert against. A driver that cannot run is not a gate.*

**D9 — Nothing is named that Doug has not named.** Two names are owed ([Names owed](#names-owed-none-taken)). Where a unit needs one, **it stops and reports the population** rather than proceeding on an invented word.

**D10 — The port lands behind the mini framework, never beside it.** *Chosen over: porting incrementally — `sheet.tsx` is the single consumer of `parse()`, so the whole switch is one act and the suite is never half-migrated.*

## Units

### The floor — fix what is broken before building on it

- **U23 — The driver's ENTRY, repaired — and it goes before everything.** *Mechanism: three stale landmarks make the walk unable to start — `.shelf-card` expects **2** where there are now **3** books, and both `[data-book="algebra"]` and `[data-book="manifold"]` predate spines being labelled by card name. Files: `app/verify-book.mjs`. Depends on: nothing. Realizes: AE17 (part). **Visible end:** the walk reaching the manifold at all.*
  **Queenie's dependency, and it reorders the sprint: AE15 cannot be verified until this is done.** The driver dies at the shelf **before it ever reaches the manifold** — so every past *"driven, zero page errors — the manifold"* was a green whose scope stopped short of the thing it claimed. **Fix the entry first, or U1's green is unexercised.**

- **U1 — The manifold's crash, RED FIRST.** *Mechanism: [the-manifold.tsx:603](../../package/app/src/sections/the-manifold.tsx) passes bare `held` where the binding is `this.held`; every other line in the method already says `this.held`. **The check is written before the fix and must reproduce the crash against `main`** — otherwise the green proves nothing. Files: that one. Depends on: U23. Realizes: R15, AE15. **Visible end:** the check red on `main`, then green — the manifold opening at its cover and reading with no page error, on a page that is **down right now**.*
  **It is caught at both rungs**, which is the whole R15 story: `tsc` sees an undefined name and driving sees the error boundary. It shipped for five sprints because **the type gate ran on zero files and the driver never reached the page.**

- **U2 — The gate gains the app project.** *Mechanism: `test` becomes `tsc --noEmit && tsc -p app/tsconfig.json --noEmit && vitest run`, per Queenie's ruling. Files: `package.json`. Depends on: nothing. Realizes: R10, R15. **Visible end:** the gate typechecking **46** app files where it typechecked none, with the error count stated.*

- **U3 — The app's remaining type debt, BASELINED BY IDENTITY.** *Mechanism, Queenie's ruling: the four errors U2 exposes are **carried, not fixed** — Types is a sprint of its own. But **a baseline policed by count is a place a fifth error hides**, so the gate's pass condition is **"the current app-tsc error set equals exactly these four, by identity"** — `$LibraryCard` against `$IndexCard<$Referent$>` in `06-the-decision.tsx`, and three `$`-backed accesses on a computed type in `card.tsx`. A fifth fails it. A swap — fix one, introduce one — fails it. Legitimately fixing one fails it until the baseline is updated, **and that is the point.** Files: `package.json` and the baseline record. Depends on: U2. Realizes: R15.*

  **What the gate prints, every run, with its scope attached:**
  ```
  app tsc (app/tsconfig.json): 46 files typechecked —
    4 baselined type-debt errors [$LibraryCard·$IndexCard<$Referent$>;
    3× $-backed access on computed type], 0 unexpected. PASS.
  ```
  **Never a bare `PASS`** — a bare pass on zero files is precisely what hid a live crash for five sprints. ***Visible end:** that line, printed.* **Not a licence to redesign the card:** if a fix reaches past those two files, it stops and reports.

### The mini framework — `library/.public/package/app/`

- **U4 — The three markdown levels.** *Mechanism: a markdown section, paragraph and sentence, each subclassing its regular level and overriding only `divide()` and `compose()`; `level`, `first` and `canonical` inherited. **There is no markdown word.** Files: the mini framework's own directory, under the app per [R5](#the-mini-framework--markdown-itemized). Depends on: nothing — independent of U1–U3 and can run in parallel with them. Realizes: R1, R1a. **Visible end:** a markdown source answering `parts()` at three levels, with no `Entry[]` anywhere in it.*

- **U5 — Use and mention at word grade.** *Mechanism: the markdown sentence's `divide()` yields words, spacing **and** markers as separate tokens; `compose()` makes a marker a mentioned part and content a used word. Files: with U4. Depends on: U4. Realizes: R2. **Visible end:** a markdown sentence whose `parts()` holds `**` in position and whose `words` passes over it — the same reading that passes over a comma.*

- **U6 — The fence, at paragraph grade, keyed by its info string.** *Mechanism: the markdown section's `divide()` pulls a fence out whole — blank lines inside it do not split it — and `compose()` sends it to the kind its info string names. Files: with U4. Depends on: U4. Realizes: R3, R11. **Visible end:** two different info strings giving two different kinds in one section, each standing at the index it was written at, prose counting around both.*

- **U7 — The markdown link, at sentence grade.** *Mechanism: a link composes to a reference inside the sentence that holds it. **The classes ship**: [`$Link`](../../package/src/reference/Link.tsx) is a `$Sentence` with `$url` whose `frame()` wraps its surface, and `url` already defaults to `copy` — so an external link is `copy` = the text, `$url` = the target, and nothing new is built; an internal one holds a reference the way [`$Bookmark`](../../package/src/book/Bookmark.tsx) does. Files: with U4. Depends on: U5. Realizes: R4, R11. **Visible end:** the link a part of its **sentence** and never of the paragraph above — AE4, a regression on the shipped cover — and `words` counting `text` while counting neither `https` nor `x` nor `com`.*

- **U8 — Inline math, at word grade.** *Mechanism: `$…$` inside a sentence becomes the figure pattern one level down — a part whose content is not writing. Files: with U4. Depends on: U4, U5. Realizes: R14, R11. **Visible end:** an inline formula standing as a part of its sentence, its TeX not counted among the words.*
  **A NAME IS OWED HERE** — the figure pattern at word grade. The unit **reports the population and does not name it** (D9).

- **U19 — Display math, at paragraph grade.** *Mechanism: `$$…$$` between paragraphs becomes a figure, like a fence. Files: with U6. Depends on: U6. Realizes: R14, R11. **Visible end:** a display formula standing at its own index with the prose numbered around it.*

- **U20 — `$Latex` stops standing beside the model — GUARDED.** *Mechanism: its base changes from `$Chemical` to writing, and every `instanceof $Latex` and `$elements.filter(… instanceof $Latex)` in the demo is swept with it; `formulas` becomes a reading off `parts()`. Files: [`page/latex.tsx`](../../package/app/src/sections/page/latex.tsx), `page/markdown.tsx`, `page/sheet.tsx`. Depends on: U8, U19. Realizes: R14. **Visible end:** no getter anywhere scanning `$elements` for instances of a class — AE16.*
  **DO NOT DELETE `$Latex.inline`.** It looks like dead weight and it is **chemistry's inline-grouping marker** — deleting it is [a defect we have already filed](../solutions/01-the-formulas-that-rendered-empty.md), where removing it made two formulas block-level same-type siblings and tripped the keys warning. *Cathy caught the same trap independently while sizing this, which is the second time this member has tried to look removable.*

- **U9 — The unpaired mark.** *Mechanism: where `divide()` finds no partner for a mark, the mark falls through as a run with no letters and `compose()` places it as punctuation — the path that already exists. An unterminated **block** is a different question and is answered by the kind's own `valid()`. Files: with U5, U6. Depends on: U5, U6. Realizes: R12. **Visible end:** `2 * 3` giving the same parts, words and count in a regular section and a markdown one — AE9 — and an unterminated fence invalid in its own words rather than swallowing the rest of the section.*

### The port — `library/.public/package/app/src/sections/page/`

- **U10 — The port, in one act.** *Mechanism: `sheet.tsx` mounts the mini framework instead of `<Markdown>`; the anatomy lens reads `parts()` instead of calling `parse()` a second time; `parse()` and the `Entry[]` union are **deleted**, nothing depending on them. Files: `page/markdown.tsx`, `page/sheet.tsx`. Depends on: U4–U9. Realizes: R6. **Visible end:** title, paragraphs, words and formulas read off the model, and the second parse gone — [the defect filed one level down](../solutions/13-the-chapter-that-wrote-its-sections-twice.md), closed one level up.*

- **U11 — The three dresses, rewritten against parts.** *Mechanism, Gabby's: every `.markdown <tag>` selector dies; each specialized part draws its own face, and **the dress is a document-level choice handed DOWN to the parts** — never reached up to, the same specification as U13. The three become **behaviours rather than selectors**: **Book** is letterpress (centred serif heading, justified body, a break drawing its own rule); **Github** is a README (headings drawing their own hairline rule as part of themselves, system sans, a fence wearing its filename tab); **Night** is Book's tonal transposition — **the same faces, a different palette.** Files: `page/page.tsx`, `page/sheet.tsx`. Depends on: U10. Realizes: R13, R7. **Visible end:** three dresses still recognisably themselves with no `.markdown <tag>` selector left, and the Living Page's counts still moving on a keystroke.*
  **The exemplar, and the tell the design is right:** the drop cap is `p:first-of-type::first-letter` today — CSS reaching for *"the first paragraph"*. It becomes **a part that knows it is the opening.** And Book and Night sharing faces while differing only in palette is what proves the part is the invariant and the dress is palette-plus-face.
  *Whether the dress reaches the parts through the theme or through a perspective is a HOW, and it is Cathy's with the code open.*

### What is seen — `library/.public/package/app/`

- **U12 — The twin: one text, two notations.** *Mechanism: the same text mounted twice — once as a regular hand-written section carrying **written** inserts, once as a markdown section carrying the **found** equivalents — with both parts lists beside them. Files: `app/src/sections/`. Depends on: U6, U7, U9, U10. Realizes: R8, and AE5 and AE9 visibly. **Visible end: two parts lists that agree except where a pairing occurred** — the sprint's thesis in one screen, and the thing a hand-authored page cannot fake.*

- **U13 — The figure that responds.** *Mechanism: the figure holds `section.at(i)` references; clicking one sets the section's held `$Bookmark`; the section — the common renderer of both surfaces — hands it down, so nothing computes `parent` at render. Files: the mini framework and `app/src/sections/`. Depends on: U6, U12. Realizes: R9, AE18. **Visible end:** clicking a part lights it in the prose, with nothing announcing the figure was clickable — and **the manifold's DOM `light(id)`/`.lit`/`setTimeout` deleted**, which is the second highlighting this replaces.*
  **This unit breaks eleven driver checks** that assert `classList.contains('lit')`. That is U15's, and it is named here so it is not a surprise.

- **U14 — The code drawer, in the page's own dress.** *Mechanism: the shipped pattern — `?raw` import of the real file, a name-to-source registry, prism with per-line numbers, a tabbed drawer — **repeated** for this demo rather than reused from the manifold, per the isolation specification. The registry grows to the mini framework's own classes. Files: `app/src/sections/`. Depends on: U6, U10. Realizes: R11, and Doug's *"ways to view key pieces of code."***

  **The sharp move, Gabby's:** the demo sheet carries a fenced ` ```tsx ` block that renders through the fence kind, **and the drawer below shows that kind's own source.** The thing that draws code, drawn as code by itself — a corroborating pair for code, the same shape as R9.

  **And a page-native sharpening: the drawer's tab token and the fence's own label are the same word** — the info string. Self-reference in the page's own monospace idiom, with no new chrome.

  **Deliberately unlike the manifold.** The manifold flips a **dog-ear** into *the model, unadorned* — a codex gesture, light prism on paper. **The page is an inspector, not a codex:** a drawer beneath the sheet, code as a specimen under glass, with *reading* as its x-ray sibling. Same machinery, different gesture. *Visible end: a listing whose text cannot drift from the file it shows, because it is read at build.*

### The gates

- **U15 — The driver, rebuilt and made to fail LEGIBLY.** *Mechanism, Adam's — and **"the driver completes" is too weak a bar**, so AE17 is strengthened to **completes, with checkpoint accounting and action-binding**. The eleven `.lit` checks are rewritten against whatever U13 leaves, and new checks land for the twin, the counts moving, and the figure lighting. Files: `app/verify-book.mjs`, `app/verify-demo.mjs`. Depends on: U12, U13, U23. Realizes: R15, AE17.*

  **Two failure species live in our drivers today, and the cures are different:**
  - **The reporter** — `verify-demo.mjs` logs and **exits 0 always**. It cannot fail; it needs a human to eyeball it. *Cure: every observation becomes an assertion with a non-zero exit.*
  - **The unreached-check driver** — `verify-book.mjs` has real assertions and three holes: **actions are not asserted** (a chip whose label changed no-ops silently and the next check passes against stale state), **checks test states rather than transitions** (they pass whether or not the click fired), and **a mid-walk throw is illegible** (a bare stack trace, no checkpoint, no reason — which is how a dead selector cost a hand diagnosis). *Cures: a click that finds nothing **fails**; assertions bind to the **change**, not-lit → lit; and **checkpoint accounting** — declare N, catch throws, and report* `stalled at checkpoint 3 of 44: shelf spine not found — the entry point moved`. *And derive expectations from the source, never a magic number: `.shelf-card === 2` drifted wrong in silence.*

  **The discipline, and it is the unit's real deliverable: watch the driver go red before trusting its green.** Break the spine, static-print a count, unwire the figure — confirm each fails **with a reason**. *Visible end: those three deliberate breakages, each producing a named failure, reported with the run.* **A driver nobody has watched fail is a relay wearing infrastructure's clothes.**

  **The honest finding to carry:** ours did not silently pass — it throws and exits non-zero. **It simply stopped being run**, and *"driven"* came to mean something ad-hoc. **A gate nobody runs is worse than one that lies, because it looks maintained.** *Same disease as the typecheck: a gate that passes by not running, and a driver that passes by not reaching.*

- **U16 — The promises.** *Mechanism: tests co-locate under `app/src/**` as `.test.tsx`, taken by the app tsconfig's existing glob and run by the package's vitest. Files: with each unit. Depends on: U2 and the unit each covers. Realizes: R10. **Visible end:** a stated count, where they live, **and their typecheck status stated with them** — a number reported with its scope attached.*

- **U22 — The demo source is the SCRIPT.** *Mechanism, Phillip's — and it is a unit, not a note. The demo's markdown source is not a sample; it is what the whole walk runs on, so **every syntactic case is authored into it deliberately** or an acceptance example has nothing on screen to land on: a `2 * 3`, a `**bold**`, a `` `code` ``, a `[text](https://x.com)`, **two** differently-fenced blocks, display and inline math, an unterminated fence, and the figure. Files: the demo source. Depends on: U4–U9. Realizes: the walk. **Visible end:** every step of [the walk](#the-walk--what-doug-clicks-and-what-each-click-confirms) having something to point at — checked by walking it, not by intending to.*

- **U24 — The substrate probe: R8 before any markdown.** *Mechanism, Cathy's — a plain hand-written `$Section` holding a written figure at paragraph grade **and a written reference inside a sentence**, both answered at their written positions, **built before a line of markdown**. Files: a test. Depends on: nothing. Realizes: R8 (the mechanism half). **Visible end:** the parts list showing both at their written positions.*
  **And it is a probe as much as a unit.** An inline reference is **not** a non-inline written part, so it is not obvious that the shipped `parts()` surfaces it as a part of its sentence at all. **If it does not, that surfaces here — before U7 is built on the assumption — and it sizes the link work.** *This is the cheapest place in the sprint for R8 to turn out to be harder than it reads.*

- **U17 — The records move with the code.** *Files: this chapter, [Solutions](../solutions/.cover.md). Depends on: everything.*

### Filed, not built

- **U18 — Two defects filed in Solutions**, indexed by the symptom as observed: **the green that exercised nothing** (an app typecheck compiling zero files, hiding a live crash for five sprints, alongside a driver that stopped being run) and **the manifold's undefined binding**. *Realizes: R15. **Visible end:** two chapters findable by the symptom a reader arrives holding.*

## Test scenarios

*Compacted at compounding — The sprint's test scenarios stood here. **They are now the suite** — a scenario that survived is a promise, and a promise is read where it runs, not where it was planned.*

## Origin tracing — both directions

| requirement | lands in |
|---|---|
| R1, R1a | U4 |
| R2 | U5 |
| R3 | U6 |
| R4 | U7 |
| R5 | **held** — a constraint on U4's location, not a unit |
| R6 | U10 |
| R7 | U11 |
| R8 | **U24** (the substrate, first), U12 (seen) |
| R9 | U13 |
| R10 | U2, U16 |
| R11 | U6, U7, U8, U19, U14 |
| R12 | U9 |
| R13 | U11 |
| R14 | **U8, U19, U20** — one requirement, three units, sized by Cathy |
| R15 | **U23** (first), U1, U2, U3, U15, U18 |
| A1–A3 | F1–F3, and through them the units above |
| AE1–AE18 | named in the scenarios above |
| the walk itself | **U22** — the script every step lands on |

**And back:** every unit names a mechanism and a visible end. **U8 is the only unit carrying an owed name, and it is marked so rather than allowed to invent one.** No unit here is design owed — the brainstorm closed the last of those.

**Three units exist because a teammate's thinking found them, and none was in the plan an hour ago:** **U22** (Phillip — the demo source is the script, not a sample), **U23** (Queenie — the driver's entry blocks AE15's observability), **U24** (Cathy — R8's substrate is also the probe that sizes the link). **U19 and U20** exist because Cathy sized math at three units rather than one.

## Order

*Compacted at compounding — The build order stood here, and the sprint ran it.*

## The work runs in three tracks, in parallel — and the boundary is the FILES

**Doug, 2026-08-11: *"I want this chunk of work done this sprint, with all issues resolved"* and *"Why not try to parallelize the work too. We have think-async."* So nothing is cut, and the twenty-three units run as three concurrent tracks.**

**D11 — the tracks are file-disjoint, and the disjointness is the safety mechanism.** Teammates thinking asynchronously write to **one working copy**; there is no worktree isolation in the dispatch tool. So a track owns a file set, and **no file appears in two tracks before the join.** *Chosen over: parallelising by unit — which reads as faster and puts two writers in `sheet.tsx`.*

| track | who | units | files it owns, exclusively |
|---|---|---|---|
| **A — the floor and the gates** | **Adam**, with **Queenie** | U23 → U1 → U2 → U3, later U15, U16 | `app/verify-book.mjs`, `app/verify-demo.mjs`, `app/src/sections/the-manifold.tsx`, `package.json`, `app/src/sections/book/library/the-team/card.tsx`, `…/the-team/06-the-decision.tsx` |
| **B — the mini framework** | **Cathy**, with **Libby** on the link | U24 → U4/U5 → **U6 ∥ U7** → U8 → U19 → U20 → U9 | the mini framework's own directory under `app/src/`, and its co-located tests |
| **C — the surfaces** | **Phillip** and **Gabby** | U22 first, then the part faces for U11 and the drawer machinery for U14 | `app/src/sections/page/page.tsx`, the demo source, the new face components |

**Why C is not blocked on B, which is the non-obvious part.** U22 is **text** — the script can be authored before anything parses it, and Phillip's own finding says writing it early de-risks every step that lands on it. Gabby's part faces are **drawing components** that do not need the markdown levels to exist. The drawer's machinery works against files that already exist; only its registry grows later. **So all three tracks start at once.**

### The join, and it is serial

> **U10** (the port — *one act, the only red moment*) **→ U11** (wire the faces) **→ U12** (the twin) **→ U13** (the figure) **→ U14** (wire the drawer) **→ U15** (the driver, rebuilt) **→ U16 → U17 → U18**

**U10 is the barrier.** Track B must be complete and Track A's gate must be green before it runs, because it is the one moment the suite can go red and nobody should be diagnosing it against a gate that compiles nothing.

**U13 before U15**, because U13 deletes what eleven of the driver's checks assert against.

### Checkpoints — where the tracks report

1. **After A's U3 and B's U24** — the floor is sound and R8's substrate is proven or its surprise is named. *This is the earliest point the sprint can be honestly re-scoped.*
2. **After B's U9** — the mini framework is whole, tested in isolation, and **the old demo is still untouched and green.**
3. **After the join's U10** — the only red moment has passed.
4. **After U13** — the demonstration's climax stands.
5. **After U15** — every gate has been **watched going red** before its green was trusted.

## Risks

*Compacted at compounding — The pre-flight risk list stood here. **A risk that fired is in the record below**, with what it cost; the rest did not.*

## Self-check

*Compacted at compounding — The plan's self-check stood here, and it passed before work started.*

# The session record — batch by batch

## The floor, laid here before anything was parallelised — DONE 2026-08-11

*Doug: **"do preliminary work here before parallelizing to ensure things are safe."** Which corrected the plan: **Track A cannot run beside B and C, because it IS the gate they verify against.** A gate landing mid-sprint makes every green reported before it unexercised.*

**Baseline, recorded first so every later number is a delta:** `bc9c57e` · chemistry **635/635** (59 files) · lib **164/164** (15 files) · lib `tsc` **0** · app `tsc` **5**.

### U23 — the driver's entry, and its legibility. DONE.

**Built:** landmarks resolved **by card name** and reported when missing (`no spine named "X" — the shelf carries [...]. The entry point moved.`); `.shelf-card === 2` replaced by the shelf's own membership; **checkpoint accounting** — a mid-walk throw now prints every check reached and `STALLED at checkpoint N`, where before it printed a bare stack trace.

**Found on the way — four more stale checks, none of them regressions.** `'open the book'` became `'read the book →'`; `'stitched from folds'` moved from the cover to the synopsis; **the `← the cover` chip no longer exists** — the running head closes the book now; and `← the shelf` is `← The Shelf`, read off the subject's card. *Each was repaired to read from the page rather than from a transcribed literal, which is how they went stale.*

### U1 — the manifold's crash. DONE, RED FIRST.

**The check was written before the fix and it went red against `main`**, reproducing `ReferenceError: held is not defined` and the error boundary — bound to the **transition** (errors before the click against errors after) so it cannot pass by nothing running. Then one identifier: `held` → `this.held`. **43 of 45 manifold checks went from failing to passing in that one line.**

### A chemistry defect, found and fixed at the layer Doug named

**The last failing check was a keys warning**, and the first fix was at the wrong layer. **Doug: *"We shouldn't have to specify keys often since the bond constructor cares about preserving order."*** He was right, and the code says so — [`chemical.ts:448`](../../../chemistry/package/src/abstraction/chemical.ts) assigns `key: chemical[$symbol$]` to every child a bond interprets, so **the warning was asking authors for what the framework already supplies.**

**And it does have a real job, which is why it was narrowed rather than deleted:** [`identity.test.tsx:409`](../../../chemistry/package/tests/react/identity.test.tsx) proves keys matter for a `.map()` inside `view()` — where the *author* builds the list. The warning fired from the path that handles **both**. One line: it is not raised for bond children. *Four keys added to the demo's cards were reverted — by Doug's ruling they were never needed.*

### U2, U3 — the gate, and the baseline policed by identity. DONE.

**Built:** `app/typecheck.mjs`, and `npm run test` is now `tsc --noEmit && node app/typecheck.mjs && vitest run`. The four known errors are baselined **by identity**, so a fifth fails, a swap fails, and fixing one fails until the baseline moves.

**It prints its scope, every run:**
```
app tsc (app/tsconfig.json): 59 files typechecked —
  4/4 baselined type-debt errors [...], 0 unexpected. PASS.
```
*The plan said 46; that was the count under `sections/`. The gate reports **59** — every app file. The number is stated with its scope, which was the whole point.*

**And it was watched going red**, per Adam's discipline: a deliberate `const deliberate: number = "not a number"` produced `1 unexpected — src/sections/the-books.tsx TS2322 — FAIL`, exit 1. Restored, PASS.

### Verified at the close of the floor — fresh runs

Chemistry **635/635**, `tsc` **0**, **`dist` rebuilt** before the lib suite per [the filed specification](../solutions/05-the-suite-that-passed-against-a-stale-build.md) · lib **164/164**, `tsc` **0** · app gate **PASS**, 4 baselined, 0 unexpected · **driver 48 checkpoints, zero failures, exit 0.**

**That last number is the one that matters: it is the first honest green this walk has had in five sprints.**

## U24 — the substrate probe. RUN, and it split.

*Cathy's probe, run 2026-08-11 in the main context and deleted afterwards. Its inputs and outputs are here, per [the filed rule](#wrong-turns-already-taken--do-not-repeat). **It is the reason U24 was ordered first: it resizes U7 before U7 is built.***

**A plain hand-written section — `Title` · prose · `<Plate/>` · prose with a `<Link/>` written inside a sentence — answers this:**

```
SECTION ELEMENTS: $Title | $Html$ | $Plate | $Html$ | $Link | $Html$
  0 paragraph :: "Probe"
  1 paragraph :: "Before the figure. It has two sentences."
  2 paragraph FIGURE :: "the plate"
  3 paragraph :: "After it. This sentence holds a link inside it."
      2 $Sentence link=false :: "This sentence holds a link inside it."

LINK IS A SENTENCE-GRADE PART?     false
FIGURE IS A PARAGRAPH-GRADE PART?  true
```

**R8's paragraph-grade half WORKS.** The figure stands at its written index and the prose numbers around it — 0, 1, **2**, 3.

**R8's sentence-grade half DOES NOT.** The link's *text* survives, flattened into the sentence; the `$Link` itself does not exist to the model. `parts()` recognises a written part by *level below* **and** *not inline* — a link is sentence grade and inline, so it fails both tests and is flattened by `text()`.

### The mechanism, found and cited

**[`gathered()` unwraps a block into its `$elements`](../../package/src/utilities/html.ts).** Chemistry **did** group the inline link into a block with its surrounding text; `gathered()` then flattened that block, spilling the link and its neighbouring runs up to **section level as siblings** — which is exactly what the elements line above shows.

**So the flatten that made block-level parts work is the same flatten that loses inline ones.** It is [the epiphenomenal decision chapter 10 recorded](10-writing.md#epiphenomenal-decisions--the-unruled-ones-and-what-they-say-about-the-design) — *"in code it was better to flatten once at the bond, so there is one place the parse reads at every grade"* — and this is its cost, arriving one sprint later. **The signal that decision was watching for has now fired.**

### And then Doug dissolved it — the probe was measuring the wrong thing

*This section first recorded the above as a blocker on [R8](#insertion-into-a-regular-section--the-point-of-the-half) and [R4](#the-mini-framework--markdown-itemized), and proposed changing the parse at every level to fix it. **That was a category error, and the ruling that dissolves it was already written down in the first half.***

**Doug: *"Why are you rendering the parsed information? No one said the parsed version has to be viewed. It's there for the view, but the current block can be visible without using the parts."*** Which is [R4](10-writing.md#the-parse) verbatim, from the mechanism half: *"The parse is post-hoc and pure… the standard view renders the block, which is why a written part already renders today and why part identity is not a rendering concern."*

**The probe asked whether the link was a PART. It never asked whether the link was VISIBLE.** Those are different questions, and only the second is what *inserting something into a piece of prose* means.

**Checked rather than argued — four promises, all green** ([tests/writing/written.test.tsx](../../package/tests/writing/written.test.tsx)):

```
the plate is drawn where it was written                          PASS
the written LINK is drawn where it was written                   PASS   <a href="/somewhere">a written link</a>
the prose either side of both is still there, in order           PASS
the plate is a part of the section, at its written position      PASS
```

**So R8 holds at both levels and there is nothing to fix.** A figure written between paragraphs and a link written inside a sentence both **draw where they stand**, because the block carries them — which is the mechanism half working exactly as it was specified to. The link is absent from `parts()`, and that is not a defect: **the parse is a reading for views that want structure, not the thing that puts writing on a page.**

**The lesson, and it is the expensive kind.** *A requirement was invented — "the model must see it" — and then measured, and the measurement failed, and the failure was reported as a blocker on the sprint.* The specification that dissolved it was in the previous chapter, in Doug's own words, and had been read this session. **Reading a specification is not consulting it** — which is [already filed](../solutions/03-the-link-i-built-three-times.md), in exactly these terms, and is now filed twice.

## The mini framework — U4/U5, U6, U19. BUILT AND GREEN.

*Built in the main context after the dispatched tracks were killed by a process exit. **Two of five tracks had already written real work before the kill** — Adam's action-binding in both drivers, Phillip's script, Gabby's faces and drawer — and all of it is in and green. Cathy's track produced nothing, so it was taken here.*

**Built**, under `app/src/markdown/` per [R5](#the-mini-framework--markdown-itemized) — **three levels, each declaring only `divide()` and `compose()`**:

- **the sentence** — composite tokens pulled out **whole before word-splitting**, so a link's target never reaches the word parse; then the same fork a plain sentence already makes, letters to a word and a mark to a mention.
- **the paragraph** — the stop-splitter inherited, with one wrinkle: **a stop inside a code span or a link's target is not the end of a sentence.**
- **the section** — a fence pulled out **whole**, so a blank line inside it does not divide it, and **the info string chooses the kind.**

**Verified:** **20/20** across the three levels · the whole gate **187 tests** from a **164** baseline (**+23 promises**), app `tsc` **67 files, 0 unexpected**, lib `tsc` **0**.

### Two findings the code made, neither of them a slip

**1. Inline code is CONTENT THAT IS NOT WRITING — and the model said so before we did.** A code span composed to a `$Word` and the suite went red: `$Word.valid()` demands letters, and `parts()` has parentheses. **That is not a bug to route around; it is the specification being right.** A code span is source, a formula is TeX, and neither is prose — so both are **the figure pattern one level down**, present as parts and absent from the words. *This is the second time this sprint the word-grade figure has been reached for, and it is still unnamed.*

**2. AE9 as written is not achievable, and the honest form is stronger.** `2 * 3` does **not** produce identical *parts* in both notations — **markdown's divide is finer**, isolating the asterisk as a candidate mark where plain prose keeps `' * '` as one run. Eleven parts against nine.

**But every part markdown adds is a MENTION**, so `words` and `copy` are identical. So the claim is not *the parses are equal* but ***the readings are equal, and every extra part is a mention*** — which is what agreement between two notations actually means, and it is checkable in exactly that form. **Both are now promises.** *AE9 stands corrected in this chapter rather than quietly satisfied by a weaker test.*

## The join — U10, U11, U12. BUILT AND DRIVEN.

**U10, the port.** The page reads the model. `page/markdown.tsx` is **deleted** — `parse()` and the `Entry[]` union with it — and its two `?raw` readers now show the mini framework, which is what the drawer should have been showing all along. `title`, `paragraphs`, `words` and `formulas` are readings. **There is one parse in the demo where there were two.**

**U11, the dresses.** **29 `.markdown` rule blocks removed; the file mentions the word zero times.** Each part is drawn by the face its kind names, and the faces come from the dress — handed **down**, never reached up for.

**Two things the drive found, both real:**

- **The faces STYLE; nothing typeset.** `DisplayMath` put its children in a styled box and katex never ran, so formulas rendered as raw TeX. The dress decides the look; **drawing a formula means running katex over its content**, which is the port's job and not the face's.
- **Inline math routed through the DISPLAY face put a `<div>` inside a `<p>`** — React reported it as a nesting error that no human had noticed. Inline math draws inline.

**Verified, driven:** four lenses switch with **zero console errors**, katex **4 nodes**, a fence renders, an anchor renders, and the Living Page's count moves **410 → 415 on a real keystroke.**

## U12 — the twin, and it caught its own author

*The centrepiece: one text, two notations, both parts lists, and a line at the bottom that states whether the readings agree.*

**On its first drive it said: *"The readings DISAGREE — 27 words against 21."*** And it was right. The written side's plate carried a **caption**, which is writing and is counted; the markdown side's fence carried **content**, which is not writing and is not. **Exactly six words apart — the caption.** The two sides were not the same text.

**That is the corroborating view doing precisely what it is for.** A hand-authored page would have shown two lists and let the mismatch pass; this one measured itself and reported the defect in its own body, before anyone read it.

**Corrected, and driven again:** ***"The readings agree: 21 words on both sides. The part counts differ by 0."*** Four parts each, a figure at the same position on both sides, and one honest difference — **the markdown side surfaces `3.2 reference a link` as a part; the written side draws the same link from its block.** Which is [what U24 found](#u24--the-substrate-probe-run-and-it-split), now standing on screen as a difference rather than a blocker.

**Pinned as promises** so the screen cannot drift from the claim, each using **the other side as its oracle** — no expectation is hand-written.

**The gate, fresh:** **195 tests** from a **164** baseline · app `tsc` **69 files, 0 unexpected** · lib `tsc` **0** · zero console errors on the drive.

## U13, U14 — the figure that responds, and the drawer. BUILT AND DRIVEN.

**U13.** A fence whose info string is **`parts`** draws not text but the section's own reading — **the same specialization hook as a code listing, a different word after the fence.** It holds references to the parts; acting on one lights the prose it names. **Driven:** rows change on click, **six prose nodes take the glow**, and nothing announces itself — `cursor: auto`, no underline, no border. The response *is* the discovery.

**Two defects on the way, both the same shape as ones already filed here.**

1. **`Reading` rebuilt the model every render**, so the section a reader acted on was never the section that drew. **Two populations of one object** — [filed twice already](../solutions/13-the-chapter-that-wrote-its-sections-twice.md) — arriving a level up. Fixed by keying the sections to the source.
2. **State on the section did not re-render**, because the drawing component is a plain function and its reads are not tracked. **The chemical whose view runs is the sheet**, so what is attended lives there and is handed **down** to both surfaces. Neither computes.

**U14.** The page's drawer is Gabby's, in the idiom the page already wears, showing the **mini framework's real source** by `?raw`. The inline copy in `the-page.tsx` is gone.

**Verified:** gate **195 tests**, app `tsc` **69 files, 0 unexpected**, lib `tsc` **0** · **driver 48 checkpoints, zero failures** · page driven with **zero console errors**.

## What the parse is FOR — Doug's rulings, 2026-08-11

*Given while the work ran, and they settle a question this sprint kept tripping over. Recorded verbatim because they govern the sprints after this one.*

> **"I want you to think about the parsed content as a sort of validation that provides metadata. At the step where we build the cards, which is part of the build, we might find a way to run a version of the app and request the parts, testing whether everything is valid. For the running app, it's more of a way to understand what is there on a meta-level."**

> **"We still want added words, sentences and paragraphs etc… with special types to be in the parse because they may have a non-obvious way of working, and we should be using their copy field when pulling text out of them. But we do not have to call parts in view. It is there optionally."**

> **"Ultimately, you can imagine that we want to validate what is in a book is valid English in first-person perspective. We are nowhere near that yet, but the framework contains the right shape."**

**What they settle.** The parse is **validation and metadata**, not a rendering path. **A written part with a special type belongs in the parse** — it may work in a non-obvious way — and **text is pulled out of it through its `copy`**, which is what [`text()`](../../package/src/utilities/html.ts) already does. **`parts()` in a view is optional**, which is exactly what the reading lens and the twin are: readings *about* the writing, never the thing that puts it on a page.

**And it names where this goes.** At **build**, the card compilation could run the app and ask for the parts — **validating a book by asking it what it holds.** In the running app it is a meta-level view. The far end is validating that a book is **valid English in the first person** — nowhere near, and **the shape is already the right one**, which is why the parse must keep specialized parts rather than flatten them away.

*This corrects the reading that produced [the U24 alarm](#u24--the-substrate-probe-run-and-it-split): the parse not surfacing a written inline reference is a gap in **metadata**, not a failure of insertion — and it is not licence to rewrite the parse.*

## Mentioning propagates — the one change to `src/` this sprint

*Doug asked the question directly: **"Are you talking about a mentioned word? How do we want to handle that? Does it create mentioned letters? Or no letters? It's like a thing in quotes… give a principled solution in the code that is complete."***

**The rule was *a mention is not parsed*. It is now *mentioning propagates*: a mention IS parsed, and everything beneath it is mentioned too.**

**Why, and his own image decides it.** *A thing in quotes* — quoting a word does not dissolve its letters; `"cat"` still has a c, an a and a t, all inside the quotation. It is **`parenthetical` one level down**: present in the writing, absent from the reading, and its own parts still its own.

**And it closes a hole in the floor.** The reference system's floor is *a letter is its own reference*, so every grapheme in the writing must be addressable. Stopping the parse at a mention made **a comma unpointable**.

**His criterion holds and holds better:** `words` still filters to the used ones, so selecting the words that are words — and their letters — is unchanged. The mentioned ones can now be asked too, which costs nothing.

**What it cost: one promise, and it got STRONGER.** [`composible.test.tsx`](../../package/tests/utilities/composible.test.tsx) followed every part down to its letters and expected `'theframeturns'` — the spaces contributed nothing. It now returns **`'the frame turns'`, which is the sentence's own `copy`.** *Following the parts to the floor gives the writing back.* That is a better thing to promise than the mashed reading, and it is now asserted against `s.copy` rather than a literal.

**Two rulings that came with it:**

- **Framework comments stay minimal.** *"Comments go stale and you have a tendency to put weird comments on code."* The nine-line note this change first carried is one line now. **Documentation lives in the tests, this branch library, and the demo's own code** — *"you have plenty of documentation surface areas."*
- **And a good one for the drawer:** the demo's comments explain the demo to a reader of the repository, not to a reader of the page — so **strip them when the drawer displays the source.** *Recorded; not built.*

## A word I invented, and the one the domain already had

**Doug: *"I have no clue what a twin is. That is not terminology. You invented that. The semantics of books does not have the semantics of families."*** Correct on both counts, and it is [the naming specification](#names-owed-none-taken) being broken rather than a stylistic slip.

**What the thing is:** two settings of **one** text, side by side, so the readings can be compared. **Scholarship has had that book for centuries — a parallel text, a facing-page edition.** The word is the domain's, not mine; it is in the code as a **proxy** and flagged here.

*It is not `$$Sentence` — that is the sentence's reference form, and Doug's guess at what I might have meant is itself evidence the word was unreadable.*

## The review's round, and the six gaps it found — ALL CLOSED

*The walk was run before this and the number was **11 of 16 satisfied, 4 partial, 1 not.** That number is kept here rather than overwritten, because a review that reports only its final figure is not a review.*

**The driver, watched going red.** Three deliberate breakages, three named failures, and the walk restored:

```
STALLED at checkpoint 5:  no spine named "The Manifld" — the shelf carries [...]. The entry point moved.
STALLED at checkpoint 15: chip "onward →" not found — the control moved or the page did not settle
STALLED at checkpoint 32: contents line "04-the-cart.tsx" not found — the book of code changed its pages
restored → 48 checkpoints reached
```

**The second highlighting is retired**, on Doug's ruling. The manifold's `classList.add('lit')` and its timer are **gone**; attention is state the manifold holds and React renders, so both surfaces light the same way. **All 48 checkpoints still pass** — including the eleven that assert the lit class, because the class is now rendered rather than mutated on. *Scrolling stays imperative, because scrolling is not a way of saying what is attended.*

**Everything ordinary a person writes in markdown now reads** — bulleted and numbered lists, block quotes, images, thematic breaks, strikethrough. **A quoted paragraph and a list item are PARAGRAPHS that know what bounded them**; the bullet and the angle are kept on the part as syntax rather than thrown away. An image and a rule are figures. **Every one is a fork in a `divide` or a `compose` that already existed** — which is the whole of what R11 claimed, now demonstrated rather than asserted. *And none of it reaches `src/`: the framework has no opinion about bullets.*

**And the composition Doug asked to see is already there, counted on screen:** **29 prism-coloured tokens** inside a markdown fence, **4 katex nodes**, and a live parts figure — **three rendering frameworks selected by the word after the fence**, inside one notation. Adding a fourth is one branch.

**The register row is written** ([The Symbolizing Dyad and the Register](../the-semantics-of-books/08-the-symbolizing-dyad-and-the-register.md#notation--a-third-axis-and-it-is-one-row-rather-than-a-family)) — one row, the axis, not a class per notation per level.

**Two Solutions chapters filed:** [the green that exercised nothing](../solutions/14-the-green-that-exercised-nothing.md) and [the requirement I invented, and then failed](../solutions/15-the-requirement-i-invented-and-then-failed.md).

### R4 — routed, not cut, and chapter zero already held its home

**The link's three kinds — points inside the library, points out of it, points nowhere — are NOT built.** The decision was Doug's to hand back and it was made by reading rather than choosing: **[chapter zero already carries it](00-planning.md)** as *"still open, schedulable in any sprint: in-prose references through the reader"*, and it names `[text](#3.2)` — a markdown link with an internal target — **in those words**. It also says that one is **a design session, not a pick.**

**So it is not this sprint's to build, and it is not homeless.** *The contrast is the reason the ordinary marks WERE built: they have no home in any future sprint — not Types, not Dialogue, not the Public Build, not Card/Subject/Library/Compilation. If not here, nowhere.*

### The number, re-walked

**15 of 16 satisfied. 1 routed to an existing home with the citation.** AE18 closed. U18 closed.

**Verified, every gate, fresh:** chemistry **635/635**, `tsc` **0** · lib **203 tests** (from **164**), `tsc` **0** · app **70 files typechecked, 4 baselined, 0 unexpected** · **driver 48 checkpoints, zero failures** · page driven with **zero console errors**.

## Compounded

*Distributed while the context was fresh, one lesson at a time, each into the room whose subject it already is.*

**Two defects, filed in [Solutions](../solutions/.cover.md):** [the green that exercised nothing](../solutions/14-the-green-that-exercised-nothing.md) — two gates that passed by not running and by not reaching, hiding a live crash for five sprints — and [the requirement I invented, and then failed](../solutions/15-the-requirement-i-invented-and-then-failed.md), where a made-up criterion nearly bought a rewrite of the parse.

**One specification corrected where it lives.** [The Levels of Writing](../the-semantics-of-books/15-the-levels-of-writing.md) said *"a mention is not parsed."* **It was a settled account carrying a specification the code no longer holds**, which is the most expensive kind of stale — a reader would have believed it. It now says *mentioning propagates*, cites the defining line, and keeps the old rule visible with the reason it was wrong.

**One row added to the register.** [Notation as a third axis](../the-semantics-of-books/08-the-symbolizing-dyad-and-the-register.md#notation--a-third-axis-and-it-is-one-row-rather-than-a-family) — one row, not a class per notation per level.

**And the findability check caught something nobody was looking for.** The Semantics of Books had **fifteen chapters and fourteen contents entries**: [chapter 5](../the-semantics-of-books/05-the-evolutionary-root-symbol-and-literal.md) was referenced in prose and had never been listed. *A reader scanning the contents could not see it — the room existed and the cover did not describe it.* Restored, and the book now round-trips at 15 of 15.

## The team, and how the thinking is divided

*Doug asked for the work shaped for asynchronous thinking. Five questions, one per teammate, none blocking another — dispatched and answered 2026-08-10. **What each found is in the requirements above; this is the ledger of who answered what.***

| who | asked | answered |
|---|---|---|
| **Cathy** | the `divide()`/`compose()` overrides, and whether use/mention carries markdown at word grade | **Three, not four** — and the strain is a finding: a URL and an info string are **pointers**, so `role` gains no third value because neither was ever word-grade. She also settled R9's grain against the shipped promise. |
| **Libby** | what a markdown link is as writing; whether markdown is a level, a notation, or a role | **A notation** — one axis, one register row. And the link splits by where it points: internal is a citation, external is a `$Link`, broken renders as its text. |
| **Gabby** | what the figure holds, what acting changes, and how it avoids a second highlighting | **References, not parts**; the section owns the state and hands it down; and the manifold's DOM `light()` hack **is** the second highlighting to retire. She raised the grain question rather than guessing it — which is what surfaced the letter-span specification. |
| **Queenie** | where the app's promises live, and what a green would exercise | The gate gains the app project — **and resolving it uncovered [R15](#math-and-the-gate)**: the app typecheck had been green on zero files, hiding a live crash. |
| **Arthur** | the port's blast radius, and what `$Page` is left holding | Three surfaces survive untouched, `sheet.tsx` is the epicentre, and **the markup contract is a decision nobody had made** ([R13](#the-port)). `page.tsx` is four families under one name. |

**And the dispatch earned its keep in a way worth recording:** three of the five answers changed a requirement, one of them — Queenie's — found a defect that had shipped for five sprints, and **three units exist that nobody had thought of an hour earlier.** **The thinking was not confirmation.**

### And the work divides the same way

*Doug: **"Why not try to parallelize the work too. We have think-async."** So it does — [three file-disjoint tracks](#the-work-runs-in-three-tracks-in-parallel--and-the-boundary-is-the-files), each a teammate working in their own context, all three starting at once.*

| track | whose | and what makes it safe |
|---|---|---|
| **A — the floor and the gates** | **Adam** owns the drivers; **Queenie** the gate and the baseline | the drivers, `package.json`, and three app files nobody else opens |
| **B — the mini framework** | **Cathy**, with **Libby** on what a link resolves to | its own directory and its own tests |
| **C — the surfaces** | **Phillip** the script and the walk; **Gabby** the faces and the drawer | the demo source, the dresses, the new face components |

**The join is serial and it belongs to nobody in particular** — U10 is a barrier, and the tracks meet there.

**Bench:** David, Nancy; Claude on call.

---

# Where things stand

*One state, written 2026-08-11 at the session's close. Everything above is the record; this is the present.*

## → NEXT: `/ce-review` — the second round, over BOTH halves of the arc

**Not a first round.** One already ran, found six gaps, and all six are closed. **The review's own rule is that a round turning up nothing new is how the step ends**, so the honest next action is to run it again and find out.

**And it covers both halves, because neither has been signed.** [The mechanism half](10-writing.md#where-things-stand) records: *"Skipped by ruling — 'I'm going to skip review because this is a two part sprint.' So nothing here is signed off."* **The arc has therefore never been shown to Doug for acceptance.** This round is the first and only chance to sign it.

**If the round turns up nothing:** the arc closes, and the next sprint is Doug's to choose — [Types](00-planning.md#types--a-whole-sprint-ruled-2026-08-07--and-it-now-waits-behind-writing-2026-08-10) is the one that has been waiting behind it since 2026-08-10.

## Said plainly, for whoever is not tracking identifiers

**Markdown is now a real way of writing rather than a converter bolted beside the model.** Write a document in it and the model reads it: headings bound sections, blank lines make paragraphs, stops make sentences, and the marks themselves — asterisks, backticks, brackets — are *present but not read*, the way a comma is. Lists, quotes, images and rules all work, and each one was a branch in something that already existed rather than a new kind of thing.

**A fenced block is a part of its section, and the word after the fence chooses what draws it.** Three different rendering libraries answer to that one word today. One of them isn't a drawing at all — it's the section's own reading, and clicking a line in it lights the prose it names.

**Nothing was added to the public package** except one specification Doug asked for. Everything else lives in the demo.

## The state, once

**Complete, verified and driven.** The markdown notation at three levels; everything ordinary a person writes; the port, with the old parse deleted and the page reading the model; the three dresses rewritten so they differ by what their parts draw; the facing-page comparison; the figure that responds; the drawer showing the framework's own source; and the floor beneath all of it — the manifold's crash, the app typecheck, the debt baselined by identity, and the driver made legible and watched failing.

**Routed, not cut.** The link's three kinds — points inside the library, points out, points nowhere. **[Chapter zero already holds it](00-planning.md)** as *"in-prose references through the reader"*, names `[text](#3.2)` in those words, and calls it **a design session rather than a pick.** It is not this sprint's to build.

**Owed and Doug's — three names, none taken.** The word-grade kind whose content is not writing (reached for three times now); the fence kind that draws a section's own reading; and the facing-page lens. *Populations reported in [Names owed](#names-owed-none-taken).*

**Not started.** Nothing. There is no unstarted work in this sprint.

## Blockers

**None.** One decision is open and it is Doug's — the three names — and no work waits on it.

## Verified — fresh runs at the close

Chemistry **635/635** (59 files), `tsc` **0**, `dist` rebuilt before the lib suite · lib **203 tests** (21 files, from **164**), `tsc` **0** · app **70 files typechecked, 4 baselined by identity, 0 unexpected** · **driver 48 checkpoints, zero failures, exit 0** — and **watched going red three ways** before its green was trusted · the page driven with **zero console errors**.

## How to see it

Run `npm run dev` in `library/.public/package` and open **`/page`** at the port vite prints.

**The control bar reads:** book · github · night · reading · compare · edit · the classes · the books →

**See first — `compare`.** One text set two ways: hand-written on the left, markdown on the right, both parts lists beneath, and a line at the bottom stating the verdict. It currently reads *"The readings agree: 21 words on both sides. The part counts differ by 0."*

**Then `reading`**, for the model's own account of the page. **Then scroll the book dress to *What this section is made of*** — a fenced block that draws the section's parts; click a line and the prose it names lights. **Then `edit`** and type a word: the counts move.

**And `/books` → The Manifold → open the cover.** That page crashed on `main` this morning.

## Wrong turns already taken — do not repeat

- **Do not measure "inserted into prose" by asking whether the model sees it.** The block draws it; the parse is metadata. That mistake nearly bought a rewrite of the parse and is [filed](../solutions/15-the-requirement-i-invented-and-then-failed.md).
- **Do not trust `cd app && tsc --noEmit`.** It exits 0 having compiled **zero files**. Use the project form, which is what the gate now runs.
- **Do not report a green without saying what it exercised** — [filed three times now](../solutions/14-the-green-that-exercised-nothing.md), and the third filing says the cause is the reporting, not any one gate.
- **Do not build the model inside a view.** A fresh set every render means the thing acted on is never the thing drawn — the two-populations defect, which appeared **again** this sprint one level up.
- **Do not dispatch parallel work without file-disjoint boundaries**, and know that the dispatch tool has **no concurrency guard** and **loses everything on a process exit** — three of five tracks were killed mid-run.
- **Probe files do not live in the package.** Write them, read them, delete them; their inputs and outputs belong in this chapter.

## Read these five, and they are sufficient — shaped for a review

1. **[The demonstration, designed first](#the-demonstration-designed-first)**, in this chapter — the eight-step walk and, more importantly, **[the three rungs](#the-three-rungs--and-the-four-things-no-click-can-prove)**: four claims have no click, because the screen confirms presence and never absence.
2. **[The review's round](#the-reviews-round-and-the-six-gaps-it-found--all-closed)** — the six gaps, what closed each, and the number before and after.
3. **[The Levels of Writing](../the-semantics-of-books/15-the-levels-of-writing.md)** — the settled account, now carrying the corrected mention specification.
4. **[Solutions 14](../solutions/14-the-green-that-exercised-nothing.md) and [15](../solutions/15-the-requirement-i-invented-and-then-failed.md)** — the two defects this sprint filed, and the reason its numbers can be believed.
5. **[The mechanism half's own state](10-writing.md#where-things-stand)** — because this round signs that half too, and it has never been shown.
