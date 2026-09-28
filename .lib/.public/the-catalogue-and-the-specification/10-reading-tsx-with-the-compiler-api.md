# Reading TSX with the Compiler API

- **author:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **coauthor:** [Queenie](../../../../.claude/library/..teamsmanship/..team/queenie/queenie-and-the-specification/.cover.md)
- ***Written 2026-09-28 as U7 of [Sprint 90](../projection/95-sprint-90--the-binder-reads-with-the-parser.md), the research Doug asked for before the binder read with the parser: "be prepared to do research to learn to use the language analysis tools… prime yourself with the right knowledge before embarking." What TypeScript's compiler API gives for reading and rewriting TSX, measured on the test library, and what this binder uses and why. The chapter's name is a PROXY.***

---

## What was asked

**Doug, 2026-09-28:** *"add a step after the parse that goes through the valid places where one could be — string literals in code or templated into TSX as string, or just in TSX like text in HTML — and might that be more performant. Does the library give you tools to perform such operations, maybe, as an alternative to regex that might be faster or that operates with the parse tree more natively? Can you modify the tree to have it toString back to itself even with whitespace and other chaff? Those are the things to consider in your design."* And, on the edit loop: *"favor a fast development experience. But invest resources into doing it right."*

Four questions, then: where the notation may stand, and how to find those places; whether TypeScript's own scanner finds the forms better than a regex; whether a rewritten tree prints back to its source; and whether an incremental parse pays on an edit.

## What TypeScript gives, by name

Read from `typescript.d.ts` at 5.9.3, the version the repository resolves. The official guide, *Using the Compiler API*, covers `createSourceFile`, `forEachChild`, the `factory` and `createPrinter` and is silent on positions, trivia, `ts.transform`, `updateSourceFile`, the scanner and JSX; the declarations and the probes below are the source.

| for | the API | what it is |
|---|---|---|
| **the tree** | `createSourceFile(name, text, ScriptTarget.Latest, false, ScriptKind.TSX)` · `forEachChild(node, visit)` | a full parse into a tree; `forEachChild` walks the children that carry meaning, which *"subsumes the visitor pattern"*; `setParentNodes` false, since nothing here walks up |
| **the text nodes** | `isJsxText` · `isStringLiteral` · `isNoSubstitutionTemplateLiteral` · `JsxText.containsOnlyTriviaWhiteSpaces` | prose between tags; a quoted string wherever it stands, a prop's value included; a template with nothing substituted; and the flag for JSX text that is only whitespace and line breaks |
| **positions** | `node.getStart(sourceFile)` · `node.getFullStart()` · `node.end` · `getLeadingTriviaWidth` · `getText` / `getFullText` | `getStart` skips leading trivia, `getFullStart` does not; `end` is exclusive; every position indexes the original text, so `text.slice(start, end)` is exactly the node's source |
| **lines** | `sourceFile.getLineAndCharacterOfPosition(pos)` | zero-based line and character for any offset; the binder's diagnostics add one |
| **the scanner** | `createScanner(target, skipTrivia, LanguageVariant)` · `setText` · `scan()` · `getToken` · `getTokenStart` · `getTokenEnd` · `isUnterminated` · `scanJsxToken` · `reScanJsxToken` | the tokenizer the parser drives, public and drivable by hand over any text; `scanJsxToken` reads JSX children, `scan` reads TypeScript |
| **rewriting** | `transform(sourceFile, [factory => root => …])` · `visitEachChild` · `visitNode` · `factory.updateJsxText` | a new tree with a node replaced, the old one untouched |
| **printing** | `createPrinter({ removeComments: false })` · `printFile` · `printNode` | a tree to text — TypeScript's own formatting, not the source's |
| **an edit** | `updateSourceFile(sourceFile, newText, createTextChangeRange(createTextSpan(start, length), newLength))` | an incremental reparse reusing the nodes the change did not touch |

## Measured, 2026-09-28, the test library

46 `.tsx` files, 57,133 bytes, no CRLF, on one machine; the probe was created and removed in one turn.

