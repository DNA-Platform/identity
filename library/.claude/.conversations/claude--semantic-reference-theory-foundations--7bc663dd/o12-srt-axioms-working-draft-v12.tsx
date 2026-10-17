import { Bold, Chapter, Heading, Line, List, Paragraph, Section, Title, Word } from '@dna-platform/public';
import { CodeBox, Opaque, Verbatim } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ SRT Axioms - Working Draft v12 ]]</Title>
        <Section>
            <Opaque />
            <Heading>SRT Axioms - Working Draft at version 12</Heading>
            <Heading>Semantic Reference Theory - Rigorous Development</Heading>
            <Heading>The Domain and Primitive</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Domain
                </Word>: Referents - things that can be referred to <Word>
                    <Bold />
                    Primitive Relation
                </Word>: R(x,y,t) - "x relates to y through t"
            </Paragraph>
            <Heading>Axiom 1: Equality as Reference</Heading>
            <Paragraph>Since FOL provides equality, we must capture it within R:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}E[eq]: A[x,y]: x =eq> y <iff> x = y`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    Linguistic Convention
                </Word>:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Verbatim />
                        x == y
                    </Word> means <Word>
                        <Verbatim />
                        x =eq&gt; y
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        x !== y
                    </Word> means <Word>
                        <Verbatim />
                        !(x =eq&gt; y)
                    </Word>
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Immediate Consequences
                </Word>:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Verbatim />
                        A&#91;x&#93;: x =eq&gt; x
                    </Word> (reflexivity)
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        x =eq&gt; y =|&gt; y =eq&gt; x
                    </Word> (symmetry)
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        x =eq&gt; y &amp; y =eq&gt; z =|&gt; x =eq&gt; z
                    </Word> (transitivity)
                </Line>
            </Paragraph>
            <Heading>Axiom 2: The Root of Relations</Heading>
            <CodeBox
                language="srt"
            >
                {`${''}E[r]: r =r> r`}
            </CodeBox>
            <Paragraph>"There exists a referent r that relates to itself through itself"</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Semantic Meaning
                </Word>: r is the root relationship type - the most general form of relation.
            </Paragraph>
            <Heading>Working Toward Type Structure</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Candidate Truth 1
                </Word>: "All relationship types should relate to r"
            </Paragraph>
            <Paragraph>Let me try to prove this is needed:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    If <Word>
                        <Verbatim />
                        x =t&gt; y
                    </Word> for some <Word>
                        <Verbatim />
                        t !== eq
                    </Word>, what is t?
                </Line>
                <Line>t is being used as a relationship type</Line>
                <Line>For t to be part of our semantic structure, it needs to relate to something</Line>
                <Line>We want a unified hierarchy of types</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Candidate Axiom
                </Word>: Type Hierarchy
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}A([t]: E([x,y]: x =t> y & t !== eq)): t =r> r`}
            </CodeBox>
            <Heading>Working Toward Canonical Symbols</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Candidate Truth 2
                </Word>: "Some things can represent other things through themselves"
            </Paragraph>
            <Paragraph>Example: The word "red" represents the concept red. But how?</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Observation
                </Word>: If <Word>
                    <Verbatim />
                    x =x&gt; y
                </Word>, then x is using itself as the relationship type.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Candidate Truth 3
                </Word>: "For important referents, there should be a unique self-representing symbol"
            </Paragraph>
            <Paragraph>Let me explore what this means:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    If <Word>
                        <Verbatim />
                        s =s&gt; t
                    </Word>, then s represents t through itself
                </Line>
                <Line>We want this s to be unique for each t that needs a symbol</Line>
                <Line>Not everything needs a symbol</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Candidate Axiom
                </Word>: Canonical Symbol Existence
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}A([t]: t =r> r): E![s]: s =s> t & (s,t) == s`}
            </CodeBox>
            <Paragraph>Wait, I'm using (s,t) before defining it!</Paragraph>
            <Heading>Defining Most Specific Relationships</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Candidate Truth 4
                </Word>: "Between any two referents, if there are multiple relationships, one is most specific"
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Proof Sketch
                </Word>:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    Suppose <Word>
                        <Verbatim />
                        x =t1&gt; y
                    </Word> and <Word>
                        <Verbatim />
                        x =t2&gt; y
                    </Word>
                </Line>
                <Line>We need a way to order these relationships</Line>
                <Line>The most specific one should "inherit from" all others</Line>
            </Paragraph>
            <Paragraph>But what does "inherit from" mean? I need to define this!</Paragraph>
            <Heading>The Inheritance Problem</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Attempt 1
                </Word>: Define inheritance recursively
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}x -> y := x == y || x =r> y || E[z]: x -> z & z -> y`}
            </CodeBox>
            <Paragraph>Problem: This is circular!</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Attempt 2
                </Word>: Define inheritance through chains
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}x -> y := E[n]: E[z1,...,zn]: x =r> z1 =r> ... =r> zn =r> y`}
            </CodeBox>
            <Paragraph>Problem: How do we handle n? This isn't well-formed in FOL!</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Attempt 3
                </Word>: Define inheritance through possession of symbols
            </Paragraph>
            <CodeBox>
                {`x -> t := x =(t)> x`}
            </CodeBox>
            <Paragraph>This requires (t) to exist first!</Paragraph>
            <Heading>Back to Canonical Symbols</Heading>
            <Paragraph>Let me be more careful. First, I need to establish when self-representation occurs:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Candidate Axiom
                </Word>: Self-Representation
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}E[S]: A[x]: (E[y]: x =x> y) <iff> x =S> S`}
            </CodeBox>
            <Paragraph>
                This says: "There's a property S such that x has it iff x represents something through itself"
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Now define (x) linguistically
                </Word>: When we write (x), we mean: the unique s (if it exists) where <Word>
                    <Verbatim />
                    s =s&gt; x
                </Word> and some maximality condition...
            </Paragraph>
            <Heading>The Problem of Circularity</Heading>
            <Paragraph>I keep running into circular definitions:</Paragraph>
            <Paragraph>
                <List />
                <Line>To define (x,y), I need inheritance</Line>
                <Line>To define inheritance, I need (t)</Line>
                <Line>To define (t), I need to know which things get symbols</Line>
                <Line>To know which things get symbols, I need type structure</Line>
                <Line>Type structure seems to need inheritance!</Line>
            </Paragraph>
            <Heading>A Different Approach: Build Up Cases</Heading>
            <Paragraph>Let me try to build specific cases first:</Paragraph>
            <Heading>Case 1: Simple Property</Heading>
            <CodeBox
                language="srt"
            >
                {`rose =red> red`}
            </CodeBox>
            <Paragraph>What does this mean? rose has the property red.</Paragraph>
            <Heading>Case 2: Type Reference</Heading>
            <CodeBox
                language="srt"
            >
                {`red =r> r`}
            </CodeBox>
            <Paragraph>What does this mean? red is a relationship type.</Paragraph>
            <Heading>Case 3: Symbol for Type</Heading>
            <CodeBox>
                {`(red) =(red)> red`}
            </CodeBox>
            <Paragraph>What does this mean? (red) is the symbol for red.</Paragraph>
            <Heading>Case 4: Inheritance</Heading>
            <CodeBox
                language="srt"
            >
                {`crimson =r> red`}
            </CodeBox>
            <Paragraph>What does this mean? crimson is a more specific version of red.</Paragraph>
            <Heading>Case 5: Possession of Symbol</Heading>
            <CodeBox>
                {`crimson =(red)> crimson`}
            </CodeBox>
            <Paragraph>What does this mean? crimson has the property of "being red".</Paragraph>
            <Heading>Pattern Recognition</Heading>
            <Paragraph>From these cases, I see:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    Properties are relationship types: <Word>
                        <Verbatim />
                        red =r&gt; r
                    </Word>
                </Line>
                <Line>
                    Types can reference other types: <Word>
                        <Verbatim />
                        crimson =r&gt; red
                    </Word>
                </Line>
                <Line>
                    Types have symbols: <Word>
                        <Verbatim />
                        (red) =(red)&gt; red
                    </Word>
                </Line>
                <Line>
                    Having a type's symbol means inheriting from it: <Word>
                        <Verbatim />
                        crimson =(red)&gt; crimson
                    </Word>
                </Line>
            </Paragraph>
            <Heading>Proposed Axiom Set (Version 2)</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Axiom 1 (Equality)
                </Word>:
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}E[eq]: A[x,y]: x =eq> y <iff> x = y`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    Axiom 2 (Root)
                </Word>:
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}E[r]: r =r> r & A([t]: t =r> r =|> t =t> t)`}
            </CodeBox>
            <Paragraph>"r is the root, and anything that relates to r can self-relate"</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Axiom 3 (Type Hierarchy)
                </Word>:
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}A([t]: E([x,y]: x =t> y & t !== eq)): t =r> r`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    Axiom 4 (Symbol Creation)
                </Word>:
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}A([t]: t =r> r): E[s]: s =s> t`}
            </CodeBox>
            <Paragraph>"Every type has at least one self-representing symbol"</Paragraph>
            <Paragraph>But how do we ensure uniqueness? And prevent infinite towers?</Paragraph>
            <Heading>I Need More Structure</Heading>
            <Paragraph>I realize I'm not being systematic enough. Let me list what I NEED to be true:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        No infinite symbol towers
                    </Word>: <Word>
                        <Verbatim />
                        (((x))) shouldn't keep creating new things
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Inheritance should work
                    </Word>: <Word>
                        <Verbatim />
                        If crimson is a kind of red, this should be expressible
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Symbols should be unique
                    </Word>: <Word>
                        <Verbatim />
                        Only one canonical symbol per type
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Most specific relationships should exist
                    </Word>: <Word>
                        <Verbatim />
                        Between x and y, one relationship is most specific
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Reference frames should be possible
                    </Word>: <Word>
                        <Verbatim />
                        Different contexts give different meanings
                    </Word>
                </Line>
            </Paragraph>
            <Paragraph>Each of these needs careful axiomatization...</Paragraph>
            <Heading>Attempt at Systematic Construction</Heading>
            <Heading>Step 1: What is inheritance, really?</Heading>
            <Paragraph>Let me think about what we want inheritance to capture:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Verbatim />
                        crimson -&gt; red
                    </Word> should mean "crimson is a kind of red"
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        red -&gt; r
                    </Word> should mean "red is a relationship type"
                </Line>
            </Paragraph>
            <Paragraph>Key insight: Maybe inheritance IS just reference for relationship types!</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Candidate Definition
                </Word>:
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`For relationship types s,t: s -> t := s =r> t || s == t`}
            </CodeBox>
            <Paragraph>This is simple! Let me test it:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Verbatim />
                        crimson =r&gt; red
                    </Word> means <Word>
                        <Verbatim />
                        crimson -&gt; red
                    </Word> ✓
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        red =r&gt; r
                    </Word> means <Word>
                        <Verbatim />
                        red -&gt; r
                    </Word> ✓
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        r =r&gt; r
                    </Word> means <Word>
                        <Verbatim />
                        r -&gt; r
                    </Word> ✓
                </Line>
            </Paragraph>
            <Heading>Step 2: Transitivity of Inheritance</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Candidate Theorem
                </Word>: If <Word>
                    <Verbatim />
                    s -&gt; t
                </Word> and <Word>
                    <Verbatim />
                    t -&gt; u
                </Word>, then <Word>
                    <Verbatim />
                    s -&gt; u
                </Word>
            </Paragraph>
            <Paragraph>Proof attempt:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    Case 1: <Word>
                        <Verbatim />
                        s == t
                    </Word>. Then <Word>
                        <Verbatim />
                        s -&gt; u
                    </Word> follows from <Word>
                        <Verbatim />
                        t -&gt; u
                    </Word>.
                </Line>
                <Line>
                    Case 2: <Word>
                        <Verbatim />
                        s =r&gt; t
                    </Word> and <Word>
                        <Verbatim />
                        t == u
                    </Word>. Then <Word>
                        <Verbatim />
                        s =r&gt; u
                    </Word>, so <Word>
                        <Verbatim />
                        s -&gt; u
                    </Word>.
                </Line>
                <Line>
                    Case 3: <Word>
                        <Verbatim />
                        s =r&gt; t
                    </Word> and <Word>
                        <Verbatim />
                        t =r&gt; u
                    </Word>. Then... wait, how do I get <Word>
                        <Verbatim />
                        s =r&gt; u
                    </Word>?
                </Line>
            </Paragraph>
            <Paragraph>I need an axiom for transitivity of r-reference!</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Candidate Axiom
                </Word>: R-Transitivity
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}A[x,y,z]: x =r> y & y =r> z =|> x =r> z`}
            </CodeBox>
            <Paragraph>Hmm, but this makes r special. Is that okay?</Paragraph>
            <Heading>Step 3: Canonical Symbols - When do they exist?</Heading>
            <Paragraph>Let me think about what needs symbols:</Paragraph>
            <Paragraph>
                <List />
                <Line>Relationship types (like red, crimson)</Line>
                <Line>Maybe some special objects?</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Candidate Axiom
                </Word>: Symbol Existence for Types
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}A([t]: t =r> r || t == r): E[s]: s =s> t`}
            </CodeBox>
            <Paragraph>"Everything in the r-hierarchy has at least one self-representing symbol"</Paragraph>
            <Heading>Step 4: Symbol Uniqueness - Do we need it?</Heading>
            <Paragraph>What if multiple things can symbolize the same referent?</Paragraph>
            <Paragraph>
                <List />
                <Line>"red", "rouge", "rojo" might all symbolize the concept RED</Line>
                <Line>But we want ONE canonical symbol (red)</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Candidate Axiom
                </Word>: Canonical Symbol Selection
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}A([t]: t =r> r || t == r): 
  E![s]: s =s> t & A([w]: w =w> t =|> s =r> w || s == w)`}
            </CodeBox>
            <Paragraph>"There's a unique canonical symbol that all other symbols relate to"</Paragraph>
            <Paragraph>Actually, this is getting complex. Let me step back...</Paragraph>
            <Heading>The Core Problem</Heading>
            <Paragraph>
                I'm trying to build too much at once. Let me identify the absolute minimum needed for a coherent system:
            </Paragraph>
            <Heading>Minimal System Attempt</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Primitive
                </Word>: R(x,y,t)
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Axiom 1
                </Word>: Equality
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}E[eq]: A[x,y]: x =eq> y <iff> x = y`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    Axiom 2
                </Word>: Root
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}E[r]: r =r> r`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    Axiom 3
                </Word>: Type Marking
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}A([t]: E([x,y]: x =t> y & t !== eq)): t =r> r || t == r`}
            </CodeBox>
            <Paragraph>"Every used relationship type is in the r-hierarchy"</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Definition
                </Word>: Inheritance (for types)
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`s -> t := (s =r> t || s == t)`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    Theorem
                </Word>: -&gt; is transitive Proof requires r-transitivity...
            </Paragraph>
            <Paragraph>So I need:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Axiom 4
                </Word>: R-Transitivity
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}A[x,y,z]: x =r> y & y =r> z =|> x =r> z`}
            </CodeBox>
            <Paragraph>Now I can prove transitivity of -&gt;!</Paragraph>
            <Heading>Adding Symbols</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Axiom 5
                </Word>: Types Have Symbols
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}A([t]: t -> r): E[s]: s =s> t & (s,t) == s`}
            </CodeBox>
            <Paragraph>Wait, I'm using (s,t) again without defining it properly!</Paragraph>
            <Paragraph>Let me try to define it:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Definition
                </Word>: (x,y) when x =t&gt; y for some t !== eq
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}(x,y) := the unique m such that x =m> y & A([t]: x =t> y =|> m -> t & t !-> m)`}
            </CodeBox>
            <Paragraph>But this assumes such an m exists and is unique!</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Axiom 6
                </Word>: Most Specific Relationships
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}A([x,y]: E([t]: x =t> y & t !== eq)): 
  E![m]: x =m> y & A([t]: x =t> y =|> m -> t & !(t -> m & t !== m))`}
            </CodeBox>
            <Paragraph>This is getting complicated, but maybe necessary?</Paragraph>
            <Heading>Testing the System</Heading>
            <Paragraph>Let me see if this system can express our examples:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Verbatim />
                        rose =red&gt; red
                    </Word> ✓ (basic reference)
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        red =r&gt; r
                    </Word> ✓ (red is a type)
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        crimson =r&gt; red
                    </Word> ✓ (crimson inherits from red)
                </Line>
                <Line>
                    By Axiom 5: <Word>
                        <Verbatim />
                        E&#91;s&#93;: s =s&gt; red
                    </Word> (red has a symbol)
                </Line>
                <Line>Call this symbol (red)</Line>
                <Line>
                    Can we show <Word>
                        <Verbatim />
                        crimson =(red)&gt; crimson
                    </Word>?
                </Line>
            </Paragraph>
            <Paragraph>Hmm, I don't have a mechanism for this yet...</Paragraph>
            <Heading>The Missing Piece</Heading>
            <Paragraph>I need to connect inheritance to symbol possession!</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Candidate Axiom
                </Word>: Inheritance Through Symbols
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}A[s,t]: s -> t & s !== t =|> s =(t)> s`}
            </CodeBox>
            <Paragraph>"If s inherits from t (non-trivially), then s possesses t's canonical symbol"</Paragraph>
            <Paragraph>But this assumes (t) is unique and well-defined...</Paragraph>
            <Heading>I'm Still Struggling</Heading>
            <Paragraph>The interdependencies are complex:</Paragraph>
            <Paragraph>
                <List />
                <Line>Inheritance depends on r-reference</Line>
                <Line>Symbols depend on types</Line>
                <Line>Symbol uniqueness is tricky</Line>
                <Line>Connecting inheritance to symbol possession needs care</Line>
            </Paragraph>
            <Paragraph>This really does require careful back-and-forth iteration!</Paragraph>
        </Section>
    </Chapter>
);
