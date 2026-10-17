import { Bold, Chapter, Emphasis, Heading, Paragraph, Section, Title, Word } from '@dna-platform/public';
import { CodeBox, Opaque } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Additional Candidate Axioms for Semantic Reference Theory v3 ]]</Title>
        <Section>
            <Opaque />
            <Heading>Additional Candidate Axioms for Semantic Reference Theory at version 3</Heading>
            <Heading>Additional Candidate Axioms for Semantic Reference Theory</Heading>
            <Heading>Axiom 6: The Root of Subjectivity</Heading>
            <CodeBox
                language="srt"
            >
                {`${''}A[x,y,t]: x =t> y & x != y =|> (x,x) -> t`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Emphasis />
                    When a subject relates to an object, the subject's self-relationship inherits from that relationship.
                </Word>
            </Paragraph>
            <Heading>Axiom 7: The Representation of Relationship</Heading>
            <CodeBox
                language="srt"
            >
                {`x => y =|> (x,y) =(x,y)> x & (x,y) =(x,y)> y`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Emphasis />
                    Every relationship represents both its subject and its object through itself.
                </Word>
            </Paragraph>
            <Heading>The Representative Representation Theorem</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Statement
                </Word>: If subjects are symbolic (where (x,x) == x), then inheritance implies representation.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Formal Expression
                </Word>:
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`(x,x) == x =|> (x -> y <=> x =y> y)`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    Semantic Purpose
                </Word>: This theorem unifies inheritance and representation for symbolic entities. When something inherits
                from a type, it becomes a representative of that type. Representations represent what they inherit from.
            </Paragraph>
            <Heading>Derivation</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Given
                </Word>: x =y&gt; y where x != y (x represents y)
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    By Axiom 6
                </Word>: (x,x) -&gt; y
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    If symbolic
                </Word>: (x,x) == x
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Therefore
                </Word>: x -&gt; y
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Conversely, if
                </Word>: x -&gt; y and (x,x) == x
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Then
                </Word>: x =x&gt; y (by the nature of symbolic inheritance)
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    But also
                </Word>: x =y&gt; y (as y is what x inherits from)
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    QED
                </Word>: For symbolic subjects, inheritance and representation are equivalent.
            </Paragraph>
            <Heading>Semantic Achievement</Heading>
            <Paragraph>
                This reveals why "I love soda" transforms the subject: I inherit from love, becoming a lover. The
                awkwardness of "soda is loved by me" arises because it artificially reverses the natural flow where subjects
                inherit from their relationships. Passive voice creates a virtual relationship that obscures the fundamental
                subject-object-relationship pattern.
            </Paragraph>
        </Section>
    </Chapter>
);
