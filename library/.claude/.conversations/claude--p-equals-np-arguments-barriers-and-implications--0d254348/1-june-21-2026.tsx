import { Bold, Chapter, Date, Emphasis, Heading, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Action, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[21 June 2026](2026-06-21)</Date>
        </Dated>
        <Title>[[ 21 June 2026 ]]</Title>
        <Message
            at="2026-06-21T08:01:08.507681Z"
        >
            <Origin>019ee932-9365-7341-893b-d71888906c35</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Research and explain, with careful reasoning, the strongest arguments for and against P = NP, the main proof
                barriers (relativization, natural proofs, algebrization), and what a resolution either way would mean for
                cryptography and complexity theory. Think it through, then give a thorough answer.
            </Paragraph>
        </Message>
        <Message
            at="2026-06-21T08:03:30.754584Z"
        >
            <Origin>019ee932-9365-7d10-a6a6-c9fb11b0c939</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “P versus NP problem status 2026 latest developments”</Action>
            <Paragraph>
                P vs NP remains open as of mid-2026 — the perennial "proofs" that circulate (the Du and Vega manuscripts
                that surfaced again this year) have not survived scrutiny, and expert consensus has if anything hardened:
                Gasarch's polls put the share believing P ≠ NP at 61% in 2001, 83% in 2011, and 88% in 2018, with 99% of
                restricted experts in 2018 favoring P ≠ NP. So this is a question where the interesting content is <Word>
                    <Emphasis />
                    why
                </Word> a near-unanimous belief has resisted fifty years of proof. Let me work through it carefully.
            </Paragraph>
            <Heading>The statement, and why the asymmetry is the whole game</Heading>
            <Paragraph>
                P is the class of decision problems solvable in polynomial time on a deterministic machine; NP is the class
                whose "yes" instances admit a polynomial-length certificate checkable in polynomial time. P ⊆ NP trivially.
                The question is whether the containment is strict. Cook–Levin gives us NP-complete problems (SAT, and via
                Karp's reductions thousands of others), and the crucial structural fact is that a single polynomial-time
                algorithm for <Word>
                    <Emphasis />
                    any one
                </Word> NP-complete problem collapses all of NP into P. This all-or-nothing character is what makes the
                empirical evidence below so forceful.
            </Paragraph>
            <Paragraph>
                It's worth naming the conceptual core: NP encodes the gap between <Word>
                    <Emphasis />
                    verifying
                </Word> a solution and <Word>
                    <Emphasis />
                    finding
                </Word> one. Gödel saw this in his 1956 letter to von Neumann, where he essentially asked whether
                theorem-search could be done in linear or quadratic time and noted that if so, mathematical discovery itself
                could be mechanized. That intuition — that creative search is fundamentally harder than checking — is the
                seed of the P ≠ NP belief, but it is only an intuition, and the history of the field is partly a history of
                such intuitions failing.
            </Paragraph>
            <Heading>The strongest case for P ≠ NP</Heading>
            <Paragraph>
                The empirical argument is the strongest one, and it is genuinely Bayesian rather than hand-waving. Tens of
                thousands of NP-complete problems arise across logistics, biology, verification, finance, and pure
                mathematics; they have been attacked by extraordinarily capable people with enormous commercial and
                intellectual incentive; and because of the collapse property, success on <Word>
                    <Emphasis />
                    any
                </Word> of them would have solved <Word>
                    <Emphasis />
                    all
                </Word> of them. Decades of total failure is strong evidence — not proof, but the kind of evidence a working
                scientist rationally updates on.
            </Paragraph>
            <Paragraph>
                The conceptual argument reinforces it. If P = NP with a practical algorithm, the consequences would be so
                sweeping (every well-posed optimization solved efficiently, mathematical proof-finding automated up to proof
                length, design and engineering transformed) that the world would look unrecognizably different from the one
                we observe. Aaronson's framing is that everyone able to appreciate a symphony would effectively be Mozart —
                and the world stubbornly does not work that way.
            </Paragraph>
            <Paragraph>
                Structurally, P = NP would collapse the polynomial hierarchy to its first level (Σ₁ᵖ = P), and most
                theorists independently believe PH is infinite. So P ≠ NP coheres with a web of other conjectures rather
                than standing alone. Finally, we do have <Word>
                    <Emphasis />
                    unconditional
                </Word> lower bounds in restricted models — Razborov's exponential lower bound for clique on monotone
                circuits, and the AC⁰ lower bounds for parity (Furst–Saxe–Sipser, sharpened by Håstad) — which show that
                NP-style problems are genuinely hard once you weaken the model. The trouble is that the techniques refuse to
                scale to general circuits, and the barriers below explain why.
            </Paragraph>
            <Heading>The strongest case for P = NP (steelmanned)</Heading>
            <Paragraph>
                The minority view rests on the repeated historical embarrassment of hardness intuitions. Linear programming
                has exponential-worst-case behavior under simplex, yet Khachiyan's ellipsoid method (1979) and then
                Karmarkar showed it is polynomial. Primality testing was long suspected to possibly need more, until AKS
                (2002) put PRIMES in P unconditionally. These are not small surprises; they are cases where the community's
                intuition about an apparently search-heavy problem was simply wrong.
            </Paragraph>
            <Paragraph>
                The deeper point is honest and uncomfortable: we have essentially <Word>
                    <Emphasis />
                    no
                </Word> unconditional superpolynomial lower bound against general models for any explicit NP problem. We
                cannot prove SAT requires more than nearly-linear circuit size in general; we cannot even prove NP ⊄ P/poly.
                One reading of "we can't prove P ≠ NP" is "it's true but hard"; another, harder to dismiss than experts like
                to admit, is "we can't prove it because it's false." A further subtlety: P = NP could hold via a <Word>
                    <Emphasis />
                    galactic
                </Word> algorithm — astronomical constants or huge polynomial degree — that is true yet practically inert,
                which would mean even a P = NP world need not deliver the symphony-into-Mozart apocalypse. That weakens the
                conceptual argument above, since that argument quietly assumes a <Word>
                    <Emphasis />
                    usable
                </Word> algorithm.
            </Paragraph>
            <Paragraph>
                I find the empirical case decisive enough that I'd bet heavily on P ≠ NP, but the minority case is not
                crankery — it's a legitimate recognition that our evidence is circumstantial and our proof tools are visibly
                inadequate.
            </Paragraph>
            <Heading>Why proof is so hard: the three barriers</Heading>
            <Paragraph>
                This is the technical heart, and the three barriers are best understood as a nested sequence, each one
                killing the tool that defeated the previous one.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Relativization (Baker–Gill–Solovay, 1975).
                </Word> They constructed two oracles: one oracle A (take any PSPACE-complete language like TQBF) for which
                P^A = NP^A = PSPACE, and another oracle B for which P^B ≠ NP^B (built by diagonalizing a sparse language
                against every polynomial-time oracle machine). The consequence is that any proof technique that <Word>
                    <Emphasis />
                    relativizes
                </Word> — that remains valid when both machines are handed an arbitrary oracle — cannot decide P vs NP,
                because such a technique would have to yield the same verdict in both oracle worlds, and the verdicts
                differ. The catch is that the canonical tools inherited from computability theory — diagonalization and
                simulation, the machinery behind the time and space hierarchy theorems — all relativize. So the classical
                toolkit is provably insufficient on its own.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Natural proofs (Razborov–Rudich, 1994; Gödel Prize 1997).
                </Word> This is the subtle and self-referential one. They abstracted what most successful circuit lower
                bounds have in common: they proceed by exhibiting a property of Boolean functions that is <Word>
                    <Emphasis />
                    constructive
                </Word> (computable in time polynomial in the 2ⁿ-length truth table), <Word>
                    <Emphasis />
                    large
                </Word> (held by a non-negligible fraction of all functions), and <Word>
                    <Emphasis />
                    useful
                </Word> (failing for any function with a small circuit, so that possessing it certifies hardness). They then
                proved that such a "natural" property useful against P/poly could be turned into a statistical distinguisher
                breaking pseudorandom generators — which means <Word>
                    <Emphasis />
                    if
                </Word> sufficiently strong one-way functions exist (sub-exponentially hard PRGs), then no natural proof can
                separate P from NP. The bind is exquisite: the very cryptographic hardness we believe in (and which would
                <Word>
                    <Emphasis />
                    follow
                </Word> from P ≠ NP in spirit) is exactly what forbids the most natural route to proving it. Most known
                lower-bound methods are natural because they incidentally prove the bound for a random function too — that's
                precisely the largeness condition. An eventual proof must therefore be <Word>
                    <Emphasis />
                    unnatural
                </Word>: it must violate largeness or constructivity, keying on some rare or non-efficiently-recognizable
                structure specific to SAT.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Algebrization (Aaronson–Wigderson, 2008).
                </Word> There <Word>
                    <Emphasis />
                    is
                </Word> a known non-relativizing technique: arithmetization, which lifts Boolean formulas to low-degree
                polynomials over a field. It powered the genuinely non-relativizing triumphs — Shamir's IP = PSPACE, and MIP
                = NEXP. The natural hope was that arithmetization escapes the relativization trap and might reach P vs NP.
                Aaronson and Wigderson closed that door by defining a refined barrier: a separation "algebrizes" if it
                survives giving one machine a low-degree polynomial <Word>
                    <Emphasis />
                    extension
                </Word> of the oracle. They showed that essentially all known non-relativizing results, IP = PSPACE
                included, merely algebrize — and that settling P vs NP requires techniques that do <Word>
                    <Emphasis />
                    not
                </Word> algebrize. So the one tool that broke through relativization is itself accounted for and ruled out.
            </Paragraph>
            <Paragraph>
                Stacked together, the barriers say any resolution must be simultaneously non-relativizing, non-natural, and
                non-algebrizing — it must dodge every general method we currently possess. That is the precise sense in
                which the problem is hard: not merely unsolved, but provably immune to the entire standing arsenal.
            </Paragraph>
            <Paragraph>
                This is also why programs like Mulmuley–Sohoni's Geometric Complexity Theory exist — GCT deliberately seeks
                "unnatural" obstructions via algebraic geometry and representation theory. It is the most serious
                barrier-evading program, though results like the Bürgisser–Ikenmeyer–Panova "no occurrence obstructions"
                theorem showed the original GCT plan was harder than hoped. The other live frontier is meta-complexity — the
                complexity of problems like MCSP (Minimum Circuit Size Problem) — which sits right at the natural-proofs
                pressure point and has produced real movement in the 2020s, including the kind of "smaller related problems"
                approximation work coming out of places like Waterloo recently.
            </Paragraph>
            <Heading>What a resolution would mean for cryptography</Heading>
            <Paragraph>
                The key correction to the popular framing: P ≠ NP is <Word>
                    <Emphasis />
                    necessary but nowhere near sufficient
                </Word> for cryptography, because NP-completeness is a <Word>
                    <Emphasis />
                    worst-case
                </Word> notion and crypto needs <Word>
                    <Emphasis />
                    average-case
                </Word> hardness. Impagliazzo's five worlds are the right map here. They range from Algorithmica, where P =
                NP and SAT is efficiently solvable, through Heuristica (P ≠ NP but NP problems are easy on average), to
                Cryptomania (P ≠ NP and hard instances are easy to generate), with intermediate worlds in between. The two
                worlds in the middle that the popular account omits are Pessiland (hard-on-average problems exist but no
                one-way functions — the worst of both worlds, where you suffer the hardness but can't exploit it) and
                Minicrypt (one-way functions and hence symmetric crypto exist, but no public-key). We believe — hope — we
                live in Cryptomania, with trapdoor functions enabling public-key crypto, but P ≠ NP alone only rules out
                Algorithmica. It does not by itself buy us even a single one-way function.
            </Paragraph>
            <Paragraph>
                So the implications split cleanly. A proof of <Word>
                    <Bold />
                    P = NP
                </Word> with a usable algorithm would be catastrophic for computational cryptography: every NP problem
                becomes tractable, and anything whose security reduces to an NP problem falls. Note carefully that RSA and
                Diffie–Hellman rest on factoring and discrete log, which are in NP ∩ coNP and <Word>
                    <Emphasis />
                    not
                </Word> known to be NP-complete — but they are still in NP, so a genuine fast SAT-solver breaks them anyway.
                What would survive is the cryptography that doesn't depend on computational hardness at all: the one-time
                pad and information-theoretic schemes, and quantum key distribution. (And note the more imminent threat to
                factoring and discrete log is not P vs NP but Shor's algorithm; lattice-based post-quantum crypto addresses
                the <Word>
                    <Emphasis />
                    quantum
                </Word> threat, a separate axis from P vs NP entirely.)
            </Paragraph>
            <Paragraph>
                A proof of <Word>
                    <Bold />
                    P ≠ NP
                </Word>, conversely, would <Word>
                    <Emphasis />
                    not
                </Word> hand us secure cryptography. We would still have to separately establish that one-way functions
                exist — average-case hardness — to climb out of Heuristica or Pessiland. What it would give is foundational
                reassurance and, far more importantly, a proof <Word>
                    <Emphasis />
                    technique
                </Word> powerful enough to clear all three barriers, which would almost certainly be a general-purpose
                engine for lower bounds.
            </Paragraph>
            <Heading>What it would mean for complexity theory</Heading>
            <Paragraph>
                Either resolution is less interesting for its true/false verdict than for the mathematics it would force
                into existence. A P ≠ NP proof must be non-relativizing, non-algebrizing, and non-natural — a genuinely
                novel mode of argument — and such a tool would likely cascade through the field, illuminating PH, circuit
                lower bounds, and derandomization (BPP vs P) in its wake. A P = NP proof would collapse PH to its first
                level, force NP = coNP, and upend the entire conjectural landscape that derandomization and average-case
                theory are built on.
            </Paragraph>
            <Paragraph>
                There is also the third option that suits your interests in Gödel and Feferman: that P vs NP is <Word>
                    <Emphasis />
                    independent
                </Word> of ZFC. Aaronson has discussed this seriously, and while most theorists doubt it, a proof of
                independence would itself be a landmark in metamathematics — and would connect the problem back to exactly
                the proof-theoretic territory (the limits of formal systems, the reach of a fixed axiomatic strength) that
                the ordinal-logic lineage from Turing through Feferman is about. It would be a fitting irony if the question
                Gödel first posed in that 1956 letter turned out to be answerable only by the kind of incompleteness
                phenomenon he discovered.
            </Paragraph>
            <Paragraph>
                If it would be useful, I can go deeper on any one thread — the Razborov–Rudich distinguisher construction in
                full, the algebrization oracle definitions, the GCT obstruction program, or the meta-complexity results that
                are currently the most active attempt to get around natural proofs.
            </Paragraph>
        </Message>
    </Chapter>
);
