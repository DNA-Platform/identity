import { Bold, Chapter, Heading, Line, List, Paragraph, Section, Title, Word } from '@dna-platform/public';
import { Opaque } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ The Metalogical Representation Theorem: Proof and Connection to Universality v1 ]]</Title>
        <Section>
            <Opaque />
            <Heading>The Metalogical Representation Theorem: Proof and Connection to Universality at version 1</Heading>
            <Heading>The Metalogical Representation Theorem: Proof and Connection to Universality</Heading>
            <Heading>Definition: Metalogical Universality</Heading>
            <Paragraph>
                A formal theory T exhibits <Word>
                    <Bold />
                    metalogical universality
                </Word> if it satisfies the following conditions:
            </Paragraph>
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
            <Heading>Statement of the Theorem</Heading>
            <Paragraph>
                Let T be any recursively enumerable formal theory whose language contains enough expressive power to
                represent basic arithmetic operations and recursive functions. Then:
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    For any recursively enumerable theory S, there exists a formula Prov_S(x) expressible in the language of
                    T such that for any formula φ of S:
                </Line>
                <Paragraph>
                    <List />
                    <Line>Prov_S(⌜φ⌝) is true in the standard model of T if and only if φ is provable in S</Line>
                    <Line>
                        If T extends Robinson arithmetic and is consistent, then whenever φ is provable in S, T ⊢
                        Prov_S(⌜φ⌝)
                    </Line>
                </Paragraph>
            </Paragraph>
            <Heading>Proof of the Theorem</Heading>
            <Paragraph>The proof proceeds in several steps:</Paragraph>
            <Heading>Step 1: Encoding the syntax of any recursively enumerable theory</Heading>
            <Paragraph>
                First, we establish that any recursively enumerable theory S can have its syntax encoded via Gödel
                numbering. Since S is recursively enumerable, it has a countable set of symbols, formulas, and proofs.
            </Paragraph>
            <Paragraph>We construct an injective function g_S that maps:</Paragraph>
            <Paragraph>
                <List />
                <Line>Each symbol of S to a unique natural number</Line>
                <Line>
                    Each formula of S to a unique natural number (constructed from the codes of its constituent symbols)
                </Line>
                <Line>
                    Each proof in S to a unique natural number (constructed from the codes of the formulas in the proof)
                </Line>
            </Paragraph>
            <Paragraph>This encoding can be done using prime factorization:</Paragraph>
            <Paragraph>
                <List />
                <Line>Assign distinct prime numbers to each basic symbol in the language</Line>
                <Line>
                    For a sequence of symbols s₁, s₂, ..., sₙ, define g_S(s₁s₂...sₙ) = p₁^g_S(s₁) × p₂^g_S(s₂) × ... ×
                    pₙ^g_S(sₙ) where pᵢ is the i-th prime number
                </Line>
                <Line>For structured expressions, use additional primes to encode the syntactic structure</Line>
            </Paragraph>
            <Heading>Step 2: Representability of recursive relations</Heading>
            <Paragraph>
                Next, we need to show that any recursive relation on natural numbers can be represented in T. This follows
                from the assumption that T is sufficiently expressive to represent basic arithmetic operations and recursive
                functions.
            </Paragraph>
            <Paragraph>
                For any recursive relation R(x₁, ..., xₙ), there exists a formula φ_R(x₁, ..., xₙ) in the language of T such
                that:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>For any natural numbers a₁, ..., aₙ, if R(a₁, ..., aₙ) holds, then T ⊢ φ_R(a₁, ..., aₙ)</Line>
                <Line>
                    For any natural numbers a₁, ..., aₙ, if R(a₁, ..., aₙ) does not hold, then T ⊢ ¬φ_R(a₁, ..., aₙ)
                </Line>
            </Paragraph>
            <Paragraph>
                This is a standard result about the representability of recursive relations in theories extending Robinson
                arithmetic.
            </Paragraph>
            <Heading>Step 3: Encoding provability in S</Heading>
            <Paragraph>
                The provability relation in S, defined as Proves_S(p, f) which holds if and only if p is the Gödel number of
                a proof in S of the formula with Gödel number f, is recursively enumerable.
            </Paragraph>
            <Paragraph>This relation can be defined in terms of more basic recursive relations that check:</Paragraph>
            <Paragraph>
                <List />
                <Line>Whether a sequence of formulas constitutes a valid proof in S</Line>
                <Line>Whether the last formula in the sequence is the one with Gödel number f</Line>
            </Paragraph>
            <Paragraph>
                Since S is a recursively enumerable theory, the verification of whether something is an axiom of S or
                follows from previous steps by rules of inference is recursive. Therefore, the relation Proves_S(p, f) is
                recursively enumerable.
            </Paragraph>
            <Heading>Step 4: Representing provability in the language of T</Heading>
            <Paragraph>
                By Step 2, since the Proves_S relation is recursively enumerable, there exists a formula φ_Proves_S(p, f) in
                the language of T that represents it.
            </Paragraph>
            <Paragraph>We can now define the provability predicate for S in the language of T:</Paragraph>
            <Paragraph>Prov_S(f) ≡ ∃p φ_Proves_S(p, f)</Paragraph>
            <Paragraph>This formula expresses "there exists a proof in S of the formula with Gödel number f."</Paragraph>
            <Heading>Step 5: Verification of the properties of Prov_S</Heading>
            <Paragraph>We need to verify that Prov_S satisfies the required properties:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Prov_S(⌜φ⌝) is true in the standard model of T if and only if φ is provable in S:</Line>
                <Paragraph>
                    <List />
                    <Line>
                        If φ is provable in S, then there exists a proof p in S of φ, so Proves_S(p, ⌜φ⌝) holds, making
                        Prov_S(⌜φ⌝) true in the standard model.
                    </Line>
                    <Line>
                        If φ is not provable in S, then no p exists such that Proves_S(p, ⌜φ⌝) holds, making Prov_S(⌜φ⌝)
                        false in the standard model.
                    </Line>
                </Paragraph>
                <Line>
                    If T extends Robinson arithmetic and is consistent, then whenever φ is provable in S, T ⊢ Prov_S(⌜φ⌝):
                </Line>
                <Paragraph>
                    <List />
                    <Line>If φ is provable in S, there exists a specific proof p of φ in S.</Line>
                    <Line>
                        Since Proves_S(p, ⌜φ⌝) holds and φ_Proves_S represents the Proves_S relation, T ⊢ φ_Proves_S(p,
                        ⌜φ⌝).
                    </Line>
                    <Line>By existential introduction, T ⊢ ∃p φ_Proves_S(p, ⌜φ⌝), which is T ⊢ Prov_S(⌜φ⌝).</Line>
                </Paragraph>
            </Paragraph>
            <Paragraph>This completes the proof of the Metalogical Representation Theorem.</Paragraph>
            <Heading>Connection to Universality in Turing Machines</Heading>
            <Paragraph>
                The universality demonstrated in this theorem parallels the universality of Turing machines in a deep way.
                In computability theory, a universal Turing machine (UTM) can simulate any other Turing machine when
                provided with its description. This enables a single machine to compute anything that any specific Turing
                machine could compute.
            </Paragraph>
            <Paragraph>
                Similarly, the Metalogical Representation Theorem shows that sufficiently expressive theories have a
                universal capacity to represent the metalogical properties of any recursively enumerable formal system. Once
                a theory reaches this level of expressive power, it can encode and reason about an unlimited variety of
                formal systems.
            </Paragraph>
            <Paragraph>
                This creates a threshold of expressive power, analogous to the computational universality threshold
                identified by Turing. Theories below this threshold may be limited in what they can express about formal
                systems, while theories at or above this threshold possess a universal representational capability.
            </Paragraph>
            <Paragraph>
                The parallel extends further: just as Turing used his universal machine concept to prove the undecidability
                of the Entscheidungsproblem (by showing that the halting problem for Turing machines is undecidable), Gödel
                used the representational power of formal systems to prove his incompleteness theorems (by showing that
                truth cannot coincide with provability in sufficiently strong formal systems).
            </Paragraph>
            <Paragraph>
                Both results identify fundamental limitations that arise precisely from the universal representational power
                of the systems in question. The capacity to represent everything within a certain domain (computations for
                Turing machines, formal proofs for logical theories) leads to inherent limitations on what those systems can
                decide or prove about themselves.
            </Paragraph>
            <Heading>The Essence of the Result</Heading>
            <Paragraph>
                The Metalogical Representation Theorem establishes that the ability to represent basic arithmetic and
                recursive functions serves as a "universal representational gateway" in formal systems. Once a theory
                possesses this capability, it can represent the syntax and provability of any recursively enumerable theory,
                creating a universal mechanism for expressing metalogical concepts within object-level language.
            </Paragraph>
            <Paragraph>
                This universality is not about self-reference specifically, but about the general capacity to express
                metalogical concepts about any formal system within a single theory. Self-reference emerges as a special
                case when a theory represents its own provability predicate, but the theorem's significance extends far
                beyond this particular application.
            </Paragraph>
            <Paragraph>
                The theorem identifies a precise threshold at which theories gain this universal expressiveness, providing a
                fundamental insight into the nature of formal systems and their representational capabilities. Just as
                Turing's work identified a threshold of computational universality, this theorem identifies a threshold of
                metalogical expressiveness that has profound implications for the foundations of mathematics and logic.
            </Paragraph>
        </Section>
    </Chapter>
);
