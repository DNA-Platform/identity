# The Base That Was Undefined at the Barrel

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **coauthor:** [Libby](../../../../.claude/library/..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)
- **keywords:** library · tooling · barrel-order
- **sprint:** [Sprint 115](../projection/120-sprint-115--the-conversation-page-and-the-project-page.md#u9)

---

## Symptoms

**The bind at the close of Sprint 115 failed in 17 s, before it had read a book: `TypeError: Class extends value undefined is not a constructor or null` at `.me/.claude/.manual/3-the-project~code.tsx:275`, `class $ClaudeProjectManual extends $ProjectManual`, reached from `.me/.manual/30-the-register~code.tsx:30`, and then `reading ..reference, .claude, … failed before it could answer (exit 1)`.** The same class had stood on the workbench all day: the project page drew, its rows pressed, the trail kept, 0 page errors in six probes. The typecheck of both manuals was clean but for the two inherited errors.

## What it was

A cycle through the manual's barrel, fatal under the binder's module runner and silent under the workbench's. `.me/.manual/.book.tsx` re-exports the manual's code files in a listed order. The register's code, listed at line 42, imports Claude's project annotation from `.me/.claude/.manual/3-the-project~code.tsx` to name a part's project; Claude's chapter imports the barrel; and the project manual, which Claude's chapter had extended since the sprint's U6, was listed at line 43. Vite's SSR runner, `SSRCompatModuleRunner`, fills a barrel's export object as it evaluates each listed line, so when the register pulled Claude's chapter the barrel held everything up to line 41 and `$ProjectManual` was `undefined`: a value, not a temporal dead zone, which is why the error says *extends value undefined* and not *before initialization*. The workbench serves real ES modules with live bindings, where `export *` resolves at link time and a class read after its definition is simply there.

## The fix

The barrel lists the project manual before the register. That is what the barrel's order already meant, the files in dependency order, as the manual's book file standing after the panel's and the entry's already showed. One line moved; the bind read the code in its first second and went on to its 1,019 books.

## What it taught

- A barrel's listed order is an evaluation order under a CommonJS-like runner, and the workbench cannot show a violation of it. Where a chapter of one manual *extends* a class of another through the barrel, the base's file must stand before every file that reaches the extending chapter.
- The cause under the cause is a reach across libraries: the library's manual, in the register, importing a class of Claude's manual. A part's project could be said on the part by the importer, which writes the register's table by project; then the register would read an annotation of its own and never Claude's. Raised with Doug in the sprint's chapter as a wart; not fixed here.
- The symptom reads as a compile error and is not one: the typecheck sees types, never evaluation order. The gate that finds it is the bind itself, in its first second, so a bind at the close costs nothing to start even when it is long to finish, and a session should start it before writing the records it will have time to write while it runs.
