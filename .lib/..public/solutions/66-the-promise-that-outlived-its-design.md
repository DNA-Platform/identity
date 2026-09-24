# The promise that outlived its design

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **keywords:** `framework` · `kept-reading` *(proxy name, flagged for Doug)* · a method with no callers · a test as the last user of a feature

---

## Symptoms

- ***`reflection.beneath()` — a reading that walks the entire level ladder — has NO CALLERS in `src`.*** **Four assertions in the suite, and nothing else in the library asks it anything.**
- **It looks entirely alive**: exported from the reflection every kind imports, exercised by green tests, described in a comment.

## The mechanism — ***a test is a user, and the last user is indistinguishable from a first one***

**The suite is written as promises about behaviour, which is right**, *and a promise does not know whether the behaviour it names is REACHED by anything.* ***So a reading whose callers were all refactored away goes on passing, and its greenness reads as health.***

**The promise that pins it is the tell:**

```ts
it('AND IT REACHES ALL THE WAY DOWN — a letter is beneath a book', () => {
    expect(reflection.beneath(built<$Type>(<TypeOfBook />), built<$Type>(<TypeOfLetter />))).toBe(true);
});
```

***That is not a test of a feature. It is a DESIGN, written as a test*** — **the claim that there is one continuous ladder from a book down to a letter** — *and it outlived the code that wanted it.* **Nothing walks that ladder any more; the promise is the only thing that still believes in it.**

## What this costs to know

***A green suite proves that what runs is right. It says nothing about whether anything runs.*** **The question a coverage number cannot answer is: is this reached from the PRODUCT, or only from the tests?**

**The cheap check, and it takes one line per candidate:**

```
grep -rn "reflection.beneath" src/          # nothing
grep -rn "reflection.beneath" .tests/       # four
```

***A member whose callers are all in `.tests/` is a member with no users.*** *It is not necessarily wrong to keep — a reading may be built ahead of its use, deliberately — but the difference between "built ahead" and "left behind" is a decision somebody has to have made, and a green test makes it look like neither was needed.*

## And it is about to earn its keep by failing

**When a chapter arrives between a book and a document, the ladder SPLITS** — *a chapter does not compose a document, it means one* — **and `beneath(book, letter)` becomes false.** ***The promise will go red, and it will be the first thing in that sprint to fail for the right reason:*** *it is the old design, saying so.*

## Related

- [The rule that stopped running and the suite improved](54-the-rule-that-stopped-running-and-the-suite-improved.md) — a green number meaning the opposite; there a rule stopped running, here a reading was never running.
