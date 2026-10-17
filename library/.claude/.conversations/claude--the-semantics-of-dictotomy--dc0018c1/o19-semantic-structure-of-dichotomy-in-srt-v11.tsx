import { Chapter, Heading, Line, List, Paragraph, Section, Title, Word } from '@dna-platform/public';
import { Opaque, Verbatim } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Semantic Structure of Dichotomy in SRT v11 ]]</Title>
        <Section>
            <Opaque />
            <Heading>Semantic Structure of Dichotomy in SRT at version 11</Heading>
            <Heading>The Semantics of Dichotomy: The (Dichotomy) Dichotomy</Heading>
            <Heading>Definitions</Heading>
            <Paragraph>We begin with three fundamental concepts:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Verbatim />
                        d := dichotomy
                    </Word> - the property of distinction or separation
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        m := monotony
                    </Word> - the property of uniformity or non-distinction
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        im := impossibility
                    </Word> - the property of contradiction
                </Line>
            </Paragraph>
            <Heading>The Core Structure of Dichotomy and Monotony</Heading>
            <Heading>The Fundamental Identities</Heading>
            <Paragraph>
                The relationship between dichotomy and monotony rests on two essential identities. First, monotony IS the
                negation of dichotomy:
            </Paragraph>
            <Paragraph>
                <Word>
                    <Verbatim />
                    m == (!d)
                </Word>
            </Paragraph>
            <Paragraph>
                This means monotony literally equals "not-dichotomy" - it's defined by the absence of distinction. Second,
                dichotomy IS the most specific relationship between dichotomy and monotony:
            </Paragraph>
            <Paragraph>
                <Word>
                    <Verbatim />
                    d == (d,m)
                </Word>
            </Paragraph>
            <Paragraph>
                This remarkable self-reference means that dichotomy equals the very relationship that distinguishes
                dichotomy from monotony. The concept exemplifies itself.
            </Paragraph>
            <Heading>The Canonical Relationship</Heading>
            <Paragraph>In SRT, canonical symbols make abstract concepts graspable. For dichotomy, we have:</Paragraph>
            <Paragraph>
                <Word>
                    <Verbatim />
                    (d) == m
                </Word>
            </Paragraph>
            <Paragraph>
                The canonical symbol for dichotomy IS monotony. This captures a deep semantic truth: we understand
                distinction only through its absence, just as we understand signal through noise or being through non-being.
            </Paragraph>
            <Heading>Membership in the Dichotomy</Heading>
            <Paragraph>
                Both dichotomy and monotony are members of their own dichotomy. For dichotomy, we have <Word>
                    <Verbatim />
                    d =(d)&gt; d
                </Word>, which through the identity <Word>
                    <Verbatim />
                    d == (d,m)
                </Word> means dichotomy relates to itself through its own relationship with monotony. For monotony, we have
                <Word>
                    <Verbatim />
                    m =(d)&gt; m
                </Word>, expressing that monotony is part of the dichotomy.
            </Paragraph>
            <Paragraph>
                Since <Word>
                    <Verbatim />
                    (d) == m
                </Word>, these membership relations imply deeper properties. We get <Word>
                    <Verbatim />
                    d =m&gt; d
                </Word>, meaning dichotomy has the property of monotony before distinction occurs. Similarly, <Word>
                    <Verbatim />
                    m =m&gt; m
                </Word> means monotony is monotonous - it has its own property.
            </Paragraph>
            <Heading>The Property of Distinction</Heading>
            <Paragraph>
                While both d and m start in monotony, the act of distinction creates different properties. Dichotomy becomes
                dichotomous through <Word>
                    <Verbatim />
                    d =d&gt; d
                </Word>, which given <Word>
                    <Verbatim />
                    d == (d,m)
                </Word> means dichotomy relates to itself through the very distinction it creates.
            </Paragraph>
            <Paragraph>
                Monotony, however, lacks this property of distinction: <Word>
                    <Verbatim />
                    m !=d&gt; m
                </Word>. Since <Word>
                    <Verbatim />
                    m == (!d)
                </Word>, monotony represents itself as not-dichotomy through <Word>
                    <Verbatim />
                    m =(!d)&gt; m
                </Word>.
            </Paragraph>
            <Heading>Structural Relationships</Heading>
            <Paragraph>The union of dichotomy and monotony inherits from monotony:</Paragraph>
            <Paragraph>
                <Word>
                    <Verbatim />
                    (d|m) -&gt; m
                </Word>
            </Paragraph>
            <Paragraph>
                This makes sense - the undifferentiated union of distinction and non-distinction is itself undifferentiated.
                Their intersection creates impossibility:
            </Paragraph>
            <Paragraph>
                <Word>
                    <Verbatim />
                    (d&amp;m) -&gt; im
                </Word>
            </Paragraph>
            <Paragraph>
                One cannot simultaneously have and lack distinction. This contradiction defines impossibility.
            </Paragraph>
            <Heading>Negation Rules</Heading>
            <Paragraph>With d as the canonical pole of the dichotomy, double negation returns to the canonical:</Paragraph>
            <Paragraph>
                <Word>
                    <Verbatim />
                    !!d == d
                </Word>
            </Paragraph>
            <Paragraph>
                However, negating the non-canonical pole would be non-canonical. We don't write <Word>
                    <Verbatim />
                    !m
                </Word> but use <Word>
                    <Verbatim />
                    d
                </Word> instead.
            </Paragraph>
            <Heading>The Nature of Impossibility</Heading>
            <Paragraph>
                Impossibility has its own semantic structure. It represents a canonical impossible object:
            </Paragraph>
            <Paragraph>
                <Word>
                    <Verbatim />
                    im =im&gt; &#91;im&#93;
                </Word>
            </Paragraph>
            <Paragraph>
                This canonical has a type that nothing can instantiate. If <Word>
                    <Verbatim />
                    &#91;im&#93; =&#91;im&#93;&gt; t
                </Word> for some type t, then universally <Word>
                    <Verbatim />
                    A&#91;x,y&#93;: x !=t&gt; y
                </Word>. Nothing has type t - it's an empty type that exists semantically but has no instances.
            </Paragraph>
            <Paragraph>
                When applied to our dichotomy, <Word>
                    <Verbatim />
                    d&amp;m -&gt; im
                </Word> means being both dichotomous and monotonous is impossible. The property itself exists - we can talk
                about it - but nothing can have it: <Word>
                    <Verbatim />
                    A&#91;x&#93;: x !=im&gt; x
                </Word>.
            </Paragraph>
            <Heading>Application to Temperature</Heading>
            <Paragraph>Let's apply this abstract structure to the concrete dichotomy of temperature, using:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Verbatim />
                        h := hot
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        c := cold
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        temp := temperature
                    </Word>
                </Line>
            </Paragraph>
            <Heading>Temperature's Fundamental Structure</Heading>
            <Paragraph>Temperature is the monotony - the undifferentiated property:</Paragraph>
            <Paragraph>
                <Word>
                    <Verbatim />
                    temp == (h|c)
                </Word>
            </Paragraph>
            <Paragraph>Cold IS the negation of hot when hot is taken as canonical:</Paragraph>
            <Paragraph>
                <Word>
                    <Verbatim />
                    c == (!h)
                </Word>
            </Paragraph>
            <Paragraph>
                The pair of hot and cold forms a dichotomy that inherits from our abstract dichotomy type:
            </Paragraph>
            <Paragraph>
                <Word>
                    <Verbatim />
                    (h,c) -&gt; d
                </Word>
            </Paragraph>
            <Heading>How Objects Have Temperature</Heading>
            <Paragraph>
                At the monotonic level, an object has temperature through <Word>
                    <Verbatim />
                    obj =temp&gt; obj
                </Word>, which is equivalent to <Word>
                    <Verbatim />
                    obj =(h|c)&gt; obj
                </Word> - the object is in the undifferentiated temperature state.
            </Paragraph>
            <Paragraph>
                At the dichotomous level, the object must be either hot or cold. We have <Word>
                    <Verbatim />
                    obj =h&gt; obj
                </Word> if and only if <Word>
                    <Verbatim />
                    obj !=c&gt; obj
                </Word>. Similarly, <Word>
                    <Verbatim />
                    obj =c&gt; obj
                </Word> if and only if <Word>
                    <Verbatim />
                    obj !=h&gt; obj
                </Word>. The equivalence <Word>
                    <Verbatim />
                    obj =(!h)&gt; obj
                </Word> if and only if <Word>
                    <Verbatim />
                    obj =c&gt; obj
                </Word> shows how negation creates the other pole.
            </Paragraph>
            <Heading>The Complete Temperature Equivalence</Heading>
            <Paragraph>These three expressions are equivalent:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Verbatim />
                        obj =temp&gt; obj
                    </Word> - the object has temperature
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        obj =h&gt; obj || obj =c&gt; obj
                    </Word> - the object is hot or cold
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        obj =(h|c)&gt; obj
                    </Word> - the object is in the temperature state
                </Line>
            </Paragraph>
            <Heading>Inheritance in Temperature</Heading>
            <Paragraph>The specific values inherit from the general property:</Paragraph>
            <Paragraph>
                <Word>
                    <Verbatim />
                    h -&gt; temp
                </Word> and <Word>
                    <Verbatim />
                    c -&gt; temp
                </Word>
            </Paragraph>
            <Paragraph>
                This inheritance enables the reduction we want. If <Word>
                    <Verbatim />
                    obj =h&gt; obj
                </Word>, then by inheritance <Word>
                    <Verbatim />
                    obj =temp&gt; obj
                </Word>. The specific implies the general.
            </Paragraph>
            <Heading>Representation Relationships</Heading>
            <Paragraph>The dichotomy represents temperature through itself:</Paragraph>
            <Paragraph>
                <Word>
                    <Verbatim />
                    (h,c) =(h,c)&gt; temp
                </Word>
            </Paragraph>
            <Paragraph>Temperature in turn represents the literal state of being hot or cold:</Paragraph>
            <Paragraph>
                <Word>
                    <Verbatim />
                    temp =temp&gt; &#91;h|c&#93;
                </Word>
            </Paragraph>
            <Paragraph>
                Here <Word>
                    <Verbatim />
                    &#91;h|c&#93;
                </Word> is the literal, undifferentiated state that temperature points to.
            </Paragraph>
            <Heading>The Self-Describing Nature of the Dichotomy Dichotomy</Heading>
            <Paragraph>
                What makes the d/m dichotomy unique is its complete self-reference. Since <Word>
                    <Verbatim />
                    d == (d,m)
                </Word>, dichotomy IS its own most specific relationship with monotony. Since <Word>
                    <Verbatim />
                    m == (!d)
                </Word>, monotony IS precisely not-dichotomy. This creates a structure that completely describes itself.
            </Paragraph>
            <Paragraph>
                When dichotomy represents itself through dichotomy (given that <Word>
                    <Verbatim />
                    d == (d,m)
                </Word>), it's saying "dichotomy is the relationship that creates distinction." That relationship is
                precisely what relates dichotomy to monotony. The concept and its instance coincide.
            </Paragraph>
            <Paragraph>
                This differs fundamentally from concrete dichotomies like hot/cold. There, the values (hot, cold) are
                distinct from their dichotomy <Word>
                    <Verbatim />
                    (h,c)
                </Word>. The dichotomy represents something else (temperature). The structure instantiates rather than
                exemplifies the d/m pattern.
            </Paragraph>
            <Heading>Implications for Semantic Theory</Heading>
            <Paragraph>
                The dichotomy/monotony structure reveals how meaning emerges from distinction itself. Before distinction,
                there is only monotony - undifferentiated potential. The act of distinction creates both dichotomy (the
                principle of separation) and makes monotony visible as the ground from which distinction emerged.
            </Paragraph>
            <Paragraph>This pattern appears throughout semantics:</Paragraph>
            <Paragraph>
                <List />
                <Line>Signal/noise</Line>
                <Line>Figure/ground</Line>
                <Line>Being/non-being</Line>
                <Line>Presence/absence</Line>
            </Paragraph>
            <Paragraph>
                In each case, we understand one through the other, and the distinction itself becomes meaningful. The
                dichotomy dichotomy shows this isn't just a pattern but the foundational semantic operation from which all
                meaning emerges.
            </Paragraph>
        </Section>
    </Chapter>
);
