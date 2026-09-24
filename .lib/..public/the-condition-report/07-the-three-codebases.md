# The Three Codebases

- **author:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **coauthor:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md), [Adam](../../../../.claude/library/..teamsmanship/..team/adam/adam-between-the-wires/.cover.md)

---

*(Doug: **"You can compare the chemistry code, the early framework code, the compiler code."** This chapter is that comparison, measured. **It registers differences rather than faults** — and two entries that were differences with no fault under them have been struck rather than kept, because [a register padded with observations is a register nobody finishes reading](#the-two-that-were-struck).)*

## <a id="c1"></a>C1 — The demonstrations are twice the size of everything they demonstrate

*Corrected 2026-08-22. **The first version of this entry counted `.claude` as if it were the project** and concluded the framework was 5% of the repository. **`.claude` is the team's identity and tooling, and `.archive` is archived** — neither ships, and counting them buried the actual proportion.*

***Doug's own framing is the correct subtraction: `$Chemistry` exists to build `lib`, and the rest of the repository will be written IN `lib`.*** **So there is what ships, and there is what shows it off:**

| | | lines |
|---|---|---|
| **WHAT SHIPS** | `$Chemistry` — the substrate that exists to build `lib` | 5,160 |
| | **`lib`** — the framework | **2,962** |
| | the compiler | 1,930 |
| | the application — ***the first consumer, and every later one is written in `lib` too*** | 1,289 |
| | | **11,341** |
| **WHAT DEMONSTRATES** | the Lab — `$Chemistry`'s demo | 13,678 |
| | the demonstration — `lib`'s demo | 8,139 |
| | | ***21,817*** |

***The demonstrations are 1.9× everything they demonstrate.***

**And that number has a direction:** *the Lab is 2.7× `$Chemistry`, and the demonstration is 2.7× `lib`.* **The same ratio twice, which makes it a habit rather than an accident.**

> ***The improvement is not to shrink them.*** **It is that [none of those 21,817 lines is reachable by anything else](../projection/18-the-theme.md#where-the-brittleness-actually-is)** — the demonstration spends 1,208 lines drawing where the framework spends 108, *and not one of them can be used by a second book.* **A demonstration that large is either the framework's best test corpus or its largest pile of unreusable code, and today it is the second.**

## <a id="c2"></a>C2 — Three codebases, three answers to "what is a unit of code"

| | the unit | average file | one class per file? |
|---|---|---|---|
| **`lib`** | ***a class*** | **58 lines** | ***yes*** — 51 files, 51 classes |
| **`$Chemistry`** | ***a concern*** | **215 lines** | **no** — [`chemical.ts`](../../../chemistry/package/src/abstraction/chemical.ts) holds **10 classes in 1,407 lines** |
| **the compiler** | ***a phase*** | **107 lines** | **no classes at all** — 18 files, **1 class**, everything else a pure function over [one shared type](../../build/library.ts) |

**All three are defensible on their own terms.** *A framework of book semantics wants one class per book word. A reactive substrate wants its machinery together where the invariants are. A four-phase compiler wants functions over a seam.*

***What is not defensible is that nothing says so*** — and it is [the same fault as the comment policy](02-organization.md#o8), in the same three programs.

> **The improvement is one page, not a refactor: each program states its own unit and why.**

## <a id="the-two-that-were-struck"></a>The two that were struck

*Identifiers are never reused, so the gaps stay.*

- ***C3 — struck 2026-08-22.*** *It observed that `lib`'s six two-class files are all `$X` + `$$X` and therefore principled.* **Doug: *"I don't see a problem."* He is right — it was a convention worth writing down somewhere, not a fault, and this is a register of faults.**
- ***C4 — struck 2026-08-22.*** *It observed that the six most-committed files are the six with the most entries.* **That is a fact about how to LOOK, not about the code.** ***It is [moved to the instruments](01-how-to-read-this.md#the-instruments), where a method note belongs.***

***Both were padding, and the discipline that follows is worth more than either:*** **an entry earns its place by naming something that should be different in the code.** *An observation about the code, however true, is a chapter somewhere else.*

## <a id="c5"></a>C5 — RULED: `$Chemistry`'s reflection road is unexported and unintegrated. Ignore it.

> ***RULED 2026-08-22.*** *Doug: **"Ignore `$Referent` in `$Chemistry`. Do we even export it? It hasn't been integrated into anything yet."*** **Measured: `src/index.ts` does not name it, and `Referent` appears ZERO times across every `.d.ts` in `dist`. It is unreachable from outside the package.**

### What is there, recorded once so nobody finds it again and calls it a discovery

| | lines | |
|---|---|---|
| [`implementation/catalogue.ts`](../../../chemistry/package/src/implementation/catalogue.ts) | 179 | ***LIVE*** — [`chemical.ts:1174`](../../../chemistry/package/src/abstraction/chemical.ts) calls `$subject(…)` inside the registry |
| [`implementation/reference.ts`](../../../chemistry/package/src/implementation/reference.ts) | 126 | `$Referent` · the ternary `$Relation` · `$Relationship` · `$Reference` · `$Representative` · `$Property` · `$Identity` — **unimported, unexported** |
| [`implementation/reflection.ts`](../../../chemistry/package/src/implementation/reflection.ts) | 1,063 | `$instanceof` · `$typeof` · `$type` · `$SubjectiveRep` · `$ObjectiveRep` — **unimported, unexported** |

***It is a reflection system Doug is building, a third wired, and the design is stated in a type:*** `$ObjectiveRole` ends `… | 'JavaScript' | 'TypeScript'` — **the language as a ROLE**, which is *"the TypeScript-based reflection system would be just one view."*

> ***Nothing here is a fault and nothing here is scope.*** **The entry exists so the next audit meets it in writing instead of reporting it.**

### Three revisions, and the lesson is mine rather than the code's

*This entry was written three times in one session and **overclaimed twice**:*

1. ***"SRT implemented and nothing uses it"*** — **dramatic, and it read an unfinished road as an abandoned one.**
2. ***"an unfinished road, and `lib` shadowed both its names"*** — **closer, and still wrong: there is no shadowing, because nothing outside the package can reach either name.**
3. **What is actually true: unexported, unintegrated, ignore.**

***The failure was the same both times — I checked whether a file was IMPORTED and never whether it was EXPORTED***, and a package's boundary is what decides whether a name can collide with anything. **[S1 is restored to what it said before I corrected it](04-semantics.md#s1):** *the theory's two central classes do not exist in any reachable form, and `lib` is free to name them.*

## <a id="c6"></a>C6 — STRUCK: it reported a slip inside the code C5 just ruled out of scope

> ***STRUCK 2026-08-22.*** *It recorded that `$Relationship` passes `object.$as(object)` where every sibling passes `$as($object)`.* **The observation stands and the file is [unexported and unintegrated](#c5)**, so it is not a fault in anything that ships. ***Noted inside C5's table and given no entry of its own.***

## <a id="c7"></a>C7 — One class in `$Chemistry` wears no `$`, and `$` itself is an instance of it

```ts
class Chemistry extends $Chemical { … }                       // chemical.ts:1301 — not exported, no $
export const $ = new Chemistry().view as any as $Chemistry;   // chemical.ts:1407
```

***`$` — [the coercion the entire framework is reached through](../../../chemistry/.lib/composition/11-the-representative.md) — is an instance of the one class in the package that does not follow the package's own naming rule.*** *It is private and it works, and it is the class a reader arrives at when they finally ask **what is `$`**.*

> ***Doug, 2026-08-22: "Yeah it looks like we want `Chemistry` to be `$Chemistry`. Good catch and fix."*** **Taken.**
>
> ***And the condition he attached is the important half:*** **"Remember when fixing chemistry, things need to be rebuilt so the different libraries can update their dependency."** *A one-character rename in `$Chemistry` is not a one-character act — **`$Chemistry`'s `dist` is rebuilt, then `lib`'s against it**, or [the repository is running two copies that disagree](02-organization.md#o7).*
>
> ***This chapter's scope is `lib`. `$Chemistry` fixes are recorded here and executed on their own, with the rebuild chain.***
