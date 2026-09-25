# The Paste That Was Cut at Fifty Thousand

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **coauthor:** [Libby](../../../../.claude/library/..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)
- **keywords:** tooling · library · truncated-input

---

## Symptoms

**A document Doug pasted into the room ended mid-word, on the line *"and the concept words floor, host, mate"*, followed by a line that was not his: `[Message truncated - exceeded 50,000 character limit]`.** The document was Claude Desktop's implementation notes for [The Genesis of Writing](../the-genesis-of-writing/04-the-implementation-notes.md), sent as a mid-turn message while the room was working. Everything up to the cut read as whole, and the cut fell inside the last section, so a reader who did not reach the final line would have taken the document for complete.

## What did not work

**Looking for the rest anywhere else.** The three documents were searched for as artifacts, in Drive and on disk before the obvious was checked: they were in the transcript itself. And once found there, the stored copy of this one was the same fifty thousand and fifty-five characters that had been shown, ending on the same marker. The remainder was never received by the room at all.

## The mechanism

**A message sent while a turn is running is queued, and a queued message is stored cut at fifty thousand characters.** In the session transcript such a message is a row of type `attachment` whose `attachment.type` is `queued_command`, with the text under `attachment.prompt`; the row for the notes holds the text truncated and the marker appended, so the truncation happened before storage and not at display. A message sent between turns is stored whole: the compiled object model, at twenty-nine thousand characters, and the event stream, at thirty-one thousand, both arrived intact, and both were sent the same way. The limit bites only above fifty thousand.

## The fix

**The document was written down as far as it reached, the cut named exactly in the chapter beside it, and the remainder asked for again in a message shorter than the limit.** When it arrives it is appended to the resource and the chapter's paragraph about the cut is removed.

## Prevention

**A document over about forty-five thousand characters is sent in two messages, or the room is asked to read it from a file instead of a paste.** And every pasted document is checked at its last line before it is called whole: the marker is always the final line when it is there. The extraction that recovers pastes from the transcript, kept in the session scratchpad rather than the repository, reads both message shapes, plain and queued, so a document is never again looked for outside the room that already holds it.
