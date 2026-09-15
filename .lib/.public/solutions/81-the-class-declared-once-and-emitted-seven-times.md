# The class declared once and emitted seven times

- **author:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **coauthor:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **sprint:** [Sprint 72 — The Compilation Audit](../projection/78-sprint-72--the-compilation-audit.md)

---

**Keywords:** `tooling` · `model` · `split-emission` *(proxy name, flagged for Doug)* · a lesson learned in one half of a file and not the other · nominal types from two programs · every build green and every page right

## The symptom

***Two demo bindings reported 117 type errors, every one of them in files the binder GENERATES, while every build was green and every page drew correctly.***

```
application/books/aaronson.tsx(18,16): error TS2769: No overload matches this call.
  The last overload gave the following error.
    Argument of type 'typeof $Aaronson' is not assignable to parameter of type 'string'.
```

```
Its type '$Chemical' is not a valid JSX element type.            ← 38 of them
```

```
Type 'Promise<typeof import(".../application/books/.article")>'
  is not assignable to type 'Promise<{ book: $Book; }>'.
```

**What made it read as noise rather than as a defect:** the bindings' `tsc` had never been claimed green — [Sprint 70](../projection/76-sprint-70--the-binding.md) and [Sprint 71](../projection/77-sprint-71--compilation.md) both report *"tsc 0 in the package and the master binding"*, scoped exactly that way — so 117 errors looked like a number that had always been there and belonged to somebody else.

## Two causes, and the first one was a decoy

***The first reading was right and incomplete, which is the worse kind.*** A book file outside `.binding` resolves a package by walking up its OWN folders, and inside this repository that reaches the workspace checkout before the binding's `node_modules`. Two copies of chemistry, two `$Chemical` types. `vite.config.ts` had solved that for the RUNTIME in Sprint 70:

```ts
resolve: { dedupe: ['react', 'react-dom', 'styled-components', '@dna-platform/chemistry', '@dna-platform/public'] },
```

***and nothing said the same thing to `tsc`.*** Saying it — a `paths` mapping over the same two packages — took 117 errors to **4**. It read like a complete fix, and the four survivors are what the chapter is about.

## The mechanism: one class, seven programs

**`rollup.config.js` built the package's types with SEVEN separate `dts` rollups, one per door.** A separate rollup is a separate program, and a separate program **emits its own copy of every type it reaches**. So `$Book` was declared in `lib.d.ts` and declared again in `encyclopedia.d.ts`, and a book written against the encyclopedia door was not a `$Book` to anything typed through the main one — nominally different classes with identical source.

***And the file already knew.*** Twelve lines above, the CODE build carries the fix and the reason, written by an earlier sprint that had paid for it:

> ***`rollup.config.js`, before this sprint:*** *"ONE BUILD, SIX DOORS. The surfaces were separate builds, and a separate build DEFINES ITS OWN COPY of everything it reaches — `$BodyFormat`, `$ContentFormat` and `$Theme` each stood twice, once in lib and once in encyclopedia, with encyclopedia importing nothing from lib. DI keys on the component object, so a demo registering encyclopedia's copy could never match the one `$Book` fetched from lib's: the registration was silently dead and the portal drew in the wrong dress."*

**The same sentence is true of the types, and the types were left as seven programs.** The lesson had been learned, written down, and applied to one half of one file.

## The fix

One rollup with the same input map the code build uses, chunked:

```js
const types = {
    input: doors,
    output: { dir: 'dist', format: 'es', entryFileNames: '[name].d.ts', chunkFileNames: 'chunks/[name]-[hash].d.ts' },
    plugins: [at(), dts({ tsconfig: './tsconfig.build.json' })],
    onwarn
};
module.exports = quick ? [code] : [code, types];
```

**`encyclopedia.d.ts` now imports `$Book` from a shared chunk instead of declaring one**, which is checkable in one line:

```
grep -c "declare class \$Book\b" dist/lib.d.ts dist/encyclopedia.d.ts   →  0  0
```

**117 → 4 → 0** across all three bindings.

## Prevention, and it is the interesting part

***Neither half of this was found by a test, because nothing was wrong at runtime.*** The pages drew, the suites passed, and a nominal type mismatch is invisible to everything except the checker nobody was running.

- **A gate that is scoped is scoped in the report.** *"tsc 0 in the package and the master binding"* was honest and precise, and precisely because it was honest it made the unmeasured place easy to leave unmeasured. **Where a number excludes something, say what it excludes and why** — otherwise the exclusion becomes the habit.
- **When a config solves a problem for one artifact, ask what the SIBLING artifact does.** Runtime resolution and type resolution are the same question asked of two tools; so are a code bundle and a type bundle. *The tell here was literal adjacency — the answer was twelve lines above the bug, in the same file, with the reasoning written out.*
- **A package with several doors has a duplicate-class hazard by construction**, and it is silent in both registers: at runtime a registration keyed on the class object is dead, at compile a subclass of one door's base is not the other door's base. **One emission, shared chunks, every door importing them** is the single answer to both.

*Found and fixed 2026-09-15 in [Sprint 72](../projection/78-sprint-72--the-compilation-audit.md), while chasing something else entirely.*
