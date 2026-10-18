import { Bold, Chapter, Date, Emphasis, Heading, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker, Verbatim } from '../../../.manual/.book';
import { Action, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[30 June 2026](2026-06-30)</Date>
        </Dated>
        <Title>[[ 30 June 2026 ]]</Title>
        <Message
            at="2026-06-30T12:17:50.067300Z"
        >
            <Origin>019f1876-cdfa-700d-a976-50419390def1</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Goodness-of-fit / model-quality testing for digital-twin encoding models — what does the literature actually
                use, and how do you compare it ACROSS conditions with different noise ceilings?
            </Paragraph>
            <Paragraph>
                Context: mouse V1 two-photon calcium (Reimer/Tolias lineage, Sensorium-style static-image encoding model).
                We have a 2x2 of twins on the SAME matched cells: &#123;baseline (pre-DOI), DOI (post)&#125; x
                &#123;behaviour-conditioned (arm A), stimulus-only (arm B)&#125;. Held-out test, repeat-averaged. Our
                numbers (median): pre/A FEVE 0.62, corr-to-avg 0.57, 456 reliable cells pre/B FEVE 0.48, corr-to-avg 0.57,
                456 reliable post/A FEVE 0.31, corr-to-avg 0.37, 369 reliable &lt;-- the outlier post/B FEVE 0.51,
                corr-to-avg 0.52, 369 reliable We currently report FEVE (Schoppe 2016), correlation-to-repeat-average, and
                the leave-one-out oracle noise ceiling.
            </Paragraph>
            <Paragraph>
                Questions (cite sources — Schoppe 2016, Lurz 2021, the Sensorium 2022/2023 papers, Cobos 2022, Pospisil
                &amp; Bair, etc.):
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    What is the FULL toolkit the field uses to assess encoding-model goodness of fit? e.g. CC_abs vs CC_norm
                    vs CC_max (Schoppe), FEVE / fraction-of-explainable-variance, the oracle/noise ceiling, single-trial vs
                    repeat-averaged correlation, the Sensorium leaderboard metric exactly, held-out-vs-train gap
                    (overfitting), per-neuron vs population, calibration of Poisson predictions, residual/qq analysis, and
                    any goodness-of-fit TEST (not just a point metric).
                </Line>
                <Line>
                    THE KEY ONE: post-DOI the noise ceiling itself drops (fewer reliable cells, more variable responses).
                    How does the field separate "the encoder is a genuinely worse fit" from "there is simply less
                    explainable variance under the drug, so any model scores lower"? FEVE normalizes by explainable variance
                    — does that fully correct for it, or are there residual gotchas? What is the right way to compare
                    goodness of fit between two conditions whose noise ceilings differ?
                </Line>
                <Line>
                    Specifically: our DOI BEHAVIOUR twin (post/A) collapses while the DOI stim-only twin (post/B) holds.
                    corr-to-avg (NOT ceiling-normalized) is also low for post/A (0.37 vs ~0.57). What diagnostics
                    distinguish (a) behaviour↔response coupling genuinely breaking under the drug, from (b) an arm-A
                    training/architecture pathology, from (c) just lower data reliability?
                </Line>
                <Line>
                    Gotchas comparing FEVE across conditions with different reliable-cell counts (456 vs 369) — the
                    fixed-reliable-in-both-states discipline; anything else.
                </Line>
            </Paragraph>
            <Paragraph>Be exact and cite paper section / equation where you can.</Paragraph>
        </Message>
        <Message
            at="2026-06-30T12:21:40.791736Z"
        >
            <Origin>019f1876-cdfb-720b-b8dc-06382c9cbba0</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                This is the kind of question where the equations have to be exact, so let me pull Schoppe and Pospisil &amp;
                Bair directly rather than risk misstating the estimators.
            </Paragraph>
            <Action>
                Searched the web for “Schoppe 2016 measuring performance neural models CCnorm CCabs CCmax signal power
                normalized correlation equation”
            </Action>
            <Paragraph>
                Schoppe's equations confirmed exactly (CCnorm = CCabs/CCmax, with CCmax = √&#91;(N·Var(ȳ) − mean
                Var(y))/((N−1)Var(ȳ))&#93;). Now the bias-correction literature, which is the crux of question 2.
            </Paragraph>
            <Action>
                Searched the web for “Pospisil Bair 2021 unbiased estimation fraction variance explained neural model r2_ER
                bias low signal-to-noise trials”
            </Action>
            <Paragraph>
                Good — I pulled Schoppe and Pospisil &amp; Bair so the equations are exact. The most important structural
                fact about your design first, because it short-circuits half the problem: <Word>
                    <Bold />
                    your 2×2 is on the same matched cells, so within a condition the two arms share an identical noise ceiling.
                </Word> CCmax is a property of the responses y, not the model, so pre/A and pre/B have the same CCmax, and
                post/A and post/B have the same CCmax. That means the A-vs-B contrast is ceiling-controlled <Word>
                    <Emphasis />
                    by construction
                </Word>, and the cross-ceiling problem only bites the same-arm-across-condition contrasts. Hold that; it
                resolves Q3 cleanly.
            </Paragraph>
            <Heading>1 · The toolkit</Heading>
            <Paragraph>The point metrics, and exactly what each does:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        CCabs
                    </Word> — Pearson correlation between prediction and repeat-averaged response, CCabs =
                    Cov(r̄,ȳ)/√(Var(r̄)Var(ȳ)) (your "corr-to-avg"). Affine-invariant: blind to gain/offset errors.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        CCmax
                    </Word> — the ceiling, Schoppe 2016 (from Hsu 2004): CCmax = √&#91;(N·Var(ȳ) − mean_t Var(y)) /
                    ((N−1)·Var(ȳ))&#93;, N = repeats. Depends only on the data and N, not the model.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        CCnorm = CCabs/CCmax
                    </Word> (Schoppe Eq. 8); CCnorm² is meant to read directly as "percent explainable variance explained."
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        SPE / FEV-explained
                    </Word> — the signal-power-explained metric (Sahani &amp; Linden 2003), which is what <Word>
                        <Verbatim />
                        neuralpredictors.get_fev
                    </Word> computes (your FEVE). Crucially it is <Word>
                        <Bold />
                        MSE-based
                    </Word>, so unlike CCabs it <Word>
                        <Emphasis />
                        penalizes gain/offset miscalibration
                    </Word>. Schoppe's key result: SPE and CCnorm² are nearly identical above ~50% performance but diverge
                    sharply below it (his Fig. 2; Eq. 7 vs Eq. 28 coincide only as prediction error → 0). So FEVE and
                    CCnorm² are <Word>
                        <Emphasis />
                        not
                    </Word> interchangeable in your low range — and their divergence is itself diagnostic (see Q3).
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        FEV
                    </Word> (fraction of explainable variance, SP/TP) — a property of the <Word>
                        <Emphasis />
                        data
                    </Word> (the ceiling), report it separately so you can see whether the ceiling or the fit moved.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Oracle correlation
                    </Word> (leave-one-out: one repeat vs. mean of the rest) — the empirical ceiling; Walker 2019 / Lurz
                    2021 report <Word>
                        <Bold />
                        fraction-oracle
                    </Word> = model_corr / oracle_corr.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Single-trial correlation
                    </Word> — the Sensorium 2022 leaderboard's primary metric (predictions vs <Word>
                        <Emphasis />
                        single
                    </Word> trials, averaged over neurons); repeat-averaged correlation and FEVE are the characterization
                    metrics, not the leaderboard score.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Held-out − train gap
                    </Word> — overfitting; report per arm.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Poisson calibration / residuals
                    </Word> — note PoissonLoss here is a <Word>
                        <Emphasis />
                        quasi-likelihood
                    </Word>: deconvolved calcium is continuous, non-negative, zero-inflated, not counts, so a formal Poisson
                    GOF test (deviance, QQ of randomized-quantile residuals) will show misspecification by construction. Use
                    held-out Poisson log-likelihood (bits/response) as a relative score, not a generative test.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        A goodness-of-fit *test
                    </Word>*, not a point metric — the field is metric-heavy and test-light. The rigorous substitute is
                    <Word>
                        <Bold />
                        Pospisil &amp; Bair 2021
                    </Word> confidence intervals (below): the "test" becomes whether the CI on the corrected fraction
                    excludes chance / overlaps the ceiling.
                </Line>
            </Paragraph>
            <Heading>2 · The key one: comparing fit across different noise ceilings</Heading>
            <Paragraph>
                FEVE/CCnorm normalize by the ceiling, so in <Word>
                    <Emphasis />
                    expectation
                </Word> they correct for a lower explainable variance. They do <Word>
                    <Bold />
                    not
                </Word> fully correct, for three reasons that all get worse exactly where you are (post-DOI, lower SNR):
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Ratio-of-noisy-estimates bias.
                    </Word> FEVE is (estimated explained)/(estimated explainable); both are noisy and the expectation of the
                    ratio is only approximately the ratio of expectations. As the denominator (explainable variance) shrinks
                    under DOI, the estimate gets more biased and heavy-tailed. Median-over-cells dampens but does not remove
                    this.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Direction-of-bias flips by method.
                    </Word> Naive r²/CCabs is <Word>
                        <Emphasis />
                        pessimistically
                    </Word> biased — as trial-to-trial variability rises, measured correlation falls, so a perfect model
                    looks poor. Naive normalized estimators can swing the other way: Pospisil &amp; Bair find some commonly
                    used methods substantially overestimate model fit. So an uncorrected FEVE can <Word>
                        <Emphasis />
                        understate
                    </Word> post-DOI fit (via the raw-r² component) or <Word>
                        <Emphasis />
                        overstate
                    </Word> it (via the normalization) — and which dominates depends on SNR, which differs across your
                    conditions. That is precisely the confound you're worried about, and normalization alone doesn't kill
                    it.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Variance explosion + residual bias at low SNR.
                    </Word> At low SNR the corrected estimators become so variable that confidence intervals can cover the
                    entire &#91;0,1&#93; range, and an appreciable bias remains in the population average that they could
                    not fully correct (their Eq. 16).
                </Line>
            </Paragraph>
            <Paragraph>The right way to compare across conditions with different ceilings:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Fix the cell set
                    </Word> (reliable-in-both — your discipline; see Q4) so population composition is constant.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Use a bias-corrected estimator with CIs
                    </Word>: Pospisil &amp; Bair's r²_ER (subtracts unbiased noise-term estimates from numerator and
                    denominator of r²) with BCa bootstrap CIs. Report the CI, and use their <Word>
                        <Bold />
                        SNR metric to threshold and to report each condition's SNR
                    </Word>, so a fit-difference is interpreted against the SNR-difference rather than instead of it.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Report the ceiling itself
                    </Word> (oracle corr / FEV) alongside the normalized score, so "the encoder got worse" vs "there was
                    less to explain" is <Word>
                        <Emphasis />
                        visible
                    </Word>, not inferred from one ratio.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Lean on the ceiling-matched contrasts you already have
                    </Word> (the within-condition A-vs-B), where this entire problem is absent.
                </Line>
            </Paragraph>
            <Paragraph>
                Bottom line: FEVE is the right <Word>
                    <Emphasis />
                    direction
                </Word> but not a sufficient correction across your pre/post ceiling gap; it must be paired with SNR
                reporting and CIs, and the strongest claims should ride on the ceiling-matched arm contrast.
            </Paragraph>
            <Heading>3 · The post/A collapse — diagnosing (a) vs (b) vs (c)</Heading>
            <Paragraph>Your numbers settle more than you might think, because of the same-cells design.</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    It is not (c) lower reliability alone.
                </Word> post/A and post/B are the <Word>
                    <Emphasis />
                    same 369 cells with the same CCmax
                </Word>. If the collapse were just lower explainable variance, both arms would fall together. Instead post/A
                (0.31 FEVE, 0.37 corr-avg) sits far below post/B (0.51, 0.52). Since corr-avg is <Word>
                    <Bold />
                    not
                </Word> ceiling-normalized and both arms share the ceiling, the gap is a genuine arm-A degradation, not a
                normalization artifact. And the sign flips across conditions — <Word>
                    <Bold />
                    behaviour helps pre (A 0.62 &gt; B 0.48) and hurts post (A 0.31 &lt; B 0.51)
                </Word> — which is the signature of the behaviour pathway, not of data quality.
            </Paragraph>
            <Paragraph>
                (Aside worth noting: pre/A and pre/B have <Word>
                    <Emphasis />
                    identical
                </Word> corr-avg (0.57) but different FEVE (0.62 vs 0.48). Same cells, same ceiling, same correlation,
                different FEVE → arm A's predictions are better <Word>
                    <Emphasis />
                    calibrated in gain/offset
                </Word>, which correlation can't see but the MSE-based FEVE can. That's Schoppe's SPE-vs-CCnorm divergence
                below 50% showing up as useful signal — keep reporting both.)
            </Paragraph>
            <Paragraph>
                So the live question is (a) genuine behaviour↔response decoupling vs (b) an arm-A pathology. Diagnostics
                that separate them, cheapest first:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Train−test gap for post/A specifically.
                    </Word> Large gap → the behaviour channels are being fit on the training set and not generalizing. That
                    can be <Word>
                        <Emphasis />
                        either
                    </Word> (b) overfitting <Word>
                        <Emphasis />
                        or
                    </Word> (a) a non-stationary behaviour→response map (train weights don't transfer to test) —
                    disambiguate with the next item.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Behaviour covariate-shift check within post.
                    </Word> The post scan's behaviour distribution is shifted (more locomotion; it's the 97%-decodable
                    scan). Plot train-vs-test behaviour overlap <Word>
                        <Emphasis />
                        within post
                    </Word>; if test behaviour is out-of-distribution, arm A extrapolates → degradation that is really (a)
                    presenting as (b).
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Behaviour-ablation control (the decisive one).
                    </Word> Re-evaluate the trained post/A with behaviour channels (i) frozen to their mean and (ii)
                    trial-shuffled. If frozen/shuffled performance <Word>
                        <Emphasis />
                        rises toward post/B
                    </Word>, the behaviour pathway is injecting harm rather than signal → (a) coupling break or overfit; if
                    it stays low, the degradation is in the core/readout → (b).
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Does behaviour still predict residuals post?
                    </Word> Behaviour↔response mutual information or a behaviour-only baseline; a collapse there is direct
                    evidence for (a).
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Seed spread across the 5-member ensemble for post/A.
                    </Word> One tanking seed → optimization/initialization pathology (b); all five low and consistent →
                    systematic (a).
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Shifter check.
                    </Word> Arm A also carries the eye-position shifter; under DOI pupil-centre tracking may degrade, and a
                    bad shifter hurts A but not B. Test arm A with the shifter disabled.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        The DOI-pupil contamination.
                    </Word> Under a 5-HT2A agonist, pupil is partly a drug readout, so in a single-state twin the behaviour
                    channels are collinear with nuisance — a structural reason behaviour conditioning can stop helping post.
                    This favors (a) and is not fixable by retraining.
                </Line>
            </Paragraph>
            <Paragraph>
                My read of the pattern (behaviour helps pre, actively hurts post, same cells/ceiling): most consistent with
                <Word>
                    <Bold />
                    (a) — the behaviour→response coupling the model exploited at baseline is non-stationary under DOI
                </Word>, with covariate shift amplifying it. But run the ablation before committing; it cleanly separates
                (a) from (b).
            </Paragraph>
            <Heading>4 · Gotchas with 456 vs 369 reliable cells</Heading>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Fixed-reliable-in-both is necessary but not sufficient.
                    </Word> Intersecting the reliable sets removes the <Word>
                        <Emphasis />
                        population-composition
                    </Word> confound (you're no longer comparing different cells). It does <Word>
                        <Bold />
                        not
                    </Word> remove the <Word>
                        <Emphasis />
                        within-cell SNR difference
                    </Word>: the same cell has a lower ceiling post, so its FEVE carries a different (larger) bias post than
                    pre (Q2 point 3). Fixed cell set + per-cell SNR reporting + CIs, not fixed cell set alone.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Selection is correlated with the effect.
                    </Word> The cells that drop out post (456→369) are the ones DOI made unreliable — plausibly the cells
                    whose coupling changed most. Reliable-in-both therefore <Word>
                        <Emphasis />
                        under-samples the cells that changed
                    </Word>, biasing the feature comparison toward stability. Report how the intersection shifts the
                    population (depth, baseline reliability, tuning).
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Check N (usable repeats) is matched.
                    </Word> CCmax depends on N; if motion/behaviour rejection drops more repeats post, CCmax is estimated
                    from fewer trials and is itself noisier. Match or report N per condition.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        FEVE instability at low ceiling.
                    </Word> Expect post FEVE values that clip &gt;1 or go negative per cell; that's the ratio blowing up,
                    not a bug. (The fMRI literature even floors CCmax at 0.3 to stop CCnorm exceeding 1 — a hack that
                    signals how unstable this gets at low SNR.) Report medians <Word>
                        <Emphasis />
                        with
                    </Word> bootstrap CIs, and consider an SNR floor à la Pospisil &amp; Bair (who note ~40% of some
                    recordings fail even a liberal SNR criterion).
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Don't let cell count read as power.
                    </Word> 369 vs 456 is not a sample-size story about DOI — it's n=1 mouse/session either way; the counts
                    are descriptive, and the per-cell estimates are paired within cell.
                </Line>
            </Paragraph>
            <Paragraph>
                If you want one upgrade that addresses Q2 and Q4 together: replace bare median-FEVE comparisons with <Word>
                    <Bold />
                    Pospisil &amp; Bair r²_ER + BCa CIs on the reliable-in-both set, reporting each condition's SNR and oracle ceiling next to the score
                </Word> — and make your headline claims on the ceiling-matched within-condition arm contrast, where none of
                this bias applies.
            </Paragraph>
            <Paragraph>
                One caveat on my own sourcing: I have Schoppe's CCmax/CCnorm and Pospisil–Bair's bias/SNR results verbatim
                from the papers, and the FEVE=<Word>
                    <Verbatim />
                    get_fev
                </Word> identity from the neuralpredictors lineage, but I did not re-pull the exact Sensorium-2022
                leaderboard formula this turn — confirm "single-trial correlation" as the primary metric against Willeke et
                al. §Metrics before quoting it as the leaderboard definition.
            </Paragraph>
        </Message>
    </Chapter>
);
