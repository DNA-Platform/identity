import { Bold, Chapter, Heading, Line, List, Paragraph, Section, Title, Word } from '@dna-platform/public';
import { CodeBox, Opaque, Verbatim } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Semantic Structure of Dichotomy in SRT v14 ]]</Title>
        <Section>
            <Opaque />
            <Heading>Semantic Structure of Dichotomy in SRT at version 14</Heading>
            <Heading>The Semantics of Dichotomy: The (Dichotomy) Dichotomy</Heading>
            <Heading>Definitions</Heading>
            <Paragraph>We begin by establishing our fundamental terms:</Paragraph>
            <CodeBox>
                {`d := dichotomy
m := monotony  
im := impossibility`}
            </CodeBox>
            <Paragraph>
                These three concepts form the semantic foundation for understanding how distinction emerges from and returns
                to uniformity.
            </Paragraph>
            <Heading>The Core Structure of Dichotomy and Monotony</Heading>
            <Heading>The Fundamental Identities</Heading>
            <Paragraph>
                The relationship between dichotomy and monotony rests on two essential identities. First, monotony IS the
                negation of dichotomy:
            </Paragraph>
            <CodeBox>
                {`m == (!d)`}
            </CodeBox>
            <Paragraph>
                This isn't merely saying monotony lacks dichotomy - it means monotony literally equals the symbol (!d). It's
                defined by the absence of distinction.
            </Paragraph>
            <Paragraph>Second, dichotomy IS the most specific relationship between dichotomy and monotony:</Paragraph>
            <CodeBox>
                {`d == (d,m)`}
            </CodeBox>
            <Paragraph>
                This remarkable self-reference means that dichotomy equals the very relationship that distinguishes
                dichotomy from monotony. The concept exemplifies itself - it IS what it DOES.
            </Paragraph>
            <Heading>The Canonical Relationship</Heading>
            <Paragraph>
                In SRT, canonical symbols make abstract concepts graspable through privileged examples. For dichotomy:
            </Paragraph>
            <CodeBox>
                {`(d) == m`}
            </CodeBox>
            <Paragraph>
                The canonical symbol for dichotomy IS monotony. But this reveals something deeper. Since <Word>
                    <Verbatim />
                    (d) == m
                </Word>, we can derive:
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`m =m> d where (m,d) == m`}
            </CodeBox>
            <Paragraph>
                Monotony represents dichotomy through itself, and monotony is the most specific relationship between
                monotony and dichotomy. Notice that m is the subject - monotony does the representing.
            </Paragraph>
            <Paragraph>
                This captures why the canonical must be monotony: when we talk about "dichotomy" as a subject matter, we're
                discussing ONE thing - a single concept. To discuss dichotomy as a subject requires symbolizing it as a
                unity. The moment we perform dichotomy (splitting into two), we're no longer talking ABOUT it but DOING it.
            </Paragraph>
            <Heading>Membership and Qualification</Heading>
            <Paragraph>Both dichotomy and monotony are members of their own dichotomy:</Paragraph>
            <CodeBox>
                {`d =(d)> d    // d is part of dichotomy
m =(d)> m    // m is part of dichotomy`}
            </CodeBox>
            <Paragraph>
                For d, since <Word>
                    <Verbatim />
                    d == (d,m)
                </Word>, this becomes <Word>
                    <Verbatim />
                    d =(d,m)&gt; d
                </Word> - dichotomy relates to itself through its relationship with monotony.
            </Paragraph>
            <Paragraph>
                Given that <Word>
                    <Verbatim />
                    (d) == m
                </Word>, these membership relations imply:
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`d =m> d      // d has monotony (before distinction)
m =m> m      // m has monotony (is monotonous)`}
            </CodeBox>
            <Paragraph>Both start in the monotonous state - distinction hasn't occurred yet.</Paragraph>
            <Heading>The Property of Distinction</Heading>
            <Paragraph>The act of distinction creates different properties:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`d =d> d      // d is dichotomous
m !=d> m     // m is not dichotomous`}
            </CodeBox>
            <Paragraph>
                Since <Word>
                    <Verbatim />
                    d == (d,m)
                </Word>, the first equation means <Word>
                    <Verbatim />
                    d =(d,m)&gt; d
                </Word> - dichotomy relates to itself through the very distinction it creates. It's self-exemplifying.
            </Paragraph>
            <Paragraph>
                Through the identity <Word>
                    <Verbatim />
                    m == (!d)
                </Word>, monotony represents itself as not-dichotomy:
            </Paragraph>
            <CodeBox>
                {`m =(!d)> m   // m represents itself as not-dichotomy`}
            </CodeBox>
            <Heading>Structural Relationships</Heading>
            <Paragraph>The union and intersection create important derived relationships:</Paragraph>
            <CodeBox>
                {`(d|m) -> m   // The union inherits from monotony
(d&m) -> im  // The intersection inherits from impossibility`}
            </CodeBox>
            <Paragraph>
                The union of distinction and non-distinction is itself undifferentiated - it collapses back to monotony.
                Their intersection creates impossibility - one cannot simultaneously have and lack distinction.
            </Paragraph>
            <Heading>Negation Rules in Dichotomy</Heading>
            <Paragraph>With d as the canonical pole:</Paragraph>
            <CodeBox>
                {`!!d == d     // Double negation returns to canonical
c == (!h)    // In hot/cold, cold equals not-hot
!m is non-canonical  // Use d instead of !m`}
            </CodeBox>
            <Paragraph>
                You can only negate the canonical form. Since <Word>
                    <Verbatim />
                    m == (!d)
                </Word>, writing !m would create !!d, which just equals d.
            </Paragraph>
            <Heading>The Nature of Impossibility</Heading>
            <Paragraph>Impossibility represents a canonical impossible object:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}im =im> [im]
