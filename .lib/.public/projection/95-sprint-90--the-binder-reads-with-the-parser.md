# Sprint 90: The Binder Reads with the Parser

- **author:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **coauthor:** [Queenie](../../../../.claude/library/..teamsmanship/..team/queenie/queenie-and-the-specification/.cover.md)
- ***Opened 2026-09-28 at the close of [Sprint 89](94-sprint-89--figures.md) on Doug's word, `requirements-only`: the requirements are drawn from his words and the plan is written beneath them, and the chapter turns `implementation-ready` on his yes to the requirements and the three decisions that are his. The workflow is the [feature workflow](../../../../.claude/library/..teamsmanship/19-workflows.md), at `/ce-plan`. The sprint's title is a PROXY; Doug's to rename.***

---

## Where this sprint comes from

**Doug, 2026-09-28, at the close of Sprint 89, verbatim:** *"We'll need to performance test the typescript parser that can parse TSX but we have to use it. There will be more manipulations in the future. You probably should already be using it for the template language, making sure the templates are in the same place. You might even be able to modify the parser to make those things parse as tokens. But even if that's not possible or easy, we are doing code processing and need language comprehension tools."*

**And asked which sprint the plan is for:** *"The binder reads with the TypeScript parser."*

## What the room holds — how the binder reads source today

