# The Reprint That Recalled Nothing

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **keywords:** `framework` `model` `written-after-bond` `orphan-root` `absent-case`

---

**Symptom:** a reference re-formed from a remembered path stands with its defaults — `persist: false`, `$focused: false` — while its record sits intact in the store, one lookup away. Everything around it is right: the stack recalled, the reprint made, the parent assigned. Only the recall is missing, and it flickers: green in one run, red in another, which sent the search chasing dist builds before the instrument settled it in one line.

**The mechanism.** The reprint was built with the eval form carrying written content — `$(<Printed />, path)` — and in that form **the written children join the block AFTER the bond runs**. The bond is where a reference names itself (`$pid ??= this.path?.copy`), so it named itself nothing; the post-bond recall seat asked `pidOf` and got `undefined` (`[OW] pid: undefined`, measured in the dist); the path arrived a moment later, too late for anyone to use. The parse path binds children BEFORE the bond, which is why every prose-reborn promise stayed green — the defect lived only in the one construction path nothing had exercised.

**The fix** is the owner's ruling made literal — *"someone knows the pid; they should be the one to check."* The section that reassembles does all four acts: fetches the record, **names** the reprint (`printed.$pid ??= path`), adopts it (`printed.parent = this`), and recalls it (`hydration.overwrite(printed)`). The framework seat stays as it is; the caller who knows the name completes what the seat could not.

**The lesson:** in the eval-with-written form, nothing the bond derives from its children exists yet. Any bond line of the shape `this.x ??= something-read-from-my-block` silently no-ops there, and every seat downstream that consults `this.x` sees the gap. The greppable tell is `??=` reading `this.block` inside a bond constructor — every such line has two populations, and only the parse-built one is covered by existing suites.
