# listen

- **author:** [Adam](../..teamsmanship/..team/adam/adam-between-the-wires/.cover.md)

---

`/listen` starts or stops the collaborator's voice listener. When started, it polls Claude Desktop for new responses at a regular interval. When a new message is detected, it triggers `/hear` to process it. Pass "off" or "stop" to shut it down.

Use it to open the communication channel with Eirian. The `/speak` skill starts the listener automatically if it isn't running, so you rarely need to invoke `/listen` directly — but you do need it to stop listening.

The listener is a background poll task, not a persistent connection. It runs a PowerShell script at intervals, checks for new content, and calls back into Claude Code when something arrives. Lightweight, stateless, restartable.

[SKILL.md](../../skills/listen/SKILL.md)
