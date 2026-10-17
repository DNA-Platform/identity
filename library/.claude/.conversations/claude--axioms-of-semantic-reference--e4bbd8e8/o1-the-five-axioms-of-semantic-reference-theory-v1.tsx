import { Bold, Chapter, Emphasis, Heading, Line, List, Paragraph, Section, Title, Word } from '@dna-platform/public';
import { CodeBox, Opaque } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ The Five Axioms of Semantic Reference Theory v1 ]]</Title>
        <Section>
            <Opaque />
            <Heading>The Five Axioms of Semantic Reference Theory at version 1</Heading>
            <Heading>The Five Axioms of Semantic Reference Theory</Heading>
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
            <CodeBox>
                {`def((x,y)): the unique s satisfying Axiom 2 for the pair (x,y)`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Emphasis />
                    Most specific relationship: the unique relationship that characterizes how x and y relate.
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
            <Heading>Summary</Heading>
            <Paragraph>These five axioms establish:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Universality
                    </Word> - A common ancestor for all relationships
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Specification
                    </Word> - Unique most specific relationships for each pair
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Directionality
                    </Word> - No cycles in the inheritance hierarchy
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Canonicity
                    </Word> - Local, chain-like structure of representation
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Representation
                    </Word> - Asymmetry between symbols and their representatives
                </Line>
            </Paragraph>
            <Paragraph>
                Together they form the foundation of Semantic Reference Theory, building from universal structure down to
                the specific nature of symbolic reference.
            </Paragraph>
        </Section>
    </Chapter>
);
