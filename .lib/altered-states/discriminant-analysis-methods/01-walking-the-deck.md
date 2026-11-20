# Walking the deck: what was implemented, what of QDA it keeps

- **author:** [Nancy](../../../.claude/library/..teamsmanship/..team/nancy/nancy-or-the-weight-of-evidence/.cover.md)

---

Doug, 2026-11-19: *"We are going to research what was implemented for this analysis, go slide by slide, checking
assumptions, until I can confirm that I understand the solutions and the way in which it preserves certain properties
of QDA, the way in which it might not, and what I am uncertain about."*

The deck is [literal-hallucination-qda.pdf](../../../src/reports/imaginary-representation/literal-hallucination-qda.pdf)
(27 pages as of 2026-11-19, with another session's uncommitted note on pages 9 and 12 in the working tree). The code is
`src/analyses/discriminant-analysis/three_qdas.py` (the features) and `patterns.py` (the classification); the
derivations are the [technical notes](../../theory/interpretation-in-discriminant-analysis/main.tex). Every number
below was read from `three_qdas.json` and `patterns.json` on 2026-11-19.

Then, the same evening: *"There is a paper too, but neither does a great job of just finding references. We modified
based on ideas from literature on standard ways to adjust QDA, but it's not clear what we used or what we preserved or
lost so I want us to figure that out."* My reading, said to him: the deck and the notes cite sources, but neither says
step by step which standard adjustment was used, what of it was kept, and what was lost. The map below is that.

## Where the walk stands

- 2026-11-19: the yardstick and the map shown to him, with the check on slides 3 to 5. Waiting for his yes on the map
  before step 1 (slide 6).
- 2026-11-19, later: the other session's leak section set aside at his word (see slide 9); bits kept, and the
  calibration route for justifying them proposed (see slides 3 to 5). Waiting for his word on reading the sources and
  running the check.
- 2026-11-20: his correction that the recordings carry known sides, and his question about the three axes as a
  quadratic form, answered in the room. All six imagination and hallucination decks read at his word. Next: slide 6.
- Confirmed by him: nothing yet.

## The map: each step, its source, what was kept and lost

| step (slides) | taken from (read) | the source does | we do | kept | lost |
|---|---|---|---|---|---|
| 1. each image a class on its literal (6) | encoding-model decoder, van Bergen and Jehee 2018, eq. 1 | class mean from an encoding model; one noise covariance; Bayes' rule | the same, the twin as the encoding model; we assume only the two moments | P1 to P3 for image classes, if the twin is the mean | P4 for the means (tested: 90% among 100; 562.9 against 548) |
| 2. a class of many images (7) | mixture discriminant analysis, mclust eq. 4.1 (Hastie and Tibshirani 1996 not read) | a class is a Gaussian mixture, components fitted by EM | components fixed at the literals, equal weights: the decoder's prior over a set | P1 to P3 under that prior | the set's size enters, 6.5 bits |
| 3. the covariances (8) | factor-analysis decoders, Santhanam et al. 2009 (FAsep, FAcmb); scikit-learn's covariance_estimator | a factor covariance per class or one shared; rank by cross-validated decoding error | C_S its own (FAsep, as QDA); C_E shared (FAcmb, as LDA); rank 8 by held-out likelihood | a regularized maximum-likelihood fit, as in the source | C_E pooled about the twin's prediction, not each class's mean: it holds the twin's error |
| 4. a class composed of parts (9) | none found (pattern component modelling named, not read) | | mean = literal + offset; covariance from another group | each description is a valid QDA class, so the rule is Bayes' rule for those densities | P4 entirely; classes with no samples; P1 to P3 do not follow for recorded activity |
| 5. a feature (11 to 13) | families of models, Penny et al. 2010, eqs. 18 to 21 | uniform family prior; family posterior is the sum of its models' | the same, on the 2 x 2 x 2 descriptions | exact inside the model: posterior log-odds of one part | outside it, P5 only; that a feature answers to its own part alone is not shown |
| 6. the classification (25) | mixture discriminant analysis; regularized discriminant analysis's lambda-step (Friedman 1989, via klaR); reciprocal distribution | lambda is one number chosen by validation | lambda = c, tied to the pattern's distance and summed over with weights 1/c; means on a straight line from g to l_j: no source | Bayes' rule for the stated class densities | classes with no samples; paths by convenience; no image class |

Across steps 5 and 6, the origins (slides 11, 14, 16): natural and featureful are read from origins, not from even
odds, so P3's "one half at zero" holds on the literal axis only. Post-DOI natural is +11.3 bits from its origin and
+4.4 from even odds (75% of samples above even odds; slide 16's 78% is above pre-DOI's own 90th percentile).

Standard, not used: integrating the parameters (Bayesian QDA, Srivastava et al. 2007); low-rank class covariances
(Bouveyron et al. 2007).

## The yardstick: what makes QDA good

Each later slide is judged against these.

| | property | holds when | source |
|---|---|---|---|
| P1 | Bayes rule: the largest posterior is the fewest errors | the class densities are the true ones | Shewchuk, lecture 7 |
| P2 | the log-likelihood ratio is the most powerful test of its size | two simple hypotheses, one of them true | Neyman-Pearson lemma |
| P3 | s(Q1 - Q0) is the probability of class 1 | the densities are the true ones | Shewchuk, lecture 7 |
| P4 | each class's centre and spread estimated from its own samples, consistently | the textbook's estimation | scikit-learn 1.2.2.1 |
| P5 | a group's mean log-likelihood ratio is KL(q, p0) - KL(q, p1) | always, for any truth q | the notes, Proposition 7 |

P5 is the only one that survives when no class is the truth, which is where recorded activity is.

## Slide by slide

Each entry: what the code does, what of P1 to P5 holds, what may not, what is uncertain. Tags as in the notes:
exact, measured, assumed, reading.

**2. Neural activity is an interpretation; the twin models the literal.** Assumed: E[x | p] = f(p) in the image-evoked
state (the twin is trained to predict the mean). Checked at slide 6.

**3 to 5. LDA, QDA, the weight of evidence.** The textbook, unchanged. P1 to P5 are the textbook's. Verified: the
slide-5 marks (1 bit 67%, 2 bits 80%, 4 bits 94%) are 1 / (1 + 2^-b). What to carry: P3 needs the densities to be true.

Bits are kept (Doug, 2026-11-19: *"We do want to get things back to bits. I would like that preserved. But the truth
is, the axes we construct, having a dichotomy with any sense of zero at all is amazing. But we still have to justify our
looseness"*). I had told him to read the deck's bits "never as odds"; the check does not say that. Measured, held out,
misled by c bits or more against Royall's bound 2^-c: visual, 0% on both references at every c; natural and featureful,
image-evoked within the bound (0.4% and 0% at 8 bits against 0.39%), pre-DOI spontaneous above it (2.4% and 1.9%). The
excess is on one reference only. Royall's bound assumes every sample of a reference is truly on its side. Doug,
2026-11-20, of the pre-DOI samples the classification calls imagined: *"this isn't strange semantically. A mouse is
staring at a blank screen for 40 minutes while walking. They are going to stop paying attention. Jake named the
protocol spontaneous activity not emptiness-evoked activity"*. Open: the check cannot separate magnitudes that
overstate from pre-DOI samples truly on the other side.

The justification owed, in order (sources named from memory, not yet read, so not citable yet):
1. Exact: a feature is log2 of a Bayes factor under the stated descriptions: model bits. Read from an origin, a
   difference of two features is still bits (the log of a ratio of Bayes factors: evidence beyond the origin's).
2. Honest bits are calibrated bits: among samples whose side is known, the feature's density on one side over the
   other is 2^F ("the likelihood ratio of the likelihood ratio is the likelihood ratio": Good; van Leeuwen and
   Brummer). Royall's bound is one consequence. Testable.
3. Where not calibrated, the standard repair is logistic-regression calibration of the score into a log-likelihood
   ratio (Brummer and du Preez 2006; Platt 1999, used in qda.py for the third deck). Slope only keeps his zero and
   every sign: it is one tempering constant (power likelihood: Holmes and Walker 2017; Grunwald's safe Bayes). An
   intercept would move the zero; report it as a check on the zero, never apply it without his word.
4. Known sides come from the recordings, and I had forgotten them (Doug, 2026-11-20: *"do you think this might be
   you speaking from a place of memory loss about the data? I think you'll find the meaning of different recordings
   pretty intuitive and completely different"*). I had written that natural and featureful have no recorded pair of
   known side, and proposed constructed probes as if new. The third deck already calibrated its bits that way (qda.py:
   Platt on members made of a literal plus a held-out block's real variation; its slide 10, *"Uncalibrated, the model
   is 2.9 times too confident"*); the fourth deck did not carry the calibration forward. The recordings, each with its
   meaning: pre-DOI spontaneous (a blank screen, not looking); the image recordings before and after DOI (looking at
   natural images, each sample with its own literal, so post-DOI image-evoked has a known side on every word after
   DOI); the stimulus pauses in each image recording, about every 10.6 minutes (looking at a blank screen: visual like
   the images, featureless like spontaneous; in the scans' full traces, not in our exports). Visual's references
   separate completely. Given what the two recordings are, that is expected; it also means a logistic calibration
   slope fitted on them has no upper bound (the data say only "at least this much").

**6. The encoding-model decoder: each image a class centred on the twin's prediction.** Code: the literals are the
twin's, never refitted. Keeps P1 to P3 for the image classes if Assumption 1 holds (van Bergen and Jehee's own model).
Loses P4 for the means: the centre is predicted, not estimated, which is the point (a class for an image shown once or
never). Measured: held out by image, 90.0% name their own image among 100 (chance 1%); squared Mahalanobis distance
from the literal 562.9 against 548 expected; mean departure 1.07 widths against 0.74 expected, so the twin is slightly
off the mean response. Uncertain: the featureless literals are predictions for screens the twin never saw; the twin is
pre-DOI.

**7. Mixture discriminant analysis: a class of many images.** Code: an equal mixture over a set's literals, one
covariance. Exact: the mixture is the class density if the image is uniform on the set (law of total probability). An
instance of mclust equation 4.1 with the components fixed by the twin, not fitted by EM. Keeps P1 to P3 under that
prior. Cost: a set's size enters as log2 of the size ratio, 6.5 bits between 4,873 natural and 53 featureless literals.

**8. Pooled, regularized covariances.** Code: C_S is pre-DOI spontaneous' covariance about its own mean (QDA's own);
C_E is the second moment of image-evoked departures about each image's literal, over 992 samples of 100 test images
(factor analysis, rank 8 for both, chosen by held-out likelihood). Two things the slide does not say:
- C_E is pooled about the twin's prediction, where LDA pools about each class's own sample mean. So C_E holds the
  twin's error as well as trial-to-trial variation (the 562.9 and 1.07 above). A choice, defensible (spread about the
  literal is what "an interpretation of the literal" means), but not LDA's pooling.
- The title's "one sample an image" is true of the training images; C_E is fitted on test images with about ten
  samples each.

**9. The novel step: a class composed of separately estimated parts.** Code: eight descriptions (literal set, offset 0
or d, covariance C_S or C_E). Exact: each description is a legitimate QDA or mixture class (substitution). Not shown:
that comparing them answers "which part differs". Loses P4 (no class is fitted to its own samples; (g, 0, C_S) has no
samples at all) and with it P1 to P3 for recorded activity. Set aside at his word (2026-11-19, *"delete them if they
look... not that helpful"*): another session's uncommitted "does a feature isolate its part" section, its leak.py, and
its slide-12 note (patch and script kept in the session scratchpad, `set-aside-leak/`). It scored probes in-sample and
called a scale effect a leak. My reading, not yet checked numerically: within one covariance visual is D^2 (a - 1/2), and
D^2 is 139.5 nats (201 bits) in C_E's widths and about 627 in C_S's, so a probe whose departure is explained by the
other covariance changes its visual bits with its amount a unmoved (its own offset switch under evoked departures was
198 bits). Whether a feature answers to its own part alone is still open.

**10 to 13. What is estimated; the three features; the Bayes factor; the checks.** Exact inside the model: a feature
is the posterior log-odds of its part with the other two uniform (Penny et al., equation 21). Outside it, P5 only: a
group's mean feature is a difference of two KL divergences. Slide 13's checks are definitional (a literal reads literal
by construction of the offset; a bare literal reads featureless through QDA's log-determinant term, the price of
claiming more room).

**14 to 16. The canonical view; against LDA; post-DOI natural.** Built in: the not-literal side is centred on pre-DOI's
own mean, so pre-DOI rejecting its literal on average is by construction; measured is that it holds held out and that
the distance is 11.8 widths of C_E. Slide 14 says "the model captures it", which reads as more than that. Featureful:
along their joint axes image-evoked varies a median 0.97 times as much as pre-DOI spontaneous, 2.7 at the 95th
percentile, and 355 times along one axis; and QDA, for a sample far from every centre, favours the wider class (the
discriminant-analysis cover named this bias on 2026-11-15).

**25 to 27. The classification.** Code matches the slide; featureless is c = 0 with either offset (the slide omits
"either"). Measured, not on the slides:
- Post-DOI hallucinated against imagined is +68.8 bits, its visual reading (+70): the literal split of the classes is
  the visual feature.
- Post-DOI's most probable distance out is c = 0.8 (0.7 to 0.9); untied, its literal 0.62 and its covariance 0.83 of
  the way to a natural image. With no image class (his rule), far-out samples can only go to a pattern class.
- The classification's patterns are a straight line in activity space from g to a natural literal, not the pattern
  literals of slides 19 to 24.
- Pre-DOI imagined rises through the recording, by held-out fifth: 9%, 13%, 19%, 21%, 27%.
- On its own session's map post-DOI is visual +70 (100%); on the pre-DOI session's map visual -50 (1%). His canonical
  processing is each session on its own map; which sentence the report makes is his, asked and not yet answered.
- Slide 27 states the classification without slide 9's "not yet shown".
- Slide 26's panel titles name pre-DOI on the left and post-DOI on the right; both panels hold both groups.
Robust to: the falloff (post-DOI 100% hallucinated under all five); the instrument returns each class's own members
96% to 99%.
