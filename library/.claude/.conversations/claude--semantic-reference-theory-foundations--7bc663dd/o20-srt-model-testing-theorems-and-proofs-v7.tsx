import { Bold, Chapter, Heading, Line, List, Paragraph, Section, Title, Word } from '@dna-platform/public';
import { CodeBox, Opaque, Verbatim } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ SRT Model Testing - Theorems and Proofs v7 ]]</Title>
        <Section>
            <Opaque />
            <Heading>SRT Model Testing - Theorems and Proofs at version 7</Heading>
            <Heading>SRT Semantic Exploration - Using the Five Cases</Heading>
            <Heading>The Five Cases Revisited with Semantics</Heading>
            <Heading>Case 1: s !== r !== o (Standard)</Heading>
            <Paragraph>
                <Word>
                    <Verbatim />
                    s =r&gt; o
                </Word> where all distinct
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Semantic
                    </Word>: Subject relates to object through relationship
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Example
                    </Word>: <Word>
                        <Verbatim />
                        mother =loves&gt; child
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Properties
                    </Word>: <Word>
                        <Verbatim />
                        s =s&gt; s
                    </Word>, <Word>
                        <Verbatim />
                        o =o&gt; o
                    </Word>, <Word>
                        <Verbatim />
                        r =rel&gt; rel
                    </Word>
                </Line>
            </Paragraph>
            <Heading>Case 2: s == r !== o (Self-Representing)</Heading>
            <Paragraph>
                <Word>
                    <Verbatim />
                    r =r&gt; o
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Semantic
                    </Word>: Relationship represents object through itself
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Example
                    </Word>: <Word>
                        <Verbatim />
                        sym =sym&gt; lit
                    </Word> - symbol symbolizes literal
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        What this means
                    </Word>: The relationship IS the subject
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Consequence
                    </Word>: <Word>
                        <Verbatim />
                        sym =rel&gt; rel
                    </Word> (symbols are relationships)
                </Line>
            </Paragraph>
            <Heading>Case 3: s == o !== r (Self-Reference)</Heading>
            <Paragraph>
                <Word>
                    <Verbatim />
                    o =r&gt; o
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Semantic
                    </Word>: Object relates to itself through external relationship
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Example
                    </Word>: <Word>
                        <Verbatim />
                        ref =eq&gt; ref
                    </Word> - referent equals itself
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Properties
                    </Word>: Object has both subject and object properties
                </Line>
            </Paragraph>
            <Heading>Case 4: r == o !== s (Relationship as Object)</Heading>
            <Paragraph>
                <Word>
                    <Verbatim />
                    s =r&gt; r
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Semantic
                    </Word>: Subject relates to relationship-as-object
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Example
                    </Word>: <Word>
                        <Verbatim />
                        sym =rep&gt; rep
                    </Word> - symbol is part of representation
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        What this means
                    </Word>: Relationships can be objects of other relationships
                </Line>
            </Paragraph>
            <Heading>Case 5: s == r == o (Pure Self-Reference)</Heading>
            <Paragraph>
                <Word>
                    <Verbatim />
                    r =r&gt; r
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Semantic
                    </Word>: Complete self-reference
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Examples
                    </Word>: <Word>
                        <Verbatim />
                        eq =eq&gt; eq
                    </Word>, <Word>
                        <Verbatim />
                        rel =rel&gt; rel
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        The foundation
                    </Word>: These are self-grounding
                </Line>
            </Paragraph>
            <Heading>Exploring rel =ref&gt; ref</Heading>
            <Paragraph>You're right - I should interpret this semantically!</Paragraph>
            <Paragraph>
                If <Word>
                    <Verbatim />
                    rel =ref&gt; ref
                </Word>, using Case 4 (r == o !== s):
            </Paragraph>
            <Paragraph>
                <List />
                <Line>rel (subject) relates to ref (which is both relationship and object)</Line>
                <Line>
                    <Word>
                        <Bold />
                        Semantic meaning
                    </Word>: "Relationship represents referent"
                </Line>
            </Paragraph>
            <Paragraph>This makes total sense! Relationships ARE representations of how referents relate.</Paragraph>
            <Heading>The (x,y) Revelation</Heading>
            <Paragraph>
                You're absolutely right about <Word>
                    <Verbatim />
                    (x,y)
                </Word>:
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`x =(x,y)> y =|> (x,y) =(x,y)> x & (x,y) =(x,y)> y`}
            </CodeBox>
            <Paragraph>The most specific relationship between x and y:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    Represents x through itself: <Word>
                        <Verbatim />
                        (x,y) =(x,y)&gt; x
                    </Word>
                </Line>
                <Line>
                    Represents y through itself: <Word>
                        <Verbatim />
                        (x,y) =(x,y)&gt; y
                    </Word>
                </Line>
                <Line>It's literally IN THE NAME!</Line>
            </Paragraph>
            <Paragraph>
                This suggests: <Word>
                    <Bold />
                    Relationships represent both their subjects and objects!
                </Word>
            </Paragraph>
            <Heading>Testing Further</Heading>
            <Paragraph>
                If <Word>
                    <Verbatim />
                    r =r&gt; o
                </Word> for any object, then:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Verbatim />
                        rel =rel&gt; sym
                    </Word> (relationships represent symbols)
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        rel =rel&gt; lit
                    </Word> (relationships represent literals)
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        rel =rel&gt; eq
                    </Word> (relationships represent equality)
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Semantic
                </Word>: Relationship is the universal representation!
            </Paragraph>
            <Heading>Symbol Existence</Heading>
            <Paragraph>
                You're right - any referent CAN have a symbol, but it might require creating new referents.
            </Paragraph>
            <Paragraph>
                For a literal like <Word>
                    <Verbatim />
                    tree
                </Word>:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    We can create <Word>
                        <Verbatim />
                        (tree)
                    </Word> as a new referent
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        (tree) =(tree)&gt; tree
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        (tree)
                    </Word> is part of some representation
                </Line>
            </Paragraph>
            <Paragraph>
                For indirect references like <Word>
                    <Verbatim />
                    (x)
                </Word> itself:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Verbatim />
                        ((x))
                    </Word> would equal <Word>
                        <Verbatim />
                        (x)
                    </Word> by termination
                </Line>
                <Line>So these are "symbolically saturated"</Line>
            </Paragraph>
            <Heading>Properties as Self-Reference</Heading>
            <Paragraph>
                If <Word>
                    <Verbatim />
                    x =s&gt; x
                </Word> means "x has subjecthood", then:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>This is a property relationship</Line>
                <Line>Properties are self-referential relationships</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Proposed
                </Word>:
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}E[prop]: A([p]: E[x]: x =p> x & p !== eq): p =prop> prop`}
            </CodeBox>
            <Paragraph>Properties are relationships where things relate to themselves!</Paragraph>
            <Heading>Testing prop</Heading>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Verbatim />
                        s =prop&gt; prop
                    </Word> (subjecthood is a property)
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        o =prop&gt; prop
                    </Word> (objecthood is a property)
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        eq =prop&gt; prop
                    </Word>? (equality is a property?)
                </Line>
            </Paragraph>
            <Paragraph>
                Actually, <Word>
                    <Verbatim />
                    eq =eq&gt; eq
                </Word> fits Case 5, so yes!
            </Paragraph>
            <Heading>ref as Equality in Object Role</Heading>
            <Paragraph>Your insight: "ref might be modeled as equality in the objective role"</Paragraph>
            <Paragraph>
                If <Word>
                    <Verbatim />
                    ref
                </Word> is what all referents share, and all referents equal themselves...
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Verbatim />
                        A&#91;x&#93;: x =eq&gt; x
                    </Word> (everything equals itself)
                </Line>
                <Line>So equality IS the universal property!</Line>
            </Paragraph>
            <Paragraph>
                Maybe we don't need ref at all - <Word>
                    <Verbatim />
                    eq
                </Word> serves that role!
            </Paragraph>
            <Heading>Building Axioms from Semantics</Heading>
            <Heading>Axiom 1: Equality is Universal</Heading>
            <CodeBox
                language="srt"
            >
                {`${''}E[eq]: A[x,y]: x = y <iff> x =eq> y`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    Semantic
                </Word>: Equality captures logical equality as reference
            </Paragraph>
            <Heading>Axiom 2: Relationships Self-Relate</Heading>
            <CodeBox
                language="srt"
            >
                {`${''}E[rel]: rel =rel> rel`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    Semantic
                </Word>: The foundational self-reference
            </Paragraph>
            <Heading>Axiom 3: Relationships Form Representations</Heading>
            <CodeBox
                language="srt"
            >
                {`${''}A([r]: E([x,y]: x =r> y & r !== eq)): r =rel> rel || r == rel`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    Semantic
                </Word>: Every relationship represents through rel
            </Paragraph>
            <Heading>Axiom 4: Subjects and Objects Emerge</Heading>
            <CodeBox
                language="srt"
            >
                {`${''}E[s,o]: A([x,y,r]: x =r> y & x !== y): x =s> x & y =o> y`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    Semantic
                </Word>: Distinct reference creates subject/object properties
            </Paragraph>
            <Heading>Axiom 5: Symbols Symbolize</Heading>
            <CodeBox
                language="srt"
            >
                {`${''}E[sym,lit]: sym =sym> lit & sym !== lit`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    Semantic
                </Word>: The fundamental symbol-literal relationship
            </Paragraph>
            <Heading>Axiom 6: Properties Self-Refer</Heading>
            <CodeBox
                language="srt"
            >
                {`${''}E[prop]: A([p]: E[x]: x =p> x & p !== eq): p =prop> prop`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    Semantic
                </Word>: Properties are self-referential relationships
            </Paragraph>
            <Heading>Key Theorems from Semantics</Heading>
            <Heading>Theorem: Relationships Represent Their Terms</Heading>
            <CodeBox
                language="srt"
            >
                {`x =r> y =|> r =r> x & r =r> y`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    Proof sketch
                </Word>: From the semantics of (x,y) and relationship as representation
            </Paragraph>
            <Heading>Theorem: Symbols are Relationships</Heading>
            <CodeBox
                language="srt"
            >
                {`sym =sym> lit =|> sym =rel> rel`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    Proof
                </Word>: From Case 2 semantics
            </Paragraph>
            <Heading>Theorem: Everything Has Potential Symbols</Heading>
            <CodeBox>
                {`${''}A[x]: Can introduce (x) such that (x) =(x)> x`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    Semantic
                </Word>: Extensibility of symbolism
            </Paragraph>
            <Heading>Theorem: rel Represents All Relationships</Heading>
            <CodeBox
                language="srt"
            >
                {`${''}A([r]: r =rel> rel): rel =rel> r`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    Semantic
                </Word>: rel is the universal representation of relationships
            </Paragraph>
            <Heading>Next Iteration: What Needs Proving?</Heading>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Chaining
                    </Word>: If <Word>
                        <Verbatim />
                        x =rel&gt; y
                    </Word> and <Word>
                        <Verbatim />
                        y =rel&gt; z
                    </Word>, does <Word>
                        <Verbatim />
                        x =rel&gt; z
                    </Word>?
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Most Specific
                    </Word>: How do we formally capture (x,y)?
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Symbol Termination
                    </Word>: Why <Word>
                        <Verbatim />
                        ((x),x) == (x)
                    </Word>?
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Property Inheritance
                    </Word>: Do properties inherit from eq?
                </Line>
            </Paragraph>
            <Paragraph>Each needs semantic interpretation!</Paragraph>
        </Section>
    </Chapter>
);
