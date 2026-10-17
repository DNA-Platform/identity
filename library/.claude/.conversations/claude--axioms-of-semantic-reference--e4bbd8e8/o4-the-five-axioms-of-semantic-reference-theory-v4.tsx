import { Chapter, Emphasis, Heading, Paragraph, Section, Title, Word } from '@dna-platform/public';
import { CodeBox, Opaque } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ The Five Axioms of Semantic Reference Theory v4 ]]</Title>
        <Section>
            <Opaque />
            <Heading>The Five Axioms of Semantic Reference Theory at version 4</Heading>
            <Heading>Five Candidate Axioms for Semantic Reference Theory</Heading>
            <Heading>Axiom 1: The Root of Universality</Heading>
            <CodeBox
                language="srt"
            >
                {`${''}E[r]:A[x,y,t]: x =t> y =|> x =r> y`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Emphasis />
                    There exists a universal relationship r such that all relationship types inherit from it.
                </Word>
            </Paragraph>
            <Heading>Syntactic Definition</Heading>
            <CodeBox
                language="srt"
            >
                {`def(x => y): x =r> y`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Emphasis />
                    Untyped reference: x relates to y through the universal relationship.
                </Word>
            </Paragraph>
            <Heading>Axiom 2: The Root of Specification</Heading>
            <CodeBox
                language="srt"
            >
                {`${''}x => y =|> E[s]: x =s> y =|> x =t> y =|> x' =s> y' =|> x' =t> y'`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Emphasis />
                    Every related pair has a most specific relationship that implies all their other relationships.
                </Word>
            </Paragraph>
            <Heading>Syntactic Definition</Heading>
            <CodeBox
                language="srt"
            >
                {`def((x,y)): the unique s such that x =s> y and (x =t> y =|> x' =s> y' =|> x' =t> y')`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Emphasis />
                    Most specific relationship: the unique relationship s between x and y such that any pair having s must have all relationships that x and y have.
                </Word>
            </Paragraph>
            <Heading>Axiom 3: The Root of Directionality</Heading>
            <CodeBox
                language="srt"
            >
                {`A{s,t}: x =s> y =|> x =t> y =||> x =t> y !=|> x =s> y`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Emphasis />
                    Distinct relationships cannot mutually imply each other - the inheritance hierarchy is directed.
                </Word>
            </Paragraph>
            <Heading>Axiom 4: The Root of Canonicity</Heading>
            <CodeBox
                language="srt"
            >
                {`${''}x =y> y =|> (x,y) == y | E[y']: (x,y') == y' & y' =y> y`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Emphasis />
                    Representation is local - to represent y, you must be directly connected to y or through exactly one intermediary. Representatives are canonical.
                </Word>
            </Paragraph>
            <Heading>Syntactic Definitions</Heading>
            <CodeBox
                language="srt"
            >
                {`def(x > y): (x,y) == y
def(x -> y): x == y | x =y> y`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Emphasis />
                    Direct inheritance (x &gt; y): the most specific relationship IS y itself.
                </Word> <Word>
                    <Emphasis />
                    General inheritance (x -&gt; y): either identity or representation through the chain structure.
                </Word>
            </Paragraph>
            <Heading>Axiom 5: The Root of Representation</Heading>
            <CodeBox
                language="srt"
            >
                {`(y,x) == y =|> (x,y) == x`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Emphasis />
                    If y is a direct representative of x, then x is a direct representation of y - but not conversely. Symbolization and representation are asymmetric.
                </Word>
            </Paragraph>
        </Section>
    </Chapter>
);
