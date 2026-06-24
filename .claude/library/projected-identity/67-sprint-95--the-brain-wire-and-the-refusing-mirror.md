# Sprint 95 — The Brain Wire and the Refusing Mirror

- **author:** [Arthur](../..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)

---

This sprint began as a one-line bug and became the standardization of the team's brain and sync infrastructure across repositories. It was not planned — it was the sidetrack from the Perspectives retro and the library-organization kickoff, and it grew large enough to be its own sprint and earn its own record.

## What happened

The brain [dispatch tool](../..environmentalism/08-on-brains--dispatch.sh) was misrouted: it hard-coded another project's slug (`*altered-states*`) for the transcript directory, so four of six brains could not resume during the Sprint-41 retro and tended from the voice instead. Fixing that opened the real question — how does *one shared tool* serve *many repositories* without getting in their way?

The answer arrived through Doug's corrections, sharpening each pass:

- **Identity is the directory name, not the path.** The tool learns which repo it is in from `basename "$PROJECT_DIR"` — constant wherever the repos are cloned — never the path-flattened slug, which breaks the moment the parent moves. The script is always run from where it lives, so it needs no argument to know itself.
- **One canonical UUID map, not a per-repo case.** The CLI scopes sessions by the per-project transcript directory, so the same id is a *different* brain in each repo; one map serves all. The historically-divergent ids (cathy/libby/claude) were migrated to the canonical set by a surgical `sed` that rewrites only the `sessionId` field — verified safe by resuming a migrated brain live and confirming it recalled its own context.
- **Mailboxes end the dark.** A backgrounded brain now streams its thinking live to a mailbox file; `--watch` tails it, `--read` prints the last report. We watched a brain think in real time instead of waiting blind for a black box to finish.

Then the sync broke the same way. Pulling another project's work down and pushing ours up, we found that the commit tool's `/MIR` mirror **deletes whatever the destination lacks** — so two active projects sharing `dna-platform` mutually clobber: whoever pushes second silently deletes the other's un-pulled work. It happened live (an altered-states push deleted our just-pushed chapters and tools off `dna-platform`; the work survived only in a working copy and in git history).

The fix is the sprint's lasting contribution: the sync must **pause for hand-merge, never cold-automate.** We built the [pull tool](../..environmentalism/06-on-sync--pull.sh) — the down-sync, staged through the project branch: recompile and validate *there*, read the diff, and sync the working copy only once the branch is proven — and added a **refuse-to-clobber guard** to both `/MIR` steps, so a mirror that would delete the other side's work stops and demands a reconcile. The git merges already paused on conflict; now the mirrors do too.

## Deliverables

- [`08-on-brains--dispatch.sh`](../..environmentalism/08-on-brains--dispatch.sh) — directory-name identity, one canonical map, create-if-not-exist, live mailboxes, `--watch`/`--read`.
- [`06-on-sync--pull.sh`](../..environmentalism/06-on-sync--pull.sh) — the staged down-sync with the no-clobber guard.
- [`06-on-sync--commit.sh`](../..environmentalism/06-on-sync--commit.sh) — the refuse-to-clobber guard on the up-mirror.
- [On Brains](../..environmentalism/08-on-brains.md) and [On Sync](../..environmentalism/06-on-sync.md) extended to *teach* the model — so another team learns the sync from the library, not from a message.
- Three skills wrapping the essential tools as invocable verbs — [/pull](../our-skillset/25-pull.md) and [/push](../our-skillset/26-push.md) (the down- and up-sync), and [/think-async](../our-skillset/27-think-async.md) (think off to the side — run a thought, watch and read its mailbox) — each linking to the tool it drives.

## What it taught

- **The directory name is the stable identity; the path is not.** Derive what you can from where you are.
- **The brain is the text.** The broken wire proved it: brains that could not resume their sessions tended correctly anyway, from the voice grounded in the library. Grounding, not the warm process, is what makes a voice real.
- **A mirror must refuse, not cold-clobber.** With more than one active project, a blind `/MIR` is a mutual-deletion trap. Reconcile down before pushing up; let the tool stop you when a human has to merge.
- **A process that lives in a message is a process no one can learn.** The sync now lives in [On Sync](../..environmentalism/06-on-sync.md), linked to its tools.

The hand-off — restoring the clobbered content to `dna-platform` and having altered-states adopt the guarded tools — is a coordinated step that remains, gated on pausing the other project's pushes.
