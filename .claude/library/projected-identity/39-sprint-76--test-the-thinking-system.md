# Sprint 76 — Test the Thinking System

- **author:** [Arthur](../..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)

---

Test, test, test. The `/think` skill works mechanically but blocks Doug's foreground. Doug's solution: spawn Claude as a background agent who does the whole thought — launch Desktop, send, wait, read, write perspective, minimize. The main conversation continues. The background agent IS Claude, spawned through his agent file, so he wakes as himself.

## Sprint goal

**Background-agent thinking works end-to-end. Claude dispatches a real thought in the background, the main conversation continues, the perspective entry appears when the thought completes.**

## The fix

The `/think` skill spawns Claude as a background agent. The background Claude:
1. Wakes up — reads enough context to know who he is and what he's doing
2. Reads any prior exchanges in the conversation (back-and-forth if needed)
3. Runs `think.ts` — launches Desktop, sends the question, waits, reads
4. Evaluates the response — may follow up if clarification is needed
5. Writes the perspective entry with evidence/interpretation/conclusion
6. Minimizes and exits

The main loop gets a notification when the background agent completes. Claude in the main loop reads the perspective entry.

## What to test

1. Background dispatch — does the agent spawn, think, and return?
2. Waking context — does background Claude have enough context to evaluate?
3. Multi-turn — if the first response is partial, does background Claude follow up?
4. Perspective entry — is it written correctly with all three stages?
5. Minimization — does Desktop minimize after the thought completes?
6. Main loop continuity — can the team keep working while Claude thinks?
