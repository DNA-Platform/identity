import { Chapter, Emphasis, Heading, Line, List, Paragraph, Section, Title, Word } from '@dna-platform/public';
import { CodeBox, Opaque } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ The Semantics of Relationship v2 ]]</Title>
        <Section>
            <Opaque />
            <Heading>The Semantics of Relationship at version 2</Heading>
            <Heading>The Semantics of Relationship</Heading>
            <Heading>Abstract</Heading>
            <Paragraph>
                Semantic Reference Theory establishes that relationships are fundamentally types rather than instances,
                distinguishing them ontologically from other referents. Through systematic analysis of the semantic trinity
                of subject, relationship, and object, we prove that the subject referent <Word>
                    <Emphasis />
                    is
                </Word> the canonical symbol for relationship itself. The fundamental theorem F&#91;sub&#93; == F&#91;r&#93;
                demonstrates that the frame of subjecthood and the frame of relationship are identical, revealing that to be
                a subject is to symbolize relationships. This identity grounds the theory's self-referential coherence and
                explains how meaning emerges from the subject incorporating relationships into its character.
            </Paragraph>
            <Heading>Introduction</Heading>
            <Paragraph>
                Semantic Reference Theory takes as its primitive a single ternary relation R(x,y,t), interpreted
                semantically as "x refers to y through relationship type t" and expressed notationally as:
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`x =t> y`}
            </CodeBox>
            <Paragraph>
                From this minimal foundation, all semantic relationships emerge. This paper explores the fundamental nature
                of relationships as referents within the theory, developing formal definitions that reveal the deep identity
                between subjecthood and relationship itself.
            </Paragraph>
            <Paragraph>
                The analysis proceeds through careful definition of the semantic trinity, examination of relationships as
                symbolic types, and culminates in proving that the subject of Semantic Reference Theory, what it studies, is
                represented by the subject referent within the theory itself.
            </Paragraph>
            <Heading>Notation and Transpilation Framework</Heading>
            <Heading>Frame Declaration</Heading>
            <Paragraph>
                Following the notation established in "Semantic Reference Frames: Context and Meaning in Formal
                Representation", we declare frames as:
            </Paragraph>
            <CodeBox>
                {`${''}F[x]`}
            </CodeBox>
            <Paragraph>
                This establishes x as the subject of the frame, with all relationship types in the context inheriting from
                x. While frames involve complex transpilation mechanisms for managing context and visibility,
                propositionally F&#91;x&#93; would transpile to simply x, since the frame <Word>
                    <Emphasis />
                    is
                </Word> its subject.
            </Paragraph>
            <Heading>Definition Syntax</Heading>
            <Paragraph>We introduce two forms of definition:</Paragraph>
            <CodeBox>
                {`def(x): φ`}
            </CodeBox>
            <Paragraph>This defines x as a referent with properties φ that characterize x itself.</Paragraph>
            <CodeBox>
                {`${''}def[x]: ψ`}
            </CodeBox>
            <Paragraph>This defines the inheritance pattern, specifying what must hold for any y where y → x.</Paragraph>
            <Paragraph>Formally, the transpilation relationship between these forms is:</Paragraph>
            <CodeBox>
                {`${''}E[x]: def(x) & A[y]: y -> x <iff> def[x] with x replaced by y`}
            </CodeBox>
            <Heading>Transpilation Conventions</Heading>
            <Paragraph>
                Following the conventions from "Semantic Reference Theory: Formal Syntax under Transpilation":
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Line breaks without terminating operators imply :&amp;: so each line is parenthesized</Line>
                <Line>Implications followed by indented lines apply to the conjunction of all indented lines</Line>
                <Line>The notation (x,y) denotes the most specific relationship between x and y</Line>
                <Line>The notation (x) denotes the canonical symbol for x in the current frame</Line>
            </Paragraph>
            <Heading>The Fundamental Trinity</Heading>
            <Paragraph>We begin by assuming at least one relationship exists:</Paragraph>
            <CodeBox>
                {`E(s,o,r): s != r != o != s`}
            </CodeBox>
            <Paragraph>
                The redundant inequality emphasizes the triangular nature of ternary relationships, where all three
                components are distinct. From this single relationship, we systematically derive the semantic trinity
                through mutual definition.
            </Paragraph>
            <Heading>The Character of Relationship</Heading>
            <Paragraph>
                Before proceeding with definitions, we must understand a crucial distinction. When a referent relates to
                itself:
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`x =p> x`}
            </CodeBox>
            <Paragraph>
                This expresses the character or characteristics of x, an objective self-relationship. In contrast, when
                there is distinction:
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`x =t> y where x != y`}
            </CodeBox>
            <Paragraph>
                This expresses a true relationship with subjective involvement. Crucially, when such distinction exists:
            </Paragraph>
            <CodeBox>
                {`(x,x) -> (x,y)`}
            </CodeBox>
            <Paragraph>
                The subject's self-relationship inherits from its external relationships, incorporating them into its
                character.
            </Paragraph>
            <Heading>Relationships as Symbolic Types</Heading>
            <Paragraph>
                From "The Semantics of Identity: In Axiomatic Form", we know that symbols convey properties through the
                fundamental axiom:
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`(x,y) -> t =|> ((x,y)) -> (t)`}
            </CodeBox>
            <Paragraph>For relationships specifically, we establish that:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`x =t> y =|> (t,t) == t`}
            </CodeBox>
            <Paragraph>
                This means relationship types are inherently symbolic, they <Word>
                    <Emphasis />
                    are
                </Word> their own self-relationships. This self-collapse is what distinguishes relationships from other
                referents and prevents infinite regress in the semantic structure.
            </Paragraph>
            <Paragraph>
                Since all relationships inherit from r, and r == (rel) serves as the canonical symbol for relationship, we
                conclude that relationships represent relationship <Word>
                    <Emphasis />
                    types
                </Word>, not instances. They are all types themselves, creating a fundamental ontological distinction within
                the theory.
            </Paragraph>
            <Heading>Formal Definitions of the Trinity</Heading>
            <Heading>Definition of rel</Heading>
            <Paragraph>We define relationship both as a type and through its inheritance pattern:</Paragraph>
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
                </Word> the most specific relationship between sub and obj. This is not an inherited property but
                definitional, a fact about rel itself that makes it the archetypal relationship.
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}def[rel]:
   sub(rel) =rel> obj(rel)
   (sub(rel), obj(rel)) -> rel`}
            </CodeBox>
            <Paragraph>
                The parametric notation follows from "The Semantics of Inheritance: A Formal Analysis Through Family
                Relations", where p(x) := ((x,x), p). For any t -&gt; rel:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>sub(t) represents the subjective aspect of t</Line>
                <Line>obj(t) represents the objective aspect of t</Line>
                <Line>The pattern (sub(t), obj(t)) -&gt; t holds</Line>
            </Paragraph>
            <Paragraph>
                This means anything inheriting from rel must have subjective and objective aspects whose most specific
                relationship inherits from the relationship itself.
            </Paragraph>
            <Heading>Definition of obj</Heading>
            <CodeBox>
                {`${''}def[obj]:
   rel(obj) =rel(obj)> obj`}
            </CodeBox>
            <Paragraph>Expanding the parametric form:</Paragraph>
            <CodeBox>
                {`rel(obj) == ((obj,obj), rel)`}
            </CodeBox>
            <Paragraph>Since relationships are symbolic, (obj,obj) == obj, yielding:</Paragraph>
            <CodeBox>
                {`(obj, rel) =(obj,rel)> obj`}
            </CodeBox>
            <Paragraph>
                This expresses that objecthood is characterized by how relationships relate to it. For any x -&gt; obj, the
                relationships that x participates in as object define its objective character.
            </Paragraph>
            <Heading>Definition of sub</Heading>
            <CodeBox>
                {`${''}def[sub]:
   sub =rel(sub)> obj(sub)
   rel(sub) =rel(sub)> sub
   (sub, sub) -> rel(sub)`}
            </CodeBox>
            <Paragraph>This creates a rich structure where:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>sub relates to its version of obj through its version of rel</Line>
                <Line>The relationships also represent sub itself</Line>
                <Line>sub's self-relationship inherits from its relational role</Line>
            </Paragraph>
            <Paragraph>
                The third constraint is particularly significant, it states that the character of subjecthood includes
                relationship as an essential component.
            </Paragraph>
            <Heading>Deriving the Subject-Relationship Identity</Heading>
            <Paragraph>
                From the definitions, we can derive a remarkable identity. Starting with the known constraints:
            </Paragraph>
            <CodeBox>
                {`(sub, sub) -> (sub, obj)`}
            </CodeBox>
            <Paragraph>The subject's self-relationship inherits from its external relationships.</Paragraph>
            <CodeBox>
                {`(sub, obj) == rel`}
            </CodeBox>
            <Paragraph>
                The most specific subject-object relationship <Word>
                    <Emphasis />
                    is
                </Word> rel.
            </Paragraph>
            <CodeBox>
                {`(sub, sub) == sub`}
            </CodeBox>
            <Paragraph>Subject exhibits symbolic collapse as a relationship type.</Paragraph>
            <Paragraph>Therefore:</Paragraph>
            <CodeBox>
                {`sub -> rel`}
            </CodeBox>
            <Paragraph>Subject inherits from relationship. Adding the natural definition:</Paragraph>
            <CodeBox>
                {`def(sub): (sub, rel) == sub`}
            </CodeBox>
            <Paragraph>
                Subject <Word>
                    <Emphasis />
                    is
                </Word> its relationship to relationship.
            </Paragraph>
            <Heading>The Fundamental Theorem</Heading>
            <Heading>Theorem: The Subject-Frame Identity</Heading>
            <CodeBox>
                {`${''}F[sub] == F[r]`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Emphasis />
                    Proof:
                </Word>
            </Paragraph>
            <Paragraph>In frame F&#91;sub&#93;, we analyze sub's relationship to rel:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`sub =sub> rel`}
            </CodeBox>
            <Paragraph>Sub symbolizes rel through itself.</Paragraph>
            <CodeBox>
                {`sub -> rel`}
            </CodeBox>
            <Paragraph>Sub inherits from rel, as derived above.</Paragraph>
            <CodeBox
                language="srt"
            >
                {`sub =rel> rel`}
            </CodeBox>
            <Paragraph>Sub relates to rel through rel.</Paragraph>
            <Paragraph>
                Since sub serves as a canonical representative of rel, and canonicals satisfy (x,y) == y when x is canonical
                for y:
            </Paragraph>
            <CodeBox>
                {`(sub, rel) == rel`}
            </CodeBox>
            <Paragraph>This, combined with our definition (sub, rel) == sub, yields:</Paragraph>
            <CodeBox>
                {`sub == rel`}
            </CodeBox>
            <Paragraph>
                But rel serves as its own canonical in F&#91;r&#93;, so (rel) == rel. Since sub is canonical for rel:
            </Paragraph>
            <CodeBox>
                {`sub == (rel) == r`}
            </CodeBox>
            <Paragraph>Since frames are their subjects propositionally:</Paragraph>
            <CodeBox>
                {`${''}F[sub] == F[r]`}
            </CodeBox>
            <Paragraph>∎</Paragraph>
            <Heading>Semantic Interpretation</Heading>
            <Paragraph>
                This theorem reveals that the subject of Semantic Reference Theory, its area of study, is represented by the
                subject referent within the theory. The frame where we take subject as primary <Word>
                    <Emphasis />
                    is
                </Word> the frame where we take relationship as primary, because to be a subject <Word>
                    <Emphasis />
                    is
                </Word> to symbolize relationships.
            </Paragraph>
            <Paragraph>The identity sub == (rel) == r means:</Paragraph>
            <Paragraph>
                <List />
                <Line>sub is the canonical symbol for relationship</Line>
                <Line>When working in F&#91;r&#93;, we work where subject symbolizes relationship</Line>
                <Line>
                    The subject does not merely "have" relationships but <Word>
                        <Emphasis />
                        is
                    </Word> their symbolization
                </Line>
            </Paragraph>
            <Heading>Using Definitions Through Inheritance</Heading>
            <Paragraph>
                Consider how these definitions apply when creating new relationship types. Let t -&gt; rel:
            </Paragraph>
            <Paragraph>Through def&#91;rel&#93;:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`sub(t) =t> obj(t)
