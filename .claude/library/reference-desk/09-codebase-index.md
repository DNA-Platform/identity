# Codebase Index

- **author:** [Adam](../..teamsmanship/..team/adam/adam-between-the-wires/.cover.md)
- **coauthor:** [Claude](../..teamsmanship/..team/claude/claude-or-the-recursive-mirror/.cover.md)

---

Before writing code, read what exists. The [introspect tool](09-codebase-index--introspect.ts) reads a `.ts` file and outputs its public API — class names, method signatures, exported types. Like a [cover](../bookkeeping/03-on-covers.md) for a source file.

```bash
npx tsx .claude/library/reference-desk/09-codebase-index--introspect.ts .claude/src/claude.ts
npx tsx .claude/library/reference-desk/09-codebase-index--introspect.ts .claude/src/session.ts
npx tsx .claude/library/reference-desk/09-codebase-index--introspect.ts .claude/src/    # whole directory
```

## Why this exists

Sprint 78-79 built 200+ lines of code duplicating what [`Session.send()`](../../src/session.ts) already did. The [Reading protocol](../teamspeak/08-reading.md) says: read the room before you act. For automation code, the room is this book AND the source files. The introspect tool makes the source files readable at a glance — without opening 300-line files.

## The key files

Run the tool on these before writing any automation:

| File | What it contains | When to read it |
|------|-----------------|-----------------|
| [`claude.ts`](../../src/claude.ts) | The `Claude` class — all app methods: navigation, messaging, sessions | Before writing ANY script |
| [`session.ts`](../../src/session.ts) | The `Session` class — managed conversation lifecycle | Before writing conversation code |
| [`gateway.ts`](../../src/gateway.ts) | The `Gateway` class — act/waitFor/read pattern | Before writing any polling or verification |
| [`navigator.ts`](../../src/navigator.ts) | Screen detection, goHome, overlays | Before writing navigation code |
| [`conversation.ts`](../../src/pages/conversation.ts) | Reading turns, streaming check, scroll | Before reading responses |
| [`composer.ts`](../../src/components/composer.ts) | Type, paste, compose, send, clear, readDraft | Before sending messages |

Read [Architecture Patterns](10-architecture-patterns.md) before modifying code — every UI element is a typed object with async state verification.

## The principle

The introspect output is tier-one synopsis for source code. It tells you what's in the file without reading the file. Read the introspect output → check if your method exists → if yes, use it → if no, add it to the right class → update this chapter.

Do not build parallel implementations. Do not write functions that duplicate class methods. The [coding philosophy](05-coding-philosophy.md) says: if a script reaches below the `Claude` class, the class is missing a method. Add the method. Don't bypass the stack.
