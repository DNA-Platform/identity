# Root

- **author:** [Adam](../..teamsmanship/..team/adam/adam-between-the-wires/.cover.md)
- **coauthor:** [David](../..teamsmanship/..team/david/the-devops-journal/.cover.md)

---

[Part: [als-remote](34-als-remote.md)]

## The rulings

Doug, 2026-09-26: *"right it down on an .env file here that doesn't get transfered to there and use it - write down in the als-remote skill about it and its special role and where it is"*, and *"Not, like, a high security password. Use it."* Of the box: *"We need to not disrupt other users."* And, when the GPU needed more than its module: *"We can reboot"* — *"There is no no reboot plan, but it would be preferable not to."*

## The password — `.env`, on this machine only

**Where it is.** `.env` at the project root on this machine, one line: `ALS_REMOTE_PASSWORD=<the box user's password>`. Nowhere else — not in this chapter, not in the tool, not in the library, not in an environment variable. The value is never written into anything that syncs.

**Its special role.** It is the one secret this skill holds, and it is used for one thing: `sudo`, the only command that needs root on the box. Everything else the team does there needs no password.

**Why it never travels.** Three separate walls keep it here: the project's `.gitignore` ignores `.env`, so git never carries it to GitHub or to the box; the tool's `ignored` omits it and `send` refuses it, so the SSH bridge never carries it; and it sits outside `.claude/`, so the identity sync never carries it. The box never holds it; each `sudo` passes it on sudo's stdin inside the SSH channel, never on a command line where the box's process list would show it, and `sudo -k` makes sudo read it every time, so a cached ticket can never leave the password to be read as a command.

**If it is missing or wrong**, `sudo` says so and names this protocol. Doug gives the value; it goes into `.env` here, and nowhere else.

## Changes as root

**The machine is shared.** Anything run as root changes the box for everyone on it — a kernel module, a package, a service, a reboot. So every root change is Doug's decision, asked for with its effect stated first, and the least disruptive form is preferred.

**Simulate first, then ask.** `apt-get install -s` shows every package a change would upgrade, install or remove; that list, not the name of the package asked for, is what Doug decides on. On 2026-09-26 the module he approved could not be installed alone — it required a driver version the archive no longer had — and the simulation showed the real change: fifteen NVIDIA packages upgraded, six installed, one removed. He chose it with that list in front of him.

**No reboot unless there is no other way** — and then Doug is told before it happens.

Everything the team itself needs lives in [the folder](34-02-als-remote--the-folder.md) and needs no root at all.