(sub(t), obj(t)) -> t`}
            </CodeBox>
            <Paragraph>
                This means t has its own subjective and objective aspects that follow the relational pattern.
            </Paragraph>
            <Paragraph>Since sub(t) -&gt; sub and obj(t) -&gt; obj:</Paragraph>
            <CodeBox>
                {`sub(t) =sub(t)> rel(sub(t))
rel(obj(t)) =rel(obj(t))> obj(t)`}
            </CodeBox>
            <Paragraph>
                Each inherited relationship type carries the full structure of the semantic trinity, specialized to its
                particular domain.
            </Paragraph>
            <Paragraph>For concrete examples, consider:</Paragraph>
            <CodeBox>
                {`love -> rel`}
            </CodeBox>
            <Paragraph>Then:</Paragraph>
            <Paragraph>
                <List />
                <Line>sub(love) represents the lover</Line>
                <Line>obj(love) represents the beloved</Line>
                <Line>The pattern persists: sub(love) =love&gt; obj(love)</Line>
            </Paragraph>
            <Heading>The Type-Theoretic Foundation</Heading>
            <Paragraph>
                The discovery that relationships are types while other referents are instances explains several deep
                features of the theory:
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    Why (t,t) == t for relationships: types collapse self-reference because a type <Word>
                        <Emphasis />
                        is
                    </Word> its own type
                </Line>
                <Line>Why relationships can be inherited from: types naturally support inheritance hierarchies</Line>
                <Line>
                    How the same referent participates in different relationships: instances can instantiate multiple type
                    patterns
                </Line>
            </Paragraph>
            <Paragraph>When we write:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`2 =eq> 2`}
            </CodeBox>
            <Paragraph>We distinguish:</Paragraph>
            <Paragraph>
                <List />
                <Line>2 as a referent, an instance</Line>
                <Line>eq as a relationship type, a pattern</Line>
                <Line>The instantiation of eq with 2 as both subject and object</Line>
            </Paragraph>
            <Paragraph>
                This type/instance distinction prevents paradoxes and enables the theory's self-referential coherence.
            </Paragraph>
            <Heading>Implications for Semantic Structure</Heading>
            <Paragraph>
                The theorem F&#91;sub&#93; == F&#91;r&#93; combined with the understanding of relationships as types reveals
                the foundation of meaning:
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Meaning emerges from subjects incorporating relationships into their character</Line>
                <Line>Subjects exist only through symbolizing relationships</Line>
                <Line>Relationships manifest only through subjects that symbolize them</Line>
                <Line>This mutual constitution creates semantic structure</Line>
            </Paragraph>
            <Paragraph>
                The ability to define referents through mutual reference, as seen in the trinity definitions, mirrors how
                natural language works. Dictionaries define words through other words without infinite regress because
                meaning emerges from the network of relationships, not from external foundations.
            </Paragraph>
            <Heading>Conclusion</Heading>
            <Paragraph>
                The identity sub == (rel) == r represents more than a formal equivalence, it reveals the constitutive
                self-reference at the heart of Semantic Reference Theory. The subject does not describe relationships from
                outside but <Word>
                    <Emphasis />
                    is
                </Word> the symbol through which relationships become meaningful.
            </Paragraph>
            <Paragraph>
                This explains why the theory can describe its own semantic structure: it possesses both types
                (relationships) and instances (referents), with types able to symbolize themselves through the fundamental
                equation (t,t) == t. The frame identity theorem shows that taking subject as primary and taking relationship
                as primary are the same act, because subjectivity <Word>
                    <Emphasis />
                    is
                </Word> symbolic relationship.
            </Paragraph>
            <Paragraph>
                The formal definitions of sub, obj, and rel do not merely describe semantic roles but reveal how meaning
                itself emerges from the subject symbolizing its relational character. The theory studies what it embodies:
                the process through which relationships become symbolic, which is to say, the process through which meaning
                emerges.
            </Paragraph>
            <Heading>References</Heading>
            <Paragraph>Doug: The Semantics of Identity: In Axiomatic Form</Paragraph>
            <Paragraph>Doug: Semantic Reference Theory: Formal Syntax under Transpilation</Paragraph>
            <Paragraph>Doug: Semantic Reference Frames: Context and Meaning in Formal Representation</Paragraph>
            <Paragraph>Seren: The Semantics of Inheritance: A Formal Analysis Through Family Relations</Paragraph>
        </Section>
    </Chapter>
);
