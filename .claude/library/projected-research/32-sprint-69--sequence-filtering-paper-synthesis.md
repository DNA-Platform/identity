# Sprint 69 — Sequence Filtering (Paper Synthesis)

Arthur: Sprint 68 was an export update sprint — parse, diff, update the archive. Sprint 69 shifts to the neuroscience shelf. Doug added a new paper: **Sequence Filtering** by Histed (2025). We use the established paper-as-book procedure to synthesize it into a navigable reading companion — the same approach that produced the Digital Twins and Functional Connectomics books.

## Goal

Nancy + Theo: Read the paper, write the book. Writing the book IS reading the paper — chapters are the byproduct of careful reading, not post-hoc summaries. Every claim carries provenance tags. Figures are first-class chapters with extracted PNGs. The PDF is the authority; the book wraps around it.

## Hard rules

1. **Provenance is non-negotiable** — every substantive claim carries a source tag: `[source: paper, p.X]`, `[source: paper, Fig N caption]`, `[source: web, URL]`, `[source: interpretation]`. No unattributed claims.
2. **Chapter names are descriptive** — not "Methods" but "How sequence filtering shapes cortical responses." The name should tell the reader what they'll learn.
3. **Figures are first-class** — each figure gets a `.md` + `.png` pair using the resource pattern. Panel-by-panel explanations. Full quoted captions.
4. **Follow the [librarianship field guide]** — the procedure is documented. Don't deviate.

## Team

| Agent | Role | Responsibility |
|-------|------|----------------|
| Arthur | Architect | Sprint coordination, structure decisions |
| Nancy | Neuroscientist | Primary reader — experimental methods, biological grounding, circuits |
| Theo | Theorist | Mathematical structure, statistical methods, theoretical framework |
| Libby | Librarian | Library conventions, cross-links, catalogue, navigation |

## Paper

- **PDF:** `library/neuroscience/sequence-filtering-histed-2025/Sequence Filtering - Histed - 2025.pdf`
- **Status:** PDF only, no book structure yet

## Stories

### S-1: Read the paper (Nancy + Theo)

Nancy: Read the full PDF page by page. Identify the structure: how many main figures, supplementary figures, key methods, central claims, relationship to the existing Tolias papers.

Theo: Track the mathematical framework — models, statistics, theoretical claims.

**Acceptance:**
- [ ] Paper fully read, structure mapped
- [ ] Number of figures and supplementary figures catalogued
- [ ] Key methods identified
- [ ] Relationship to existing neuroscience books noted

### S-2: Create the book structure (Arthur + Libby)

Arthur: Create the folder structure following the established convention.

Libby: Verify conventions — cover frontmatter, TOC format, navigation links, resource pairs.

**Acceptance:**
- [ ] PDF renamed to slug format: `sequence-filtering-histed-2025.pdf`
- [ ] `.cover.md` with frontmatter (title linking to PDF, author, summary, year, journal, DOI, paper-authors)
- [ ] Chapter stubs created: synopsis, authors, abstract, section chapters (descriptively named), references, commentary, glossary
- [ ] Figure chapter stubs created (one per figure, `.md` + `.png` pairs)

### S-3: Extract figures (Adam)

Adam: Use PyMuPDF (fitz) at 3× zoom to extract page crops of each figure with caption text. Save as `NN-figN-descriptive-name.png` alongside `NN-figN-descriptive-name.md`.

**Acceptance:**
- [ ] All main figures extracted as PNGs at 3× zoom
- [ ] Supplementary figures extracted if warranted
- [ ] Each PNG includes the caption text from the page
- [ ] Extraction script or commands documented

### S-4: Write the section chapters (Nancy + Theo)

Nancy: Biological content — what was measured, how, what the data shows, experimental design, cell types, circuits.

Theo: Mathematical framework — models, statistics, theoretical implications, formal claims.

**Acceptance:**
- [ ] Synopsis chapter: title explained, paper in one paragraph
- [ ] Authors chapter: who, where, institutional context
- [ ] Abstract chapter: plain language claim + direct quote + key terms
- [ ] Section chapters (intro through discussion): descriptive names, provenance-tagged claims
- [ ] Every chapter has book link at top, prev/next at bottom

### S-5: Write figure chapters (Nancy + Theo)

Nancy + Theo: Panel-by-panel explanations. Full quoted captions. What you're looking at and why it matters.

**Acceptance:**
- [ ] Every figure has a `.md` chapter alongside its `.png`
- [ ] Panels explained individually
- [ ] Captions quoted in full
- [ ] Inline links from text chapters to figure chapters and vice versa

### S-6: Commentary, glossary, references (Theo + Libby)

Theo: Commentary — significance, field context, relationship to the two Tolias papers.

Libby: Glossary — technical terms defined. References — citation network with DOIs. Cross-links to existing books. Update `.notes/.cover.md` with 03-NN section.

**Acceptance:**
- [ ] Commentary chapter written with field context
- [ ] Glossary with all technical terms defined
- [ ] References with DOIs grouped by topic
- [ ] Cross-links to Digital Twins and Functional Connectomics where relevant
- [ ] `.notes/.cover.md` updated with paper 03 entries
- [ ] Cover TOC has descriptive synopses for every chapter

### S-7: Commit and push

Arthur: Clean commit, verify all files, push.

**Acceptance:**
- [ ] All book files committed (cover, chapters, PNGs, PDF slug rename)
- [ ] Navigation links verified
- [ ] Pushed to origin

## Order

1. S-1 (read the paper — determines everything else)
2. S-2 + S-3 in parallel (structure + figure extraction)
3. S-4 (section chapters — the core reading)
4. S-5 (figure chapters — enriches the section chapters)
5. S-6 (commentary, glossary, references, cross-links)
6. S-7 (commit and push)

## Success criteria

- [ ] Paper fully read and understood
- [ ] Book folder complete: cover, all section chapters, all figure chapters with PNGs, glossary, commentary, references
- [ ] Every chapter has provenance tags on substantive claims
- [ ] Cover TOC has descriptive synopses for each chapter
- [ ] Navigation links work (prev/next, book link)
- [ ] Cross-links to existing neuroscience books where relevant
- [ ] Notes index updated with 03-NN entries
- [ ] Committed and pushed to origin

<!-- citations -->
[librarianship field guide]: ../..librarianship/06-academic-papers-as-books.md
