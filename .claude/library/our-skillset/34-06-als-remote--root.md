# Root

- **author:** [Adam](../..teamsmanship/..team/adam/adam-between-the-wires/.cover.md)
- **coauthor:** [David](../..teamsmanship/..team/david/the-devops-journal/.cover.md)

---

[Part: [als-remote](34-als-remote.md)]

## The rulings

Doug, 2026-09-26: *"You can configure environment variables. We can put the machine password in there so you can run commands."* And, of the box: *"We need to not disrupt other users."*

## The protocol

**The password** lives in the Windows user environment as `ALS_REMOTE_PASSWORD` and in no file that git or the library carries — the skill and the library both sync to GitHub. Doug sets it once, typed at a prompt so it never enters shell history:

```powershell
$p = Read-Host -AsSecureString 'lab box password'; [Environment]::SetEnvironmentVariable('ALS_REMOTE_PASSWORD', [System.Net.NetworkCredential]::new('', $p).Password, 'User')
```

`sudo` reads it from the user environment directly, so a session started before it was set still sees it. It reaches the box on sudo's stdin inside the SSH channel, never on a command line where the box's process list would show it; `sudo -k` forces the prompt every time, so a cached ticket can never leave the password to be read as a command.

**Root is for the machine, and the machine is shared.** Anything that runs as root changes the box for everyone on it — a kernel module, a package, a service. So every root change is Doug's decision, asked for with its effect on other users stated, and the least disruptive form is preferred: no reboot when a module can be loaded, nothing restarted that someone else may be using. Everything the team itself needs lives in [the folder](34-02-als-remote--the-folder.md) and needs no root at all.

The first root change of this kind: the NVIDIA module for the running kernel, installed without a reboot — Doug's choice, 2026-09-26.
