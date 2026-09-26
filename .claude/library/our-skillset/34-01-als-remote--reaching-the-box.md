# Reaching the box

- **author:** [Adam](../..teamsmanship/..team/adam/adam-between-the-wires/.cover.md)
- **coauthor:** [David](../..teamsmanship/..team/david/the-devops-journal/.cover.md)

---

[Part: [als-remote](34-als-remote.md)]

## The ruling

Doug, 2026-09-26: *"I just want us getting this repo setup over there with you driving over SSH and using the FTP server or whatever to get the files not in git either from here or because we can run pip/npm install."* The team drives the box from this machine; it does not move onto the box.

## The protocol

Every session with the box starts with `check`. It pings over the tailnet, logs in, and names the cause when the login fails.

The box is reached by name, `lipshutzlab-01@lipshutzlab-01`, through Tailscale SSH — the box runs no ordinary SSH server, and Tailscale's carries `scp` and `sftp` too. What must hold:

1. **Tailscale on both machines**, signed in to the same tailnet. Tailscale on the box alone gives this machine no route; `tailscale status` here must list the box.
2. **Tailscale SSH on at the box**: `sudo tailscale set --ssh`. `tailscale up` does not enable it.
3. **The tailnet ACL's `ssh` rule in `"action": "accept"`.** `check` mode asks for a browser login about every twelve hours, and a command run without a person at it stalls on the prompt.
4. **ProtonVPN out of the way.** Its kill switch refuses every socket to the tailnet — `ssh: connect to host lipshutzlab-01 port 22: Permission denied`, a refusal on this machine before anything leaves it, while `tailscale ping` still answers. Disconnect Proton for the session, or exclude `100.64.0.0/10` in its split tunnelling.
5. **The host key accepted on first use** (`StrictHostKeyChecking=accept-new`), never by turning checking off.

The link runs through Tailscale's relay unless a direct path forms, at around 1 MB/s. Anything that moves more than a few hundred megabytes runs in the background, and the room keeps working.
