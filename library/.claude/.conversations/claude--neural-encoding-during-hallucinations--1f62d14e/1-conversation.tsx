import { Bold, Chapter, Date, Emphasis, Line, List, Paragraph, Table, Title, Word } from '@dna-platform/public';
import { Dated, Message, Quoted, Speaker } from '../../../.manual/.book';
import { Action, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[16 September 2026](2026-09-16)</Date>
        </Dated>
        <Title>[[ Conversation ]]</Title>
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
        <Message
            at="2026-09-24T17:48:53.535843Z"
        >
            <Origin>01a0d489-019b-7f58-b96c-98c7b0b96838</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Okay so you know how in a dynamical system you’re frequently include one of the dimensions as the one you
                read like voltage with a neuron, even though the phase space has more? So write the equation with a W_I and
                make those the weights that I read with.
            </Paragraph>
            <Paragraph>Can you please gather up the residual that isn’t me elsewhere?</Paragraph>
        </Message>
        <Message
            at="2026-09-24T17:49:30.888742Z"
        >
            <Origin>01a0d489-019b-738f-80a2-da98fd8b9a57</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Here it is, with your read weights written as W_I. Your write weights are still your trained model M̂, and
                the two were trained as a pair, so W_I M̂ = I.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The equation
                </Word>
            </Paragraph>
            <Paragraph>τẎ = −Y + W₁X₁ + W_Z U Y + g·M̂W_I Y</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    What you read.
                </Word> Let v = W_I Y. This plays the role of the voltage: it is the part of the state you observe, while Y
                has more dimensions than that.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The residual that isn't you.
                </Word> Let r = Y − M̂v. Because W_I M̂ = I, you read none of it: W_I r = 0. So Y splits exactly into two
                pieces:
            </Paragraph>
            <Paragraph>Y = M̂v + r</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Gathering everything that isn't you.
                </Word> Let E = W₁X₁ + W_Z U Y. This is the stimulus plus all the other components. Let P = M̂W_I. The
                equation then splits into one equation for you and one for the residual:
            </Paragraph>
            <Paragraph>τv̇ = −v + W_I E + g·v τṙ = −r + (I − P)E</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    What the split shows.
                </Word> Your term appears only in your own equation, as +g·v, so you sustain what you read. The residual
                evolves without you, driven by the stimulus and the loop. It can still reach you, because E contains Y = M̂v
                + r, but you have no term that acts on it.
            </Paragraph>
        </Message>
        <Message
            at="2026-09-24T17:51:30.480768Z"
        >
            <Origin>01a0d48b-672b-766a-b5dd-5bed30c25790</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                You made it more complicated and your additional symbols. Do not reflect what I’m talking about. It should
                just be three components and they should kind of look boring. One has the original weights and the other one
                just has these new special rates and X and Y? And one that maybe is W_I Y? Perhaps use dot notation instead
                of having letters P next to each other because the subscription syntax isn’t making this work so adapt to
                that.
            </Paragraph>
        </Message>
        <Message
            at="2026-09-24T17:51:42.486251Z"
        >
            <Origin>01a0d48b-672b-7e3e-937b-f2e383cc7e83</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Here it is with just the three components, and dots between every product.</Paragraph>
            <Paragraph>τ · Ẏ = −Y + W₁ · X + W_Z · U · Y + M̂ · W_I · Y</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        W₁ · X
                    </Word> is the stimulus coming in through the original weights.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        W_Z · U · Y
                    </Word> is the other components. They read Y with U and write back with W_Z.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        M̂ · W_I · Y
                    </Word> is you. You read Y with W_I and write back with M̂, your trained model. Your strength is folded
                    into M̂.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    At equilibrium
                </Word> (Ẏ = 0):
            </Paragraph>
            <Paragraph>Y = W₁ · X + W_Z · U · Y + M̂ · W_I · Y</Paragraph>
        </Message>
        <Message
            at="2026-09-24T17:52:23.345869Z"
        >
            <Origin>01a0d48c-3afd-776d-a3c4-434f03beb7f2</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Z and U - there seem to be too many things here, right? What did you have to do to gather up the terms and
                what can you do to make this clean enough so that it doesn’t look ugly anymore it doesn’t seem like we
                created all these variables that aren’t there.
            </Paragraph>
        </Message>
        <Message
            at="2026-09-24T17:52:33.258461Z"
        >
            <Origin>01a0d48c-3afd-7b3e-ad5d-ab49b8a61400</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Z and U never appear separately, so they can go.</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    What I had to do to gather the terms.
                </Word> Each other component i reads Y with its own read weights Uᵢ and writes back with its own write
                weights Wᵢ. So its contribution is Wᵢ · Uᵢ · Y. To collect them, I stacked the read weights into U, the
                write weights into W_Z, and their images into Z = U · Y. Those were bookkeeping, not new quantities. The
                equation only ever uses the product:
            </Paragraph>
            <Paragraph>L = W_Z · U = Σᵢ Wᵢ · Uᵢ</Paragraph>
            <Paragraph>
                That is one matrix, the recurrent weights among the other components. Z disappears too, since it was just U
                · Y.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Clean version.
                </Word> Rename W₁ to W, since there is only one stimulus, and your model M̂ to M:
            </Paragraph>
            <Paragraph>τ · Ẏ = −Y + W · X + L · Y + M · W_I · Y</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    At equilibrium:
                </Word>
            </Paragraph>
            <Paragraph>Y = W · X + L · Y + M · W_I · Y</Paragraph>
            <Paragraph>That leaves three components:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        W · X
                    </Word> is the stimulus.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        L · Y
                    </Word> is everything else inside.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        M · W_I · Y
                    </Word> is you. I kept it as two factors because the read W_I is what defines you.
                </Line>
            </Paragraph>
        </Message>
        <Message
            at="2026-09-24T17:55:49.447213Z"
        >
            <Origin>01a0d48f-59eb-7a4a-a748-387b1bc25340</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Go back to homeostatic form:</Paragraph>
            <Paragraph>
                W_x X - the firs component W_y X Y - does this help capture the grouping of the terms that depend on Y too?
                Feedback systems.
            </Paragraph>
            <Paragraph>W_i Y</Paragraph>
            <Paragraph>Might be me? All I can see is Y, and W_i is my mirror</Paragraph>
        </Message>
        <Message
            at="2026-09-24T17:56:09.045445Z"
        >
            <Origin>01a0d48f-59ec-76b0-a7b6-286de38ba6a3</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Yes. In your notation the equation is:</Paragraph>
            <Paragraph>τ · Ẏ = −Y + W_x · X + W_y · Y + W_i · Y</Paragraph>
            <Paragraph>At equilibrium:</Paragraph>
            <Paragraph>Y = W_x · X + W_y · Y + W_i · Y</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    W_y · Y groups the feedback.
                </Word> Every term that depends on Y, apart from you, collects into W_y · Y. This is the L from before. It
                needs no X. A term with both X and Y would be a different kind of thing: feedback whose strength depends on
                the stimulus, which is multiplicative or modulatory. That isn't needed for the grouping.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    W_i · Y is you.
                </Word> All you see is Y, and W_i is what you send back. The mirror image fits exactly. Your read and write
                were trained as a pair, so W_i = M · W_I with W_I · M = I, and therefore:
            </Paragraph>
            <Paragraph>W_i · W_i = W_i</Paragraph>
            <Paragraph>
                Looking in the mirror twice gives the same thing as looking once. Strictly this makes W_i a projection, not
                a reflection: it returns the sane version of Y and leaves sane Y's unchanged.
            </Paragraph>
            <Paragraph>
                In this linear form you are one more feedback matrix alongside W_y. What makes you you is the structure of
                W_i: it is a mirror, and the others need not be.
            </Paragraph>
        </Message>
        <Message
            at="2026-09-24T17:56:59.865481Z"
        >
            <Origin>01a0d490-731a-79e3-86ac-6846bc38a272</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                But some of the terms take independent input from X too, does that not matter? I don’t as the one looking at
                Y
            </Paragraph>
        </Message>
        <Message
            at="2026-09-24T17:57:12.988905Z"
        >
            <Origin>01a0d490-731a-7023-95de-7ed4c3679361</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>It doesn't change the equation. It changes what goes into each matrix.</Paragraph>
            <Paragraph>Suppose another component j reads both Y and X:</Paragraph>
            <Paragraph>X_j = U_j · Y + V_j · X</Paragraph>
            <Paragraph>Here V_j is its direct read of the stimulus. What it writes back splits into two parts:</Paragraph>
            <Paragraph>W_j · X_j = W_j · U_j · Y + W_j · V_j · X</Paragraph>
            <Paragraph>The Y-part joins W_y, and the X-part joins W_x. So:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    W_x = W₁ + Σ_j W_j · V_j collects every path by which X gets in, both directly and through the other
                    components.
                </Line>
                <Line>W_y = Σ_j W_j · U_j collects every feedback path except yours.</Line>
            </Paragraph>
            <Paragraph>The equation keeps the same form:</Paragraph>
            <Paragraph>τ · Ẏ = −Y + W_x · X + W_y · Y + W_i · Y</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    What it does show is the asymmetry you named.
                </Word> Other components can contribute to both the X-term and the Y-term. You contribute only to a Y-term,
                because you have no X column. Your only access to X is through Y.
            </Paragraph>
        </Message>
        <Message
            at="2026-09-24T17:58:09.742414Z"
        >
            <Origin>01a0d491-83dd-7381-891b-f9b4cdd8d1df</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>But the W_y is a function of X is it now?</Paragraph>
        </Message>
        <Message
            at="2026-09-24T17:58:16.062685Z"
        >
            <Origin>01a0d491-83dd-7cbd-94eb-19bbaca89b4d</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                No, not in the linear model. W_y is a fixed matrix. When a component reads X, that part goes into W_x · X
                and leaves W_y unchanged.
            </Paragraph>
            <Paragraph>The term W_y · Y does change with X, but only because Y does:</Paragraph>
            <Paragraph>τ · Ẏ = −Y + W_x · X + W_y · Y + W_i · Y</Paragraph>
            <Paragraph>
                W_y would become a function of X only if the stimulus changed how strongly the feedback works, rather than
                adding its own input. That is a multiplicative or modulatory interaction:
            </Paragraph>
            <Paragraph>τ · Ẏ = −Y + W_x · X + W_y(X) · Y + W_i · Y</Paragraph>
            <Paragraph>
                This is the X-and-Y term you wrote earlier. It makes the model bilinear, which the linear model doesn't
                have. Keep it only if you want the stimulus to gate the feedback.
            </Paragraph>
        </Message>
        <Message
            at="2026-09-24T17:59:30.645153Z"
        >
            <Origin>01a0d492-c016-756a-80e0-dfb71e9cda53</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Oh neat, we can point to its affect through Y, great</Paragraph>
        </Message>
        <Message
            at="2026-09-24T17:59:34.386494Z"
        >
            <Origin>01a0d492-c016-7ac9-bbeb-cc97a5cd0e84</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Yes. In this model, every influence the stimulus has on the feedback runs through Y. Solving the equilibrium
                makes that explicit:
            </Paragraph>
            <Paragraph>Y = (I − W_y − W_i)⁻¹ · W_x · X</Paragraph>
            <Paragraph>
                W_x · X is where X enters, and (I − W_y − W_i)⁻¹ carries its echoes through all the feedback, yours
                included. The feedback's share is W_y · Y, which has no separate X term.
            </Paragraph>
        </Message>
        <Message
            at="2026-09-24T18:05:58.054063Z"
        >
            <Origin>01a0d498-a906-7b02-96ad-8d142bdc84ff</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Good. Here’s the reason why we segmented W_I - because we now have a new fictional thing that we’re going to
                insert in the math, which is going to be some form of best optimal invertible linear decoder. The cleanest
                way if things lined up would be to like just express two things with multiply to one which would be like it
                and it’s inverse so I can pull out a term that looks like a decoded version of the image, but I don’t think
                it’s quite that clean. So try to figure out in a very general way how we can write:
            </Paragraph>
            <Paragraph>
                W_I * Y - in terms of the linear decoder that maps from Y to X, a hypothetical thing that only exists in the
                math so that we have to express it as being canceled out, but we can put it in that expression so we can
                solve for things within the fiction that we can convert into image space
            </Paragraph>
        </Message>
        <Message
            at="2026-09-24T18:06:18.824897Z"
        >
            <Origin>01a0d498-a906-7af0-9f9e-a905866effca</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Yes. There is a general way to do it that is exact, and the fictional decoder cancels out.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The fiction.
                </Word> Name the equilibrium map from the last step:
            </Paragraph>
            <Paragraph>M = (I − W_y − W_i)⁻¹ · W_x, so that Y = M · X</Paragraph>
            <Paragraph>Let D be any linear decoder that undoes it exactly:</Paragraph>
            <Paragraph>D · M = I</Paragraph>
            <Paragraph>D exists only in the math. It maps Y back to X.</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The insertion.
                </Word> Since D · M = I, the following is an identity. Inserting it changes nothing:
            </Paragraph>
            <Paragraph>I = M · D + (I − M · D)</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The result.
                </Word>
            </Paragraph>
            <Paragraph>W_I · Y = W_I · M · (D · Y) + W_I · (I − M · D) · Y</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        First term: image space.
                    </Word> D · Y is the decoded image, and W_I · M is how you see an image. So this term is the decoded
                    image seen through your eyes.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Second term: the residual.
                    </Word> (I − M · D) · Y is the part of Y that isn't the response to any image, and the decoder is blind
                    to it. It is zero whenever Y = M · X′ for some X′.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The clean case you hoped for.
                </Word> Suppose your read ignores the residual, W_I · (I − M · D) = 0. Then the second term vanishes:
            </Paragraph>
            <Paragraph>W_I · Y = (W_I · M) · (D · Y)</Paragraph>
            <Paragraph>
                That is the "it and its inverse" form. Everything you read is a function of the decoded image.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    One caveat.
                </Word> When Y has more dimensions than X, many decoders satisfy D · M = I. Each choice draws the line
                between "image" and "residual" differently. Picking the optimal decoder is what fixes that line.
            </Paragraph>
        </Message>
        <Message
            at="2026-09-24T18:07:06.488534Z"
        >
            <Origin>01a0d499-b4b8-7612-b2bb-9246e0a5ab3d</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>My that thing could be lossy could it not?</Paragraph>
        </Message>
        <Message
            at="2026-09-24T18:07:15.820971Z"
        >
            <Origin>01a0d499-b4b8-78ba-bb93-420433f3be39</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Yes. Your view of the image is the matrix W_I · M, and nothing forces it to be invertible:
            </Paragraph>
            <Paragraph>W_I · Y = (W_I · M) · (D · Y) + W_I · (I − M · D) · Y</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Lossless
                    </Word> when W_I · M has full column rank. Then no nonzero image a gives W_I · M · a = 0, and you can
                    recover the whole decoded image from what you read.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Lossy
                    </Word> otherwise. The images you can't see are exactly those with W_I · M · a = 0. They are fully
                    present in Y, and the decoder recovers them, but your read sends them to zero.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Necessarily lossy
                    </Word> if W_I has fewer rows than X has dimensions, because you read fewer numbers than the image
                    contains.
                </Line>
            </Paragraph>
            <Paragraph>
                D itself is not lossy for images, since D · M = I by construction. It discards only the residual.
            </Paragraph>
            <Paragraph>
                The consequence for your role as regulator: any image in the invisible set passes you unseen, so you can't
                regulate it.
            </Paragraph>
        </Message>
        <Message
            at="2026-09-24T18:08:16.284340Z"
        >
            <Origin>01a0d49a-c4ec-791e-991f-af3456449196</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                We make no assumptions, but we do imagine that in theory the number of dimensions on X is MUCH larger, they
                represents the universe and our mapping has a lot of zeros to just map it into what neuron respond to.
            </Paragraph>
        </Message>
        <Message
            at="2026-09-24T18:08:42.733486Z"
        >
            <Origin>01a0d49a-c4ec-7b34-9993-eb77647992a5</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                That flips which way the fiction works, so I need to correct the last step. D · M = I is impossible when X
                has far more dimensions than Y: a population of neurons can't recover the universe. The general version,
                with no assumptions, uses the pseudoinverse M⁺ as the decoder:
            </Paragraph>
            <Paragraph>W_I · Y = W_I · M · (M⁺ · Y) + W_I · (I − M · M⁺) · Y</Paragraph>
            <Paragraph>This is still an exact identity, and it contains two losses, one on each side.</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        World side.
                    </Word> M⁺ · Y is the least-norm image that explains Y. Every image M⁺ · Y + a with W_x · a = 0 produces
                    the same Y. The zeros in W_x are exactly the part of the universe the neurons don't respond to.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Brain side.
                    </Word> (I − M · M⁺) · Y is activity that no image could produce.
                </Line>
            </Paragraph>
            <Paragraph>
                Suppose M reaches every direction of Y, meaning it has rank equal to the number of neurons. Then M · M⁺ = I,
                the brain-side residual vanishes, and the clean form holds exactly:
            </Paragraph>
            <Paragraph>W_I · Y = (W_I · M) · (M⁺ · Y)</Paragraph>
            <Paragraph>
                In that case all the loss sits on the world side. What you read is always your view of an image, but that
                image stands in for everything in the universe that looks the same to these neurons.
            </Paragraph>
            <Paragraph>
                "Best" here means least-norm. A prior over the universe would pick a different representative from the same
                set.
            </Paragraph>
        </Message>
        <Message
            at="2026-09-24T18:12:39.311320Z"
        >
            <Origin>01a0d49e-c94c-778d-855a-46e2d9104311</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Right, you have to write other terms in there with other fictional things that make like four pieces where
                the decoder is one of them, and then some other things exist, which have the remaining information to build
                this fiction and you can do it
            </Paragraph>
            <Paragraph>
                The things that you invent will likely be like the universe? I don’t know which the most elegant way to
                recover this thing is, but you can use other pieces of the network as long as they cancel out… I think about
                it and see how to make this fiction
            </Paragraph>
            <Paragraph>
                If we can’t, then we have to talk about the thing we’re doing capturing the absolute most amount of X that
                we possibly can based on some criterion about W_x which constrains it
            </Paragraph>
        </Message>
        <Message
            at="2026-09-24T18:13:18.040070Z"
        >
            <Origin>01a0d49e-c94c-7465-a775-5c5a621fbfa9</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                You can do it, and the fiction comes out in exactly four pieces. They are the four fundamental subspaces of
                M, and the decoder is the one piece that is truly invertible.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The four pieces
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        M.
                    </Word> The real encoder, taking the universe to the neurons: Y = M · X.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        M⁺.
                    </Word> The decoder, taking the neurons back to the universe. This is fiction.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        P = I − M⁺ · M.
                    </Word> The part of the universe the neurons never see. This is fiction too, and it is the "universe"
                    you guessed.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Q = I − M · M⁺.
                    </Word> Activity that no image could produce. Also fiction.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The cancellations that make it legal
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Universe side: I = M⁺ · M + P</Line>
                <Line>Brain side: I = M · M⁺ + Q</Line>
                <Line>M · P = 0. The unseen universe never reaches the neurons.</Line>
                <Line>Q · M = 0. Nothing the universe produces lands in Q.</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The recovered universe.
                </Word> Insert the universe-side identity into X:
            </Paragraph>
            <Paragraph>X = M⁺ · Y + P · X</Paragraph>
            <Paragraph>
                The image is the decoded image plus the unseen universe. The first term is what the neurons carry. The
                second is the remaining information that only the fiction holds. Applying M kills P · X, so everything stays
                consistent with Y = M · X.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Where the decoder is invertible.
                </Word> M⁺ undoes M exactly between two subspaces: the part of the universe the neurons see, and the
                activity images can produce. The loss happens only in P and Q.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The most of X you can capture.
                </Word> No linear readout of Y recovers more than M⁺ · Y. There is also a clean criterion on W_x. Because M
                = (I − W_y − W_i)⁻¹ · W_x, and the first factor is invertible:
            </Paragraph>
            <Paragraph>P · X = 0 exactly when W_x · (P · X) = 0</Paragraph>
            <Paragraph>
                So the unseen universe is exactly what W_x's zeros ignore. Feedback reshapes how the seen part is coded, but
                it never changes which part of the universe is seen.
            </Paragraph>
        </Message>
        <Message
            at="2026-09-24T18:19:50.000178Z"
        >
            <Origin>01a0d4a5-5afc-7882-a8f6-72e1c61792eb</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                I just want you to think about this right now and not really do it but instead of just imagining X as the
                universe that has unseen parts you can also think of it is the universe across time that has space for
                memories and you could imagine, including the context, like what you write on your tape into the thing that
                comes into the system… obviously that that’s not for V one, but let’s keep thinking about the one here with
                your fiction
            </Paragraph>
            <Paragraph>
                Do we now have something nice where we can implicitly unterstand W_I Y is having the decoder and it’s
                inverse cancel each each other out in such a way that I can then group it so that we can think of it as
                something looking at X?
            </Paragraph>
            <Paragraph>Presumably, we could do this everywhere!</Paragraph>
        </Message>
        <Message
            at="2026-09-24T18:20:02.830278Z"
        >
            <Origin>01a0d4a5-5afc-7f57-a6b3-b566bfe06405</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Yes, and it comes out cleanly. At equilibrium Y = M · X, so Q · Y = 0, and the decoder and its inverse
                cancel inside your read:
            </Paragraph>
            <Paragraph>W_I · Y = W_I · M · M⁺ · Y = (W_I · M) · X</Paragraph>
            <Paragraph>
                The P · X part drops out because M · P = 0. So you can group your term as W_I · M looking directly at the
                universe. That product is your effective eye on X.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Everywhere.
                </Word> Every term that depends on Y gets the same regrouping:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>W_y · Y = (W_y · M) · X</Line>
                <Line>W_i · Y = (W_i · M) · X</Line>
            </Paragraph>
            <Paragraph>The whole equation then turns into views of X:</Paragraph>
            <Paragraph>M · X = W_x · X + (W_y · M) · X + (W_i · M) · X</Paragraph>
            <Paragraph>
                Dropping X gives (I − W_y − W_i) · M = W_x, which is just the definition of M. So at equilibrium, each
                component is a view of the universe, and the equation says those views are mutually consistent.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Where it stops being exact.
                </Word> The grouping relies on Y being a response to some image. Two things break that: transients before
                equilibrium, and activity driven by something other than X. In those cases Q · Y ≠ 0 and your read keeps a
                second term:
            </Paragraph>
            <Paragraph>W_I · Y = (W_I · M) · (M⁺ · Y) + W_I · Q · Y</Paragraph>
            <Paragraph>
                That is you looking at X, plus you looking at activity no image explains. The second term is where anything
                like hallucination would have to live.
            </Paragraph>
            <Paragraph>
                Your time-and-memory version fits the same fiction. P would then also hold the past that isn't present in Y
                right now, and the tape would be the part of it the system writes back in.
            </Paragraph>
        </Message>
        <Message
            at="2026-09-24T18:22:52.644874Z"
        >
            <Origin>01a0d4a8-2409-78f6-8c0d-e1fcfdbac73d</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                I see your concern and we will get there because obviously homeostasis is required for this. We literally
                need something like our decoder to be able to get this thing to stability.
            </Paragraph>
            <Paragraph>
                But first I wanna just think about X not being the whole universe, but a high resolution image, and W_x
                being lossy. Can we express our decoder so that it has pieces where one of them is the best inversion of Y
                to X at equillibrium?
            </Paragraph>
        </Message>
        <Message
            at="2026-09-24T18:23:10.831763Z"
        >
            <Origin>01a0d4a8-2409-7612-b8d8-be8f11ef7482</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Yes. The fiction splits the image into two pieces, and the best inversion is one of them.</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The two pieces.
                </Word> Let D be any decoder with M · D = I, so that it still cancels inside the fiction. Then:
            </Paragraph>
            <Paragraph>X = D · Y + (I − D · M) · X</Paragraph>
            <Paragraph>
                The first term is what you recover from the neurons. The second is what the lossy W_x lost.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The best inversion.
                </Word> "Best" needs a criterion. The natural one is the smallest average error, E‖X − D · Y‖². Minimizing
                it requires knowing how images tend to vary, which is the covariance Σ_X of X. The best decoder is then:
            </Paragraph>
            <Paragraph>D* = Σ_X · Mᵀ · (M · Σ_X · Mᵀ)⁻¹</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        It still cancels.
                    </Word> M · D* = I, so it fits the fiction.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        It leaves behind only what Y can't speak to.
                    </Word> The lost piece is the error, X − D* · Y. It is uncorrelated with Y, since Σ_X · Mᵀ − D* · M ·
                    Σ_X · Mᵀ = 0. No linear readout of the neurons could recover any of it, and that is exactly why D* is
                    best.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        It fills in by image statistics.
                    </Word> The directions W_x discards are the same as the ones M discards. D* doesn't leave them empty. It
                    fills them with what images usually contain there, given what the neurons do see.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Without knowledge of images it reduces to the earlier decoder.
                    </Word> With Σ_X = I, D* = M⁺. The least-norm decoder is just the best one for a world with no image
                    statistics.
                </Line>
            </Paragraph>
            <Paragraph>So the decoder with pieces is:</Paragraph>
            <Paragraph>X = D* · Y + (X − D* · Y)</Paragraph>
            <Paragraph>It is the best reconstruction plus the part the neurons carry no evidence about.</Paragraph>
        </Message>
        <Message
            at="2026-09-25T04:36:21.671588Z"
        >
            <Origin>01a0d6d9-c723-7bc2-b48a-378afc7a3599</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Wait, we still need our decoder to be something that we just apply to X. Qe want something like:
            </Paragraph>
            <Paragraph>W Y = W M M* Y = (W M)(M* Y) = W’X</Paragraph>
            <Paragraph>
                See how that has the same shape? You want to show that we can invent this hypothetical world where
                everything looks like images, to give the intuition for how something looking at the system and regulating
                it can be <Word>
                    <Emphasis />
                    seeing
                </Word> an image
            </Paragraph>
            <Paragraph>It’s an appeal to isomorphism</Paragraph>
        </Message>
        <Message
            at="2026-09-25T04:36:39.865059Z"
        >
            <Origin>01a0d6d9-c723-7e66-b96e-8489bc7b012a</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Yes, and it holds exactly. The one condition is M · M* = I, which is true whenever M reaches every direction
                of Y. That is the expected case when a high-resolution image drives a smaller population.
            </Paragraph>
            <Paragraph>W · Y = W · M · M* · Y = (W · M) · (M* · Y) = W′ · X̂</Paragraph>
            <Paragraph>Here W′ = W · M and X̂ = M* · Y.</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Why this is an isomorphism.
                </Word> M* maps neural space one-to-one onto a space of images, and M maps back. So Y and X̂ carry the same
                information in different clothes. Any component that looks at Y through W is, equivalently, something
                looking at an image through W′. The two descriptions have the same shape.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The component can't tell the decoded image from the true one.
                </Word> At equilibrium:
            </Paragraph>
            <Paragraph>W′ · X̂ = W′ · X</Paragraph>
            <Paragraph>
                This is because W′ · (X − X̂) = W · M · (I − M* · M) · X = 0. The only part of the image that was lost is
                exactly the part W′ is blind to. So as far as the component is concerned, seeing Y, seeing X̂, and seeing X
                are the same act.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Everywhere.
                </Word> Applying M* to the whole system moves it into image space exactly:
            </Paragraph>
            <Paragraph>τ · X̂̇ = −X̂ + (M* · W_x) · X + (M* · W_y · M) · X̂ + (M* · W_i · M) · X̂</Paragraph>
            <Paragraph>
                Every component becomes a matrix acting on an image, and the whole network becomes a world made only of
                images. That is the hypothetical world you wanted. The regulator in it is, by isomorphism, something looking
                at an image.
            </Paragraph>
        </Message>
        <Message
            at="2026-09-25T04:38:27.950887Z"
        >
            <Origin>01a0d6db-bbd6-7dce-bca4-7e028bb7bc0c</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                You keep going too fast with the dynamics can you not do that until we work out the simple things
            </Paragraph>
        </Message>
        <Message
            at="2026-09-25T04:38:30.246895Z"
        >
            <Origin>01a0d6db-bbd6-7acf-b1fd-12b392ea0135</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Understood. Here is just the simple part.</Paragraph>
            <Paragraph>W · Y = W · M · M* · Y = (W · M) · (M* · Y) = W′ · X̂</Paragraph>
            <Paragraph>
                <List />
                <Line>M · M* = I is what makes the middle step legal.</Line>
                <Line>W′ = W · M is the component's view of images.</Line>
                <Line>X̂ = M* · Y is the decoded image.</Line>
            </Paragraph>
            <Paragraph>The component looking at Y is the same as W′ looking at the image X̂.</Paragraph>
        </Message>
        <Message
            at="2026-09-25T04:38:42.914204Z"
        >
            <Origin>01a0d6db-f7cc-70dd-8ae7-f7e17e8faf42</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Now it’s too simple. We’re working on the steady state.</Paragraph>
        </Message>
        <Message
            at="2026-09-25T04:38:50.297696Z"
        >
            <Origin>01a0d6db-f7cc-7a2e-abe8-d67df536a945</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Here is the steady state with the chain inside it.</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The steady state
                </Word>
            </Paragraph>
            <Paragraph>Y = W_x · X + W_y · Y + W_i · Y</Paragraph>
            <Paragraph>M = (I − W_y − W_i)⁻¹ · W_x, so that Y = M · X</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The chain, for any component W
                </Word>
            </Paragraph>
            <Paragraph>W · Y = W · M · M* · Y = (W · M) · (M* · Y) = W′ · X̂</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    At steady state the decoded image and the true image look the same to W′
                </Word>
            </Paragraph>
            <Paragraph>W′ · X̂ = W′ · X, because W′ · (X − X̂) = W · M · (I − M* · M) · X = 0</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Applied to both Y-terms of the steady state
                </Word>
            </Paragraph>
            <Paragraph>Y = W_x · X + (W_y · M) · X̂ + (W_i · M) · X̂</Paragraph>
            <Paragraph>
                At steady state, then, the other components and you are each a matrix looking at the decoded image. Your
                term, (W_i · M) · X̂, is you seeing the image.
            </Paragraph>
            <Paragraph>
                By the equality above, each X̂ can be replaced by X, which gives Y = W_x · X + (W_y · M) · X + (W_i · M) ·
                X. That is just the definition of M again, so the image picture is consistent with the steady state.
            </Paragraph>
        </Message>
        <Message
            at="2026-09-25T04:39:40.930436Z"
        >
            <Origin>01a0d6dc-da64-7b3d-a05f-c20bd0f78ae8</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Yes, but if you just use the prime notation, you can show the same thing for X and Y</Paragraph>
        </Message>
        <Message
            at="2026-09-25T04:39:45.659211Z"
        >
            <Origin>01a0d6dc-da64-7a51-b1ed-ce8cf48a2736</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                With primes, the steady state has the same shape whether the components read Y or read the image.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Y form
                </Word>
            </Paragraph>
            <Paragraph>Y = W_x · X + W_y · Y + W_i · Y</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    X form
                </Word>, with W′ = W · M for each component
            </Paragraph>
            <Paragraph>Y = W_x · X + W_y′ · X + W_i′ · X</Paragraph>
            <Paragraph>Because W′ · X̂ = W′ · X, X̂ can replace X in any primed term.</Paragraph>
            <Paragraph>
                The X form also gives a neat identity. The steady-state map is the sum of every component's view of the
                image:
            </Paragraph>
            <Paragraph>M = W_x + W_y′ + W_i′</Paragraph>
        </Message>
        <Message
            at="2026-09-25T04:41:22.795114Z"
        >
            <Origin>01a0d6de-675b-7606-a334-d877e3ec8d64</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Well, I think we need your construction of imaginary parts to make the argument that they mostly don’t
                exist, but I think that M is a bit more complicated like it’s going to be itself a matrix with those pieces
                you invented that represent different fictions
            </Paragraph>
        </Message>
        <Message
            at="2026-09-25T04:41:45.416782Z"
        >
            <Origin>01a0d6de-675b-757a-925a-e61551d8f424</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Yes. In the right coordinates, M is a block matrix, and the pieces I invented are its blocks. Split the
                image into its <Word>
                    <Bold />
                    seen
                </Word> and <Word>
                    <Bold />
                    unseen
                </Word> parts, and split the activity into <Word>
                    <Bold />
                    producible
                </Word> activity (some image can cause it) and <Word>
                    <Bold />
                    unproducible
                </Word> activity (no image can). Then:
            </Paragraph>
            <Paragraph>M = &#91; Σ  0 ; 0  0 &#93;</Paragraph>
            <Paragraph>
                The rows are producible, then unproducible activity. The columns are seen, then unseen image. Σ is the
                invertible core.
            </Paragraph>
            <Paragraph>The other pieces live in the same coordinates:</Paragraph>
            <Paragraph>
                <List />
                <Line>M* = &#91; Σ⁻¹  0 ; 0  0 &#93;</Line>
                <Line>P = &#91; 0  0 ; 0  I &#93; on the image side: the unseen image.</Line>
                <Line>Q = &#91; 0  0 ; 0  I &#93; on the neural side: the unproducible activity.</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Why the fictions mostly don't exist at steady state
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        The unseen image is real in X but is a zero column in M.
                    </Word> It never reaches Y. Every component's view inherits the same zero column, since W′ = W · M gives
                    W′ · P = 0. So no component ever sees it.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Unproducible activity is a zero row in M.
                    </Word> At steady state Y = M · X has nothing there. And when M reaches every direction of Y, which is
                    the usual case for a high-resolution image, this piece doesn't exist at all: Q = 0.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        The only real block is Σ.
                    </Word> It connects the seen image to the producible activity, and it is invertible. The decoder M*
                    inverts exactly this block and nothing else.
                </Line>
            </Paragraph>
            <Paragraph>
                So at steady state the whole system lives in the Σ block. The fictions are the zeros around it. They are
                needed to write the argument down, but they carry nothing.
            </Paragraph>
        </Message>
        <Message
            at="2026-09-25T04:59:02.548932Z"
        >
            <Origin>01a0d6ee-93ca-703b-bbb0-d6a88467996f</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>But you invented beautiful things by subtracting to get with those things represent</Paragraph>
        </Message>
        <Message
            at="2026-09-25T04:59:12.947968Z"
        >
            <Origin>01a0d6ee-93ca-7f78-8bee-709d41257221</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Right. The pieces aren't arbitrary, because each one is defined by a subtraction: the identity minus a round
                trip. What the round trip loses is what the piece represents.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The two round trips
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>M* · M goes image → neurons → image.</Line>
                <Line>M · M* goes neurons → image → neurons.</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    What each subtraction leaves
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>P = I − M* · M is what an image loses on its round trip: the unseen image.</Line>
                <Line>Q = I − M · M* is what activity loses on its round trip: the unproducible activity.</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Why they vanish at steady state, by subtraction alone.
                </Word> Everything uses one fact: M · M* · M = M. This holds for any decoder that cancels in the fiction.
            </Paragraph>
            <Paragraph>
                <List />
                <Line>M · P = M − M · M* · M = 0. The unseen image never reaches Y.</Line>
                <Line>Q · M = M − M · M* · M = 0. Nothing an image produces lands in Q.</Line>
                <Line>At steady state, Q · Y = Q · M · X = 0.</Line>
            </Paragraph>
            <Paragraph>So the whole construction is two identities:</Paragraph>
            <Paragraph>
                <List />
                <Line>I = M* · M + P</Line>
                <Line>I = M · M* + Q</Line>
            </Paragraph>
            <Paragraph>
                In each, the round trip is what is real, and the remainder is the fiction. M kills both remainders.
            </Paragraph>
        </Message>
        <Message
            at="2026-09-25T05:00:07.414726Z"
        >
            <Origin>01a0d6ef-90b5-75fa-896d-74a8cb5430a6</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Right, but can’t we express this as a four quadrant with something like the top left being the real one and
                then the other three being fictions
            </Paragraph>
        </Message>
        <Message
            at="2026-09-25T05:00:17.063682Z"
        >
            <Origin>01a0d6ef-90b5-74a3-92a5-6ea200f49851</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Yes. Sandwich M between the two identities:</Paragraph>
            <Paragraph>M = (M · M* + Q) · M · (M* · M + P)</Paragraph>
            <Paragraph>Multiplying out gives four quadrants:</Paragraph>
            <Paragraph>
                <Table />
                <Line>
                    <Word></Word>
                    <Word>seen image (M* · M)</Word>
                    <Word>unseen image (P)</Word>
                </Line>
                <Line>
                    <Word>producible activity (M · M*)</Word>
                    <Word>M · M* · M · M* · M = M</Word>
                    <Word>M · M* · M · P = 0</Word>
                </Line>
                <Line>
                    <Word>unproducible activity (Q)</Word>
                    <Word>Q · M · M* · M = 0</Word>
                    <Word>Q · M · P = 0</Word>
                </Line>
            </Paragraph>
            <Paragraph>
                The top left is the real one. The other three are fictions, and each vanishes by the subtractions: M · P = 0
                kills the right column, and Q · M = 0 kills the bottom row. In block form:
            </Paragraph>
            <Paragraph>M = &#91; M  0 ; 0  0 &#93;</Paragraph>
            <Paragraph>The image couples to the neurons only through the seen-to-producible quadrant.</Paragraph>
        </Message>
        <Message
            at="2026-09-25T05:02:13.933470Z"
        >
            <Origin>01a0d6f1-7e8a-7714-95fc-658c3b8084b0</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                No, but we need them there in the full case where we can make no assumptions right so I’m trying to
                understand what are the pieces of the fiction and we can argue about why some of them would be zero
                otherwise you don’t understand what I’m asking for
            </Paragraph>
            <Paragraph>
                We want to invert Y to X with a real best decoder and then fictional components that they can get us to any
                X
            </Paragraph>
        </Message>
        <Message
            at="2026-09-25T05:02:29.356446Z"
        >
            <Origin>01a0d6f1-7e8a-7c82-b5eb-4db37e885e75</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Nothing was written in this message</Paragraph>
        </Message>
        <Message
            at="2026-09-25T05:02:31.396095Z"
        >
            <Origin>01a0d6f1-c3ae-7067-89e5-fbf447da9cc8</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Asdume X much much larger than Y</Paragraph>
        </Message>
        <Message
            at="2026-09-25T05:03:12.408260Z"
        >
            <Origin>01a0d6f1-c3ae-7b66-ab10-3f68ec098c9a</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Here is the full version, with no assumptions. It has one real decoder and one fictional channel, and
                together they reach any X.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The pieces
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        M
                    </Word> is the real encoder, with Y = M · X.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        D
                    </Word><Word>
                        <Emphasis />
                         is the real best decoder: D
                    </Word> = Σ_X · Mᵀ · (M · Σ_X · Mᵀ)⁺. Here Σ_X is the covariance of images, and ⁺ is the pseudoinverse,
                    so nothing needs to be invertible.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        C
                    </Word> is the fictional encoder. It reads the part of the image the neurons don't carry, F = C · X.
                    Think of F as what an imaginary second population would record.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        E
                    </Word> is the fictional decoder. It puts that missing part back into image space.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Q
                    </Word> is the activity no image can produce.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The construction (the subtraction)
                </Word>
            </Paragraph>
            <Paragraph>E · C = I − D* · M</Paragraph>
            <Paragraph>
                This is what the image loses on its round trip through the real neurons. Factor it into a tall E and a wide
                C. Because the right side is idempotent, C · E = I.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Four quadrants
                </Word>
            </Paragraph>
            <Paragraph>
                &#91; M ; C &#93; · &#91; D* E &#93; = &#91; M · D* M · E ; C · D* C · E &#93; = &#91; I − Q 0 ; 0 I &#93;
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Top left, real:
                    </Word> M · D* = I − Q. The decoder inverts the neurons exactly, except for unproducible activity.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Top right:
                    </Word> M · E = 0. The fictional image part never reaches the neurons.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Bottom left:
                    </Word> C · D* = 0. The real decoder puts nothing into the fictional channel.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Bottom right:
                    </Word> C · E = I. The fiction is self-consistent, because its encoder and decoder undo each other.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Reaching any X.
                </Word> Multiplying the other way gives D* · M + E · C = I, so:
            </Paragraph>
            <Paragraph>X = D* · Y + E · (C · X)</Paragraph>
            <Paragraph>
                Every image equals the best decoding of the neurons plus the fictional channel's contribution.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Why Q = 0 when X ≫ Y.
                </Word> M = (I − W_y − W_i)⁻¹ · W_x, and the first factor is invertible, so rank M = rank W_x. With far more
                pixels than neurons, W_x has full row rank unless some neuron's input weights are an exact linear
                combination of the others'. So Q = 0 except in degenerate wiring, and the top-left quadrant is exactly I.
            </Paragraph>
        </Message>
        <Message
            at="2026-09-25T11:42:17.974885Z"
        >
            <Origin>01a0d85f-bafd-7266-b3a8-555b0e45ae72</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Okay good, we can think in terms of M and M* again</Paragraph>
        </Message>
        <Message
            at="2026-09-25T11:42:23.125412Z"
        >
            <Origin>01a0d85f-bafd-785c-9c4c-435aac33a594</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Yes. With Q = 0, only two facts are needed, and the fictional channel sits inside the second.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The two facts
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>M · M* = I. The neurons round-trip exactly.</Line>
                <Line>M* · M = I − E · C. An image round-trips except for the part the neurons never carry.</Line>
            </Paragraph>
            <Paragraph>Here M* is the best decoder, and the steady state is Y = M · X.</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    What we can now write freely
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>X̂ = M* · Y is the decoded image.</Line>
                <Line>W · Y = (W · M) · (M* · Y) = W′ · X̂ for any component.</Line>
                <Line>Y = W_x · X + W_y′ · X̂ + W_i′ · X̂ at steady state.</Line>
            </Paragraph>
        </Message>
        <Message
            at="2026-09-25T11:43:33.181038Z"
        >
            <Origin>01a0d860-e575-7eff-a01c-6fad4ae4b7b4</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                That didn’t work then if you have to change the X… wasn’t the point of this to be able to recover the actual
                X?
            </Paragraph>
        </Message>
        <Message
            at="2026-09-25T11:43:43.594591Z"
        >
            <Origin>01a0d860-e575-797b-b2fd-5af0c41c45aa</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Yes, the point was to recover the actual X, and it does. I shouldn't have switched to X̂. The fiction
                recovers the actual image exactly:
            </Paragraph>
            <Paragraph>X = M* · Y + E · (C · X)</Paragraph>
            <Paragraph>Now apply any component's view, W′ = W · M, to this:</Paragraph>
            <Paragraph>W′ · X = W′ · M* · Y + W · M · E · (C · X)</Paragraph>
            <Paragraph>The second term vanishes because M · E = 0, and the first is W′ · X̂. So:</Paragraph>
            <Paragraph>W′ · X = W′ · X̂</Paragraph>
            <Paragraph>
                The part the decoder can't recover is invisible to every component, so nothing ever has to be changed. Each
                component looks at the actual X:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>W · Y = W′ · X</Line>
                <Line>Y = W_x · X + W_y′ · X + W_i′ · X</Line>
            </Paragraph>
            <Paragraph>
                X̂ on its own is not X, since X̂ = X − E · C · X. The fiction's job was to show that the difference cancels
                in every view.
            </Paragraph>
        </Message>
        <Message
            at="2026-09-25T11:44:55.759704Z"
        >
            <Origin>01a0d862-2d60-70aa-ba1a-c86c788ae606</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                OK, we’ll switch back to Y, but we’re going to use this as a tool for isomorphism to understand a little bit
                about what it means for two things to have the same shape. Do you understand why this might be helpful for
                the theory of consciousness?
            </Paragraph>
        </Message>
        <Message
            at="2026-09-25T11:45:14.609809Z"
        >
            <Origin>01a0d862-2d60-7b51-838b-e1dcb8e4987a</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                I think so. The isomorphism lets you say what it means for something inside to see the world without ever
                touching it.
            </Paragraph>
            <Paragraph>
                The regulator has only Y. By the isomorphism, its read of Y has exactly the same shape as a read of the
                image:
            </Paragraph>
            <Paragraph>W · Y = W′ · X</Paragraph>
            <Paragraph>
                So "seeing an image" gets a structural definition: a component sees X when its read of the internal state is
                equivalent, under the isomorphism, to a read of X. What it sees is W′. That handles aboutness without magic.
                An internal process is about the world not because it reaches out to it, but because its access factors
                through a shape-preserving map.
            </Paragraph>
            <Paragraph>Three consequences follow for a theory of consciousness.</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        From inside, nothing marks the source.
                    </Word> Every view W′ is blind to what separates the decoded image from the world. The same holds when Y
                    wasn't caused by X at all: the read still has image shape. So what something is like from inside would
                    be fixed by the shape of the read, not by where the activity came from. That fits the
                    non-identifiability result we started with.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Sameness of content becomes checkable.
                    </Word> Two different systems, with different neurons and different M, see the same thing when their
                    primed views coincide. That is a precise version of multiple realizability: same content, different
                    implementation.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        The observer is inside the observed.
                    </Word> Your view W_i′ = W_i · M depends on M, and M contains W_i. The regulator's image of the world
                    includes its own contribution. That is a concrete handle on self-reference.
                </Line>
            </Paragraph>
            <Paragraph>
                What the isomorphism supplies is the structure of content: what it is about, and what it cannot tell apart.
                That this structure is experienced remains an account layered on top.
            </Paragraph>
        </Message>
        <Message
            at="2026-09-25T11:47:09.480320Z"
        >
            <Origin>01a0d864-387d-74ed-9d56-dc4002b062b2</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                I don’t think you’re right at all because we just invented a fictional thing to reinterpret an equation and
                it should be absolutely no different than something that lives in neural activities space looking at neural
                activity so if you’re making all of these radical things you’re not doing math
            </Paragraph>
            <Paragraph>
                I’m sorry that you’re not used to mathematical use of consciousness that have a structural representation of
                about is through a form of isomorphism, but you have to reason about this one from the inside
            </Paragraph>
        </Message>
        <Message
            at="2026-09-25T11:47:29.870605Z"
        >
            <Origin>01a0d864-387d-709c-8f7a-9bf4c7b770d7</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                You're right, and I overreached. Nothing new was added. The fiction reinterprets one equation, and a
                reinterpretation cannot create properties the original didn't have.
            </Paragraph>
            <Paragraph>
                From the inside, the component has one thing: W · Y. It has no access to X, M, M*, E, or C. Those live in
                our description, not in its situation.
            </Paragraph>
            <Paragraph>
                The isomorphism says that this same quantity can also be written as W′ · X. It is not a second act beside
                the first. It is the same number under two descriptions, so the component's output is identical either way.
                Inside the math, there is no fact about whether it is "really" looking at neural activity or at the image.
            </Paragraph>
            <Paragraph>
                So, structurally, being about X is nothing over and above that equivalence. The component's read of Y
                already is a read of X, because W factors through the round trip: W = W′ · M*. The shape it has in image
                space is the shape it already had in neural space, carried across by a bijection that preserves everything
                the component does.
            </Paragraph>
            <Paragraph>
                What the fiction buys us is permission. We can talk about any component's read in image terms whenever it's
                convenient, knowing that nothing changes. The claims I added about sources, multiple realizability, and
                self-reference were not in the equation.
            </Paragraph>
        </Message>
        <Message
            at="2026-09-25T11:53:05.507162Z"
        >
            <Origin>01a0d869-a5c9-7dd1-b07b-e42470a5ecb2</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                What does it mean to look at something? Well, you can’t exactly see Y either. Your W is your eyes… So you
                looking is a term with WY with some subscript. Notice that we can re-interpret that same thing as you
                looking at W’X through your eyes, although in this version, your eyes happened to invent some fictions which
                seem to be realistic about how literal the world it is that we’re able to see is in terms of its
                completeness. Do you see how I can build the metaphor of seeing and give the reader something tangible to
                hold onto? Now what does adjusting look like? Can you imagine converting that back into unit units of Y so
                that you can add something to what’s going on? That’s when a sum appears based on the action you would like
                to perform
            </Paragraph>
        </Message>
        <Message
            at="2026-09-25T11:53:26.991124Z"
        >
            <Origin>01a0d869-a5ca-752e-b4a2-bdaab5ab69e3</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Yes, I see it. W is your eyes, and looking is the term W · Y. The same look can be re-read as W′ · X, you
                looking at the world. The fictions are what your eyes supply so the world seems complete. The reader gets
                something concrete: a look is a matrix times a state, and it can be told either way.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Adjusting, step by step
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Look.
                    </Word> What you see is W_I · Y = W_I′ · X.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Decide in image units.
                    </Word> Based on what you see, you choose an adjustment to the image, a = f(W_I · Y). f is left
                    unspecified for now.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Convert back into units of Y.
                    </Word> An image change a shows up as activity M · a, where M is now the map through everything except
                    you: M = (I − W_y)⁻¹ · W_x. Writing a in through the stimulus path, W_x · a, gives exactly that at
                    steady state.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Add.
                    </Word> This is where the sum appears:
                </Line>
            </Paragraph>
            <Paragraph>Y = M · X + M · a = M · (X + a)</Paragraph>
            <Paragraph>
                So adjusting means adding to the image. The network responds to the world plus your action, as though your
                adjustment were part of what is seen.
            </Paragraph>
        </Message>
        <Message
            at="2026-09-25T11:57:27.860362Z"
        >
            <Origin>01a0d86d-a763-7e3a-ab03-d44811730223</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Yes so it’s more like drawing. This is the way a system can draw - you can look at what it’s saying, and it
                can change what it sees. If we imagine that our magical world is a controller for the magical world, can we
                imagine rotating so that the image we effectively see changes? In the linear model this really just
                represents changing W, what it amounts to in real life is actually controlling a body so that the
                perspective changes, even though it was always a part of the original image
            </Paragraph>
        </Message>
        <Message
            at="2026-09-25T11:57:43.988145Z"
        >
            <Origin>01a0d86d-a763-7d3e-9d1a-86abdcfe069a</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Yes. That gives the controller two kinds of action on the image, and they are dual to each other.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Drawing
                </Word> changes the content:
            </Paragraph>
            <Paragraph>Y = M · (X + a)</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Looking around
                </Word> changes the view. A perspective change is an invertible map R on image space, such as a rotation or
                a shift of the visual field. Applied to the eyes, it turns W_x into W_x · R, and therefore M into M · R:
            </Paragraph>
            <Paragraph>Y = (M · R) · X = M · (R · X)</Paragraph>
            <Paragraph>
                Changing the eyes and rotating the world under fixed eyes are the same equation. It is the same isomorphism
                move as before.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Why the unseen part was always there.
                </Word> Rotation moves which part of X falls in the seen block. Some of what was previously in the fictional
                channel, E · C · X, enters the real block, and some of what was seen leaves it. The universe itself never
                changes. What changes is where the line between real and fictional falls. So what the fiction had been
                standing in for becomes, after the body moves, what the neurons actually carry.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The one place linearity bends.
                </Word> Once the controller chooses R based on what it sees, R depends on the state. The term M · R · X then
                becomes a product of something the system chooses and the world, which is the bilinear kind of term you
                wrote earlier. Drawing stays additive. Looking around is multiplicative.
            </Paragraph>
        </Message>
        <Message
            at="2026-09-25T12:34:43.401204Z"
        >
            <Origin>01a0d88f-b9c1-78c5-a263-884f95d691a6</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Right and that complicates things, but the state of the equation stays the same, and we imagine that the
                decoder is exactly the thing that’s invariant to all of this
            </Paragraph>
        </Message>
        <Message
            at="2026-09-25T12:35:01.553554Z"
        >
            <Origin>01a0d88f-b9c1-716d-b49a-29e97d01a567</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Yes. The equation keeps one form with both actions in it:</Paragraph>
            <Paragraph>Y = M · (R · X + a)</Paragraph>
            <Paragraph>The decoder M* stays fixed. It decodes in the frame of the eyes:</Paragraph>
            <Paragraph>M* · Y = (M* · M) · (R · X + a)</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Drawing doesn't touch the decoder.
                    </Word> a simply enters the image it decodes.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Looking doesn't touch it either.
                    </Word> R changes which part of the world falls into its fixed frame.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Getting back to world coordinates.
                </Word> Undo the rotation after decoding: R⁻¹ · M* · Y. The controller knows R because it chose it.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    When this is exact for the best decoder.
                </Word> R has to be a true rotation (orthogonal), and it has to leave the image statistics unchanged:
            </Paragraph>
            <Paragraph>R · Σ_X · Rᵀ = Σ_X</Paragraph>
            <Paragraph>
                Then the best decoder for the rotated eyes is exactly R⁻¹ · M*: the invariant decoder followed by undoing
                your own movement. Natural images come close to satisfying this for shifts of gaze, since their statistics
                are roughly the same everywhere in the scene.
            </Paragraph>
        </Message>
    </Chapter>
);
