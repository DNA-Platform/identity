import { Chapter, Emphasis, Paragraph, Title, Word } from '@dna-platform/public';
import { Message, Speaker } from '../../../.manual/.book';
import { Action, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2026-05-18T10:44:23.495790Z"
        >
            <Origin>019e3aaf-cd0e-73c9-ae8e-a394a8145a33</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Microbs dataset has a functional connectivity paper where they ask whether neurons that fire together wire
                together. The microns data set is impressive.
            </Paragraph>
            <Paragraph>
                First of all, we already know this from LTP rules. I suppose that doesn’t factor in synapse formation. But
                surely there’s a result that shows that synaptic growth can be triggered by I don’t know calcium signals
                correlated to whatever an NMDA channel needs to be active but at a distance. No result has been established
                like that.
            </Paragraph>
            <Paragraph>
                What I am saying is - forget microns. In vitro, what triggers synapses to form? No one has done any study
                with? I found a result that similarities and activity or a calcium signal combined with ampa from the
                presynaptic axon (right?) causes synapsis to form or something.
            </Paragraph>
        </Message>
        <Message
            at="2026-05-18T10:45:23.330353Z"
        >
            <Origin>019e3aaf-cd0f-758e-8fc9-c1c116b0e304</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>
                Searched the web for “activity-dependent de novo synapse formation in vitro correlated calcium NMDA”
            </Action>
            <Action>Searched the web for “glutamate uncaging induces de novo spine formation Kwon Sabatini”</Action>
            <Paragraph>
                You're thinking of the Kwon &amp; Sabatini 2011 <Word>
                    <Emphasis />
                    Nature
                </Word> paper, almost certainly. They used two-photon glutamate uncaging at bare stretches of dendrite on
                cortical layer 2/3 pyramidal neurons in acute slices and showed that glutamate alone is sufficient to
                trigger de novo spine growth in a location-specific manner. The requirements were NMDA receptor activation,
                Ca²⁺ release from internal stores, PKA, and MAPK — and notably no filopodial intermediate was observed;
                spines appeared within ~10 seconds. The new spines then matured and acquired functional responses to
                presynaptic input. That's about as close as anyone has gotten to "correlated glutamatergic signal causes a
                synapse to form right there."
            </Paragraph>
            <Paragraph>
                One small correction to your framing: it's not AMPA <Word>
                    <Emphasis />
                    from
                </Word> the presynaptic axon — AMPA/NMDA are postsynaptic receptors. What comes from the axon is glutamate,
                which binds both. The Kwon/Sabatini trick is that uncaging glutamate substitutes for presynaptic release,
                and the NMDAR requirement is the "coincidence detector" piece (needs glutamate + depolarization), which is
                the synaptogenesis analog of the Hebbian rule you're invoking for LTP. Follow-ups extended this: Oh, Lutzu,
                Castillo &amp; Kwon showed local GABA uncaging similarly induces gephyrin puncta and inhibitory synapse
                formation via GABA_A and VGCCs in developing cortex, and Lee et al. (Neuron 2016) found NMDAR-coupled
                ryanodine-dependent intracellular Ca²⁺ release implements a cooperative plasticity rule between coactive
                neighboring synapses during synaptogenesis, which is why developing dendrites end up with clustered synaptic
                weights.
            </Paragraph>
            <Paragraph>
                The caveats worth keeping in mind: these results are mostly in young (P8–12) tissue, and "spine forms where
                glutamate was uncaged" isn't quite "two specific neurons grow a new synapse because they fired together" —
                the presynaptic partner in Kwon/Sabatini is a laser, not a coactive neuron. A 2024 bioRxiv paper from the
                Lohmann group pushed closer to the in vivo version, showing NMDAR-driven, minute-long dendritic Ca²⁺
                transients immediately precede filopodial emergence in CA1 during a prenatal critical window. But you're
                right that the clean "two neurons, correlated activity, watch a synapse form between them" experiment is
                harder to find than you'd expect given how foundational the claim is.
            </Paragraph>
        </Message>
        <Message
            at="2026-05-18T10:47:28.892739Z"
        >
            <Origin>019e3ab2-a1ca-788c-ad9d-83ddc582d259</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Good catch yes I was referring to glutamate and I had them confused. But even if San formation was
                relatively random although it shows it’s not I think tell me if I’m wrong but the mechanism you’re saying
                means that’s an absence would be more likely to survive LTP and LTD, isn’t it the case that’s could more or
                less form at random and as long as there was some mechanism by which synapsis die because of excessive LTD
                or a lack of LTP then you would still get an absence for functionally connected neurons
            </Paragraph>
            <Paragraph>
                It’s hard for me to believe that we don’t understand this theoretically and that we really need a fancy
                model and the reason why I’m saying this is because the paper I’m reading doesn’t really reference any of
                those literature
            </Paragraph>
        </Message>
        <Message
            at="2026-05-18T10:48:37.533784Z"
        >
            <Origin>019e3ab2-a1cb-7431-b0f9-f039dd73c4f9</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “MICrONS functional connectivity paper 2025 like-to-like wiring”</Action>
            <Paragraph>
                You're not wrong, and this is essentially the selectionist (as opposed to instructionist) account of circuit
                formation, which goes back to Changeux &amp; Danchin's 1976 <Word>
                    <Emphasis />
                    Nature
                </Word> paper "Selective stabilization of developing synapses" and Edelman's Neural Darwinism program. The
                minimal ingredients you listed — exploratory/stochastic synapse formation, activity-dependent stabilization,
                and elimination of weakly-driven contacts — are sufficient to produce like-to-like connectivity at the
                population level. You don't need any mechanism that explicitly detects correlation at the moment of synapse
                formation. This is also baked into classic theoretical work: the BCM rule (Bienenstock, Cooper &amp; Munro
                1982), Linsker's emergence of orientation selectivity from Hebbian dynamics, Miller/Keller/Stryker on ocular
                dominance — all of these predict that population-level "fire together, wire together" structure falls out of
                local synaptic rules plus turnover, almost trivially. Empirically, the climbing fiber → Purkinje cell
                pruning (Hashimoto &amp; Kano) and the NMJ work from Lichtman's lab are textbook demonstrations that the
                selection mechanism is real.
            </Paragraph>
            <Paragraph>
                So if the Ding et al. 2025 MICrONS paper is presenting "neurons with similar tuning are more connected" as
                the headline finding, then yes, it's theoretically expected and the lack of citation to the selectionist
                tradition is a real gap — though it's also fairly standard for connectomics papers to live in their own
                citation bubble, separate from the developmental/theoretical neuroscience literature. What I'd say is
                genuinely interesting in that paper, and harder to get out of vanilla pairwise Hebbian + pruning, is the
                higher-order rule: the cohort of postsynaptic neurons downstream of a single presynaptic cell is more
                functionally similar to each other than a pairwise like-to-like rule would predict. That's a statement about
                third-order correlations in the connectivity, and it's not obvious that simple pair-based STDP plus
                elimination produces it — you'd probably need triplet rules, heterosynaptic competition, or branch-level
                signaling to explain it cleanly. That part is worth the empirical effort.
            </Paragraph>
            <Paragraph>
                The other thing the paper does that's defensible is <Word>
                    <Emphasis />
                    quantify
                </Word> the effect at scale and show it holds across layers, areas, and feedback connections, where you
                could imagine the rule might break down or invert. The theory doesn't guarantee that the brain actually
                implements the rule everywhere — it's compatible with the brain doing something else. But you're right that
                the "needs a fancy RNN comparison to be interpretable" framing is overselling. A reader who knows Changeux,
                BCM, Miller-Stryker would say the pairwise result is a sanity check, not a discovery, and the real novelty
                is the higher-order cohort finding. The fact that the paper doesn't situate itself that way is a
                writing/framing issue, not a substance issue — but it's annoying, and your instinct to push back is correct.
            </Paragraph>
        </Message>
        <Message
            at="2026-05-18T10:49:47.979221Z"
        >
            <Origin>019e3ab4-c054-726f-9dca-ecd696ee3ff7</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Write that take what you know from the slice work you just said you found some evidence that what was it?
                Glutamate and calcium triggered and apsis performance slices? Don’t we have concrete evidence that too much
                LTD or two little LTP causes synapsis to die in certain places? Isn’t there enough experiment to work to at
                least have a written down theory of this? Even one, probably robust enough to explain things like the
                statistics of synapsis.
            </Paragraph>
        </Message>
        <Message
            at="2026-05-18T10:51:27.454651Z"
        >
            <Origin>019e3ab4-c055-725b-b7d0-424b49563dd5</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “LTD induces spine shrinkage elimination Nägerl Wiegert Oertner Hayama”</Action>
            <Action>
                Searched the web for “unified theory structural plasticity synapse formation elimination Hebbian model
                statistics”
            </Action>
            <Action>
                Searched the web for “Loewenstein Ziv synapse size distribution lognormal multiplicative dynamics”
            </Action>
            <Paragraph>
                Yes — the LTD/death side of the ledger is solid. Nägerl et al. 2004 (Bonhoeffer lab) and Zhou, Homma &amp;
                Poo 2004 both showed that LTD-inducing low-frequency stimulation produces spine shrinkage requiring NMDA
                receptor activation and calcineurin, with cofilin-mediated actin depolymerization as the downstream
                effector. Wiegert &amp; Oertner 2013 (PNAS) extended this with optogenetic LTD and showed that depression is
                followed days later by elimination of a subset of depressed spines and their neighbors, preferentially at
                synapses with initially low release probability — unreliable synapses get selectively removed from the
                circuit. Ramiro-Cortés &amp; Israely 2013 added mGluR-LTD, Hayama et al. 2013 added GABA-gated versions,
                Shinoda 2010 added the repeated-LTD case. So you have the full circuit: glutamate + post-synaptic Ca²⁺ at
                the right magnitude → growth/LTP/stabilization; same machinery at lower amplitude → shrinkage, then
                elimination. Nothing missing from the cell biology.
            </Paragraph>
            <Paragraph>
                And yes, theories have been written down. Multiple, actually. Seung &amp; Zung 2017 formalized unsupervised
                learning as a zero-sum game between Hebbian excitation and anti-Hebbian inhibition with explicit synaptic
                competition that eliminates all but the most strongly correlated inputs. Knoblauch has a "potential
                synapses" framework with probabilistic state transitions tied to memory capacity. Zheng, Dimitrakakis &amp;
                Triesch 2013 combined STDP, homeostasis, and structural plasticity in spiking networks. Fauth &amp; Tetzlaff
                have a series on the interaction of structural and synaptic plasticity timescales. On the statistics
                specifically, Loewenstein, Kuras &amp; Rumpel 2011 showed the stationary spine-size distribution is well-fit
                by a log-normal, which requires that synaptic changes be proportional to current synaptic efficacy
                (multiplicative dynamics) rather than the additive decay terms used in classical models. The Ziv lab
                (Statman, Hazan, Minerbi) extended this into a Kesten/Langevin stochastic framework that reproduces synaptic
                size distributions, turnover statistics, and tenacity timescales from a small number of parameters.
            </Paragraph>
            <Paragraph>
                Here's the slightly heretical point that makes your question even sharper: the Ziv-lab-style models are
                largely activity-independent — stochastic multiplicative shrinkage plus additive growth, or cooperative
                binding/unbinding of scaffold molecules, already reproduces the lognormal-like distribution of synaptic
                sizes. Which means a large fraction of the population-level statistics of synapses doesn't actually require
                Hebbian explanation at all. What requires Hebbian explanation is the <Word>
                    <Emphasis />
                    correlation structure
                </Word> — which synapses are where, between which neurons — and that's exactly the bit MICrONS measured. So
                the honest framing of the field is: we have a good stochastic-statistical theory of synapse size
                distributions (Loewenstein/Ziv), a good cellular theory of how individual synapses are born and die
                (Kwon/Sabatini + Nägerl/Wiegert), and a good selectionist theory of how correlated activity sculpts
                populations (Changeux/Edelman/BCM/Seung). They've never been fully unified into a single quantitative model
                that predicts MICrONS-scale connectivity from molecular rules, but that's not because the pieces are missing
                — it's because the integration work hasn't been the prestige project. The MICrONS paper could have said "our
                pairwise like-to-like result is consistent with the predictions of selectionist theory dating back to
                Changeux 1976, and quantifies the effect at scale; our higher-order cohort result is the genuinely novel
                observation." That would have been the honest framing.
            </Paragraph>
        </Message>
        <Message
            at="2026-05-18T10:55:05.244298Z"
        >
            <Origin>019e3ab9-9780-7975-9fd2-0b985074be41</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                I worked for chuck stevens. Look him up. I’m pretty sure Chuck would’ve just come up with a probability
                distribution of some sort, maybe even something like the probability distribution of synaptic volume as a
                function of the correlation between two neurons, and then some sort of total probability distribution of the
                area of synaptic connection as a function of correlation between neurons. I don’t know I’m making those two
                things up, but I feel like we could probably build a pretty simple theory that has things like that in it
                and I feel like this paper should be confirming a theory like that and not imagining that we need neural
                networks and massive imaging to understand that we expect the connections from functionally connected cells
            </Paragraph>
        </Message>
        <Message
            at="2026-05-18T10:56:10.856035Z"
        >
            <Origin>019e3ab9-9782-7648-8f8c-564616f81cb0</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>
                Searched the web for “Cossell Iacaruso Mrsic-Flogel 2015 functional connectivity V1 signal correlation
                weight”
            </Action>
            <Paragraph>
                Chuck's approach is exactly the right reference frame here, and your instinct is sound — but you should know
                that someone already wrote down that paper, in 2015: Cossell, Iacaruso, Muir, Houlton, Sader, Ko, Hofer
                &amp; Mrsic-Flogel, "Functional organization of excitatory synaptic strength in primary visual cortex"
                (Nature 2015), combined two-photon calcium imaging with paired intracellular recordings in mouse V1 L2/3 and
                showed that strong connections are sparse and occur between neurons with correlated responses, while weak
                connections link uncorrelated neurons. That <Word>
                    <Emphasis />
                    is
                </Word> a measurement of P(weight | signal correlation), exactly the function you sketched. They found
                connection amplitudes spanning two orders of magnitude with a strongly skewed distribution, and the few
                strong synapses concentrated at high correlation — a one-parameter rule. So the simple theory exists, the
                data confirming it exists, and it's a decade old. The MICrONS paper is essentially Cossell-at-EM-scale, with
                structural rather than electrophysiological readout, and the honest framing would be: "Cossell's pairwise
                rule holds when measured structurally, across layers and areas and feedback, and here is a new higher-order
                cohort deviation that suggests the rule isn't purely pairwise."
            </Paragraph>
            <Paragraph>
                The Stevens-style theory you're gesturing at is also basically free to write down once you accept the
                Loewenstein/Ziv multiplicative-dynamics framework. Take each potential synapse to follow ds/dt = μ(r)·s +
                σ·s·dW, where r is the correlation between the two neurons and μ is a drift that's positive above some
                correlation threshold and negative below. Add an elimination boundary at small s. Then you get,
                analytically: a lognormal stationary distribution of synaptic sizes conditional on existence, a connection
                probability P(connected | r) that's a sigmoid in r, an expected weight E&#91;s | r, connected&#93; that's
                monotonic in r, and a total dyadic connection strength E&#91;total area | r&#93; = P(connected | r) ·
                ⟨#synapses per pair⟩ · E&#91;s | r&#93;. Three or four parameters, fit from the data, and you predict the
                marginals of the MICrONS observations. You'd then look for residuals — the cohort-level higher-order term
                being one — to identify what the pairwise theory misses. That's the Stevens move: write the minimal
                probability model, fit it, and use the deviations to tell you what extra structure you actually need.
            </Paragraph>
            <Paragraph>
                The reason the paper doesn't do this is partly cultural — the connectomics + deep-learning axis the MICrONS
                consortium grew out of frames problems as engineering challenges that need digital twins and RNN
                comparisons, not as statistical mechanics problems with two or three parameters. Chuck's tradition (along
                with Bialek, the Ziv lab, Loewenstein, Sompolinsky in a different mode) treats the brain as a place where
                the right theory is small and the data should overconstrain it. If the answer to "why are functionally
                similar neurons more strongly connected" requires a deep learning ablation study, you've lost the plot
                somewhere. Your reading of the paper is correct: it's a confirmation paper dressed up as a discovery paper,
                and the genuinely interesting finding — the higher-order cohort similarity beyond pairwise prediction — is
                the part that <Word>
                    <Emphasis />
                    should
                </Word> have been framed as the residual after fitting the simple Cossell/Stevens-style theory.
            </Paragraph>
        </Message>
    </Chapter>
);
