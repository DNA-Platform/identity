import { Bold, Chapter, Heading, Line, List, Paragraph, Section, Title, Word } from '@dna-platform/public';
import { CodeBox, Opaque, Verbatim } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Notes on SRT Definitions and Reference Frames v1 ]]</Title>
        <Section>
            <Opaque />
            <Heading>Notes on SRT Definitions and Reference Frames at version 1</Heading>
            <Heading>Notes on SRT Definitions and Reference Frames</Heading>
            <Heading>New Syntax Proposals</Heading>
            <Heading>Reference Frame Declaration</Heading>
            <CodeBox>
                {`${''}R[rel]  // Declares reference frame of relationship`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    Rationale
                </Word>: Overloading R emphasizes that frames are about reference to the subject of relationship.
            </Paragraph>
            <Heading>Definition Syntax</Heading>
            <CodeBox>
                {`${''}def[x]: ...   // Definition that creates inheritance
def(x): ...   // Definition that doesn't create inheritance`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    Key insight
                </Word>: <Word>
                    <Verbatim />
                    def&#91;x&#93;
                </Word> suggests defining what x stands for in terms of x itself - circular but semantically necessary.
            </Paragraph>
            <Heading>Transpiler Rules</Heading>
            <Paragraph>
                <List />
                <Line>
                    Line breaks without operators mean <Word>
                        <Verbatim />
                        :&amp;:
                    </Word> (each line parenthesized)
                </Line>
                <Line>Implications with indented lines: implication applies to AND of all indented lines</Line>
                <Line>This makes the syntax cleaner and more readable</Line>
            </Paragraph>
            <Heading>Core Theoretical Insights</Heading>
            <Heading>Relationships as Fundamentally Symbolic</Heading>
            <Paragraph>From the axioms of identity (needs citation):</Paragraph>
            <CodeBox
                language="srt"
            >
                {`(x) =(p)> x =|> x =p> x  // Symbols convey properties`}
            </CodeBox>
            <Paragraph>Therefore:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`(x) =(x)> x =|> x =x> x =|> (x,x) == x`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    Critical observation
                </Word>: For relationships, we assert:
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`x =t> y =|> (t,t) == t`}
            </CodeBox>
            <Paragraph>
                This means relationship types are inherently symbolic - they are their own self-relationships.
            </Paragraph>
            <Heading>The Subject's Self-Relationship</Heading>
            <Paragraph>
                When x plays subjective role in <Word>
                    <Verbatim />
                    x =&gt; y
                </Word>:
            </Paragraph>
            <CodeBox>
                {`(x,x) -> (x,y)
(x,y) =(x,y)> x  
(x,y) =(x,y)> y`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    Interpretation
                </Word>: A subject's self-relationship inherits from all its external relationships. The relationships
                represent what the subject means. Subjectivity IS the idea that a subject represents its subject matter.
            </Paragraph>
            <Heading>Attempted Definitions</Heading>
            <Heading>Definition of obj</Heading>
            <CodeBox>
                {`${''}def[obj]:
   rel(obj) =rel(obj)> obj`}
            </CodeBox>
            <Paragraph>Unpacking this:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Verbatim />
                        rel(obj) == ((obj,obj), rel)
                    </Word>
                </Line>
                <Line>
                    Since <Word>
                        <Verbatim />
                        (obj,obj) == obj
                    </Word> (symbolic), this becomes <Word>
                        <Verbatim />
                        (obj, rel)
                    </Word>
                </Line>
                <Line>
                    So: <Word>
                        <Verbatim />
                        (obj, rel) =(obj,rel)&gt; obj
                    </Word>
                </Line>
            </Paragraph>
            <Paragraph>
                This means for any <Word>
                    <Verbatim />
                    x -&gt; obj
                </Word>:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Verbatim />
                        t -&gt; rel(x)
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        t =t&gt; x
                    </Word>
                </Line>
                <Line>Any relationship type t that x participates in as object</Line>
            </Paragraph>
            <Heading>Definition of sub</Heading>
            <CodeBox>
                {`${''}def[sub]:
  sub =rel(sub)> obj(sub)
  rel(sub) =rel(sub)> sub
  (sub, sub) -> rel(sub)`}
            </CodeBox>
            <Paragraph>This creates a richer structure where:</Paragraph>
            <Paragraph>
                <List />
                <Line>sub relates to its version of obj through its version of rel</Line>
                <Line>The relationships also represent sub itself</Line>
                <Line>sub's self-relationship inherits from its relational role</Line>
            </Paragraph>
            <Heading>Definition of rel</Heading>
            <CodeBox
                language="srt"
            >
                {`${''}def(rel):  // Note: def() not def[]
   sub =rel> obj
   (sub, obj) == rel`}
            </CodeBox>
            <CodeBox
                language="srt"
            >
                {`${''}def[rel]:
   sub(rel) =rel> obj(rel)
   (sub(rel), obj(rel)) -> rel`}
            </CodeBox>
            <Paragraph>
                The first is non-inherited - a fact ABOUT rel itself. The second shows what inherits FROM rel.
            </Paragraph>
            <Heading>Key Questions and Attempted Answers</Heading>
            <Heading>Q: Why does this circular definition structure work?</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    A
                </Word>: It mirrors how dictionaries actually function. The definition of "definition" uses "the", which
                appears after "definition" alphabetically. Dictionaries aren't linear - they're networks of mutual
                definition. Similarly, SRT referents define each other in a web of relationships.
            </Paragraph>
            <Paragraph>
                This circularity isn't a bug but the fundamental feature that makes meaning possible. Each referent gains
                meaning through its relationships to others, and those relationships are themselves referents.
            </Paragraph>
            <Heading>Q: How does def&#91;x&#93; relate to inheritance?</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    A
                </Word>: <Word>
                    <Verbatim />
                    def&#91;x&#93;
                </Word> creates a definition that things inheriting from x must satisfy. It's saying "anything that claims
                to be a kind of x must have these properties." The bracketed notation suggests we're defining the
                dereferenced/literal aspect that gets inherited.
            </Paragraph>
            <Paragraph>
                Meanwhile <Word>
                    <Verbatim />
                    def(x)
                </Word> states facts about x itself that don't necessarily propagate through inheritance.
            </Paragraph>
            <Heading>Q: What does it mean for relationships to be "fundamentally symbolic"?</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    A
                </Word>: The equation <Word>
                    <Verbatim />
                    (t,t) == t
                </Word> for relationship types means they collapse their self-reference. Unlike concrete objects that might
                have <Word>
                    <Verbatim />
                    (x,x) != x
                </Word>, relationships ARE their own self-relationships. This makes them inherently symbolic - they exist as
                symbols of themselves.
            </Paragraph>
            <Paragraph>
                This explains why <Word>
                    <Verbatim />
                    r == (rel)
                </Word> - the relationship type r is the canonical symbol for the concept of relationship.
            </Paragraph>
            <Heading>Q: How does this provide a model for semantic theory extension?</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    A
                </Word>: New semantic theories can:
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    Introduce new referents with <Word>
                        <Verbatim />
                        def&#91;x&#93;
                    </Word>
                </Line>
                <Line>Establish what inherits from them</Line>
                <Line>Create new relationship types (automatically symbolic)</Line>
                <Line>Build on existing definitions through inheritance chains</Line>
            </Paragraph>
            <Paragraph>The framework is extensible because:</Paragraph>
            <Paragraph>
                <List />
                <Line>Definitions can reference not-yet-defined terms</Line>
                <Line>Inheritance allows specialization without breaking existing patterns</Line>
                <Line>
                    The symbolic nature of relationships means new relationship types automatically gain proper semantic
                    structure
                </Line>
            </Paragraph>
            <Heading>Open Questions for Doug</Heading>
            <Paragraph>
                <List ordered />
                <Line>
                    Should we formalize the relationship between <Word>
                        <Verbatim />
                        def&#91;x&#93;
                    </Word> and the transpiler's handling of <Word>
                        <Verbatim />
                        x =x&gt; x
                    </Word>?
                </Line>
                <Line>
                    The parametric forms like <Word>
                        <Verbatim />
                        rel(obj)
                    </Word> - should these be part of the core transpiler or derived?
                </Line>
                <Line>
                    How does frame R&#91;rel&#93; affect the visibility/interpretation of these definitions? Do some
                    definitions only make sense in certain frames?
                </Line>
            </Paragraph>
            <Heading>Observations on Semantic Structure</Heading>
            <Paragraph>The three core definitions (sub, obj, rel) form an irreducible trinity:</Paragraph>
            <Paragraph>
                <List />
                <Line>Can't define any without the others</Line>
                <Line>Each participates in defining the others</Line>
                <Line>Together they bootstrap semantic structure</Line>
            </Paragraph>
            <Paragraph>
                This mirrors the bootstrap principle from the original paper - from one relationship, the entire semantic
                architecture emerges. But now we see HOW it emerges through these circular definitions.
            </Paragraph>
            <Paragraph>
                The symbolic nature of relationships (<Word>
                    <Verbatim />
                    (t,t) == t
                </Word>) provides the key that makes the whole system work. Without this self-collapse, the definitions
                would spiral into infinite regress.
            </Paragraph>
        </Section>
    </Chapter>
);