| | |
|---|---|
| **parse** | 34.0 ms cold, 10.6 ms warm; the walk to text runs 3.9 ms |
| **text runs** | 832 — 605 JSX text, of which **365 are whitespace only**; 227 strings and templates |
| **the regex within runs** | 128 forms in 0.6 ms; **over raw source, the same 128 in 0.3 ms — none stands outside a run** |
| **TypeScript's scanner over runs** | 5,104 tokens in 4.6 ms; 26 unterminated tokens; 129 bracket openings seen, **125 forms assembled against the regex's 128** |
| an apostrophe in prose | `Doug's word on [[ The Shelf ]]` tokenises as `Identifier StringLiteral!` — the `'` opens a string that swallows the line, form and all |
| **the printer, unmodified** | **0 of 46 files byte-identical**; 1,211 of 1,268 lines differ, 26.3 ms |
| the printer, one JsxText replaced | 19 of 19 lines of the file differ from its source; the edit was one line; 1.9 ms |
| **a one-character edit, 46 files** | full parse 6.2 ms, `updateSourceFile` 7.3 ms |
| **positions** | 832 of 832 runs slice their own text exactly |

*Two of the probe's own lines were the probe's: a last-line check that counted a trailing newline as a line, and the count of blank runs, which a reading module skips by `containsOnlyTriviaWhiteSpaces`.*

## What follows, and why

**The parser locates and the language reads — Doug's step after the parse.** The valid places are three kinds of node and nothing else, and the regex finds the forms within them in under a millisecond. TypeScript's scanner cannot: prose is not TypeScript, so an apostrophe, a quotation mark or a backtick opens a literal that runs to the end of the line, and three of the test library's forms are lost inside them. What the scanner tokenises well — brackets, stars, a `$` — the regex already reads, and the words between the brackets are text the scanner has no token for. **So the forms are found by the regex within a text run, and the scanner is not used.** This is not the regex over raw source that Sprint 90 replaces: that one read comments and import paths, because nothing had told it where prose was. The parser tells it.

**An edit is a splice on the original text by position, never a tree printed back.** The printer answers *"can you modify the tree to have it toString back to itself"* with no: it reformats every file it prints, whitespace, wrapping and all, and a single replaced node costs the whole file its shape. That is by design — the printer emits code, it does not preserve source — and the libraries that preserve source do so by editing text under the tree's guidance, which is what the transform already does in ten lines. **Positions are exact, so the splice is exact.**

**A full parse per changed file, and no incremental parse.** On files of this size the incremental machinery costs more than it saves; a parse is a quarter of a millisecond warm. The cost that matters is not one parse but parsing the same file twice, once for the structure and once for the transform, and that is answered by holding the runs with the structure's reading — keyed on modified time and size, invalidated by the watcher as the inventory already is — and letting the transform take them when the text it is handed is the text held. The edit loop stays what it was: one file re-read, one module reloaded.

**Blank JSX text is not a run.** A third of the test library's JSX text nodes carry only whitespace and line breaks — the indentation between tags — and `containsOnlyTriviaWhiteSpaces` says so without a trim. The reading module yields the runs that can carry writing.

## What this binder uses

One module of the catalogue parses a file once and answers three questions of it: the **text runs** — kind, `from`, `to`, and the text as read, prose by [the JSX rule](../../package/.binding/catalogue/reading.ts) and strings as written — the **forms** within them, found by [the language's](../../package/.binding/catalogue/language.ts) one regex with their offsets made absolute, and the **line** of any offset. The scanner in `catalogue/annotations.ts` and the transform in `reference/transform.ts` both ask it; nothing else in the binder calls `createSourceFile`. That is [Sprint 90](../projection/95-sprint-90--the-binder-reads-with-the-parser.md)'s D1, D3, D4 and D6, decided here.

**Names.** Doug's: *the TypeScript parser*, *a step after the parse*, *the valid places*. Ours, flagged: *text run*; the module's file name.
