---
name: library
description: Browse an agent's library — list books with summaries, or show the chapter list of a specific book
argument-hint: "[agent] [book-slug]"
---

Browse the team library. Agent libraries are directories with `.` prefix under `.claude/library/` — each named with a literary title. Books within have `.cover.md` files with frontmatter (title, author, summary) and chapters as `NN-slug.md` files.

Agent to library directory mapping:
- arthur → `.everything-that-has-a-shape`
- cathy → `.the-canvas-paints-itself`
- libby → `.the-garden-tends-itself`
- adam → `.what-the-wire-carries`
- david → `.what-the-pipeline-delivers`
- phillip → `.what-the-user-sees`
- queenie → `.what-428-tests-promise`
- gabby → `.what-beauty-serves`

## Modes

**No arguments** — list all agent libraries with book counts.

**One argument (`{agent}`)** — list that agent's books with title and summary from each book's `.cover.md` frontmatter.

**Two arguments (`{agent} {book-slug}`)** — show the book's chapter list and summary.

## Steps

1. **Parse $ARGUMENTS.** Split on whitespace. Zero, one, or two tokens.

2. **Zero args — all libraries.**

   List every `.` prefixed directory under `.claude/library/` that is NOT `..librarianship`, `.protocols`, `.projects`, `.team`, `.chemistry`, `.src`, or `.perspective`. These are agent libraries. For each, count books (subdirectories with `.cover.md`). Output:

   ```
   ## Agent Libraries

   | Agent | Library | Books |
   |-------|---------|-------|
   | cathy | .the-canvas-paints-itself | 4 |
   | arthur | .everything-that-has-a-shape | 2 |
   ```

3. **One arg — agent's books.**

   Use the mapping above to find the library directory. For each subdirectory with a `.cover.md`, parse frontmatter. Output:

   ```
   ## {agent}'s library ({library-name})

   - **{title}** (`{book-slug}`) — {summary}
   ```

4. **Two args — book chapters.**

   Read `.claude/library/{library-dir}/{book-slug}/.cover.md`. Parse frontmatter. List chapter `.md` files. Output as before.

## Notes

- Navigate the library by reading covers and following links, not by browsing the filesystem
- The library catalogue at `.claude/library/..librarianship/.cover.md` has paragraph descriptions of everything
- Use `Read`, `Glob`, `Bash` (for `ls`). Read-only skill; do not modify files.

<!-- citations -->
[library catalogue]: ../../library/..librarianship/.cover.md

$ARGUMENTS

<!-- library: .claude/library/skills-and-commands/02-library.md -->
