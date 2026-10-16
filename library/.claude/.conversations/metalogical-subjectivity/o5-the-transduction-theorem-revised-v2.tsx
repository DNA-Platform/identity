import { Chapter, Heading, Line, List, Paragraph, Section, Title } from '@dna-platform/public';
import { Opaque } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ The Transduction Theorem Revised v2 ]]</Title>
        <Section>
            <Opaque />
            <Heading>The Transduction Theorem Revised at version 2</Heading>
            <Heading>The Transduction Theorem</Heading>
            <Heading>Definition: Transduction</Heading>
            <Paragraph>
                Let T be a theory and let φ be a sentence in the language of T. Consider an algorithm A which takes theories
                as inputs and extends them based on some criteria. If algorithm A takes in T and outputs T ∪ &#123;φ&#125;,
                we say that A has transduced φ into T.
            </Paragraph>
            <Heading>Lemma: Transductive Dichotomy</Heading>
            <Paragraph>
                Let T be a consistent, recursively axiomatizable theory extending Robinson arithmetic (Q). For any sentence
                φ in the language of T where T ⊬ φ and T ⊬ ¬φ, at most one of T ∪ &#123;φ&#125; and T ∪ &#123;¬φ&#125; can
                prove ¬Con(T).
            </Paragraph>
            <Heading>Proof of Lemma:</Heading>
            <Paragraph>
                <List />
                <Line>Suppose both T ∪ &#123;φ&#125; and T ∪ &#123;¬φ&#125; could prove ¬Con(T)</Line>
                <Line>This would mean T ∪ &#123;φ&#125; ⊢ ¬Con(T) and T ∪ &#123;¬φ&#125; ⊢ ¬Con(T)</Line>
                <Line>These imply T ⊢ (φ → ¬Con(T)) and T ⊢ (¬φ → ¬Con(T))</Line>
                <Line>By propositional logic, T ⊢ ((φ → ¬Con(T)) ∧ (¬φ → ¬Con(T))) → ¬Con(T)</Line>
                <Line>Since (φ ∨ ¬φ) is a tautology, we can derive T ⊢ ¬Con(T)</Line>
                <Line>
                    But this contradicts Gödel's second incompleteness theorem (Gödel, 1931), which tells us that if T is
                    consistent, then T ⊬ Con(T) and thus T ⊬ ¬Con(T) by the consistency of T
                </Line>
                <Line>Therefore, at most one of T ∪ &#123;φ&#125; and T ∪ &#123;¬φ&#125; can prove ¬Con(T)</Line>
            </Paragraph>
            <Heading>The First Transductive Consistency Theorem</Heading>
            <Paragraph>T ∪ &#123;¬G&#125; ⊢ ¬Con(T)</Paragraph>
            <Heading>Key Relationships to Consider</Heading>
            <Paragraph>
                <List ordered />
                <Line>G ↔ ¬Prov_T(⌜G⌝) (the Gödel sentence)</Line>
                <Line>Con(T) ↔ ¬Prov_T(⌜0=1⌝) (consistency statement)</Line>
                <Line>G is not provable in T if T is consistent (by the first incompleteness theorem)</Line>
                <Line>There is a provable relationship between G and Con(T)</Line>
            </Paragraph>
            <Heading>Proof Sketch</Heading>
            <Paragraph>
                <List ordered />
                <Line>
                    By construction, the Gödel sentence G satisfies G ↔ ¬Prov_T(⌜G⌝) in T (per the Diagonal Lemma, first
                    formalized by Carnap (1934) based on Gödel's technique)
                </Line>
                <Line>
                    From Gödel's work (1931, Theorem VI), we know that T ⊢ (Con(T) → G). This relationship was further
                    clarified in Hilbert and Bernays (1939)
                </Line>
                <Line>This means T ⊢ (¬G → ¬Con(T)) by contraposition (a standard result from propositional logic)</Line>
                <Line>Now in T ∪ &#123;¬G&#125;:</Line>
                <Paragraph>
                    <List />
                    <Line>We have ¬G as an axiom, so T ∪ &#123;¬G&#125; ⊢ ¬G</Line>
                    <Line>From step 3, T ⊢ (¬G → ¬Con(T))</Line>
                    <Line>Therefore, T ∪ &#123;¬G&#125; ⊢ ¬Con(T) by modus ponens</Line>
                </Paragraph>
            </Paragraph>
            <Heading>Explanation</Heading>
            <Paragraph>
                The key insight is that the Gödel sentence G is constructed to assert its own unprovability, and this
                creates a special relationship with the consistency of T. Gödel showed that if T is consistent, then T can
                prove "if T is consistent, then G is true" (formally: T ⊢ (Con(T) → G)).
            </Paragraph>
            <Paragraph>
                When we transduce ¬G into T (i.e., add it as an axiom), we're essentially contradicting the implication that
                consistency implies G. By the laws of contraposition, this forces us to conclude ¬Con(T). This shows that
                transduction isn't arbitrary - some sentences like ¬G cannot be consistently transduced without implying the
                inconsistency of the original theory.
            </Paragraph>
            <Heading>The Second Transductive Consistency Theorem</Heading>
            <Paragraph>Con(T) ↔ Con(T ∪ &#123;G&#125;)</Paragraph>
            <Heading>Proof Sketch</Heading>
            <Paragraph>
                <List ordered />
                <Line>For the direction Con(T ∪ &#123;G&#125;) → Con(T):</Line>
                <Paragraph>
                    <List />
                    <Line>If T ∪ &#123;G&#125; is consistent, then T must be consistent</Line>
                    <Line>This is because any proof in T is also a valid proof in T ∪ &#123;G&#125;</Line>
                    <Line>
                        So if T were inconsistent, T ∪ &#123;G&#125; would also be inconsistent (by the monotonicity of the
                        consequence relation)
                    </Line>
                </Paragraph>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>For the direction Con(T) → Con(T ∪ &#123;G&#125;):</Line>
                <Paragraph>
                    <List />
                    <Line>From the First Transductive Consistency Theorem, we know T ∪ &#123;¬G&#125; ⊢ ¬Con(T)</Line>
                    <Line>
                        By the Transductive Dichotomy Lemma, if T ∪ &#123;¬G&#125; proves ¬Con(T), then T ∪ &#123;G&#125;
                        cannot prove ¬Con(T) if T is consistent
                    </Line>
                    <Line>
                        If T ∪ &#123;G&#125; were inconsistent, it would prove everything, including ¬Con(T) (by the
                        principle of explosion, ex falso quodlibet, from classical logic)
                    </Line>
                    <Line>
                        Since T ∪ &#123;G&#125; cannot prove ¬Con(T) when T is consistent, T ∪ &#123;G&#125; must be
                        consistent when T is consistent
                    </Line>
                    <Line>Therefore, if Con(T), then Con(T ∪ &#123;G&#125;)</Line>
                </Paragraph>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Combining these results:</Line>
                <Paragraph>
                    <List />
                    <Line>Con(T) ↔ Con(T ∪ &#123;G&#125;)</Line>
                </Paragraph>
            </Paragraph>
            <Heading>Explanation</Heading>
            <Paragraph>
                The Second Transductive Consistency Theorem establishes that transducing the Gödel sentence G preserves the
                consistency of theory T. This stands in contrast to transducing ¬G, which leads to proving the inconsistency
                of T.
            </Paragraph>
            <Paragraph>
                Together with the Transductive Dichotomy Lemma and the First Transductive Consistency Theorem, this result
                reveals an important asymmetry in how Gödel sentences behave under transduction. While both G and ¬G are
                undecidable in T (assuming T is consistent), only G can be safely transduced without compromising
                consistency.
            </Paragraph>
            <Paragraph>
                This special property of G stems from its relationship with Con(T). While the full equivalence T ⊢ (G ↔
                Con(T)) may not be provable within T, the provable implication T ⊢ (Con(T) → G) is sufficient to establish
                our theorems about transduction.
            </Paragraph>
            <Heading>The Transduction Theorem</Heading>
            <Paragraph>
                Let T be a consistent, recursively axiomatizable theory extending Robinson arithmetic (Q), and let G be its
                Gödel sentence. If an algorithm A aims to preserve consistency when extending theories, then when faced with
                G, it must transduce G rather than ¬G.
            </Paragraph>
            <Heading>Proof</Heading>
            <Paragraph>
                <List ordered />
                <Line>From the First Transductive Consistency Theorem, we know:</Line>
                <Paragraph>
                    <List />
                    <Line>T ∪ &#123;¬G&#125; ⊢ ¬Con(T)</Line>
                    <Line>This means transducing ¬G leads to proving T's inconsistency</Line>
                </Paragraph>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>From the Second Transductive Consistency Theorem, we know:</Line>
                <Paragraph>
                    <List />
                    <Line>Con(T) ↔ Con(T ∪ &#123;G&#125;)</Line>
                    <Line>This means transducing G preserves consistency</Line>
                </Paragraph>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>If algorithm A is designed to preserve consistency, then:</Line>
                <Paragraph>
                    <List />
                    <Line>A cannot transduce ¬G (as this would imply the inconsistency of T)</Line>
                    <Line>A can safely transduce G (as this preserves the consistency of T)</Line>
                </Paragraph>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    Therefore, if A's criteria include consistency preservation, then when presented with the undecidable
                    Gödel sentence G:
                </Line>
                <Paragraph>
                    <List />
                    <Line>A must choose to transduce G rather than ¬G</Line>
                    <Line>
                        This choice is not arbitrary, but follows necessarily from the goal of consistency preservation
                    </Line>
                </Paragraph>
            </Paragraph>
            <Heading>Explanation</Heading>
            <Paragraph>
                The Transduction Theorem demonstrates that consistency-preserving transduction algorithms must make specific
                choices when encountering Gödel sentences. This shows that even among undecidable statements (which cannot
                be resolved within the theory itself), there is a principled basis for choosing which ones to accept.
            </Paragraph>
            <Paragraph>
                The choice to transduce G rather than ¬G is dictated by the goal of consistency preservation. This theorem
                applies specifically to Gödel sentences; whether similar results hold for other classes of undecidable
                statements remains an open question for further investigation.
            </Paragraph>
            <Heading>Notes and Citations</Heading>
            <Paragraph>
                <List ordered />
                <Line>
                    Gödel, K. (1931). "Über formal unentscheidbare Sätze der Principia Mathematica und verwandter Systeme
                    I." Monatshefte für Mathematik und Physik, 38, 173-198. This seminal paper introduced the incompleteness
                    theorems and the technique of Gödel numbering.
                </Line>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    Hilbert, D., &amp; Bernays, P. (1939). "Grundlagen der Mathematik II." Berlin: Springer. This work
                    provided refinements of Gödel's second incompleteness theorem and the conditions under which it holds.
                </Line>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    Carnap, R. (1934). "Logische Syntax der Sprache." Vienna: Springer. Carnap formalized the diagonal lemma
                    that is fundamental to the construction of self-referential sentences like the Gödel sentence.
                </Line>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    The relationship between the Gödel sentence G and Con(T) is explored in detail in modern presentations
                    such as:
                </Line>
                <Paragraph>
                    <List />
                    <Line>Smullyan, R. (1992). "Gödel's Incompleteness Theorems." Oxford: Oxford University Press.</Line>
                    <Line>Boolos, G. (1993). "The Logic of Provability." Cambridge: Cambridge University Press.</Line>
                </Paragraph>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    The Transduction Theorem presented here is original and builds upon these classical results in
                    mathematical logic by examining their implications for theory extension algorithms.
                </Line>
            </Paragraph>
        </Section>
    </Chapter>
);
