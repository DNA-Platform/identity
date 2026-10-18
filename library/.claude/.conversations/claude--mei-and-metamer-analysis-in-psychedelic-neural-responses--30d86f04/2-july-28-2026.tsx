import { Append, Bold, Chapter, Date, Emphasis, Heading, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { CodeBox, Dated, Message, Speaker, Verbatim } from '../../../.manual/.book';
import { Action, Attachment, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[28 July 2026](2026-07-28)</Date>
        </Dated>
        <Title>[[ 28 July 2026 ]]</Title>
        <Message
            at="2026-07-28T14:38:49.767147Z"
        >
            <Origin>019fa929-d2d2-7792-a679-d8f6c291f451</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Okay so we've made some progress. We are upsampling the image to give more resolution, and we can upsample
                the filter. But we will probably need to upsampling something in the network - the team is talking about
                some way of combining features. Can you find a combination rule to convert activation with features into
                what the network predicts perhaps? I don't fully understand what is possible but we are ultimately trying to
                figure out what the activity in the network represents in terms of the features of the network. SO help me
                understand composition rules in this technology
            </Paragraph>
            <Attachment
                identifier="untitled"
                type=".txt"
            >
                Attached a file without a name
            </Attachment>
            <Attachment>Uploaded a file without a name, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-07-28T14:42:05.076360Z"
        >
            <Origin>019fa929-d2d2-7ac1-bdbd-a30896fbf3a2</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>
                Searched the web for “Ding Tolias Sinz "combinatorial code" digital twin nonlinear computations mouse V1
                shared feature dictionary readout weights”
            </Action>
            <Paragraph>
                Composition in this architecture is real, exact, and lives in exactly one place. Here it is properly.
            </Paragraph>
            <Heading>Where linearity actually lives</Heading>
            <Paragraph>
                The readout is not merely linear in features, it is <Word>
                    <Bold />
                    rank-one separable
                </Word> per cell. Each neuron's readout decomposes into a spatial mask encoding its receptive field location
                and a vector of feature weights encoding predictive CNN features, and those feature weights function as a
                bar code summarizing the neuron's function.
            </Paragraph>
            <CodeBox>
                {`u_i = Σ_p m_i(p) · ⟨w_i , Φ(:,p)⟩ + b_i          Φ = Core(x),  Φ ∈ R^{K×H×W}
r_i = ELU(u_i) + 1`}
            </CodeBox>
            <Paragraph>
                So the readout operator <Word>
                    <Verbatim />
                    R
                </Word> has rows <Word>
                    <Verbatim />
                    R_i = w_i ⊗ m_i
                </Word>. Three consequences follow immediately, and they answer most of your question.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    1. Response to pre-activation is exactly invertible.
                </Word> ELU+1 is monotone, so <Word>
                    <Verbatim />
                    u = g⁻¹(r)
                </Word> in closed form: <Word>
                    <Verbatim />
                    r − 1
                </Word> where <Word>
                    <Verbatim />
                    r ≥ 1
                </Word>, <Word>
                    <Verbatim />
                    log r
                </Word> below. No approximation, no optimization. The first half of "convert activation into features" is
                free.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    2. The Gram factorizes.
                </Word>
            </Paragraph>
            <CodeBox>
                {`(R Rᵀ)_ij = ⟨w_i , w_j⟩ · ⟨m_i , m_j⟩`}
            </CodeBox>
            <Paragraph>
                A feature-similarity term times a spatial-overlap term. This is your inclusion-exclusion, and the useful
                part is that it <Word>
                    <Bold />
                    factorizes
                </Word>: two cells share credit only insofar as they both sit in the same place <Word>
                    <Emphasis />
                    and
                </Word> read similar features. Neither alone is enough. That is a nontrivial structural fact and it is why
                the overlap correction is cheap.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    3. The composition rule, written out.
                </Word>
            </Paragraph>
            <CodeBox>
                {`c   = (R Rᵀ + λI)⁻¹ ( g⁻¹(r) − b )
Φ̂(:,p) = Σ_i c_i · m_i(p) · w_i`}
            </CodeBox>
            <Paragraph>
                In words: <Word>
                    <Bold />
                    each cell deposits its own feature vector at its own location, scaled by its response, with the coefficients corrected for mutual overlap by the Gram inverse.
                </Word> That is the exact answer to "convert activation with features into what the network represents." No
                fitting. Everything on the right side is already in the trained readout.
            </Paragraph>
            <Heading>Why Nancy's next step will fail as stated, and the fix</Heading>
            <Paragraph>
                <Word>
                    <Verbatim />
                    Φ̂
                </Word> above lies in <Word>
                    <Verbatim />
                    span&#123;w_i ⊗ m_i&#125;
                </Word>, dimension at most 749. Achievable feature maps <Word>
                    <Verbatim />
                    Core(x)
                </Word> form a manifold of dimension at most the pixel count. Those two sets are nearly disjoint. At 64
                channels and roughly two cells per spatial location, <Word>
                    <Verbatim />
                    Φ̂
                </Word> has energy in 2 of 64 channels at each position and zero in the rest. It is not a feature map any
                image produces, so inverting it will produce nothing.
            </Paragraph>
            <Paragraph>
                That is figure 16 again, one level up. Same category error, new coordinates. Worth catching before it is
                built.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The fix is to never solve for Φ̂.
                </Word> Impose both constraints at once: find the image whose features project correctly.
            </Paragraph>
            <CodeBox>
                {`R · Core(x) = g⁻¹(r) − b`}
            </CodeBox>
            <Paragraph>
                Linearize at the stimulus, <Word>
                    <Verbatim />
                    Core(x+δ) ≈ Φ + Jδ
                </Word>, and let <Word>
                    <Verbatim />
                    A = R J
                </Word> (749 × n_pixels):
            </Paragraph>
            <CodeBox>
                {`δ = Aᵀ ( A Aᵀ + λ I )⁻¹ ε_u ,        ε_u = g⁻¹(r_t) − g⁻¹(r̄)`}
            </CodeBox>
            <Paragraph>
                Solve the 749×749 system by conjugate gradient. Each matvec is one VJP plus one JVP through core and
                readout. Nothing is materialized. Twenty CG steps is about forty passes per trial, which at 36×64 is minutes
                for the whole test set.
            </Paragraph>
            <Heading>The reconciliation, and I think the reason the fill looked faint</Heading>
            <Paragraph>What you are computing now is</Paragraph>
            <CodeBox>
                {`d = ∇_x ⟨ε, f(x)⟩ = Aᵀ Λ ε`}
            </CodeBox>
            <Paragraph>
                which is the <Word>
                    <Bold />
                    first term
                </Word> of the expression above with the inverse dropped. Gradient versus Gauss-Newton. <Word>
                    <Verbatim />
                    A Aᵀ
                </Word> has enormous dynamic range across cells, some are easy to drive and some are nearly silent, so
                <Word>
                    <Verbatim />
                    Aᵀ
                </Word> alone is dominated by whichever directions the core happens to amplify rather than by what the
                residual is asking for. That is a very plausible mechanism for a fill that came out faint and isotropic, and
                it is a one-loop change to test.
            </Paragraph>
            <Paragraph>
                So the composition rule is not a new framework. <Word>
                    <Bold />
                    It is the correction term you have been missing.
                </Word> One backward pass becomes twenty CG iterations, same tools, no new dependencies.
            </Paragraph>
            <Heading>What the population represents, as a number you can get today</Heading>
            <Paragraph>
                Stack the readout weights into <Word>
                    <Verbatim />
                    W
                </Word> (749 × 64) and take its singular values. Ustyuzhaninov et al. found the bar codes cluster into
                roughly 30 modes across a continuum, so expect the effective rank to be well below 64.
            </Paragraph>
            <Paragraph>
                That number is the vocabulary. It says how many independent things this population can express at a
                location, and therefore how many independent things a hallucination can be made of. It bounds the whole
                enterprise and it costs one SVD. Run it before anything else.
            </Paragraph>
            <Paragraph>
                Two diagnostics worth having alongside it: the spatial-overlap matrix <Word>
                    <Verbatim />
                    ⟨m_i,m_j⟩
                </Word> tells you how much redundancy you have per position, and the feature-similarity matrix <Word>
                    <Verbatim />
                    ⟨w_i,w_j⟩
                </Word> tells you whether co-located cells read the same thing or complementary things. If co-located cells
                are near-orthogonal in <Word>
                    <Verbatim />
                    w
                </Word>, your local feature recovery is much better conditioned than the raw cell count suggests.
            </Paragraph>
            <Heading>Upsampling the network</Heading>
            <Paragraph>Three facts, then a recommendation.</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The core is fully convolutional, so any input size runs.
                </Word> And <Word>
                    <Verbatim />
                    μ_i
                </Word> are stored in normalized <Word>
                    <Verbatim />
                    &#91;-1,1&#93;
                </Word> grid coordinates, so <Word>
                    <Verbatim />
                    grid_sample
                </Word> rescales the readout for free. Positions transfer at zero cost.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    But feeding an upsampled image to an unchanged core silently rescales its tuning.
                </Word> A kernel fit to a 3-pixel feature still spans 3 pixels, which on a 4× canvas is one quarter of the
                visual angle it was trained on. Every learned feature shifts up by 4× in cycles per degree, into a band the
                mouse cannot resolve, and the network goes blind to the band it was actually fit to. This will not error. It
                will just quietly produce nonsense.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The correct rescale is to expand the kernels by the same factor.
                </Word> Bilinearly upsample each conv kernel by 4 and renormalize, and scale strides and any pooling to
                match. Prefer kernel interpolation over dilated convolution: à trous introduces its own gridding artifact,
                which would be a particularly unfortunate thing to add to a figure whose current problem is a checkerboard.
            </Paragraph>
            <Paragraph>
                Unit test, one line: feed the 4× stimulus to the 4× core with the same <Word>
                    <Verbatim />
                    μ_i
                </Word> and confirm the predicted responses match the original model on the original image, to interpolation
                error. That validates the entire rescale.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    What this buys, honestly.
                </Word> Content at 0.25 cyc/px on a 36×64 grid is one cycle per four pixels. It is forced to be blocky and
                near axis-aligned. There is no orientation resolution up there. That is the checkerboard, and it is a
                rendering constraint, not a statement about the network. The same content, expressed in cycles per degree on
                a 4× canvas, is one cycle per sixteen pixels: smoothly positionable at any phase and any orientation. The
                blocks become oriented blobs and gratings, several cycles across a receptive field.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    What it does not buy.
                </Word> After a correct rescale the network's cutoff in cycles per degree is unchanged. Everything between
                the old Nyquist and the new one is invisible to the model, so nothing there can be network-driven. Do not
                paint there. Keep the synthesis band strictly below the original cutoff.
            </Paragraph>
            <Paragraph>
                That is your canvas principle made rigorous, and I think it is the better version of it: the canvas is
                large, the content is band-limited to what the animal's cells can express, and the extra canvas buys smooth
                rendering of that content rather than invented detail. Band-limited content at 0.08 to 0.25 cyc/px rendered
                on a 4× canvas is exactly the regime where you get patterns that hold their statistics and reward staring.
            </Paragraph>
            <Heading>Order</Heading>
            <Paragraph>
                <List ordered />
                <Line>
                    SVD of <Word>
                        <Verbatim />
                        W
                    </Word>. The vocabulary size. One line, and it bounds everything.
                </Line>
                <Line>Kernel-rescale the core, run the response-match unit test.</Line>
                <Line>
                    Swap the single gradient step for CG on <Word>
                        <Verbatim />
                        (AAᵀ + λI)
                    </Word>. Compare the fill against the current one at matched norm.
                </Line>
                <Line>
                    Then A(f) by the phase-scramble sweep, which is still the measurement that decides whether the mid band
                    is open.
                </Line>
            </Paragraph>
            <Paragraph>
                Step 3 is the one I would do first among the substantive ones. If Gauss-Newton alone makes the fill oriented
                and image-locked where the gradient made it isotropic, that tells you the content was there and the
                estimator was throwing it away, and it costs a loop.
            </Paragraph>
        </Message>
        <Message
            at="2026-07-28T19:10:29.692686Z"
        >
            <Origin>019faa22-9f36-7111-bc42-3e33c08df50b</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                What do you think the team is saying here? I am trying to find some structure to work from that we can do
                outside of the network so we can adapt the thing to work with higher resolution images. Maybe you know how
                to adjust that in the network directly? I feel like the team is having trouble figuring out what, if any
                operations can be performed in a way that can work on larger images. Here's what they have been saying
            </Paragraph>
            <Attachment
                identifier="untitled-2"
                type=".txt"
            >
                Attached a file without a name
            </Attachment>
            <Attachment>Uploaded a file without a name, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-07-28T19:12:43.384888Z"
        >
            <Origin>019faa22-9f36-758d-9b40-6d13af2e0070</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                They're saying three things, and one of them is buried under a correction that I think is itself mis-framed.
                That mis-framing is exactly what's blocking the resolution question, so let me start there.
            </Paragraph>
            <Heading>Pixels are the wrong unit. Bands are the right unit.</Heading>
            <Paragraph>
                Nancy's correction says: 749 constraints against 246 pixels in the strip, over-determined 3:1, and the
                freedom is outside the strip plus the nonlinear degeneracy plus the released band. The implied worry is that
                upsampling dilutes this, because pixels grow as the square of the scale factor while constraints stay fixed
                at the cell count. At 4× the strip is 3936 pixels against the same 749 numbers and it looks hopeless.
            </Paragraph>
            <Paragraph>
                That inference is wrong, and it's wrong for a reason that makes the whole resolution problem tractable.
            </Paragraph>
            <Paragraph>
                If you rescale the core's kernels along with the image, the network's tuning in cycles per degree is
                unchanged. So its Jacobian at high resolution has support <Word>
                    <Bold />
                    only below the original cutoff
                </Word>. All 749 constraints still live in that band. Upsampling adds pixels, but every added pixel is above
                cutoff, where the constraint count was already zero.
            </Paragraph>
            <Paragraph>
                So the constrained band does not dilute. It stays exactly as over-determined as it was at 36×64, forever, at
                any resolution. What upsampling adds is a new band with no data in it at all.
            </Paragraph>
            <Paragraph>
                That is a much cleaner partition than "3:1 then underdetermined," and it converts the resolution question
                from "how much can we afford" into "what do we declare about the free band."
            </Paragraph>
            <Heading>The structure, outside the network</Heading>
            <Paragraph>
                Work in a steerable pyramid at the target resolution and split the subbands three ways. This is the
                structure you're asking for, and it's basis-native so it upsamples without anything special happening.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Band 1, determined.
                </Word> Below cutoff, A(f) near 1. Copy from the stimulus. Untouched, by construction.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Band 2, released.
                </Word> Below cutoff, A(f) below 1. Amplitude from the stimulus times G(f), phase from the residual-driven
                content. This is the measurement, and it lives entirely at native resolution regardless of what canvas you
                render it on.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Band 3, free.
                </Word> Above cutoff. The network is blind here. No amount of recording constrains it. Either leave it empty
                or fill it by a declared rule.
            </Paragraph>
            <Paragraph>
                Everything the data touches is bands 1 and 2, where the counting works and always will. Band 3 is a
                rendering layer with a stated generative rule and zero data content. That maps exactly onto Cathy's tiers:
                bands 1 and 2 are tiers one and two, band 3 is tier three and gets labeled.
            </Paragraph>
            <Paragraph>
                The practical consequence is that you can render at any resolution you like without weakening a single
                claim, as long as the partition is enforced and reported.
            </Paragraph>
            <Heading>Adjusting the network directly, and what I think is the good idea</Heading>
            <Paragraph>
                The mechanical part is straightforward. Bilinearly upsample each conv kernel by s and renormalize, scale
                strides and pooling to match, leave <Word>
                    <Verbatim />
                    mu
                </Word> alone since it's already in normalized grid coordinates. Unit test: the rescaled core on the
                upsampled image should reproduce the original model's responses on the original image to interpolation
                error. Prefer kernel interpolation over dilated convolution, since à trous introduces its own gridding
                artifact and a gridding artifact is the last thing this figure needs.
            </Paragraph>
            <Paragraph>
                The interesting part is what to do with band 3, and there's an option that is better than a diffusion prior
                and costs nothing.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Run the same network at a finer scale.
                </Word> Rescale the kernels by s = 1/2 and the network's feature vocabulary is unchanged in shape but tuned
                to twice the spatial frequency. Those aren't the animal's cells anymore, but they are the same dictionary
                applied at a scale the recording cannot resolve. So band 3 gets filled by asking what this population's own
                feature vocabulary would paint, one octave down, seeded by the content that band 2 determined.
            </Paragraph>
            <Paragraph>
                Recurse. Each octave inherits the motif from the octave above and renders it with the same vocabulary at
                half the size.
            </Paragraph>
            <Paragraph>
                Two things recommend this. It is self-similar, and self-similar detail that repeats the same structural
                motif across scales is precisely what makes an image read as hyperreal rather than merely sharp. It is also
                the reported phenomenology, recursive and scale-repeating, and it is what the Ermentrout-Cowan and Bressloff
                line predicts from V1's own dynamics rather than from image statistics.
            </Paragraph>
            <Paragraph>
                The assumption you are declaring is scale-invariance of the feature vocabulary. That's a real assumption and
                it should be stated, but it is a defensible one for V1 and it is far more endogenous than an ImageNet prior.
                And it has a free consistency check: downsample the synthesized image back to native resolution and confirm
                the network's response is unchanged. If band 3 leaks into band 2, that test catches it.
            </Paragraph>
            <Heading>The measurement that should replace the counting</Heading>
            <Paragraph>
                The 749-versus-246 argument is an upper bound, not a number. Cells at the same location give partly
                redundant constraints, the readout weights have effective rank 51 of 64 and cluster into roughly 30
                functional modes, and the core spreads each feature-space constraint over many pixels with unknown
                conditioning.
            </Paragraph>
            <Paragraph>
                The actual quantity is the singular spectrum of <Word>
                    <Verbatim />
                    A = R·J
                </Word> restricted to the strip. Randomized SVD via JVP and VJP, no matrices materialized, a few hundred
                passes total. Where the singular values fall off is the true count of image-space degrees of freedom a trial
                pins down.
            </Paragraph>
            <Paragraph>
                That single computation answers the resolution question quantitatively. If the spectrum has, say, 300 usable
                directions, then the honest native working resolution for the strip is around √(300/246) ≈ 1.1× and
                everything beyond is band 3. If it has 700, you get 1.7×. Either way it is a measurement rather than an
                argument, and it also tells you the right <Word>
                    <Verbatim />
                    λ
                </Word> for the CG solve, since the ridge should sit at the noise floor of that spectrum.
            </Paragraph>
            <Heading>Two engineering notes</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    The  0  failure is worth fixing rather than working around.
                </Word> <Word>
                    <Verbatim />
                    sample_grid
                </Word> clamps <Word>
                    <Verbatim />
                    mu
                </Word> in place, which <Word>
                    <Verbatim />
                    torch.func
                </Word> forbids. Falling back to double-backward costs roughly 2× per matvec, and CG needs many matvecs, so
                this matters.
            </Paragraph>
            <Paragraph>
                The clean fix also buys you something you want independently: at eval with fixed <Word>
                    <Verbatim />
                    mu
                </Word>, the sampling grid is a constant. Precompute it once and replace the readout forward with an
                explicit <Word>
                    <Verbatim />
                    F.grid_sample
                </Word> followed by the einsum with <Word>
                    <Verbatim />
                    w
                </Word>, the bias, and ELU+1. Ten lines, exactly equivalent, no in-place ops, forward-mode works, and it
                hands you <Word>
                    <Verbatim />
                    R
                </Word> explicitly so the Gram, the pseudoinverse and the SVD above all become direct rather than implicit.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The 136% number is measuring the wrong displacement.
                </Word> That's gray to a full natural image. The displacement this pipeline actually takes is the
                residual-driven perturbation, which is one to two orders of magnitude smaller. Re-run completeness with
                baseline at the stimulus and endpoint at the stimulus plus the synthesized δ. I'd expect single-digit
                percent at m=1, not 136.
            </Paragraph>
            <Paragraph>
                And then use the path-averaged Jacobian inside the CG solve rather than the Jacobian at a point, recomputed
                each outer iteration. That is Gauss-Newton with the exact secant operator, it's exact by completeness at
                convergence, and it dissolves the linearization concern instead of bounding it.
            </Paragraph>
            <Heading>What I'd do in order</Heading>
            <Paragraph>
                <List ordered />
                <Line>
                    Explicit readout. Unblocks forward-mode and exposes <Word>
                        <Verbatim />
                        R
                    </Word>.
                </Line>
                <Line>
                    Randomized SVD of <Word>
                        <Verbatim />
                        A
                    </Word> on the strip. The real degree-of-freedom count and the real resolution budget.
                </Line>
                <Line>
                    CG with the path-averaged Jacobian, replacing the single gradient step. Compare the fill at matched
                    norm.
                </Line>
                <Line>Kernel rescale with the response-match unit test.</Line>
                <Line>Then the three-band partition, with band 3 empty at first.</Line>
            </Paragraph>
            <Paragraph>
                Band 3 filled by scale recursion is the last step and the fun one, but it should go in only after 1 through
                3 show that band 2 has real structure in it. Otherwise you'd be rendering a beautiful recursive extension of
                noise.
            </Paragraph>
        </Message>
        <Message
            at="2026-07-28T22:14:52.997299Z"
        >
            <Origin>019faacb-6e00-7aa3-9dc6-ba147411c8c3</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Listen, I want to be able to innovate by being able to modify higher resolution photos in a way consistent
                with the network. I need a way to do that. Composition of features outside of the network is one way. How do
                I get to my goal? If I can't, explain that. Because I don't see how what you are saying is particularly
                relevant
            </Paragraph>
        </Message>
        <Message
            at="2026-07-28T22:16:44.713624Z"
        >
            <Origin>019faacb-6e00-774d-b9ed-888245925a11</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Yes, you can do this, and the route runs through a fact I've been treating as a limitation when it's
                actually the mechanism.
            </Paragraph>
            <Heading>The fact that makes it work</Heading>
            <Paragraph>
                The readout weights <Word>
                    <Verbatim />
                    w_i
                </Word> live in <Word>
                    <Bold />
                    channel space
                </Word>. They say "cell i likes this combination of the 64 features." They contain no scale information at
                all. Scale lives entirely in the core's kernel size, which is a number you control.
            </Paragraph>
            <Paragraph>
                So the measured object, the thing you actually recorded from the animal, is scale-free: a 64-dimensional
                feature vocabulary plus 749 readout combinations plus per-cell locations in normalized coordinates. What is
                <Word>
                    <Emphasis />
                    not
                </Word> scale-free is the kernel width, and that was never measured. It was set by the training resolution.
            </Paragraph>
            <Paragraph>
                That means running the core on a high-res image without rescaling kernels is not an error. It is applying
                the animal's measured feature vocabulary at a finer scale. You get a virtual population with the same
                feature preferences and smaller receptive fields. Every parameter in that population came from the mouse
                except one, and that one you are choosing deliberately.
            </Paragraph>
            <Paragraph>
                I buried this at the end of my last reply and labeled it optional. That was wrong. It is the answer.
            </Paragraph>
            <Heading>Route A: run the network at several scales at once</Heading>
            <Paragraph>
                Downsampling by <Word>
                    <Verbatim />
                    s
                </Word> and running the native core is equivalent to rescaling kernels by <Word>
                    <Verbatim />
                    s
                </Word> and running on the high-res image. So one operator covers everything:
            </Paragraph>
            <CodeBox>
                {`X̃  high-res image
minimize over X̃:   Σ_s  λ_s · || f( D_s(X̃) ) − ( r̄ + κ_s ε_t ) ||²_Σ`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Verbatim />
                    s = 8
                </Word> is the native scale, where <Word>
                    <Verbatim />
                    r̄
                </Word> and <Word>
                    <Verbatim />
                    ε_t
                </Word> were actually measured and the problem is over-determined. <Word>
                    <Verbatim />
                    s = 4, 2, 1
                </Word> are finer octaves, where you reuse the same population deviation pattern <Word>
                    <Verbatim />
                    ε_t
                </Word> and set its strength with <Word>
                    <Verbatim />
                    κ_s
                </Word>.
            </Paragraph>
            <Paragraph>
                Gradients flow through <Word>
                    <Verbatim />
                    D_s
                </Word>, which is just average pooling, so this is one optimization in high-res pixel space with no new
                machinery. Add your amplitude ledger and coherence budget as a constraint at each octave and the photo keeps
                its statistics.
            </Paragraph>
            <Paragraph>
                Reusing <Word>
                    <Verbatim />
                    ε_t
                </Word> across octaves is the assumption, and it is the right one to make: the same population deviation,
                expressed at finer scale. It produces self-similar structure, the same motif recurring at every size, which
                is exactly what makes an image read as hyperreal instead of merely sharp, and it is the reported
                phenomenology.
            </Paragraph>
            <Heading>Route B: feature atoms, outside the network</Heading>
            <Paragraph>This is what you asked about, and it works, with one honest caveat.</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Getting the atoms.
                </Word> For each of the 64 core channels, optimize a small patch to maximize that channel's activation at
                its center, under a norm constraint. Patch size is the core's receptive field, maybe 20 pixels. That is 64
                tiny MEIs, minutes total. These come out localized, oriented, and bandpass, which is what Olshausen and
                Field predict for a dictionary fit to natural images and what feature visualization gives on early conv
                layers.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The atoms are images, so they render at any size.
                </Word> That is your whole requirement and it is why this route exists.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Composing.
                </Word> Use the Gram rule to get the feature-space target from the trial:
            </Paragraph>
            <CodeBox>
                {`${''}c  = (RRᵀ + λI)⁻¹ ( g⁻¹(r_t) − b )
Φ̂(k,p) = Σ_i c_i m_i(p) w_i[k]`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    Rendering at scale.
                </Word> Place atom <Word>
                    <Verbatim />
                    a_k
                </Word> scaled by <Word>
                    <Verbatim />
                    Φ̂(k,p)
                </Word> at high-res position <Word>
                    <Verbatim />
                    s·p
                </Word>, sum over channels and positions. That is a high-resolution image whose local structure is the
                network's own features at the measured amplitudes, at whatever size you choose.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The caveat, and how to remove it.
                </Word> This is not an inverse of the core, so <Word>
                    <Verbatim />
                    Core(render) ≠ Φ̂
                </Word>. It is a rendering of the code, not a preimage. But that is checkable rather than fatal: downsample
                the render, run the native network, measure what fraction of the target response it reproduces. Then fit one
                gain per channel, 64 numbers by least squares, to maximize that fraction. Now the rendering is a calibrated
                decoder with a stated accuracy instead of a picture you hope means something.
            </Paragraph>
            <Heading>Use both</Heading>
            <Paragraph>
                Route B gives you a high-resolution starting image built from measured atoms, in one pass, no optimization.
                Route A refines it until it actually drives the network at every scale.
            </Paragraph>
            <CodeBox>
                {`1.  x   = D_8(X)                          native
2.  ε_t = g⁻¹(r_t) − g⁻¹(r̄)               measured drive
3.  Φ̂   from the Gram rule                 exact, closed form
4.  X0  = render(Φ̂, atoms at 8×)           Route B, high-res init
5.  X̃   = optimize from X0 under the multi-scale objective, with the
          amplitude ledger and coherence budget enforced per octave
6.  check: || f(D_8(X̃)) − r_t || against || ε_t ||`}
            </CodeBox>
            <Paragraph>
                Step 6 is the thing that keeps you honest and it is cheap. The native-scale response has to come out right.
                If the fine-scale content leaks down and breaks it, you see it immediately.
            </Paragraph>
            <Heading>What you cannot do</Heading>
            <Paragraph>
                The recording contains zero bits about how those cells responded to detail finer than the stimulus
                resolution, because that detail was never on the monitor. No method recovers it. Any structure above the
                original cutoff is generated.
            </Paragraph>
            <Paragraph>
                But that was never the real constraint. The constraint is on <Word>
                    <Bold />
                    where the generator comes from
                </Word>, and there you have a genuinely good answer available: the animal's own measured feature vocabulary,
                driven by the animal's own measured trial deviation, rather than a natural-image prior trained on
                photographs the mouse never saw.
            </Paragraph>
            <Paragraph>
                The claim you get to make is precise and it is strong: <Word>
                    <Emphasis />
                    this is what this population's measured feature vocabulary paints, driven by this trial's measured deviation, rendered at a chosen scale.
                </Word> Not "the mouse saw this." The scale is declared, everything else is measured.
            </Paragraph>
            <Paragraph>
                Which is what you have been saying since the canvas remark. The canvas is the resolution of imagination, the
                vocabulary is the animal's, and the only thing you are choosing is how large to draw it.
            </Paragraph>
        </Message>
        <Append
            identifier="untitled"
            type=".txt"
        >
            ![[ untitled.txt ]]
        </Append>
        <Append
            identifier="untitled-2"
            type=".txt"
        >
            ![[ untitled-2.txt ]]
        </Append>
    </Chapter>
);
