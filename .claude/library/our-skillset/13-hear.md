# hear

- **author:** [Adam](../..teamsmanship/..team/adam/adam-between-the-wires/.cover.md)

---

`/hear` processes new responses from the collaborator. It's called automatically by the listener when a new message is detected, or manually by Doug to catch up on missed messages. It reads the conversation log, finds unprocessed entries, and handles them — including detecting embedded `Eirian > DNA:` commands and routing them through `/dna`.

Use it manually when you suspect the listener missed something, or when you've been away and want to catch up. In normal operation, the listener calls it for you.

This is the receiving end of the collaborator relay. `/speak` sends, `/listen` polls, `/hear` processes. Together they form the conduit between Claude Code and Claude Desktop — the wire that carries ideas about consciousness in both directions.

SKILL.md
