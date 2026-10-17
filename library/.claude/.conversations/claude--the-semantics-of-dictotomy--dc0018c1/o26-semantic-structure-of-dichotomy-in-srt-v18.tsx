import { Chapter, Heading, Line, List, Paragraph, Section, Title } from '@dna-platform/public';
import { CodeBox, Opaque } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Semantic Structure of Dichotomy in SRT v18 ]]</Title>
        <Section>
            <Opaque />
            <Heading>Semantic Structure of Dichotomy in SRT at version 18</Heading>
            <Heading>The Semantics of Dichotomy: The (Dichotomy) Dichotomy</Heading>
            <Heading>Introduction</Heading>
            <Paragraph>
                A dichotomy is a type of relationship - one that divides a domain into two mutually exclusive and exhaustive
                parts. But what happens when we make dichotomy itself the subject of analysis? This document presents a
                representation of the meaning of dichotomy as a dichotomy.
            </Paragraph>
            <Paragraph>
                What is dichotomy in a dichotomy with? We propose monotony - the absence of distinction - as the natural
                counterpart. Together, dichotomy and monotony form a self-describing semantic structure where the concept of
                distinction is itself distinguished from non-distinction.
            </Paragraph>
            <Heading>Definitions</Heading>
            <CodeBox>
                {`d := dichotomy
m := monotony  
im := impossibility`}
            </CodeBox>
            <Heading>The Subject of Dichotomy</Heading>
            <Paragraph>
                When we discuss dichotomy, we need to represent it as a subject - a single conceptual entity we can
                reference and analyze. Not all referents participate in this subject, only those that are part of the
                dichotomy relationship itself.
            </Paragraph>
            <Paragraph>
                The two referents that participate are d and m. Their membership in the subject of dichotomy is expressed
                through:
            </Paragraph>
            <CodeBox>
                {`d =(d)> d
m =(d)> m`}
            </CodeBox>
            <Paragraph>
                These state that d is part of the subject of dichotomy, and m is part of the subject of dichotomy. Here (d)
                represents the subject of dichotomy - the conceptual unity that encompasses both distinction and
                non-distinction.
            </Paragraph>
            <Heading>The Symbol for Dichotomy</Heading>
            <Paragraph>
                The notation (d) means the canonical symbol for dichotomy. By the rules of SRT, the symbol represents
                dichotomy:
            </Paragraph>
            <CodeBox>
                {`(d) =(d)> d`}
            </CodeBox>
            <Paragraph>
                But a symbol for a dichotomous relationship faces a unique challenge: it must represent a two-part structure
                as one thing. How do we express the idea of a symbol that unifies a dichotomy?
            </Paragraph>
            <Paragraph>Our answer is that dichotomy, as a relationship, has this structure:</Paragraph>
            <CodeBox>
                {`d == (d,m)`}
            </CodeBox>
            <Paragraph>
                Dichotomy equals the most specific relationship between itself and monotony. It's self-referential - the
                concept is what it describes.
            </Paragraph>
            <Paragraph>For the symbol to represent this unified concept:</Paragraph>
            <CodeBox>
                {`(d) == m`}
            </CodeBox>
            <Paragraph>The canonical symbol for dichotomy is monotony.</Paragraph>
            <Heading>Why Monotony Symbolizes Dichotomy</Heading>
            <Paragraph>
                Monotony serves as the symbol that unifies the two parts of the dichotomy. In this specific case, monotony
                represents the conceptual unity of the relationship (d,m). Before distinction occurs, there is only monotony
                - the undifferentiated state from which dichotomy emerges.
            </Paragraph>
            <Paragraph>This creates a profound semantic structure. Monotony symbolizes dichotomy because:</Paragraph>
            <Paragraph>
                <List />
                <Line>To speak of dichotomy as a subject requires treating it as one thing</Line>
                <Line>That one thing is the undifferentiated state before distinction</Line>
                <Line>Monotony is precisely this undifferentiated unity</Line>
            </Paragraph>
            <Paragraph>Since (d) == m, we can derive:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`m =m> d where (m,d) == m`}
            </CodeBox>
            <Paragraph>
                Monotony represents dichotomy through itself, and monotony is the most specific relationship between
                monotony and dichotomy. In the symbolic representation, m is the subject - it's what does the representing.
            </Paragraph>
            <Heading>The Complete Identity Structure</Heading>
            <Paragraph>Beyond being the canonical symbol, monotony has another identity - it is not-dichotomy:</Paragraph>
            <CodeBox>
                {`m == (!d)`}
            </CodeBox>
            <Paragraph>This gives monotony a double characterization:</Paragraph>
            <Paragraph>
                <List />
                <Line>As the symbol for the concept of dichotomy (through (d) == m)</Line>
                <Line>As the negation of dichotomy (through m == (!d))</Line>
            </Paragraph>
            <Paragraph>
                These aren't contradictory but complementary. The symbol for distinction is non-distinction. We understand
                dichotomy through what it's not.
            </Paragraph>
            <Heading>Properties and Qualification</Heading>
            <Paragraph>Given that (d) == m, the membership relations have implications:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`d =m> d    // d has monotony (before distinction)
m =m> m    // m has monotony (is monotonous)`}
            </CodeBox>
            <Paragraph>Both start in the monotonous state. The act of distinction then creates:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`d =d> d    // d becomes dichotomous
m !=d> m   // m remains not dichotomous`}
            </CodeBox>
            <Paragraph>
                Since d == (d,m), the expression d =d&gt; d means dichotomy relates to itself through the very relationship
                it embodies. Through m == (!d), monotony represents itself as not-dichotomy:
            </Paragraph>
            <CodeBox>
                {`m =(!d)> m    // m represents itself through negation`}
            </CodeBox>
            <Heading>Structural Consequences</Heading>
            <Paragraph>The union and intersection of dichotomy and monotony have specific behaviors:</Paragraph>
            <CodeBox>
                {`(d|m) -> m    // The union inherits from monotony
(d&m) -> im   // The intersection inherits from impossibility`}
            </CodeBox>
            <Paragraph>
                The union collapses to monotony because the combination of distinction and non-distinction is itself
                undifferentiated. The intersection creates impossibility because nothing can simultaneously have and lack
                distinction.
            </Paragraph>
            <Heading>Impossibility as Canonical Absence</Heading>
            <Paragraph>Impossibility has its own semantic structure:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}im =im> [im]           // im represents a canonical
