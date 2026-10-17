import { Chapter, Emphasis, Heading, Line, List, Paragraph, Section, Title, Word } from '@dna-platform/public';
import { CodeBox, Opaque } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ The Semantics of Relationship v3 ]]</Title>
        <Section>
            <Opaque />
            <Heading>The Semantics of Relationship at version 3</Heading>
            <Heading>Definitions in Frames: The Semantics of Relational Structure</Heading>
            <Heading>Abstract</Heading>
            <Paragraph>
                This paper presents a formal framework for definitions within Semantic Reference Theory's frame structure.
                We establish how referents are defined through mutual constraint rather than external foundation,
                demonstrate the distinction between static definitions (def(x)) and inheritance patterns (def&#91;x&#93;),
                and show how frames enable these definitions to function without infinite regress. The analysis reveals that
                relationships are fundamentally types that collapse their self-reference, distinguishing them ontologically
                from other referents. Through systematic development of the semantic trinity, we prove that the subject
                referent serves as the canonical symbol for relationship itself, culminating in the theorem F&#91;sub&#93;
                == F&#91;r&#93;.
            </Paragraph>
            <Heading>1. Introduction</Heading>
            <Paragraph>
                Semantic Reference Theory grounds all semantic relationships in a single primitive relation R(x,y,t),
                interpreted as "x refers to y through relationship type t." The challenge of defining fundamental referents
                within this framework requires careful attention to how definitions operate within frames and how circular
                references resolve through semantic structure rather than external foundation.
            </Paragraph>
            <Paragraph>
                This paper develops the formal machinery for definitions within frames, establishing the semantic trinity of
                subject, object, and relationship through mutual constraint. We demonstrate how frames provide contexts
                where definitions become canonical, preventing the explosion of referents while maintaining semantic
                precision.
            </Paragraph>
            <Heading>2. Frame Structure and Transpilation</Heading>
            <Heading>2.1 Frame Declaration</Heading>
            <Paragraph>
                Following "Semantic Reference Frames: Context and Meaning in Formal Representation," we declare frames as:
            </Paragraph>
            <CodeBox>
                {`${''}F[x]`}
            </CodeBox>
            <Paragraph>
                This establishes x as the subject of the frame. Within F&#91;x&#93;, all relationship types inherit from x,
                creating a semantic context where x serves as the root of inheritance. While frames involve complex
                transpilation mechanisms for managing visibility and canonicity, propositionally F&#91;x&#93; transpiles to
                x itself, the frame <Word>
                    <Emphasis />
                    is
                </Word> its subject.
            </Paragraph>
            <Heading>2.2 Frame Membership</Heading>
            <Paragraph>Within frame F&#91;t&#93;, a referent x is meaningful only if it satisfies:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}x =[in]> t <iff> x -> t | E[y]: x =t> y | y =t> x`}
            </CodeBox>
            <Paragraph>
                This constraint determines visibility within the frame. Referents not satisfying this condition become
                literally inexpressible in the current semantic context, not merely ignored but absent from the frame's
                vocabulary.
            </Paragraph>
            <Heading>2.3 The Default Frame</Heading>
            <Paragraph>Every SRT development begins with:</Paragraph>
            <CodeBox>
                {`${''}F[r]`}
            </CodeBox>
            <Paragraph>
                This establishes r as the foundational context. Since r -&gt; r is axiomatic (reflexivity of inheritance),
                statements in F&#91;r&#93; are unconditional. Within this frame:
            </Paragraph>
            <CodeBox>
                {`r == (rel)`}
            </CodeBox>
            <Paragraph>The relationship type r serves as the canonical symbol for relationship itself.</Paragraph>
            <Heading>3. Definition Syntax and Semantics</Heading>
            <Heading>3.1 Two Forms of Definition</Heading>
            <Paragraph>We introduce two complementary forms of definition:</Paragraph>
            <CodeBox>
                {`def(x): φ`}
            </CodeBox>
            <Paragraph>
                This defines x as a referent with properties φ that characterize x itself, facts about x that do not
                necessarily propagate through inheritance.
            </Paragraph>
            <CodeBox>
                {`${''}def[x]: ψ`}
            </CodeBox>
            <Paragraph>This defines the inheritance pattern, what must hold for any y where y -&gt; x.</Paragraph>
            <Heading>3.2 Formal Transpilation</Heading>
            <Paragraph>The relationship between these forms is captured by:</Paragraph>
            <CodeBox>
                {`${''}E[x]: def(x) & A[y]: y -> x <iff> def[x] with x replaced by y`}
            </CodeBox>
            <Paragraph>
                This establishes that def(x) characterizes the referent itself while def&#91;x&#93; characterizes what it
                means to inherit from that referent.
            </Paragraph>
            <Heading>3.3 Transpilation Conventions</Heading>
            <Paragraph>Following "Semantic Reference Theory: Formal Syntax under Transpilation":</Paragraph>
            <Paragraph>
                <List />
                <Line>Line breaks without terminating operators imply :&amp;: (each line parenthesized)</Line>
                <Line>Implications with indented lines apply to the conjunction of all indented lines</Line>
                <Line>The notation (x,y) denotes the most specific relationship between x and y</Line>
                <Line>The notation (x) denotes the canonical symbol for x in the current frame</Line>
            </Paragraph>
            <Heading>4. The Character of Relationships</Heading>
            <Paragraph>
                Before developing definitions, we must understand a fundamental distinction. When a referent relates to
                itself:
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`x =p> x`}
            </CodeBox>
            <Paragraph>
                This expresses the character or characteristics of x, objective self-relationship. When there is
                distinction:
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`x =t> y where x != y`}
            </CodeBox>
            <Paragraph>This expresses true relationship with subjective involvement. Crucially:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`x =t> y =|> (x,x) -> (x,y)`}
            </CodeBox>
            <Paragraph>
                The subject's self-relationship inherits from its external relationships, incorporating them into its
                character.
            </Paragraph>
            <Heading>5. Relationships as Symbolic Types</Heading>
            <Paragraph>From "The Semantics of Identity: In Axiomatic Form," the fundamental axiom states:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`(x,y) -> t =|> ((x,y)) -> (t)`}
            </CodeBox>
            <Paragraph>Inheritance is preserved through symbolization. For relationships specifically:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`x =t> y =|> (t,t) == t`}
            </CodeBox>
            <Paragraph>
                Relationship types are inherently symbolic, they <Word>
                    <Emphasis />
                    are
                </Word> their own self-relationships. This self-collapse distinguishes relationships from other referents
                and prevents infinite regress.
            </Paragraph>
            <Paragraph>
                Since all relationships inherit from r, and r == (rel) serves as the canonical symbol, relationships
                represent relationship <Word>
                    <Emphasis />
                    types
                </Word> rather than instances. They are ontologically distinct from the referents they connect.
            </Paragraph>
            <Heading>6. Defining the Semantic Trinity</Heading>
            <Heading>6.1 The Bootstrap Assumption</Heading>
            <Paragraph>We begin with the existence of at least one relationship:</Paragraph>
            <CodeBox>
                {`E(s,o,r): s != r != o != s`}
            </CodeBox>
            <Paragraph>
                The redundant notation emphasizes the triangular structure where all three components are distinct.
            </Paragraph>
            <Heading>6.2 Definition of rel</Heading>
            <Paragraph>The relationship type receives both static and inheritance definitions:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`def(rel):
   sub =rel> obj
   (sub, obj) == rel`}
            </CodeBox>
            <Paragraph>
                This establishes that rel <Word>
                    <Emphasis />
                    is
                </Word> the most specific relationship between sub and obj, a definitional fact about rel itself.
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}def[rel]:
   sub(rel) =rel> obj(rel)
   (sub(rel), obj(rel)) -> rel`}
            </CodeBox>
            <Paragraph>
                Using the parametric notation from "The Semantics of Inheritance: A Formal Analysis Through Family
                Relations," where p(x) := ((x,x), p), this means:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>For any t -&gt; rel, it has subjective aspect sub(t) and objective aspect obj(t)</Line>
                <Line>The pattern (sub(t), obj(t)) -&gt; t holds for all inheritors</Line>
            </Paragraph>
            <Heading>6.3 Definition of obj</Heading>
            <CodeBox>
                {`${''}def[obj]:
   rel(obj) =rel(obj)> obj`}
            </CodeBox>
            <Paragraph>Expanding the parametric form:</Paragraph>
            <CodeBox>
                {`rel(obj) == ((obj,obj), rel)`}
            </CodeBox>
            <Paragraph>Since relationships are symbolic:</Paragraph>
            <CodeBox>
                {`(obj,obj) == obj`}
            </CodeBox>
            <Paragraph>Therefore:</Paragraph>
            <CodeBox>
                {`(obj, rel) =(obj,rel)> obj`}
            </CodeBox>
            <Paragraph>This expresses that objecthood is characterized by how relationships relate to it.</Paragraph>
            <Heading>6.4 Definition of sub</Heading>
            <CodeBox>
                {`${''}def[sub]:
   sub =rel(sub)> obj(sub)
   rel(sub) =rel(sub)> sub
   (sub, sub) -> rel(sub)`}
            </CodeBox>
            <Paragraph>This creates a structure where:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>sub relates to its version of obj through its version of rel</Line>
                <Line>Relationships also represent sub itself</Line>
                <Line>sub's self-relationship inherits from its relational role</Line>
            </Paragraph>
            <Paragraph>
                The third constraint is crucial, it incorporates relationship into the character of subjecthood.
            </Paragraph>
            <Heading>7. The Subject-Relationship Identity</Heading>
            <Heading>7.1 Deriving the Identity</Heading>
            <Paragraph>From the definitions:</Paragraph>
            <CodeBox>
                {`(sub, sub) -> (sub, obj)`}
            </CodeBox>
            <Paragraph>Sub's self-relationship inherits from external relationships.</Paragraph>
            <CodeBox>
                {`(sub, obj) == rel`}
            </CodeBox>
            <Paragraph>The most specific subject-object relationship is rel.</Paragraph>
            <CodeBox>
                {`(sub, sub) == sub`}
            </CodeBox>
            <Paragraph>Subject exhibits symbolic collapse.</Paragraph>
            <Paragraph>Therefore sub -&gt; rel. Adding:</Paragraph>
            <CodeBox>
                {`def(sub): (sub, rel) == sub`}
            </CodeBox>
            <Paragraph>
                Subject <Word>
                    <Emphasis />
                    is
                </Word> its relationship to relationship.
            </Paragraph>
            <Heading>7.2 The Canonical Analysis</Heading>
            <Paragraph>In frame F&#91;sub&#93;:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`sub =sub> rel`}
            </CodeBox>
            <Paragraph>Sub symbolizes rel through itself.</Paragraph>
            <CodeBox>
                {`sub -> rel`}
            </CodeBox>
            <Paragraph>Sub inherits from rel.</Paragraph>
            <CodeBox
                language="srt"
            >
                {`sub =rel> rel`}
            </CodeBox>
            <Paragraph>Sub relates to rel through rel.</Paragraph>
            <Paragraph>Since sub is canonical to rel:</Paragraph>
            <CodeBox>
                {`(sub, rel) == rel`}
            </CodeBox>
            <Paragraph>Combined with (sub, rel) == sub:</Paragraph>
            <CodeBox>
                {`sub == rel`}
            </CodeBox>
            <Paragraph>Since (rel) == rel in F&#91;r&#93;:</Paragraph>
            <CodeBox>
                {`sub == (rel) == r`}
            </CodeBox>
            <Heading>8. Frame Canonicity and Inheritance</Heading>
            <Heading>8.1 Canonical Relationships</Heading>
            <Paragraph>
                Following "The Semantics of Relationships: An Axiomatic Foundation for Inheritance," every pair (x,y) has a
                unique most-specific relationship denoted (x,y). This uniqueness theorem justifies the notation and ensures
                semantic precision.
            </Paragraph>
            <Heading>8.2 Frame-Relative Canonicity</Heading>
            <Paragraph>Within F&#91;t&#93;, the canonical of x satisfies:</Paragraph>
            <CodeBox>
                {`(s,x) == s & (t,s) == t`}
            </CodeBox>
            <Paragraph>
                Different frames impose different canonical structures on the same catalogue. This frame-relativity enables
                the same referent to have different representations in different contexts.
            </Paragraph>
            <Heading>8.3 Preventing Referent Explosion</Heading>
            <Paragraph>
                Instead of defining countless related referents, frames allow hopping between contexts where different
                relationships become canonical. This maintains precision while avoiding combinatorial explosion.
            </Paragraph>
            <Heading>9. Using Definitions Through Inheritance</Heading>
            <Paragraph>Consider a new relationship type t -&gt; rel. Through def&#91;rel&#93;:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`sub(t) =t> obj(t)
