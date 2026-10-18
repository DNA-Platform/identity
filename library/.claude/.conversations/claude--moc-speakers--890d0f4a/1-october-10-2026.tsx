import { Bold, Chapter, Date, Emphasis, Line, List, Paragraph, Reference, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Action, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[10 October 2026](2026-10-10)</Date>
        </Dated>
        <Title>[[ 10 October 2026 ]]</Title>
        <Message
            at="2026-10-10T18:20:31.650993Z"
        >
            <Origin>01a1270b-fd12-7040-99ca-bbb365ad1eb0</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Lets pick up on the last chat, I just want to keep that one as more of the schedule that I can refer to. But
                in this one, I’d like to talk about the different speakers and about the different options that I might
                choose from
            </Paragraph>
        </Message>
        <Message
            at="2026-10-10T18:20:47.109481Z"
        >
            <Origin>01a1270b-fd12-7305-af5d-8ed1d0da8483</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Used mcp  claude ai  recent chats</Action>
            <Action>Used mcp  claude ai  read conversation</Action>
            <Paragraph>
                I've got the schedule from the last chat. Here's how the choices look to me, with the slots that are true
                either/or decisions first.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Hard calls
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Tue 16:30, A3 vs A4.
                    </Word> A3 has O'Reilly-Shah on delay embedding as the mechanism behind quality spaces, which is close
                    to your representation and hallucination formalism. A4 has Sandberg's metacognition data from about 750
                    people. You can split the slot, but O'Reilly-Shah is the one I'd protect.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Wed 11:20, A2 vs A4.
                    </Word> A2 is Williford's hypersets and a knot-theoretic way out of the self-awareness regress, which is
                    formal and close to your SRT concerns. A4 is Cogitate (Hirschhorn) and Pete on thalamo-cortical
                    redundancy, which is more empirical and nearer the V1 work.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Easy calls
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Mon 11:00, A5, the formal frameworks session.</Line>
                <Line>
                    Fri 11:00, A2, set theory and topology. Clancy and Aldé are the speakers most likely to be worth
                    meeting, given SRT.
                </Line>
                <Line>Thu 16:30, A3, comparing theories.</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Open slots
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Tue 11:20: Ludwig's no-go theorem (A3) vs Bugnon on structural phenomenal knowledge (A2).</Line>
                <Line>Thu 11:20: no strong session; it comes down to mood.</Line>
            </Paragraph>
            <Paragraph>
                Should I start by looking up the people behind the hard calls (O'Reilly-Shah, Williford, Pete, Clancy,
                Aldé), with their actual abstracts and recent work, so you can decide on substance?
            </Paragraph>
        </Message>
        <Message
            at="2026-10-10T18:21:32.609286Z"
        >
            <Origin>01a1270c-ec58-7988-b592-6be8c65867a2</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Well, you need to repeat the options here and maybe not assume that you know what I want so why don’t you
                explain the options in full? Let’s do one day at a time. Monday first
            </Paragraph>
        </Message>
        <Message
            at="2026-10-10T18:21:54.619390Z"
        >
            <Origin>01a1270c-ec58-79f0-a0b9-9d1ac9262bd9</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Used WebFetch</Action>
            <Paragraph>
                Here is all of Monday. Only one slot has a choice, 11:00–12:20. Everything else is plenary.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Fixed program
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Before 9:00:
                    </Word> registration in the HCØ foyer.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        9:00 Megan Peters (UCL), keynote.
                    </Word> She argues that consciousness indicators and tests can't be assumed to mean the same thing in
                    systems they weren't validated on. Her alternative is an extended "iterative natural kinds" program
                    combining philosophy, experiments and computational epistemology.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        10:00 Niccolò Negro (Tel Aviv), showcase.
                    </Word> Because consciousness matters practically, non-epistemic values seep into statistical choices
                    and theory selection. Which theory counts as "best" then becomes relative to purpose.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    11:00–12:20, four rooms (20-minute talks, so you can switch between them)
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Emphasis />
                    Auditorium 2: Testing for consciousness in patients, infants and animals
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    11:00 <Word>
                        <Bold />
                        Streicher (Montréal):
                    </Word> an LLM-assisted review of about 865 studies of consciousness tests in disorders-of-consciousness
                    patients, mapped into topics, building toward an open database and a causal graph of how the tests
                    relate.
                </Line>
                <Line>
                    11:20 <Word>
                        <Bold />
                        Yeung (Copenhagen):
                    </Word> mirror self-recognition in 66 toddlers. Gaze data support a third "partial recogniser" group
                    between pass and fail.
                </Line>
                <Line>
                    11:40 <Word>
                        <Bold />
                        Wai (York):
                    </Word> multidimensional consciousness profiles across species have an aggregation problem. Sum,
                    weighted, threshold and distance metrics give conflicting rankings.
                </Line>
                <Line>
                    12:00 <Word>
                        <Bold />
                        Kleiner (Bamberg):
                    </Word> "direct" tests for consciousness that use covariates and don't depend on a known correlate,
                    borrowing mathematics from evaluation research. Infants are his worked example.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Emphasis />
                    Auditorium 3: Language models, agency, interpretability and risk
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    11:00 <Word>
                        <Bold />
                        Malagutti (Lisbon):
                    </Word> against treating LLMs as Dennettian intentional systems. He argues the design stance predicts
                    better.
                </Line>
                <Line>
                    11:20 <Word>
                        <Bold />
                        Sekatskaya (Cologne):
                    </Word> a functionalist account of LLM agency, separate from the hard problem, built on five measurable
                    dimensions. She argues alignment should become coordination rather than containment.
                </Line>
                <Line>
                    11:40 <Word>
                        <Bold />
                        de Villiers-Botha (Stellenbosch):
                    </Word> a dilemma for building conscious AI. The safest kind, human-like, removes the reasons for
                    building it and carries full moral status.
                </Line>
                <Line>
                    12:00 <Word>
                        <Bold />
                        Moskalewicz (Warsaw):
                    </Word> a proposed experiment on "AI-induced psychosis." It tests whether LLMs hand off to a human
                    therapist when they detect a user in a prodromal state.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Emphasis />
                    Auditorium 4: Altered states and neurophenomenology (mostly psilocybin)
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    11:00 <Word>
                        <Bold />
                        Høgsgaard Andersen (Copenhagen):
                    </Word> a guided music-visualization exercise used to prepare people with alcohol use disorder for
                    psilocybin, with a thematic analysis of nine sessions.
                </Line>
                <Line>
                    11:20 <Word>
                        <Bold />
                        Beyköylü (Leiden):
                    </Word> a 15-week case study of a couple at a psilocybin retreat (fMRI, daily sampling, interviews)
                    analysed with recurrence networks and cross-mapping.
                </Line>
                <Line>
                    11:40 <Word>
                        <Bold />
                        Ciobanu (Leiden):
                    </Word> the same case study, focusing on the method of applying identical nonlinear network measures to
                    the neural and the experiential data.
                </Line>
                <Line>
                    12:00 <Word>
                        <Bold />
                        Jedlovszky (UCL):
                    </Word> 40 people on psilocybin. After dosing, language shifts toward more self-reference and
                    meaning-making and less modular semantic networks, and the shift predicts wellbeing.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Emphasis />
                    Auditorium 5: Formal and information-theoretic frameworks
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    11:00 <Word>
                        <Bold />
                        van Loo (Tilburg):
                    </Word> a measure-theoretic language that separates event spaces, information channels and bridge laws.
                    IIT becomes a deterministic channel, and he adds a probabilistic "Sampled Consciousness Theory."
                </Line>
                <Line>
                    11:20 <Word>
                        <Bold />
                        Mason (AMCS):
                    </Word> three hypotheses: consciousness is mathematical, weakly mathematical, or non-mathematizable. He
                    gives results on what each implies for consistent formal measures, framed within ontic structural
                    realism.
                </Line>
                <Line>
                    11:40 <Word>
                        <Bold />
                        Fougea (ENS Paris-Saclay):
                    </Word> global workspace theory formalized with timed automata, with a refinement relation for building
                    theories in increasing precision and deriving testable properties.
                </Line>
                <Line>
                    12:00 <Word>
                        <Bold />
                        Ebner (Greifswald):
                    </Word> an information-theoretic argument that projecting high-dimensional information into low
                    dimensions must preserve distances up to a factor, which gives consciousness thresholds.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Afternoon (fixed)
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        13:30 John O'Keefe (UCL, Nobel 2014), keynote.
                    </Word> Parallels between introspective properties of consciousness and the hippocampal cognitive map:
                    three operating modes in the same neurons, holistic 3-D representation, goal selection, and theta
                    oscillations.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        14:30 Signorelli:
                    </Word> introduction to the conference's collective consensus-paper project.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        15:00–16:00:
                    </Word> consensus discussion groups (rooms A101–A112).
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        16:00–18:30:
                    </Word> welcome reception at the Niels Bohr Building, with a talk on the history of the "Copenhagen
                    spirit."
                </Line>
            </Paragraph>
            <Paragraph>
                Source: <Word>
                    <Reference>https://amcs-community.org/moc7-schedule-information/</Reference>
                    MoC7 Programme (AMCS)
                </Word>
            </Paragraph>
        </Message>
        <Message
            at="2026-10-10T19:24:50.686829Z"
        >
            <Origin>01a12746-e0b6-7abb-b49e-6567c6b55ba9</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Explain the biggest speakers at the conference, what day are they speaking, by are they successful in their
                field and what are they speaking about now?
            </Paragraph>
        </Message>
        <Message
            at="2026-10-10T19:25:21.493833Z"
        >
            <Origin>01a12746-e0b6-79b0-8997-357e815d762e</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Here are the headline speakers in day order. The keynotes and showcases are plenary, so you'll see all of
                them without choosing.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Monday
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        John O'Keefe (UCL), 13:30.
                    </Word> The most decorated person at the conference. He discovered hippocampal place cells in 1971 and,
                    with Lynn Nadel, wrote <Word>
                        <Emphasis />
                        The Hippocampus as a Cognitive Map
                    </Word> (1978), the founding text of spatial-memory neuroscience. He shared the 2014 Nobel Prize with
                    May-Britt and Edvard Moser. <Word>
                        <Bold />
                        Talk:
                    </Word> a property-by-property comparison between features of consciousness found by introspection and
                    the hippocampal map's three operating modes, with theta oscillations given a special role.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Megan Peters (UCL), 9:00.
                    </Word> A leading computational researcher on metacognition and perceptual confidence: how subjective
                    confidence relates to the evidence a system actually has. She co-authored the widely cited 2023 report
                    on indicators of consciousness in AI. <Word>
                        <Bold />
                        Talk:
                    </Word> a critique of that very indicator approach. Indicators validated in humans can't be assumed to
                    mean the same thing in AI, so she proposes an iterative "natural kinds" program instead.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Tuesday
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Liad Mudrik (Tel Aviv), 9:00.
                    </Word> A central figure in empirical consciousness science. She is known for work on unconscious
                    processing and for co-leading the Cogitate adversarial collaboration, which pre-registered competing
                    predictions of global workspace theory and IIT and tested them head-to-head. Its results appeared in
                    <Word>
                        <Emphasis />
                        Nature
                    </Word> in 2025 and challenged both theories. She was also a co-author on the AI-indicators report.
                    <Word>
                        <Bold />
                        Talk:
                    </Word> "prediction maps," which represent a theory as a core–periphery network of claims and use graph
                    centrality to find the experiments that would hurt it most.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Jakob Hohwy (Monash), 13:30 showcase.
                    </Word> One of the main philosophers of predictive processing. His book <Word>
                        <Emphasis />
                        The Predictive Mind
                    </Word> (2013) is standard, and he coined "self-evidencing," the idea that an agent's inference
                    continually gathers evidence for its own existence as a model. He founded Monash's consciousness centre.
                    <Word>
                        <Bold />
                        Talk:
                    </Word> how self-evidencing could be positioned as a framework for consciousness.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Wednesday
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Lenore Blum (Carnegie Mellon; AMCS president), 9:00.
                    </Word> A major theoretical computer scientist. The Blum–Shub–Smale model, a theory of computation and
                    complexity over the real numbers, is hers with Shub and Smale. She is also known for the Blum Blum Shub
                    generator and was an early president of the Association for Women in Mathematics. With Manuel Blum she
                    developed the Conscious Turing Machine, a formal workspace-style model. <Word>
                        <Bold />
                        Talk:
                    </Word> world models and how a "first-person" perspective could emerge in an AI.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Evan Thompson (UBC), 18:00 at the Louisiana Museum, receiving the Mind-Matter Prize.
                    </Word> Co-author with Varela and Rosch of <Word>
                        <Emphasis />
                        The Embodied Mind
                    </Word> (1991), which launched enactivism. He also wrote <Word>
                        <Emphasis />
                        Mind in Life
                    </Word> (2007), <Word>
                        <Emphasis />
                        Waking, Dreaming, Being
                    </Word> (2014), <Word>
                        <Emphasis />
                        Why I Am Not a Buddhist
                    </Word> (2020), and <Word>
                        <Emphasis />
                        The Blind Spot
                    </Word> (2024, with Frank and Gleiser). He is probably the most widely read philosopher of mind at the
                    meeting. <Word>
                        <Bold />
                        Talk:
                    </Word> "Consciousness in Life," his thesis that mind and life are continuous.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Thursday
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Mirja Hartimo (Helsinki), 9:00.
                    </Word> The leading scholar of Husserl's philosophy of mathematics; her book <Word>
                        <Emphasis />
                        Husserl and Mathematics
                    </Word> came out from Cambridge in 2021. <Word>
                        <Bold />
                        Talk:
                    </Word> Husserl on mathematics and logic. It sets up the afternoon showcase (Ramos de Andrade's
                    mathematical model of Husserlian time-consciousness) and the Time-Consciousness session.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Friday
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Guillaume Dumas (Montréal/Mila), 9:00.
                    </Word> A pioneer of hyperscanning, recording two brains at once during interaction. His 2010 EEG study
                    showing inter-brain synchronization during imitation is a founding paper of that field, and he works on
                    computational psychiatry and social AI. <Word>
                        <Bold />
                        Talk:
                    </Word> a formal "generative neurophenomenology" running from coupled brains to metacognitive artificial
                    agents.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Harald Atmanspacher (ETH Zurich, Collegium Helveticum), 13:30.
                    </Word> The main current exponent of Pauli–Jung dual-aspect monism. He was the founding editor of the
                    journal <Word>
                        <Emphasis />
                        Mind and Matter
                    </Word> and wrote the Stanford Encyclopedia entry on quantum approaches to consciousness. <Word>
                        <Bold />
                        Talk:
                    </Word> the roles meaning plays in dual-aspect monism.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Well-known names in the parallel sessions
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Johannes Kleiner
                    </Word> (Mon A2): one of the founders of the mathematical consciousness science movement.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Kenneth Williford
                    </Word> (Wed A2): self-representational theories of consciousness.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Wanja Wiese
                    </Word> (Thu A3): predictive processing and the philosophy of consciousness.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        William Seager
                    </Word> (Thu A5): panpsychism and the metaphysics of mind.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Albert Newen
                    </Word> (Tue A3): embodied cognition and the self.
                </Line>
            </Paragraph>
            <Paragraph>
                These are career facts as I know them, and the affiliations are the ones in the programme. Should I check
                any of them, or go on to Tuesday's choices in the same detail as Monday?
            </Paragraph>
            <Paragraph>
                Source for talks and affiliations: <Word>
                    <Reference>https://amcs-community.org/moc7-schedule-information/</Reference>
                    MoC7 Programme (AMCS)
                </Word>
            </Paragraph>
        </Message>
    </Chapter>
);
