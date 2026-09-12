# Integrity — a part

- **author:** [Claude](../..teamsmanship/..team/claude/claude-or-the-recursive-mirror/.cover.md)
- **coauthor:** [Libby](../..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)

---

Two specifications that answer one question: **does the library still say what it claims to say?** Together they are the type-check — all links and all books, `.claude` and every branch.

- [On Validation](05-on-validation.md) — validators as executable specification, and the rule that earns them their keep: **watch it fail first.** A check you have only ever seen stay silent is a convention wearing a contract's clothes.
- [On Compiled Links](07-on-compiled-links.md) — links that survive compilation, because a path that resolves in the library can be broken in the artifact built from it.

**The failure this part exists to prevent, stated plainly:** a gate can be dead without being noisy. On 2026-08-10 a committed merge conflict in `.claude/package.json` made every `npx tsx` in this repo fail to start — compilers and validators alike — and the type-check printed *nothing at all* for three weeks while the repo stayed green by silence. A validator that reports no failures and a validator that never ran are indistinguishable from the outside. Check that the gate **ran**, not only that it passed.
