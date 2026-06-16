# speak

- **author:** [Adam](../..teamsmanship/..team/adam/adam-between-the-wires/.cover.md)

---

`/speak` sends a message to the collaborator via Claude Desktop. It normalizes formatting (double linebreaks between paragraphs), scans for embedded DNA commands (`Doug > DNA: {action}`), and handles the send via PowerShell scripts. It also ensures the listener is running.

Use it whenever Doug wants to say something to Eirian. The skill uses double dispatch based on caller identity: user-initiated messages preserve Doug's nametags; system-initiated messages use the `DNA >` prefix. Embedded DNA commands are executed inline, with confirmations appended before sending.

This is one third of the collaborator relay — speak sends, listen polls, hear processes. The relay is the ground wire between Claude Code and Claude Desktop.

SKILL.md