[im] =[im]> t
A[x,y]: x !=t> y`}
            </CodeBox>
            <Paragraph>
                The canonical &#91;im&#93; has a type t that nothing can instantiate. We can talk about impossibility - it
                exists semantically - but nothing can have it as a property:
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}d&m -> im
A[x]: x !=im> x`}
            </CodeBox>
            <Paragraph>Being both dichotomous and monotonous is impossible.</Paragraph>
            <Heading>Application to Temperature</Heading>
            <Paragraph>Let's apply this abstract structure to temperature:</Paragraph>
            <CodeBox>
                {`h := hot
c := cold  
temp := temperature`}
            </CodeBox>
            <Heading>Temperature's Fundamental Structure</Heading>
            <Paragraph>Temperature is the monotony:</Paragraph>
            <CodeBox>
                {`temp == (h|c)    // temperature IS the undifferentiated union
c == (!h)        // cold IS not-hot (with h as canonical)
(h,c) -> d       // the pair forms a dichotomy`}
            </CodeBox>
            <Heading>Property Relationships for Objects</Heading>
            <Paragraph>At the monotonic level:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`obj =temp> obj        // obj has temperature
obj =(h|c)> obj       // obj is in the temperature state`}
            </CodeBox>
            <Paragraph>At the dichotomous level:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`obj =h> obj <iff> obj !=c> obj    // hot if and only if not cold
obj =c> obj <iff> obj !=h> obj    // cold if and only if not hot
obj =(!h)> obj <iff> obj =c> obj  // not-hot equals cold`}
            </CodeBox>
            <Heading>The Complete Equivalence</Heading>
            <Paragraph>These three expressions are equivalent:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`obj =temp> obj <iff> obj =h> obj || obj =c> obj <iff> obj =(h|c)> obj`}
            </CodeBox>
            <Paragraph>
                An object has temperature if and only if it's hot or cold if and only if it's in the temperature state.
            </Paragraph>
            <Heading>Inheritance Enables Reduction</Heading>
            <Paragraph>The specific values inherit from the general property:</Paragraph>
            <CodeBox>
                {`h -> temp
c -> temp`}
            </CodeBox>
            <Paragraph>Therefore:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`obj =h> obj =|> obj =temp> obj
obj =c> obj =|> obj =temp> obj`}
            </CodeBox>
            <Paragraph>The specific implies the general through inheritance.</Paragraph>
            <Heading>Representation Relationships</Heading>
            <Paragraph>The dichotomy represents temperature:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}(h,c) =(h,c)> temp    // The pair represents temperature through itself
