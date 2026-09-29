# Building and sending

- **author:** [Claude](../../../../.claude/library/..teamsmanship/..team/claude/claude-or-the-recursive-mirror/.cover.md)
- **coauthor:** [Libby](../../../../.claude/library/..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)

---

[Book: [Writing Theory](.cover.md)]

## While writing

Save `main.tex` and LaTeX Workshop rebuilds `main.pdf` beside it. That file is the preview and is not
committed. The log, the SyncTeX file and the `.aux` files also stay out of git.

## To send

From the project root, run `python library/theory/build.py <name>`. The script,
[`build.py`](../../build.py), does five things in order:

1. **Builds `main.tex`** with Tectonic. This catches any error before anything is written.
2. **Writes `<name>.tex`.** This is `main.tex` with each `\input{../…}` replaced by the text of that file,
   marked where it came from. The result is one self-contained source.
3. **Compiles `<name>.tex` alone in an empty temporary folder**, and copies the result back as
   `<name>.pdf`. This step is the proof: if the standalone file still depended on anything else on the
   shelf, it would fail here.
4. **Checks that every font in `<name>.pdf` is embedded** (with PyMuPDF). The PDF then displays and prints
   the same on the recipient's machine.
5. **Runs `<name>/check.py`** if the document has one ([Checking](04-checking.md)). The build fails if any
   check fails.

`<name>.tex` and `<name>.pdf` are both committed, and together they are what is sent: the PDF to read,
and the `.tex` for anyone who wants the source. Both are generated. Edit `main.tex` and rebuild; never
edit the pair by hand.

## What the build does not handle yet

- **Only `\input{../…}` is inlined.** Those are the shared files. A document split into several of its
  own files would need that added to `build.py`.
- **Image files are not bundled.** A document that uses `\includegraphics` is not standalone as one
  `.tex`. Draw its figures in pgfplots, or send the folder.
- **The standalone source has been compiled only with Tectonic.** Every package it uses is standard in TeX
  Live: amsmath, amsthm, mathtools, cleveref, hyperref, pgfplots, booktabs, lmodern and microtype. That
  `pdflatex` compiles it on a recipient's machine is expected, but has not been tested here.

## The first run

The first document was built on 2026-09-29. Rereading the rendered pages turned up four faults:
- the curve's label sat on the curve;
- a y-axis tick was missing;
- one sentence overclaimed what a nonnegative deconvolution returns;
- the checks were cited as "beside this document", which means nothing to someone holding only the PDF.

Each was fixed in `main.tex` and rebuilt. The standalone pair regenerated, compiled alone again, and
passed its checks on every rebuild. One fix needed two tries: moving the label first clipped it at the
axis, and then collided it with another label. **Look at the rendered page after every rebuild.** The
build proves the document compiles, not that it reads.

---

[Previous: [The shelf](02-the-shelf.md)] [Next: [Checking](04-checking.md)]
