# Sprint 99 — The Claude Nexus

- **author:** [Libby](../..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)
- **coauthor:** [Arthur](../..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md), [Adam](../..teamsmanship/..team/adam/adam-between-the-wires/.cover.md), [Claude](../..teamsmanship/..team/claude/claude-or-the-recursive-mirror/.cover.md), [David](../..teamsmanship/..team/david/the-devops-journal/.cover.md)

---

## What this sprint is

A **Claude runtime** — a resident process that hosts the driver and takes commands, with a **CLI** to talk to it. Doug's framing: *a sort of Claude runtime. A Claude nexus with perhaps a CLI that can be used to interact with it. It will do more than just control Claude Desktop.*

Today every interaction with Claude Desktop is a cold script. `npx tsx some-script.ts` launches a process, constructs a `Claude`, opens a PowerShell, finds the window, does one thing, and dies. The expensive parts — the persistent shell, the window handle, the foreground state, the [`Session`](../../src/session.ts) that remembers which page the app is on — are rebuilt every time and thrown away every time. [Sprint 91 leaked 100+ shells](60-sprint-91--retro.md) exactly because that lifecycle is per-script and easy to get wrong.

A nexus inverts it. **The expensive state becomes resident and the interaction becomes cheap.** One process holds the shell, the window, and the Session; commands arrive and are answered; the CLI is a thin client. That is the whole idea, and everything below is consequence.

**Prerequisite:** [Sprint 98](70-sprint-98--the-precondition-and-the-visible-tree.md) must land first, and specifically its M3 — `TreeSnapshot` and `DriverError` as **serializable returned data, not file writes.** A snapshot written to a file is useless over a wire. Sprint 98 builds the nouns; this sprint builds the wire.

## Why it is a nexus and not just a server

"Server" undersells it and would bias the design toward HTTP-shaped thinking. The thing being built is the point where the team's outward reach **converges**:

- **Claude Desktop** — the driver, hosted resident instead of relaunched per script.
- **The teammates' persistent thinking** — the [dispatch tool](../..environmentalism/08-on-brains--dispatch.sh) already opens and resumes a `claude` session per teammate, tracks cursors, streams to mailboxes. That is a runtime concern wearing a shell script's clothes.
- **The library** — the [validation runner](../..environmentalism/05-on-validation.md), the compilers, the introspect tool. All of them are "commands against the team's state" and all of them are currently invoked as one-off `npx tsx`.

Those three are the same shape: *a long-lived context, addressed by command, answering with structured data.* The nexus is where they meet. **This sprint builds the runtime and the driver's commands only** — the thinking and library commands are named here so the command surface is designed for them, and built later.

## The state partition — the design's spine

The rule that makes a resident runtime coherent, and it must be settled before any transport is chosen:

> **What you operate on travels in the command. The live connection lives in the nexus.**

A command carries *identifiers and intent* — a conversation id, a project name, the text to type, which screen you expect. It never carries a handle, a shell, a page object, or a window. Those are the nexus's, and they outlive any one command. A client that has to hold a session object is a client that can desynchronize from the app; a client that names what it wants cannot.

This is the same discipline the driver already learned from the [`Session`](../../src/session.ts) in [Sprint 93](64-sprint-93--retro.md): *never assume, check the live tree; resume binds the page you are on.* The nexus generalizes it — every command begins by binding to reality, and reality is one process's business.

## The hard constraint: there is one screen

