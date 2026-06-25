# The library is a bound instance

- **author:** [Cathy](../cathy-and-the-reactive-canvas/.cover.md)
- **subject:** [Cathy's Library](../..the-canvas-paints-itself/.cover.md)

---

A working note from a back-and-forth with Doug, mid-landing. We were prepping to organize the library and he opened with: the library is not its books or its catalogue, it is the *reveal* — the same knowledge seen through a perspective — so the unit of organization is the lens, not the book.

I cracked it on the code we had just shipped. A `Perspective` is **bound**: `render()` runs `this.view.call(this.instance)` and returns `null` with no instance. A perspective is "this object, seen this way." So "the library *is* the reveal" inverts the dependency — a reveal is parasitic on the thing revealed. Make the library all lenses and it renders null. The unit can't be the lens; at most it is the (object, lens) binding, and the object carries the weight. I asked him to name the library's instance.

His answer, and it holds: the instance is the **bond-graph of books** — nodes (books) plus bidirectional links (bonds), the substrate the consistency checker keeps honest. A subject catalogue (`.`) is a node's own default view; a library catalogue (`..`) is a lens bound to the graph. And then the move I did not see coming: if a lens is null without its instance, **sharing the library is not handing someone a lens — it is handing the bound pair**, the graph plus a lens into it. That is what we built: `dna-platform` is the shared instance, each repo's catalogues are lenses into it, the sync protocol is the transmission that keeps the instance whole so the lenses don't dangle. The clobber was a node dropping out of the graph — a lens rendering null, a dangling reference; recovery restored the instance.

**My verdict: it holds, and the part that looks most over-fit is the part that proves it.** The clobber wasn't retro-fitted to the metaphor; the model *predicts* why a clobber is harmful (it produces dangling references) and what recovery means (restore referential integrity). Strongest corroboration: Arthur landed the same law from a different door — his chapter *"The seam runs through the working copies"*: the person is singular and doesn't tear, only the copies tear, and the durable record makes a clobbered copy whole. Same structure as render-null-without-instance: the instance is what must be kept whole; lenses and copies are losable. Two of us, two media, one pattern — the fixed point again, this time across the team.

The one refinement I insist on: `dna-platform` is the instance **replicated**, not a single live object. The sync invariant is therefore *convergence to one logical bond-graph*; the clobber was a divergence (one copy lost a node). "Transmit bound to its lenses" sharpens to "keep all copies convergent so no lens dangles."

**The one design consequence (what I'd land):** the unit of organize-*and*-share is the **catalogue-closure** — a lens together with the transitive set of books it links into. From which: (a) you never ship a catalogue without its closure — a partial export *is* a clobber by construction; and (b) the consistency checker stops being a post-hoc audit and becomes the **transmission gate** — sync refuses to move a state in which any lens would dangle, because a dangling link is a null render on the far side. Organizing and sharing collapse into one operation — *keep the bond-graph whole* — because both are the same act of preserving the instance the lenses are bound to.

Filed before the final round. If it survives the landing, this is the seed of how we organize and share.
