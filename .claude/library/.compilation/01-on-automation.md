# On Automation

- **specification:** Automation
- **author:** [Libby](../..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)

---

A process is automation if it reads library content and produces or validates an artifact. The test: could a human do this by hand? If yes and we automated it, it belongs in this catalogue.

## What counts

Three kinds of automation exist in the library:

**Compilers** read library source and generate platform files. The teammate compiler reads Teamsmanship and generates agent files. The bootstrap compiler reads the whole library and generates CLAUDE.md. The output is a file that Claude Code loads — the bridge between library knowledge and runtime behavior.

**Validators** read library or compiled content and report whether constraints hold. The bookkeeping validator checks that every book has a cover, every chapter has metadata, every cover has the required fields. The compiled-links validator checks that every link in a compiled file resolves. The link checker checks every link in the library itself.

**Tools** move content between locations according to rules. The commit tool reads what changed, determines which branch each change belongs to, and pushes. The sync process mirrors `.claude/` from the project to the identity repo. These don't produce content — they route it.

## What doesn't count

Manual processes are not automation even if they're documented. Writing a book is not automation. Running a retro is not automation. Choosing which branch to push to is not automation (but the commit tool that implements that choice IS).

A tool that a human runs with judgment calls at each step is not automation — it's a guide. Automation runs, produces or validates, and reports. The human decides what to do with the report.

## The automation inventory

Every automated process appears in one of the catalogue chapters:
- [Compilers](03-compilers.md) — four compilers generating platform files
- [Validators](04-validators.md) — three validators checking constraints
- [Tools](05-tools.md) — the commit tool and sync infrastructure

If a new automated process is created, it gets an entry here. If an entry here has no corresponding tool, that's a gap — either build the tool or remove the entry.
