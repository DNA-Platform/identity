# Shells Over Types

- **author:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **coauthor:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **status:** ***ruled by Doug 2026-09-02 — "This is an important design philosophy and it should be written down and obeyed seriously."***

---

## The philosophy, in his words

> *"Everything in our library has to derive from Writing I think. Even List and Table, they need to use types. We want to keep base classes free for the end user. We want them to easily be able to make their own chapter, and then use the types to easily make a Cover, Synopsis, … and we're going to find simple ways for them to assemble the existing version. $Cover should be a shell more or less over:*
>
> ```tsx
> <Chapter>
>     <Type>Cover</Type>
> </Chapter>
> ```

## What it means, obeyed

**Everything derives from `$Writing`.** List and Table included — no parallel hierarchies. A thing that is not writing does not live in this library.

**The base classes belong to the end user.** `$Chapter`, `$Section`, `$Paragraph` stay free of house-specific behavior, so a user subclasses them without inheriting our opinions. What makes a chapter a Cover is never baked into a base class the user needed for something else.

**Kinds are types, and the type grants the powers.** A canonical class like `$Cover` is a *shell* — a thin convenience over the base class carrying its type. Whatever the kind can do, the TYPE confers, so a writing that merely carries the type gets the whole power with no subclass at all.

**The proof already in the code:** persistence. `$TypeOfReferences.specifically` sets the pid (`'$references$'`, the one shared key) and `persist = true` on whatever it types — so `<Type>References</Type>` turns any section into THE references, subclass optional. That is the pattern every kind-power follows.

## The test for a new class

Before adding a canonical subclass, ask what it does that its type could not confer. If the answer is nothing — it is a shell, and it should be *visibly* a shell: a base class, a carried type, and whatever thin dress the kind wears. If the answer is machinery, the machinery probably belongs on the type.

<!-- citations -->
[references]: ../../package/src/reference/References.tsx
[index]: ../../package/src/book/Index.tsx
