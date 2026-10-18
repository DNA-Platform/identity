import { Bold, Chapter, Date, Emphasis, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Action, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[16 June 2026](2026-06-16)</Date>
        </Dated>
        <Title>[[ 16 June 2026 ]]</Title>
        <Message
            at="2026-06-16T12:52:08.607482Z"
        >
            <Origin>019ed07d-3af9-7127-8db2-e624373a3418</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>How Feferman build on Turing's PhD research topic?</Paragraph>
        </Message>
        <Message
            at="2026-06-16T12:53:19.690596Z"
        >
            <Origin>019ed07d-3af9-7127-8db2-e6250bb21295</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Feferman's connection to Turing runs through one specific, beautiful idea, and it's worth being precise
                about it.
            </Paragraph>
            <Paragraph>
                Turing's 1938 Princeton dissertation under Alonzo Church was <Word>
                    <Emphasis />
                    Systems of Logic Based on Ordinals
                </Word> — what became known as <Word>
                    <Bold />
                    ordinal logics
                </Word>. The motivation was Gödel's second incompleteness theorem. A sound theory like Peano arithmetic
                can't prove its own consistency statement Con(PA), but Con(PA) is true, so you can honestly strengthen the
                theory by adjoining it: T₀ = PA, T₁ = T₀ + Con(T₀), T₂ = T₁ + Con(T₁), and so on. At limit stages you take
                unions. The result is a <Word>
                    <Emphasis />
                    transfinite progression
                </Word> of theories. Because you have to actually write the theories down, the progression isn't indexed by
                abstract ordinals but by <Word>
                    <Bold />
                    ordinal notations
                </Word> — members of Kleene's system O of recursive notations.
            </Paragraph>
            <Paragraph>
                Turing's headline result was a completeness theorem: the consistency progression is complete for true Π⁰₁
                sentences — every true universally-quantified arithmetic statement becomes provable somewhere along the
                progression. But the result came with a famous sting. Turing showed the completeness can already be achieved
                at a notation for an ordinal as small as ω+1. That exposes the catch: the <Word>
                    <Emphasis />
                    ordinal
                </Word> isn't doing the work; the <Word>
                    <Emphasis />
                    notation
                </Word> is, because a cleverly chosen notation can smuggle the arithmetic content in. The dependence on
                notation rather than order type made the whole thing feel, in Turing's own assessment, not entirely
                satisfactory.
            </Paragraph>
            <Paragraph>
                Feferman's 1962 paper <Word>
                    <Emphasis />
                    Transfinite Recursive Progressions of Axiomatic Theories
                </Word> is where this gets systematized and pushed much further. His main moves:
            </Paragraph>
            <Paragraph>
                He separated the <Word>
                    <Emphasis />
                    principles
                </Word> you iterate. Turing essentially iterated consistency. Feferman organized a hierarchy — consistency,
                then the local (or "simple") reflection schema Prov_T(⌜φ⌝) → φ, then the <Word>
                    <Bold />
                    uniform reflection principle
                </Word> ∀x(Prov_T(⌜φ(ẋ)⌝) → φ(x)), which is strictly stronger. Consistency is just the instance for φ ≡
                (0=1).
            </Paragraph>
            <Paragraph>
                With that stronger fuel he proved a sharper completeness theorem: the progression based on <Word>
                    <Bold />
                    uniform reflection is complete for all true sentences of first-order arithmetic
                </Word>, not merely the Π⁰₁ ones. That's a real strengthening of Turing's theorem. At the same time Feferman
                gave a cleaner account of <Word>
                    <Emphasis />
                    why
                </Word> the notation-dependence pathology arises and how unavoidable it is, so the result is both stronger
                and more honest about its own limits.
            </Paragraph>
            <Paragraph>
                The deeper payoff — and the part that turned Turing's somewhat pathological device into a genuine tool —
                came a couple of years later in the work on <Word>
                    <Bold />
                    predicativity
                </Word>. Feferman (and independently Kurt Schütte) studied <Word>
                    <Emphasis />
                    autonomous
                </Word> progressions: ones where you're only permitted to climb to a notation for α once you've already
                proved, at an earlier stage, that that notation denotes a genuine well-ordering. That autonomy condition
                bootstraps and self-limits. Starting from predicatively acceptable foundations, the autonomous progression
                of ramified analysis climbs to exactly the ordinal <Word>
                    <Bold />
                    Γ₀
                </Word>, now called the Feferman–Schütte ordinal — the proposed precise upper bound of predicative
                provability. So Turing's progressions, which originally looked like a curiosity haunted by
                notation-dependence, became the engine for measuring proof-theoretic strength and for drawing the line
                between predicative and impredicative mathematics.
            </Paragraph>
            <Paragraph>
                If you want Feferman in his own reflective voice on all this, his essay <Word>
                    <Emphasis />
                    Turing in the Land of O(z)
                </Word> (the title puns on Kleene's O) is exactly about what Turing did, what was wrong with it, and what he
                himself made of it.
            </Paragraph>
            <Paragraph>
                One caveat for rigor's sake: the conceptual lineage above I'm confident about, but I'd verify any exact
                ordinal-bound claim about the <Word>
                    <Emphasis />
                    path length
                </Word> in Feferman's completeness theorem against the paper itself before relying on it — I deliberately
                haven't asserted a specific bound there because I'm not certain of it from memory.
            </Paragraph>
        </Message>
        <Message
            at="2026-06-16T12:53:34.610309Z"
        >
            <Origin>019ed07e-8234-76f4-9246-50d7d4ba2e90</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Can you elaborate on the specific mathematical contributions?</Paragraph>
        </Message>
        <Message
            at="2026-06-16T12:55:50.423347Z"
        >
            <Origin>019ed07e-8234-760f-92db-004afc937fc7</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                I'll verify a couple of the precise technical claims before laying this out in detail — particularly the
                exact form of Feferman's completeness theorem and the ordinal bounds, which is where I want to be careful.
            </Paragraph>
            <Action>
                Searched the web for “Feferman 1962 transfinite recursive progressions completeness uniform reflection
                theorem”
            </Action>
            <Paragraph>
                I have the precise bound now. Let me confirm the predicativity side and the Feferman–Spector result.
            </Paragraph>
            <Action>
                Searched the web for “Feferman Schütte ordinal Gamma_0 autonomous progressions predicativity ramified
                analysis”
            </Action>
            <Paragraph>
                Here are the contributions broken out as distinct pieces of mathematics, in roughly the order they build on
                each other.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    1. The foundational tool: arithmetizing metamathematics generally.
                </Word>
            </Paragraph>
            <Paragraph>
                Before any of the progression results, Feferman did the unglamorous but essential work in <Word>
                    <Emphasis />
                    Arithmetization of Metamathematics in a General Setting
                </Word> (1960). Turing's construction was somewhat informal about <Word>
                    <Emphasis />
                    how
                </Word> a theory refers to itself well enough to adjoin its own consistency statement. Feferman made the
                provability predicate Prov_T a genuine object of study, parameterized by a Σ⁰₁ definition of the axiom set,
                and showed that the <Word>
                    <Emphasis />
                    intensional
                </Word> details of how you arithmetize a theory matter enormously — two extensionally identical theories
                with different Σ⁰₁ presentations can have provability predicates that behave completely differently (this is
                the lineage of the later Rosser-style and "Feferman provability" subtleties). One concrete payoff he
                isolated there and used downstream: if the reflection formula φ is restricted to Σ₁, then reflection always
                <Word>
                    <Emphasis />
                    strictly
                </Word> strengthens the theory, whereas higher-complexity reflection need not. A Σ₁-formula with n free
                variables defines an n-ary effectively enumerable relation, and conversely — that effectiveness is what
                keeps the construction inside the recursive machinery.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    2. The construction itself, done rigorously with the recursion theorem.
                </Word>
            </Paragraph>
            <Paragraph>
                The progression assigns to each notation a ∈ O a theory T_a, by primitive recursion on the notation
                structure: T_1 = PA, T_&#123;2^a&#125; = T_a + (reflection over T_a), and at a limit notation 3·5^e you
                union the theories T_&#123;&#123;e&#125;(n)&#125;. The non-obvious part is that T_a has to refer to its own
                Gödel apparatus while being defined, so the definition is circular; Feferman discharged this with Kleene's
                recursion theorem, and his later commentators note he used it in increasingly entangled ways to generate
                non-standard definitions of theories. A consequence he was explicit about: for a ∉ O the "theories" T_a are
                still defined but worthless, and can even be inconsistent — the recursion theorem ensures there is an e with
                &#123;e&#125;(0) = suc(lim(e)), a notation that lies about its own structure. Well-foundedness of O is doing
                real work.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    3. The reflection hierarchy and the jump from consistency to uniform reflection.
                </Word>
            </Paragraph>
            <Paragraph>
                This is the substantive conceptual move. Turing iterated <Word>
                    <Emphasis />
                    consistency
                </Word>, Con(T_a) ≡ ¬Prov_&#123;T_a&#125;(⌜0=1⌝). Feferman organized a strict hierarchy of reflection
                principles to iterate instead:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>consistency (a single sentence),</Line>
                <Line>
                    local/simple reflection Prov_T(⌜φ⌝) → φ (a schema, one instance per sentence φ; consistency is the φ ≡
                    0=1 instance),
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        uniform reflection
                    </Word> ∀x(Prov_T(⌜φ(ẋ)⌝) → φ(x)), the schema over formulas with a free variable, with ẋ the numeral of
                    x.
                </Line>
            </Paragraph>
            <Paragraph>
                Uniform reflection is strictly stronger than local, which is strictly stronger than consistency — the gap
                between local and uniform is exactly the ability to discharge a universally-quantified provability claim in
                one stroke rather than instance by instance, and that gap is what powers the next result. He considered a
                variant of Turing's progression where local reflections are replaced with uniform reflections.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    4. Feferman's completeness theorem (1962) and its sharp price.
                </Word>
            </Paragraph>
            <Paragraph>
                Turing had shown his consistency progression complete only for true Π⁰₁ sentences, and there's a clean
                reason he couldn't do better: the union ⋃T_a has a Σ⁰₂ provability predicate, so it cannot prove all true
                Π⁰₂ sentences without contradicting the arithmetical hierarchy theorem. The problem left open after Turing's
                thesis — whether any stronger progression can be complete for Π⁰₂ — was settled by Feferman with the result
                that progressions based on uniform reflection are complete not just for Π⁰₂ but for all arithmetical
                sentences. Stated precisely: for a progression based on the uniform reflection principle with T₀ = PA, every
                true arithmetical sentence θ has some a ∈ O with T_a ⊢ θ.
            </Paragraph>
            <Paragraph>
                The crucial quantitative refinement, which is where the construction's character shows: this does <Word>
                    <Emphasis />
                    not
                </Word> require climbing high in the ordinals. Feferman's construction gives ω^(ω^(ω+1)) as an upper bound
                on the order type of the notations along which you must iterate reflection to obtain a proof of a given φ.
                So an order type below ε₀ suffices to prove <Word>
                    <Emphasis />
                    every
                </Word> true arithmetic statement, including ones of arbitrarily high quantifier complexity. The work is
                plainly not being done by the ordinal — it's being done by the choice of <Word>
                    <Emphasis />
                    notation
                </Word>, which can encode the target sentence's content into the path. This is the rigorous form of the
                "unsatisfactoriness" Turing already sensed: completeness is real but it is bought with notation-dependence,
                not ordinal height. (Pakhomov–Rathjen–Rossegger's 2024 paper sharpens this further, giving tight bounds on
                the order types needed level-by-level in the arithmetical hierarchy.)
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    5. Feferman–Spector: incompleteness along paths.
                </Word>
            </Paragraph>
            <Paragraph>
                The complement to completeness, and the result that makes the pathology unavoidable rather than incidental,
                is <Word>
                    <Emphasis />
                    Incompleteness Along Paths in Progressions of Theories
                </Word> (Feferman and Spector, 1962). Completeness says <Word>
                    <Emphasis />
                    there exists
                </Word> a notation a proving θ. It does not say a single coherent route through O collects everything.
                Feferman and Spector showed there are <Word>
                    <Emphasis />
                    paths
                </Word> through O — linearly ordered, cofinal chains of notations — along which the progression fails to be
                complete even for Π⁰₁ truths. So you cannot replace the existential "some notation works" with a uniform
                "follow this path and you'll get everything." The non-uniformity is intrinsic.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    6. The predicativity program: autonomous progressions and Γ₀.
                </Word>
            </Paragraph>
            <Paragraph>
                This is where Turing's curiosity became a measuring instrument. In <Word>
                    <Emphasis />
                    Systems of Predicative Analysis
                </Word> (1964), Feferman — and Schütte independently (1964/65), building on Kreisel — added an <Word>
                    <Bold />
                    autonomy condition
                </Word> to the progression. You iterate systems of ramified analysis RA_α, but you are licensed to advance
                to a notation for α only once you have already <Word>
                    <Emphasis />
                    proved
                </Word>, at an earlier autonomous stage, that the recursive ordering coded by that notation is a
                well-ordering. The system bootstraps: provable well-orderings unlock taller systems, which prove longer
                well-orderings, and so on, and the process self-limits. Feferman and Schütte determined the limit of
                predicativity as the least ordinal that cannot be proved well-ordered within an autonomous progression of
                ramified analysis — the ordinal Γ₀, the Feferman–Schütte ordinal.
            </Paragraph>
            <Paragraph>
                Γ₀ has a clean intrinsic description via the Veblen functions: set φ₀(β) = ω^β, let φ<Word>
                    <Emphasis />
                    &#123;α+1&#125; enumerate the fixed points of φ
                </Word>α, and take common fixed points at limits. Then Γ₀ is the smallest ordinal not obtainable from 0 by
                ordinal addition and the Veblen functions φ<Word>
                    <Emphasis />
                    α(β) — equivalently the least α with φ
                </Word>α(0) = α, the least <Word>
                    <Emphasis />
                    strongly critical
                </Word> ordinal. ε₀ = φ₁(0) sits far below it. The modern landmark that pins this down precisely is reverse
                mathematics: Γ₀ is the proof-theoretic ordinal of ATR₀ (arithmetical transfinite recursion), a system
                Friedman isolated whose strength is exactly Γ₀ and which is equivalent over a weak base to several standard
                theorems of ordinary mathematics.
            </Paragraph>
            <Paragraph>
                One honest caveat, since you'll want the real epistemic status: the identification of Γ₀ with "the limit of
                predicativity" is the standard textbook position but it is <Word>
                    <Emphasis />
                    contested
                </Word>. Nik Weaver has argued comprehensively that predicative reasoning extends well beyond Γ₀, and others
                have pushed similar objections. The mathematical fact — that the autonomous ramified progression closes at
                Γ₀ — is not in dispute; what's disputed is whether autonomous progressions correctly capture the <Word>
                    <Emphasis />
                    informal
                </Word> notion of predicative provability. Feferman himself returned to the question repeatedly over his
                career, producing later systems (the unfolding program, Ref*(PA(P)), and others) that reach the same Γ₀
                without invoking ordinals or autonomy in their description — partly in response to exactly this kind of
                foundational worry.
            </Paragraph>
            <Paragraph>
                If you want the primary sources in order: Feferman 1960 (<Word>
                    <Emphasis />
                    Fund. Math.
                </Word> 49) for the arithmetization machinery, Feferman 1962b (<Word>
                    <Emphasis />
                    JSL
                </Word> 27) for the completeness theorem, Feferman–Spector 1962 (<Word>
                    <Emphasis />
                    JSL
                </Word> 27) for incompleteness along paths, and Feferman 1964 (<Word>
                    <Emphasis />
                    JSL
                </Word> 29) for predicative analysis. The Stanford Encyclopedia's proof-theory appendix B gives the cleanest
                modern statement of the Turing/Feferman completeness theorems with the construction spelled out.
            </Paragraph>
        </Message>
    </Chapter>
);
