"""Extract what a paper book is built from: page text with page numbers, and figure page-crops.

    python 06-academic-papers-as-books--extract.py <paper.pdf> <out-dir> [--zoom 3]

WHY THIS EXISTS. [On Academic Papers as Books](06-academic-papers-as-books.md) has carried an open
box since it was written - *"Build a scaffolding script: given a PDF, extract figures, create stub
cover and chapter files"* - and every book on the shelf was made by hand against it. Two of the
convention's rules cannot be met without machinery: **provenance is non-negotiable**, which needs
`[source: paper, p.X]` and therefore needs the page a sentence is actually on; and **figures are
first-class chapters**, which needs a `NN-figN-name.png` beside every `NN-figN-name.md`.

WHAT IT WRITES into the output directory:

    pages.txt      every page, each preceded by `=== p.N ===`. This is the reading copy, and the
                   page markers are what provenance tags cite. Nothing is reflowed or cleaned:
                   a book quoting the paper has to quote what the paper says.
    figures.json   one record per detected figure - number, page, and the caption as printed
    figNN.png      the page each figure is on, rendered at `--zoom` (3x by convention), so the
                   crop carries the panels AND the caption exactly as the reader would see them

WHY WHOLE PAGES RATHER THAN CROPPED ARTWORK. The convention asks for page crops on purpose: the
caption is part of the figure, and a chapter quoting a caption next to a picture that was cut away
from it invites the two drifting apart. A page holding two figures is written once and named for
both, because it is one picture of one page.

FIGURE DETECTION is deliberately dull: a text block whose first line opens with `Figure N` or
`Fig. N` is a caption, and the page it sits on is that figure's page. Supplementary figures are
matched separately and prefixed `S`, so `figS1.png` never collides with `fig1.png`. Anything the
matcher misses is reported by number at the end rather than silently dropped - a missing figure
chapter is the kind of gap that looks like a decision.

NOT A SCAFFOLDER OF PROSE. It does not write chapter stubs. The convention's first principle is
that *the book is the reading* - chapters are the byproduct of having read - and a directory of
empty chapters with the right names is exactly the artifact that makes a reader think the reading
happened. Everything here is mechanical: text, page numbers, pictures.
"""
from __future__ import annotations

import json
import re
import sys
from pathlib import Path

try:
    import fitz                                    # PyMuPDF
except ImportError:                                # pragma: no cover - environment, not logic
    raise SystemExit("PyMuPDF is needed: pip install pymupdf")

ZOOM = 3.0                    # the convention's own magnification
# A CAPTION OPENS A BLOCK AND IS FOLLOWED BY ITS TITLE - the lookahead is what separates the
# caption from a mid-sentence reference. Measured on Momi 2026: without it, the block beginning
# `Figure S5), reaching significance relative to saline...` on p.8 was taken as figure S5 and a
# body page was rendered as artwork. A real caption is followed by a stop, a colon, Nature's `|`,
# or directly by its capitalised title; a reference is followed by a bracket or a comma.
CAPTION = re.compile(r"^\s*(Supplementary\s+|Supplemental\s+|Extended\s+Data\s+)?"
                     r"(?:Figure|Fig\.?)\s*(S?\d+)\s*(?=[.:|]|\s+[A-Z])", re.IGNORECASE)


def _label(prefix: str | None, number: str) -> str:
    """`fig3`, or `figS3` for anything the paper calls supplementary."""
    number = number.upper()
    supplementary = bool(prefix) or number.startswith("S")
    digits = number.lstrip("S")
    return f"fig{'S' if supplementary else ''}{digits}"


def captions(document) -> dict:
    """{label: {"figure", "page", "caption"}} - the FIRST page a caption appears on wins, because
    a figure referenced again later is a reference and not the figure."""
    found = {}
    for index, page in enumerate(document, start=1):
        for block in page.get_text("blocks"):
            text = block[4].strip()
            if not text:
                continue
            match = CAPTION.match(text)
            if not match:
                continue
            label = _label(match.group(1), match.group(2))
            if label in found:
                continue
            found[label] = {"figure": label, "page": index,
                            "caption": re.sub(r"\s+", " ", text).strip()}
    return found


def pages(document) -> str:
    """The whole paper as text, with the page markers a provenance tag cites."""
    out = []
    for index, page in enumerate(document, start=1):
        out.append(f"=== p.{index} ===")
        out.append(page.get_text())
    return "\n".join(out)


def extract(pdf: Path, out: Path, zoom: float = ZOOM) -> dict:
    document = fitz.open(pdf)
    out.mkdir(parents=True, exist_ok=True)

    (out / "pages.txt").write_text(pages(document), encoding="utf-8")
    print(f"  pages.txt      {document.page_count} pages", flush=True)

    found = captions(document)
    # ONE RENDER PER PAGE, however many figures are on it - the picture is of the page.
    rendered = {}
    for label, record in sorted(found.items(), key=lambda kv: (kv[1]["page"], kv[0])):
        page_number = record["page"]
        if page_number not in rendered:
            picture = document[page_number - 1].get_pixmap(matrix=fitz.Matrix(zoom, zoom))
            rendered[page_number] = picture
        target = out / f"{label}.png"
        rendered[page_number].save(target)
        record["file"] = target.name
        print(f"  {target.name:<12}  p.{page_number:<3} {record['caption'][:64]}", flush=True)

    (out / "figures.json").write_text(json.dumps(list(found.values()), indent=1), encoding="utf-8")

    # A GAP IN THE NUMBERING IS REPORTED, never left to be discovered by its absence.
    numbers = sorted(int(r["figure"].removeprefix("figS").removeprefix("fig"))
                     for r in found.values() if not r["figure"].startswith("figS"))
    missing = [n for n in range(1, (max(numbers) if numbers else 0) + 1) if n not in numbers]
    if missing:
        print(f"  NOT FOUND: figure(s) {missing} - the matcher missed them, add by hand",
              flush=True)
    document.close()
    return found


def main(argv: list[str]) -> None:
    if len(argv) < 2:
        raise SystemExit(__doc__.strip().splitlines()[2].strip())
    zoom = float(argv[argv.index("--zoom") + 1]) if "--zoom" in argv else ZOOM
    positional = [a for a in argv if not a.startswith("--")
                  and a != (argv[argv.index("--zoom") + 1] if "--zoom" in argv else None)]
    pdf, out = Path(positional[0]), Path(positional[1])
    print(f"{pdf.name} -> {out}/  at {zoom:g}x", flush=True)
    found = extract(pdf, out, zoom)
    print(f"  {len(found)} figures", flush=True)


if __name__ == "__main__":
    main(sys.argv[1:])
