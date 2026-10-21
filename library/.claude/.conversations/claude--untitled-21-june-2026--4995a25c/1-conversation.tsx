import { Bold, Chapter, Date, Emphasis, Heading, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Action, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[21 June 2026](2026-06-21)</Date>
        </Dated>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2026-06-21T12:25:56.274591Z"
        >
            <Origin>019eea24-fe79-7b3e-90d6-609600e22ac0</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Nothing was written in this message</Paragraph>
        </Message>
        <Message
            at="2026-06-21T12:29:58.655786Z"
        >
            <Origin>019eea24-fe79-71e1-9c59-73a8f45c8dde</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                This is a rich question that sits at the intersection of several literatures I want to ground carefully
                rather than answer from memory alone. Let me search across the distinct strands.
            </Paragraph>
            <Action>
                Searched the web for “predicates of personal taste faultless disagreement judge parameter Lasersohn
                semantics”
            </Action>
            <Paragraph>
                Good grounding on the taste-predicate strand. Now the de se / centered-worlds / essential indexical
                literature, which is the core formal apparatus for first-person content.
            </Paragraph>
            <Action>
                Searched the web for “de se attitudes centered worlds Lewis Perry essential indexical first-person content
                semantics”
            </Action>
            <Paragraph>
                Now a genuinely formal/computational framework that goes by the name "subjective logic," plus the Fregean
                roots of the sense/idea (objective/subjective) split.
            </Paragraph>
            <Action>Searched the web for “Jøsang subjective logic formal framework opinions uncertainty belief”</Action>
            <Paragraph>
                Now the Fregean foundations — the original semantic carving of "objective sense" from "subjective idea"
                (Vorstellung) — and MacFarlane's assessment-sensitivity, the most worked-out formal account of perspectival
                truth.
            </Paragraph>
            <Action>
                Searched the web for “Frege "The Thought" sense objective Vorstellung idea subjective third realm semantics”
            </Action>
            <Paragraph>
                MacFarlane's assessment-sensitivity is the most developed formal machinery for perspectival truth — let me
                get that, then first-person/egocentric logic.
            </Paragraph>
            <Action>
                Searched the web for “MacFarlane assessment sensitivity context of assessment relativism truth formal
                semantics”
            </Action>
            <Paragraph>
                Now the first-person/egocentric logic tradition — formal logics built specifically around the indexical "I"
                — and any recent work formalizing perspective.
            </Paragraph>
            <Action>
                Searched the web for “egocentric logic first-person logic Prior Castañeda perspective formal indexical "I"
                recent”
            </Action>
            <Paragraph>
                Now the phenomenological tradition — Husserl's formal attempts to capture the structure of subjective
                (intentional) experience itself, the noema, and formalizations of it.
            </Paragraph>
            <Action>
                Searched the web for “Husserl noema intentional content formal structure phenomenology formalization
                subjective experience”
            </Action>
            <Paragraph>
                Now two angles that directly address the <Word>
                    <Emphasis />
                    objectivity
                </Word> side and the category-theoretic structure Doug would appreciate: objectivity-as-invariance, and
                sheaf-theoretic models of local (perspectival) vs global (objective) data.
            </Paragraph>
            <Action>
                Searched the web for “Nozick Invariances objectivity as invariance under transformation absolute conception
                Williams”
            </Action>
            <Paragraph>
                Finally, the category-theoretic angle that's most aligned with your formal sensibility: sheaf-theoretic
                models where "local = perspectival" and "global = objective," and where subjectivity is precisely the
                obstruction to gluing.
            </Paragraph>
            <Action>
                Searched the web for “sheaf theoretic contextuality local global sections perspective Abramsky obstruction
                gluing”
            </Action>
            <Paragraph>
                Both questions have real, substantial answers — and the striking thing is that several quite different
                research traditions have converged on the <Word>
                    <Emphasis />
                    same structural move
                </Word> without always recognizing each other. Let me take them in turn and then draw the thread together,
                because the convergence is the most interesting part.
            </Paragraph>
            <Heading>I. The semantics of the subjective/objective distinction</Heading>
            <Paragraph>
                The question "what does it <Word>
                    <Emphasis />
                    mean
                </Word>, semantically, for content to be subjective?" was first posed sharply by <Word>
                    <Bold />
                    Frege
                </Word>, and his answer is a genuinely semantic criterion rather than a metaphysical one. He partitions
                content into three: the <Word>
                    <Emphasis />
                    Bedeutung
                </Word> (reference), the <Word>
                    <Emphasis />
                    Sinn
                </Word> (sense), and the <Word>
                    <Emphasis />
                    Vorstellung
                </Word> (idea/presentation). The crucial contrast is between sense and idea. An idea is "wholly subjective";
                the sense lies between the subjective idea and the object itself — no longer subjective, yet not the object.
                His operational test is <Word>
                    <Emphasis />
                    ownership and shareability
                </Word>: senses and thoughts exist in a "third realm," not dependent on any one person's psychology — a
                thought has a truth-value whether or not anyone grasps it, and senses are interpersonal. An idea, by
                contrast, requires an owner and cannot be had by two minds. So for Frege the semantic mark of the subjective
                is <Word>
                    <Emphasis />
                    non-shareability / owned-ness
                </Word>, and the mark of the objective is <Word>
                    <Emphasis />
                    ownerless graspability plus truth-evaluability
                </Word>. His telescope analogy makes it precise: the retinal image (idea) is private and standpoint-bound;
                the optical image in the instrument (sense) is "one-sided and dependent upon the standpoint of observation,
                but still objective, inasmuch as it can be used by several observers." That last phrase already contains the
                whole later debate in embryo: objectivity as invariance across observers.
            </Paragraph>
            <Paragraph>
                The modern formal machinery for this starts with <Word>
                    <Bold />
                    Kaplan's
                </Word> character/content distinction (context-sensitivity built into meaning) and then takes a
                "perspectival turn" precisely over expressions that resist it. The driving phenomenon is <Word>
                    <Emphasis />
                    faultless disagreement
                </Word> — Max <Word>
                    <Bold />
                    Kölbel's
                </Word> term — and the canonical cases are <Word>
                    <Bold />
                    predicates of personal taste
                </Word>. Lasersohn argues that the truth values of sentences with predicates like <Word>
                    <Emphasis />
                    fun
                </Word> or <Word>
                    <Emphasis />
                    tasty
                </Word> must be relativized to individuals: if you say roller coasters are fun and I deny it, I negate the
                very content you assert and directly contradict you, yet both utterances can be true relative to their
                separate contexts. His formal device is to introduce an individual ("judge") index alongside the world and
                time indices, with context supplying its value in the derivation of truth values from content rather than in
                the derivation of content from character. This is the semantics of subjectivity made explicit: a subjective
                predicate is one whose extension depends on a judge parameter. There's then a live, well-mapped dispute
                about <Word>
                    <Emphasis />
                    where
                </Word> to put that parameter — Stephenson and others note that the relativist (judge as a parameter of the
                circumstance of evaluation) and the contextualist (judge as an implicit argument in the content) accounts
                are close to notational variants for taste, though they diverge on disagreement and retraction.
            </Paragraph>
            <Paragraph>
                The most worked-out version is <Word>
                    <Bold />
                    MacFarlane's assessment-sensitivity
                </Word>. His innovation is to relativize truth not just to a <Word>
                    <Emphasis />
                    context of use
                </Word> but to a <Word>
                    <Emphasis />
                    context of assessment
                </Word> — any situation from which an assertion might be assessed, the same kind of entity as a context of
                use. Formally, his theory replaces the ordinary monadic (assessment-insensitive) truth predicate with a
                dyadic, assessment-sensitive one, and a "postsemantics" then defines truth-at-a-context. The payoff is
                exactly your question: an expression <Word>
                    <Emphasis />
                    is
                </Word> subjective, in MacFarlane's sense, when its truth is assessment-sensitive, and what makes this
                relativism rather than mere indexicality is, in his words, not the kind of parameter one relativizes
                propositional truth to, but what one does with it. This is, to date, the sharpest semantic regimentation of
                "subjective."
            </Paragraph>
            <Paragraph>
                On the <Word>
                    <Emphasis />
                    objectivity
                </Word> side, the cleanest formal proposal is <Word>
                    <Bold />
                    Nozick's
                </Word> last book, <Word>
                    <Emphasis />
                    Invariances
                </Word>. Its central chapter offers a theory of the objective/subjective contrast in terms of invariance
                under transformations: what makes a fact objective is that it is invariant under certain transformations. He
                identifies three weaker marks — accessibility from different angles, possibility of intersubjective
                agreement, independence of belief/desire — and argues a fourth is more fundamental: invariance under
                transformations, with spacetime as the paradigm (the Lorentz-invariant interval is objective precisely where
                the purely temporal or purely spatial separations are not). This deliberately mirrors the physicist's notion
                — objectivity as what survives change of coordinates, symmetry, conserved quantities — and it pairs
                naturally with Bernard Williams's "absolute conception" and Nagel's "view from nowhere" as the limiting
                ideal of perspective-independence. Note how exactly this dovetails with Frege's telescope: <Word>
                    <Emphasis />
                    objective = invariant under change of standpoint
                </Word>.
            </Paragraph>
            <Heading>II. Formal systems for subjective expression itself</Heading>
            <Paragraph>
                Your second question — an ontology designed to capture <Word>
                    <Emphasis />
                    what can be expressed subjectively, the structure of subjective expression
                </Word> — also has several serious candidates.
            </Paragraph>
            <Paragraph>
                The canonical one is <Word>
                    <Bold />
                    Lewis's centered-worlds / de se framework
                </Word>. Lewis argued that the content of a thought you'd express with "I am hungry" is a set of <Word>
                    <Emphasis />
                    centered
                </Word> worlds, where a centered world is a possible world centered on an individual at a time; to believe
                it is to locate oneself in the set of centered worlds whose center is hungry. Belief becomes <Word>
                    <Emphasis />
                    self-location
                </Word>, and the self enters as an irreducible coordinate of content — this <Word>
                    <Emphasis />
                    is
                </Word> an ontology of subjective content. Its motivation, Perry's "essential indexical," is that de se
                content can be characterized as sets of centered worlds, or as self-ascribed properties, and it extends
                naturally: a growing number of philosophers and linguists hold that thoughts about subjective matters like
                taste also have centered content — to believe licorice is tasty is to locate oneself among the centers to
                which licorice tastes good. For communication of such content there's the <Word>
                    <Bold />
                    multicentered worlds
                </Word> refinement (Ninan, Torre): content as sets of multicentered worlds — worlds centered on a sequence
                of individuals — developed in a Stalnakerian model of communication with a matching semantics for personal
                pronouns and taste predicates. (The dissenting view worth knowing is Cappelen &amp; Dever's <Word>
                    <Emphasis />
                    The Inessential Indexical
                </Word>, which argues the whole de se edifice is "just another instance of Frege's puzzle" and that
                perspective does no special semantic work.)
            </Paragraph>
            <Paragraph>
                There are also <Word>
                    <Emphasis />
                    logics
                </Word> built directly on the first person. <Word>
                    <Bold />
                    Prior
                </Word> wrote a system literally called "Egocentric Logic," taking his cue from <Word>
                    <Bold />
                    Castañeda's
                </Word> work on indicators and quasi-indicators — Castañeda's "he*" / irreducible "I" being the formal
                apparatus for first-person reference that can't be reduced to names or descriptions. Erich Rast and others
                have built explicit indexical predicate logics (FOLC) that reify contexts of utterance into the object
                language with designated parameters for the current context, treating indexicals as fundamentally
                egocentric. Two-dimensional semantics (Chalmers, Stalnaker) belongs here too: the <Word>
                    <Emphasis />
                    primary/epistemic intension
                </Word> is essentially the centered, subjective dimension of content, the secondary intension the objective
                one.
            </Paragraph>
            <Paragraph>
                A genuinely different semantic theory of subjective discourse is <Word>
                    <Bold />
                    expressivism
                </Word> (Blackburn, Gibbard). Rather than treating "X is good/fun" as describing a judge-relative fact, it
                holds that such sentences <Word>
                    <Emphasis />
                    express
                </Word> non-cognitive states — attitudes, or in Gibbard's norm-expressivism, acceptance of norms/plans — and
                the whole project is then to give a compositional logic for those states (the Frege–Geach problem). That is,
                quite directly, an account of "the structure of what can be expressed subjectively," built on the logic of
                attitudes rather than of facts.
            </Paragraph>
            <Paragraph>
                From phenomenology, <Word>
                    <Bold />
                    Husserl's
                </Word> noema/noesis is an explicit structural ontology of subjective experience. Noesis and noema are the
                subjective and objective poles of any intentional act; by examining the structures of the noesis we learn
                how objects must be constituted to be objects of experience at all — the subjective and objective are
                co-constituted in every act of consciousness. The Smith–McIntyre tradition reads the noema as a
                generalization of Fregean sense to all intentional acts, and there are real <Word>
                    <Emphasis />
                    formalizations
                </Word>: Krysztofiak's "Noemata and their formalization" (<Word>
                    <Emphasis />
                    Synthese
                </Word> 1995), and Marbach's "Towards a formalism for expressing structures of consciousness." These are the
                most direct attempts at exactly the ontology you describe — a formal system for the structure of subjective
                intentional content as such.
            </Paragraph>
            <Paragraph>
                Two more, on opposite ends. On the computational end, <Word>
                    <Bold />
                    Jøsang's subjective logic
                </Word> is a fully worked calculus in which a subjective opinion carries an explicit owner (the "subject")
                and applies to a target frame, the opinion itself being a composite of belief, disbelief, uncertainty mass,
                and a base rate. The caveat is that its "subjectivity" is <Word>
                    <Emphasis />
                    epistemic
                </Word> (uncertainty, trust, ownership of a probability judgment), not phenomenal — but notice it makes the
                <Word>
                    <Emphasis />
                    owner of the opinion
                </Word> a first-class formal object, which is Frege's ownership criterion turned into engineering. On the
                phenomenal end, <Word>
                    <Bold />
                    quality-space theory
                </Word> (Austen Clark, David Rosenthal) is the attempt to formalize the harder, <Word>
                    <Emphasis />
                    qualitative
                </Word> subjectivity — sensory qualities represented structurally as positions in a relational quality
                space, defined by similarity/discrimination relations rather than by any intrinsic felt character.
            </Paragraph>
            <Paragraph>
                And then the one I suspect will interest you most given the category-theoretic work: <Word>
                    <Bold />
                    sheaf-theoretic contextuality
                </Word> (Abramsky &amp; Brandenburger). Using sheaf theory, they show that contextuality — and non-locality
                as a special case — corresponds exactly to obstructions to the existence of global sections. The dictionary
                writes itself for your question: local charts/sections are each locally meaningful and may restrict
                compatibly on overlaps (gluing into one coherent global section), or they may fail to agree on shared
                overlaps so that no coherent gluing exists. Concretely, the gluing condition is pairwise agreement on
                overlaps; when local sections fail to glue, the failure is a Čech 1-cocycle whose cohomology class is the
                obstruction — non-vanishing means no global section is compatible with the local data. Read perspectivally:
                each <Word>
                    <Emphasis />
                    subjective
                </Word> viewpoint is a local section; an <Word>
                    <Emphasis />
                    objective
                </Word> fact is a global section that glues all viewpoints consistently; and irreducible
                subjectivity/contextuality is precisely a cohomological <Word>
                    <Emphasis />
                    obstruction
                </Word> to that gluing — something locally expressible from each standpoint that provably cannot be
                assembled into a single standpoint-independent description. There's even recent work (2026) porting this
                transport/obstruction machinery to AI agents and scientific theory-shift, which suggests the framework is
                being taken seriously as a general model of perspective, not just a quantum curiosity.
            </Paragraph>
            <Heading>III. The thread, and the honest gap</Heading>
            <Paragraph>
                Step back and one schema runs through almost all of it. To model subjectivity, you <Word>
                    <Emphasis />
                    add a coordinate
                </Word> to the semantic apparatus — Frege's owner, Lasersohn's judge index, MacFarlane's assessment context,
                Lewis's center/self, Jøsang's opinion-subject, Abramsky's measurement context. Objectivity is then
                characterized as <Word>
                    <Emphasis />
                    independence from, invariance under, or glueability across
                </Word> that coordinate — Nozick's invariance under transformation, Frege's "usable by several observers,"
                the existence of a global section. <Word>
                    <Bold />
                    Subjective = section over a base of perspectives; objective = the section that is constant, or that glues into a single global one.
                </Word> That is a real unification, and it's the kind of result your reference-theoretic work is positioned
                to say something about, because it casts the subjective/objective distinction as fundamentally about <Word>
                    <Emphasis />
                    what a structure looks like under transport between reference frames
                </Word>.
            </Paragraph>
            <Paragraph>
                The honest limitation: nearly everything above formalizes <Word>
                    <Emphasis />
                    indexical, perspectival, or evaluative
                </Word> subjectivity — self-location, taste, viewpoint, opinion-ownership. The <Word>
                    <Emphasis />
                    qualitative
                </Word> subjectivity — the felt structure of experience, what is expressible only from inside a phenomenal
                point of view, the thing Nagel's bat is about — is where the formal project genuinely thins out.
                Quality-space theory and the Husserlian formalizations gesture at it but are partial and contested, and
                there's a respectable view (the explanatory-gap intuition) that it's not formalizable in the same way at
                all. So if your underlying interest is "a formal system for whatever can be expressed subjectively," the
                field gives you powerful, mature tools for the <Word>
                    <Emphasis />
                    perspectival
                </Word> component and a sparse, frontier landscape for the <Word>
                    <Emphasis />
                    phenomenal
                </Word> one — and the sheaf/obstruction picture is, to my mind, the most promising bridge between them,
                because "expressible locally but not globally" is at least a precise formal shape that qualitative
                subjectivity might turn out to have.
            </Paragraph>
            <Paragraph>
                If you want, I can go deeper on any single one of these — the MacFarlane postsemantics formalism, the de se
                / multicentered machinery, or the cohomological-obstruction account and how it might be adapted to a
                reference-theoretic rather than measurement-theoretic base.
            </Paragraph>
        </Message>
    </Chapter>
);
