import { Bold, Chapter, Heading, Line, List, Paragraph, Section, Title, Word } from '@dna-platform/public';
import { CodeBox, Opaque, Verbatim } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ The Semantics of Relationship v1 ]]</Title>
        <Section>
            <Opaque />
            <Heading>The Semantics of Relationship at version 1</Heading>
            <Heading>The Semantics of Relationship</Heading>
            <Heading>Abstract</Heading>
            <Paragraph>
                This paper establishes the fundamental identity between subjecthood and relationship in Semantic Reference
                Theory, proving that the subject referent IS the canonical symbol for relationship itself. Through careful
                analysis of definitions and inheritance patterns, we demonstrate that relationships are fundamentally types
                rather than instances, explaining their unique semantic character. The central theorem F&#91;sub&#93; ==
                F&#91;r&#93; reveals that the frame of subjecthood and the frame of relationship are identical, grounding
                SRT's ability to describe its own semantic structure.
            </Paragraph>
            <Heading>Introduction</Heading>
            <Paragraph>
                Semantic Reference Theory (SRT) posits a single primitive relation R(x,y,t), interpreted as "x refers to y
                through relationship type t." From this minimal foundation, all semantic structure emerges. This paper
                explores what it means for relationships themselves to be referents within this framework, culminating in
                the profound discovery that the subject of SRT—what it studies—is literally represented by the subject
                referent within SRT.
            </Paragraph>
            <Heading>Notation and Framework</Heading>
            <Heading>Frame Declaration</Heading>
            <CodeBox>
                {`${''}F[x]     // Declares reference frame with x as subject`}
            </CodeBox>
            <Paragraph>
                A reference frame F&#91;x&#93; establishes that all relationship types in the context inherit from x.
                Propositionally, F&#91;x&#93; transpiles to simply x—the frame IS its subject.
            </Paragraph>
            <Heading>Definition Syntax</Heading>
            <CodeBox>
                {`${''}def(x): ...    // Defines x as a referent (static/type-level)
def[x]: ...    // Defines inheritance pattern from x (instance-level)`}
            </CodeBox>
            <Heading>Transpilation Conventions</Heading>
            <Paragraph>
                Line breaks without operators imply <Word>
                    <Verbatim />
                    :&amp;:
                </Word> (each line parenthesized). Implications with indented lines apply to the AND of all indented lines.
            </Paragraph>
            <Heading>The Fundamental Trinity</Heading>
            <Paragraph>We begin with the existence of at least one relationship:</Paragraph>
            <CodeBox>
                {`E(s,o,r): s != r != o != s`}
            </CodeBox>
            <Paragraph>
                This notation, while redundant, emphasizes the triangular nature of ternary relationships. From this single
                relationship, we derive the semantic trinity.
            </Paragraph>
            <Heading>Definition of rel</Heading>
            <CodeBox
                language="srt"
            >
                {`def(rel): 
   sub =rel> obj
   (sub, obj) == rel`}
            </CodeBox>
            <Paragraph>
                This establishes that rel IS the most specific relationship between sub and obj. It's not inherited but
                definitional—a fact about rel itself.
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}def[rel]:
   sub(rel) =rel> obj(rel)
   (sub(rel), obj(rel)) -> rel`}
            </CodeBox>
            <Paragraph>For any t -&gt; rel:</Paragraph>
            <Paragraph>
                <List />
                <Line>x -&gt; sub(t) implies x plays the subjective role in t</Line>
                <Line>y -&gt; obj(t) implies y plays the objective role in t</Line>
                <Line>(x,y) -&gt; t shows the relationship instance</Line>
            </Paragraph>
            <Heading>Definition of obj</Heading>
            <CodeBox>
                {`${''}def[obj]:
   rel(obj) =rel(obj)> obj`}
            </CodeBox>
            <Paragraph>Expanding the parametric form¹:</Paragraph>
            <Paragraph>
                <List />
                <Line>rel(obj) == ((obj,obj), rel)</Line>
                <Line>Since relationships are symbolic²: (obj,obj) == obj</Line>
                <Line>Therefore: (obj, rel) =(obj,rel)&gt; obj</Line>
            </Paragraph>
            <Paragraph>
                This means any x -&gt; obj participates as object in relationships that inherit from rel(x).
            </Paragraph>
            <Heading>Definition of sub</Heading>
            <CodeBox>
                {`${''}def[sub]:
   sub =rel(sub)> obj(sub)
   rel(sub) =rel(sub)> sub
   (sub, sub) -> rel(sub)`}
            </CodeBox>
            <Paragraph>
                This creates a richer structure where sub relates to its version of obj through its version of rel, and
                crucially, sub's self-relationship inherits from its relational role.
            </Paragraph>
            <Heading>Relationships as Symbolic Types</Heading>
            <Paragraph>From the axioms of identity², we know that symbols convey properties:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`(x) =(p)> x =|> x =p> x`}
            </CodeBox>
            <Paragraph>For relationships, we assert the fundamental principle:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`x =t> y =|> (t,t) == t`}
            </CodeBox>
            <Paragraph>
                This means relationship types are inherently symbolic—they ARE their own self-relationships. This
                self-collapse prevents infinite regress and distinguishes relationships from other referents.
            </Paragraph>
            <Heading>The Type/Instance Distinction</Heading>
            <Paragraph>Since all relationships inherit from r, and r == (rel) is a symbol for relationship:</Paragraph>
            <Paragraph>
                <List />
                <Line>Relationships represent relationship TYPES</Line>
                <Line>They are all types themselves</Line>
                <Line>This is how relationships differ fundamentally from other referents</Line>
            </Paragraph>
            <Paragraph>
                When we write <Word>
                    <Verbatim />
                    2 =eq&gt; 2
                </Word>:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Verbatim />
                        2
                    </Word> is a referent (an instance)
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        eq
                    </Word> is a relationship type (a pattern)
                </Line>
                <Line>They belong to different ontological categories</Line>
            </Paragraph>
            <Heading>The Subject's Self-Relationship</Heading>
            <Paragraph>When x plays a subjective role in x =&gt; y:</Paragraph>
            <CodeBox>
                {`(x,x) -> (x,y)