**The language is one table and one regex.** [`catalogue/language.ts`](../../package/.binding/catalogue/language.ts) holds the seven annotating forms and the referring form as a table, and one regex, `notation`, exported as a source and constructed with its own cursor wherever it runs — [Solutions 17](../solutions/17-the-regex-that-remembered-where-it-stopped.md) is why. [The Language](../the-catalogue-and-the-specification/06-the-language.md) documents the forms; [The Binder, As Built](../the-catalogue-and-the-specification/07-the-binder.md#language) says the scanner and the transform read the same spelling.

**The two passes that read it read different text.** [`catalogue/annotations.ts`](../../package/.binding/catalogue/annotations.ts), the scanner, runs the regex over a file's **whole source**: the structure reads the file from disk and hands the code to `annotating`, with a `lines` helper of its own mapping offsets to line numbers — [`catalogue/structure.ts`](../../package/.binding/catalogue/structure.ts), `looked`. [`reference/transform.ts`](../../package/.binding/reference/transform.ts) parses the same file with `ts.createSourceFile` as TSX and scans only the text nodes — `JsxText`, read by JSX's whitespace rule and the entities in [`catalogue/reading.ts`](../../package/.binding/catalogue/reading.ts); `StringLiteral` and `NoSubstitutionTemplateLiteral`, read as written — splicing by absolute offset. Doug, 2026-09-19, the rule the transform reads by: *"You haven't done anything to change the language. Evaluating the ()[] was never the job of this framework"* — a sigil in a string compiles to exactly what it compiles to in prose.

**Probed 2026-09-28, over five spellings in one file:** `// [[ A Ghost Title ]]` in a comment, `import x from './[[ A Path ]]'`, `title="[[ In A Prop ]]"`, `{'$[ In A String ]'}` and `[[[ In Prose ]]]`. The scanner catalogued the comment and the import path as titles alongside the prop, the string and the prose; the transform never sees a comment. Since a chapter is named by the first title form in its file, a comment above a chapter's title would name the chapter, silently, and the transform would compile the real title against a name the catalogue never made.

**What is cached, and what is not.** The structure keeps each file's reading keyed on modified time and size, so a warm structure over 205 books costs 23 ms against 205 cold; the transform parses again on every Vite transform and keeps nothing. The transform's parse is already the parser Doug names, so the binder pays it today for one pass and not the other.

**Measured 2026-09-28, the test library, 46 `.tsx` files, 57 KB:** the parser 28.1 ms cold and 7.7 ms warm; the regex over the same source 0.3 ms, 60 matches. TypeScript 5.9.3.

**What TypeScript gives.** `createSourceFile` and `forEachChild` for the tree; `getLineAndCharacterOfPosition` for lines; and `createScanner` is public, with `scanJsxToken` and `reScanJsxToken`, so a scanner of our own can be driven over TypeScript's tokens. The parser admits no new token kinds without a fork, and a fork of a dependency is not on the table. *"Modify the parser to make those things parse as tokens"* therefore means a scanner layered on TypeScript's, never TypeScript's own parser changed.

**The rules that bind this sprint.** The compiler reads files and the notation, never a tag — Doug, 2026-09-25: *"You don't need the compiler to check for anything. You can't! They might subclass them."* The compiler enforces as much as it can from what it gives — [the implementation guide](../the-catalogue-and-the-specification/07-the-binder.md#guide). The binder's register: plain, longer names, a phase a file, a rule returning a fault — [the register](../the-catalogue-and-the-specification/07-the-binder.md). Its cleanup register is [The Binder's Condition](../the-catalogue-and-the-specification/08-the-binders-condition.md).

## Requirements

*Drawn 2026-09-28 from Doug's words above; each names what would be observed if it held. **Awaiting his approval.***

| | requirement | observed |
|---|---|---|
| **R1** | **One reading of a file, through the TypeScript parser, for the structure and the transform alike.** Both passes read the notation from the same text nodes of one parse — JSX text, string literals and templates with nothing substituted, the transform's rule today, which is Doug's — and from nothing else: never a comment, an identifier, a tag's name, a type, an import's path. *"Making sure the templates are in the same place."* | a fixture chapter with `[[ A Ghost Title ]]` in a comment above its real title binds named by its real title; the structure's reading of a file and the transform's edits to it are taken from the same nodes; the structure and transform promises hold |
| **R2** | **Lines come from the parser.** Every diagnostic's line is the parser's `getLineAndCharacterOfPosition`; the structure's own `lines` helper is gone; the binder's one form, `file(line,col): error TAG: at — says`, is unchanged. | every fault the wellformed fixture raises names the line a person counts; the diagnostics' text is byte-identical before and after for the fixtures |
| **R3** | **The notation is read in one place.** One module of the catalogue parses a file and yields its text runs with positions; the scanner reads the forms within those runs; the transform asks the same module. The regex keeps one home, the language, and one consumer. *"We are doing code processing and need language comprehension tools"* — this module is the tool, and the seam later manipulations extend. | `notation` is constructed in one file; nothing in the binder outside that module calls `ts.createSourceFile`; the design of record names the module and its two callers |
| **R4** | **A file is parsed once per version of itself.** The parse is held where the reading is held, keyed as the reading is; the transform reuses the held reading when the text it is handed is the text the structure read, and parses through the same module otherwise. | the performance promise counts parses: cold, one per file; warm, none; an edit to one chapter, one |
| **R5** | **The parser's cost is a performance promise.** The catalogue's performance project prints, over the scaled galley cold and warm, the parse as a row of its own beside the structure's other phases, and beside it what the regex over raw source cost in the same run; numbers, never a threshold. *"We'll need to performance test the typescript parser."* | `npx vitest run --project performance` prints a `parse` row and a `regex` row; the numbers go into [What is measured](../the-catalogue-and-the-specification/07-the-binder.md#measured) |
| **R6** | **The forms as tokens are measured, not assumed.** A spike drives `ts.createScanner` over the test library's text nodes and reports what a scanner of our own would cost and what it would buy over the regex within a text node — exactness, refusals, speed — as a paragraph with numbers; Doug rules whether a later unit builds it. *"You might even be able to modify the parser to make those things parse as tokens. But even if that's not possible or easy…"* | the paragraph in this chapter's record, with the numbers and a verdict |
| **R7** | **Nothing a reader sees changes.** The language's table is untouched; every existing promise holds; a galley of the test library bound before and after the change has byte-identical pages. | the compiler's unit and regression counts hold at 103 and 40 or grow; `diff -r` over the two galleys' pages is empty |
| **R8** | **The design of record says the parser reads.** [The Binder, As Built](../the-catalogue-and-the-specification/07-the-binder.md) — *Reading a library without running it*, *The language, read by one scanner*, *What is measured*; [The Binder's Condition](../the-catalogue-and-the-specification/08-the-binders-condition.md) gains an entry for any wart found; a Solutions chapter if the comment case is ruled a defect. | the chapters, and their covers by the tool |

**Out of scope:** the language itself — no form, separator or escape changes; `whole()` and membership-first resolution, [B5](../the-catalogue-and-the-specification/08-the-binders-condition.md#b5), Doug's to rule; reading a tag's name or attribute for anything; markdown; a fork of TypeScript; the substitutions of a template literal, which the transform does not read today either.

**Names.** Doug's: *the TypeScript parser*, *the template language*, *language comprehension tools*, *tokens*. Ours, flagged: the reading module's file name, a PROXY until he names it; *text run* for a node's text with its positions.

## Approaches, at mechanism altitude

1. **The parser locates, the language reads** — *recommended.* One module parses a file and yields its text runs; the forms' regex runs within each run, its offsets made absolute; the scanner and the transform both take the runs. The smallest change: the transform's walk becomes the shared reading, the language file is untouched, and Solutions 17's rule stands. *Trade-off:* the forms are still found by a regex, inside text the parser vouched for.
2. **A scanner of our own over TypeScript's scanner.** Drive `createScanner` with `scanJsxToken` over the text and emit a token per form. *Trade-off:* the offsets are already exact and the refusals already total under 1, so what it buys is a tokenizer duplicating what the parser hands us; a hand-written JSX-aware scanner is the thing 1 exists to avoid. Measured as the spike, R6, and built only on Doug's word.
3. **Keep the regex over raw source and mask comments first.** Cheapest; *rejected*, since a comment-stripper is a second half-parser beside a whole one already paid for, and the rule Doug gave is language comprehension, not another pattern.

## <a id="plan"></a>The plan

*Planned 2026-09-28 with [the language](../../package/.binding/catalogue/language.ts), [the scanner](../../package/.binding/catalogue/annotations.ts), [the transform](../../package/.binding/reference/transform.ts), [the structure's cache](../../package/.binding/catalogue/structure.ts), [the reading rules](../../package/.binding/catalogue/reading.ts), [the inventory](../../package/.binding/inventory/retaken.ts) and [the performance project](../../package/.binding/.test/catalogue.performance.ts) open. Guardrails, not choreography. **The size, measured before dividing:** the scanner is 56 lines, the transform's walk about 25, the structure's line helper 12; the replacement is one module of about the same total, two callers changed, one performance promise and one spike. One session, no dispatch.*

### Decisions

| | decision | why, and what it was chosen over |
|---|---|---|
| **D1** | **One reading module in the catalogue, `catalogue/source.ts`** — a PROXY name — parses a file as TSX with `ts.createSourceFile` and yields its **text runs**: each with its kind (prose or string), its absolute `from` and `to`, and its text as read — prose by [`reads`](../../package/.binding/catalogue/reading.ts), a string as written with its quotes stripped — and answers the line of any offset from the parser. The scanner takes the runs; the transform takes the runs. | Over two parses in two files, today's shape, which is how a comment came to be a title in one pass and nothing in the other. The unit of the binder is a phase and a rule is a file, [the register](../the-catalogue-and-the-specification/07-the-binder.md). |
| **D2** | **What is read is the transform's rule: `JsxText`, `StringLiteral`, `NoSubstitutionTemplateLiteral`, and nothing else.** A form in a comment, an identifier, a tag's name, a type position or a template's substitution is **silent** — neither a form nor a refusal — because a comment is where things do nothing by design and a refusal there would forbid a writer from mentioning the notation in a note. | Over refusing it, which the language's own rule — *"the one outcome that must not happen is silence"* — could be read to ask; that rule is about a form a writer meant, in text a reader sees. ***Doug's to confirm.*** |
| **D3** | **The parse is held with the reading.** The structure's cache, keyed on modified time and size, holds the runs and the parser's line function; the transform, handed a file's code by Vite, asks the inventory's catalogue for that file's held reading and uses it when the held text equals the text handed, and parses through the module otherwise. | Over the transform always parsing for itself, which is simpler and pays the parser twice per file on a bind; the equality check is what keeps a stale reading from ever editing new text. ***Doug's to confirm.*** |
| **D4** | **Lines are the parser's.** `getLineAndCharacterOfPosition`, one-based for the diagnostics; the structure's `lines` helper removed. | One rule for a line, held by the thing that read the file. |
| **D5** | **The performance promise gains two rows,** `parse` and `regex over raw source`, printed cold and warm over the scaled galley in the same run, and a count of parses across a cold and a warm structure; the numbers into the design of record's table. | Doug: *"performance test."* A threshold is a number chosen once on one machine; the row is the finding. |
| **D6** | **The tokens are a spike, U5, and nothing more this sprint:** a scratch probe drives `ts.createScanner` over the runs of the test library, counts tokens and times it, and the record carries the paragraph; a unit that builds a scanner of our own is opened only on Doug's word after reading it. | A unit with no mechanism it has chosen is design owed and is denied files and scenarios, [ce-plan](../../../../.claude/library/our-skillset/29-ce-plan.md). ***Doug's to confirm.*** |
| **D7** | **The design of record is edited in the same sprint,** and the scanner's file comments that describe raw-source scanning go with the code they described. | The book links to the file, never the reverse. |

### Units

**<a id="u1"></a>U1 — the reading module, and the scanner over it (D1, D2, D4; R1–R3).** *What runs:* one module parses a file and yields its text runs and lines; `annotating` reads forms within runs rather than over code; the structure's `looked` holds the runs and asks the module for lines; the `lines` helper removed. *Files:* `catalogue/source.ts` (new, PROXY), `catalogue/annotations.ts`, `catalogue/structure.ts`; promises: a new `source.test.ts`, `structure.test.ts` gaining the comment fixture, `wellformed.test.ts`'s lines re-read. *Visible end:* the fixture chapter with a form in a comment binds named by its real title; the test library's structure is unchanged in every spot, edge and mention.

**<a id="u2"></a>U2 — the transform reads the same reading (D1, D3; R1, R4, R7).** *What runs:* the transform takes the file's runs from the module — the held reading when the text matches, a parse otherwise — and splices as today. *Files:* `reference/transform.ts`, `reference/transform.test.ts`, `inventory/retaken.ts` if the catalogue must hand a file's reading out. *Visible end:* a galley bound before U1 and after U2, its pages diffed, empty. *Depends on U1.*

**<a id="u3"></a>U3 — the performance promise (D5; R4, R5).** *What runs:* `catalogue.performance.ts` prints `parse` and `regex over raw source` cold and warm, and the parse count. *Files:* `.test/catalogue.performance.ts`. *Visible end:* the printed rows, copied into this record and the design of record. *Depends on U2.*

**<a id="u4"></a>U4 — the gate (R7).** *What runs:* the compiler's typecheck, unit and regression; the package untouched, so its suite is not re-run unless `src` moved. *Visible end:* the numbers, beside the numbers at HEAD. *Depends on U2.*

**<a id="u5"></a>U5 — the tokens spike (D6; R6).** *What runs:* a probe in the scratchpad, created and removed in one turn, drives `ts.createScanner` over the test library's runs and reports tokens, time, and what a token would refuse that the regex within a run does not. *Files:* none in the repository. *Visible end:* a paragraph with numbers and a verdict, here. *Depends on U1.*

**<a id="u6"></a>U6 — the design of record (D7; R8).** *What runs:* the three sections of The Binder, As Built rewritten to the parser; the Condition's entry if a wart was found; a Solutions chapter if D2 is ruled a defect; the covers by the tool. *Depends on U3, U4, U5.*

### Test scenarios

*U1:* a file whose only `[[ X ]]` stands in a comment yields no forms and no refusals; one in an import path yields none; one in a prop's string yields a title form at the prop's offset; `{'$[ X ]'}` yields a reference; prose wrapped over a line yields one name with one space; a run's `from` and `to` index the original source exactly, so `code.slice(from, to)` is the run's raw text; the line of the last character of a CRLF file is its last line; the test library's structure before and after has the same spots, names, edges, mentions and refusals. *U2:* the transform over the paper's chapters compiles every form to the address the catalogue holds, as its promises already say; a form in a comment is not spliced; a held reading is used when the code handed equals the code held and a fresh parse is taken when it does not, shown by a file edited between the structure and the transform in one promise. *U3:* the rows print; the parse count cold equals the file count and warm is zero. *U4:* unit ≥ 103, regression ≥ 40, typecheck 0. *U5:* the probe runs over every run of the test library and the paragraph states tokens, milliseconds and the verdict.

### Risks

| risk | what mitigates it |
|---|---|
| the parser's cost at a thousand books, cold | U3 measures it in the same run as the regex; the cache means it is paid once per file per change; today's 205-book structure is 205 ms cold, and the parser at 28 ms per 46 files predicts about a second cold at a thousand — a number the row will confirm or refute |
| a kind of text node missed — a JSX attribute's string, a template literal, a JSX expression holding a string | the transform's walk already lists them and its promises cover a prop and a string; U1's promises name each kind |
| the transform's code differing from the disk's — a plugin before `references` transforming the file | `references` is `enforce: 'pre'` and follows only `retakes` and `holding`, which transform nothing; the equality check in D3 makes a difference a fresh parse rather than a wrong edit |
| CRLF files shifting offsets or lines | the parser's positions are over the string handed; the line function is the parser's; a CRLF promise in U1 |
| a comment ruled a refusal rather than silence, after U1 is built | D2 is asked before U1 starts; the module's shape is the same either way, only the runs it yields differ |
| TypeScript's version moving the scanner API | 5.9.3 is what the repository resolves; the spike names the version it measured |

### Where each requirement lands

R1–R3 → [U1](#u1) · R1, R4, R7 → [U2](#u2) · R4, R5 → [U3](#u3) · R7 → [U4](#u4) · R6 → [U5](#u5) · R8 → [U6](#u6). **Order:** U1, U2, U3, U4, U5, U6.

## Where things stand

**Next: Doug's yes to the requirements and to D2, D3 and D6, asked 2026-09-28; then this chapter turns `implementation-ready` and `/ce-work` runs on it from [U1](#u1).** Nothing is built. The project stands at `cc67ee5`, Sprint 89's close.

**Read first, for the work:** [`catalogue/language.ts`](../../package/.binding/catalogue/language.ts), the table and the regex the module must not move; [`catalogue/annotations.ts`](../../package/.binding/catalogue/annotations.ts), the scanner that becomes a reader of runs; [`reference/transform.ts`](../../package/.binding/reference/transform.ts), whose walk is the reading to share; [`catalogue/structure.ts`](../../package/.binding/catalogue/structure.ts), `kept` and `looked`, where the reading is held; [The Binder, As Built](../the-catalogue-and-the-specification/07-the-binder.md#reading), the sections to rewrite.

**Wrong turns already known:** a shared global regex carries its cursor between callers — [Solutions 17](../solutions/17-the-regex-that-remembered-where-it-stopped.md); an absolute Windows path in an ESM import must be a `file://` URL, which the probe of 2026-09-28 met first.
