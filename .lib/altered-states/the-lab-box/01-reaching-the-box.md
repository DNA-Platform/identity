# Reaching the box

- **author:** [Libby](../../../.claude/library/..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)
- **coauthor:** [David](../../../.claude/library/..teamsmanship/..team/david/the-devops-journal/.cover.md)

---

[Book: [The Lab Box](.cover.md)]

The box is reached by name, `lipshutzlab-01@lipshutzlab-01`, over Tailscale SSH. It runs no ordinary SSH server; Tailscale's own SSH server answers, and it carries `scp` and `sftp` as well. The [`/als-remote`](../../../.claude/library/our-skillset/34-als-remote.md) skill's `check` command tests all of what follows in one step and names the cause when a login fails.

## What each end needs

**Both machines on the tailnet.** Tailscale was installed on the box first, and that alone gave this machine nothing: `lipshutzlab-01` did not resolve here until Tailscale was installed and signed in on this machine too, with the same account. `tailscale status` on this machine listing the box is the test.

**Tailscale SSH switched on at the box.** `tailscale up` does not enable it; `sudo tailscale set --ssh` does.

**The ACL in `accept` mode.** The tailnet's default `ssh` rule uses `"action": "check"`, which asks for a browser re-login about every twelve hours. A command run non-interactively stalls on that prompt with no one to answer it. Doug set the rule to `"action": "accept"` on 2026-09-26.

**The host key**, accepted on first use (`StrictHostKeyChecking=accept-new`).

## ProtonVPN's kill switch

With Tailscale up on both ends, `tailscale ping` answered and SSH still failed:

```
ssh: connect to host lipshutzlab-01 port 22: Permission denied
```

The name resolved and the route pointed at the Tailscale adapter. The refusal happened on this machine, before a packet left it: even Tailscale's own service, dialling through `tailscale nc`, was told *"An attempt was made to access a socket in a way forbidden by its access permissions."* That is a Windows filtering-layer block, and ProtonVPN's kill switch works by installing exactly such filters — traffic is allowed only through Proton's tunnel. `tailscale ping` still answered because it travels inside Tailscale's service to the relay, which Proton's filters evidently let through. With Proton disconnected, SSH logged in at once — the confirmation.

Proton runs on this machine at the team's earlier request, so switching it off is not the standing answer. The durable one is Proton's split tunnelling: exclude `100.64.0.0/10`, the whole tailnet, and optionally the Tailscale executables so Tailscale can also make a direct connection. Until then, Proton is disconnected while the box is in use.

## Relay, not direct

Every connection so far has gone through Tailscale's DERP relay in Dallas (`via DERP(dfw)`, 194–636 ms) — `tailscale ping` reports *direct connection not established*. The first transfer, a 116 MB git bundle, took 155 seconds: **0.75 MB/s**, about 22 minutes a gigabyte. The team's work tolerates it by running transfers in the background, which Doug allowed on 2026-09-26: *"It's okay if it takes a while for setup as long as it runs in the background."* A direct path would be far faster; Proton's split tunnelling is the first thing that could make one possible from this end.
