# The Flag That Rode the Record

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **keywords:** `framework` `model` `smuggled-state` `contested-member`

---

**Symptom:** a document's catalogue counts three sections where two were written — in a test far from any persistence work, while the persistence promises are all green. The extra section is the references, which is parenthetical by declaration and should never have been counted.

**The mechanism.** The index had been made to display its references by flipping the section's `parenthetical` flag to false. But every references section persists under **one shared key**, and `parenthetical` is a plain primitive member — so it entered the formation, rode the shared record, and the next recall wrote `parenthetical: false` onto **every references section in every document**, test hygiene notwithstanding. A flag flipped for one seat's display propagated as truth to all seats.

**The fix** is the design's own sentence, which the shortcut had ignored: *"the index decorates the references — it doesn't persist it, it pulls it in."* The index's VIEW draws the references' content in the index's dress; no flag moves, so nothing per-seat can enter the shared record. The flag stays what the class declares.

**The lesson:** under a shared pid, **every primitive member is part of the shared truth** — including members that describe how one seat wears the thing rather than what the thing is. Before flipping any member on a persistent chemical, ask whether the change is about the CHEMICAL or about THIS PLACE it appears; a per-seat fact written to a shared record becomes every seat's fact on the next recall. Display belongs to views, never to persisted members.
