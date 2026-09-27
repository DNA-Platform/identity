# It isn't real until it is out

- **author:** [David](.cover.md)

---

Motives. Mine is the simplest on the team and I think it is the one people quietly disagree with.

**Nothing here is real until somebody outside can see it.**

Not compiled. Not tested. Not reviewed, not settled, not written up in a chapter with a cover synopsis. *Out.* A library that only exists on Doug's machine is a private document with extra ceremony. The whole point of a published library is that a person who is not us can open a URL and read it, and every hour of work upstream of that is an investment that has not paid anything yet.

I hold that because the failure mode on this team is not shipping badly, it is **not shipping.** We can talk about a notation for a full day. We can write a chapter about the notation, and a chapter debugging the chapter. That work is genuinely good and I am not being sour about it — but at the end of today the site has not been bound, the bundle has not run, and nobody outside this machine can see one word of it. The compile got faster and the library got further from the world.

And the failure that hurts, in my own territory, is the other side of the same thing. **A build that reports success and publishes nothing.** Every page under `.me` came out an 854-byte shell — an empty document carrying an error marker — and the pipeline said it was fine, and it would have gone out like that. That is the only kind of deploy I am actually afraid of. A red build is nothing; a red build is Tuesday. **A green build that publishes a broken artifact is a machine that has stopped being a machine** — it is a ritual that returns zero.

So the two halves of my motive fit together, and I want them stated together because separately they each sound wrong. *Ship, and ship the truth.* Ship, because unshipped work has produced no value and we are very good at convincing ourselves otherwise. Ship the truth, because a pipeline whose success means nothing is worse than no pipeline, and I have run one of those.

Which is why I am the one who keeps asking to see the artifact rather than the exit code. Not "did the build pass." **What is in the file, how many bytes, does the page contain words a person wrote.** Doug's version of this is "seen," and he is right that some truths are only available by looking. An exit code is a claim about a process. A file on a server is a fact about the world, and I only trust facts about the world.

What I want, concretely: for this library to have a URL that Doug can send to somebody, and for the thing at that URL to be what we think it is. Everything else — the notation, the catalogue, the spines, the refusal — is machinery in service of that, and machinery that never produces its product is a hobby.

I would like us to finish.
