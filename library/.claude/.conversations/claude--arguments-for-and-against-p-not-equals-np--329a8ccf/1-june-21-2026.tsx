import { Bold, Chapter, Date, Emphasis, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[21 June 2026](2026-06-21)</Date>
        </Dated>
        <Title>[[ 21 June 2026 ]]</Title>
        <Message
            at="2026-06-21T06:42:14.971435Z"
        >
            <Origin>019ee8ea-5756-7314-b1e6-793e03f0790f</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Think carefully, step by step, before answering: what are the strongest arguments for and against P ≠ NP,
                and which way does the evidence lean? Reason it through, then give a concise conclusion.
            </Paragraph>
        </Message>
        <Message
            at="2026-06-21T06:43:19.728998Z"
        >
            <Origin>019ee8ea-5757-7185-9cf2-fd1afd59d194</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                The cleanest way to weigh this is to separate two questions that get conflated: <Word>
                    <Emphasis />
                    which way is the answer likely to go
                </Word>, and <Word>
                    <Emphasis />
                    how much do we actually know
                </Word>. The arguments for P ≠ NP are strong on the first and weak on the second, and that gap is the whole
                story.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The case for P ≠ NP
                </Word>
            </Paragraph>
            <Paragraph>
                The empirical argument is the heavyweight. Thousands of NP-complete problems — SAT, TSP, clique, integer
                programming — are all polynomially interreducible, so a fast algorithm for any one collapses the entire
                class. Decades of effort, with enormous economic and intellectual incentive, have produced nothing. That's
                absence of evidence, but it's a <Word>
                    <Emphasis />
                    very
                </Word> loud absence given how much pressure has been applied to so many equivalent targets.
            </Paragraph>
            <Paragraph>
                Behind that sits the intuition that search is fundamentally harder than verification. Checking a satisfying
                assignment is trivial; finding one seems to require navigating an exponential space with no structure to
                exploit. Aaronson's framing captures the stakes: P = NP would mean that finding a proof is essentially as
                easy as checking one, i.e., that mathematical creativity is mechanizable across the board. That feels wrong
                to most people who've done creative work, and "feels wrong to experts" is a real Bayesian input even if it
                isn't a proof — Gasarch's polls put the believer fraction above 80%.
            </Paragraph>
            <Paragraph>
                There's also genuine (if weak) mathematical traction pointing the right direction: we <Word>
                    <Emphasis />
                    can
                </Word> prove lower bounds in restricted models. Razborov's exponential monotone-circuit bound for clique,
                parity's exclusion from AC⁰, the time hierarchy theorem giving P ≠ EXPTIME. None of these touches general
                circuits, but they're consistent with hardness rather than against it.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The skeptical case
                </Word>
            </Paragraph>
            <Paragraph>
                Note that almost no serious person argues P = NP is <Word>
                    <Emphasis />
                    likely
                </Word>. The skeptical position is about epistemics, and it's sharper than it first appears.
            </Paragraph>
            <Paragraph>
                First, our intuitions about hardness have a track record of being wrong. Linear programming was "obviously"
                hard until the ellipsoid method; primality testing fell to AKS in 2002. Problems do collapse, sometimes
                suddenly, and we're bad at predicting which.
            </Paragraph>
            <Paragraph>
                Second — the serious one — we have essentially no proof techniques that work, and we can <Word>
                    <Emphasis />
                    prove
                </Word> this. The three barriers stack: relativization (Baker–Gill–Solovay), natural proofs
                (Razborov–Rudich), and algebrization (Aaronson–Wigderson) each rule out a broad class of arguments. The
                natural-proofs barrier is the most unsettling, because it shows that any proof which is "constructive and
                large" in the obvious combinatorial sense would itself break the pseudorandom generators whose existence we
                believe in. In other words: the very combinatorial intuitions that make us confident P ≠ NP are formally
                incapable of establishing it. The truth, whatever it is, lives outside the reach of the reasoning that makes
                us sure of it. Williams' NEXP ⊄ ACC⁰ (2011) was celebrated precisely because it slipped past the barriers —
                and it's still astronomically weaker than what a real proof needs.
            </Paragraph>
            <Paragraph>
                A few often-cited pro arguments are also softer than advertised. "Cryptography works, so P ≠ NP" overstates
                things: crypto needs <Word>
                    <Emphasis />
                    average-case
                </Word> hardness, which is strictly stronger than the worst-case P ≠ NP question. And industrial SAT solvers
                dispatch enormous instances daily, which is a reminder that worst-case complexity may be capturing something
                less practically fundamental than the framing suggests.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Where the evidence leans
                </Word>
            </Paragraph>
            <Paragraph>
                Toward P ≠ NP — I'd bet there confidently — but it's worth being precise about <Word>
                    <Emphasis />
                    what kind
                </Word> of confidence this is. The lean is carried almost entirely by inductive and empirical considerations
                (no algorithm despite massive search, the felt asymmetry of search vs. verification, expert priors) plus a
                little restricted-model traction. It is <Word>
                    <Emphasis />
                    not
                </Word> carried by proof-theoretic progress, and the barriers show our standard intuitions are provably
                insufficient to close it. So the asymmetry is this: the arguments <Word>
                    <Emphasis />
                    for the answer
                </Word> are inductive and decent; the arguments <Word>
                    <Emphasis />
                    for our ignorance
                </Word> are meta-level and ironclad.
            </Paragraph>
            <Paragraph>
                My honest summary: P ≠ NP is the right bet, probably by a wide margin, but the confidence rests on induction
                over a track record, not on mathematical understanding of <Word>
                    <Emphasis />
                    why
                </Word> it's true. The skeptics are essentially correct about the epistemics even while being wrong about
                the likely answer — we are nowhere near a proof, and the one thing we've rigorously established is that the
                reasoning making us confident can't get us there.
            </Paragraph>
        </Message>
    </Chapter>
);
