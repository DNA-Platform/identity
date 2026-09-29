# The shelf

- **author:** [Claude](../../../../.claude/library/..teamsmanship/..team/claude/claude-or-the-recursive-mirror/.cover.md)
- **coauthor:** [Libby](../../../../.claude/library/..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)

---

[Book: [Writing Theory](.cover.md)]

Doug: *"different folder in theory would likely be different documents."*

## Layout

```
library/theory/
  preamble.tex          packages and theorem environments, shared by every document
  notation.tex          shared symbols, one definition each
  template.tex          a new document starts as a copy of this
  build.py              builds a document and its standalone pair
  .sample/              the reference: a finished document with every part in use
  <name>/
    main.tex            the source: the only file edited by hand
    check.py            the document's checks, when it has any
    <name>.tex          generated: the standalone source, sent and committed
    <name>.pdf          generated: the PDF, sent and committed
    main.pdf            the preview built on save, local only
```

A generated file drops any leading dot in its folder's name, so `.sample/` holds `sample.tex` and
`sample.pdf`.

## The reference

Doug named the first document's folder `.sample`, *"so we use it as a reference."* Before writing a new
document, read [`.sample/main.tex`](../../.sample/main.tex) beside its PDF. It is a complete example,
showing:
- an assumption, a definition, lemmas, propositions, a corollary, a theorem and remarks, all sharing one
  counter;
- proofs that cite by `\cref` and `\eqref`;
- a booktabs table;
- a pgfplots figure computed from the formula it illustrates;
- a `thebibliography` block with checked DOIs;
- a `check.py` that the build runs.

`template.tex` is the empty start, and `.sample` is the finished form.

## What the shared files hold

A document loads the shared files by relative path, with `\input{../preamble}` and `\input{../notation}`
after `\documentclass`.

[`preamble.tex`](../../preamble.tex) holds the packages and the environments, and nothing about any one
theory:
- `theorem`, `proposition`, `lemma`, `corollary` and `conjecture`;
- `definition`, `assumption` and `example`;
- `remark`.

All of these share one counter within each section, so Definition 2.1 is followed by Lemma 2.2, and a
reader finds any statement by a single number. Equations are numbered within sections too.

[`notation.tex`](../../notation.tex) defines each shared symbol once: `\R`, `\E`, `\Var`, `\Cov`,
`\argmax`, `\defeq`, `\norm`, `\inner` and so on. Notation that belongs to only one theory stays in that
document.

## Labels and references

A label carries the prefix of its kind:

| Prefix | Kind |
|---|---|
| `def:` | definition |
| `ass:` | assumption |
| `lem:` | lemma |
| `prop:` | proposition |
| `thm:` | theorem |
| `cor:` | corollary |
| `rem:` | remark |
| `eq:` | equation |
| `sec:` | section |
| `tab:` | table |
| `fig:` | figure |

Refer with `\cref{thm:bound}`, which writes the word and the number, or with `\eqref{eq:model}` for an
equation.

## Figures and references live in the source

A document should compile from one file, which is what makes it sendable
([Building and sending](03-building-and-sending.md)). Two consequences follow:
- **Figures are drawn in pgfplots.** The curve in the sample's Figure 1 is `\addplot` of its own
  formula, so the figure cannot drift from the mathematics.
- **References are a `thebibliography` block** in the source, not a `.bib` file. Each DOI is checked
  against Crossref before it is written, as for the papers' books.

---

[Previous: [Why LaTeX](01-why-latex.md)] [Next: [Building and sending](03-building-and-sending.md)]