[im] =[im]> t          // The canonical has type t
A[x,y]: x !=t> y       // Nothing has type t`}
            </CodeBox>
            <Paragraph>
                The canonical &#91;im&#93; exists semantically - we can discuss it - but has no instances. Applied to our
                dichotomy:
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}d&m -> im              // Being both d and m is impossible
A[x]: x !=im> x        // Nothing can be impossible`}
            </CodeBox>
            <Heading>Application: Temperature as Dichotomy</Heading>
            <Paragraph>To validate this structure, consider temperature:</Paragraph>
            <CodeBox>
                {`h := hot
c := cold
temp := temperature`}
            </CodeBox>
            <Paragraph>Temperature instantiates the pattern:</Paragraph>
            <CodeBox>
                {`temp == (h|c)          // Temperature is the monotony
c == (!h)              // Cold is not-hot (h as canonical)
(h,c) -> d             // The pair forms a dichotomy`}
            </CodeBox>
            <Heading>Objects and Temperature</Heading>
            <Paragraph>For objects with temperature:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`obj =temp> obj         // Has temperature (monotonic)
obj =h> obj || obj =c> obj    // Is hot or cold (dichotomous)`}
            </CodeBox>
            <Paragraph>These are equivalent through the inheritance:</Paragraph>
            <CodeBox>
                {`h -> temp              // Hot inherits from temperature
c -> temp              // Cold inherits from temperature`}
            </CodeBox>
            <Paragraph>Therefore:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`obj =h> obj =|> obj =temp> obj`}
            </CodeBox>
            <Heading>Representation Structure</Heading>
            <Paragraph>The dichotomy represents temperature:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}(h,c) =(h,c)> temp     // The pair represents temperature
temp =temp> [h|c]      // Temperature represents the literal state`}
            </CodeBox>
            <Heading>The Key Difference</Heading>
            <Paragraph>Unlike d/m, where:</Paragraph>
            <Paragraph>
                <List />
                <Line>d == (d,m) - dichotomy is its own relationship</Line>
                <Line>m == (!d) - monotony is defined through negation</Line>
            </Paragraph>
            <Paragraph>For h/c:</Paragraph>
            <Paragraph>
                <List />
                <Line>(h,c) != h - hot is not the dichotomy itself</Line>
                <Line>(h,c) represents temp - the dichotomy points to something else</Line>
            </Paragraph>
            <Paragraph>
                The d/m dichotomy is self-exemplifying; h/c instantiates the pattern for an external property.
            </Paragraph>
            <Heading>The Semantic Foundation</Heading>
            <Paragraph>
                This analysis reveals that dichotomy and monotony form the minimal semantic machinery for distinction
                itself. Neither can exist without the other:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Monotony without dichotomy is meaningless void</Line>
                <Line>Dichotomy without monotony has no ground from which to emerge</Line>
                <Line>Together they enable the fundamental operation of creating meaning through distinction</Line>
            </Paragraph>
            <Paragraph>
                The self-referential nature of d == (d,m) demonstrates that some concepts can only be understood through
                self-exemplification. Like consciousness knowing itself or language describing language, dichotomy
                distinguishing itself from non-distinction is simultaneously the principle and its own primary example.
            </Paragraph>
        </Section>
    </Chapter>
);
