# The rules that only held for a class

- **author:** [Queenie](../../../../.claude/library/..teamsmanship/..team/queenie/queenie-and-the-specification/.cover.md)
- **coauthor:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **keywords:** model · carried-type · split-discriminator
- **sprint:** [The Reference](../projection/30-the-reference.md)

---

## Symptoms

Two rules raised their own sentences at examples that were plainly valid, and both arrived on the **first run of a new `.spec` example** rather than from any test.

- ***`a piece of writing is one kind of writing, and this one is written as two`*** — thrown at `<Writing>Doug<Attribute>Friend</Attribute><Type>Phrase</Type></Writing>`, which carries **one** type and one attribute.
- ***`a reference carries a path, and this one carries none`*** — thrown at `<Writing>Algebra<Path>/books/algebra</Path><Type>Reference</Type></Writing>`, **which carries a path**.

**And the suite was green when both were written.** *285 tests, 279 passing, six failures all pre-existing, `tsc` 0 on both configs.* ***Neither fault was reachable from anything the suite ran.***

## What did not work

**Reading the rules.** *Both say what they mean and both are three lines long.* `$oneKind` counts the kinds written into a block; `$carriesPath` asks whether a reference has a path. **Read against a `$Reference` or a plain `$Paragraph`, each is correct.**

**Trusting the count.** *The reference work added seventeen promises and every one passed.* **They passed because they were written the way the classes are written** — `built<$Reference>(<Reference>…</Reference>)` — *and that is exactly the case both rules already handled.*

## The mechanism — A RULE THAT REASONS ABOUT THE CLASS, RUN AGAINST WRITING THAT ONLY CARRIES THE TYPE

***[The type holds the meaning so that a thing can carry a type it does not derive from](../designing-inexplicable-phenomena/10-the-type-and-the-instance.md).*** **That is the whole point of the split, and it means every rule a type holds is run against two populations:** *an instance of the type's canonical form, and any writing at all that carries the type.* ***A rule is only finished when it holds for both.***

Neither of these did, and they failed for different reasons.

**`$carriesPath` read a member.** *It asked `(writing as { path?: unknown }).path`* — **and `path` is declared on [`$Reference`](../../package/src/reference/Reference.tsx), nowhere else.** *So a `$Reference` satisfied it and a `$Paragraph` carrying `<Type>Reference</Type>` could not, however many paths were written inside it.* ***A rule on a type may not consult a member of that type's class***, because the writing being checked is frequently not one.

**`$oneKind` counted a category that had just been re-cut.** *When `$Attribute` became [a kind of type](../../package/src/writing/Writing.tsx) — `export class $Attribute extends $Type { }` — the question "is this a type?" stopped being one test and became two: **a type, and not an attribute.*** **That distinction is made in FOUR places** in [`Writing.tsx`](../../package/src/writing/Writing.tsx):

| line | what it decides |
|---|---|
| **19** | `attributes` — which annotations are attributes |
| **28** | the bond — which annotation the writing is **bound through** |
| **98** | `$typedOnce` — how many types is too many |
| **113** | `$oneKind` — which written kinds must agree |

***Two were updated, one was new, and 113 was missed.*** **So `$typedOnce` and `$oneKind` came to disagree about the same writing** — *one permitting an attribute beside a type, the other counting it as a second kind* — **and a piece of writing could satisfy the rule that counts and fail the rule that compares.**

## The fix

**`$carriesPath` reads the block instead of a member**, so it holds for anything carrying the type:

```ts
$check((writing.block?.$elements ?? []).some(one => one instanceof $Path),
    'a reference carries a path, and this one carries none');
```

**`$oneKind` excludes attributes**, in the same words its twin already used — `one instanceof $Type && !(one instanceof $Attribute)`.

***Measured after: 328 tests, 322 passing, six failing — the same six — and `tsc` 0 on both configs.***

## Prevention

***THE `.spec` EXAMPLES ARE THE ONLY GATE THAT WALKS THE CARRIES PATH, and that is why they exist.*** **Every level has two examples by convention** — *a `TextSpec` or `LettersSpec` written as the class, and a `WritingSpec` written as `<Writing>…<Type>X</Type></Writing>`* — **and the second one is the one that finds this.** *A test written against a class exercises the population the rule's author already had in mind.*

***So the rule to carry: a type's rule is written against WRITING, never against its canonical form's members.*** **If a rule needs to ask something only the class can answer, the rule belongs on the class and not on the type** — *and if it belongs on the type, it asks the block.*

***And for the category half:*** **when what a category MEANS changes, find every place it is decided before changing any of them.** *One `grep` for the discriminator would have returned four lines here; the fault is entirely that it was not run.* **A category tested in several places is a single decision wearing several bodies, and they go red one at a time.**

## See also

- [The narrowed prop that disowned its base](20-the-narrowed-prop-that-disowned-its-base.md) — the other fault in this branch caused by a subclass changing what a shape means to everything above it.
- [The green that exercised nothing](14-the-green-that-exercised-nothing.md) — the same gate failure one level up: a number that was true about a population that could not contain the defect.
- [The Type and the Instance](../designing-inexplicable-phenomena/10-the-type-and-the-instance.md) — why the two populations exist at all, and the promise in `many.test.tsx` that a type's rule is enforced on implementations sharing no base.
