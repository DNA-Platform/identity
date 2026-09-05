# Organization

- **author:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **coauthor:** [Phillip](../../../../.claude/library/..teamsmanship/..team/phillip/phillip-and-the-visible-layer/.cover.md)

---

*(Where a thing sits, and whether it is alive at all. **A file's location is a claim about who needs it**, and every entry here is a place that claim is false. This is the axis no test can reach: a suite cannot fail because a file is in the wrong folder, and it cannot fail because a file is in no-one's imports at all.)*

## <a id="o1"></a>O1 — Three files are imported by nothing, and one of them predates the work around it

> **TREAT** · *step 1* — 350 lines, zero risk, and it makes every later measurement honest. `$Literature` is a name the derivation uses — the file goes, the name is [owed a real class](04-semantics.md#s9).

***Swept across all four programs by matching every quoted specifier against every file's own name.*** **Three orphans, 350 lines.**

| file | lines | born | last touched |
|---|---|---|---|
| **`package/src/library/Literature.tsx`** | **0** | 2026-07-27 | 2026-07-27 |
| **`app/src/teaser.tsx`** | **198** | 2026-08-15 | 2026-08-15 |
| [`package/app/src/apparatus/case-shell.tsx`](../../../chemistry/package/app/src/apparatus/case-shell.tsx) | **152** | 2026-07-30 | 2026-07-30 |

**`Literature.tsx` is a zero-byte marker** — [the member audit called it a stub in July](../projection/04-the-member-audit.md) and it has been one since. ***`$Literature` is a name the derivation uses*** — [the symbolizing dyad names `$Subject : $Literature` as one of the three scales](../the-semantics-of-books/08-the-symbolizing-dyad-and-the-register.md) — **so the file is a promise the package has not kept, and an empty file keeps no promise.**

**`teaser.tsx` is 198 lines of hand-tuned hex and keyframes**, written and abandoned in one day.

***The verdict is the same for all three: a file nothing imports is not a design decision, and none of them was ever decided.*** **The sweep is cheap and had never been run.**

## <a id="o2"></a>O2 — The public application is eight loose modules with no grouping

> ***OUT OF SCOPE 2026-08-23*** · *the public application* — **the audit is `lib` and the compiler.** *Doug: "remove ones that aren't about the framework and compiler." The finding stands and travels to whichever sprint takes that program; the identifier is kept and never reused.*

> **TREAT** · *step 10* — the demonstration beside it already has the shape; grouping is a move, not a design.


## <a id="o3"></a>O3 — One concern is split across two files, twice — and one of the splits causes a defect

> ***OUT OF SCOPE 2026-08-23*** · *the public application* — **the audit is `lib` and the compiler.** *Doug: "remove ones that aren't about the framework and compiler." The finding stands and travels to whichever sprint takes that program; the identifier is kept and never reused.*

> **TREAT** · *step 10* — the theme split is not cosmetic — **it is what freezes the values**, so joining the two files IS the fix for the freeze.


## <a id="o4"></a>O4 — In the demonstration, five styled files are imported only from levels they do not live at — five of five

> ***OUT OF SCOPE 2026-08-23*** · *the demonstration* — **the audit is `lib` and the compiler.** *Doug: "remove ones that aren't about the framework and compiler." The finding stands and travels to whichever sprint takes that program; the identifier is kept and never reused.*

> **TREAT** · *step 10* — five moves. A styled file that dresses one book belongs beside it.


## <a id="o5"></a>O5 — One book's class is filed three levels from its book

> ***OUT OF SCOPE 2026-08-23*** · *the demonstration* — **the audit is `lib` and the compiler.** *Doug: "remove ones that aren't about the framework and compiler." The finding stands and travels to whichever sprint takes that program; the identifier is kept and never reused.*

> **TREAT** · *step 10* — move `$TheManifold` into its own book folder, where the other four already are.


## <a id="o6"></a>O6 — Twenty-eight dead imports, and a module that imports itself

> **TREAT** · *step 1* — `tsc --noUnusedLocals` names all 28; the self-import goes with them.

***Measured with `tsc --noUnusedLocals`, excluding `React`*** *(which the JSX transform makes formally unused everywhere).* **28 in `package/src`.** Worst: [`Word.tsx`](../../package/src/writing/Word.tsx) with four, [`Section.tsx`](../../package/src/writing/Section.tsx) with five.

***And [`Section.tsx:23`](../../package/src/writing/Section.tsx) imports itself*** — `import * as sections from './Section'` — **and never uses it.**

**A dead import is small on its own and is evidence in bulk:** *it says the file was edited by adding rather than by reading.*

## <a id="o7"></a>O7 — Two copies of the framework are loaded at once, and it is a directory decision

> **MONITOR** · ***RULED 2026-08-22: leave it, and here is what resolves it*** — *Doug: **"Leave it. We are going to turn the demo into a dev library that we can use to test the app, so we will have to resolve this soon. We might be lifting a lot of app infrastructure to the package when we do, to ensure everything is as self-contained as possible in there, and others can use the framework to build their own GitHub Pages apps."***
>
> ***So this is not a defect to patch — it dissolves inside a larger move that is already intended:*** **the demonstration becomes a dev library the application is tested against, and app infrastructure lifts INTO the package so a consumer gets a self-contained way to build their own Pages site.** *At that point the demonstration stops reaching past the package boundary because there is nothing left on the other side of it.*
>
> **Until then the cleaning [orders the demonstration last](06-the-cleaning.md#the-order) and every `instanceof` measurement says which copy it was taken in.**

**The demonstration reaches the framework through a tsconfig alias — 213 imports of `@/writing/…`, `@/book/…` — resolving to `package/src`. The application imports `@dna-platform/lib`, resolving to `package/dist`.**

***So `instanceof` is false across that line, silently***, and [the whole story is already filed](../solutions/05-the-suite-that-passed-against-a-stale-build.md): a probe reporting *"sections 1, of them `$Section`: 0"*, a validator throwing an `$Author` as its error value, and four wrong measurements in two days.

***It is in this book rather than only in Solutions because the cause is where the files are***, and **the fix is a path, not a patch.** *Named out of scope three times, and [called the cheapest unpaid debt](../projection/18-the-theme.md#out-of-scope-named-so-it-is-not-drifted-into) each time.*

## <a id="o8"></a>O8 — RULED: no comments in `$Chemistry` or `lib`, and the LIBRARY links to the file

> ***RULED 2026-08-22.*** *Doug: **"Neither `$Chemistry` nor `lib` should have comments in the files. Commentary should be moved to the library branch, which can provide a markdown link to the file. We have a compiler to examine dead links so as to verify whether code files have drifted. The apps can — perhaps the code in `.public` app can, as it isn't meant to be understood in the abstract — but you have more room to comment on something wholistically in the library branch, so I would keep things minimal and keep extended thoughts and 'how to use' thoughts in the branch."***

**What was measured before the ruling:**

| program | lines | comment lines | after the ruling |
|---|---|---|---|
| **`lib`** | 2,962 | ***1*** | ***already there*** |
| **`$Chemistry`** | 5,160 | commented at every seam | ***harvest to [its own branch library](../../../chemistry/.lib/..representivity/.cover.md)*** |
| the compiler | 1,930 | **~90 of `library.ts`'s 147** | ***my reading: it harvests too — see below*** |
| the application | 1,289 | at every decision | **may keep them, kept minimal** |

***The direction of the link is the part that matters, and it is the opposite of what I proposed.*** **I suggested citation lines inside the code pointing at books. Doug's answer is that the BOOK links to the FILE** — so the code stays clean, and **[the dead-link checker](../../../../.claude/library/bookkeeping/06-on-links--consistency.ts) is what catches drift.** *A mechanism that already exists and is already run.*

***And it closes [S15](04-semantics.md#s15) from the other side:*** **the framework does not cite its theory — the theory's chapters cite the framework's files**, which is what [The Semantics of Books](../the-semantics-of-books/.cover.md) already does throughout and what makes the citation verifiable rather than decorative.

***One thing is not ruled and I am reading it rather than assuming it:*** **the compiler.** *Doug named `$Chemistry`, `lib` and "the apps". The compiler is not an app and it has [a branch book of its own](../projection/15-the-build.md), and its comments explain things meant to be understood in the abstract — why emitting runs twice, why checking is a spawn.* **So I read it as harvesting, and flag the reading.**

## <a id="o9"></a>O9 — The `$Chemistry` Lab: seventy-seven entries in one directory under five naming conventions

> ***OUT OF SCOPE 2026-08-23*** · *the `$Chemistry` Lab* — **the audit is `lib` and the compiler.** *Doug: "remove ones that aren't about the framework and compiler." The finding stands and travels to whichever sprint takes that program; the identifier is kept and never reused.*

> **LEAVE** · *out of branch* — recorded as the same habit at four times the scale, and `$Chemistry` is not this branch's to reorganize.


## <a id="o10"></a>O10 — STRUCK: it audited the wrong repository

> ***STRUCK 2026-08-22.*** **This entry counted 143 files in [`.claude/src/scripts`](../../../../.claude/src/) and called them a nightmare folder.** *The count is true and the folder is not in scope: it is the team's **identity repository**, which travels between projects and is not what this sprint audits — [see The Scope](01-how-to-read-this.md#the-scope), which was written because of this mistake.*
>
> ***Doug: "I am talking about the folder of framework overrides for the app."*** **Two candidates were offered and he named neither — the real target turned out to be the COMPILER, which is [O13](#o13).** *The identifier is kept and never reused; the finding travels to whichever sprint audits the identity repo.*

## <a id="o11"></a>O11 — STRUCK: it rested on O10

> ***STRUCK 2026-08-22.*** *It observed that the Lab and the driver are the two largest unaudited programs.* **The driver is [out of scope](01-how-to-read-this.md#the-scope) entirely**, and the Lab is already [O9](#o9). ***Nothing survives that is not said better elsewhere.***

## <a id="o12"></a>O12 — The demonstration's `sections/` mixes books, sections and dressings in one directory

> ***OUT OF SCOPE 2026-08-23*** · *the demonstration* — **the audit is `lib` and the compiler.** *Doug: "remove ones that aren't about the framework and compiler." The finding stands and travels to whichever sprint takes that program; the identifier is kept and never reused.*

*Offered as a candidate for Doug's "nightmare folder" and **not** the one he meant — [O13](#o13) is. **It is a real fault on its own** and is kept at its own weight rather than at the weight it was offered at.*


## <a id="o13"></a>O13 — The compiler has no folders, and it already wrote down the taxonomy it does not express

> **TREAT** · *step 10* — ***Doug, 2026-08-22: "Things like catalogue and library sitting at the level of emit and index. Look at the organization of chemistry and lib and compare to that. You need to learn how to see things like this."***

### The comparison, which is the whole entry

```
lib ─ package/src/            ORGANIZED BY DOMAIN
    book/  document/  library/  reference/  utilities/  writing/  index.ts

chemistry ─ package/src/      ORGANIZED BY LAYER
    abstraction/  framework/  implementation/  index.ts  symbolic.ts

the compiler ─ build/         NO FOLDERS AT ALL
    catalogue.ts  check.ts  emit.ts  index.ts  library.ts  refer.ts
    resolve.ts  see.ts  validate.ts  verify-build.ts  verify-walk.ts
    walk.ts  where.ts
```

**Both siblings put one entry file at the root and everything else in folders.** ***The compiler puts thirteen modules of five different kinds in one directory.***

| kind | files |
|---|---|
| ***the seam*** — the one type every stage reads | `library.ts` |
| ***the stages*** | `walk` · `refer` · `resolve` · `emit` · `validate` |
| **a reading a stage needs** | `catalogue` — *cards read off living books, which is why it runs after emitting* |
| ***the commands*** — **not modules at all** | `index` · `check` · `see` · `verify-build` · `verify-walk` |
| a utility | `where` |

### And it already knows

**[`check.ts`](../../build/verify.ts) states the taxonomy in prose, in its own header:**

> *"the folder's own convention — **`see.ts` reports, the `verify-*` scripts gate, `index.ts` compiles, and none of them is also a module**."*

***The compiler wrote down the distinction between a command and a module and then filed them together.*** **That is the fault in one sentence**, and it is why [the orphan sweep produced four false positives here](../solutions/24-the-orphan-that-was-not-an-orphan.md): *a command has no importer by definition, and nothing in the folder's shape says which files are commands.*

> ***What I would do — mirror what both siblings already do:*** **one entry file at the root, the seam beside it** *(chemistry keeps `symbolic.ts` there for exactly this reason)*, **and folders for the rest.**
>
> ```
> build/
>   index.ts        the one command
>   library.ts      the seam
>   <stages>/       walk · refer · resolve · emit · validate · catalogue
>   <commands>/     check · see · verify-build · verify-walk
>   utilities/      where
>   tests/
> ```
>
> ***RULED 2026-08-23: `stages/` and `commands/`.*** *Doug: **"Stages and commands is good. THE COMPILER IS NOT THE FRAMEWORK. It can have compiler words."***
>
> ***And that is a standing ruling wider than two folders:*** **`build/` is held to being clear and consistent, not to the semantics of books.** *`lib` speaks the library's language because it realizes the formalism; the compiler reads folders and writes files, and a stage is what it has.*