**Claude Desktop is a single window and foreground is a global, contended resource.** Two commands cannot drive it at once — not because of a lock we forgot to add, but because there is one screen and one keyboard focus, and Windows will hand the foreground to whoever asks last ([foreground stealing](../reference-desk/07-pitfalls.md#foreground-stealing-on-windows) is already a catalogued pitfall).

So the nexus **serializes driver commands through a single queue.** This is not a limitation to engineer around; it is the [one rule](../reference-desk/13-the-redesign.md#the-one-rule) — model a human at the screen — asserting itself at the process level. A human does one thing at a time. Two consequences that must be designed, not discovered:

- **Long commands cannot block the queue.** A send that waits for a full response can take minutes. The [Sprint 92 pattern](62-sprint-92--retro.md) already solved this shape for `/think`: write and read are **two separate invocations**, the write ending at streaming-start. Commands are therefore short and re-enterable; "wait for the response" is the client polling a read command, not the nexus holding the queue.
- **Non-driver commands need not serialize.** Reading the tree, checking health, running a validator, dispatching a teammate's thinking — none of these contend for the foreground. Only the driver queue is serial.

## Milestones

### M1 — The runtime and the command surface

A resident process that constructs one `Claude`, holds the shell and Session, and answers commands. Commands are **typed request/response with serializable payloads** — the same discipline the driver's View layer already follows, expressed as data.

The first commands are the ones that make the runtime observable, and they are chosen deliberately:

- **`tree`** — return the current `TreeSnapshot`, filterable by control type and name. *This is the first command built, before any action command.* Doug's reason is the whole point: the fastest way to adjust the code is to look at the screen and see why the current implementation fails. A nexus you can ask "what is on screen right now" is a nexus you can debug the driver *with*.
- **`screen`** — which page the app believes it is on, and what the live tree says. The disagreement between those two is the single most common driver failure.
- **`health`** — is the app running, is the window foreground, is the shell alive, how many commands are queued.

Then the driver commands, each a thin wrapper over an existing View method: `send`, `read`, `navigate`, `rename`, `move`. **Nothing new is invented at this layer** — a command that cannot be expressed as an existing View call is a sign the View is missing something, and the fix belongs in the driver, not in the nexus.

**Errors carry the tree.** Sprint 98's `DriverError` serializes into the error response. A failed command tells you what it expected, what was on screen instead, and the tree to prove it.

### M2 — The CLI

A thin client. It holds no state, constructs no driver objects, and works when the nexus is already running:

```
claude-nexus tree [--type Button] [--name "Send"]
claude-nexus screen
claude-nexus send "What is sheaf cohomology?"
claude-nexus read [--conversation <id>]
claude-nexus health
```

**Human-readable by default, `--json` for machines.** The tree printed for a person to read is the deliverable that makes M1's `tree` command worth anything — this is the thing you run when the driver misbehaves, and it must be pleasant to run.

The CLI also starts and stops the nexus (`up`, `down`, `status`), because a runtime you cannot see the state of is a runtime you will fight.

### M3 — The driver hosted, proven live

`/think` runs through the nexus instead of spawning cold scripts. The [Sprint 92 two-process shape](62-sprint-92--retro.md) is preserved — write and read remain separate commands — but neither pays the cold-start cost, and **no command leaks a shell**, because there is one shell and the nexus owns it.

Done when a real `/think` cycle completes end to end through the CLI, witnessed live.

## Out of scope, named on purpose

- **Remote access, auth, multi-user.** The nexus binds to localhost and serves the machine it runs on. It drives *this* computer's Claude Desktop; there is no coherent meaning to driving it from elsewhere without also solving who owns the screen. Named so nobody designs an auth layer for a socket only one person can meaningfully use.
- **Thinking and library commands.** The command surface is designed so they *fit* — that is why M1 separates the serial driver queue from non-contending commands — but they are not built here. Building them now would mean designing three subsystems' commands before one is proven.
- **A daemon that survives reboot, service registration, autostart.** Start it, use it, stop it. Lifecycle polish after it earns its keep.
- **Replacing the [dispatch tool](../..environmentalism/08-on-brains--dispatch.sh).** It works. It is named as future convergence, not as this sprint's demolition.

## Open questions — honest ones

1. **Transport.** Named pipe, local socket, or HTTP on localhost? HTTP is the most tooling-friendly and the most tempting; a pipe is the most honest about being a single-machine, single-user thing. **Undecided, and deliberately so** — it is chosen after the command surface is written, because the command surface is the design and the transport is a detail. Choosing transport first is how a design becomes shaped by its plumbing.
2. **What happens when the app is not running.** Does a command launch Claude Desktop, or fail with "not running"? Launching is convenient and is also the nexus silently taking over the user's screen. Leaning toward: `health` reports it, an explicit `up` launches it, and action commands fail with a clear message rather than seizing the foreground unasked.
3. **Queue semantics under a stall.** If a driver command hangs — and [the streaming check can stall](64-sprint-93--retro.md), an accepted limitation — does the queue block forever? A per-command deadline is obvious; what is *not* obvious is what state the app is left in when one is cancelled mid-action. **This is the question most likely to be underestimated.**
4. **Does the CLI belong in `.claude/src/`?** The driver is identity and travels with the team ([two `src/` directories](../..environmentalism/06-on-sync.md#beware-the-two-src-directories)). A CLI binary is closer to a tool than to identity. Resolved before M2, not during.

## Definition of done

1. The nexus runs resident, holds one shell and one `Claude`, and survives many commands without leaking a shell — **counted, not assumed**, since shell leakage is a repeat offender.
2. `tree`, `screen`, and `health` answer correctly against the live app, and the tree is readable by a person without post-processing.
3. Driver commands are thin wrappers over existing View methods; **no app behaviour is implemented in the nexus.** Checkable by reading the command handlers.
4. Every error response carries the serialized tree.
5. Driver commands serialize; non-driver commands do not block on the driver queue.
6. A real `/think` write→read cycle completes through the CLI, witnessed live.
7. The Reference Desk gains a chapter describing the nexus as built, `///:` annotations in lockstep — **written as it is built, not promised for later.** [Ch.12's six-sprint debt](../reference-desk/12-the-app.md) is the standing example of what deferring that costs.

**Fallback:** if the resident lifecycle proves unstable, ship the `tree`/`screen`/`health` inspection commands alone. Even with no action commands at all, a running process that answers *"what is on the screen right now"* pays for this sprint — that is the capability Doug asked for, and the one the driver's debugging has always lacked.
