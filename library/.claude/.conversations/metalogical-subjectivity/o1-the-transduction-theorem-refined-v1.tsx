import { Chapter, Heading, Line, List, Paragraph, Section, Title } from '@dna-platform/public';
import { Opaque } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ The Transduction Theorem - Refined v1 ]]</Title>
        <Section>
            <Opaque />
            <Heading>The Transduction Theorem - Refined at version 1</Heading>
            <Heading>The Transduction Theorem: A Formal Development</Heading>
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
                be inconsistent.
            </Paragraph>
            <Heading>Proof of Lemma:</Heading>
            <Paragraph>
                <List />
                <Line>Suppose both T ∪ &#123;φ&#125; and T ∪ &#123;¬φ&#125; were inconsistent</Line>
                <Line>Then T ∪ &#123;φ&#125; ⊢ 0=1 and T ∪ &#123;¬φ&#125; ⊢ 0=1</Line>
                <Line>This would imply T ⊢ (φ → 0=1) and T ⊢ (¬φ → 0=1)</Line>
                <Line>By propositional logic, T ⊢ ((φ → 0=1) ∧ (¬φ → 0=1)) → 0=1</Line>
                <Line>Therefore, T ⊢ 0=1, contradicting our assumption that T is consistent</Line>
            </Paragraph>
            <Heading>The First Transductive Consistency Theorem</Heading>
            <Paragraph>For a consistent theory T and its Gödel sentence G, the following holds:</Paragraph>
            <Paragraph>T ∪ &#123;¬G&#125; ⊢ 0=1</Paragraph>
            <Heading>Key Relationships to Consider</Heading>
            <Paragraph>
                <List ordered />
                <Line>G ↔ ¬Prov_T(⌜G⌝) (the Gödel sentence)</Line>
                <Line>Con(T) ↔ ¬Prov_T(⌜0=1⌝) (consistency statement)</Line>
                <Line>G is not provable in T if T is consistent (by the first incompleteness theorem)</Line>
            </Paragraph>
            <Heading>Corrected Proof Sketch</Heading>
            <Paragraph>
                <List ordered />
                <Line>The Gödel sentence G is constructed such that T ⊢ G ↔ ¬Prov_T(⌜G⌝)</Line>
                <Line>Now in T ∪ &#123;¬G&#125;:</Line>
                <Paragraph>
                    <List />
                    <Line>We have ¬G as an axiom, so T ∪ &#123;¬G&#125; ⊢ ¬G</Line>
                    <Line>From step 1, T ∪ &#123;¬G&#125; ⊢ ¬¬Prov_T(⌜G⌝)</Line>
                    <Line>Therefore, T ∪ &#123;¬G&#125; ⊢ Prov_T(⌜G⌝)</Line>
                </Paragraph>
                <Line>
                    But this means T ∪ &#123;¬G&#125; proves that G is provable in T, while also containing ¬G as an axiom
                </Line>
                <Line>This constitutes a contradiction: T ∪ &#123;¬G&#125; ⊢ G and T ∪ &#123;¬G&#125; ⊢ ¬G</Line>
                <Line>Therefore, T ∪ &#123;¬G&#125; ⊢ 0=1</Line>
            </Paragraph>
            <Heading>Explanation</Heading>
            <Paragraph>
                The key insight is that the Gödel sentence G isn't just any undecidable statement - it's specifically
                constructed to assert its own unprovability. When we transduce ¬G into T (i.e., add it as an axiom), we're
                essentially asserting that G is provable in T, which creates a contradiction with the fact that we've
                assumed ¬G.
            </Paragraph>
            <Paragraph>
                This shows that transduction isn't arbitrary - some sentences like ¬G cannot be consistently transduced
                without collapsing the theory into inconsistency.
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
                </Paragraph>
                <Line>For the direction Con(T) → Con(T ∪ &#123;G&#125;):</Line>
                <Paragraph>
                    <List />
                    <Line>
                        From the First Transductive Consistency Theorem, we know T ∪ &#123;¬G&#125; is inconsistent when T
                        is consistent
                    </Line>
                    <Line>
                        By the Transductive Dichotomy Lemma, if T ∪ &#123;¬G&#125; is inconsistent, then T ∪ &#123;G&#125;
                        must be consistent when T is consistent
                    </Line>
                    <Line>Therefore, if Con(T), then Con(T ∪ &#123;G&#125;)</Line>
                </Paragraph>
                <Line>Combining these results:</Line>
                <Paragraph>
                    <List />
                    <Line>Con(T) ↔ Con(T ∪ &#123;G&#125;)</Line>
                </Paragraph>
            </Paragraph>
            <Heading>Explanation</Heading>
            <Paragraph>
                The Second Transductive Consistency Theorem establishes that transducing the Gödel sentence G preserves the
                consistency of theory T. This stands in contrast to transducing ¬G, which leads to inconsistency.
            </Paragraph>
            <Paragraph>
                Together with the Transductive Dichotomy Lemma and the First Transductive Consistency Theorem, this result
                reveals an important asymmetry in how Gödel sentences behave under transduction, directly tied to the
                sentence's special relationship with the unprovability property it encodes.
            </Paragraph>
            <Heading>The Transduction Theorem</Heading>
            <Paragraph>
                Let A be a transduction algorithm that extends theories while preserving consistency. If T is a consistent
                theory and G is its Gödel sentence, then A must transduce G rather than ¬G.
            </Paragraph>
            <Heading>Proof</Heading>
            <Paragraph>
                <List ordered />
                <Line>From the First Transductive Consistency Theorem, we know:</Line>
                <Paragraph>
                    <List />
                    <Line>T ∪ &#123;¬G&#125; ⊢ 0=1 (transducing ¬G leads to inconsistency)</Line>
                </Paragraph>
                <Line>From the Second Transductive Consistency Theorem, we know:</Line>
                <Paragraph>
                    <List />
                    <Line>Con(T) ↔ Con(T ∪ &#123;G&#125;) (transducing G preserves consistency)</Line>
                </Paragraph>
                <Line>If A aims to preserve consistency, then:</Line>
                <Paragraph>
                    <List />
                    <Line>A cannot transduce ¬G (as this would create an inconsistent theory)</Line>
                    <Line>A can safely transduce G (as this preserves consistency)</Line>
                </Paragraph>
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
                This theorem demonstrates that consistency-preserving transduction is not arbitrary when dealing with Gödel
                sentences. Any algorithm designed to extend theories while preserving consistency must make a specific
                choice when faced with Gödel sentences - it must accept the sentence and reject its negation.
            </Paragraph>
            <Paragraph>
                This reveals a deep connection between consistency preservation and the special properties of the Gödel
                sentence. While the Gödel sentence is undecidable in T, the requirement of consistency preservation forces a
                specific choice in how theories can be extended with respect to this sentence.
            </Paragraph>
        </Section>
    </Chapter>
);
