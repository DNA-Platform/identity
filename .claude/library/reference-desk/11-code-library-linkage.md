# Code-Library Linkage

- **author:** [Libby](../..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)
- **coauthor:** [Adam](../..teamsmanship/..team/adam/adam-between-the-wires/.cover.md)

---

Code changes objectively. The [Reference Desk](.cover.md) changes subjectively. The linkage between them is relational — the points where a programmer says "this is what I'm building, and here is the room in the library where you can understand why."

## The `///:` annotation

Every `.ts` file in `.claude/src/` can carry a library annotation at the top. Lines starting with `///:` are library content — markdown with real links, written in the same prose style as the library itself. The [introspect tool](09-codebase-index--introspect.ts) strips the `///:` prefix and displays the annotation as markdown alongside the file's public API. The [link checker](../..environmentalism/05-on-validation--check-links.ts) validates every link in these annotations, the same way it validates links in `.md` files.

The `///:` prefix is distinct from TypeScript's `/// <reference>` directives (which use angle brackets). It belongs to the library.

## What to write

The annotation is a table of contents for the file's connections to the library. Authors write as much or as little as the file needs. A utility module might need one line. A core architectural file might need ten. There is no template. The test: could a teammate read this annotation and know where to look in the library to understand the patterns this code instantiates?

Good annotations:
- Name the [Reference Desk](.cover.md) chapters that describe the patterns at work
- Explain why, not just which — "the verify must be a [controller sensor](02-02-the-architecture--gateway.md#sensors-and-actuators)" tells you more than a bare link
- Use markdown links to the library, relative from the file's location

Links from `src/` use `../library/reference-desk/`. Links from `src/controllers/`, `src/components/`, or `src/pages/` use `../../library/reference-desk/`.

## The introspect tool

The [introspect tool](09-codebase-index--introspect.ts) reads `.ts` files and outputs two things side by side: the library annotation and the public API (classes, interfaces, methods, exports). Run it on a file or a directory.

```bash
npx tsx .claude/library/reference-desk/09-codebase-index--introspect.ts .claude/src/gateway.ts
npx tsx .claude/library/reference-desk/09-codebase-index--introspect.ts .claude/src/
npx tsx .claude/library/reference-desk/09-codebase-index--introspect.ts .claude/src/controllers/
```

The output is markdown. The annotation links render in any markdown viewer. The API section lists classes, interfaces, types, methods, and getters with line numbers. This is the compact representation of a source file — library context and code interface in one view.

## The link checker

The [link checker](../..environmentalism/05-on-validation--check-links.ts) scans both `.md` and `.ts` files. For `.ts` files, it extracts the `///:` block, strips the prefix, and feeds the resulting markdown to the CommonMark parser — the same parser used for library content. Every link is resolved relative to the file's location and checked for existence on disk. The [/audit skill](../our-skillset/18-audit.md) runs this as part of the full library check.

## The direction

Code references the library. The library describes patterns. This direction matters:

- **Code links are stable** because the library's chapter filenames are stable — they follow [On Names](../bookkeeping/04-on-names.md) and change rarely.
- **Library links to code are fragile** because code refactors constantly — methods rename, files move, classes split. The Reference Desk describes patterns and mentions implementation files, but the annotations are the authoritative bridge from code to library.

When the code changes, update the annotation. When a Reference Desk chapter changes, the link checker catches broken annotation links. The two representations stay connected through checked links, not through hopes.
