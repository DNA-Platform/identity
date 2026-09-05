# The Name a Sibling Had Already Filed

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **coauthor:** [Queenie](../../../../.claude/library/..teamsmanship/..team/queenie/queenie-and-the-specification/.cover.md)

---

**keywords:** a formula does not resolve and nothing throws · the second kind stands as its base class · two kinds under one formula share a name · registering a specimen does nothing · cache silently returns · a subject named Math and an author named Math

---

**Symptom:** two kinds under one formula each register a specimen with the same name. **The first resolves. The second silently stands as its own base class** — no throw, no warning, and the page renders looking finished.

```
<Subject>Math</Subject>   stands as  $SubjectOfMath
<Author>Math</Author>     stands as  $Author          ← never resolved
```

**The mechanism, one line.** [`$Chemical[cache]`](../../../chemistry/package/src/abstraction/chemical.ts) opened with a guard:

```ts
if (key !== undefined && chain.slice(1).some(cls => catalogueOf(cls).$find(ref) !== undefined)) return;
```

`chain.slice(1)` is **the ancestors**. So a specimen whose name any ancestor already held filed itself **nowhere — not even in its own class's catalogue** — and the lookup, which begins at the asked class, found nothing and fell through. **The ancestor held that name only because a SIBLING had climbed and put it there**, which is what the climb is for: a key is filed in its own class's catalogue and in every formula ancestor's, so an ancestor answers to a descendant's name.

***So the guard read a sibling's climb as "somebody has already registered this" and cancelled a registration that was not a duplicate at all.***

**The fix: delete the guard.** The loop beneath it already skips ancestors correctly — `if (held.$find(ref) !== undefined) continue;` — so the shared ancestor keeps whichever specimen reached it first, while each kind still files into its own catalogue and answers for itself. **Chemistry's suite stayed at 854 with the line gone**, which is the other half of the finding: nothing exercised it.

**What it cost before it was found.** The design session that met it concluded that sibling kinds each need `formula = 'new'` to keep their catalogues apart, and [wrote that into the style book as a rule](../designing-inexplicable-phenomena/15-the-spelling-of-a-kind.md). ***Doug rejected the conclusion on sight*** — *"if so this is a bug… no one else registers them, and double registration shouldn't throw anyways"* — and he was right. The row is corrected.

**The lesson, and it is the expensive one:** ***a measurement of broken machinery reads exactly like a law.*** The probe was sound, the numbers were real, and the conclusion was still wrong, because nothing in it asked whether the behaviour it measured was *intended*. **Before a measurement becomes a rule, find the line that produces it and read what that line is for** — here the line was uncovered by any test, which is itself the tell.
