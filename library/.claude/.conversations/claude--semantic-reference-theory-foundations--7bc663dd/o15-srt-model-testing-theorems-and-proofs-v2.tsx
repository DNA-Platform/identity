import { Bold, Chapter, Heading, Line, List, Paragraph, Section, Title, Word } from '@dna-platform/public';
import { CodeBox, Opaque, Verbatim } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ SRT Model Testing - Theorems and Proofs v2 ]]</Title>
        <Section>
            <Opaque />
            <Heading>SRT Model Testing - Theorems and Proofs at version 2</Heading>
            <Heading>SRT Model Testing - Iteration 1</Heading>
            <Heading>Facts from the Model</Heading>
            <Heading>Basic Referent Facts</Heading>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Verbatim />
                        ref =eq&gt; ref
                    </Word> - referents equal themselves
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        eq =eq&gt; eq
                    </Word> - equality equals itself
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        rel =rel&gt; rel
                    </Word> - relationships relate to themselves
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        sym =sym&gt; lit
                    </Word> - symbols symbolize literals
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        sym =sym&gt; sym
                    </Word> - symbols symbolize themselves
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        sub =rel&gt; obj
                    </Word> - subjects relate to objects
                </Line>
            </Paragraph>
            <Heading>Property Facts</Heading>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Verbatim />
                        sub =s&gt; sub
                    </Word> - subjects have subject property
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        obj =o&gt; obj
                    </Word> - objects have object property
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        rel =r&gt; rel
                    </Word> - relationships have relationship property
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        sym =s&gt; sym
                    </Word> - symbols are subjects
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        lit =o&gt; lit
                    </Word> - literals are objects
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        rep =o&gt; rep
                    </Word> - representations are objects
                </Line>
            </Paragraph>
            <Heading>Inheritance Facts (using =r&gt;)</Heading>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Verbatim />
                        sym =r&gt; rel
                    </Word> - symbols inherit from relationships
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        rep =r&gt; rel
                    </Word> - representations inherit from relationships
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        eq =r&gt; rel
                    </Word> - equality inherits from relationships
                </Line>
            </Paragraph>
            <Heading>Representation Facts</Heading>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Verbatim />
                        sym =rep&gt; rep
                    </Word> - symbols are part of representation
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        rep =rep&gt; ??
                    </Word> - what do representations represent?
                </Line>
            </Paragraph>
            <Heading>Symbol Facts</Heading>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Verbatim />
                        ((x),x) == (x)
                    </Word> - symbol of symbol is itself
                </Line>
                <Line>
                    If <Word>
                        <Verbatim />
                        t =r&gt; rel
                    </Word> then <Word>
                        <Verbatim />
                        (t)
                    </Word> exists
                </Line>
                <Line>
                    If <Word>
                        <Verbatim />
                        s =r&gt; t
                    </Word> then <Word>
                        <Verbatim />
                        s =(t)&gt; s
                    </Word> - inheritance gives symbol possession
                </Line>
            </Paragraph>
            <Heading>Testing Consistency</Heading>
            <Heading>Test 1: Is sym both subject and relationship?</Heading>
            <Paragraph>From facts:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Verbatim />
                        sym =sym&gt; lit
                    </Word> (4)
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        sym =s&gt; sym
                    </Word> (10)
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        sym =r&gt; rel
                    </Word> (13)
                </Line>
            </Paragraph>
            <Paragraph>This means sym is subject AND relationship type. Is this consistent?</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    When <Word>
                        <Verbatim />
                        x =t&gt; y
                    </Word> where x == t, we have self-representation
                </Line>
                <Line>
                    So <Word>
                        <Verbatim />
                        sym =sym&gt; lit
                    </Word> means sym represents lit through itself
                </Line>
                <Line>✓ Consistent - symbols ARE the relationship they use</Line>
            </Paragraph>
            <Heading>Test 2: Can something be both object and relationship?</Heading>
            <Paragraph>From facts:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Verbatim />
                        rep =o&gt; rep
                    </Word> (12)
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        rep =r&gt; rel
                    </Word> (14)
                </Line>
            </Paragraph>
            <Paragraph>This means rep is both object and relationship type.</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    In case <Word>
                        <Verbatim />
                        s =r&gt; r
                    </Word> where r == o, this is exactly what we need
                </Line>
                <Line>✓ Consistent</Line>
            </Paragraph>
            <Heading>Test 3: Does equality work?</Heading>
            <Paragraph>From facts:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Verbatim />
                        eq =eq&gt; eq
                    </Word> (2)
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        eq =r&gt; rel
                    </Word> (15)
                </Line>
            </Paragraph>
            <Paragraph>So eq is a relationship that relates to itself through itself.</Paragraph>
            <Paragraph>
                <List />
                <Line>This matches Case 5: s == r == o</Line>
                <Line>✓ Consistent</Line>
            </Paragraph>
            <Heading>Attempting to Derive Facts</Heading>
            <Heading>
                Derivation 1: If everything equals itself, can we derive <Word>
                    <Verbatim />
                    ref =eq&gt; ref
                </Word>?
            </Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Proposed Axiom
                </Word>:
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}E[eq]: A[x,y]: x = y <iff> x =eq> y`}
            </CodeBox>
            <Paragraph>
                Then <Word>
                    <Verbatim />
                    ref = ref
                </Word> (by FOL) implies <Word>
                    <Verbatim />
                    ref =eq&gt; ref
                </Word> ✓
            </Paragraph>
            <Heading>Derivation 2: Can we derive that symbols are subjects?</Heading>
            <Paragraph>
                If <Word>
                    <Verbatim />
                    sym =sym&gt; lit
                </Word> and <Word>
                    <Verbatim />
                    sym !== lit
                </Word>, then:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>sym is the subject of this relationship</Line>
                <Line>
                    So <Word>
                        <Verbatim />
                        sym =s&gt; sym
                    </Word> should follow
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Proposed Axiom
                </Word>:
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}A([x,y,t]: x =t> y & x !== y): x =s> x`}
            </CodeBox>
            <Heading>Derivation 3: Can we derive that literals are objects?</Heading>
            <Paragraph>
                If <Word>
                    <Verbatim />
                    sym =sym&gt; lit
                </Word> and <Word>
                    <Verbatim />
                    sym !== lit
                </Word>, then:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>lit is the object of this relationship</Line>
                <Line>
                    So <Word>
                        <Verbatim />
                        lit =o&gt; lit
                    </Word> should follow
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Proposed Axiom
                </Word>:
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}A([x,y,t]: x =t> y & x !== y): y =o> y`}
            </CodeBox>
            <Heading>Problems Found</Heading>
            <Heading>
                Problem 1: What establishes <Word>
                    <Verbatim />
                    rel =rel&gt; rel
                </Word>?
            </Heading>
            <Paragraph>We need rel to exist and self-relate.</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Proposed Axiom
                </Word>:
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}E[rel]: rel =rel> rel`}
            </CodeBox>
            <Heading>
                Problem 2: How do we know <Word>
                    <Verbatim />
                    sym =r&gt; rel
                </Word>?
            </Heading>
            <Paragraph>
                If sym is used as a relationship type (in <Word>
                    <Verbatim />
                    sym =sym&gt; lit
                </Word>), should it automatically inherit from rel?
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Proposed Axiom
                </Word>:
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}A([t]: E([x,y]: x =t> y & t !== eq)): t =r> rel`}
            </CodeBox>
            <Paragraph>But wait, this uses 'r' which is just our notation for rel!</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Better
                </Word>:
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}A([t]: E([x,y]: x =t> y & t !== eq)): t =rel> rel`}
            </CodeBox>
            <Heading>Problem 3: Most specific relationships?</Heading>
            <Paragraph>
                In <Word>
                    <Verbatim />
                    sym =sym&gt; lit
                </Word>, is sym the most specific relationship?
            </Paragraph>
            <Paragraph>
                <List />
                <Line>We need to ensure no other relationship between sym and lit is more specific</Line>
                <Line>But what does "more specific" mean in our vocabulary?</Line>
            </Paragraph>
            <Paragraph>
                Maybe: t is more specific than s if <Word>
                    <Verbatim />
                    t =rel&gt; s
                </Word> but not <Word>
                    <Verbatim />
                    s =rel&gt; t
                </Word>?
            </Paragraph>
            <Heading>More Theorems to Test</Heading>
            <Heading>Referent Theorems</Heading>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Verbatim />
                        A&#91;x&#93;: x =ref&gt; x
                    </Word> - everything is a referent?
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        ref =ref&gt; ref
                    </Word> - referent refers to itself
                </Line>
                <Line>
                    If <Word>
                        <Verbatim />
                        x =ref&gt; x
                    </Word> then x exists (existential claim)
                </Line>
            </Paragraph>
            <Heading>Relationship Theorems</Heading>
            <Paragraph>
                <List ordered />
                <Line>
                    If <Word>
                        <Verbatim />
                        x =t&gt; y
                    </Word> then <Word>
                        <Verbatim />
                        t =rel&gt; rel
                    </Word> (unless t == eq)
                </Line>
                <Line>
                    If <Word>
                        <Verbatim />
                        x =rel&gt; y
                    </Word> and <Word>
                        <Verbatim />
                        y =rel&gt; z
                    </Word> then <Word>
                        <Verbatim />
                        x =rel&gt; z
                    </Word> (chaining)
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        rel =(rel)&gt; rel
                    </Word> - rel has symbol for relationships?
                </Line>
            </Paragraph>
            <Heading>Symbol Theorems</Heading>
            <Paragraph>
                <List ordered />
                <Line>
                    If <Word>
                        <Verbatim />
                        x =x&gt; y
                    </Word> then x is a symbol
                </Line>
                <Line>
                    If <Word>
                        <Verbatim />
                        x =x&gt; y
                    </Word> then <Word>
                        <Verbatim />
                        x =s&gt; x
                    </Word> (symbols are subjects)
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        (sym) =(sym)&gt; sym
                    </Word> - symbol has its own symbol
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        (lit)
                    </Word> doesn't exist? - literals don't have symbols?
                </Line>
            </Paragraph>
            <Heading>Most Specific Theorems</Heading>
            <Paragraph>
                <List ordered />
                <Line>
                    For <Word>
                        <Verbatim />
                        sym =sym&gt; lit
                    </Word>, sym is most specific
                </Line>
                <Line>
                    For <Word>
                        <Verbatim />
                        sub =rel&gt; obj
                    </Word>, rel is most specific
                </Line>
                <Line>Most specific means nothing else between them?</Line>
            </Paragraph>
            <Heading>Inheritance Theorems</Heading>
            <Paragraph>
                <List ordered />
                <Line>
                    If <Word>
                        <Verbatim />
                        s =rel&gt; t
                    </Word> then <Word>
                        <Verbatim />
                        s =(t)&gt; s
                    </Word>
                </Line>
                <Line>
                    If <Word>
                        <Verbatim />
                        s =(t)&gt; s
                    </Word> then s inherits from t
                </Line>
                <Line>Inheritance is transitive through rel-chains</Line>
            </Paragraph>
            <Heading>Testing Derivations</Heading>
            <Heading>
                Can we derive <Word>
                    <Verbatim />
                    sym =sym&gt; sym
                </Word>?
            </Heading>
            <Paragraph>
                Given: <Word>
                    <Verbatim />
                    sym =sym&gt; lit
                </Word> Question: Must <Word>
                    <Verbatim />
                    sym =sym&gt; sym
                </Word> also be true?
            </Paragraph>
            <Paragraph>If sym is a relationship type (which it is), and relationships can self-relate...</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Verbatim />
                        rel =rel&gt; rel
                    </Word> is true
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        eq =eq&gt; eq
                    </Word> is true
                </Line>
                <Line>
                    So maybe <Word>
                        <Verbatim />
                        sym =sym&gt; sym
                    </Word> follows?
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Proposed Theorem
                </Word>: If <Word>
                    <Verbatim />
                    t =rel&gt; rel
                </Word> then <Word>
                    <Verbatim />
                    t =t&gt; t
                </Word>
            </Paragraph>
            <Paragraph>But wait, is this always true? Need to check...</Paragraph>
            <Heading>Can we derive symbol existence?</Heading>
            <Paragraph>
                If <Word>
                    <Verbatim />
                    rel =rel&gt; rel
                </Word>, does (rel) exist?
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    (rel) would satisfy: <Word>
                        <Verbatim />
                        (rel) =(rel)&gt; rel
                    </Word>
                </Line>
                <Line>
                    And <Word>
                        <Verbatim />
                        ((rel),rel) == (rel)
                    </Word>
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Proposed
                </Word>: Every relationship type has a symbol
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}A([t]: t =rel> rel): E[s]: s =s> t & (s,t) == s`}
            </CodeBox>
            <Heading>Testing for Contradictions</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Potential Issue
                </Word>: If <Word>
                    <Verbatim />
                    sym =sym&gt; sym
                </Word> and <Word>
                    <Verbatim />
                    sym =sym&gt; lit
                </Word>, then:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Is sym the most specific relationship to itself?</Line>
                <Line>Is sym the most specific relationship to lit?</Line>
                <Line>Can the same referent be most specific in different contexts?</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Resolution
                </Word>: Most specific is relative to the pair!
            </Paragraph>
            <Paragraph>
                <List />
                <Line>(sym,sym) == sym</Line>
                <Line>(sym,lit) == sym</Line>
                <Line>These are consistent - same referent, different relationships</Line>
            </Paragraph>
            <Heading>Core Axiom Candidates</Heading>
            <Paragraph>Based on the patterns, here are axiom candidates:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    A1 (Equality Exists)
                </Word>:
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}E[eq]: A[x,y]: x = y <iff> x =eq> y`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    A2 (Relationships Relate)
                </Word>:
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}E[rel]: rel =rel> rel`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    A3 (Referents Refer)
                </Word>:
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}E[ref]: A[x]: x =ref> x`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    A4 (Subjects and Objects)
                </Word>:
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}E[s,o]: A([x,y,t]: x =t> y & x !== y): x =s> x & y =o> y`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    A5 (Relationship Inheritance)
                </Word>:
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}A([t]: E([x,y]: x =t> y & t !== eq)): t =rel> rel`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    A6 (Symbol Termination)
                </Word>:
            </Paragraph>
            <CodeBox>
                {`${''}A[x]: ((x),x) == (x)`}
            </CodeBox>
            <Heading>Proofs from Axioms</Heading>
            <Heading>
                Proof: <Word>
                    <Verbatim />
                    sym =sym&gt; lit
                </Word> implies <Word>
                    <Verbatim />
                    sym =s&gt; s
                </Word>
            </Heading>
            <Paragraph>
                <List ordered />
                <Line>
                    Given: <Word>
                        <Verbatim />
                        sym =sym&gt; lit
                    </Word> and <Word>
                        <Verbatim />
                        sym !== lit
                    </Word>
                </Line>
                <Line>
                    By A4: <Word>
                        <Verbatim />
                        sym =s&gt; s
                    </Word>
                </Line>
                <Line>QED</Line>
            </Paragraph>
            <Heading>
                Proof: <Word>
                    <Verbatim />
                    eq =eq&gt; eq
                </Word>
            </Heading>
            <Paragraph>
                <List ordered />
                <Line>
                    By A1: <Word>
                        <Verbatim />
                        eq = eq &lt;iff&gt; eq =eq&gt; eq
                    </Word>
                </Line>
                <Line>
                    By FOL: <Word>
                        <Verbatim />
                        eq = eq
                    </Word> is true
                </Line>
                <Line>
                    Therefore: <Word>
                        <Verbatim />
                        eq =eq&gt; eq
                    </Word>
                </Line>
                <Line>QED</Line>
            </Paragraph>
            <Heading>
                Proof: <Word>
                    <Verbatim />
                    sym =rel&gt; rel
                </Word>
            </Heading>
            <Paragraph>
                <List ordered />
                <Line>
                    Given: <Word>
                        <Verbatim />
                        sym =sym&gt; lit
                    </Word>
                </Line>
                <Line>Since sym !== eq and is used as relationship</Line>
                <Line>
                    By A5: <Word>
                        <Verbatim />
                        sym =rel&gt; rel
                    </Word>
                </Line>
                <Line>QED</Line>
            </Paragraph>
            <Heading>Questions Still Open</Heading>
            <Paragraph>
                <List ordered />
                <Line>How do we axiomatize most specific relationships?</Line>
                <Line>When do symbols (x) exist? For all x? Only some?</Line>
                <Line>
                    Is <Word>
                        <Verbatim />
                        ref =ref&gt; ref
                    </Word> derivable or axiomatic?
                </Line>
                <Line>
                    What about <Word>
                        <Verbatim />
                        sym =sym&gt; sym
                    </Word> - is this necessary?
                </Line>
                <Line>How do we capture "inheritance through symbol possession"?</Line>
            </Paragraph>
        </Section>
    </Chapter>
);
