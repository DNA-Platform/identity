# On Synopsis

- **specification:** Synopsis
- **author:** [Libby](../..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)

---

Every line read is context consumed. After a compaction, context is the scarcest resource. The library's job is to answer questions at the shallowest layer possible, so the reader never opens a [book](01-on-books.md) they don't need. Synopsis — the summary at each layer — is how the library pays for depth with brevity.

## The four layers

Between "I need to know something" and "I'm reading the chapter," there are four layers. Each is richer than the last but narrower in scope. Each should make the next rarely necessary.

### Layer 0: The name

The [name](04-on-names.md) of a book, a chapter, a subject. Read in every [link](06-on-links.md), every listing, at zero cost — no file needs to be opened. *Bookkeeping* tells you the book specifies how books work. *On Covers* tells you the chapter is about covers. The name carries identity before any file is read. This is tier-zero synopsis — the densest possible description.

### Layer 1: The library catalogue

The [library catalogue](08-on-libraries.md) cover ([`..librarianship/.cover.md`](../..librarianship/.cover.md)). TOC entries are **paragraphs** — one per subject. Each paragraph: what the subject covers, what you'll learn, when to go deeper. Each paragraph contains [links into specific chapters](06-on-links.md#section-targets) — not just to the subject catalogue but directly to the chapter that answers the most common question.

A reader scanning this page answers: "Is what I need in Knowledge or Collaboration?" And if they already know the topic: "Which chapter has the nametag convention?" — answered by a link in the paragraph, no further navigation.

**Budget: ~150-200 lines** for the full library catalogue.

### Layer 2: The subject catalogue

The [subject catalogue](07-on-subjects.md) cover (e.g., `..teamsmanship/.cover.md`). TOC entries are **paragraphs** — one per book in the subject. Each paragraph is subject-shaped: not just "what this book covers" but "what you'll learn from this subject's perspective." Each paragraph contains links into specific chapters.

A reader at this layer knows which subject. They're deciding which book. The paragraph answers that without opening the book.

**Budget: ~80-120 lines** per subject catalogue.

### Layer 3: The book cover

The [cover](03-on-covers.md) (`bookkeeping/.cover.md`). An opening paragraph (what this book is). A table of contents where each entry is 2-3 sentences for reference books, one line for chronological books. TOC entries may link into specific sections within chapters.

A reader at this layer knows which book. They're deciding which chapter.

**Budget: ~40-80 lines** per book cover.

### Layer 4: The chapter

The [chapter](02-on-chapters.md) itself. Primary source. A reader arrives here only when layers 0-3 didn't answer their question. No budget — it's as long as it needs to be.

## The shortcut system

Each layer contains links INTO deeper layers — not just to the next layer's cover but directly to specific chapters or sections. This creates shortcuts:

- Library catalogue paragraph about Knowledge -> links to a specific Bookkeeping chapter
- Subject catalogue paragraph about a book -> links to the key chapter directly
- Book cover TOC entry -> links to a specific section within the chapter

A reader who knows exactly what they need follows a shortcut and skips layers entirely. A reader who's browsing reads the synopses layer by layer. Both paths work. The links serve the expert; the synopses serve the explorer.

## Write for evolution

The library grows. Books gain chapters. Subjects gain books. Teammates arrive. A synopsis, a description, a catalogue entry — these are all claims about the library's content. If the claim encodes a fact that will change when someone ELSE adds content, the claim is anti-evolution. It generates consistency debt every time the library grows.

### Anti-evolution patterns

Avoid these in synopses, catalogue entries, and any description that is meant to stay true:

- **Hardcoded counts.** "Seven chapters covering X" — wrong the moment an eighth arrives. Write "chapters covering X, Y, and Z" instead. Describe the arc, not the number.
- **Exhaustive listings.** "Nine teammates: Arthur, Cathy, ..." — wrong when a tenth arrives. Link to the authoritative source ([Territory](../..teamsmanship/05-territory.md), [Teamsmanship](../..teamsmanship/.cover.md)) instead of copying the list.
- **Sprint numbers as currency.** "The current implementation (since sprint 27)" — stale when sprint 40 changes it. Describe the behavior, not when it became current. Sprint numbers are fine as historical markers ("discovered in sprint 24") but not as currency markers.
- **State snapshots.** "The library has 49 books" — a photograph, not a description. "The library catalogues three subjects" — also a snapshot. Write "the library catalogues Knowledge, Collaboration, and The Environment" which stays true regardless of how many books each subject contains.
- **The word "current."** A flag that the sentence encodes a moment. "The current validator checks X" will be wrong when Y is added. "The validator checks structural validity" stays true.
- **Content duplication.** Copying content from another file instead of summarizing it with a [link](06-on-links.md). The copy becomes a snapshot that diverges from the source. Summarize and link — per the [four layers](#the-four-layers), each layer makes the next rarely necessary.
- **Implementation-specific examples.** "On line 47 of `molecule.ts`" — the line will change. Reference the concept ("the bond graph allocation in `$Molecule`'s constructor"), not the location.
- **Tool output.** "Running the validator produces: 49 books, 325 chapters" — different next sprint. Document what the tool does, not what it said last time.

Per [On Names](04-on-names.md#timelessness): names should be timeless. Synopses should be too. Everything written in the library is a claim about what the library contains. Make claims that survive growth.

## The tending practice

When content changes, three updates are required:

1. **Layer 3** — update the book's cover synopsis and TOC entries
2. **Layer 2** — update the subject catalogue's description of that book
3. **Layer 1** — update the library catalogue's description of that subject (if significant)

Three updates per change. The cost is paid once, by the author, at write time. It's recovered many times, by every reader, at read time. The library optimizes for reading because reading is the scarce operation — writing happens once, reading happens every session.

## The reading cost test

After any restructure, count the lines in the waking-up path:

- Layer 1 (CLAUDE.md + library catalogue): < 250 lines
- Adding layer 2 (one subject catalogue): < 120 additional lines
- Adding layer 3 (one book cover): < 80 additional lines
- Full orientation (layers 1-2 for all active subjects): < 400 lines

If totals exceed these budgets, the synopses are too long or the library has too many subjects at the top level. Either compress the synopses or factor subjects into sub-subjects. See [On Evolution](10-on-evolution.md).

## Why four layers

The number maps to four questions a reader asks in sequence:

1. "What does this library contain?" -> Layer 1
2. "What does this subject cover?" -> Layer 2
3. "What does this book teach?" -> Layer 3
4. "What exactly does this chapter say?" -> Layer 4

A well-tended library answers 80% of questions by layer 2. Layer 3 is for finding the right chapter in a known book. Layer 4 is for depth no synopsis can replace.

<!-- citations -->
[books]: 01-on-books.md
[chapters]: 02-on-chapters.md
[covers]: 03-on-covers.md
[names]: 04-on-names.md
[links]: 06-on-links.md
[subjects]: 07-on-subjects.md
[libraries]: 08-on-libraries.md
[growth]: 10-on-evolution.md
[librarianship]: ../..librarianship/.cover.md
