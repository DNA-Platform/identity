import { Chapter, Heading, Line, List, Paragraph, Section, Title } from '@dna-platform/public';
import { Opaque } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ The Metalogical Representation Theorem ❨Revised❩ v1 ]]</Title>
        <Section>
            <Opaque />
            <Heading>The Metalogical Representation Theorem ❨Revised❩ at version 1</Heading>
            <Heading>The Metalogical Representation Theorem</Heading>
            <Heading>Definition: Metalogical Universality</Heading>
            <Paragraph>A formal theory T exhibits metalogical universality if:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>T is sufficiently expressive to represent basic arithmetic operations and recursive functions.</Line>
                <Line>For any recursively enumerable theory S, T can represent within its own language:</Line>
                <Paragraph>
                    <List />
                    <Line>The syntax of S (its symbols, formulas, and proofs)</Line>
                    <Line>The provability relation of S</Line>
                </Paragraph>
            </Paragraph>
            <Heading>Theorem Statement</Heading>
            <Paragraph>
                Let T be any recursively enumerable formal theory whose language contains enough expressive power to
                represent basic arithmetic operations and recursive functions. Then, for any recursively enumerable theory
                S, there exists a formula Prov_S(x) expressible in the language of T such that for any formula φ of S:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Prov_S(⌜φ⌝) is true in the standard model of T if and only if φ is provable in S</Line>
                <Line>
                    If T extends Robinson arithmetic and is consistent, then whenever φ is provable in S, T ⊢ Prov_S(⌜φ⌝)
                </Line>
            </Paragraph>
            <Heading>Lemma: Effective Encoding</Heading>
            <Paragraph>
                For any recursively enumerable theory S, there exists an effective encoding function g_S that maps each
                symbol, formula, and proof in S to a unique natural number.
            </Paragraph>
            <Heading>Proof of Lemma:</Heading>
            <Paragraph>
                <List />
                <Line>Since S is recursively enumerable, it has a countable set of symbols, formulas, and proofs</Line>
                <Line>We construct g_S recursively:</Line>
                <Paragraph>
                    <List />
                    <Line>Assign a unique natural number to each basic symbol in the language of S</Line>
                    <Line>
                        For any well-formed formula φ = s₁s₂...sₙ composed of symbols s₁, s₂, ..., sₙ, define: g_S(φ) =
                        2^g_S(s₁) · 3^g_S(s₂) · ... · p_n^g_S(sₙ) where p_i is the i-th prime number
                    </Line>
                    <Line>
                        For a proof π = (φ₁, φ₂, ..., φₘ) consisting of formulas φ₁, φ₂, ..., φₘ, define: g_S(π) = 2^g_S(φ₁)
                        · 3^g_S(φ₂) · ... · p_m^g_S(φₘ)
                    </Line>
                </Paragraph>
                <Line>
                    This encoding is effective (computable) and injective due to the unique prime factorization of integers
                </Line>
            </Paragraph>
            <Heading>Lemma: Representability of Recursive Relations</Heading>
            <Paragraph>
                Let T be a theory with sufficient expressive power to represent basic arithmetic operations and recursive
                functions. For any recursive relation R(x₁, ..., xₙ) on natural numbers, there exists a formula φ_R(x₁, ...,
                xₙ) in the language of T such that for all natural numbers a₁, ..., aₙ:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>If R(a₁, ..., aₙ) holds, then T ⊢ φ_R(a₁, ..., aₙ)</Line>
                <Line>If R(a₁, ..., aₙ) does not hold, then T ⊢ ¬φ_R(a₁, ..., aₙ)</Line>
            </Paragraph>
            <Heading>Proof of Lemma:</Heading>
            <Paragraph>
                <List />
                <Line>
                    Since T can represent basic arithmetic operations and recursive functions, it can represent all
                    primitive recursive functions
                </Line>
                <Line>
                    Any recursive relation can be expressed as a primitive recursive relation followed by a bounded
                    minimization operator
                </Line>
                <Line>T can represent both primitive recursive relations and bounded minimization</Line>
                <Line>The representation proceeds by structural induction on the definition of the recursive relation</Line>
                <Line>This is a standard result in representability theory (Kleene, 1952)</Line>
            </Paragraph>
            <Heading>Lemma: Recursively Enumerable Provability Relation</Heading>
            <Paragraph>
                For any recursively enumerable theory S, the relation Proves_S(p, f), which holds if and only if p is the
                Gödel number of a proof in S of the formula with Gödel number f, is recursively enumerable.
            </Paragraph>
            <Heading>Proof of Lemma:</Heading>
            <Paragraph>
                <List />
                <Line>The relation Proves_S(p, f) holds when:</Line>
                <Paragraph>
                    <List />
                    <Line>p is the Gödel number of a finite sequence (φ₁, φ₂, ..., φₙ) of well-formed formulas in S</Line>
                    <Line>
                        Each φᵢ is either an axiom of S or follows from previous formulas by a rule of inference of S
                    </Line>
                    <Line>The Gödel number of φₙ is f</Line>
                </Paragraph>
                <Line>
                    Checking if a formula is an axiom in S is recursively enumerable (since S is recursively enumerable)
                </Line>
                <Line>
                    Checking if a formula follows from previous formulas by a rule of inference is a recursive operation
                </Line>
                <Line>Therefore, Proves_S(p, f) is a recursively enumerable relation</Line>
            </Paragraph>
            <Heading>Proof of the Metalogical Representation Theorem</Heading>
            <Heading>Construction of the Provability Predicate</Heading>
            <Paragraph>
                <List ordered />
                <Line>
                    Given a recursively enumerable theory S and a theory T with sufficient expressive power, we construct
                    the provability predicate Prov_S(x) for S in the language of T as follows:
                </Line>
                <Paragraph>
                    <List />
                    <Line>
                        By the Recursively Enumerable Provability Relation Lemma, the relation Proves_S(p, f) is recursively
                        enumerable
                    </Line>
                    <Line>
                        Any recursively enumerable relation can be expressed as ∃y R(x,y) for some recursive relation R
                    </Line>
                    <Line>Thus, Proves_S(p, f) can be expressed as ∃q R_S(p, f, q) for some recursive relation R_S</Line>
                    <Line>
                        By the Representability of Recursive Relations Lemma, there exists a formula φ_R_S(p, f, q) in the
                        language of T that represents R_S
                    </Line>
                    <Line>Define Prove_S(p, f) ≡ ∃q φ_R_S(p, f, q)</Line>
                    <Line>Finally, define Prov_S(f) ≡ ∃p Prove_S(p, f)</Line>
                </Paragraph>
                <Line>
                    Verification of the first property: Prov_S(⌜φ⌝) is true in the standard model of T if and only if φ is
                    provable in S
                </Line>
                <Paragraph>
                    <List />
                    <Line>
                        Forward direction: If Prov_S(⌜φ⌝) is true in the standard model of T, then ∃p Prove_S(p, ⌜φ⌝) is
                        true, which means p is the Gödel number of a proof of φ in S. Therefore, φ is provable in S
                    </Line>
                    <Line>
                        Reverse direction: If φ is provable in S, there exists a proof π of φ in S. Let p = g_S(π) be the
                        Gödel number of this proof. By construction, Prove_S(p, ⌜φ⌝) is true, making Prov_S(⌜φ⌝) true in the
                        standard model of T
                    </Line>
                </Paragraph>
                <Line>
                    Verification of the second property: If T extends Robinson arithmetic and is consistent, then whenever φ
                    is provable in S, T ⊢ Prov_S(⌜φ⌝)
                </Line>
                <Paragraph>
                    <List />
                    <Line>Suppose φ is provable in S with proof π</Line>
                    <Line>Let p = g_S(π) be the Gödel number of this proof</Line>
                    <Line>Since π is a valid proof of φ in S, the recursive relation R_S(p, ⌜φ⌝, q) holds for some q</Line>
                    <Line>By the Representability of Recursive Relations Lemma, T ⊢ φ_R_S(p, ⌜φ⌝, q)</Line>
                    <Line>By existential introduction, T ⊢ ∃q φ_R_S(p, ⌜φ⌝, q), which means T ⊢ Prove_S(p, ⌜φ⌝)</Line>
                    <Line>Again by existential introduction, T ⊢ ∃p Prove_S(p, ⌜φ⌝), which is T ⊢ Prov_S(⌜φ⌝)</Line>
                </Paragraph>
            </Paragraph>
            <Heading>Explanation</Heading>
            <Paragraph>
                The Metalogical Representation Theorem establishes that theories with sufficient expressive power can
                represent the syntax and provability of any recursively enumerable formal system. This creates a form of
                universality for formal theories that parallels the universality of Turing machines.
            </Paragraph>
            <Paragraph>
                Just as a universal Turing machine can simulate any other Turing machine when provided with its description,
                a theory with metalogical universality can represent the provability relation of any recursively enumerable
                theory. This universality establishes a threshold of expressive power in formal systems - once a theory can
                represent basic arithmetic and recursive functions, it gains the universal capacity to represent the
                metalogical properties of all recursively enumerable theories.
            </Paragraph>
            <Paragraph>
                This threshold is analogous to the computational threshold identified by Turing, where machines capable of
                certain basic operations gain the ability to simulate any computational process. In both cases, a precisely
                defined capability leads to a universal representational power that transcends the initially specified
                capabilities.
            </Paragraph>
            <Paragraph>
                The theorem demonstrates that metalogical concepts like provability, which normally exist in the metatheory
                of formal systems, can be represented within the object language of sufficiently expressive theories. This
                capacity for theories to talk about other theories (including themselves) within their own formal language
                is a profound insight with far-reaching implications for mathematical logic and the foundations of
                mathematics.
            </Paragraph>
            <Heading>Connection to Transduction Theorems</Heading>
            <Paragraph>
                The Metalogical Representation Theorem provides the foundation for the Transduction Theorems we developed
                earlier. It is precisely because sufficiently expressive theories can represent their own provability that
                we can construct the Gödel sentence G and establish the special relationship it has with consistency. The
                ability to transduce certain statements in a principled way depends on this representational capacity and
                the resulting metalogical relationships that can be formalized within the theory itself.
            </Paragraph>
        </Section>
    </Chapter>
);
