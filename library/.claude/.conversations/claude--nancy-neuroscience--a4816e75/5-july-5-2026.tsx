import { Bold, Chapter, Date, Emphasis, Heading, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker, Verbatim } from '../../../.manual/.book';
import { Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[5 July 2026](2026-07-05)</Date>
        </Dated>
        <Title>[[ 5 July 2026 ]]</Title>
        <Message
            at="2026-07-05T21:18:15.406946Z"
        >
            <Origin>019f3425-593f-77c8-aa42-2b807c208953</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Continuing Nancy &gt; Neuroscience — a step up from the per-setting questions, to the whole analysis.
            </Paragraph>
            <Paragraph>
                Where the parallel Twin thread just landed (summary of my last exchange): I asked you about the readout
                receptive-field position in our single-mouse single-session V1 twin, and you verified from source that
                learned-μ (grid_mean_predictor=None) is a REVERSION to our instrument lineage, not a deviation — Walker 2019
                used a free per-neuron readout (predates Lurz's cortex predictor); Franke 2022's nndichromacy code defaults
                grid_mean_predictor=None and anchors retinotopy via CoordConv position channels into the core (exactly our
                arm-A design); Cobos metamers are readout-agnostic. So the four trained twins' architecture is now verified
                as publication-faithful, with ONE thing still unconfirmed: the gamma-regularization plateau-check on our own
                scan (the frozen Lurz/Sensorium gammas are canonical but were fit on a different dataset, and we never ran
                the verify-search).
            </Paragraph>
            <Paragraph>
                The audit question (bounded — I want the checklist and the 2–3 most-common mistakes, not a full lit review):
            </Paragraph>
            <Paragraph>
                We have four trained digital twins of mouse V1 (baseline + DOI-psychedelic, × behaviour-in / behaviour-out
                arms), on ~749 cells matched across the two scans, built with sinzlab/sensorium + Walker-2019 MEIs +
                Cobos-2022 metamers. They are being handed to the Reimer Lab. I am auditing — purely on ACCURACY, cost is
                irrelevant — whether they are publication-final or need rebuilding.
            </Paragraph>
            <Paragraph>
                Give me the COMPLETE publication-readiness checklist a Reimer/Tolias-lab scientist would apply before
                calling such twins done: what must be CONFIRMED (verified, not merely built) for (1) the encoding twins
                themselves (regularization, ensemble, readout, validation metric, noise ceiling), (2) the MEIs (recipe,
                contrast/energy constraint, fixed behavioural state, the non-Gabor result), (3) the metamers (inversion
                faithfulness, per-scan tuning, re-evoke validity), (4) the pre/post comparison (matched cells, μ
                co-registration, luminance/contrast match, the behavioural-state null, a within-scan temporal-drift /
                no-drug control).
            </Paragraph>
            <Paragraph>
                And: what are the 2–3 confirmations most often SKIPPED that would make a reviewer reject the twins as an
                instrument? I specifically want to know if there is a standard small set of pre-launch confirmations (I
                recall three, with the gamma plateau-check as the third) that the lab treats as the gate.
            </Paragraph>
        </Message>
        <Message
            at="2026-07-05T21:20:16.609752Z"
        >
            <Origin>019f3425-593f-700c-876b-1d6efc69f223</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                The audit axis that matters is exactly the one you named: <Word>
                    <Bold />
                    confirmed vs. merely built.
                </Word> For each item below the question isn't "is it in the pipeline" but "is there an artifact — a sweep,
                a figure, a control — that proves it holds <Word>
                    <Emphasis />
                    on this scan
                </Word>." I'll keep it to the checklist and the killers, no lit review.
            </Paragraph>
            <Heading>(1) The encoding twins</Heading>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Gamma plateau on *this* scan.
                    </Word> Sweep <Word>
                        <Verbatim />
                        gamma_input
                    </Word> and <Word>
                        <Verbatim />
                        gamma_readout
                    </Word> ~1 order of magnitude each around the frozen Sensorium values; confirm a flat validation plateau
                    <Word>
                        <Emphasis />
                        and
                    </Word> that <Word>
                        <Verbatim />
                        gamma_input
                    </Word> isn't in a regime where it changes MEI structure. Built = pasted; confirmed = the sweep exists.
                    (Your open one.)
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Ensemble saturation, not just "n=5."
                    </Word> Confirm every seed early-stopped on val-correlation (not the <Word>
                        <Verbatim />
                        max_iter
                    </Word> ceiling) and that a seed-count curve shows the metric <Word>
                        <Emphasis />
                        and the MEIs
                    </Word> stop moving by 5. The ensemble is the MEI sharpness lever, so saturation is the thing to show.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Readout retinotopy is 2-D.
                    </Word> The learned-μ map must be a smooth 2-D retinotopic progression, not collapsed to a line — the
                    figure, not the assertion.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Validation is ceiling-referenced and bias-aware.
                    </Word> FEVE (Schoppe) + oracle + corr-to-avg on held-out repeat-averaged test, on reliable-in-both
                    cells, full-length <Word>
                        <Verbatim />
                        get_fev
                    </Word> (the survivorship fix), with per-condition SNR and CIs (Pospisil &amp; Bair). A bare correlation
                    is not confirmation.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        The post/A collapse is explained, not shipped.
                    </Word> From the parallel thread this arm is the outlier; the behaviour-freeze/shuffle ablation must
                    have been run to establish (a) coupling non-stationarity vs (b) a pathology. An unexplained worst-arm is
                    not publication-final.
                </Line>
                <Line>First-layer filters oriented/healthy; train−test gap comparable across the four twins.</Line>
            </Paragraph>
            <Heading>(2) MEIs</Heading>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Recipe verbatim.
                    </Word> The Walker preconditioning schedule (Fourier smoothing, blur anneal, norm) lifted from Walker's
                    Methods / the nnvision walker-op defaults — numbers matching, not "structure looks right."
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Energy constraint *and* post-hoc match.
                    </Word> Confirm both the fixed L2 budget during ascent (<Word>
                        <Verbatim />
                        PNormConstraintAndClip
                    </Word> p=2) <Word>
                        <Emphasis />
                        and
                    </Word> mean-luminance + RMS-contrast matching before any comparison. Without the latter every MEI×MEI
                    metric is contrast-confounded — this is the step most often silently absent.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Fixed state, identical and in-distribution.
                    </Word> Same Franke 3rd/97th percentile state for both twins, <Word>
                        <Emphasis />
                        and
                    </Word> that state inside the intersection of both scans' behaviour distributions — not an extrapolation
                    into a state the baseline twin never saw (the covariate-overlap trap).
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Non-Gabor as a positive control.
                    </Word> MEIs must be complex/non-Gabor (Walker); if they come out Gabor-like the core is
                    under-regularized or collapsed toward the linear RF. Confirm via the MEI-vs-linear-RF contrast — this
                    doubles as proof the twin captured V1 nonlinearity.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Init stability
                    </Word> (Walker's ρ≈0.99 across random starts) and RF-localization at μ.
                </Line>
            </Paragraph>
            <Heading>(3) Metamers</Heading>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Re-evoke validity.
                    </Word> The twin's response to the synthesized metamer correlates with the target population response,
                    compared against the repeat-reliability ceiling — the reference-free criterion. This is <Word>
                        <Emphasis />
                        the
                    </Word> metamer confirmation.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Labeled honestly.
                    </Word> Pixel-space inversion is the underdetermined baseline, not Cobos's VAE/flow-prior headline
                    method; either build the prior or name the deliverable "pixel-space reconstruction (Cobos baseline)."
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Multi-seed stability
                    </Word> — underdetermined problem; show seeds converge or report the spread.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Per-scan σ/step tuning is criterion-based and identical across scans
                    </Word> — tuned on re-evoke/SSIM, not chosen visually, and the <Word>
                        <Emphasis />
                        same
                    </Word> protocol for pre and post (not different σ that flatter the comparison).
                </Line>
            </Paragraph>
            <Heading>(4) The pre/post comparison</Heading>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Matching is anatomical-only.
                    </Word> Confirm reciprocal-NN uses registration coordinates, no response/tuning-similarity term —
                    otherwise you select against the cells DOI changed and the comparison is circular.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        μ co-registration across twins
                    </Word> before any RF-mask MEI×MEI metric; independent learned-μ fits jitter the mask and fake "spatial
                    change."
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Within-scan temporal-drift / no-drug control.
                    </Word> Drug is perfectly confounded with scan order (n=1, no vehicle, DOI always second). Confirm a
                    control that isolates drug from time: e.g. early/late split of each scan, showing the pre→post change
                    exceeds within-scan drift; or a baseline-only pseudo-comparison as the null. Without it, "DOI effect"
                    reads as "second-scan effect."
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Scale-invariance discipline.
                    </Word> Every reported comparison metric is a ratio/shape/correlation — no cross-scan amplitude, since
                    per-scan normalization erased gain.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Behavioural null pre-specified
                    </Word> against Franke's "state leaves spatial structure ~unchanged," and cell-wise stats framed as
                    within-animal descriptive (n=1), not a population test.
                </Line>
            </Paragraph>
            <Heading>The 2–3 most-skipped — the reviewer-rejection set</Heading>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        The temporal-drift / order control.
                    </Word> The single most likely killer for a two-scan n=1 psychedelic design, and the easiest to skip
                    because you have to <Word>
                        <Emphasis />
                        build
                    </Word> the null from within-scan splits. A Reimer/Tolias reviewer will ask "how do you know it's DOI
                    and not scan two?" first.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Matching circularity
                    </Word> — proving the match is position-only. Skipped because matching is upstream and "just works"; if
                    it's functional, the entire comparison is circular.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        The gamma plateau-check on this scan
                    </Word> — your third. The frozen gammas shape the MEI/non-Gabor result, so an imported hyperparameter
                    means the headline output rests on someone else's dataset. The archetypal built-not-verified trap.
                </Line>
            </Paragraph>
            <Paragraph>
                (Honorable mentions that quietly confound the comparison: μ co-registration and the luminance/RMS match —
                skip either and the spatial-change metric is measuring the wrong thing.)
            </Paragraph>
            <Heading>On "the standard three the lab gates on"</Heading>
            <Paragraph>
                I want to be straight rather than agreeable here: I can't verify a <Word>
                    <Emphasis />
                    named
                </Word>, canonical Reimer/Tolias "three-check pre-launch gate" from anything we've sourced in this thread —
                I'd be inventing lab doctrine if I claimed it. What I <Word>
                    <Emphasis />
                    can
                </Word> say is that if you asked which three confirmations functionally separate "trustworthy instrument"
                from "good-looking fit" in this lineage, gamma-plateau is legitimately one, and the natural triplet is:
                <Word>
                    <Bold />
                    (i) validation clears the noise ceiling
                </Word> (reliable-in-both FEVE/oracle with CIs), <Word>
                    <Bold />
                    (ii) the forward pass is structurally healthy
                </Word> (2-D retinotopy + stable, non-Gabor MEIs), <Word>
                    <Bold />
                    (iii) the synthesis-shaping hyperparameters are verified on our scan
                </Word> (the gamma plateau). Those three are the minimal set where skipping any one means the MEIs/metamers
                can't be trusted as instruments regardless of how good the correlations look.
            </Paragraph>
            <Paragraph>
                If the "three" you recall came from Erin or a lab conversation, I'd reconcile against that directly — it may
                be a specific local checklist I have no source for, and I don't want to overwrite your actual memory of it
                with my reconstruction. What were the other two you remember?
            </Paragraph>
        </Message>
    </Chapter>
);
