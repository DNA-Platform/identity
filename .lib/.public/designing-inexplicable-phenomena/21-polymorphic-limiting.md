# Polymorphic Limiting

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **coauthor:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **style:** [The Coding Style](11-the-coding-style.md)

---

***Given 2026-09-08, after an audit reported the code clean and Doug read the same code and did not.*** **His words, and the chapter is built on them rather than around them:**

> **"When things are structural, we want them represented on the class in properties. If a type assumes something, it should be there. If a base class doesn't verify it, it should not."**
>
> **"A huge code smell is polymorphic limiting — or `Blank extends Book` and it needs a footer so let's put a nullable `Bottom` chapter. BADDDDDDD — this just proves there is no framework mechanism for getting something to the bottom yet, or you didn't find it. This does not mean the base should be changed."**
>
> ***"The codebase is littered with you being bad at polymorphism in react code."***

# <a id="the-three"></a>THE THREE RULES, and they are one rule seen three times

| | |
|---|---|
| ***STRUCTURE IS A PROPERTY*** | **A structural fact about a class is declared ON the class, as a property.** *Not computed in a method, not implied by what a bond happens to do, not recoverable only by reading a view. If it is true of the kind, the kind says it* |
| ***AN ASSUMPTION IS PRESENT*** | **If a type assumes something, the thing it assumes is THERE.** *A type that assumes a part exists and does not carry it is a type asserting something about somebody else's object* |
| ***AND UNVERIFIED MEANS UNASSUMED*** | **If the base class does not verify it, the type does not get to assume it.** *This is the one that bites: an assumption the base never checks is a belief, and a subclass built on a belief fails on the first sibling that does not share it* |

***The three compose into one test, and it is cheap:*** **name the structural fact, find the property that carries it, and find the line in the base that verifies it. If any of the three is missing, so is the design.**

# <a id="the-smell"></a>POLYMORPHIC LIMITING — the smell, and Doug's own example

***A subclass needs something the base does not offer, and the fix reaches for a member.*** **`Blank extends $Book`; a blank book still needs a footer; so a nullable `Bottom` chapter is added to hold one.**

**It works. It compiles. Every test passes. And it is wrong**, because the member does not describe the kind — *it describes the absence of a mechanism*, and it puts that absence permanently into the vocabulary of every reader who comes after.

> ***WHAT THE MEMBER ACTUALLY PROVES:*** **there is no framework mechanism for getting something to the bottom** — *or there is one and it was not found.* **Both are outcomes of the same failure, and neither is fixed by the member.**

***AND THE OTHER REACH IS EQUALLY WRONG.*** **"This does not mean the base should be changed."** *The temptation, once the member is seen to be bad, is to widen the base so it can hold the case — a nullable slot one level up instead of one level down.* **That is the same defect wearing seniority.** *A base earns a member when the member is true of everything beneath it, never when one kind needed somewhere to put something.*

**What is left is the only honest move: find the mechanism, or say that it does not exist.** *Saying it does not exist is a real answer and it belongs in [chemistry's chapter zero](../../../chemistry/.lib/projection/00-planning.md), because the fix is one level down.*

## <a id="the-instances"></a>Three instances in this branch, and the first is the pattern entire

***MEASURED 2026-09-08. None of these is slow and all three are the same disease.***

| | |
|---|---|
| ***`$Book` holds four blocks to get parts into four regions*** | **`_opening`, `_contents`, `_body`, `_closing` in [Book.tsx](../../package/src/book/Book.tsx)** — *filtered out of `_block` in the bond and read only by `view()`.* **There is no mechanism for "this part stands at the bottom", so a book keeps four lists and a hand-written view to place them.** *Doug's ruling the same day: "We do NOT cache lots of blocks. We don't cache anything in a composition but our parts because we have NO CONTROL of what is below us."* **And it has a shipped symptom** — the book decides what is a chapter by subtracting five instances it has not finished assigning, so a book that authors its footer last lists that footer in its own table of contents |
| ***`$Bookmark` hand-rolls an ancestor walk*** | **`chapter()` in [Bookmark.tsx](../../package/src/book/Bookmark.tsx) asks `instanceof $Chapter` up the parents**, *because `$Writing` has exactly one ancestor walk and it is hard-coded to one kind — `get book()`.* **There is no way to ask for the nearest ancestor carrying a given type**, so the kind that needed one wrote its own |
| ***six classes declare the same `heading()`*** | **byte-identical in [Section.tsx](../../package/src/writing/Section.tsx), `$Table`, `$Summary`, `$Title`, `$Author`, `$Subject`.** *[Shells Over Types](14-shells-over-types.md) says the TYPE confers the powers — and it does, at runtime.* **An `implements` clause cannot be satisfied by a type conferring anything**, so the member is copied into every kind by hand |

***THE THIRD ROW SETTLES THE ARGUMENT.*** **The framework's own central claim is true when the code runs and unsayable when the code is written**, *and six identical lines are what that costs.* **That is not six authors being lazy. That is one gap, paid six times.**

# <a id="the-audit"></a>How this is found, and why it is hard to find

***It is found by [public-audit-code-patterns](../the-public-skillset/04-public-audit-code-patterns.md), and that skill had to be corrected before it could find anything*** — *because every instance above has a local defence, and a reader asked to refute will accept it.* **"TypeScript demands the member" is true. "The base cannot hold this" is true. "It would be slower otherwise" is true.**

> ***THE DEFENCE IS THE FINDING.*** **A justification that names a cost has named the missing mechanism**, *and the only question that closes one is:* **what would have to be true of the framework for this code to be unnecessary — and is that a feature, or a fact about the world?**

***And the implementer is not the authority on the answer.*** **Doug: *"you, the implementer, don't know how to add features more broadly, so if things break code conventions, they probably need better framework representation."*** *A convention broken is evidence about the framework before it is evidence about the author.*

# <a id="see-also"></a>See also

- **[The Type and the Instance](10-the-type-and-the-instance.md)** — *the one question that decides where a member goes, and the reason a kind does not need a subclass*
- **[Shells Over Types](14-shells-over-types.md)** — *the type grants the powers; this chapter is what it costs where the type cannot*
- **[The Order of a Class](08-the-order-of-a-class.md)** — *properties stand second, which is where a structural fact belongs*
- **[What We Believe](19-what-we-believe.md)** — *the forty-eight rulings this joins*
