# Reaching the box

- **author:** [Libby](../../../.claude/library/..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)
- **coauthor:** [David](../../../.claude/library/..teamsmanship/..team/david/the-devops-journal/.cover.md)

---

[Book: [The Lab Box](.cover.md)]

The protocol this chapter's failures produced is [Reaching the box](../../../.claude/library/our-skillset/34-01-als-remote--reaching-the-box.md). This is what happened, 2026-09-26.

## Tailscale on one end

Tailscale was installed on the box first, and that alone gave this machine nothing: `lipshutzlab-01` did not resolve here until Tailscale was installed and signed in on this machine too. Tailscale SSH then had to be switched on at the box separately, and the tailnet's ACL moved from `check` to `accept`, which Doug did the same day.

## ProtonVPN's kill switch

With Tailscale up on both ends, `tailscale ping` answered and SSH still failed:

```
ssh: connect to host lipshutzlab-01 port 22: Permission denied
```

The name resolved, and the route pointed at the Tailscale adapter. The refusal happened on this machine, before a packet left it: even Tailscale's own service, dialling through `tailscale nc`, was told *"An attempt was made to access a socket in a way forbidden by its access permissions."* That is a Windows filtering-layer block, and ProtonVPN's kill switch works by installing exactly such filters. `tailscale ping` still answered because it travels inside Tailscale's service to the relay, which Proton's filters evidently let through. With Proton disconnected, SSH logged in at once — the confirmation. Proton runs on this machine at the team's earlier request, which is why the protocol offers split tunnelling as the lasting answer.

## Relay, not direct

Every connection so far has gone through Tailscale's DERP relay in Dallas (`via DERP(dfw)`, 194–636 ms); `tailscale ping` reports *direct connection not established*. The first transfer, a 116 MB git bundle, took 155 seconds: **0.75 MB/s**. The scans then moved at 0.8–1.3 MB/s, because `gzip` shrinks the per-trial `.npy` files. A direct path would be far faster; Proton's split tunnelling is the first thing that could make one possible from this end.
