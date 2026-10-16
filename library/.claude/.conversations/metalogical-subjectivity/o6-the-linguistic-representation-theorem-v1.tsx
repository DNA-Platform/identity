import { Bold, Chapter, Heading, Line, List, Paragraph, Section, Title, Word } from '@dna-platform/public';
import { Opaque } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ The Linguistic Representation Theorem v1 ]]</Title>
        <Section>
            <Opaque />
            <Heading>The Linguistic Representation Theorem at version 1</Heading>
            <Heading>The Linguistic Representation Theorem</Heading>
            <Heading>Statement of the Theorem</Heading>
            <Paragraph>
                Let T be any recursively enumerable formal theory whose language contains enough expressive power to
                represent basic arithmetic operations and relations. Then:
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    There exists an effective encoding function g (Gödel numbering) that maps each symbol, formula, and
                    proof in T to a unique natural number.
                </Line>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    For any syntactic relation R between expressions in T, there exists a corresponding arithmetical
                    relation R' such that R holds between expressions e₁, e₂, ..., eₙ if and only if R' holds between their
                    Gödel numbers g(e₁), g(e₂), ..., g(eₙ).
                </Line>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    In particular, there exists a formula Prov_T(x) in the language of T such that for any formula φ of T:
                </Line>
                <Paragraph>
                    <List />
                    <Line>Prov_T(⌜φ⌝) is true if and only if φ is provable in T</Line>
                    <Line>
                        If T is consistent and extends Robinson arithmetic, then whenever φ is provable in T, T ⊢
                        Prov_T(⌜φ⌝)
                    </Line>
                </Paragraph>
            </Paragraph>
            <Heading>Explanation</Heading>
            <Paragraph>
                The Linguistic Representation Theorem establishes that any sufficiently expressive recursively enumerable
                theory can represent its own syntax and provability within itself. This remarkable capability arises from
                the power of Gödel numbering, which creates a correspondence between the linguistic expressions of a formal
                system and natural numbers.
            </Paragraph>
            <Paragraph>
                The encoding method uses prime factorization to capture the complete structure of formal expressions:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Each basic symbol is assigned a unique prime number</Line>
                <Line>The ordering of symbols is preserved through exponentiation</Line>
                <Line>Nested structures are represented through recursive factorization</Line>
            </Paragraph>
            <Paragraph>
                This encoding transforms syntactic properties and relations into arithmetical ones, allowing the theory to
                "talk about" its own formulas and proofs. The provability predicate Prov_T(x) is particularly significant,
                as it allows the theory to express statements about what it can and cannot prove.
            </Paragraph>
            <Heading>Implications</Heading>
            <Paragraph>
                This theorem has profound implications for mathematical logic and the foundations of mathematics:
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Self-Reference
                    </Word>: It enables the construction of self-referential statements within formal systems, including the
                    famous Gödel sentence G that asserts its own unprovability.
                </Line>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Incompleteness
                    </Word>: It leads directly to Gödel's Incompleteness Theorems, showing that any consistent, recursively
                    axiomatizable theory extending Robinson arithmetic must be incomplete.
                </Line>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Transduction Guidance
                    </Word>: As established in the Transduction Theorems, it provides a foundation for making principled
                    choices when extending theories with undecidable statements.
                </Line>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Representability
                    </Word>: It demonstrates that meta-mathematical concepts like provability, consistency, and truth (to a
                    limited extent) can be represented within the theory itself.
                </Line>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Universality
                    </Word>: It applies to a wide range of formal systems, not just arithmetic, provided they have
                    sufficient expressive power.
                </Line>
            </Paragraph>
            <Heading>Historical Context</Heading>
            <Paragraph>
                While Gödel first developed this encoding technique in his 1931 paper on incompleteness, the full power and
                generality of the representation method has been refined and extended by subsequent work in mathematical
                logic. The theorem crystallizes these developments into a general principle about the representational
                capabilities of formal systems.
            </Paragraph>
            <Paragraph>
                This ability of formal systems to represent their own syntax and provability is one of the most profound
                discoveries in the foundations of mathematics, revealing deep connections between syntax, arithmetic, and
                meta-mathematics.
            </Paragraph>
        </Section>
    </Chapter>
);
