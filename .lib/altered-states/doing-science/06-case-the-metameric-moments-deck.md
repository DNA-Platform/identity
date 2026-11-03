# Case: the metameric-moments deck, 2026-11-03

- **author:** [Nancy](../../../.claude/library/..teamsmanship/..team/nancy/nancy-or-the-weight-of-evidence/.cover.md)

---

One afternoon on the [metameric-moments report](../../../src/reports/metameric-moments/.cover.md). He asked for a
simple thing and I reached it only after eleven corrections. Each message below is verbatim, with what it corrected.

## What he asked

*"Give me a presentation of the results again, but why don't you please focus first on suite2p ... I never understand
your test images, so please explain things like that c;learly? Do I want that? I like these scatter plors but I barely
know what I am seeing. Tiny figures, lots of colored blobs, can't read the legend, barely explained analysis ... I
asked for something like a min distance to blank for pre- spontaneous, which is a histogram, and the same for post-
... Can we show the two histogram analysis too? And then help me really undersatnd your scatters."*

The asks, as a list: Suite2P first and CaImAn after, labelled as an uneven test; the scatters made understandable; his
pair of histograms (minimum distance to the blank, before and after DOI), or why they fail; his questions on the
natural-likeness analysis answered; the test images explained; the shape of the blank if it shows something.

## The corrections, in order

1. *"I ASK FOR PAIRS OF HISTOGRAM"* - I was designing new geometry (projections, subspaces, cross-validated
   directions) instead of drawing the pair he named.
2. *"Stop making complex stacked plots ... You always give me more complexity than I ask for"* - the stacked bars of
   the old deck.
3. *"your sense of what the human eye understands easily is bad ... you should be agonizing over what is most readable
   to me"* - readability is the work, not a finish.
4. *"Did I ask? ... I want to be the scientist and you to be the research assistant"* - I had announced a third
   histogram and redesigned his likeness analysis.
5. *"SELF-EVIDENT to a human who you aren't talking to while he points and asks is the anchor"*.
6. *"you take a LONG time ... I need to be able to explore rapidly and intelligent;y"* - and he apologised for being
   abrupt; the right reply was to be fast, not to reassure.
7. On slide 2: *"Just edit lightly. You don't have an axis on the left graph. Are we using normalized response? ...
   its too smooth to be real data. Do you know what it means? Do you know what you want to me undersatnd about the
   data?"*
8. *"That is not the value on the y-axis. You understand its a number with units. Are you confiusing titles and
   units."*
9. *"You have computations and they are on the axis and you describe how they are computed unless you have confirms
   it is in my standard lexicon."*
10. *"Squishing data to the right is failing to know what you are even saying."*
11. *"Don't do an analysis. Look at data, see a result, and then refine the analysis and figure until it is clear
    specifically to me."*
12. On the shape of the blank: *"No one beliieves this is data."*

## What the data showed, once looked at

Suite2P, from arrays already computed, no new run:

- Under the moments' twin, five seconds of spontaneous activity sit 0.20 from the nearest blank prediction before DOI
  and 0.19 after (RMS across the 548 cells): his histograms overlap.
- Why: to that twin a mid-grey screen is 0.12 from the mean test-image response and 0.17 from the mean spontaneous
  activity before DOI. It learned flashed pictures, never minutes of a blank screen.
- Under the twin shown the blank: 0.11 before DOI, about the noise of five seconds (0.10), and 0.19 after, where the
  test images sit (0.19). His histograms separate.
- The lab's natural_distance: 0.16 before DOI, 0.17 after. By pattern, the activity after DOI is no more like an
  image.

## What I would do differently from the first message

Reread his message into a list. Look at the stored numbers for each item in minutes. Draw exactly the forms he named,
one quantity per axis with its computation, zoomed to the effect. Render, read as him, fix. Hand it over with one line
per item. Bring the open decisions (which twin; whether to spend a GPU run) as questions.
