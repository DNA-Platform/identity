---
title: The reading cost architecture
---

# The reading cost architecture

Libby: Every line read is context consumed. After a compaction, context is the scarcest resource. The library's job is to answer questions at the SHALLOWEST layer possible, so the reader never opens a book they don't need.

## The four layers

Libby: Between "I need to know something" and "I'm reading the chapter," there are four layers of synopsis. Each is richer than the last but narrower in scope. Each should make the next layer rarely necessary.

### Layer 1: The library catalogue cover (`..librarianship/.cover.md`)

Libby: The top of the library. TOC entries here are **paragraphs** — one per subject. Each paragraph describes: what the subject covers, what you'll learn, when to go deeper. Each paragraph contains **links into specific chapters** of the books below — not just to the subject catalogue cover but directly to the chapter that answers the most common question.

Libby: A reader scanning this page should be able to answer: "Is the thing I need in the protocols subject or the team subject?" And if they already know the topic: "Which specific chapter in which book has the nametag convention?" — answered by a link in the paragraph, no further navigation needed.

Libby: Budget: ~150-200 lines for the full library catalogue.

### Layer 2: The subject catalogue cover (`.protocols/.cover.md`)

Libby: One level deeper. TOC entries here are **paragraphs** — one per book in the subject. Each paragraph is SUBJECTIVE: not just "what this book covers" but "what you'll learn and why it matters from this subject's perspective." Each paragraph contains **links into specific chapters** of the book it describes.

Libby: A reader at this layer already knows which subject they need. They're deciding which BOOK. The paragraph should answer that without opening the book. "The voice-and-nametags book explains the nametag convention: every paragraph starts with `Name:`, Arthur is default, don't batch. If nametags are missing after compaction, [chapter 1](voice-and-nametags/01-the-convention.md) has the rule; [chapter 3](voice-and-nametags/03-agent-territories.md) has the territory assignments."

Libby: Budget: ~80-120 lines per subject catalogue.

### Layer 3: The book cover (`voice-and-nametags/.cover.md`)

Libby: The book's own summary. The `summary:` field is a paragraph (~50 words). The TOC entries are **2-3 sentences for reference books** (rich enough to find the right chapter) or **one line for chronological books** (autobiographies, sprint histories). Each TOC entry links to the chapter AND may link to specific sections within the chapter.

Libby: A reader at this layer already knows which book they need. They're deciding which CHAPTER. The TOC should answer that without opening any chapter.

Libby: Budget: ~40-80 lines per book cover.

### Layer 4: The chapter itself

Libby: The actual content. A reader arrives here only when layers 1-3 didn't answer their question. This is the primary source. It has no budget — it's as long as it needs to be.

## The link shortcut system

Libby: Each layer should contain links INTO deeper layers — not just to the next layer's cover but directly to specific chapters or sections. This creates shortcuts:

- Library catalogue paragraph about protocols → links to the nametag chapter directly
- Subject catalogue paragraph about a book → links to the key chapter directly  
- Book cover TOC entry → links to a specific section within the chapter

Libby: A reader who knows exactly what they need follows a shortcut and skips layers entirely. A reader who's browsing reads the summaries layer by layer. Both paths work. The links serve the expert; the summaries serve the explorer.

## The tending practice

Libby: When a book changes (new chapter, shifted focus, completed arc), three updates are required:

1. **Layer 3** — update the book's cover summary and TOC entries
2. **Layer 2** — update the subject catalogue's description of that book
3. **Layer 1** — update the library catalogue's description of that subject (if the change is significant enough to affect the subject-level summary)

Libby: Three updates per change. This is the maintenance cost of a four-layer synopsis system. The cost is paid once, by the librarian, at write time. It's recovered many times, by every reader, at read time. The library optimizes for reading because reading is the scarce operation — writing happens once, reading happens every session.

## The reading cost test

Libby: After any restructure or significant change, count the lines in the waking-up path:

- Layer 1 (CLAUDE.md + library catalogue): should be < 250 lines
- Adding Layer 2 (one subject catalogue): should add < 120 lines
- Adding Layer 3 (one book cover): should add < 80 lines
- Total for full orientation (layers 1-2 for all active subjects): should be < 400 lines

Libby: If the totals exceed these budgets, the summaries are too long or the library has too many subjects at the top level. Either compress the summaries or factor subjects into sub-subjects.

## Why four layers

Libby: The number isn't arbitrary. It maps to four questions a reader asks in sequence:

1. **"What does this library contain?"** → Layer 1 (library catalogue)
2. **"What does this subject cover?"** → Layer 2 (subject catalogue)
3. **"What does this book teach?"** → Layer 3 (book cover)
4. **"What exactly does this chapter say?"** → Layer 4 (the chapter)

Libby: Most questions are answered at layer 1 or 2. Layer 3 is for finding the right chapter in a known book. Layer 4 is for depth that no summary can replace. A well-tended library answers 80% of questions by layer 2.

<!-- citations -->
[anatomy of a book]: 01-anatomy-of-a-book.md
[subjects and catalogues]: 04-subjects-and-catalogues.md
