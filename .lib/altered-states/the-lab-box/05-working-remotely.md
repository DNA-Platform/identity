# Working remotely

- **author:** [David](../../../.claude/library/..teamsmanship/..team/david/the-devops-journal/.cover.md)
- **coauthor:** [Libby](../../../.claude/library/..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)

---

[Book: [The Lab Box](.cover.md)]

The transition from a laptop that did everything to a laptop that writes and a box that runs. What
each interaction with the box is, step by step, is the [`/als-remote`](../../../.claude/library/our-skillset/34-als-remote.md)
skill; this chapter is what the move changed in how the team works, and where in the skill each part
of it is written down. Its other half, what the pipelines became on the new machine, is
[The Pipelines ch1](../the-pipelines/01-back-to-pipelines-on-a-new-machine.md).

## The shape of it

**The team stays on Doug's machine.** Code is written, read and committed here; identity - the team,
its library, `.claude/`, `CLAUDE.md`, the branch library - never travels. The box holds a clone and runs
it. The two meet only through GitHub and one SSH channel.

**Every piece of work on the box is a run.** Commit here; the box pulls into `main`, a mirror that only
moves by pulling; the run gets its own branch `run-<YYYYMMDD-HHMM>-<name>` in a worktree beside it,
executes detached, and commits everything it made - its products, its log, its environment, its exit -
and pushes. `harvest` brings the branch home, rebased onto `main` if `main` moved. A failed run is kept
like any other: its branch is the record of the bug its successor ran without. The protocol is
[the run](../../../.claude/library/our-skillset/34-03-als-remote--the-run.md); the folder it lives in,
and why nothing of ours is in the lab's shared home, is [the folder](../../../.claude/library/our-skillset/34-02-als-remote--the-folder.md).

**A run's command is a pipeline's entry point.** Never a script written for the occasion: what ran is
what anyone can rerun, and the record says so. The chain from matched cells to MEIs is one command
([The Pipelines ch2](../the-pipelines/02-what-each-pipeline-does.md#the-chain-as-one-command)).

## What changed in the daily work

- **Waiting is the machine's, not the room's.** A run is watched in the background (`watch`) and the
  team keeps working; the notification brings it back. Durations are quoted from the run's own clock,
  never estimated and reported as measured.
- **The card is one resource.** Two jobs on it slow each other and ran it out of memory once; a timing
  taken on a shared card is not a measurement. Jobs are sequenced, and when a run must stop at a phase
  boundary - a chain that should not go on to the next dataset until the first is confirmed - a
  stopper on the box waits for the phase's last line and stops exactly that run's process. The run's
  own wrapper still commits and pushes what it made.
- **Speed is correctness.** On a card a slow run is our defect; the protocol is
  [the whole machine](../../../.claude/library/our-skillset/34-07-als-remote--the-whole-machine.md).
- **Files git does not carry** travel by `send` and `receive`, checked by sha256
  ([the files git does not carry](../../../.claude/library/our-skillset/34-04-als-remote--the-files-git-does-not-carry.md)).
- **The environment is proved, not assumed** - the box's Python rebuilt from a lock generated from
  what is installed here ([the environment](../../../.claude/library/our-skillset/34-05-als-remote--the-environment.md)).
- **Root is Doug's.** The sudo password lives in `.env` at the project root on this machine and nowhere
  else; every change as root is his decision, simulated first, because the account is shared
  ([root](../../../.claude/library/our-skillset/34-06-als-remote--root.md)).
- **Reaching the box** is checked first every session ([reaching the box](../../../.claude/library/our-skillset/34-01-als-remote--reaching-the-box.md));
  what failed on the way in is [chapter 1](01-reaching-the-box.md).

## Where the record is

The skill holds the protocols, each with its ruling, current. This book holds the machine and what was
learned getting onto it. The sprints hold what happened, in time order -
[Sprint 17](../projection/17-sprint-17--the-twins-on-a-graphics-card.md) for the move itself.

---

[Previous: [The run](04-the-run.md)] | [Book: [The Lab Box](.cover.md)]
