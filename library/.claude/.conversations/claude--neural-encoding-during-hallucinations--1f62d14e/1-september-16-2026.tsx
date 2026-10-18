import { Bold, Chapter, Date, Emphasis, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Action, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[16 September 2026](2026-09-16)</Date>
        </Dated>
        <Title>[[ 16 September 2026 ]]</Title>
        <Message
            at="2026-09-16T10:27:17.935795Z"
        >
            <Origin>01a0a9c1-bee7-7304-8409-fa1b733299b2</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                I have a fun thing for you to prove. Suppose we have two data sets and one of them represents a standard
                neural encoding scheme, but you might have the latent Z and XY and whatever and linear and information
                theoretic expressions of these things one of which might involve the null space
            </Paragraph>
            <Paragraph>
                Then you repeat the experiment where you include the exact same thing, but the animal is now hallucinating.
            </Paragraph>
            <Paragraph>
                You have the same neurons recorded from but you don’t know that so what’s interesting is that you want to
                just philosophically figure out what you can know and not know about what the animal is seeing
            </Paragraph>
            <Paragraph>
                Isn’t the hallucination always in the null space even though it is perceived? It’s not something that we can
                correlate with the stimulus even though it’s part of the representation so what is it in this context?
            </Paragraph>
        </Message>
        <Message
            at="2026-09-16T10:27:55.042262Z"
        >
            <Origin>01a0a9c1-bee7-7a84-b31d-a3670b298b13</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                The hallucination is always in the <Word>
                    <Bold />
                    statistical
                </Word> null space of the stimulus, but not necessarily in the <Word>
                    <Bold />
                    geometric
                </Word> null space of the code. Separating those two gives a clean result.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Setup (linear case).
                </Word> In session 1, R = WX + ε. In session 2, R′ = WX + h + ε, where h is internally generated and Cov(h,
                X) = 0 across trials. Let P be the projector onto col(W), the stimulus-driven subspace, and let W⁺ be the
                decoder.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Claim 1: the encoding model is blind to h.
                </Word> The OLS estimate is Ŵ′ = Cov(R′, X)Cov(X)⁻¹ = W, because the h term drops out. Fitting the encoder
                on either session gives the same W, so you could even recover the neuron correspondence you didn't know
                about by matching the columns of W. In this sense the hallucination is exactly "null": nothing that
                correlates with X can see it.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Claim 2: the decoder is not blind to h.
                </Word> X̂ = W⁺R′ = X + W⁺h + noise. The error term W⁺h vanishes if and only if h ⊥ col(W). That splits h
                into two parts:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Ph (in the stimulus subspace):
                    </Word> here R′ = W(X + x_h) + ε with x_h = W⁺h. This is indistinguishable from the animal seeing X +
                    x_h. The hallucination has content in the stimulus coordinates, and you can read that content out as the
                    residual X̂ − X, but only because the experimenter knows X. From R′ alone it is just "a stimulus."
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        (I − P)h (the geometric null space):
                    </Word> it shows up only as extra residual covariance, Σ′ − Σ = Σ_h, restricted to directions the code
                    doesn't use for stimuli. You can detect it but can't label it. It has the same status as the movement
                    subspace in Stringer 2019.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Information-theoretic version.
                </Word> With respect to X, h is noise, so I(X; R′) ≤ I(X; R). But h lives in H(R′ | X), the
                stimulus-unexplained entropy, which is not the same thing as "the directions the decoder ignores." A
                hallucination that uses the perceptual code sits in the conditional entropy while occupying the signal
                geometry.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    What it is, in this context:
                </Word> a misrepresentation. It is a component that is signal in the code's own coordinates and noise in the
                world's coordinates. From third-person data you can know three things: that it occurred (residual
                covariance), what its content would be in stimulus terms (Ph), and how much is uninterpretable ((I − P)h).
                That it is <Word>
                    <Emphasis />
                    perceived
                </Word> is the one piece the data can't supply. It's an account that depends on granting experience, and the
                formalism gives you the content without the seeing.
            </Paragraph>
        </Message>
        <Message
            at="2026-09-16T10:29:15.998762Z"
        >
            <Origin>01a0a9c3-9045-7e08-a3ba-509b8a618cd7</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Whoa whoa whoa whoa whoa whoa wow you haven’t defined hallucination yet. Let’s please proceed axiomatically
                here because if consciousness is something that supervenes and there’s no reason that it even needs to be
                present in the activity at all! But it’s definitely in the null space - what I meant to say is that if it’s
                anywhere it’s there? Or is that not true either proceed with great caution and formally
            </Paragraph>
        </Message>
        <Message
            at="2026-09-16T10:30:02.803369Z"
        >
            <Origin>01a0a9c3-9045-7113-8acb-2fb03704a019</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                You're right that I skipped the definition. I also slipped in an additive decomposition without stating it.
                Here it is from the ground up.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Primitives
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>X: world state (stimulus) on trial t.</Line>
                <Line>B: total physical brain state.</Line>
                <Line>R ∈ ℝⁿ: recorded activity.</Line>
                <Line>C: perceptual content, the experience.</Line>
                <Line>
                    v: the veridicality map, sending each world state x to the content a normal perceiver has given x.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Axioms
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        A1 (Supervenience).
                    </Word> C = f(B). No difference in content without a difference in B.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        A2 (Partial observation).
                    </Word> R = π(B), where π is not injective.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        A3 (Stimulus independence).
                    </Word> The hallucination-generating process H satisfies I(H; X) = 0.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        A4 (Decomposition).
                    </Word> R′ = g(X) + h + ε, with h a function of H. This is optional, and the propositions below say
                    where it is needed.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Definition (hallucination).
                </Word> Trial t is hallucinatory iff C_t ≠ v(X_t) and the discrepancy is not caused by X_t. The second
                clause is what separates hallucination from illusion, and A3 formalizes it.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Proposition 1: the hallucination need not be in R at all.
                </Word> By A1, a content difference requires a B difference. By A2, distinct B can share the same π(B). So a
                hallucination can leave R unchanged. This confirms your point: supervenience guarantees a physical
                difference somewhere, not in the recorded neurons.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Proposition 2: the converse fails too.
                </Word> A1 has no reverse direction. Some Δ in R can have no content difference at all, as with unconscious
                or state-driven activity. So R-activity uncorrelated with X does not indicate hallucination.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Proposition 3: if it is in R, it is in the null space of the stimulus, taken as a space of random variables.
                </Word> Consider L²(trials), the space of trial-indexed variables. Let 𝒮 be the closed span of functions of
                X. Under A3 and A4, h is independent of X, so E&#91;h | X&#93; = E&#91;h&#93;. The centered h is therefore
                orthogonal to 𝒮. The hallucination lies in 𝒮^⊥, always. This is your claim, and it holds.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Proposition 4: it need not be in the geometric null space of the code in ℝⁿ.
                </Word> Let S = span of the stimulus-driven directions, which is col(W) in the linear case. Take the
                counterexample h = W·x_h, with x_h drawn independently of X. Then h ∈ S, not S^⊥, yet Proposition 3 still
                holds. A hallucinated face that uses face-coding directions is exactly this case.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Why the two come apart.
                </Word> The null spaces live in different spaces. Proposition 3 concerns h as a variable across trials;
                Proposition 4 concerns h as a direction across neurons. One detail makes them easy to conflate: in the
                linear case, the neural directions u with Cov(uᵀR, X) = 0 are precisely S^⊥. But a signal <Word>
                    <Emphasis />
                    uncorrelated
                </Word> with X can still point <Word>
                    <Emphasis />
                    along
                </Word> S.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Verdict.
                </Word> "If it's anywhere, it's in the null space" is a theorem in L²(trials), given A3 and A4. It is false
                in neuron space. And even the true version locates only the projection of the supervenience base, never C
                itself. Without A4, "the hallucinated component" isn't even well-defined, because supervenience alone gives
                a difference in B, not an additive part of R.
            </Paragraph>
        </Message>
        <Message
            at="2026-09-16T10:38:50.126158Z"
        >
            <Origin>01a0a9cc-526e-7694-99f7-742429de7616</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                I rejected her hallucinatory, and believe that perception is a representation that you map onto never fully
                is the same as the input and would have properties like it in integrates over many inputs and is contextual
                to past ones. And then you decode from that thing to get perception, and that thing will have perceptual
                artifacts. Hallucination would be like changes in that perception.
            </Paragraph>
            <Paragraph>
                But can we really resolve that representation? How do we know the difference between seeing the
                hallucination and then the animal just not being able to see something because there’s noise in that
                frequency band? All we have is the basic set up.
            </Paragraph>
            <Paragraph>
                So there should be some sort of theorem about how hallucination has to be the same thing as like an
                experimental confound that’s making something noisier
            </Paragraph>
            <Paragraph>
                Maybe someone has proved something like this already and if not, maybe we can build this argument very
                carefully
            </Paragraph>
        </Message>
        <Message
            at="2026-09-16T10:39:51.560580Z"
        >
            <Origin>01a0a9cc-526e-7829-9e2c-6361c72ab025</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                What you're describing is an identifiability theorem. Stated carefully, it comes out slightly stronger than
                you guessed: in the basic setup, a hallucination is always observationally equivalent either to noise or to
                ordinary history-dependent encoding. Nothing is left over that could be labeled hallucination.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Primitives (your framework)
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>𝒳ₜ = (X₁, …, Xₜ): input history.</Line>
                <Line>Zₜ: internal state, including context, arousal, and any generator.</Line>
                <Line>
                    Pₜ = Φ(𝒳ₜ, Zₜ): the representation. It integrates over inputs, is contextual, and carries artifacts. In
                    general Pₜ ≠ Xₜ.
                </Line>
                <Line>Qₜ = D(Pₜ): the percept, obtained by decoding the representation.</Line>
                <Line>Rₜ = π(Pₜ, ·): the recorded activity, a lossy observation.</Line>
                <Line>Data: only the joint law 𝓛(𝒳, R).</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Decomposition (no independence axiom needed).
                </Word> Define m(𝒳) = E&#91;R | 𝒳&#93; and u = R − m(𝒳). By the L² projection theorem, u is uncorrelated
                with every function of 𝒳. This orthogonality holds by construction, so A3 from before is no longer
                required.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Definitions
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Emphasis />
                        Hallucination:
                    </Word> a change in Q not accounted for by 𝒳, i.e. D reads some part of P as content.
                </Line>
                <Line>
                    <Word>
                        <Emphasis />
                        Masking noise:
                    </Word> variation in P that D does not read as content but that degrades Q's dependence on 𝒳. Your
                    "can't see it because the band is noisy" is this case.
                </Line>
            </Paragraph>
            <Paragraph>Both definitions refer to D. That is the crux.</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Theorem (non-identifiability).
                </Word> Take two models M₁ and M₂ with the same law of 𝒳, the same m, and the same conditional law of u
                given 𝒳. In M₁, D treats u as content (hallucination). In M₂, D discards u or is corrupted by it (noise).
                Then 𝓛₁(𝒳, R) = 𝓛₂(𝒳, R).
            </Paragraph>
            <Paragraph>
                <Word>
                    <Emphasis />
                    Proof.
                </Word> The joint law of (𝒳, R) is determined by the law of 𝒳, the function m, and the law of u given 𝒳.
                D appears in none of these. ∎
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Corollary 1 (your band case).
                </Word> Every statistic of (𝒳, R) is identical under the two models. This includes residual covariance,
                excess power in a frequency band, loss of I(𝒳; R), and decoder error. "Seeing something in that band" and
                "failing to see because that band is noisy" are the same dataset.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Corollary 2 (the history split).
                </Word> Because Φ integrates past inputs, any percept change that is predictable from 𝒳 is absorbed into m
                and looks like contextual encoding or adaptation. Any change that is unpredictable from 𝒳 lands in u and
                looks like noise. The two cases are exhaustive. So in the basic setup, a hallucination is always confounded
                with encoding or with noise, and the data cannot say which.
            </Paragraph>
            <Paragraph>
                The result is nearly definitional, and that is its point. The label "hallucination" is a fact about D, and
                (𝒳, R) never samples D.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    What breaks the equivalence.
                </Word> You need an observable that is a function of Q, such as behavior B = β(Q). Once D enters the law of
                (𝒳, R, B), the models separate. In signal-detection terms, noise lowers d′, while hallucination produces
                false alarms carried with hit-like confidence. Schmack et al. (2021, <Word>
                    <Emphasis />
                    Science
                </Word>) used exactly this move in mice, with confidence measured as time invested in false alarms. Even
                then you identify D's output, not the experience, so it remains an account.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Prior work.
                </Word> The general form is observational equivalence in identification theory (Koopmans &amp; Reiersøl
                1950; Rothenberg 1971). The informal neuroscience version, that decodable information is only information
                relative to a reader, appears in de-Wit et al. (2016). I don't know of a formal statement specifically
                pairing hallucination with noise, so this construction may be new.
            </Paragraph>
        </Message>
        <Message
            at="2026-09-16T14:46:48.665252Z"
        >
            <Origin>01a0aaaf-587e-761c-be74-becd9181a7d9</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Now I want you to look into the literature that talks about neural encoding specifically so that you get the
                best terminology and even see what branch of mathematics they specifically quote. We have Tatiana someone on
                the team at Princeton who works with jake reimer on a grant and they explore some of these things so if you
                can track her down, maybe find some of her things otherwise the basic neural encoding literature is perfect
                and I want you to really turn your theorem into something as small and actionable as possible, I’m not
                giving up any of the results just frame it as definitions in theorems and lemmas and make it really pristine
                and concrete and written for the audience
            </Paragraph>
        </Message>
        <Message
            at="2026-09-16T14:52:17.622707Z"
        >
            <Origin>01a0aaaf-587e-7be4-b58b-71fe271567d7</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Read memory</Action>
            <Action>Searched the web for “Tatiana Engel Princeton Jake Reimer grant”</Action>
            <Action>Searched the web for “Engel Reimer NIH BRAIN grant visual cortex state variability”</Action>
            <Action>Fetched https://www.reimerlab.org</Action>
            <Action>
                Searched the web for “Genkin Engel moving beyond generalization accurate interpretation flexible models
                identifiability”
            </Action>
            <Action>
                Searched the web for “Aghamohammadi Chandrasekaran Engel doubly stochastic renewal partitioning spiking
                variability Nature Communications 2025”
            </Action>
            <Action>Fetched https://arxiv.org/html/2605.06995v1</Action>
            <Action>Read /mnt/skills/public/frontend-design/SKILL.md</Action>
            <Action>Created /mnt/user-data/outputs/hallucination_nonidentifiability.html</Action>
            <Action>Used Artifact</Action>
            <Paragraph>
                The note is published as a page. Everything from before is still in it, restated as a lemma, propositions,
                two theorems, and corollaries.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Tatiana.
                </Word> This is almost certainly Tatiana Engel, Associate Professor at the Princeton Neuroscience Institute.
                I couldn't find the grant with Reimer online, but her work fits closely:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Genkin &amp; Engel 2020
                    </Word> (<Word>
                        <Emphasis />
                        Nature Machine Intelligence
                    </Word>) shows that many models predict neural data equally well while disagreeing with the correct
                    interpretation. Theorem 1 is an exact version of that point: prediction places no constraint on the
                    readout.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Aghamohammadi, Chandrasekaran &amp; Engel 2025
                    </Word> (<Word>
                        <Emphasis />
                        Nature Communications
                    </Word>) builds a framework for partitioning spiking variability, using a model class to make the
                    partition identifiable.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Terminology and math.
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Encoding side:
                    </Word> tuning function, trial-to-trial variability, and the signal/noise covariance partition (law of
                    total covariance). The residual is orthogonal to stimulus history because conditional expectation is an
                    L² projection.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Readout side:
                    </Word> a readout that treats internal activity as signal is a <Word>
                        <Emphasis />
                        mismatched decoder
                    </Word>. "Encoded vs. used information" is Panzeri's <Word>
                        <Emphasis />
                        intersection information
                    </Word>.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        The theorem itself:
                    </Word> observational equivalence, from statistical identification theory.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Where it separates:
                    </Word> signal detection theory and Bayesian observers.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    What's new in the formal version:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Definitions in a Gaussian population code.
                    </Word> Masking noise is a readout whose internal noise model includes the internal activity h.
                    Hallucination is a readout whose noise model omits h, so the readout decodes h as stimulus.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Proposition 7:
                    </Word> the two are separated exactly by calibration. The hallucinating readout is overconfident if and
                    only if WᵀΣ₀⁻¹Σ_h ≠ 0.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Corollary 4:
                    </Word> this ties back to the null-space question. A hallucination is detectable in behavior exactly
                    when it has a component in the noise-whitened coding subspace. The part in the geometric null space is
                    read as stimulus content by neither readout.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Theorem 2:
                    </Word> a readout-dependent observable, such as a report with confidence, restores identifiability.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Remark 1, useful for the psychedelic dataset:
                    </Word> the theorem doesn't block separating <Word>
                        <Emphasis />
                        measurement
                    </Word> noise from <Word>
                        <Emphasis />
                        internal
                    </Word> variability. Those enter the stimulus–response law and can be split by covariance structure. The
                    data can show the post-drug variability is internal and where it sits relative to the code. They can't
                    show what the readout does with it.
                </Line>
            </Paragraph>
            <Paragraph>
                I also stated Assumption A0 explicitly: the percept doesn't feed back onto the recorded neurons. Theorem 1
                depends on it, and Remark 2 covers the case where it fails.
            </Paragraph>
            <Paragraph>
                The Engel papers and the linked references were checked. Other citation details, such as volumes and pages,
                are from memory and are worth verifying before this circulates.
            </Paragraph>
        </Message>
        <Message
            at="2026-09-16T14:52:50.951139Z"
        >
            <Origin>01a0aab4-deef-77c5-8047-7f78860fc83c</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                I want you to write up two documents and one document is the most formal version of the math which still
                should be short because people have to read it so the way you do both of those things is that you say places
                that use the same argument or the place where the argument comes from, but you also have to structure the
                argument so that the people that are most likely to read it which are people in the neural encoding
                computational neuroscience space will be able to follow it and then create a longer document which is a
                whole separate document so that you have the short one for a really smart person to read, and then you have
                the really longer one that presents it, and it should really have these locations with links that we can
                click to archive or bio archive or whatever papers, though obviously we only want to use archived ones that
                have actually been published, or basic textbook if it requires that kind of thing, and then sometimes even
                in the explanation document describe how those results were used and why you chose to multiple sources that
                you did and a general just presentation of the result and why you know it’s right. Absolutely be humble
                about whether or not you are right, but I’m asking you to do math here and I think that this is absolutely a
                thing that we should be able to conclude.
            </Paragraph>
            <Paragraph>
                Now prepare yourself, and maybe even the structure of your theorems for the thing that we would do next.
                Under the assumption that two different encoding’s share an intermediary representation and then project out
                of it - think this is the inner eye some sort of structure that is higher dimensional with a lot of free
                variables that are outside of the model - but that this thing contains all of the information in it that you
                can possibly decode from the network about the image - if we know something like that and we assume that the
                structure of it is fixed or the encoding scheme has remained the same then perhaps we can start to isolate
                the things that are different but we’re not going to do that right now. I need your concrete results first.
            </Paragraph>
        </Message>
        <Message
            at="2026-09-16T14:55:26.927148Z"
        >
            <Origin>01a0aab4-deef-74fa-9b36-bb0accc719a7</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>
                Searched the web for “Oizumi Ishii Ishibashi Hosoya Okada 2010 Mismatched decoding in the brain Journal of
                Neuroscience doi”
            </Action>
            <Action>
                Searched the web for “Goris Movshon Simoncelli 2014 "Partitioning neuronal variability" doi 10.1038/nn.3711”
            </Action>
            <Action>
                Searched the web for “Schmack Bosc Ott Sturgill Kepecs 2021 Striatal dopamine mediates hallucination-like
                perception in mice Science doi”
            </Action>
            <Action>
                Searched the web for “Panzeri Harvey Piasini Latham Fellin 2017 Cracking the neural code for sensory
                perception Neuron 93 491 doi”
            </Action>
            <Action>
                Searched the web for “Moreno-Bote Beck Kanitscheider Pitkow Latham Pouget "Information-limiting
                correlations" 2014 doi nn.3807”
            </Action>
            <Action>
                Searched the web for “Rothenberg 1971 "Identification in parametric models" Econometrica doi
                10.2307/1913267”
            </Action>
            <Action>
                Searched the web for “Koopmans Reiersøl 1950 "The identification of structural characteristics" Annals of
                Mathematical Statistics doi 10.1214/aoms/1177729837”
            </Action>
            <Action>
                Searched the web for “Williamson Cowley Litwin-Kumar Doiron Kohn Smith Yu 2016 Scaling properties of
                dimensionality reduction for neural populations and network models PLoS Comput Biol doi”
            </Action>
            <Action>
                Ran cd /mnt/user-data/outputs &amp;&amp; sed -n '1,60p' hallucination_nonidentifiability.html | head -60
                &gt;/dev/null; echo ok
            </Action>
        </Message>
        <Message
            at="2026-09-16T14:55:29.548808Z"
        >
            <Origin>01a0aab7-4c4c-795d-ae2b-ff55613a5ef5</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Yours is far too long and don’t people tend to use X, Y and Z for the stimulus, activity and the latent? I
                think you should be publishing your first document and it should be very, very small. This is not a
                complicated theorem. I would even like two versions of it and one is the linear version in terms of
                expectation and covariant and linear algebra and then the other one is something that’s more in terms of
                information theory
            </Paragraph>
        </Message>
        <Message
            at="2026-09-16T14:56:47.755301Z"
        >
            <Origin>01a0aab7-4c4c-7915-a282-b30732308554</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Created /mnt/user-data/outputs/hallucination_short.html</Action>
            <Action>Used Artifact</Action>
            <Paragraph>
                I rewrote the note to be very short, using X for the stimulus, Y for activity, and Z for the latent. It
                replaces the earlier page at the same link.
            </Paragraph>
            <Paragraph>
                There is one shared theorem: the readout never enters the joint law of (X, Y). After it come two parallel
                versions.
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Linear version (expectation, covariance, linear algebra).
                    </Word>
                </Line>
                <Paragraph>
                    <List />
                    <Line>
                        Internal activity H is always uncorrelated with the stimulus, but it need not lie in the null space
                        of W.
                    </Line>
                    <Line>
                        A readout with a noise model separates the two cases by calibration: its errors are larger than its
                        reported confidence under hallucination and match it under masking noise. The gap is nonzero iff
                        WᵀΣ₀⁻¹Σ_H ≠ 0.
                    </Line>
                </Paragraph>
                <Line>
                    <Word>
                        <Bold />
                        Information-theoretic version.
                    </Word>
                </Line>
                <Paragraph>
                    <List />
                    <Line>
                        Internal content lives entirely in H(Y|X), and (X, Y) data can't split it between Z and measurement
                        noise.
                    </Line>
                    <Line>
                        The hallucinating readout pays an extra KL term in log loss. It is zero under masking noise and
                        positive under hallucination.
                    </Line>
                </Paragraph>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    One new result in Version A (Proposition A3).
                </Word> The condition WᵀΣ₀⁻¹Σ_H ≠ 0 is also exactly when internal activity lowers the code's linear Fisher
                information. So if W and Σ₀ are known from the control session, the data identify the variability a
                hallucinating readout would misread. They just can't say whether it is misread. That is the concrete
                foothold for the drug session.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Correction.
                </Word> The earlier page implied that noise in the null space of W never limits information. That isn't true
                in general when Σ₀ has correlations. The right statement is the whitened condition in A3.
            </Paragraph>
            <Paragraph>
                The long expository document with the source-by-source explanation is next. The
                shared-intermediate-representation setup will go at the end of it as definitions only.
            </Paragraph>
        </Message>
        <Message
            at="2026-09-16T14:58:01.835611Z"
        >
            <Origin>01a0aab9-9e7c-77d2-809a-a83599876290</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                No, your short version is not making it short by making it more like a theorem and I don’t see the word
                definition or theorem at all. I’m not asking for something colloquial I’m asking for something formal and I
                wanted to look like a document that’s really short. I gave you a lot of time to read the literature on this
                to produce this for me.
            </Paragraph>
        </Message>
        <Message
            at="2026-09-16T14:58:06.091288Z"
        >
            <Origin>01a0aab9-9e7c-77c0-8611-b6875049965e</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Nothing was written in this message</Paragraph>
        </Message>
        <Message
            at="2026-09-16T20:01:49.744501Z"
        >
            <Origin>01a0abcf-bd60-79eb-ac5b-6ded83588347</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                No, your short version is not making it short by making it more like a theorem and I don’t see the word
                definition or theorem at all. I’m not asking for something colloquial I’m asking for something formal and I
                wanted to look like a document that’s really short. I gave you a lot of time to read the literature on this
                to produce this for me.
            </Paragraph>
        </Message>
        <Message
            at="2026-09-16T20:05:22.953271Z"
        >
            <Origin>01a0abcf-bd60-713a-a1b1-b47e713e65cf</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Created /mnt/user-data/outputs/hallucination_formal.html</Action>
            <Action>Used Artifact</Action>
            <Paragraph>
                The note now reads as a formal paper, at the same link. It is organized as numbered Definitions, Lemmas,
                Theorems, a Proposition, Corollaries, and Remarks, each with a short proof. Citations sit beneath each
                result, and a numbered reference list with DOI links is at the end.
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        §1 Setup:
                    </Word> Definitions 1–2 and Theorem 1, readout non-identifiability.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        §2 Linear version:
                    </Word> expectation, covariance, and linear algebra, leading to Theorem 2 (calibration) and Proposition
                    1 (Fisher information).
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        §3 Information-theoretic version:
                    </Word> entropy and KL, leading to Theorem 3 (log-loss excess).
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Corollary 2
                </Word> shows the two versions share one condition, WᵀΣ₀⁻¹Σ_H ≠ 0.
            </Paragraph>
            <Paragraph>
                One reference is new: Beck, Ma, Pitkow, Latham &amp; Pouget (2012), <Word>
                    <Emphasis />
                    Not noisy, just wrong
                </Word>. It makes the same kind of argument for behavior, where a wrong internal model is indistinguishable
                from noise. That makes it the closest precedent for Theorem 2.
            </Paragraph>
            <Paragraph>The longer expository document will follow as a separate page.</Paragraph>
        </Message>
    </Chapter>
);
