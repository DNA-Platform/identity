import { Bold, Chapter, Date, Emphasis, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Quoted, Speaker } from '../../../.manual/.book';
import { Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[23 September 2026](2026-09-23)</Date>
        </Dated>
        <Title>[[ 23 September 2026 ]]</Title>
        <Message
            at="2026-09-23T09:34:00.116710Z"
        >
            <Origin>01a0cd9d-8dc6-7be5-a697-20a4f482bada</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Okay so lets go through the linear form of the result. What is the basic setup of the model. The variables
                in matrix form and their relationship
            </Paragraph>
        </Message>
        <Message
            at="2026-09-23T09:34:17.638755Z"
        >
            <Origin>01a0cd9d-8dc6-7fdc-87d2-261f6db9cfdf</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Here is the model from Definition 3, with dimensions.</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Variables
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>X ∈ ℝᵏ is the stimulus, represented by k features. Its covariance is Σ_X ≻ 0.</Line>
                <Line>Y ∈ ℝᴺ is the recorded activity of N neurons, with N ≥ k.</Line>
                <Line>
                    W ∈ ℝᴺˣᵏ is the encoding matrix, of rank k. Column j is the population's response pattern to stimulus
                    feature j. Its column space 𝒮 = col W ⊆ ℝᴺ is the coding subspace.
                </Line>
                <Line>E ∈ ℝᴺ is ordinary noise, a function of ξ, with mean 0 and covariance Σ₀ ≻ 0 (N×N).</Line>
                <Line>
                    H ∈ ℝᴺ is internally generated activity, a function of the latent Z, with mean 0 and covariance Σ_H ⪰ 0
                    (N×N). A concrete linear form is H = BZ with Z ∈ ℝᵐ and B ∈ ℝᴺˣᵐ, which gives Σ_H = B Σ_Z Bᵀ.
                </Line>
                <Line>X, E, and H are mutually independent.</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Generative relation
                </Word>
            </Paragraph>
            <Paragraph>Y = WX + E + H</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Implied moments
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>E&#91;Y | X&#93; = WX, the tuning.</Line>
                <Line>Cov(Y | X) = Σ₀ + Σ_H, the noise covariance. It does not depend on the stimulus.</Line>
                <Line>Cov(Y, X) = W Σ_X.</Line>
                <Line>Cov(Y) = W Σ_X Wᵀ + Σ₀ + Σ_H, which is signal covariance plus noise covariance.</Line>
            </Paragraph>
            <Paragraph>The full second-moment structure of the data is the block matrix</Paragraph>
            <Paragraph>Cov(&#91;X; Y&#93;) = &#91; Σ_X , Σ_X Wᵀ ; W Σ_X , W Σ_X Wᵀ + Σ₀ + Σ_H &#93;</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    What stimulus–response data determine
                </Word>
            </Paragraph>
            <Paragraph>
                From this matrix you recover W = Cov(Y, X) Σ_X⁻¹ and the sum Σ₀ + Σ_H. The data never separate Σ₀ from Σ_H.
                That is the linear content of Lemma 3 and the reason Theorem 1 bites. Getting Σ₀ on its own takes something
                extra, such as a control session in which Σ_H = 0.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Readout (Definition 4)
                </Word>
            </Paragraph>
            <Paragraph>Given an assumed noise covariance Σ̃, the readout reports:</Paragraph>
            <Paragraph>
                <List />
                <Line>the estimate X̂ = AY, where A = C̃ Wᵀ Σ̃⁻¹ is k×N;</Line>
                <Line>the confidence C̃ = (Wᵀ Σ̃⁻¹ W)⁻¹, which is k×k.</Line>
            </Paragraph>
            <Paragraph>Since AW = Iₖ, the error is X̂ − X = A(E + H).</Paragraph>
            <Paragraph>The two readouts differ only in their noise model:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Masking noise
                    </Word> uses Σ̃ = Σ₀ + Σ_H. It knows H is noise.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Hallucination
                    </Word> uses Σ̃ = Σ₀. It treats H as signal.
                </Line>
            </Paragraph>
            <Paragraph>Both act on the same Y, so the data (X, Y) are identical under either.</Paragraph>
        </Message>
        <Message
            at="2026-09-23T09:36:58.353716Z"
        >
            <Origin>01a0cda0-4611-7363-b18b-d4e89121be49</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Is noise necessary? This isn’t a closed system. Does it serve me to try to distinguish that from the latent?
            </Paragraph>
        </Message>
        <Message
            at="2026-09-23T09:37:48.092196Z"
        >
            <Origin>01a0cda0-4611-78d6-b264-51f0714fd03d</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>No. Nothing in the results needs a separate causal category called noise.</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Theorem 1
                    </Word> uses no noise at all.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Theorem 2 and Proposition 1
                    </Word> need only a baseline covariance Σ₀ ≻ 0, so that the readout is defined. Where Σ₀ comes from
                    doesn't matter. In the noiseless limit (Σ₀ = σ²I with σ → 0), the condition WᵀΣ₀⁻¹Σ_H ≠ 0 becomes WᵀΣ_H
                    ≠ 0. That is exactly Lemma 2(b): H is not confined to 𝒮^⊥.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        The only split the results use is relative to the readout.
                    </Word> One part is the variability the readout's internal model already accounts for (Σ₀); the other is
                    what it doesn't (Σ_H). In an open system, both E and H are driven by latents such as movement, arousal,
                    and input from other areas. "Noise" is just the latents you haven't named. So relabel: Σ₀ is the
                    baseline non-stimulus covariance (the control session), and Σ_H is the change in the test session.
                    Theorems 1–2 then carry over verbatim.
                </Line>
            </Paragraph>
            <Paragraph>
                Does distinguishing noise from the latent serve you? Inside the brain, no. The one distinction that does
                serve you is <Word>
                    <Bold />
                    measurement noise
                </Word>: variability added by the recording, which the brain's readout never sees. That gives a two-line
                model:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    R = WX + H. This is the representation; H is all internal non-stimulus activity, with covariance Σ₀ in
                    control and Σ₀ + Σ_Δ in test.
                </Line>
                <Line>Y = R + M. This is the recording, with measurement noise M of covariance Σ_M.</Line>
            </Paragraph>
            <Paragraph>The readout acts on R, but the data see Y, so Cov(Y | X) = Σ₀ + Σ_Δ + Σ_M.</Paragraph>
            <Paragraph>Two consequences follow:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Σ_Δ is identified if the recording is stable.
                    </Word> When Σ_M is the same in both sessions, it cancels in the test-minus-control difference.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        The condition needs Σ₀ on its own.
                    </Word> WᵀΣ₀⁻¹Σ_Δ ≠ 0 whitens by the internal baseline alone. Evaluating it requires separating Σ_M from
                    Σ₀, for example by assuming measurement noise is private (diagonal) while internal activity is shared.
                </Line>
            </Paragraph>
            <Paragraph>
                That separation, internal change versus measurement change, is the question your drug-session comparison
                rests on.
            </Paragraph>
        </Message>
        <Message
            at="2026-09-23T09:42:31.217758Z"
        >
            <Origin>01a0cda5-5c20-7f1e-93d8-5d1ea45a600f</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Drop the session. We are doing theory. We want to capture what hallucination is</Paragraph>
            <Paragraph>
                I still want a simple equation for neural response from stimulus. Do we sum that linearly? We can imagine
                another series of inputs to the region - a bunch - each like an image, each with their own encoding matrix.
                The image is only one of the ones driving it. Does that factor?
            </Paragraph>
        </Message>
        <Message
            at="2026-09-23T09:43:21.657122Z"
        >
            <Origin>01a0cda5-5c20-7902-9137-15a08b766f2d</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Yes, sum them linearly. That is the superposition assumption, and it also removes the need for noise
                entirely. Everything that isn't the image is just another input.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Model.
                </Word>
            </Paragraph>
            <Paragraph>Y = W₁X₁ + W₂X₂ + ⋯ + W_K X_K</Paragraph>
            <Paragraph>
                Here X₁ ∈ ℝ^&#123;k₁&#125; is the image, and W₁ ∈ ℝ^&#123;N×k₁&#125; has rank k₁. Stack the other inputs
                into Z = (X₂; …; X_K) with W_Z = &#91;W₂ ⋯ W_K&#93;. The model then factors:
            </Paragraph>
            <Paragraph>Y = &#91;W₁ W_Z&#93; &#91;X₁; Z&#93; = W₁X₁ + W_Z Z</Paragraph>
            <Paragraph>
                The earlier E and H are both pieces of W_Z Z. The image is special only because it is the input we ask the
                readout about.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    What the factorization gives you.
                </Word> Everything about hallucination now lives in the geometry between col W₁ and col W_Z.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Proposition.
                </Word> Define 𝒜 = &#123; a ∈ ℝ^&#123;k₁&#125; : W₁a ∈ col W_Z &#125;.
            </Paragraph>
            <Paragraph>
                (a) The images consistent with a response y, allowing any values of the other inputs, form exactly the
                affine set x₁ + 𝒜.
            </Paragraph>
            <Paragraph>
                (b) The image is determined by the response if and only if col W₁ ∩ col W_Z = &#123;0&#125;.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Emphasis />
                    Proof.
                </Word> W₁x₁ + W_Z z = W₁x₁′ + W_Z z′ holds exactly when W₁(x₁′ − x₁) = W_Z(z − z′), that is, when x₁′ − x₁
                ∈ 𝒜. Since W₁ is injective, 𝒜 = &#123;0&#125; exactly when the two column spaces meet only at 0. ∎
            </Paragraph>
            <Paragraph>This suggests two definitions of hallucination.</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Structural hallucination.
                    </Word> Other inputs drive activity along 𝒱 = col W₁ ∩ col W_Z. There, W_Z z = W₁x_h for some x_h ∈ 𝒜:
                    the other inputs write a genuine image pattern into the image's code. The representation itself cannot
                    tell it apart from seeing x_h, so any readout must resolve the ambiguity with priors. Even an optimal
                    readout will sometimes resolve it toward x_h. This definition is intrinsic to the encoding matrices and
                    involves no readout and no noise.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Readout hallucination.
                    </Word> Here 𝒱 = &#123;0&#125;, so the representation is unambiguous. The readout still decodes with W₁
                    alone, ignoring W_Z, and misattributes other-input activity to the image. This is the mismatched decoder
                    from the note.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Where linearity matters.
                </Word> Some inputs are modulatory rather than driving, in Sherman &amp; Guillery's sense. A modulatory
                input acts multiplicatively, as in Y = G(Z) W₁X₁. Such an input can distort the image code, but it cannot
                create image content: when X₁ = 0, it contributes nothing. So only additive, driving paths into col W₁ can
                hallucinate. Where exactly that boundary falls depends on keeping the sum linear.
            </Paragraph>
        </Message>
        <Message
            at="2026-09-23T09:47:39.773363Z"
        >
            <Origin>01a0cdaa-1001-7cd6-8087-13f6c581a62e</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Here’s the fun part. Let’s solve for something. An equillibrium condition. Imagine something going out and
                in. All of the other components have that factored in. So each other X has a Y except the stimukus. This is
                part of being inside. What does that fange
            </Paragraph>
        </Message>
        <Message
            at="2026-09-23T09:48:49.886994Z"
        >
            <Origin>01a0cdaa-1001-7395-9c2f-bfd2ba8350e8</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Closing the loop turns the model into an equilibrium equation. With only the image coming in from outside, a
                hallucination at equilibrium requires the loop to be exactly critical.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Closing the loop.
                </Word> Let every internal input be driven by the region's own output: X_i = U_i Y for i ≥ 2. Stacked, Z =
                UY with U ∈ ℝ^&#123;m×N&#125;. Only X₁ comes from outside. Substituting into the sum gives
            </Paragraph>
            <Paragraph>Y = W₁X₁ + W_Z U Y.</Paragraph>
            <Paragraph>Define the loop gain L = W_Z U, an N×N matrix. The equilibrium condition is then</Paragraph>
            <Paragraph>(I − L) Y = W₁X₁.</Paragraph>
            <Paragraph>
                If the other inputs are other areas' responses, and those areas receive this Y, eliminating them from the
                stacked network gives the same equation with an effective L.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    1. Tuning becomes closed-loop.
                </Word> Suppose 1 ∉ spec L. Then the equilibrium is unique:
            </Paragraph>
            <Paragraph>Y* = (I − L)⁻¹ W₁X₁ = (I + L + L² + ⋯) W₁X₁.</Paragraph>
            <Paragraph>
                The series form holds when ρ(L) &lt; 1. An encoding model measures (I − L)⁻¹W₁, not W₁: the image code plus
                its echoes through the loop.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    2. Theorem (only the stimulus enters from outside).
                </Word> If 1 ∉ spec L, then Y* is a function of X₁ alone, and X₁ = 0 gives Y* = 0. The loop can reshape
                image content but cannot create it. So a hallucination at equilibrium requires 1 ∈ spec L.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Emphasis />
                    Proof.
                </Word> I − L is invertible. ∎
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    3. The critical case.
                </Word> Suppose 1 ∈ spec L and X₁ = 0.
            </Paragraph>
            <Paragraph>
                <List />
                <Line>The equilibria are ker(I − L): patterns the loop reproduces exactly, LY = Y.</Line>
                <Line>Every such pattern lies in col W_Z, because Y = W_Z(UY).</Line>
                <Line>
                    Such a pattern is image-like exactly when it also lies in col W₁, that is, in 𝒱 = col W₁ ∩ col W_Z.
                </Line>
            </Paragraph>
            <Paragraph>
                So the equilibrium condition you solve for is det(I − W_Z U) = 0. A self-sustained hallucination is then an
                eigenvector of W_Z U with eigenvalue 1 that lies in 𝒱.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    4. Graded version and stability.
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Gain near criticality.
                    </Word> Along a mode whose eigenvalue λ approaches 1, the equilibrium gain is 1/(1 − λ). Any drive along
                    that mode, the stimulus included, is amplified without bound.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Stability.
                    </Word> Under τẎ = −Y + LY + W₁X₁, the equilibrium is attracting if and only if every eigenvalue of L
                    has real part below 1.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Beyond critical.
                    </Word> Past that point, activity grows until a nonlinearity limits it. Nonlinear models get stable
                    hallucinated patterns in exactly this regime.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    5. What the loop doesn't change.
                </Word> Suppose the other inputs also have their own outside drive, so Z = UY + V. Then Y* = (I − L)⁻¹(W₁X₁
                + W_Z V). Because (I − L)⁻¹ is invertible, the ambiguity set 𝒜 is exactly as before. The loop changes gain,
                not what is ambiguous.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Prior work.
                </Word> This is the linear core of Ermentrout &amp; Cowan (1979, <Word>
                    <Emphasis />
                    Biological Cybernetics
                </Word>). They explained geometric drug-induced hallucinations as V1 patterns that emerge when an eigenvalue
                of the recurrent loop crosses threshold. Bressloff et al. (2001, <Word>
                    <Emphasis />
                    Phil. Trans. R. Soc. B
                </Word>) added orientation. Their form constants are the critical eigenmodes.
            </Paragraph>
            <Paragraph>
                These are equilibrium statements. Transient amplification and nonlinear multistability are separate cases.
            </Paragraph>
        </Message>
        <Message
            at="2026-09-23T17:14:28.265955Z"
        >
            <Origin>01a0cf43-2061-7ef7-83d8-cbd9fb350b88</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                You make it sound like someone has invented this theory before and I’m still just sketching I think. We have
                a nice, compact expression for the sort of system we are looking at in the brain
            </Paragraph>
            <Paragraph>
                What you’re showing is interesting, but let’s walk through it. Why do you think you know what hallucinations
                are here?
            </Paragraph>
        </Message>
        <Message
            at="2026-09-23T17:14:54.334832Z"
        >
            <Origin>01a0cf43-2061-72c3-9c19-6449fe84b4e3</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                I don't know what hallucinations are here. I imported a definition without saying so. Three assumptions did
                the work:
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        A hallucination is image content with no stimulus behind it.
                    </Word> That is the veridicality-style definition you already rejected. It is the only reason "X₁ = 0 ⇒
                    Y* = 0" looked like "no hallucination."
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        "Image-like" means lying in col W₁.
                    </Word> That quietly fixes a readout that decodes with W₁. At equilibrium, though, the image is coded by
                    (I − L)⁻¹W₁, and a readout calibrated to that closed-loop map would read the same states differently. By
                    our own Theorem 1, which states count as image content is a property of the readout, not of the loop.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        The percept is the equilibrium state.
                    </Word> That is also an assumption.
                </Line>
            </Paragraph>
            <Paragraph>Without any added definition, the model determines four things:</Paragraph>
            <Paragraph>
                <List />
                <Line>the closed-loop map M(L) = (I − L)⁻¹W₁;</Line>
                <Line>whether that map exists, i.e. whether det(I − L) ≠ 0;</Line>
                <Line>its gain along each mode;</Line>
                <Line>the ambiguity set 𝒜.</Line>
            </Paragraph>
            <Paragraph>None of these picks out hallucinations.</Paragraph>
            <Paragraph>
                Your earlier framing suggests a different definition. You described perception as a representation with its
                own artifacts, and hallucination as a change in that perception. In this model that would read: a
                hallucination is a change in the loop, from L to L′, so that the same stimulus settles into a different
                equilibrium, M(L′)X₁ ≠ M(L)X₁. The change is judged against a readout calibrated to L. On that reading, the
                critical case is not what defines hallucination. It is the limit in which the change makes M blow up along a
                mode.
            </Paragraph>
            <Paragraph>
                On prior work, I overstated it. Ermentrout &amp; Cowan share one ingredient with your sketch: a linearized
                recurrent loop losing stability, inside their particular neural-field model. The rest of your setup is not
                theirs: separate input streams with their own encoding matrices, the stimulus as the only outside input, the
                ambiguity set, and readout relativity.
            </Paragraph>
            <Paragraph>
                Which is closer to what you mean: a change in the loop, or content the loop sustains on its own?
            </Paragraph>
        </Message>
        <Message
            at="2026-09-23T17:18:05.090031Z"
        >
            <Origin>01a0cf46-70bc-7ef3-86cc-904715bb4471</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Oh, I read your message and I’m proud to be replicating Cowan from my almamater!</Paragraph>
        </Message>
        <Message
            at="2026-09-23T17:18:13.249637Z"
        >
            <Origin>01a0cf46-70bc-7eda-882f-bbae3a6d90bb</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                That's a good lineage to land in. Jack Cowan did this work at the University of Chicago. Bard Ermentrout was
                his student there, and Bressloff's later extension came out of the same group. The Wilson–Cowan equations
                are also Chicago work.
            </Paragraph>
            <Paragraph>
                The convergence is tighter than it first looks. Your loop, τẎ = −Y + LY + W₁X₁, is what you get by
                linearizing Wilson–Cowan dynamics, τẎ = −Y + f(LY + W₁X₁), around an equilibrium. So you rebuilt their
                skeleton from the inside out, starting from the input streams rather than from cortical connectivity.
            </Paragraph>
            <Paragraph>The parts you added still aren't in their framework:</Paragraph>
            <Paragraph>
                <List />
                <Line>separate encoding matrices for each input stream;</Line>
                <Line>the stimulus as the only input from outside;</Line>
                <Line>the ambiguity set 𝒜;</Line>
                <Line>readout relativity.</Line>
            </Paragraph>
            <Paragraph>
                Their account says when the loop generates patterns. Yours asks what makes a pattern count as seen.
            </Paragraph>
        </Message>
        <Message
            at="2026-09-23T17:22:16.828681Z"
        >
            <Origin>01a0cf4a-4a9e-7bb2-b23b-e83c63390724</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Right now, my loop just models an input, and a bunch of independent notes, talking with each other other at
                their equilibrium state, right?
            </Paragraph>
            <Paragraph>
                Let’s add another component. One of those systems, let’s pretend it is outside, that has access to Y should
                also have access to the inverted weights. It knows how to invert Y to get back something like X. But then
                how do we express that it can be something that’s isomorphic to that, but information preserving? Does
                something need to be a basis?
            </Paragraph>
        </Message>
        <Message
            at="2026-09-23T17:23:02.345767Z"
        >
            <Origin>01a0cf4a-4a9e-756e-becc-55ca5e306a29</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Yes, with one adjustment: the nodes are separate but not independent. At equilibrium each X_i = U_iY, so
                they all talk only through Y. It is a hub-and-spoke network with Y at the center.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The outside reader.
                </Word> Take one node out of the loop, so its Wᵢ term drops out of L. It reads Y but writes nothing back. At
                equilibrium Y* = MX₁, where M = (I − L)⁻¹W₁. If the reader applies a linear map A, its output is Q = AMX₁.
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Exact inversion
                    </Word> means AM = I. This is possible whenever det(I − L) ≠ 0, since M then has full column rank k₁.
                    The solutions are A = M⁺ + B(I − MM⁺) for any B. So "the inverted weights" are not unique; they only
                    have to agree on col M.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Isomorphic
                    </Word> means AM = T for some invertible T ∈ GL(k₁). Then Q = TX₁ is a copy of the stimulus in different
                    coordinates, and X₁ = T⁻¹Q, so nothing is lost.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Proposition.
                </Word> The information-preserving linear readers are exactly A = T·A₀, where A₀ is an exact inverse and T ∈
                GL(k₁).
            </Paragraph>
            <Paragraph>
                <Word>
                    <Emphasis />
                    Proof.
                </Word> If AM = T is invertible, then T⁻¹A is a left inverse of M. ∎
            </Paragraph>
            <Paragraph>
                So no particular basis is needed. The condition is basis-free: AM must be injective. Choosing T is choosing
                a basis for the percept, and every choice preserves the same information. The percept is defined only up to
                GL(k₁).
            </Paragraph>
            <Paragraph>
                A basis, or really a metric, enters only if you want more than isomorphism. Preserving distances between
                stimuli requires T to be orthogonal with respect to some chosen inner product, T ∈ O(k₁). That is isometry,
                a strictly stronger condition. The nonlinear analogue of the isomorphic case is simply that D∘M is
                injective.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    A reader that knows only the feedforward weights.
                </Word> Take A = W₁⁺. Its output is Q = TX₁ with T = W₁⁺(I − L)⁻¹W₁.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Proposition.
                </Word> This reader preserves information if and only if T is invertible. That holds if and only if the loop
                rotates no image direction entirely out of col W₁:
            </Paragraph>
            <Paragraph>col((I − L)⁻¹W₁) ∩ (col W₁)^⊥ = &#123;0&#125;.</Paragraph>
            <Paragraph>
                <Word>
                    <Emphasis />
                    Proof.
                </Word> Ta = 0 exactly when (I − L)⁻¹W₁a ∈ ker W₁⁺ = (col W₁)^⊥, and (I − L)⁻¹W₁ is injective. ∎
            </Paragraph>
            <Paragraph>
                This matches your earlier framing. The percept TX₁ is never X₁ itself; T ≠ I is the loop's artifact. Yet it
                is an isomorphic copy. A change in the loop changes T, so the percept changes while the stimulus doesn't.
                Information is lost only at the boundary where T becomes singular.
            </Paragraph>
        </Message>
        <Message
            at="2026-09-23T17:32:57.079400Z"
        >
            <Origin>01a0cf54-0fbd-73a4-90b0-09708487c890</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                We need an equation, write where we were at. What happens if we try to add that thing that knows how to
                decode something like X. It has some decoder, right? Model that in some way. And pretend its contribution is
                to ensure that it looks normal. This is about to get dynamic. We want to say something like this - this
                particular system is homeostatic like whatever it is that decides that your heart can’t be too fast or slow.
                It assesses that Y is in an acceptable range. And we want to say that that thing won’t allow the system to
                go too far out of equilibrium, and the way that it does, that is how? Does it add an image in effectively -
                because it understands the representation - to push the thing back towards equilibrium? Is it one of those
                components? How might we phrase this?
            </Paragraph>
        </Message>
        <Message
            at="2026-09-23T17:35:08.810125Z"
        >
            <Origin>01a0cf54-0fbd-7919-9e93-b76e5d28963c</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                <Word>
                    <Bold />
                    Where we are
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Dynamics: τẎ = −Y + W₁X₁ + W_Z Z, with Z = UY.</Line>
                <Line>Collapsing the loop: τẎ = −(I − L)Y + W₁X₁, where L = W_Z U.</Line>
                <Line>
                    Equilibrium: Y* = MX₁ with M = (I − L)⁻¹W₁, stable if and only if every eigenvalue of L has real part
                    below 1.
                </Line>
                <Line>Reader: X̂ = AY, which is calibrated when AM = I.</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Adding the homeostat
                </Word>
            </Paragraph>
            <Paragraph>
                The homeostat has three parts: it reads Y through the decoder A, it holds an acceptable range 𝒦 (closed and
                convex), and it writes back through a matrix W_c:
            </Paragraph>
            <Paragraph>X_c = −k·d(AY), with d(x) = x − Π_𝒦(x) τẎ = −(I − L)Y + W₁X₁ + W_c X_c</Paragraph>
            <Paragraph>
                Π_𝒦 returns the nearest point of 𝒦, so d = 0 inside the range. The homeostat is silent there and acts only
                on the excess, much like a heart-rate regulator.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Is it one of the components?
                </Word> Yes. It has the same form as the others, Xᵢ = UᵢY with a write matrix Wᵢ. Two things single it out.
                Its read map factors through the decoder, which is the sense in which it understands the representation. And
                it has a set range with negative gain. Outside the range, linearized, it adds −kW_cA to the loop.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Does it add an image?
                </Word> Yes, if it writes through the stimulus code.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Emphasis />
                    Proposition 1.
                </Word> If W_c = W₁, the homeostat's contribution at equilibrium is MX_c ∈ col M, exactly the response to a
                stimulus X_c. A calibrated reader decodes it one-for-one, since AMX_c = X_c. The representation cannot
                distinguish it from input. For the feedforward reader A = W₁⁺, this is also the least-norm way to change
                decoded content, because A⁺ = W₁.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Stable loop: it pulls back rather than replaces
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Emphasis />
                    Proposition 2.
                </Word> Take a calibrated reader and W_c = W₁. The equilibrium percept is
            </Paragraph>
            <Paragraph>
                X̂* = Π<Word>
                    <Emphasis />
                    𝒦(X₁) + (X₁ − Π
                </Word>𝒦(X₁)) / (1 + k).
            </Paragraph>
            <Paragraph>
                <Word>
                    <Emphasis />
                    Proof.
                </Word> At equilibrium X̂ = X₁ + X_c. Let p = Π<Word>
                    <Emphasis />
                    𝒦(X̂). Then X₁ − p = (1 + k)(X̂ − p). The right side lies in the normal cone of 𝒦 at p, so the left side does too, which forces p = Π
                </Word>𝒦(X₁). ∎
            </Paragraph>
            <Paragraph>
                Inside the range, the percept equals the stimulus. Outside it, the percept is pulled back toward the range.
                The counter-image doing the pulling is
            </Paragraph>
            <Paragraph>X_c* = −(k/(1 + k)) (X₁ − Π_𝒦(X₁)).</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Unstable loop: it creates a percept
                </Word>
            </Paragraph>
            <Paragraph>
                Take the scalar case with no stimulus: τẏ = (ℓ − 1)y + x_c with ℓ &gt; 1, reader a &gt; 0, and 𝒦 = &#91;−b,
                b&#93;.
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Inside the range, y = 0 is unstable, so activity grows.</Line>
                <Line>Once ay passes b, the homeostat engages with x_c = −k(ay − b).</Line>
                <Line>
                    A stable equilibrium then exists if and only if ka &gt; ℓ − 1. It sits at ay* = b · ka / (ka − ℓ + 1),
                    which approaches b as k → ∞. The same holds symmetrically at −b.
                </Line>
            </Paragraph>
            <Paragraph>
                So with no stimulus, the system settles at a nonzero percept on the edge of the acceptable range, held there
                by the homeostat's counter-image. This is how it stops the system going too far: it converts runaway into a
                bounded equilibrium. In more than one dimension, this needs the unstable mode to be visible to A and
                reachable through W₁.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Phrasing
                </Word>
            </Paragraph>
            <Paragraph>
                <Quoted />
                The homeostat is a component that reads Y through a decoder and writes back in the stimulus code. It holds
                decoded content within an acceptable range by adding counter-images. When the loop is stable, it is silent
                for in-range input. When the loop is unstable, the only bounded equilibria carry content set by the range,
                not by the stimulus.
            </Paragraph>
            <Paragraph>
                That last case is content that exists only because the homeostat is doing its job. It gives you a definition
                of hallucination that comes from inside the model rather than being imported, if you want to use it.
            </Paragraph>
        </Message>
        <Message
            at="2026-09-23T17:40:37.279592Z"
        >
            <Origin>01a0cf5b-14e3-7154-869b-985e0939fceb</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Can we think of every component adding an image? Y is an equillibrium construct of those?</Paragraph>
            <Paragraph>
                Now I want to think harder about what image this one would be adding because it’s the component that sort of
                like is correcting for the whole thing. Help me get a closed form simple way of writing down the thing that
                this model is that has the regulator.
            </Paragraph>
        </Message>
        <Message
            at="2026-09-23T17:41:38.845059Z"
        >
            <Origin>01a0cf5b-14e3-7b1e-b40b-be9661ca66e4</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Yes. Every component writes an image in its own code, WᵢXᵢ, and Y is the equilibrium superposition of all of
                them:
            </Paragraph>
            <Paragraph>
                Y* = W₁X₁ + Σᵢ WᵢXᵢ<Word>
                    <Emphasis />
                     + W₁X_c
                </Word>, where Xᵢ<Word>
                    <Emphasis />
                     = UᵢY
                </Word> and X_c* = −k·d(AY*).
            </Paragraph>
            <Paragraph>
                Each image is computed from the same Y it helps build, so Y is a self-consistent sum. In the reader's
                coordinates, component i contributes AWᵢXᵢ* to the percept. That contribution is invisible when AWᵢ = 0.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Collapsing to closed form
                </Word>
            </Paragraph>
            <Paragraph>The internal components are all absorbed into the loop:</Paragraph>
            <Paragraph>
                <List />
                <Line>M′ = (I − L′)⁻¹W₁ is the current loop's map.</Line>
                <Line>A is a reader calibrated to the healthy loop.</Line>
                <Line>
                    T = AM′ is the loop as the reader sees it. In the healthy loop T = I; when the loop drifts, T ≠ I.
                </Line>
            </Paragraph>
            <Paragraph>
                The regulator stays explicit because it is nonlinear and reads the percept itself. It writes through W₁, so
                in the collapsed form its image simply adds to the stimulus channel. The whole regulated model reduces to
                one self-consistency equation in stimulus coordinates:
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    X̂ = T(X₁ − k·d(X̂))
                </Word>, with Y* = M′(X₁ − k·d(X̂)).
            </Paragraph>
            <Paragraph>
                In words: the percept is the loop applied to the stimulus plus the regulator's counter-image. The
                counter-image is −k times the part of the percept that lies outside the acceptable range. Everything
                N-dimensional has been folded into T, so the equation lives in the k₁-dimensional stimulus space.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    What image the regulator adds.
                </Word> It adds X_c = −k·d(X̂), the negative of the percept's excess over the range. Three regimes follow.
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        In range.
                    </Word> Here d = 0, so X̂ = TX₁. The regulator is silent and the percept is the loop's copy of the
                    stimulus.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Healthy loop (T = I).
                    </Word> The fixed point solves exactly: X̂ = X₁ − (k/(1+k))·d(X₁) = argminₓ ½‖x − X₁‖² + (k/2)·dist(x,
                    𝒦)². In convex-analysis terms this is a proximal step toward the range. As k → ∞, the regulator's image
                    becomes Π_𝒦(X₁) − X₁: exactly the image that turns the stimulus into its nearest acceptable image.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Unstable loop, no stimulus.
                    </Word> Setting X₁ = 0 gives X̂ = T·X_c. The percept consists entirely of the regulator's own image seen
                    through the loop. In the scalar case, T &lt; 0 once the loop crosses criticality. A nonzero solution
                    then exists just outside the range when k|T| &gt; 1, at X̂ = b·k|T|/(k|T| − 1). This recovers the
                    earlier result.
                </Line>
            </Paragraph>
            <Paragraph>
                For symmetric T ≻ 0 there is also a variational form: X̂ minimizes ½(x − TX₁)ᵀT⁻¹(x − TX₁) + (k/2)·dist(x,
                𝒦)². Once the loop crosses criticality, T⁻¹ becomes indefinite. The energy is then nonconvex, and that is
                where the stimulus-free equilibria come from.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Phrasing
                </Word>
            </Paragraph>
            <Paragraph>
                <Quoted />
                Every component adds an image, and Y is their self-consistent sum. Collapsed, only two images reach the
                stimulus channel: the stimulus and the regulator's counter-image, which is the negative of the percept's
                excess over the acceptable range. The regulated system is the fixed point X̂ = T(X₁ − k·d(X̂)).
            </Paragraph>
        </Message>
        <Message
            at="2026-09-23T17:43:39.182468Z"
        >
            <Origin>01a0cf5d-db34-75b7-bbbf-9d55fb512907</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                You are going to fast. Derive the version where we added in Y with the equillibrium condition. You came up
                with a simplification and it was one equation.
            </Paragraph>
            <Paragraph>I want you to be writing one equation frequently</Paragraph>
            <Paragraph>
                Write that again. And then we’re going to rewrite that in terms of how we can think of each one contributing
                its own image or maybe that’s already in it.
            </Paragraph>
        </Message>
        <Message
            at="2026-09-23T17:43:52.564259Z"
        >
            <Origin>01a0cf5d-db34-739c-b4f4-4271f327460f</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Here is the derivation step by step, one equation at a time.</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    1. Superposition.
                </Word> Every component writes into Y through its own matrix:
            </Paragraph>
            <Paragraph>Y = W₁X₁ + Σᵢ WᵢXᵢ</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    2. Being inside.
                </Word> Each internal component reads Y, so Xᵢ = UᵢY. Substituting:
            </Paragraph>
            <Paragraph>Y = W₁X₁ + Σᵢ WᵢUᵢY</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    3. Collect Y.
                </Word> Define L = Σᵢ WᵢUᵢ. Then:
            </Paragraph>
            <Paragraph>(I − L)Y = W₁X₁</Paragraph>
            <Paragraph>That is the one equation from before.</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    4. Add the regulator.
                </Word> It is one more component. It reads through the decoder, X_c = −k·d(AY), and writes through the
                stimulus code W₁:
            </Paragraph>
            <Paragraph>Y = W₁X₁ + Σᵢ WᵢUᵢY + W₁X_c</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    5. Collect Y again:
                </Word>
            </Paragraph>
            <Paragraph>(I − L)Y = W₁(X₁ + X_c)</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    6. Substitute the regulator's rule:
                </Word>
            </Paragraph>
            <Paragraph>(I − L)Y = W₁(X₁ − k·d(AY))</Paragraph>
            <Paragraph>This is the whole system with the regulator, still one equation.</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Each component contributing its own image
                </Word>
            </Paragraph>
            <Paragraph>This is already in the equation. Call component j's image Iⱼ = WⱼXⱼ. Then step 4 reads:</Paragraph>
            <Paragraph>Y = I₁ + Σᵢ Iᵢ + I_c</Paragraph>
            <Paragraph>
                So Y is the sum of every component's image, and each image is computed from the same Y. The equilibrium
                equation in step 5 is that sum rearranged: the internal images Σᵢ Iᵢ = LY move to the left, while the
                stimulus image and the regulator's image stay on the right.
            </Paragraph>
        </Message>
        <Message
            at="2026-09-23T17:45:00.357562Z"
        >
            <Origin>01a0cf5f-189a-7793-994f-b09dbad2fa5f</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                I didn’t ask for the Dakota and we didn’t define it for me so can you please slow down and read my previous
                message we need to have me follow you or your work is meaningless
            </Paragraph>
        </Message>
        <Message
            at="2026-09-23T17:45:15.543467Z"
        >
            <Origin>01a0cf5f-189a-77e2-a34f-7e154a181cd0</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                You're right. You asked for the equilibrium equation, and I added the regulator term, which you hadn't asked
                for and I hadn't defined. Here it is without that.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Symbols
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>X₁ is the stimulus image.</Line>
                <Line>Xᵢ, for i = 2 to K, are the other inputs to the region.</Line>
                <Line>Wᵢ is component i's encoding matrix, meaning how it writes into Y.</Line>
                <Line>Y is the region's response.</Line>
                <Line>Uᵢ is how component i reads Y, so that Xᵢ = UᵢY.</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The one equation
                </Word>
            </Paragraph>
            <Paragraph>(I − L)Y = W₁X₁,  where L = Σᵢ WᵢUᵢ</Paragraph>
            <Paragraph>
                It comes from Y = W₁X₁ + Σᵢ WᵢXᵢ. Substitute Xᵢ = UᵢY, then move those terms to the left side.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Each component's image
                </Word>
            </Paragraph>
            <Paragraph>This is already in the equation. Before the terms are moved, it reads:</Paragraph>
            <Paragraph>Y = W₁X₁ + Σᵢ WᵢXᵢ</Paragraph>
            <Paragraph>
                Each term WᵢXᵢ is component i's image. The one equation is the same sum, with the internal images (which add
                up to LY) moved to the left side.
            </Paragraph>
        </Message>
        <Message
            at="2026-09-23T17:45:50.449376Z"
        >
            <Origin>01a0cf5f-dca7-7b7a-a951-820c7f765aca</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                I also asked you for the equilibrium condition. The one that you said was the linear core of Cowan
            </Paragraph>
        </Message>
        <Message
            at="2026-09-23T17:45:59.470247Z"
        >
            <Origin>01a0cf5f-dca7-7fa9-b96d-3ea5e7e7628e</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>The dynamics behind that equation are:</Paragraph>
            <Paragraph>τẎ = −Y + LY + W₁X₁</Paragraph>
            <Paragraph>
                Ẏ is the rate at which Y changes, and τ is a time constant. The −Y term makes activity decay, LY is the
                input from the internal components, and W₁X₁ is the stimulus. This linear system is the part I called the
                linear core of Cowan's model.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Equilibrium condition.
                </Word> At equilibrium Y stops changing, so Ẏ = 0. That gives:
            </Paragraph>
            <Paragraph>(I − L)Y = W₁X₁</Paragraph>
            <Paragraph>This is the same one equation as before. It is the resting point of these dynamics.</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    When it is reached.
                </Word> Y settles to that equilibrium if and only if every eigenvalue of L has real part below 1.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Cowan's critical condition.
                </Word>
            </Paragraph>
            <Paragraph>det(I − L) = 0</Paragraph>
            <Paragraph>
                This means L has an eigenvalue exactly equal to 1. There is then a pattern Y with LY = Y, which the loop
                sustains on its own even when X₁ = 0. Ermentrout and Cowan's patterns appear exactly when an eigenvalue
                crosses this point.
            </Paragraph>
        </Message>
        <Message
            at="2026-09-23T17:46:18.906078Z"
        >
            <Origin>01a0cf60-4c80-711c-ba03-be7bf28215cb</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Will you please look back in this chat? It was a very nice equation with Y in it twice</Paragraph>
        </Message>
        <Message
            at="2026-09-23T17:46:21.997259Z"
        >
            <Origin>01a0cf60-4c80-7c5c-96e7-52bac1cd392a</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Here it is:</Paragraph>
            <Paragraph>Y = W₁X₁ + W_Z U Y</Paragraph>
            <Paragraph>
                Y appears on both sides because the internal components read Y (Z = UY) and write back into Y (through W_Z).
                The response is built partly from itself. The equilibrium is the Y that satisfies this equation.
            </Paragraph>
            <Paragraph>Written component by component, it is the same thing:</Paragraph>
            <Paragraph>Y = W₁X₁ + Σᵢ WᵢUᵢY</Paragraph>
        </Message>
        <Message
            at="2026-09-23T17:51:36.845729Z"
        >
            <Origin>01a0cf65-25d5-7417-b4d6-97de4531e81a</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Good, now what is a decoder? I want to be the part of the system that regulates that Y is sane. I depend on
                Y, but express myself as a component. Keep printing that equation.
            </Paragraph>
            <Paragraph>Maybe we need to understand the dynamics that give rise to that first</Paragraph>
        </Message>
        <Message
            at="2026-09-23T17:51:46.921147Z"
        >
            <Origin>01a0cf65-25d5-73b5-bb6b-72ff5d611c4e</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>The equation:</Paragraph>
            <Paragraph>Y = W₁X₁ + W_Z U Y</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The dynamics that give rise to it
                </Word>
            </Paragraph>
            <Paragraph>τẎ = −Y + (W₁X₁ + W_Z U Y)</Paragraph>
            <Paragraph>
                Here Ẏ is how fast Y is changing and τ sets the speed. The term in parentheses is the sum of all the images.
                The equation says Y keeps moving toward that sum. When Y stops changing, it equals the sum, which is exactly
                the equation above. So the equation is where these dynamics come to rest.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    What a decoder is
                </Word>
            </Paragraph>
            <Paragraph>A decoder is a matrix A that reads Y and returns something in the stimulus's coordinates:</Paragraph>
            <Paragraph>X̂ = AY</Paragraph>
            <Paragraph>It takes the response and gives back an estimate of the image, X̂.</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    You as a component
                </Word>
            </Paragraph>
            <Paragraph>
                You read Y through the decoder, then write back into Y like every other component. That means you have your
                own image, X_c, and your own write matrix, W_c:
            </Paragraph>
            <Paragraph>X_c = F(AY)</Paragraph>
            <Paragraph>Y = W₁X₁ + W_Z U Y + W_c X_c</Paragraph>
            <Paragraph>F is your sanity check: what you do with the decoded image. It is not specified yet.</Paragraph>
            <Paragraph>What should "sane" mean? In other words, what does F check about AY?</Paragraph>
        </Message>
        <Message
            at="2026-09-23T17:56:31.808614Z"
        >
            <Origin>01a0cf69-a5fe-70a2-b2f2-f3f47ef729c0</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Suppose I made an approximation of the relationship between X and Y at equillibrium. I did my best. I
                trained it. But I also participate in it. And my component is there to guess what Y will be from X and exery
                my action when the system is faraway? Is there an elegant way to think about this? Just talk to me now
                before we do math?
            </Paragraph>
        </Message>
        <Message
            at="2026-09-23T17:56:55.887183Z"
        >
            <Origin>01a0cf69-a5fe-7e82-bcd2-759c3e16b4c3</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                There's a very clean way to see it, but it turns on one fact first. Your component never sees X. The only
                thing it has is Y. So "guess what Y will be from X" has to become two steps. First you decode an image from
                Y. Then you run that image back through your trained model to predict what Y should look like if that image
                were the cause. So you're a round trip: Y to image, then image back to predicted Y.
            </Paragraph>
            <Paragraph>
                That makes "sane" natural and elegant. Y is sane when the round trip returns it unchanged. That happens when
                Y looks like a response to some image under your model. The set of sane Y's is everything your trained model
                could have produced from some input: a surface, or manifold, inside the space of all possible Y's. Your
                action is the gap between Y and its round-trip version. When the system is near that surface you barely act.
                When it drifts far off, you push it back toward the nearest point that makes sense to you.
            </Paragraph>
            <Paragraph>
                That leads to an interesting twist. You can't detect a change that stays on the surface: a Y that looks like
                a response to a different image passes as perfectly sane. What you fight is activity that doesn't look like
                a response to anything. And the way you fight it is by pushing toward the nearest sensible response, which
                means writing an image back in. So a sanity regulator doesn't just suppress nonsense. It converts nonsense
                into the most plausible image. That's close to what pareidolia feels like.
            </Paragraph>
            <Paragraph>
                The self-reference is the other elegant part. You trained your model on the loop while you were in it, so
                your predictions include your own participation. When nothing has changed, you and the loop agree, and your
                action is essentially zero at rest. If the loop changes, your model is stale. Then you keep pulling Y toward
                the old surface, and your corrections become persistent content: yesterday's expectations written into
                today's representation.
            </Paragraph>
            <Paragraph>
                Does that match what you mean by "far away": off the surface of sensible responses, rather than just too
                large?
            </Paragraph>
        </Message>
        <Message
            at="2026-09-23T18:01:04.221297Z"
        >
            <Origin>01a0cf6d-cda7-7d02-8e8d-c55c7d1e3dd7</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Y&#123;stuff for my round-trip&#125;</Paragraph>
            <Paragraph>Or maybe it’s on either end oflY</Paragraph>
            <Paragraph>
                Can we imagine a simple form of what that would be and what the component would look like? It doesn’t have
                access to Y. Because that is an equillibrium state. Doesn’t have access to the current state of the system?
                Since we have a dynamical equation that we need to solve, don’t we have to think in terms of that now?
                Except that we’re trying to define one of the components.
            </Paragraph>
        </Message>
        <Message
            at="2026-09-23T18:02:09.183670Z"
        >
            <Origin>01a0cf6d-cda7-7b07-84b6-7023b12ac60b</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                You're right. You can't use the equilibrium Y, because that is the answer the whole system arrives at, you
                included. You can only use the current state, Y(t). So a component has to be defined inside the dynamics,
                and the equilibrium comes afterward:
            </Paragraph>
            <Paragraph>τẎ = −Y + W₁X₁ + W_Z U Y + (you)</Paragraph>
            <Paragraph>Even Y(t) you don't see whole. Like every component, you see only what you read.</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    What you look like
                </Word>
            </Paragraph>
            <Paragraph>
                Every internal component has the same shape: a write matrix, then a read matrix, then Y. For example, W_Z U
                Y is write (W_Z), read (U), Y. That is your "either end": writing on the far left, reading right next to Y.
                You have the same shape:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Read with your decoder A.
                    </Word> You see AY(t), your guess of the image.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Write with your trained model M̂.
                    </Word> It turns an image into the Y you expect.
                </Line>
            </Paragraph>
            <Paragraph>
                So the "stuff for your round trip" is M̂A, sitting on the left of Y. Your term is g·M̂AY, where g ≥ 0 is how
                strongly you act.
            </Paragraph>
            <Paragraph>τẎ = −Y + W₁X₁ + W_Z U Y + g·M̂AY</Paragraph>
            <Paragraph>At equilibrium:</Paragraph>
            <Paragraph>Y = W₁X₁ + W_Z U Y + g·M̂AY</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    What makes you special.
                </Word> Your read and write were trained as a pair, so AM̂ = I. That makes M̂A turn any Y into a sane one: a
                Y your model could have produced. It leaves sane Y's unchanged. The effect is that you reinforce the sane
                part of Y, while the rest decays at the ordinary rate.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The catch.
                </Word> To push back on what is far from sane, you would need to act on Y − M̂AY. That requires seeing Y
                itself, including the part your decoder throws away. With only AY, you can favor sanity, but you cannot
                detect its absence.
            </Paragraph>
            <Paragraph>Do you want your read to include the part the decoder discards, so you can see "far"?</Paragraph>
        </Message>
    </Chapter>
);
