import { Bold, Chapter, Heading, Line, List, Paragraph, Section, Title, Word } from '@dna-platform/public';
import { CodeBox, Opaque, Verbatim } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ SRT Model Testing - Theorems and Proofs v10 ]]</Title>
        <Section>
            <Opaque />
            <Heading>SRT Model Testing - Theorems and Proofs at version 10</Heading>
            <Heading>SRT Theory Building - Rigorous Iteration</Heading>
            <Heading>Starting Point: Your Semantic Model</Heading>
            <Heading>Given Relationships</Heading>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Verbatim />
                        sub =rel&gt; obj
                    </Word> (Case 1: all distinct)
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        sym =sym&gt; lit
                    </Word> (Case 2: s == r)
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        ref =eq&gt; ref
                    </Word> (Case 3: s == o)
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        sym =rep&gt; rep
                    </Word> (Case 4: r == o)
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        eq =eq&gt; eq
                    </Word> (Case 5: all equal)
                </Line>
            </Paragraph>
            <Heading>Deriving Facts from These</Heading>
            <Heading>
                From <Word>
                    <Verbatim />
                    sym =sym&gt; lit
                </Word>:
            </Heading>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Verbatim />
                        sym =sub&gt; sym
                    </Word> (sym has subjecthood property)
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        lit =obj&gt; lit
                    </Word> (lit has objecthood property)
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        sym =rel&gt; rel
                    </Word> (sym is a relationship type)
                </Line>
            </Paragraph>
            <Heading>Testing Symbol Possession</Heading>
            <Paragraph>
                If <Word>
                    <Verbatim />
                    sym =rel&gt; rel
                </Word>, and we have the principle that <Word>
                    <Verbatim />
                    x =rel&gt; y =|&gt; x =(y)&gt; x
                </Word>:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Verbatim />
                        sym =(rel)&gt; sym
                    </Word>
                </Line>
            </Paragraph>
            <Paragraph>But what IS (rel)? We need to figure this out!</Paragraph>
            <Heading>Attempt 1: Minimal Axioms</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    A1
                </Word>: <Word>
                    <Verbatim />
                    E&#91;eq&#93;: A&#91;x,y&#93;: x = y &lt;iff&gt; x =eq&gt; y
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    A2
                </Word>: <Word>
                    <Verbatim />
                    E&#91;sub,rel,obj&#93;: sub =rel&gt; obj &amp; sub !== rel &amp; rel !== obj &amp; obj !== sub
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    A3
                </Word>: <Word>
                    <Verbatim />
                    E&#91;sym,lit&#93;: sym =sym&gt; lit &amp; sym !== lit
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    A4
                </Word>: <Word>
                    <Verbatim />
                    E&#91;ref&#93;: ref =eq&gt; ref
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    A5
                </Word>: <Word>
                    <Verbatim />
                    E&#91;rep&#93;: sym =rep&gt; rep
                </Word>
            </Paragraph>
            <Heading>Deriving from These Axioms</Heading>
            <Paragraph>
                From A1: <Word>
                    <Verbatim />
                    eq =eq&gt; eq
                </Word> ✓
            </Paragraph>
            <Paragraph>From A3 &amp; subject/object properties:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    Need axiom: <Word>
                        <Verbatim />
                        A(&#91;x,y,r&#93;: x =r&gt; y &amp; x !== y): x =sub&gt; x &amp; y =obj&gt; y
                    </Word>
                </Line>
                <Line>Wait, that introduces universal quantification over all possible relationships!</Line>
            </Paragraph>
            <Heading>Problem 1: When do properties exist?</Heading>
            <Paragraph>
                I assumed <Word>
                    <Verbatim />
                    x =sub&gt; x
                </Word> means "x has subjecthood" but when is this true?
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Only when x is a subject in some relationship?</Line>
                <Line>Always for certain referents?</Line>
            </Paragraph>
            <Heading>Attempt 2: More Careful Axioms</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    A1 (Equality)
                </Word>: <Word>
                    <Verbatim />
                    E&#91;eq&#93;: A&#91;x,y&#93;: x = y &lt;iff&gt; x =eq&gt; y
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    A2 (Core Referents)
                </Word>: <Word>
                    <Verbatim />
                    E&#91;sub,rel,obj,sym,lit,rep,ref&#93;
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    A3 (Basic Relationships)
                </Word>:
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`sub =rel> obj & 
sym =sym> lit & 
ref =eq> ref & 
sym =rep> rep &
rel =rel> rel`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    A4 (Property Assignment)
                </Word>:
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`sub =sub> sub & obj =obj> obj`}
            </CodeBox>
            <Heading>Testing Consistency</Heading>
            <Paragraph>From A3: We have 5 relationships established.</Paragraph>
            <Paragraph>
                Question: Is <Word>
                    <Verbatim />
                    (sym,lit) == sym
                </Word>?
            </Paragraph>
            <Paragraph>
                <List />
                <Line>We want sym to be the most specific relationship</Line>
                <Line>Need axiom about most specific relationships!</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    A5 (Most Specific)
                </Word>:
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`For any x =r> y where r is used, there exists a most specific m such that:
x =m> y and for all t where x =t> y: either m == t or m inherits from t`}
            </CodeBox>
            <Paragraph>But how do we define "inherits"?</Paragraph>
            <Heading>Attempt 3: Defining Inheritance</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Definition
                </Word>: For relationship types, <Word>
                    <Verbatim />
                    s -&gt; t
                </Word> means:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    Either <Word>
                        <Verbatim />
                        s == t
                    </Word>
                </Line>
                <Line>
                    Or <Word>
                        <Verbatim />
                        s =rel&gt; t
                    </Word>
                </Line>
                <Line>Or... what about chains?</Line>
            </Paragraph>
            <Heading>Testing Inheritance</Heading>
            <Paragraph>
                If <Word>
                    <Verbatim />
                    sym =rel&gt; rel
                </Word>, does <Word>
                    <Verbatim />
                    sym -&gt; rel
                </Word>?
            </Paragraph>
            <Paragraph>
                <List />
                <Line>By definition, yes!</Line>
            </Paragraph>
            <Paragraph>
                If <Word>
                    <Verbatim />
                    crimson =rel&gt; red
                </Word> and <Word>
                    <Verbatim />
                    red =rel&gt; color
                </Word>, does <Word>
                    <Verbatim />
                    crimson -&gt; color
                </Word>?
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    We'd need transitivity: <Word>
                        <Verbatim />
                        x =rel&gt; y &amp; y =rel&gt; z =|&gt; x =rel&gt; z
                    </Word>
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    A6 (Rel-Transitivity)
                </Word>:
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}A[x,y,z]: x =rel> y & y =rel> z =|> x =rel> z`}
            </CodeBox>
            <Heading>Facts Implied by the Model</Heading>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Verbatim />
                        sym =rel&gt; rel
                    </Word> (symbols are relationship types)
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        rep =rel&gt; rel
                    </Word> (representations are relationship types)
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        eq =rel&gt; rel
                    </Word> (equality is a relationship type)
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        sym =sub&gt; sym
                    </Word> (symbols have subjecthood)
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        lit =obj&gt; lit
                    </Word> (literals have objecthood)
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        rep =obj&gt; obj
                    </Word> (representations have objecthood)
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        ref =sub&gt; sub &amp; ref =obj&gt; obj
                    </Word> (referents are both)
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        eq =sub&gt; sub &amp; eq =obj&gt; obj &amp; eq =rel&gt; rel
                    </Word> (equality is all three)
                </Line>
            </Paragraph>
            <Heading>Problems Found</Heading>
            <Heading>Problem 1: What is (rel)?</Heading>
            <Paragraph>If (rel) is the canonical symbol for rel:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Verbatim />
                        (rel) =(rel)&gt; rel
                    </Word>
                </Line>
                <Line>Is (rel) one of our 8 referents, or a new one?</Line>
                <Line>Maybe (rel) == sub? (subjecthood IS the symbol for relationships?)</Line>
            </Paragraph>
            <Heading>Problem 2: Property inheritance</Heading>
            <Paragraph>
                Does <Word>
                    <Verbatim />
                    sub =sub&gt; sub
                </Word> mean:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>sub has property sub (circular?)</Line>
                <Line>Or sub IS the property of subjecthood?</Line>
            </Paragraph>
            <Heading>Problem 3: Missing relationships</Heading>
            <Paragraph>What about:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Verbatim />
                        sub =?&gt; rel
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        obj =?&gt; rel
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        lit =?&gt; sym
                    </Word>
                </Line>
            </Paragraph>
            <Paragraph>Are these undefined, or do they have values?</Paragraph>
            <Heading>Attempt 4: Complete 8-Referent Model</Heading>
            <Paragraph>Let me try to map ALL relationships between the 8 referents:</Paragraph>
            <Heading>Equality (all have it)</Heading>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Verbatim />
                        eq =eq&gt; eq
                    </Word>, <Word>
                        <Verbatim />
                        ref =eq&gt; ref
                    </Word>, <Word>
                        <Verbatim />
                        sub =eq&gt; sub
                    </Word>, <Word>
                        <Verbatim />
                        rel =eq&gt; rel
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        obj =eq&gt; obj
                    </Word>, <Word>
                        <Verbatim />
                        sym =eq&gt; sym
                    </Word>, <Word>
                        <Verbatim />
                        rep =eq&gt; rep
                    </Word>, <Word>
                        <Verbatim />
                        lit =eq&gt; lit
                    </Word>
                </Line>
            </Paragraph>
            <Heading>Given relationships</Heading>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Verbatim />
                        sub =rel&gt; obj
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        sym =sym&gt; lit
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        sym =rep&gt; rep
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        rel =rel&gt; rel
                    </Word>
                </Line>
            </Paragraph>
            <Heading>What about the rest?</Heading>
            <Paragraph>Need to determine:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Verbatim />
                        sub =?&gt; sub
                    </Word> - probably <Word>
                        <Verbatim />
                        sub =sub&gt; sub
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        obj =?&gt; obj
                    </Word> - probably <Word>
                        <Verbatim />
                        obj =obj&gt; obj
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        rep =?&gt; ?
                    </Word> - what do representations represent?
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        lit =?&gt; ?
                    </Word> - what do literals relate to?
                </Line>
            </Paragraph>
            <Heading>Iteration 5: Attempting Closure</Heading>
            <Heading>Hypothesis: The 8 referents form a closed model</Heading>
            <Paragraph>If we only have these 8, then:</Paragraph>
            <Paragraph>
                <List />
                <Line>Every relationship must use one of them as the relationship type</Line>
                <Line>Every most specific relationship must be one of these 8</Line>
            </Paragraph>
            <Heading>Testing most specific relationships</Heading>
            <Paragraph>
                For <Word>
                    <Verbatim />
                    sub =rel&gt; obj
                </Word>:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Most specific is rel itself</Line>
                <Line>
                    <Word>
                        <Verbatim />
                        (sub,obj) == rel
                    </Word>
                </Line>
            </Paragraph>
            <Paragraph>
                For <Word>
                    <Verbatim />
                    sym =sym&gt; lit
                </Word>:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Most specific is sym itself</Line>
                <Line>
                    <Word>
                        <Verbatim />
                        (sym,lit) == sym
                    </Word>
                </Line>
            </Paragraph>
            <Paragraph>
                For <Word>
                    <Verbatim />
                    ref =eq&gt; ref
                </Word>:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Most specific is eq</Line>
                <Line>
                    <Word>
                        <Verbatim />
                        (ref,ref) == eq
                    </Word>
                </Line>
            </Paragraph>
            <Heading>Does this work?</Heading>
            <Paragraph>
                If <Word>
                    <Verbatim />
                    (sym,lit) == sym
                </Word>, then:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>sym IS the relationship between sym and lit</Line>
                <Line>This is self-referential but coherent</Line>
                <Line>
                    Like how eq IS the relationship in <Word>
                        <Verbatim />
                        eq =eq&gt; eq
                    </Word>
                </Line>
            </Paragraph>
            <Heading>Current Issues</Heading>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Canonical symbols
                    </Word>: Still unclear what (rel), (sub), etc. are
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Inheritance chains
                    </Word>: Need clear rules for transitivity
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Property semantics
                    </Word>: What does <Word>
                        <Verbatim />
                        x =prop&gt; x
                    </Word> really mean?
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Completeness
                    </Word>: Are there required relationships we're missing?
                </Line>
            </Paragraph>
            <Heading>Next Steps Needed</Heading>
            <Paragraph>
                <List ordered />
                <Line>Enumerate ALL relationships between the 8 referents</Line>
                <Line>Determine which are most specific</Line>
                <Line>Figure out canonical symbols</Line>
                <Line>Test for consistency</Line>
                <Line>Extract minimal axioms</Line>
            </Paragraph>
        </Section>
    </Chapter>
);
