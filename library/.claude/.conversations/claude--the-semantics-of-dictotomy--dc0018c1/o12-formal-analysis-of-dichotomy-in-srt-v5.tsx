import { Bold, Chapter, Heading, Line, List, Paragraph, Section, Title, Word } from '@dna-platform/public';
import { CodeBox, Opaque, Verbatim } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Formal Analysis of Dichotomy in SRT v5 ]]</Title>
        <Section>
            <Opaque />
            <Heading>Formal Analysis of Dichotomy in SRT at version 5</Heading>
            <Heading>Formal Analysis of Dichotomy in SRT</Heading>
            <Heading>Frame Context: F&#91;d&#93;</Heading>
            <Paragraph>When analyzing dichotomy, we operate in frame F&#91;d&#93; where:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`@ == d                     // Frame type is dichotomy
x => y transpiles to x =d> y`}
            </CodeBox>
            <Heading>Canonical Symbol Analysis</Heading>
            <Heading>Question: Is d its own canonical symbol?</Heading>
            <Paragraph>
                From SRT: <Word>
                    <Verbatim />
                    (x) =(x)&gt; x
                </Word> means (x) is the canonical symbol for x.
            </Paragraph>
            <Paragraph>For dichotomy:</Paragraph>
            <CodeBox>
                {`d == (d,m)                 // d equals the most specific relationship`}
            </CodeBox>
            <Paragraph>If d has a canonical symbol (d):</Paragraph>
            <CodeBox>
                {`(d) =(d)> d                // Would mean the symbol represents dichotomy
But d == (d,m)             // So (d) =(d)> (d,m)?`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    Issue
                </Word>: This creates ambiguity. Is (d) a symbol or is d already symbolic?
            </Paragraph>
            <Heading>Resolution Attempt 1: d as Symbol</Heading>
            <Paragraph>
                If d is already a symbol (like sym in <Word>
                    <Verbatim />
                    sym =sym&gt; lit
                </Word>):
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}d =d> [d]                  // d represents literal dichotomy
[d] is the actual property of being dichotomous`}
            </CodeBox>
            <Paragraph>
                But then <Word>
                    <Verbatim />
                    d == (d,m)
                </Word> means the symbol equals a relationship, which seems mixed.
            </Paragraph>
            <Heading>Inheritance Analysis</Heading>
            <Heading>Current Claims:</Heading>
            <CodeBox>
                {`temp -> m                  // temperature inherits from monotony
(h,c) -> d                 // (hot,cold) inherits from dichotomy
m -> eq                    // Does monotony inherit from equality?`}
            </CodeBox>
            <Heading>Testing m -&gt; eq:</Heading>
            <Paragraph>
                From SRT: <Word>
                    <Verbatim />
                    eq =eq&gt; eq
                </Word> shows equality is self-referential. Monotony <Word>
                    <Verbatim />
                    m == d|m
                </Word> is undifferentiated union.
            </Paragraph>
            <Paragraph>Does undifferentiation imply equality? In frame F&#91;r&#93;:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`x =m> x might mean x has no internal distinction
x =eq> x means x equals itself`}
            </CodeBox>
            <Paragraph>These aren't the same. Monotony is about lack of distinction, not identity.</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Conclusion
                </Word>: <Word>
                    <Verbatim />
                    m !-&gt; eq
                </Word> (monotony doesn't inherit from equality)
            </Paragraph>
            <Heading>Representation vs Symbolism</Heading>
            <Heading>The Key SRT Rule:</Heading>
            <CodeBox
                language="srt"
            >
                {`If (x,y) == x, then x is a symbol for y
x =x> y means x represents y`}
            </CodeBox>
            <Heading>Applied to Dichotomy:</Heading>
            <CodeBox>
                {`d == (d,m)                 // d IS the most specific relationship`}
            </CodeBox>
            <Paragraph>
                This is different from <Word>
                    <Verbatim />
                    sym == (sym,lit)
                </Word> because:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>In symbolism: sym is the relationship between sym and lit</Line>
                <Line>In dichotomy: d is the relationship between d and m</Line>
            </Paragraph>
            <Paragraph>
                But d appears on both sides! This is <Word>
                    <Bold />
                    self-referential
                </Word> in a way that symbolism isn't.
            </Paragraph>
            <Heading>The Parallel Structures:</Heading>
            <CodeBox
                language="srt"
            >
                {`sym =sym> lit              // symbol represents literal through symbolization
d =(d,m)> m                // Since d == (d,m), dichotomy relates to monotony through itself`}
            </CodeBox>
            <Paragraph>This means d is simultaneously:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>A pole of the dichotomy</Line>
                <Line>The relationship between the poles</Line>
                <Line>The type of relationship</Line>
            </Paragraph>
            <Heading>Consequences in Frame F&#91;d&#93;</Heading>
            <Heading>If we're in F&#91;d&#93;, then:</Heading>
            <CodeBox
                language="srt"
            >
                {`@ == d
x => y transpiles to x =d> y
(x) is the canonical of x in the dichotomy frame`}
            </CodeBox>
            <Heading>What does this mean for m?</Heading>
            <CodeBox
                language="srt"
            >
                {`m => m transpiles to m =d> m
But m == (!d), so:
(!d) =d> (!d)              // Not-dichotomy relates to itself through dichotomy`}
            </CodeBox>
            <Paragraph>
                This is paradoxical but meaningful: monotony's self-relation is mediated by the very distinction it lacks!
            </Paragraph>
            <Heading>Canonical Values in F&#91;d&#93;:</Heading>
            <CodeBox>
                {`${''}(m) in F[d] = ?            // What is the canonical of monotony in the dichotomy frame?`}
            </CodeBox>
            <Paragraph>If m == (!d) and m == d|m:</Paragraph>
            <CodeBox>
                {`(m) might be the canonical symbol for the undifferentiated state
(d) might be the canonical symbol for distinction itself`}
            </CodeBox>
            <Heading>Key Insight:</Heading>
            <Paragraph>
                In F&#91;d&#93;, everything is viewed through the lens of distinction vs non-distinction. Even monotony is
                understood as "that which lacks distinction" - defined by what it's not.
            </Paragraph>
        </Section>
    </Chapter>
);
