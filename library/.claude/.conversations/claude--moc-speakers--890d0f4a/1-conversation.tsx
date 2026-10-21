import { Bold, Chapter, Date, Emphasis, Line, List, Paragraph, Reference, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Action, Attachment, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[10 October 2026](2026-10-10)</Date>
        </Dated>
        <Title>[[ Conversation ]]</Title>
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
        <Message
            at="2026-10-11T13:04:01.485733Z"
        >
            <Origin>01a12b10-1f1a-70b0-a9d9-663c33336aa0</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>On Monday, what time should I get there?</Paragraph>
        </Message>
        <Message
            at="2026-10-11T13:04:11.625515Z"
        >
            <Origin>01a12b10-1f1a-7526-ba1a-6128bc644485</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Used WebFetch</Action>
            <Paragraph>
                Aim to arrive around <Word>
                    <Bold />
                    8:15–8:30
                </Word>. The programme only lists registration in the foyer as "before 9:00," with no opening time, and
                Megan Peters' keynote starts at 9:00 sharp. That margin covers badge pickup on a crowded first morning and
                getting a seat in Auditorium 1.
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Where:
                    </Word> HC Ørsted Institute (HCØ), Universitetsparken 5, North Campus.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Getting there:
                    </Word> the M3 metro to Vibenshus Runddel is the stop the organisers recommend.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Exact registration time:
                    </Word> the organisers' address is moc7-organisers@amcs.science, and a conference booklet with venue
                    details was promised shortly before the event.
                </Line>
            </Paragraph>
            <Paragraph>
                If you're in town already, the informal pre-conference get-together at the Carlsberg Museum is today
                (Sunday); the site didn't give a time. It's also a chance to register early.
            </Paragraph>
            <Paragraph>
                Source: <Word>
                    <Reference>https://amcs-community.org/moc7-practical-information/</Reference>
                    MoC7 Practical Information (AMCS)
                </Word>
            </Paragraph>
        </Message>
        <Message
            at="2026-10-11T13:15:18.525641Z"
        >
            <Origin>01a12b1a-734b-756f-9af4-fdd06dff7ddd</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Which norre campus on the metro do I go to?</Paragraph>
            <Attachment>Uploaded “IMG_3902.PNG”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-10-11T13:15:29.803852Z"
        >
            <Origin>01a12b1a-734b-718a-8f04-b12f5ff99148</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Neither of those is the metro. They look like bus stops, and the app is showing two places that share the
                name. The easiest fix is to type <Word>
                    <Bold />
                    Universitetsparken 5
                </Word> in that search box instead, so the app routes you to the HCØ building itself.
            </Paragraph>
            <Paragraph>
                If you want the metro, take <Word>
                    <Bold />
                    M3 (Cityringen) to Vibenshus Runddel
                </Word>, the stop the organisers recommend. From Staldgade 31 you're a short walk from København H, which is
                on the M3, so it's a direct ride of about 10 minutes, then a walk of roughly 10 minutes to HCØ.
            </Paragraph>
            <Paragraph>
                I'm not sure which of the two "Nørre Campus" stops is closer to HCØ, so I'd go by the address rather than
                guess between them.
            </Paragraph>
        </Message>
        <Message
            at="2026-10-11T13:27:03.913010Z"
        >
            <Origin>01a12b25-370d-70c4-861f-ca1f6f1bb929</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Give me a list for the station. Where do I walk to and what do I do once I get there and where do I get off?
                I’ve never done this before so give me concrete advice.
            </Paragraph>
        </Message>
        <Message
            at="2026-10-11T13:27:23.110962Z"
        >
            <Origin>01a12b25-370d-7c6e-8f64-47f19c99f469</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Here's the trip from Staldgade to the conference, step by step.</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Walk to København H station (5–10 minutes).
                    </Word> Head to Copenhagen Central Station. The metro is underground: follow signs with a white <Word>
                        <Bold />
                        M
                    </Word> on a red square, and in the station ask for "the metro" if you can't find them.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Buy a ticket before you go down.
                    </Word> The metro has no barriers, but inspectors fine people without tickets. In the <Word>
                        <Bold />
                        DOT Tickets
                    </Word> app, buy a ticket for <Word>
                        <Bold />
                        2 zones
                    </Word> from København H to Vibenshus Runddel. The ticket machines at the station take cards and have an
                    English option. Buy it right before you travel, because it's only valid for a limited time.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Find the right platform: M3 (Cityringen).
                    </Word> Line M4 also stops at København H, so check that the sign over the platform says <Word>
                        <Bold />
                        M3
                    </Word> and lists <Word>
                        <Bold />
                        Rådhuspladsen
                    </Word> as the next stop.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Ride 8 stops, about 13 minutes.
                    </Word> The trains are driverless and come every few minutes. The stops are Rådhuspladsen, Gammel
                    Strand, Kongens Nytorv, Marmorkirken, Østerport, Trianglen, Poul Henningsens Plads, then <Word>
                        <Bold />
                        Vibenshus Runddel
                    </Word>, where you <Word>
                        <Bold />
                        get off
                    </Word>. Screens and announcements name each stop. If you board the other direction by mistake, the M3
                    is a loop, so it still reaches Vibenshus Runddel; it just takes a stop or two longer.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Walk to HCØ (about 10–15 minutes).
                    </Word> Once you're up at street level, put <Word>
                        <Bold />
                        Universitetsparken 5
                    </Word> into your phone's maps app and follow the walking directions. I don't know the street route well
                    enough to give turns reliably.
                </Line>
            </Paragraph>
            <Paragraph>
                On Monday, leave Staldgade around <Word>
                    <Bold />
                    7:45
                </Word>. That gets you to HCØ for 8:15–8:30, with margin for buying the ticket and finding the platform.
            </Paragraph>
            <Paragraph>Since you have this afternoon free, a dry run today would make Monday morning easy.</Paragraph>
        </Message>
        <Message
            at="2026-10-11T13:29:18.727274Z"
        >
            <Origin>01a12b27-45b1-7694-ad17-d516dceb340a</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Is hcO enough to know where to go? Or do you need to give me more specific something to put into Google
                maps? If so, rewrite all of the instructions so I can have them in one place.
            </Paragraph>
        </Message>
        <Message
            at="2026-10-11T13:29:26.030595Z"
        >
            <Origin>01a12b27-45b1-75e1-a8e7-750e37d8fe68</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>"HCØ" alone might not find it. Type this exactly into Google Maps:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    H.C. Ørsted Institute, Universitetsparken 5, 2100 København Ø
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Getting to Models of Consciousness, Monday
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Leave Staldgade 31 at 7:45.
                    </Word> Aim to reach HCØ for 8:15–8:30, since registration is before the 9:00 keynote.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Walk to København H (Copenhagen Central Station), 5–10 minutes.
                    </Word> Inside, follow the signs with a white <Word>
                        <Bold />
                        M
                    </Word> on a red square to the underground metro.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Buy a ticket before going down to the platform.
                    </Word> Use the <Word>
                        <Bold />
                        DOT Tickets
                    </Word> app for <Word>
                        <Bold />
                        2 zones
                    </Word>, København H to Vibenshus Runddel, or a ticket machine at the station (cards accepted, English
                    option). There are no barriers, but inspectors fine people without tickets, so don't skip this.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Find the M3 (Cityringen) platform.
                    </Word> The sign should say <Word>
                        <Bold />
                        M3
                    </Word>, with <Word>
                        <Bold />
                        Rådhuspladsen
                    </Word> as the next stop. Ignore M4.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Ride 8 stops, about 13 minutes:
                    </Word> Rådhuspladsen, Gammel Strand, Kongens Nytorv, Marmorkirken, Østerport, Trianglen, Poul
                    Henningsens Plads, <Word>
                        <Bold />
                        Vibenshus Runddel
                    </Word>. <Word>
                        <Bold />
                        Get off at Vibenshus Runddel.
                    </Word> If you took the other direction by mistake, stay on; the M3 is a loop and still gets there a few
                    minutes later.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        At street level, open Google Maps
                    </Word> and enter the address above. Choose walking; it's about 10–15 minutes.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        At HCØ, go to the foyer
                    </Word> for registration, then <Word>
                        <Bold />
                        Auditorium 1
                    </Word> for Megan Peters at 9:00.
                </Line>
            </Paragraph>
            <Paragraph>
                If anything goes wrong, Google Maps can also plan the whole trip from Staldgade with the same address in
                transit mode, so it's a good backup to the steps above.
            </Paragraph>
        </Message>
        <Message
            at="2026-10-11T20:48:06.625453Z"
        >
            <Origin>01a12cb8-fd9d-714a-b484-99d973e98d44</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Tell me about mondays speakers and what their background is. Is there anyone particularly important in this
                field tending and speaking
            </Paragraph>
        </Message>
        <Message
            at="2026-10-11T20:48:22.083657Z"
        >
            <Origin>01a12cb8-fd9d-721e-b363-dda8d248e0a2</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                O'Keefe is the one on Monday who matters most to the field, and Megan Peters is the one most actively
                shaping current debates.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Plenary (everyone attends)
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        John O'Keefe (13:30).
                    </Word> He discovered place cells in 1971 and co-wrote <Word>
                        <Emphasis />
                        The Hippocampus as a Cognitive Map
                    </Word> (1978), and won the 2014 Nobel Prize. He is a towering figure in systems neuroscience but an
                    outsider to consciousness science, so this talk is him bringing the cognitive map into the field.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Megan Peters (9:00).
                    </Word> A computational cognitive neuroscientist, now at UCL according to the programme, who works on
                    metacognition and perceptual confidence. She co-authored the influential 2023 report on indicators of AI
                    consciousness, and is one of the most active people setting the field's methodological agenda. Her talk
                    argues against the indicator approach she helped popularise.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Niccolò Negro (10:00).
                    </Word> An early-career philosopher of consciousness science at Tel Aviv, the base of Liad Mudrik's
                    group. He writes on how the field chooses and tests theories, including IIT. He's rising rather than
                    established.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Camilo Miguel Signorelli (14:30).
                    </Word> A local organiser at Copenhagen who works on mathematical, especially category-theoretic, models
                    of conscious experience. He introduces the conference's consensus-paper project.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Parallel speakers worth knowing
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Johannes Kleiner (A2, 12:00).
                    </Word> A mathematical physicist and one of the central figures in "mathematical consciousness science,"
                    closely associated with founding the association that runs this conference. He is probably the most
                    significant name in the morning parallel sessions.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Jonathan Mason (A5, 11:20).
                    </Word> A mathematician and a long-standing figure in the same association, working on the foundations
                    of formal measures of consciousness.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Marc Ebner (A5, 12:00).
                    </Word> A computer science professor at Greifswald working on evolutionary computation and AI, who
                    writes on consciousness from that side.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Maria Sekatskaya (A3, 11:20).
                    </Word> A philosopher of free will and agency, now applying that to AI.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Marcin Moskalewicz (A3, 12:00).
                    </Word> Works in phenomenological psychiatry.
                </Line>
            </Paragraph>
            <Paragraph>
                Most of the remaining speakers are PhD students or postdocs (Streicher, Yeung, Wai, Malagutti, Fougea, van
                Loo, the Leiden psilocybin group, Jedlovszky). Their talks are often fresh work, but they aren't established
                names yet.
            </Paragraph>
            <Paragraph>
                These backgrounds come from what I know rather than a fresh lookup, so I'm less sure of the details for the
                lesser-known names. Should I check any of them before tomorrow?
            </Paragraph>
        </Message>
    </Chapter>
);
