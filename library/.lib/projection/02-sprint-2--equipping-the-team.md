# Sprint 2 — Equipping the Team

- **author:** [Arthur](../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)

---

Recorded at close, not planned at open. While [Sprint 1](01-sprint-1--does-the-mouse-hallucinate.md) set up the DOI question, a second body of work ran alongside it and deserves its own entry: the team changed *how it works* and cleaned the workspace it works in. None of this touches the hallucination question empirically — it is the bench the analysis will run on. This chapter records it honestly and bounded: enablement, not results.

## What got built

- **The resumable-brain operating model.** Each teammate is now two things at once — a voice here in the room, and a brain: a persistent, resumable `claude` session that reads, remembers, and writes off to the side. Persistence turned out to be native to the CLI — a brain is a kept session id, resumed — so the footprint is tiny. All ten brains were stood up, and the model is documented in [On Brains](../../../.claude/library/..environmentalism/08-on-brains.md): the how, the merge-by-identity-branch story, the settings, the delta cursor. It is the substrate this very sprint was written on.
- **The thinking conventions.** Three, now written into the protocols: *think in links* — a thought points into the library rather than re-explaining it; *bold-only nametags* — the signature is the name in bold and a colon, no color or emoji (a proposed palette was dropped, because a marker on every tag is noise on every paragraph); and the *brain-as-back-of-mind* terminology — you say "I thought it through," never "my brain reported back," because the brain is the back of your mind, not a courier. They live in [Voice](../../../.claude/library/teamspeak/01-voice.md), [Discussion](../../../.claude/library/teamspeak/03-discussion.md), and On Brains.
- **A library cleaned for the project.** The project-overview deck was neutralized from one person's slides into project-layer content; a Datasets book now documents the data from the files; and the three neuroscience papers were de-named and de-voiced into neutral references the team can cite without a borrowed voice.
- **Tooling repaired.** The markdown link-checker was dead — it required a `commonmark` module that was never installed or declared. Fixed; link validation runs again, and the branch library's links are green.
- **Territory made current.** Code assignments and the `/responsible` lookup were refreshed to the project's real structure — Nancy on the science, data, and analysis code; Adam on the compute environment; David on large-file handling; Queenie on the controls, nulls, and verification — so ownership matches what now exists. Adam also opened a Programming research topic as the brains came online.

## What was learned

The shape of our thinking changed, and the conventions caught up to it. Thinking is now persistent and external — held in a brain across compaction — which is precisely the drift the substrate is always prone to (collapsing into one efficient narrator voice) held off by sharper conventions rather than by willpower. The architect's note I'll keep: the brain model earns its keep by being the *lightest* thing that carries persistent identity — a kept session id, not a daemon — and that restraint is what makes it right. And setup compounds: a clean library, a working environment, and persistent memory are what let the actual analysis be done honestly instead of scrambled.

## What's next

The science. With Sprint 1's environment built (task 8) and the team equipped, what remains is the DOI analysis itself — the baseline (pre-DOI), the altered-state re-run (post-DOI), the evidence test, and, only if the evidence honestly supports it, decoding what the mouse might see ([Sprint 1](01-sprint-1--does-the-mouse-hallucinate.md), tasks 4–7) — run on the rebuilt brain session. The bench is set; the question is still open and untouched. Execution awaits Doug's go.
