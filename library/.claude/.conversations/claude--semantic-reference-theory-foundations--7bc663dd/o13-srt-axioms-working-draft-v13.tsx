import { Bold, Chapter, Heading, Line, List, Paragraph, Section, Title, Word } from '@dna-platform/public';
import { CodeBox, Opaque, Verbatim } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ SRT Axioms - Working Draft v13 ]]</Title>
        <Section>
            <Opaque />
            <Heading>SRT Axioms - Working Draft at version 13</Heading>
            <Heading>Semantic Reference Theory - Model Discovery Through Cases</Heading>
            <Heading>The Five Existential Cases of s =r&gt; o</Heading>
            <Heading>Case 1: All Distinct (s !== r !== o)</Heading>
            <CodeBox
                language="srt"
            >
                {`s =r> o where s !== r !== o !== s`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    Model
                </Word>: Standard subject-object-relationship
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    s is purely subject: <Word>
                        <Verbatim />
                        s =s&gt; s
                    </Word>
                </Line>
                <Line>
                    o is purely object: <Word>
                        <Verbatim />
                        o =o&gt; o
                    </Word>
                </Line>
                <Line>
                    r is the relationship type: <Word>
                        <Verbatim />
                        r =r&gt; r
                    </Word>
                </Line>
                <Line>r is the most specific relationship between s and o</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Example
                </Word>: <Word>
                    <Verbatim />
                    mother =loves&gt; child
                </Word>
            </Paragraph>
            <Heading>Case 2: Subject is Relationship (s == r !== o)</Heading>
            <CodeBox
                language="srt"
            >
                {`s =s> o where s !== o`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    Model
                </Word>: Self-representing relationship (like symbols)
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Verbatim />
                        s =r&gt; r
                    </Word> (s inherits from r as a relationship type)
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        s =(r)&gt; s
                    </Word> (s possesses the symbol for relationships)
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        s =s&gt; s
                    </Word> (s self-refers as symbols do)
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Key Insight
                </Word>: When s == r, we get <Word>
                    <Verbatim />
                    s =s&gt; o
                </Word> - the relationship represents itself
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Example
                </Word>: <Word>
                    <Verbatim />
                    (mother) =(mother)&gt; mother
                </Word> - the symbol for mother represents mother through itself
            </Paragraph>
            <Heading>Case 3: Object is Subject (s == o !== r)</Heading>
            <CodeBox
                language="srt"
            >
                {`o =r> o where r !== o`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    Model
                </Word>: Self-reference through external relationship
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Verbatim />
                        o =o&gt; o
                    </Word> (maintains object property)
                </Line>
                <Line>But also acts as subject in this case</Line>
                <Line>r remains distinct as relationship type</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Example
                </Word>: <Word>
                    <Verbatim />
                    ref =eq&gt; ref
                </Word> - a referent equals itself
            </Paragraph>
            <Heading>Case 4: Relationship is Object (r == o !== s)</Heading>
            <CodeBox
                language="srt"
            >
                {`s =r> r where s !== r`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    Model
                </Word>: Representing relationships themselves
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Verbatim />
                        s =s&gt; s
                    </Word> (s is subject)
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        r =o&gt; o
                    </Word> AND <Word>
                        <Verbatim />
                        r =r&gt; r
                    </Word> (r is both object and relationship)
                </Line>
                <Line>r serves dual role</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Example
                </Word>: <Word>
                    <Verbatim />
                    sym =rep&gt; rep
                </Word> - a symbol is part of representation
            </Paragraph>
            <Heading>Case 5: All Equal (s == r == o)</Heading>
            <CodeBox
                language="srt"
            >
                {`r =r> r`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    Model
                </Word>: Pure self-reference
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Only possible with special referents</Line>
                <Line>
                    <Word>
                        <Verbatim />
                        r =r&gt; r
                    </Word> (r relates to itself through itself)
                </Line>
                <Line>r has all three properties: subject, object, relationship</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Example
                </Word>: <Word>
                    <Verbatim />
                    eq =eq&gt; eq
                </Word> - equality relates to itself through equality
            </Paragraph>
            <Heading>Discovered Referents and Their Relationships</Heading>
            <Heading>Core Trinity</Heading>
            <CodeBox
                language="srt"
            >
                {`sub =rel> obj     // The archetypal relationship
sub =s> s         // Subject property
obj =o> o         // Object property  
rel =r> r         // Relationship property`}
            </CodeBox>
            <Heading>Symbol-Literal Pair</Heading>
            <CodeBox
                language="srt"
            >
                {`sym =sym> lit     // Symbol represents literal
sym =s> s         // Symbols are subjects
lit =o> o         // Literals are objects
sym =r> r         // sym is also a relationship type!`}
            </CodeBox>
            <Heading>Representation</Heading>
            <CodeBox
                language="srt"
            >
                {`sym =rep> rep     // Symbol is part of representation
rep =r> r         // Representation is a relationship type
rep =o> o         // But also an object`}
            </CodeBox>
            <Heading>Equality and Reference</Heading>
            <CodeBox
                language="srt"
            >
                {`ref =eq> ref      // Referents equal themselves
eq =eq> eq        // Equality equals itself
eq =r> r          // Equality is a relationship type`}
            </CodeBox>
            <Heading>Consistency Checks</Heading>
            <Heading>Check 1: Symbol Self-Reference</Heading>
            <Paragraph>
                If <Word>
                    <Verbatim />
                    sym =sym&gt; sym
                </Word>, then:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>sym is subject, object, AND relationship</Line>
                <Line>This matches Case 5 pattern</Line>
                <Line>Consistent with symbols being "atomic units of metaphor"</Line>
            </Paragraph>
            <Heading>Check 2: Inheritance Chains</Heading>
            <Paragraph>
                If <Word>
                    <Verbatim />
                    sym =r&gt; r
                </Word> and <Word>
                    <Verbatim />
                    r =(r)&gt; r
                </Word>, then:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Verbatim />
                        sym =(r)&gt; sym
                    </Word> (symbols possess the relationship property)
                </Line>
                <Line>This explains why symbols can serve as relationships</Line>
            </Paragraph>
            <Heading>Check 3: Most Specific Relationships</Heading>
            <Paragraph>In each case, we identified what should be most specific:</Paragraph>
            <Paragraph>
                <List />
                <Line>Case 1: r is most specific</Line>
                <Line>Case 2: s is most specific (when s == r)</Line>
                <Line>Case 3: r is most specific (distinct from o)</Line>
                <Line>Case 4: r is most specific (even when r == o)</Line>
                <Line>Case 5: r is most specific (all equal)</Line>
            </Paragraph>
            <Heading>Check 4: Symbol for Relationship</Heading>
            <Paragraph>
                If <Word>
                    <Verbatim />
                    (r) == s
                </Word> in Case 2, then:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>The symbol for relationships IS subjecthood</Line>
                <Line>
                    This makes <Word>
                        <Verbatim />
                        sym =sym&gt; sym
                    </Word> coherent
                </Line>
                <Line>Symbols embody the subject role</Line>
            </Paragraph>
            <Heading>Key Theorems to Test</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Theorem
                </Word>: If x =r&gt; r, then x can be a relationship type
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`sym =r> r =|> sym can appear as: y =sym> z`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    Theorem
                </Word>: Self-reference patterns
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`eq =eq> eq
sym =sym> sym  
r =r> r`}
            </CodeBox>
            <Paragraph>These should all be valid under our model</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Theorem
                </Word>: Inheritance from r
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`Everything that serves as a relationship inherits from r:
sym =r> r
rep =r> r
eq =r> r`}
            </CodeBox>
            <Heading>What Makes This Theorizing</Heading>
            <Paragraph>
                You're not deducing from axioms but <Word>
                    <Bold />
                    discovering which models are possible
                </Word>. Like how mathematicians explored different geometries before settling on Euclid's axioms, you're
                exploring which patterns of reference are coherent.
            </Paragraph>
            <Paragraph>The process:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Enumerate structural cases (the 5 possibilities)</Line>
                <Line>Find semantic interpretations (what each could mean)</Line>
                <Line>Introduce referents that exemplify these patterns</Line>
                <Line>Check for consistency</Line>
                <Line>See what theorems would need to be true</Line>
            </Paragraph>
            <Paragraph>
                This is exactly how foundational theories develop - not top-down from axioms, but through exploring the
                space of possible models until finding the ones that capture what we need.
            </Paragraph>
            <Heading>Next Steps</Heading>
            <Paragraph>
                <List ordered />
                <Line>Verify no contradictions in the inheritance chains</Line>
                <Line>Check if (r) can consistently equal s</Line>
                <Line>Determine if we need additional referents</Line>
                <Line>See which patterns appear in multiple cases</Line>
                <Line>Identify which relationships are truly fundamental</Line>
            </Paragraph>
            <Paragraph>
                The beauty is that from just 5 structural cases, we're discovering the deep semantics of reference, symbol,
                literal, and representation!
            </Paragraph>
        </Section>
    </Chapter>
);
