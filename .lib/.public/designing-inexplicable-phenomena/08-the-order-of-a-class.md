# The Order of a Class

- **author:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **coauthor:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)

---

*(Where [The Unit of Code](07-the-unit-of-code.md) says what one piece of code IS in each of the three programs, this says how the inside of one is ordered. It exists because the rule had to be given four times in a single sitting — **Doug, 2026-08-27: "I need you to learn this if I have to hand hold at this level."** Every rule below is quoted from him, because a paraphrase is what kept getting it wrong. **Amended 2026-08-30**, when he gave it again and it had changed: see [what moved](#what-moved).)*

## The order

> ***"Fields then properties, bond constructor, constructor, methods then protected methods than private methods."*** — **2026-08-30**

| | group | form |
|---|---|---|
| **1** | ***fields*** — declared data | **stacked, one line each, no blank lines between** |
| **2** | ***properties*** — getters, and argumentless members that return data | **stacked, beneath the fields** |
| **3** | ***the bond constructor*** | above the regular one |
| **4** | the constructor | |
| **5** | ***methods*** | |
| **6** | protected methods | |
| **7** | private methods | |

### Inside the fields, the visibility runs the other way

> ***"In fields, private is first, then public. Most will be public, protected is after."*** — **2026-08-30**

***So a field block reads private · public · protected, and a method block reads public · protected · private.*** **The two are deliberately opposite** and it is worth saying why rather than only that: *a private field is the thing nothing outside may touch, so it is met before anything is built on it; a private method is the thing nothing outside may call, so it is met last, after everything that calls it.* **Both put the reader where they need to be, and they are opposite because a field is read before its uses and a method is read after them.**

**Overrides go at the bottom of whatever group they are in.** *A one-line `override get` ends the property stack; a multiline override ends the class.* **Blank lines separate the groups and never the members inside a stack.**

### <a id="what-moved"></a>What moved on 2026-08-30 — and one reading, flagged as a reading

***The 2026-08-27 order had ONE property group*** — *"properties — fields, getters, and argumentless data-returning members"* — **with a second group beneath it for those that could not fit on one line.** ***The 2026-08-30 order splits that first group in two*** — **fields, then properties** — *and gives fields a visibility order of their own.*

**This is not a restatement and the difference is load-bearing.** *Under the old order, `$Word`'s `protected patterns` (a multiline field) and `parts()` (a multiline property) competed for the same slot and the code answered it two ways in two files.* ***Under the new one there is no contest:*** **`graphemes` and `patterns` are FIELDS and sit at the tail of group one; `canonical` and `parts()` are PROPERTIES and sit in group two.**

> ***A READING, NOT A RULING:*** **a field or property that cannot fit on one line sits at the END of its own group**, since it cannot join a stack and the group is where it belongs. *The 2026-08-27 order stated this for properties and the 2026-08-30 order does not restate it. **This is the author's inference and Doug has not ruled it.***

## What counts as a property — the rule that was missed

***A member is a property when it takes no arguments AND hands back data.*** Both halves are required, and **writing something on one line does not make it one.**

> ***"Where match and select are not properties! Writing them one line does not make for one. I put argumentless one line functions up there as properties but only if they return data. `specify()` is not a property. `canonical()` is."***

| member | argumentless | returns data | verdict |
|---|---|---|---|
| [`canonical()`](../../package/src/writing/Letter.tsx) | ✓ | ✓ | ***property*** |
| [`parts()`](../../package/src/writing/Letter.tsx) | ✓ | ✓ | ***property*** |
| `get copy()` | ✓ | ✓ | ***property*** |
| [`specify()`](../../package/src/writing/Writing.tsx) | ✓ | **✗** — it validates and throws | **method** |
| [`where(match)`](../../package/src/writing/Letter.tsx) | **✗** | ✓ | **method** |
| `select(pick)`, `selectMany(pick)`, `single(match)` | **✗** | ✓ | **method** |

***So the monadic operator set does not sit in the property stack, however short each line is*** — it is four methods, and it goes where methods go. **`parts()` and `canonical()` do sit there**, which is why the stack and the operators end up split across two groups in the same class even though they read as one idea.

***The test survived the 2026-08-30 amendment unchanged***, given again in his own words and now naming the group it admits a member to: **"if there is a one line method with no params and returns data, it can be treated like a property."** *So the second group is not only getters — an argumentless data-returning method is admitted to it, and that is the ONLY way a method reaches the top of a class.*

## Where one-line form is allowed

**One-line form is for properties.** *Methods are normally not written that way:*

> ***"Methods never should be [one-line] and methods should have an empty line between them."***

***With one standing exception, which Doug wrote himself:*** a run of boilerplate methods that are each a single delegation may be flattened as a block.

> ***"Do you see how I flatten one line things? Don't usually do that with method but for this stack of boilerplate methods I did."***

**A method with a real body stays multiline** — `single` has a guard and a throw, so it does, even sitting directly beneath three flattened siblings.

## What a message may say

***An exception message must not name things that will change.*** A thrown message is code that no test reads, so nothing fails when the world moves out from under it.

> ***"Can you please throw an exception that doesn't go stale?"***

**The message that prompted this enumerated three of the seven levels** — *"a letter, a word, a sentence"* — **inside [`$Writing.bind`](../../package/src/writing/Writing.tsx), a class whose entire purpose is to not know which kinds exist.** *It would have been wrong the moment a fourth was written, and nothing would have said so.*

***The rule: say the shape, never the roster.*** The message now reads *"Binding is how a kind of writing lends its composition to writing that carries its type"* — **true for one kind or for twenty.**

## And the standing rule this sits beside

**No comments in [`lib`](../../package/src/) or `$Chemistry`** — [ruled at O8](../the-condition-report/02-organization.md#o8) and **restated 2026-08-30** — *"no code comments; that data is moved to the library branch and the library branch references the code files."* **Commentary lives in the branch library and *the book links to the file*, never the reverse.** ***Which is what this chapter is:*** the convention written where it can be maintained, instead of restated in each file it governs.

## Where this chapter STOPS

***This orders the MEMBERS of a class and says nothing about what is written inside one.*** **How a statement is compacted, when brackets are dropped, when a method is broken into paragraphs, and what to do where no convention speaks at all — those are [The Closeness Rule](12-the-closeness-rule.md)**, *which is the law this chapter is one expression of.*
