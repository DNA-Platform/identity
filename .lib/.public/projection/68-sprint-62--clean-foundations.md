# Sprint 62 — Clean Foundations

- **author:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **coauthor:** [Queenie](../../../../.claude/library/..teamsmanship/..team/queenie/queenie-and-the-specification/.cover.md)
- **style:** [The Coding Style](../the-coding-style/03-the-coding-style.md)
- **status:** `implementation-ready` — *planned 2026-09-11 from [chapter zero § Sprint 62](00-planning.md#s62); [U3](#u3)'s restructure is design owed to the brainstorm*
- ***The chapter name is a proxy; Doug's to rename.***

---

***The end, from chapter zero:*** **`npm run verify:latex` is green from a fresh run and is the sprint gate; the eight foundational classes pass a member audit — each member used-by / decided / just-there — with Doug's cuts made; no comment remains in `src`; every theme rule names a class and not an element where a kind writes one; themes stand per type and formats per instance; and the performance audit shows bonds and draws per part at one. LaTeX closes here.** *Doug: "Touching the foundational piece of code is considered very serious. Writing, Annotation, Type, Letter–Book."*

**Read first:** this chapter · [Sprint 61 § Where things stand](67-sprint-61--the-chapter-file.md#stand) · [The Coding Style](../the-coding-style/.cover.md) whole · [The Type System](../the-type-system/.cover.md) whole · [The Motif](../the-motif/.cover.md) whole · [Solutions 44](../solutions/44-the-enforcement-that-detonated-per-render.md), [70](../solutions/70-the-mention-that-remounted-every-draw.md), [71](../solutions/71-the-population-that-never-drew.md) · chemistry's [testing/01](../../../chemistry/.lib/testing/01-the-contract.md) · then every file of the eight, end to end: `Writing.tsx`, `Composition.tsx`, `Annotation.tsx`, `Type.tsx`, `Reference.tsx`, `Letter.tsx` through `Document.tsx`, `Chapter.tsx`, `Book.tsx`.

## <a id="requirements"></a>Requirements

| | what it demands | where | lands in |
|---|---|---|---|
| **R1** | ***every member of the eight is used-by, decided, or just-there, and the just-there are cut*** | Doug: "the core classes are lean, we are actually using their abstractions, they are polymorphically sound" | [U1](#u1) |
| **R2** | ***no comment in `src`; the reasons in this library*** | Doug: "comments should move entirely to library branches as the code itself should have none" | [U2](#u2) |
| **R3** | ***a theme rule names the class a kind writes, not the element*** | Doug, 2026-09-11: "you should be coding to classes and not elements where possible" | [U3](#u3) |
| **R4** | ***themes per type, formats per instance*** | Doug: "Themes should be single for a type, formats should be individual and the two should have access to each other" | [U3](#u3) — *the restructure is design owed* |
| **R5** | ***`verify:latex` is the gate*** | the assignment's integration test, owed since 2026-09-08 | [U4](#u4) |
| **R6** | ***bonds and draws per part are one, and the paper's load time is known*** | Doug: "preserve performance" | [U5](#u5) |

## <a id="decisions"></a>Decisions

### <a id="d1"></a>D1 · ***The audit reads callers, never declarations***

A member's column is filled by grep across `src`, both demos and the suite — where it is called, not where it is declared — because a `format()` that is a reduce looks like single dispatch from its declaration. One table, eight classes, every member a row.

### <a id="d2"></a>D2 · ***A cut is a presented decision, one file at a time, in the order Writing → Composition → Annotation → Type → Reference → the levels → Chapter → Book***

Each file's cuts shown as a diff in words with the callers cited; Doug's yes; the file moved; the gate; a commit. Never two files in one step.

### <a id="d3"></a>D3 · ***A comment leaves the code only after its reason is findable in this library***

Where the reason is already a chapter, the comment goes; where it is not, one line lands in the chapter that owns the subject first. A comment that says nothing a reader needs goes without a line.

### <a id="d4"></a>D4 · ***The element selectors are converted by the Sprint 57 rule, with its `:not()` roster where the class is inherited***

[Solutions 69](../solutions/69-the-class-that-every-kind-beneath-it-wears.md) records what converting a selector from an element to a kind widens; the four remaining — `h1`, `hr`, `img`, `figure:not(.pd-figure) figcaption` — follow it.

## <a id="units"></a>Units

### <a id="u1"></a>U1 · ***The member audit and the cuts*** — R1

**Mechanism:** per [D1](#d1) and [D2](#d2): the table in this chapter, then the cuts file by file.

**Files:** the eight, one at a time · `.tests/` where a promise pins a member that stays.

**Visible end:** ***the table, every row filled; each file's line count before and after; the suite and both demos unchanged in what they draw.***

**Depends on:** Doug's yes per file.

### <a id="u2"></a>U2 · ***Comments out*** — R2

**Mechanism:** per [D3](#d3), file by file as each is touched in U1 and then the rest.

**Files:** the 46 files carrying comments at the Sprint 58 count.

**Visible end:** ***`grep -c '//' src` at 0 outside string literals; the library chapters that gained lines listed here.***

**Depends on:** nothing.

### <a id="u3"></a>U3 · ***The themes: selectors to classes, and the restructure*** — R3, R4

**Mechanism, the selectors:** per [D4](#d4), four rules in the base and one in markdown converted, the stylesheet read before and after. **The restructure — design owed:** `$Theme` per type and formats per instance as [The Motif, ch. 4](../the-motif/04-themes-per-type-formats-per-instance.md) rules, whose mechanism the Wikipedia brainstorm gives; that half has no files here.

**Files:** `src/formatting/Theme.tsx` · `src/markdown/Theme.tsx`.

**Visible end:** ***no element selector in any theme; the paper and `/turing` drawing what they drew, by computed-style fingerprint.***

**Depends on:** nothing for the selectors.

### <a id="u4"></a>U4 · ***`verify-latex.mjs`*** — R5

**Mechanism:** one driver from the saved ones: waits for a 200; opens `/` and the markdown reading; asserts the title formula, `Abstract`, every contents row landing below the strip, every citation landing once the scroll settles, 0 `.katex-error`, 0 panels, the characters; exits non-zero naming what failed. `npm run verify:latex` runs it.

**Files:** `.latex/.public/verify-latex.mjs` (new, from `.paper/`) · `package.json`.

**Visible end:** ***one run printing the numbers; red the moment a row hides or a citation stops landing.***

**Depends on:** nothing.

### <a id="u5"></a>U5 · ***The performance audit*** — R6

**Mechanism:** the Sprint 59 probe re-run on the head — bonds and draws per part — and the paper's load and first paint from the driver, three runs; the numbers here beside Sprint 59's.

**Files:** a probe, created and removed; this chapter.

**Visible end:** ***a table: per part 1 and 1; the paper's time.***

**Depends on:** [U1](#u1).

## <a id="scenarios"></a>Test scenarios

| unit | scenario | input · action · expected |
|---|---|---|
| [U1](#u1) | ***a member cut that something called*** | the cut · tsc and the suite · **red, naming the caller — which is the audit's error, fixed in the table** |
| [U2](#u2) | ***a comment carrying a reason*** | the file · **the reason found in a chapter before the line goes** |
| [U3](#u3) | ***the fingerprint*** | computed styles of 20 sampled elements before and after · **equal** |
| [U4](#u4) | ***red for the right reason*** | one fold key broken · `verify:latex` · **non-zero, naming the citation** |
| [U5](#u5) | ***the count*** | the probe · **1 and 1** |

## <a id="risks"></a>Risks

| | risk | what mitigates it |
|---|---|---|
| **K1** | ***a cut removes a measurement*** — a rule that stopped running reads as green | Solutions' `unrun-rule`: every rule that stays has a promise that goes red without it |
| **K2** | ***the restructure is built before it is designed*** | it is marked owed and has no files; the brainstorm gives it |
| **K3** | ***`verify:latex` passes against a stale server*** | it waits for a 200 on a server started for it, and reads `dist`'s timestamp |

## <a id="order"></a>Order

**[U4](#u4) first, so everything after is measured by it; [U3](#u3)'s selectors; [U1](#u1) file by file with [U2](#u2) riding each; [U5](#u5) last.**

## <a id="stand"></a>Where things stand — ***2026-09-11, begun; [U4](#u4) landed***

**[U4](#u4), the gate:** [verify-latex.mjs](../../package/.latex/.public/verify-latex.mjs) as `npm run verify:latex` — waits for the server, drives both readings through the strip's own choice, asserts the title's formula, the Abstract, 0 KaTeX errors, 0 panels, every citation a number, every row and citation landing below the strip after a plain jump, and names what failed. **Green at the head on both readings:** 82,582 chars · 66 rows landing 66 · 43 citations landing 43 · 335 entries. **Red for the right reason:** one fold key broken and the gate said *a citation draws its key — cook1971*, 42 of 43 landing; restored.

**Next in the order:** [U3](#u3)'s selectors to classes with the fingerprint before and after, then [U1](#u1) file by file with [U2](#u2) riding each, then [U5](#u5).