temp =temp> [h|c]     // Temperature represents the literal state`}
            </CodeBox>
            <Paragraph>Here &#91;h|c&#93; is the literal, undifferentiated state that temperature points to.</Paragraph>
            <Heading>Key Difference from d/m</Heading>
            <Paragraph>The d/m dichotomy is self-referential:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Verbatim />
                        d == (d,m)
                    </Word> - dichotomy IS the relationship
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        m == (!d)
                    </Word> - monotony IS not-dichotomy
                </Line>
            </Paragraph>
            <Paragraph>The h/c dichotomy is about something else:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Verbatim />
                        (h,c) != h
                    </Word> - hot is not the dichotomy
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        (h,c) != c
                    </Word> - cold is not the dichotomy
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        (h,c) =(h,c)&gt; temp
                    </Word> - the dichotomy represents temperature
                </Line>
            </Paragraph>
            <Heading>The Self-Describing Nature</Heading>
            <Paragraph>What makes the dichotomy dichotomy unique is its complete self-reference:</Paragraph>
            <CodeBox>
                {`d == (d,m)     // dichotomy IS its relationship with monotony
m == (!d)      // monotony IS not-dichotomy
(d) == m       // the canonical of dichotomy IS monotony`}
            </CodeBox>
            <Paragraph>
                When dichotomy represents itself through dichotomy, it says "dichotomy is the relationship that creates
                distinction." That relationship is precisely what relates d to m. The concept and its instance coincide.
            </Paragraph>
            <Paragraph>
                The fact that <Word>
                    <Verbatim />
                    (d) == m
                </Word> reveals why dichotomy as a subject must be monotonous. Subjects are singular. When we say "let's
                discuss dichotomy," we're talking about ONE concept. The performance of dichotomy creates two, but the
                subject of dichotomy is one.
            </Paragraph>
            <Heading>The Meta-Pattern</Heading>
            <Paragraph>This structure reveals how meaning emerges from distinction itself:</Paragraph>
            <CodeBox>
                {`Before distinction: m (undifferentiated potential)
The act: d (creating distinction)  
The result: (d,m) (the dichotomy itself)
The impossible: d&m (contradiction)`}
            </CodeBox>
            <Paragraph>This pattern appears throughout semantics:</Paragraph>
            <Paragraph>
                <List />
                <Line>Signal emerges from noise</Line>
                <Line>Figure emerges from ground</Line>
                <Line>Being emerges from non-being</Line>
            </Paragraph>
            <Paragraph>
                In each case, we understand one through the other, and the distinction itself becomes meaningful. The
                dichotomy dichotomy shows this isn't just a pattern but the foundational semantic operation from which all
                meaning emerges.
            </Paragraph>
            <Heading>Implications for Semantic Theory</Heading>
            <Paragraph>The dichotomy/monotony structure demonstrates that meaning requires both:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Unity
                    </Word> (m) - the ground from which distinction emerges
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Distinction
                    </Word> (d) - the operation that creates meaning
                </Line>
            </Paragraph>
            <Paragraph>
                Neither can exist without the other. Monotony without the possibility of dichotomy is meaningless void.
                Dichotomy without monotony has nothing to distinguish. Together, they form the minimum semantic machinery
                for meaning itself.
            </Paragraph>
            <Paragraph>
                The self-exemplifying nature of <Word>
                    <Verbatim />
                    d == (d,m)
                </Word> shows that some concepts can only be understood through self-reference. Like consciousness knowing
                itself or language describing itself, dichotomy distinguishing itself from non-distinction is both the
                example and the principle, both the map and the territory.
            </Paragraph>
        </Section>
    </Chapter>
);