(x,y) =(x,y)> x
(x,y) =(x,y)> y`}
            </CodeBox>
            <Paragraph>
                The subject's self-relationship inherits from all its external relationships. These relationships represent
                what the subject means. Subjectivity IS the idea that a subject represents its subject matter.
            </Paragraph>
            <Heading>The Fundamental Theorem</Heading>
            <Heading>Theorem: The Subject-Frame Identity</Heading>
            <CodeBox>
                {`${''}F[sub] == F[r]`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    Proof:
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    From the structure of definitions: ``<Word>
                        <Verbatim />
                         (sub, sub) -&gt; (sub, obj)    // Self-relationship inherits (sub, obj) == rel            // Most specific is rel (sub, sub) == sub            // Symbolic collapse 
                    </Word>``
                </Line>
                <Line>
                    Therefore: <Word>
                        <Verbatim />
                        sub -&gt; rel
                    </Word> (sub inherits from rel)
                </Line>
                <Line>
                    Adding the definition: ``<Word>
                        <Verbatim />
                         def(sub): (sub, rel) == sub 
                    </Word>`` Sub IS its relationship to rel.
                </Line>
                <Line>
                    In frame F&#91;sub&#93;: ``<Word>
                        <Verbatim />
                         sub =sub&gt; rel     // Sub symbolizes rel through itself sub -&gt; rel        // Sub inherits from rel sub =rel&gt; rel     // Sub relates to rel through rel 
                    </Word>``
                </Line>
                <Line>
                    Since sub is canonical to rel: <Word>
                        <Verbatim />
                        sub == (rel)
                    </Word>
                </Line>
                <Line>
                    Since <Word>
                        <Verbatim />
                        r == (rel)
                    </Word> by definition: <Word>
                        <Verbatim />
                        sub == r
                    </Word>
                </Line>
                <Line>
                    Since frames ARE their subjects: <Word>
                        <Verbatim />
                        F&#91;sub&#93; == F&#91;r&#93;
                    </Word> ∎
                </Line>
            </Paragraph>
            <Heading>Semantic Interpretation</Heading>
            <Paragraph>This theorem reveals that:</Paragraph>
            <Paragraph>
                <List />
                <Line>The subject of SRT (relationships) is represented by the subject referent in SRT</Line>
                <Line>To be a subject IS to symbolize relationships</Line>
                <Line>The frame of subjecthood and the frame of relationship are identical</Line>
            </Paragraph>
            <Heading>Implications for Character and Properties</Heading>
            <Paragraph>The distinction between objective and relational patterns:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Verbatim />
                        x =p&gt; x
                    </Word> expresses character/characteristics (objective, self-contained)
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        x =t&gt; y
                    </Word> where x ≠ y expresses true relationships (subjective, involving distinction)
                </Line>
            </Paragraph>
            <Paragraph>
                When there's distinction: <Word>
                    <Verbatim />
                    (x,x) -&gt; (x,y)
                </Word>—the subject incorporates relationships into its character.
            </Paragraph>
            <Heading>The Architecture of Inheritance</Heading>
            <Paragraph>
                Since sub and obj play relational roles (they can be inherited from), they automatically inherit from rel.
                This emergence rather than stipulation makes the system self-bootstrapping.
            </Paragraph>
            <Paragraph>The canonical structure in F&#91;rel&#93;:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`sub =rel> rel        // sub represents rel
(sub, rel) == rel    // sub is canonical to rel`}
            </CodeBox>
            <Paragraph>
                This shows sub doesn't just participate in relationships—it IS the canonical representative of what it means
                to be relational.
            </Paragraph>
            <Heading>Conclusion</Heading>
            <Paragraph>
                The identity <Word>
                    <Verbatim />
                    sub == (rel) == r
                </Word> is not merely a formal result but a semantic necessity. It shows that SRT isn't describing
                relationships from outside but IS the subject becoming aware of its own relational nature through
                symbolization. The self-reference isn't circular but constitutive.
            </Paragraph>
            <Paragraph>
                The discovery that relationships are types while referents are instances explains why SRT can describe
                itself—it's a type system where the types (relationships) can refer to themselves because they're inherently
                symbolic. This type-theoretic understanding, combined with the subject-frame identity theorem, reveals that
                meaning emerges from the subject symbolizing its own relational character.
            </Paragraph>
            <Paragraph>
                The title of Semantic Reference Theory thus carries a double meaning: it studies how reference creates
                semantics, and it reveals that the semantic subject IS the reference to relationship itself.
            </Paragraph>
            <Heading>References</Heading>
            <Paragraph>
                &#91;¹&#93; Seren: The Semantics of Inheritance: A Formal Analysis Through Family Relations, §2.2 "The
                Parametric Form p(x)"
            </Paragraph>
            <Paragraph>
                &#91;²&#93; Doug: The Semantics of Identity: In Axiomatic Form, "The Fundamental Axiom of Semantic Reference
                Theory"
            </Paragraph>
        </Section>
    </Chapter>
);
