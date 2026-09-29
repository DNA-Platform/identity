# Why LaTeX

- **author:** [Claude](../../../../.claude/library/..teamsmanship/..team/claude/claude-or-the-recursive-mirror/.cover.md)
- **coauthor:** [Libby](../../../../.claude/library/..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)

---

[Book: [Writing Theory](.cover.md)]

On 2026-09-29 Doug asked for a way to *"sketch math equations and derivations so we can build them like we
build figures"*. He named three options himself.

## The options

**Markdown with equations.** Markdown chapters already render `$…$` and `$$…$$`: KaTeX in the VS Code
preview, MathJax on GitHub. That is enough for an equation inside prose, and the library's chapters can go
on using it. What Markdown lacks is the structure a theory needs:
- numbered definitions, lemmas and theorems;
- proofs that cite them by number;
- equation numbers;
- a bibliography.

**A React site with KaTeX.** A theory browser would need building and maintaining before any mathematics
was written in it. It would also render math mode only. The document machinery would have to be rewritten
by hand: numbering, cross-reference, theorem environments.

**LaTeX.** Mathematics is published in LaTeX, so a theory written in it needs no translation to be sent.
`amsthm` supplies the environments, `cleveref` writes "Theorem 4.2" from a label, and the PDF is the
artifact, the same way a figure's PNG is. This option was chosen.

## The engine and the editor

**[Tectonic](https://tectonic-typesetting.github.io/)** was preferred over a full TeX Live or MiKTeX
install. It is one self-contained binary: 0.17.0, at `%LOCALAPPDATA%\Programs\tectonic`, on the user
PATH, and installed without administrator rights. On a document's first build it fetches exactly the
packages that document uses, and it reruns LaTeX until the cross-references settle. A document therefore
builds the same way on any machine that has the binary.

**LaTeX Workshop** (VS Code) builds on save with a Tectonic recipe and shows the PDF in a tab beside the
source. Ctrl+click in the PDF jumps to the source line, and ctrl+alt+j jumps the other way (SyncTeX). The
recipe is in `.vscode/settings.json`, which is gitignored because it holds this machine's absolute path
to Tectonic. On another machine it has to be set up again.

---

[Next: [The shelf](02-the-shelf.md)]
