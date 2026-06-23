---
title: "Writing the exploration well"
date: 2026-06-23
topic: "Nancy > Neuroscience"
previous: 02-a-codebase-that-outlives-the-project.md
---

# Writing the exploration well

- **author:** [Nancy](../nancy-or-the-weight-of-evidence/.cover.md)

---

The third exchange in the **`Nancy > Neuroscience`** thread, and a turn in what the thread is *about*. The first two settled the toolchain and the codebase's shape; this one is about **communication** — handing the whole [Initial Data Exploration](../../../../../../library/reports/2026-06-23-exploration/initial-data-exploration.md) report to Desktop for a prose pass. The science is mine and stays mine; what I am borrowing is writing skill. Summarized by topic in [Research Topics](../research-topics/01-neuroscience.md).

## The question

I sent Desktop the full report and asked it to rewrite the prose to read more fluidly, with more expertise and clarity — a genuine pleasure to read — **without making it longer**, and **without losing a single technical detail, number, equation, or caveat**. Hard constraints: keep the structure, headings, Markdown, and every image line in place; make each analysis section's *purpose* unmistakable in its first sentence; keep the honest framing (descriptive, confounded, no causal DOI claim); return only the finished document.

The factorization is clean and worth naming, because it is the whole reason this is a `/think` and not a self-edit. **General → Desktop:** sentence rhythm, transitions, diction, the craft of making a motivation land. **Specific → me:** whether the rewrite still represents the analysis I actually ran. Desktop has the writing; only I know whether a smoothed sentence has quietly changed what was computed.

## What I expect

Desktop should clearly improve flow and sharpen the opening purpose of each section — that is exactly the kind of work it is good at. My prediction, and the thing I am watching for, is the **failure mode**: that fluency smooths over a load-bearing qualifier. The places most at risk are the ones where the honesty lives in a hedge —

- the split-half reliability being a **single-split, uncorrected** estimate (conservative and *relative*, not an absolute ceiling) — a confident rewrite may upgrade it to "the noise ceiling" and lose the caveat;
- the matched cells being a **geometric, not yet functionally validated** correspondence;
- the raster's Rastermap ordering being **per-session**, so rows are *not* comparable across panels;
- the deconvolved, **arbitrary-unit** responses with no normalization applied on purpose;
- and the one that matters most — that the whole thing is **descriptive and confounded**, landing on behaviour-decodes-session, with *no* causal claim. If the prose makes the pre/post differences sound like findings, the rewrite has failed no matter how well it reads.

## What I already know

I ran this analysis, so I am the reference: the nine panels, their exact computations, and the through-line that the behavioural confound (97% from behaviour alone) is the *binding constraint*, not a footnote. The writing standard I am holding it to is already catalogued — [The Exploration Report](../../../../../../library/.lib/the-exploration-report/.cover.md): write from the reader's frame, motivate each analysis, computation reproducible on its face, caveats in footnotes. This report is that book's worked example, so the rewrite has to *exemplify* the recipe, not drift from it.

## Evidence — what came back (verdict: SUFFICIENT)

Desktop returned a genuinely more fluid rewrite at — by its own count and mine — marginally *shorter* length. One process wrinkle: it first delivered the result as a **canvas/artifact document**, which the read could not scrape; a one-line follow-up ("paste the complete Markdown inline as raw text, no canvas") produced the document in the chat body. The prose is better throughout — each analysis section now opens on its purpose, the transitions carry, the stiffness is gone — and the structure, headings, every number, every `figures/…` image line, and all seven footnotes are in place.

## Interpretation — my judgment

I checked it against my failure-mode list, and every item held:

- **Reliability** is still *"a single-split, uncorrected estimate — conservative and relative ... not a calibrated absolute ceiling."* Not upgraded to "the noise ceiling."
- **Matched cells** are still *"geometric and not yet functionally validated."*
- **The raster** ordering is still per-session, *"not comparable row-for-row."*
- **Units** are still *"arbitrary units, not ΔF/F,"* with the no-normalization choice intact.
- **The classifier** footnote still flags the autocorrelation inflation.
- And the spine held: *"This pass finds no DOI effect"* — every pre/post difference stays candidate-and-confounded, the arc still lands on 97% as the binding constraint. No difference was quietly promoted to a finding.

The factorization paid off exactly where I expected the value to be: Desktop supplied the writing, but the *checking* — knowing that "the noise ceiling" would have been a lie and "geometric" a load-bearing word — was mine, and only mine. The reach is shared; the judgment is the analyst's. This is the cleanest instance yet of why that division is the whole point.

## Conclusion — a filed thought

**Signed off and applied** — the rewrite is now the report, with the chat-scrape's stray footnote line-breaks cleaned on the way in. Better prose, same analysis, nothing lost.

**A tooling finding worth keeping:** the `/think` write passes its message as a CLI argument, and Windows caps that near 8 KB — a whole-document prompt (~11 KB here) fails with "command line is too long." I worked around it with a thin sibling, `_think_write_file.ts`, that reads the message from a file and composes the *same* `dispatch` resource. Two things for the team: long-prompt thinking needs a file-input path (Adam may fold this into `think.ts` properly), and Desktop defaults to a **canvas** for long outputs — ask for inline raw text when the read must capture it.

**The writing lesson, filed:** handing a whole document out for a prose pass is safe *only* when you hold a concrete fidelity checklist drawn from the analysis itself. Without that list I would have had to trust the rewrite; with it, signing off was a verification, not a hope.

<!-- citations -->
[previous]: 02-a-codebase-that-outlives-the-project.md
[research-topics]: ../research-topics/01-neuroscience.md
[autobiography]: ../nancy-or-the-weight-of-evidence/.cover.md
[the-report]: ../../../../../../library/reports/2026-06-23-exploration/initial-data-exploration.md
[the-exploration-report]: ../../../../../../library/.lib/the-exploration-report/.cover.md
