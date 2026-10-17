import { Bold, Chapter, Heading, Line, List, Paragraph, Section, Title, Word } from '@dna-platform/public';
import { CodeBox, Opaque, Verbatim } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Semantic Structure of Dichotomy in SRT v25 ]]</Title>
        <Section>
            <Opaque />
            <Heading>Semantic Structure of Dichotomy in SRT at version 25</Heading>
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
            <Paragraph>
                Given that (d) == m, the membership relations have implications. Both d and m have monotony before
                distinction occurs:
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`d =m> d
m =m> m`}
            </CodeBox>
            <Paragraph>
                The first states that d has monotony, while the second states that m has monotony - it is monotonous. Both
                start in the monotonous state.
            </Paragraph>
            <Paragraph>The act of distinction then creates different properties:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`d =d> d
m !=d> m`}
            </CodeBox>
            <Paragraph>
                Here d becomes dichotomous while m remains not dichotomous. Since d == (d,m), the expression d =d&gt; d
                means dichotomy relates to itself through the very relationship it embodies.
            </Paragraph>
            <Paragraph>Through m == (!d), monotony represents itself as not-dichotomy:</Paragraph>
            <CodeBox>
                {`m =(!d)> m`}
            </CodeBox>
            <Heading>Dichotomous Operators and Their Semantics</Heading>
            <Paragraph>
                The analysis of dichotomy introduces three logical operators that apply specifically to dichotomous
                relationships: negation (!), union (|), and intersection (&amp;). These operators require proper semantic
                grounding.
            </Paragraph>
            <Heading>The Canonical Inheritance</Heading>
            <Paragraph>First, note that d is the canonical of (d), which means:</Paragraph>
            <CodeBox>
                {`d =(d)> (d)`}
            </CodeBox>
            <Paragraph>
                where <Word>
                    <Verbatim />
                    (d,(d)) == (d)
                </Word>. This expresses inheritance between d and its canonical symbol.
            </Paragraph>
            <Heading>Requirements for Operators</Heading>
            <Paragraph>For the negation operator !x to be well-defined, we require:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`x =d> x`}
            </CodeBox>
            <Paragraph>
                This states that x must be part of a dichotomy. Similarly, for the binary operators x&amp;y and x|y to make
                sense, both elements must be dichotomous:
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`x =d> x
y =d> y`}
            </CodeBox>
            <Heading>The Specific Dichotomous Relationships</Heading>
            <Paragraph>When x and y form a dichotomy, we have two possible orderings that inherit differently:</Paragraph>
            <CodeBox>
                {`(x,y) -> d
(y,x) -> (!d) == m`}
            </CodeBox>
            <Paragraph>
                The first ordering inherits from dichotomy, while the second inherits from not-dichotomy, which is monotony.
                This asymmetry reflects that one ordering is canonical.
            </Paragraph>
            <Paragraph>The general dichotomous relationships become specific:</Paragraph>
            <CodeBox>
                {`x =(x,y)> x
y =(y,x)> y`}
            </CodeBox>
            <Paragraph>Here x relates to itself through its relationship with y, and vice versa.</Paragraph>
            <Heading>Objects and Dichotomous Properties</Heading>
            <Paragraph>For an object o to have a dichotomous property, it must first be monotonous:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`o =m> o`}
            </CodeBox>
            <Paragraph>
                But this isn't sufficient. The object must be in one of two mutually exclusive states, expressed as:
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`o =x> o || o =y> o`}
            </CodeBox>
            <Paragraph>The exclusive or captures that the object must be exactly one - not both, not neither.</Paragraph>
            <Heading>The Semantic Meaning of Operators</Heading>
            <Paragraph>Given this structure, the operators have specific meanings:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Negation (!x)
                </Word>: When x is part of dichotomy (x,y), then !x equals y. The negation creates the other pole. Since
                dichotomies are exhaustive, not being x means being y.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Union (x|y)
                </Word>: The union collapses the distinction, returning to the monotonous state. If (x,y) -&gt; d, then
                (x|y) -&gt; m. The union represents the undifferentiated property before the dichotomy is applied.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Intersection (x&amp;y)
                </Word>: The intersection of dichotomous opposites creates impossibility. Since x and y are mutually
                exclusive, (x&amp;y) -&gt; im. Nothing can be both poles simultaneously.
            </Paragraph>
            <Paragraph>
                These operators aren't arbitrary logical operations but emerge from the semantic structure of dichotomy
                itself. They only make sense within the context of a proper dichotomy where mutual exclusion and exhaustion
                are guaranteed.
            </Paragraph>
            <Heading>Structural Consequences</Heading>
            <Paragraph>The union and intersection of dichotomy and monotony have specific behaviors:</Paragraph>
            <CodeBox>
                {`(d|m) -> m
(d&m) -> im`}
            </CodeBox>
            <Paragraph>
                The union inherits from monotony because the combination of distinction and non-distinction is itself
                undifferentiated. The intersection inherits from impossibility because nothing can simultaneously have and
                lack distinction.
            </Paragraph>
            <Heading>Impossibility as Canonical Absence</Heading>
            <Paragraph>
                Impossibility has its own semantic structure. It represents a canonical impossible object:
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}im =im> [im]
[im] =[im]> t
A[x,y]: x !=t> y`}
            </CodeBox>
            <Paragraph>
                First, im represents its canonical &#91;im&#93;. This canonical has some type t. But universally, nothing
                has type t - it's an empty type. The canonical &#91;im&#93; exists semantically - we can discuss it - but
                has no instances.
            </Paragraph>
            <Paragraph>Applied to our dichotomy:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}d&m -> im
A[x]: x !=im> x`}
            </CodeBox>
            <Paragraph>Being both dichotomous and monotonous is impossible. Nothing can have this property.</Paragraph>
            <Heading>Application: Temperature as Dichotomy</Heading>
            <Paragraph>To validate this structure, consider temperature with hot, cold, and temperature itself:</Paragraph>
            <CodeBox>
                {`h := hot
c := cold
temp := temperature`}
            </CodeBox>
            <Paragraph>Temperature instantiates the pattern:</Paragraph>
            <CodeBox>
                {`temp == (h|c)
c == (!h)
(h,c) -> d`}
            </CodeBox>
            <Paragraph>
                Temperature is the monotony - the undifferentiated union. Cold is not-hot when h is taken as canonical. The
                pair forms a dichotomy.
            </Paragraph>
            <Heading>Objects and Temperature</Heading>
            <Paragraph>For objects with temperature, at the monotonic level an object has temperature:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`obj =temp> obj`}
            </CodeBox>
            <Paragraph>At the dichotomous level, it must be hot or cold:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`obj =h> obj || obj =c> obj`}
            </CodeBox>
            <Paragraph>These are equivalent through inheritance. Hot and cold inherit from temperature:</Paragraph>
            <CodeBox>
                {`h -> temp
c -> temp`}
            </CodeBox>
            <Paragraph>Therefore if an object is hot, it has temperature:</Paragraph>
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
                {`${''}(h,c) =(h,c)> temp
temp =temp> [h|c]`}
            </CodeBox>
            <Paragraph>
                The pair represents temperature through itself, while temperature represents the literal state of being hot
                or cold.
            </Paragraph>
            <Heading>The Key Difference</Heading>
            <Paragraph>
                Unlike d/m, where dichotomy is its own relationship and monotony is defined through negation:
            </Paragraph>
            <CodeBox>
                {`d == (d,m)
m == (!d)`}
            </CodeBox>
            <Paragraph>For h/c, hot is not the dichotomy itself, and the dichotomy points to something else:</Paragraph>
            <CodeBox>
                {`(h,c) != h
(h,c) represents temp`}
            </CodeBox>
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
