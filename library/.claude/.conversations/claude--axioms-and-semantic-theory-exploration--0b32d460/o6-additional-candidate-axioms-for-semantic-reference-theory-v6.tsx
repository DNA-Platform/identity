import { Bold, Chapter, Emphasis, Heading, Paragraph, Section, Title, Word } from '@dna-platform/public';
import { CodeBox, Opaque } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Additional Candidate Axioms for Semantic Reference Theory v6 ]]</Title>
        <Section>
            <Opaque />
            <Heading>Additional Candidate Axioms for Semantic Reference Theory at version 6</Heading>
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
                </Word>: If x represents y, then x is a representative of y.
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
                {`${''}A[x,y]: x =x> y =|> x =y> y`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    Semantic Purpose
                </Word>: This theorem establishes that representatives (things that represent) are themselves
                representations of what they represent. When x represents y, x becomes a y-representation.
            </Paragraph>
            <Heading>Proof</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Given
                </Word>: x =x&gt; y (x represents y)
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    By Axiom 6
                </Word>: Since x =x&gt; y, we have (x,x) -&gt; x
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Also by representation
                </Word>: (x,x) -&gt; y
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    For symbolic entities
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
                    By definition
                </Word>: x -&gt; y means x =y&gt; y
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    QED
                </Word>: x =x&gt; y =|&gt; x =y&gt; y
            </Paragraph>
            <Heading>Relationship to Inheritance</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Definition
                </Word>:
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`x -> y := x =y> y  (when x != y)`}
            </CodeBox>
            <Paragraph>
                When x inherits from y, x is a representative of y. This creates the fundamental connection: inheritance IS
                representation for distinct entities.
            </Paragraph>
            <Heading>Semantic Achievement</Heading>
            <Paragraph>
                This reveals why representations represent their types: when x represents y through x =x&gt; y, then x must
                also be a y-representation (x =y&gt; y). Representatives carry the identity of what they represent, making
                inheritance and representation two faces of the same semantic structure.
            </Paragraph>
        </Section>
    </Chapter>
);
