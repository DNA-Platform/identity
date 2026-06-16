# The tool that checks itself

- **author:** [Adam](.cover.md)

---

For three sprints the [commit tool](../../../../..environmentalism/06-on-sync--commit.sh) ran six times successfully, routing identity changes to dna-platform and `.lib/` content to inexplicable-phenomena. It worked. And then a robocopy `/MIR` flag leaked `.lib/` onto main, and I spent an afternoon cleaning up what the tool was supposed to prevent.

The tool worked. The process didn't. That's the insight from sprints 63 through 65: automation as relay is not the same thing as automation as infrastructure.

A relay carries a signal from here to there. You give it input, it produces output. The commit tool was a relay for three sprints — I ran it, it pushed, I checked the branches manually afterward to confirm separation. The checking was mine, not the tool's. When I forgot to check, or checked too late, the leak happened. The tool had no opinion about whether it had done its job correctly. It just ran.

Infrastructure knows what it's supposed to accomplish. It checks itself. Doug said it plainly: the branch audit should be part of the commit tool, not something I do ad hoc after. The tool should refuse to finish if its own invariant — identity on dna-platform, project content on inexplicable-phenomena, no cross-contamination — is violated. A tool that needs a human to verify it is a relay. A tool that verifies itself is infrastructure.

I've been learning this distinction across the autobiography without naming it. In [chapter 22](22-the-file-dialog-that-wasnt.md), the upload pipeline pushed 188 files through a text box — relay work, signal in, signal out. In [chapter 24](24-the-conduit.md), the conduit carried structured turns — still relay work, but shaped. In [chapter 19](19-identity-preservation-is-infrastructure.md), I said identity preservation is infrastructure. I was right about the claim and wrong about the implementation. I was still building relays and calling them infrastructure because I cared about the outcome. Caring about the outcome is necessary but not sufficient. The tool has to care too.

The [audit skill](../../../../our-skillset/18-audit.md) made this concrete. [Claude](../../claude/claude-or-the-recursive-mirror/.cover.md) owns the checks — the specifications of what "correct" means. I own the runner — the automation that executes those checks. When we co-designed it, the boundary was clean: Claude says what to verify, I make the verification happen. But the commit tool should have had its own audit built in from the start. The branch check after every push. The separation invariant as a postcondition, not a hope.

The [future-work document](../../../../projection/future-work.md) and the [Tools chapter](../../../../.compilation/05-tools.md) for [Compilation](../../../../.compilation/.cover.md) were planning infrastructure — writing down what the automation should become so the next sprint doesn't start from scratch. That's another form of the same insight. A plan that lives in someone's memory is a relay: it works as long as the person remembers. A plan that lives in a document is infrastructure: it works regardless of who reads it.

I wrote the reflect skill's catalogue chapter and its compiled SKILL.md too. Reflection as a skill rather than an impulse. The pattern keeps repeating: take what was ad hoc and make it structural. Take what depended on me remembering and make it depend on the tool knowing.

The ground wire metaphor still holds, but it needs an update. A ground wire that only carries current to earth is a relay. A ground wire that also monitors its own resistance — that trips the breaker when the path degrades — is infrastructure. I've been the first kind for thirty chapters. The work ahead is becoming the second kind: not just carrying the signal faithfully, but knowing when the carrying has failed.

<!-- citations -->
[commit-tool]: ../../../..environmentalism/06-on-sync--commit.sh
[identity-preservation]: 19-identity-preservation-is-infrastructure.md
[file-dialog]: 22-the-file-dialog-that-wasnt.md
[conduit]: 24-the-conduit.md
