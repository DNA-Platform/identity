# The Compiler

- **author:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **coauthor:** [Adam](../../../../.claude/library/..teamsmanship/..team/adam/adam-between-the-wires/.cover.md), [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)

---

*2,000 lines in 17 modules that had never had a member pass, an interface pass or a naming pass — [the three instruments that produced this whole book for `lib`](01-how-to-read-this.md#the-instruments), run here for the first time. **Eight entries**, and the shape of them is the finding: **not one is a wrong mechanism.** Every entry below is a thing SAID TWICE.*

**The compiler is the best-written of the three codebases and this reading does not dislodge that.** *[The C-series](07-the-three-codebases.md) measured it that way and the member pass agrees* — the mechanisms are right, the comments say why rather than what, and the seam is a type with prose on every field. **What the instruments found instead is duplication**: one closed set stated three times, one three-line function copied three times, one traversal written twice for opposite purposes, one list of levels declared twice in one file. *A codebase repeats itself where it has no place to put the thing being repeated,* **and every entry here names that place.**

***One of the eight was live and is closed.*** [S22](#s22) — *the emitter was writing the one construct the framework had just purged.*

## <a id="i23"></a>I23 — `forward` is copied into three modules

**[`walk.ts:13`](../../build/stages/walk.ts) · [`refer.ts:17`](../../build/stages/refer.ts) · [`emit.ts:13`](../../build/stages/emit.ts)** — *the same line three times:*

```ts
const forward = (p: string): string => p.split(sep).join('/');
```

***Byte-identical, and the one difference is a lie about the difference:*** **`walk.ts` annotates the return as `Path` and the other two as `string`**, *and `Path` IS `string`* — so the three agree completely while appearing not to.

**It is the compiler's most load-bearing convention** — *a path is forward-slashed, always, because the identity of an entry is its path and a Windows separator would make two names for one book* — **and a convention that important living in three private consts is a convention with no home.** [`utilities/where.ts`](../../build/utilities/where.ts) *is that home, and it holds one function today.*

**Should be different:** ***one exported `forward` in `utilities/`, imported three times.***

## <a id="n34"></a>N34 — One closed set of three words, stated three times, checkable nowhere

***`'author' | 'subject' | 'canonical'` is the compiler's entire vocabulary of reference*** — **and it is written down three times, in three notations, none of which a compiler can check against another:**

| where | how it is said | what checks it |
|---|---|---|
| [`library.ts`](../../build/library.ts) | ***a doc comment*** on `Reference.as`, whose type is `string` | ***nothing*** |
| [`refer.ts:19`](../../build/stages/refer.ts) | `const kinds = new Set(['Author', 'Subject', 'Canonical'])` | ***nothing*** |
| [`emit.ts:46`](../../build/stages/emit.ts) | `const kinds = new Set(['Author', 'Subject', 'Canonical'])` — **capitalised, again, in a second module** | ***nothing*** |

**The seam declares `Kind` and `Role` as unions and then declares `as` as `string`** — *so the one field naming a closed set is the one field that is not a union,* **and the union it should be is sitting in the comment above it.** *A fourth kind of annotation added tomorrow compiles everywhere and works nowhere.*

**Should be different:** ***a union in the seam, `Reference.as` typed as it, and both `kinds` sets derived from it.*** *The capitalised form is the JSX tag and the lowercase is the field; that mapping is a fact about the two and belongs beside them.*

## <a id="i24"></a>I24 — A path becomes a URL twice, two different ways, and Node has the function

**[`validate.ts:25`](../../build/stages/validate.ts)** — a named helper that splits on a backslash and joins on a slash.

**[`catalogue.ts:36`](../../build/stages/catalogue.ts)** — the same conversion inline in a template, written as a regex replace.

***Same job, same phase of the same compile, two spellings*** — **and `node:url` exports `pathToFileURL`, which handles the cases neither of these does**: *a drive letter, a UNC path, a space in a folder name.* **The library this compiles lives under a drive letter**, *so the first of those three is already in play* **and only happens to work.**

**Should be different:** ***`pathToFileURL` from `node:url`, called in one place.***

## <a id="s21"></a>S21 — The compiler's one contact with the framework it compiles for is `any`

**Two modules load a living book and neither has a type for one** — [`catalogue.ts:36`](../../build/stages/catalogue.ts) casts the import to `{ book: any }`, and [`validate.ts`](../../build/stages/validate.ts) takes `live: any` and holds them in a `Map<string, any>`.

***`@dna-platform/lib` is a dependency of `build`.*** **`$Book` is exported from it.** *So the type exists, is reachable, and is not used* — **and the consequence is not stylistic: [`catalogue.ts`](../../build/stages/catalogue.ts) asks a live book for `contents.chapters`, `title.copy`, `subtitle.copy` and `synopsis.summary`, and NOT ONE of those four is checked against the class that answers them.** *Rename `contents` in the framework and the compiler keeps compiling and starts emitting empty cards.*

***This is the seam where a silent zero is most expensive.*** **A card read off a book that answered `undefined` is a thin card and [thin cards are reported](../../build/index.ts)** — *a card read off a book that answered nothing at all is a card the compiler never knew to doubt.*

**Should be different:** ***the import cast to `{ book: $Book }`, and the level walk taking a `$Book`.***

## <a id="i25"></a>I25 — Two recursive directory walks in one file, for opposite purposes

**[`emit.ts`](../../build/stages/emit.ts)** — `sweep(dir, keep)` *deletes what a run did not write*; `gather(dir)` *collects what was there before it.* **Both recurse the same tree the same way**, *and the only difference is what happens when the walk reaches a file.*

***And they are called in an order that makes the repetition literal:*** **`gather` runs, `removed` is computed from what it found, and then `sweep` recurses the identical tree a second time** — *two full traversals of the output to answer one question about it.*

**Should be different:** ***one walk that yields every file, with the two callers doing their own business over it.***

## <a id="i26"></a>I26 — A card's three links are written as three near-identical blocks, two of them the same

**[`catalogue.ts`](../../build/stages/catalogue.ts)** — `authors`, `subjects` and `entries` are built one after another, and **`authors` and `subjects` are the same eight lines under a different field name.** *Each looks up a book's link, finds the card for the book it points at, and writes an assignment.*

***This is the same fault [`$Author`, `$Subject` and `$Canonical` had in the framework](04-semantics.md) and it is here for the same reason***: **the three are one relation — a book naming another book — and nothing in the compiler says so**, *so each one gets written out again.* **[`author`, `subject` and `canonical` are all the same optional link type on `Book`](../../build/library.ts)** — *the seam already agrees they are one thing.*

**Should be different:** ***one function over the two link names*** — which is [N34](#n34)'s union, *arriving with something to do.*

## <a id="i27"></a>I27 — The six levels are declared twice in one file

**[`validate.ts`](../../build/stages/validate.ts)** declares `Levels` as a type of six numbers, and then eleven lines later declares the same six as data — **paired by hand with the singular of each word**, so a fault message can name a grade.

**A seventh level added to the framework has to be added here twice**, *and the compiler will report six levels and a correct-looking total if it is added once.* ***The array is the real declaration*** — **the type can be derived from it** — *and the singular is only ever used to write a message.*

**Should be different:** ***the array declares the levels and the type is derived from it.***

## <a id="o14"></a>O14 — `CHECK` is a phase of the compile that lives in `commands/`

***[The reorganization](../projection/21-semantics-then-drawing.md#u133) put four kinds of file in four places and got three of them right.*** **[`check.ts`](../../build/verify.ts) is filed as a command**, *alongside `see` which reports and the two `verify-*` scripts which gate* — **and it is not one.** *It is the fourth phase of the compile*, **spawned by [`index.ts`](../../build/index.ts) on every run, with the compile failing when it fails.**

***It sits in `commands/` for a real reason, and the reason is not what the folder means.*** **It runs in its own process because [emitting imports every book and then rewrites those same files](../../build/stages/validate.ts), so a validator in the emitting process would judge a copy that is no longer on disk** — *the program is checked by something that did not write it.* **That is a fact about PROCESS, and the folder is a claim about ROLE**, *and this is the one place the two were confused.*

***[`stages/validate.ts`](../../build/stages/validate.ts) is already the stage.*** **[`commands/check.ts`](../../build/verify.ts) is thirty-three lines that give it a process** — *which makes it neither a command nor a stage, but an entry point for one.*

**Should be different:** ***named for what it is — the stage's entry point — or filed beside the stage it runs.*** *[The taxonomy is the compiler's own](../../build/verify.ts), written in that file's own header, and this is the one file that header does not describe.*

## <a id="s22"></a>S22 — RESOLVED · The emitter wrote the one construct the framework had purged

***Closed 2026-08-24, in [the sprint that found it](../projection/21-semantics-then-drawing.md).***

**[Doug's ruling](../projection/21-semantics-then-drawing.md) was that the escaped newline comes out of the framework everywhere** — *"This is still a web app. We do not format with newlines… That is the equivalent of a break tag in html"* — **and the framework was cleared of them.** ***The emitter was still generating one,*** *written into every cover whose author or subject the compiler had to supply.*

***So a cover the compiler completed carried a construct no cover a person wrote was allowed to.*** **And the corpus's own separator was no better**: *every authored cover wrote an empty expression between its annotations* — **a string the section parse discards outright**, *because the block reader returns nothing for prose that does not trim to anything.* **It separated nothing, and had separated nothing since the purge.**

***The two disagreed about how many paragraphs a cover has.*** **A blank line closes a paragraph; an empty string does not** — *so an annotation the compiler supplied stood in its own paragraph and an annotation an author wrote merged into the one before it,* **and the same cover parsed two ways depending on who had filled it in.**

***The answer was Doug's own***: **an annotation is a phrase, a phrase stands in a paragraph, so ask for a paragraph.** *Both sides now wrap the annotation in one,* **and `CHECK` moved 165 → 172 paragraphs and 305 → 312 sentences** — ***the seven authored annotations that had been silently merging.***

## <a id="dispositions"></a>Dispositions — ***every entry here is CLOSED, [Working Well By Default](../projection/22-working-well-by-default.md), 2026-08-25***

| entry | ruling |
|---|---|
| **[S22](#s22)** | ***DONE*** — *a live violation of a ruling given in the same sprint* |
| **[S21](#s21)** | ***DONE.*** **The compiler's contact with the framework is `$Book`** — *demonstrated by misspelling a member and watching `tsc` say `Property 'contentss' does not exist on type '$Book'. Did you mean 'contents'?`* |
| **[N34](#n34)** | ***DONE.*** *One list, `annotates`, with the type derived FROM it and both capitalised `Set`s deleted* |
| **[I23](#i23)** | ***DONE*** — one exported `forward` in `utilities/`, imported three times |
| **[I24](#i24)** | ***DONE*** — `pathToFileURL` from `node:url`, called in one place |
| **[I25](#i25)** | ***DONE*** — one walk of the output, two callers |
| **[I26](#i26)** | ***DONE*** — one function over the two link names, which is [N34](#n34)'s union arriving with something to do |
| **[I27](#i27)** | ***DONE*** — the array declares the levels and the type derives from it |
| **[O14](#o14)** | ***DONE, and further than proposed.*** **`commands/` is DISSOLVED** — *the root holds the entry points beside the driver, `stages/` the passes, `tests/` the compiler's own gates. `check.ts` is `verify.ts` and it is [the verifier](../projection/22-working-well-by-default.md#d83), which is the JVM's and the CLR's own arrangement and the exact reason it was already a spawn* |

## <a id="what-the-second-reading-found"></a>What a SECOND reading found — three faults the first pass could not

***[The first pass was a code reading and not an audit](../projection/21-semantics-then-drawing.md#the-compiler-audit).*** **Asked [the other four questions of the letter](../projection/22-working-well-by-default.md#group-1), the compiler gave up three more — and the one that paid was the question nobody had ever put to it: *what happens when the corpus is wrong?***

### <a id="o16"></a>O16 — RESOLVED · `commands/` was outside the compiler's own typecheck

**`tsconfig.json` included `["*.ts", "tests/*.ts"]`.** *`stages/` and `utilities/` were reached only because `index.ts` imports them; **nothing imported the four commands**, and `check.ts` was spawned by a path string.* ***`npm run test` began with `tsc --noEmit` and had been reporting zero over four unchecked modules.*** **Closed: the typecheck names all 18 files, and it was [watched going red first](../projection/22-working-well-by-default.md#u150).**

### <a id="i30"></a>I30 — RESOLVED · The only human-facing report contradicted itself on one screen

***`see.ts` read `Link.from`, a field deliberately deleted from the seam*** — *whose own comment says "HOW it was arrived at is deliberately not here."* **It printed `declared` on every row above a summary reading `0 declaring · 0 supplied · 0 standing for nobody`.** *It compiled only because of [O16](#o16).*

**Closed: it is [`dump`](../../build/dump.ts) now** — *the compiler's word for putting its intermediate representation on a screen* — **and it prints what the seam can actually answer: `17 links · 13 pointing · 4 standing for a name`.**

### <a id="i31"></a>I31 — RESOLVED · A wrong corpus produced a stack trace, not a diagnostic

***Found by breaking a corpus five ways, which had never been done.*** **The design is stated in the seam's own words** — *"diagnostics TRAVEL rather than stop the walk: one pass tells an author everything that is wrong"* — **and three faults bypassed it entirely:**

| the fault | before | now |
|---|---|---|
| **a book with no synopsis** | ***raw `TypeError` at `emit.ts:224`, no diagnostic, no book named*** | *a named diagnostic, exit 1* |
| **a file that will not parse** | reported as *"exports nothing a book can compose"* — **the wrong cause** | *"…would not parse", naming the file* |
| **a chapter exporting anything at all** | ***0 diagnostics***; `export const nothing = 1` emitted as `<nothing />` | *failed before the emitter* |

***The root of the first was two non-null assertions in [`resolve.ts`](../../build/stages/resolve.ts) with only one guard behind them*** — **the walk complained about a missing cover and never about a missing synopsis.** *A book that cannot be built is now ABSENT from the model rather than present and broken.*