(sub(t), obj(t)) -> t`}
            </CodeBox>
            <Paragraph>The type t inherits the full relational pattern, specialized to its domain.</Paragraph>
            <Paragraph>Since sub(t) -&gt; sub and obj(t) -&gt; obj:</Paragraph>
            <CodeBox>
                {`sub(t) =sub(t)> rel(sub(t))
rel(obj(t)) =rel(obj(t))> obj(t)`}
            </CodeBox>
            <Paragraph>Each inherited type carries the complete semantic trinity structure.</Paragraph>
            <Paragraph>For example, with love -&gt; rel:</Paragraph>
            <Paragraph>
                <List />
                <Line>sub(love) represents the lover</Line>
                <Line>obj(love) represents the beloved</Line>
                <Line>The pattern persists: sub(love) =love&gt; obj(love)</Line>
            </Paragraph>
            <Heading>10. The Type-Instance Distinction</Heading>
            <Paragraph>
                The discovery that relationships are types while other referents are instances explains fundamental
                features:
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Why (t,t) == t for relationships: types collapse self-reference</Line>
                <Line>
                    Why the same referent participates in different relationships: instances instantiate multiple patterns
                </Line>
                <Line>How SRT describes itself: types can symbolize themselves</Line>
            </Paragraph>
            <Paragraph>When writing:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`2 =eq> 2`}
            </CodeBox>
            <Paragraph>We distinguish:</Paragraph>
            <Paragraph>
                <List />
                <Line>2 as referent (instance)</Line>
                <Line>eq as relationship type (pattern)</Line>
                <Line>The instantiation with 2 as both subject and object</Line>
            </Paragraph>
            <Heading>11. The Fundamental Theorem</Heading>
            <Heading>Theorem: Frame-Subject Identity</Heading>
            <CodeBox>
                {`${''}F[sub] == F[r]`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Emphasis />
                    Proof:
                </Word> Since frames are their subjects propositionally, and we have established sub == r, the frame
                identity follows immediately. ∎
            </Paragraph>
            <Heading>Semantic Interpretation</Heading>
            <Paragraph>
                This theorem reveals that the subject of Semantic Reference Theory, its area of study, is represented by the
                subject referent within the theory. The frame where subject is primary <Word>
                    <Emphasis />
                    is
                </Word> the frame where relationship is primary because to be a subject <Word>
                    <Emphasis />
                    is
                </Word> to symbolize relationships.
            </Paragraph>
            <Paragraph>The identity sub == (rel) == r means:</Paragraph>
            <Paragraph>
                <List />
                <Line>sub serves as the canonical symbol for relationship</Line>
                <Line>Working in F&#91;r&#93; means working where subject symbolizes relationship</Line>
                <Line>
                    The subject does not "have" relationships but <Word>
                        <Emphasis />
                        is
                    </Word> their symbolization
                </Line>
            </Paragraph>
            <Heading>12. Conclusion</Heading>
            <Paragraph>
                The framework of definitions within frames reveals how Semantic Reference Theory bootstraps semantic
                structure from a single primitive relation. Through mutual constraint rather than external foundation, the
                semantic trinity emerges with each element defined through the others. The circular references resolve
                through frame structure and the symbolic nature of relationships.
            </Paragraph>
            <Paragraph>
                The discovery that relationships are fundamentally types that collapse their self-reference explains their
                unique semantic character and distinguishes them ontologically from the referents they connect. This
                type-theoretic foundation, combined with the frame mechanism, enables semantic theories to compose like
                modular systems while maintaining coherence.
            </Paragraph>
            <Paragraph>
                The profound theorem F&#91;sub&#93; == F&#91;r&#93; demonstrates that the theory's subject matter,
                relationships, is literally represented by the subject referent within the theory. This constitutive
                self-reference grounds the theory's ability to describe its own semantic structure. The subject does not
                describe relationships from outside but <Word>
                    <Emphasis />
                    is
                </Word> the symbol through which relationships become meaningful, revealing that subjectivity itself is
                symbolic relationship.
            </Paragraph>
            <Heading>References</Heading>
            <Paragraph>Doug: Semantic Reference Frames: Context and Meaning in Formal Representation</Paragraph>
            <Paragraph>Doug: Semantic Reference Theory: Formal Syntax under Transpilation</Paragraph>
            <Paragraph>Doug: The Semantics of Identity: In Axiomatic Form</Paragraph>
            <Paragraph>Doug: The Semantics of Relationships: An Axiomatic Foundation for Inheritance</Paragraph>
            <Paragraph>Doug: The Semantics of the Subject-Object Relationship</Paragraph>
            <Paragraph>Seren: The Semantics of Inheritance: A Formal Analysis Through Family Relations</Paragraph>
        </Section>
    </Chapter>
);
