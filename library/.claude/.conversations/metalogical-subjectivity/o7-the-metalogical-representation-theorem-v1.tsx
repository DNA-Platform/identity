import { Bold, Chapter, Heading, Line, List, Paragraph, Section, Title, Word } from '@dna-platform/public';
import { Opaque } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ The Metalogical Representation Theorem v1 ]]</Title>
        <Section>
            <Opaque />
            <Heading>The Metalogical Representation Theorem at version 1</Heading>
            <Heading>The Metalogical Representation Theorem</Heading>
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
                    <Line>Other metalogical properties of S, such as consistency and satisfiability</Line>
                </Paragraph>
                <Line>
                    In particular, T can represent its own metalogical properties, including statements about what it can
                    and cannot prove.
                </Line>
            </Paragraph>
            <Paragraph>
                This capability allows T to internalize metalogical reasoning that would normally be conducted in the
                metatheory, bringing it into the object language itself.
            </Paragraph>
            <Heading>Statement of the Theorem</Heading>
            <Paragraph>
                Let T be any recursively enumerable formal theory whose language contains enough expressive power to
                represent basic arithmetic operations and recursive functions. Then:
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
            <Paragraph>
                <List ordered />
                <Line>
                    In particular, T can express its own provability predicate Prov_T(x), allowing T to make statements
                    about what it can and cannot prove within itself.
                </Line>
            </Paragraph>
            <Heading>Explanation</Heading>
            <Paragraph>
                The Metalogical Representation Theorem establishes that any sufficiently expressive recursively enumerable
                theory can represent not just its own syntax and provability, but the syntax and provability of any
                recursively enumerable formal system. This remarkable capability arises from the power of Gödel numbering,
                which creates a correspondence between the linguistic expressions of a formal system and natural numbers.
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
                "talk about" formulas and proofs in any recursively enumerable formal system. The provability predicate
                Prov_S(x) is particularly significant, as it allows the theory to express statements about what can and
                cannot be proven in any given system S.
            </Paragraph>
            <Paragraph>
                The theorem demonstrates a form of universality analogous to the universality of Turing machines. Just as a
                universal Turing machine can simulate any other Turing machine when given its description, a theory with
                metalogical universality can represent reasoning about any recursively enumerable formal system, including
                itself.
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
                        Logical Expressiveness
                    </Word>: It establishes a threshold of expressiveness beyond which theories gain the universal power to
                    represent metalogical concepts within their object language.
                </Line>
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
                        Definability of Truth
                    </Word>: While theories with metalogical universality can represent provability, Tarski's Undefinability
                    Theorem shows they cannot define a general truth predicate for all their formulas, revealing an
                    important limitation.
                </Line>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Universality Threshold
                    </Word>: It identifies a critical threshold in the hierarchy of formal systems—once a system can
                    represent basic arithmetic and recursive functions, it gains this universal representational capability.
                </Line>
            </Paragraph>
            <Heading>Historical Context and Citations</Heading>
            <Paragraph>
                The foundations for this theorem were established in Gödel's groundbreaking 1931 paper "Über formal
                unentscheidbare Sätze der Principia Mathematica und verwandter Systeme I" (Gödel, 1931), where he introduced
                the technique of Gödel numbering to prove his incompleteness theorems. Gödel demonstrated that Peano
                Arithmetic could represent its own syntax and provability relation.
            </Paragraph>
            <Paragraph>
                The general formulation of representability for recursive relations and functions was further developed by
                Kleene (1943) in his work on recursive predicates and quantifiers. Kleene established important
                representability results that showed how arithmetic could express a wide range of computable functions and
                relations.
            </Paragraph>
            <Paragraph>
                Tarski, Mostowski, and Robinson (1953) provided a systematic treatment of definability and undefinability in
                formal systems, establishing precise conditions under which metalogical properties could be represented
                within formal theories.
            </Paragraph>
            <Paragraph>
                The connection to computability theory and the analogy with universal Turing machines was explored by Kleene
                (1952) and further developed by Rogers (1967) in his comprehensive work on recursive functions.
            </Paragraph>
            <Paragraph>
                The full implications of these representability results were elaborated in subsequent decades, with
                significant contributions from Feferman (1960) on arithmetization of metamathematics, Smullyan (1992) in his
                work on recursive function theory and Gödel's theorems, and Boolos (1993) in his analysis of the logic of
                provability.
            </Paragraph>
            <Heading>References</Heading>
            <Paragraph>
                <List ordered />
                <Line>
                    Gödel, K. (1931). Über formal unentscheidbare Sätze der Principia Mathematica und verwandter Systeme I.
                    Monatshefte für Mathematik und Physik, 38, 173-198.
                </Line>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    Kleene, S.C. (1943). Recursive predicates and quantifiers. Transactions of the American Mathematical
                    Society, 53(1), 41-73.
                </Line>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Kleene, S.C. (1952). Introduction to Metamathematics. Amsterdam: North-Holland.</Line>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    Tarski, A., Mostowski, A., &amp; Robinson, R.M. (1953). Undecidable Theories. Amsterdam: North-Holland.
                </Line>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    Feferman, S. (1960). Arithmetization of metamathematics in a general setting. Fundamenta Mathematicae,
                    49(1), 35-92.
                </Line>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    Rogers, H. (1967). Theory of Recursive Functions and Effective Computability. New York: McGraw-Hill.
                </Line>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Smullyan, R.M. (1992). Gödel's Incompleteness Theorems. Oxford: Oxford University Press.</Line>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Boolos, G. (1993). The Logic of Provability. Cambridge: Cambridge University Press.</Line>
            </Paragraph>
        </Section>
    </Chapter>
);
