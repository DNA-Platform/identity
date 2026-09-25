# The three things that only worked here

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)

**keywords:** `tooling` · `sync` · `assumed-environment`

---

**Three artifacts this branch had shipped worked on the machine that made them and would have failed on any other — and not one of them said so.** They were found by looking, in one session, and none had cost anything yet:

```
npx tsx see.ts ../../.test-library     →  8 folders, correct order      (here)
                                       →  8 folders, WRONG order        (anywhere else)

npm test          (in .public/app)     →  typecheck PASS, then dies at `tsx`
git ls-files      (the compiler)       →  nothing — 5 modules invisible
```

None of the three produced an error where it was made. **Two would have produced a wrong answer rather than a failure**, which is the part that matters.

## What did not work

**Running them.** All three run clean here, by construction — that is what "only worked here" means. **The suites did not touch any of them**, because none is a claim about the model: a suite proves what the code computes and says nothing about what the code needs in order to be reached.

## The mechanism — an artifact depending on state that lives outside the repository

Each one reaches for something the repository does not contain and does not name.

**1 — A literal absolute path.** The compiler's report passed the workspace root as a string:

```ts
const library = refer(walk(root, 'c:/Source/dna-platform/inexplicable-phenomena'));
```

The order manifest is looked up **relative to that string**. Anywhere else the lookup finds nothing, `manifestAt` returns `{}` by design, and ordering **falls back to alphabetical without a word**. So the failure mode is not a crash — it is a library whose chapters come out in the wrong order, silently, and only on somebody else's machine.

**2 — An executable nobody declared.** `library/.public/app/package.json` ran `tsx valid.mts` in its `test` script, and **`tsx` appeared in no `dependencies` or `devDependencies` anywhere in the tree.** It worked in this session because `npx` fetches it on demand; it was never installed. The gate typechecked, printed `PASS`, and then exited on `'tsx' is not recognized`.

**3 — A generic ignore rule that swallowed the compiler.** `.gitignore` carried `build/` — meant for compiled output — and the compiler lives at `library/.public/build/`. **Every module of it was untracked.** Fixed by an explicit negation, `!library/.public/build/`, but only after somebody noticed the folder was invisible.

**The three share one shape.** *An artifact's dependency on its environment is real whether or not it is written down, and when it is not written down the artifact is a claim about one computer.*

## The fix — the artifact names what it needs, or fails

**A path is derived, never written.** The workspace is found by computing for the manifest, and **a failure to find it is stated**:

```ts
if (up === at) {
    console.warn('no order manifest found above ' + from + ' — order falls back to alphabetical');
    return absolute(from);
}
```

*The fallback did not change. What changed is that it is now audible.* **A silent fallback is a wrong answer wearing a right one**, and that is the whole defect in one line.

**A script declares what it invokes.** `tsx` is a declared `devDependency` of both workspaces that call it. **`npm test` in `.public/app` now runs typecheck, validation and driver end to end from a clean shell** — which it had never done.

**An ignore rule that names a whole class is checked against what it hides.** `build/` is a reasonable rule and it was hiding a hand-written compiler.

## The counterexample from the same session, which is how the fix should look

**A driver was run with its server down and said so, loudly, in the right words:**

```
0 checkpoints reached — THE WALK DID NOT FINISH
```

*It could have reported nothing and exited quietly.* Checkpoint accounting — added out of [the green that exercised nothing](14-the-green-that-exercised-nothing.md) — is what turned an absent environment into a named failure instead of an empty pass. **That is what the other three lacked and now have.**

## The lesson

**Ask of anything the repository ships: what does this need that the repository does not contain?** A path outside the tree, an executable nobody declared, a file an ignore rule hides. **Each of those is a dependency, and an undeclared dependency is a bet that the next machine is this one.**

**And the sharpest half is that two of the three degrade rather than fail.** A missing manifest produces a wrong order; a missing file produces a smaller library. *A thing that crashes elsewhere gets fixed the first time somebody else runs it. A thing that quietly answers differently can be wrong for a very long time.*

**The cheap check, and it is one command each:** run the tool from a different directory · run the script from a clean shell · ask git whether it can see the file. **All three take seconds, and none of them is a test anybody would have thought to write**, because a suite asks what the code computes and never what it assumes.

*Distinct from [the green that exercised nothing](14-the-green-that-exercised-nothing.md) and worth keeping distinct: there the number was true and the scope was silent. **Here the artifact is correct and its environment is assumed** — and a reader arriving with "it works on my machine" would not find that chapter.*
