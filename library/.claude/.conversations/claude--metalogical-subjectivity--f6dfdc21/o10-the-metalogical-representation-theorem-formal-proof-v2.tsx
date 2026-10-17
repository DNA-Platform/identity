import { Bold, Chapter, Emphasis, Heading, Line, List, Paragraph, Section, Title, Word } from '@dna-platform/public';
import { Opaque } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ The Metalogical Representation Theorem: Formal Proof v2 ]]</Title>
        <Section>
            <Opaque />
            <Heading>The Metalogical Representation Theorem: Formal Proof at version 2</Heading>
            <Heading>The Metalogical Representation Theorem: Formal Proof</Heading>
            <Heading>1. Introduction and Definitions</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Definition 1.1
                </Word> (Metalogical Universality). A formal theory T exhibits <Word>
                    <Emphasis />
                    metalogical universality
                </Word> if:
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>T is sufficiently expressive to represent basic arithmetic operations and recursive functions.</Line>
                <Line>
                    For any recursively enumerable theory S, T can represent within its own language: a. The syntax of S
                    (its symbols, formulas, and proofs) b. The provability relation of S
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Theorem 1.2
                </Word> (Metalogical Representation). Let T be any recursively enumerable formal theory whose language
                contains enough expressive power to represent basic arithmetic operations and recursive functions. Then, for
                any recursively enumerable theory S, there exists a formula Prov_S(x) expressible in the language of T such
                that for any formula φ of S: a. Prov_S(⌜φ⌝) is true in the standard model of T if and only if φ is provable
                in S b. If T extends Robinson arithmetic and is consistent, then whenever φ is provable in S, T ⊢
                Prov_S(⌜φ⌝)
            </Paragraph>
            <Heading>2. Preliminary Lemmas</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Lemma 2.1
                </Word> (Effective Encoding). For any recursively enumerable theory S, there exists an effective encoding
                function g_S that maps each symbol, formula, and proof in S to a unique natural number.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Emphasis />
                    Proof.
                </Word> Since S is recursively enumerable, it has a countable set of symbols, formulas, and proofs. We
                construct g_S recursively:
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Assign a unique natural number to each basic symbol in the language of S.</Line>
                <Line>
                    For any well-formed formula φ = s₁s₂...sₙ composed of symbols s₁, s₂, ..., sₙ, define: g_S(φ) =
                    2^g_S(s₁) · 3^g_S(s₂) · ... · p_n^g_S(sₙ) where p_i is the i-th prime number.
                </Line>
                <Line>
                    For a proof π = (φ₁, φ₂, ..., φₘ) consisting of formulas φ₁, φ₂, ..., φₘ, define: g_S(π) = 2^g_S(φ₁) ·
                    3^g_S(φ₂) · ... · p_m^g_S(φₘ)
                </Line>
            </Paragraph>
            <Paragraph>
                This encoding is clearly effective (computable) and injective, as it relies on the unique prime
                factorization of integers. □
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Lemma 2.2
                </Word> (Representability of Recursive Relations). Let T be a theory with sufficient expressive power to
                represent basic arithmetic operations and recursive functions. For any recursive relation R(x₁, ..., xₙ) on
                natural numbers, there exists a formula φ_R(x₁, ..., xₙ) in the language of T such that for all natural
                numbers a₁, ..., aₙ: a. If R(a₁, ..., aₙ) holds, then T ⊢ φ_R(a₁, ..., aₙ) b. If R(a₁, ..., aₙ) does not
                hold, then T ⊢ ¬φ_R(a₁, ..., aₙ)
            </Paragraph>
            <Paragraph>
                <Word>
                    <Emphasis />
                    Proof.
                </Word> This is a standard result in the theory of representability. Since T can represent basic arithmetic
                operations and recursive functions, it can represent all primitive recursive functions. Any recursive
                relation can be expressed as a primitive recursive relation followed by a bounded minimization operator,
                which T can also represent. The details of this construction are well-established in the literature (see
                Kleene 1952). □
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Lemma 2.3
                </Word> (Recursively Enumerable Provability Relation). For any recursively enumerable theory S, the relation
                Proves_S(p, f), which holds if and only if p is the Gödel number of a proof in S of the formula with Gödel
                number f, is recursively enumerable.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Emphasis />
                    Proof.
                </Word> The relation Proves_S(p, f) holds when:
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>p is the Gödel number of a finite sequence (φ₁, φ₂, ..., φₙ) of well-formed formulas in S</Line>
                <Line>Each φᵢ is either an axiom of S or follows from previous formulas by a rule of inference of S</Line>
                <Line>The Gödel number of φₙ is f</Line>
            </Paragraph>
            <Paragraph>
                Checking if a formula is an axiom in S is recursively enumerable (by the assumption that S is recursively
                enumerable). Checking if a formula follows from previous formulas by a rule of inference is a recursive
                operation. Therefore, Proves_S(p, f) is a recursively enumerable relation. □
            </Paragraph>
            <Heading>3. Construction of the Provability Predicate</Heading>
            <Paragraph>
                We now proceed to construct the provability predicate for any recursively enumerable theory S within our
                theory T.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Construction 3.1
                </Word>. Given a recursively enumerable theory S and a theory T with sufficient expressive power, we
                construct the provability predicate Prov_S(x) for S in the language of T as follows:
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>By Lemma 2.3, the relation Proves_S(p, f) is recursively enumerable.</Line>
                <Line>
                    By a standard result in computability theory, any recursively enumerable relation can be expressed as ∃y
                    R(x,y) for some recursive relation R.
                </Line>
                <Line>Thus, Proves_S(p, f) can be expressed as ∃q R_S(p, f, q) for some recursive relation R_S.</Line>
                <Line>By Lemma 2.2, there exists a formula φ_R_S(p, f, q) in the language of T that represents R_S.</Line>
                <Line>Define Prove_S(p, f) ≡ ∃q φ_R_S(p, f, q).</Line>
                <Line>Finally, define Prov_S(f) ≡ ∃p Prove_S(p, f).</Line>
            </Paragraph>
            <Paragraph>
                The formula Prov_S(f) expresses "there exists a proof in S of the formula with Gödel number f."
            </Paragraph>
            <Heading>4. Verification of Properties</Heading>
            <Paragraph>
                We now verify that the constructed predicate Prov_S satisfies the properties required by Theorem 1.2.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Proposition 4.1
                </Word>. For any formula φ of S, Prov_S(⌜φ⌝) is true in the standard model of T if and only if φ is provable
                in S.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Emphasis />
                    Proof.
                </Word> (→) Suppose Prov_S(⌜φ⌝) is true in the standard model of T. Then ∃p Prove_S(p, ⌜φ⌝) is true, which
                means there exists a natural number p such that Prove_S(p, ⌜φ⌝) is true. By our construction, this means p
                is the Gödel number of a proof of φ in S. Therefore, φ is provable in S.
            </Paragraph>
            <Paragraph>
                (←) Suppose φ is provable in S. Then there exists a proof π of φ in S. Let p = g_S(π) be the Gödel number of
                this proof. By construction, Prove_S(p, ⌜φ⌝) is true in the standard model of T. Therefore, ∃p Prove_S(p,
                ⌜φ⌝) is true, which means Prov_S(⌜φ⌝) is true in the standard model of T. □
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Proposition 4.2
                </Word>. If T extends Robinson arithmetic and is consistent, then whenever φ is provable in S, T ⊢
                Prov_S(⌜φ⌝).
            </Paragraph>
            <Paragraph>
                <Word>
                    <Emphasis />
                    Proof.
                </Word> Suppose φ is provable in S. Then there exists a specific proof π of φ in S. Let p = g_S(π) be the
                Gödel number of this proof. Since π is a valid proof of φ in S, the recursive relation R_S(p, ⌜φ⌝, q) holds
                for some q.
            </Paragraph>
            <Paragraph>
                By Lemma 2.2, since T can represent recursive relations and R_S(p, ⌜φ⌝, q) holds, we have T ⊢ φ_R_S(p, ⌜φ⌝,
                q).
            </Paragraph>
            <Paragraph>By existential introduction, T ⊢ ∃q φ_R_S(p, ⌜φ⌝, q), which means T ⊢ Prove_S(p, ⌜φ⌝).</Paragraph>
            <Paragraph>Again by existential introduction, T ⊢ ∃p Prove_S(p, ⌜φ⌝), which is T ⊢ Prov_S(⌜φ⌝). □</Paragraph>
            <Heading>5. Main Theorem</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Theorem 5.1
                </Word> (Metalogical Representation). Let T be any recursively enumerable formal theory whose language
                contains enough expressive power to represent basic arithmetic operations and recursive functions. Then, for
                any recursively enumerable theory S, there exists a formula Prov_S(x) expressible in the language of T such
                that for any formula φ of S: a. Prov_S(⌜φ⌝) is true in the standard model of T if and only if φ is provable
                in S b. If T extends Robinson arithmetic and is consistent, then whenever φ is provable in S, T ⊢
                Prov_S(⌜φ⌝)
            </Paragraph>
            <Paragraph>
                <Word>
                    <Emphasis />
                    Proof.
                </Word> The proof follows directly from Construction 3.1, Proposition 4.1, and Proposition 4.2. □
            </Paragraph>
            <Heading>6. Connection to Universality in Turing Machines</Heading>
            <Paragraph>
                The Metalogical Representation Theorem establishes a form of universality for formal theories that parallels
                the universality of Turing machines. Just as a universal Turing machine can simulate any other Turing
                machine given its description, a theory with metalogical universality can represent the provability relation
                of any recursively enumerable theory.
            </Paragraph>
            <Paragraph>
                This universality creates a threshold of expressive power in formal systems. Once a theory can represent
                basic arithmetic and recursive functions, it gains the universal capacity to represent the metalogical
                properties of all recursively enumerable theories. This is analogous to the computational threshold
                identified by Turing, where machines capable of certain basic operations gain the ability to simulate any
                computational process.
            </Paragraph>
            <Paragraph>
                In both cases, a precisely defined capability (representing recursive functions, or performing certain basic
                computational operations) leads to a universal representational power that transcends the initially
                specified capabilities. Both results establish fundamental thresholds in their respective domains—formal
                expressiveness for logical theories, and computational power for machines.
            </Paragraph>
            <Paragraph>
                This connection highlights the deep relationship between logic and computation, showing how similar
                universality principles manifest in different foundational areas of mathematics.
            </Paragraph>
        </Section>
    </Chapter>
);
