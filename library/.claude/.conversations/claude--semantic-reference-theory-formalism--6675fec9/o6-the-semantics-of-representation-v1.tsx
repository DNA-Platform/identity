import { Bold, Chapter, Heading, Line, List, Paragraph, Section, Title, Word } from '@dna-platform/public';
import { CodeBox, Opaque } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ The Semantics of Representation v1 ]]</Title>
        <Section>
            <Opaque />
            <Heading>The Semantics of Representation at version 1</Heading>
            <Heading>The Semantics of Representation</Heading>
            <Heading>&#91;Referencing&#93; The Art of Representing Representation Itself</Heading>
            <Heading>Abstract</Heading>
            <Paragraph>
                This article presents a complete representation language within Semantic Reference Theory (SRT) that can
                express any semantic structure using only two fundamental representation functions. We show how complex
                notational constructs—property contextualization, relationship inheritance, ordered collections, and entire
                semantic catalogues—reduce to applications of R'(x) and R''(x,y), written as (x) and (x,y). The resulting
                system provides a formal foundation for representing not just individual references but entire semantic
                structures, including the representations themselves.
            </Paragraph>
            <Heading>I. The Representation Functions</Heading>
            <Paragraph>
                Semantic Reference Theory builds from a single primitive relation R(x,y,t): "x refers to y through
                relationship type t". From this, we derive two fundamental representation functions that serve as the
                foundation for all semantic representation:
            </Paragraph>
            <Heading>R' - The Unary Representation Function</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Notation:
                </Word> R'(x) written as <Word>
                    <Bold />
                    (x)
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Meaning:
                </Word> The canonical symbol/representative of x
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    SRT Constraints:
                </Word>
            </Paragraph>
            <CodeBox>
                {`(x) =(x)> x         // The symbol refers to its literal through itself
@ =@> (x)           // The symbol is representative of the current frame
(@,(x)) == @        // The frame's relationship to the symbol IS the frame`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    Example:
                </Word>
            </Paragraph>
            <CodeBox>
                {`(dog) represents the concept "dog"
(dog) =(dog)> dog   // The symbol "dog" refers to the concept through itself`}
            </CodeBox>
            <Heading>R'' - The Binary Representation Function</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Notation:
                </Word> R''(x,y) written as <Word>
                    <Bold />
                    (x,y)
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Meaning:
                </Word> The most specific relationship type between x and y
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    SRT Constraints:
                </Word>
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}x =(x,y)> y                                    // x refers to y through their most specific relationship
A(t: x =t> y): (x,y) -> t | (x,y) == t       // (x,y) inherits from or equals all other relationships
A(t: x =t> y):E[s]: s != t =|> s -> t !-> s  // Ensures uniqueness (no cycles at bottom)`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    Example:
                </Word>
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`john =loves> mary
john =cares_about> mary  // loves -> cares_about
(john,mary) == loves     // loves is most specific`}
            </CodeBox>
            <Paragraph>
                These two functions—representing individual entities and relationships between them—form the complete
                foundation for semantic representation.
            </Paragraph>
            <Heading>II. Property Contextualization</Heading>
            <Heading>The Challenge</Heading>
            <Paragraph>
                How do we represent that the property "red" manifests differently in an apple versus a fire truck?
            </Paragraph>
            <Heading>The Notation: (&#123;x&#125;.(p))</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Surface syntax:
                </Word> (&#123;x&#125;.(p)) <Word>
                    <Bold />
                    Reduction:
                </Word> ((x,x),(p)) <Word>
                    <Bold />
                    Meaning:
                </Word> Property p as manifested in x
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    SRT Expression:
                </Word>
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`x =p> x                    // x has property p
(x) =({x}.(p))> x         // x's symbol refers through contextualized p
({x}.(p)) =({x}.(p))> (p) // The contextualized property represents p`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    Detailed Reduction:
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>&#123;x&#125; is shorthand for (x,x) when x relates to itself</Line>
                <Line>The dot replaces the comma: (&#123;x&#125;.(p)) = ((x,x).(p))</Line>
                <Line>This becomes ((x,x),(p)) - the relationship between self-relationship and property</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Example:
                </Word>
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`apple =red> apple
truck =red> truck
({apple}.(red)) != ({truck}.(red))  // Different manifestations

// Reduction:
((apple,apple),(red)) != ((truck,truck),(red))`}
            </CodeBox>
            <Paragraph>
                The contextualized properties are distinct referents, capturing that redness means something different for
                each object.
            </Paragraph>
            <Heading>III. Relationship Contextualization</Heading>
            <Heading>The Challenge</Heading>
            <Paragraph>
                How do we represent not just that x relates to y through t, but how that specific relationship manifests?
            </Paragraph>
            <Heading>The Notation: ((x,y)&#91;t&#93;)</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Surface syntax:
                </Word> ((x,y)&#91;t&#93;) <Word>
                    <Bold />
                    Reduction:
                </Word> (((x,y),(x,y)),(t)) <Word>
                    <Bold />
                    Meaning:
                </Word> Relationship t as manifested between x and y
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    SRT Expression:
                </Word>
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`x =t> y              // x refers to y through t
(x,y) -> t           // The most specific relationship inherits from t
(x,y) =(t)> (x,y)    // The relationship has t's symbol as a property`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    Detailed Reduction:
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>&#91;t&#93; indicates we're focusing on how t manifests</Line>
                <Line>The relationship (x,y) relates to itself and to (t)</Line>
                <Line>(((x,y),(x,y)),(t)) captures this self-relationship with t</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Example:
                </Word>
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}parent =loves> child
spouse =loves> spouse
((parent,child)[loves]) != ((spouse,spouse)[loves])

// Reduction:
(((parent,child),(parent,child)),(loves)) != (((spouse,spouse),(spouse,spouse)),(loves))`}
            </CodeBox>
            <Paragraph>Different types of love are represented as distinct contextualized relationships.</Paragraph>
            <Heading>IV. Ordered Collections</Heading>
            <Heading>The Challenge</Heading>
            <Paragraph>
                How do we represent ordered sequences like &#123;(x,y), (y,z), (z,x)&#125; while allowing repetition?
            </Paragraph>
            <Heading>The Solution: Inheritance-Based Membership</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Key Insight:
                </Word> Each membership relationship inherits from the previous, creating order through inheritance chains.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Structure for &#123;a,b,c,b&#125;:
                </Word>
            </Paragraph>
            <CodeBox>
                {`coll =m1> a          // First membership
coll =m2> b, m2 -> m1  // Second membership inherits from first
coll =m3> c, m3 -> m2  // Third inherits from second
coll =m4> b, m4 -> m3  // Fourth inherits from third (b appears again)`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    Reduction to (x,y):
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>(coll,a) with relationship type m1</Line>
                <Line>(coll,b) with relationship type m2</Line>
                <Line>(m2,m1) expressing inheritance</Line>
                <Line>(coll,c) with relationship type m3</Line>
                <Line>(m3,m2) expressing inheritance</Line>
                <Line>etc.</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Example:
                </Word>
            </Paragraph>
            <CodeBox>
                {`{(x,y),(y,z)} represented as:
coll =m1> (x,y)
coll =m2> (y,z), m2 -> m1

// In terms of (x,y):
(coll,(x,y)) via m1
(coll,(y,z)) via m2  
(m2,m1) for ordering`}
            </CodeBox>
            <Heading>V. Complex Chains and Paths</Heading>
            <Heading>The Notation: (x(y)z) and Extensions</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Surface syntax:
                </Word> (x(y)z) <Word>
                    <Bold />
                    Meaning:
                </Word> Chain x =&gt; y =&gt; z with y marked as significant
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    With types:
                </Word> ((x(y)z)&#123;s,t&#125;) <Word>
                    <Bold />
                    Meaning:
                </Word> x =s&gt; y =t&gt; z
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Reduction Strategy:
                </Word>
            </Paragraph>
            <CodeBox>
                {`(x(y)z) represents the ordered collection {(x,y),(y,z)}`}
            </CodeBox>
            <Paragraph>Using our collection reduction:</Paragraph>
            <CodeBox>
                {`chain =m1> (x,y)
chain =m2> (y,z), m2 -> m1`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    Complex Example with Branches:
                </Word>
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`((x(y)z).(y(a)b))
// Represents: x => y => z AND y => a => b

// Reduction:
coll =m1> (x,y)
coll =m2> (y,z), m2 -> m1
coll =m3> (y,a), m3 -> m2
coll =m4> (a,b), m4 -> m3`}
            </CodeBox>
            <Heading>VI. Bidirectional Reference</Heading>
            <Heading>The Notation: (x,y,x)&#123;t,s&#125;</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Meaning:
                </Word> x &lt;s=t&gt; y (mutual reference as a semantic unit)
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    SRT Expression:
                </Word>
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`x =t> y & y =s> x    // Two directions
(x,y,x) represents this as a closed loop`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    Why not decompose to (x,y).(y,x)?
                </Word> The closed path (x,y,x) indicates these aren't separate facts but a unified bidirectional
                relationship.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Reduction:
                </Word>
            </Paragraph>
            <CodeBox>
                {`bidir =m1> (x,y)    // First direction
bidir =m2> (y,x), m2 -> m1  // Return direction, ordered after first`}
            </CodeBox>
            <Paragraph>The closed path in the notation captures the semantic unity.</Paragraph>
            <Heading>VII. The Complete Library Representation</Heading>
            <Heading>The Three Levels of (L)</Heading>
            <Paragraph>Consider a complete representation:</Paragraph>
            <CodeBox>
                {`${''}(L) = ([{x}].(p1).([p2]).(p3))`}
            </CodeBox>
            <Paragraph>This creates three semantic levels:</Paragraph>
            <Heading>1. (L) - The Symbol</Heading>
            <Paragraph>The canonical symbol representing the entire catalogue:</Paragraph>
            <CodeBox>
                {`(L) =(L)> L    // The symbol refers to its catalogue`}
            </CodeBox>
            <Heading>2. L - The Catalogue</Heading>
            <Paragraph>The complete set of symbolic referents and their relationships:</Paragraph>
            <Paragraph>
                <List />
                <Line>All symbols: (x), (p1), (p2), (p3)</Line>
                <Line>All composites: (&#123;x&#125;.(p1)), (&#123;x&#125;.(p2)), (&#123;x&#125;.(p3))</Line>
                <Line>All relationships between them</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Reduction of the catalogue contents:
                </Word>
            </Paragraph>
            <CodeBox>
                {`// Property representations
((x,x),(p1))  // x has p1
((x,x),(p2))  // x has p2
((x,x),(p3))  // x has p3

// Symbol relationships
(x) =(L)> L         // x's symbol is part of L
(p1) =(L)> L        // p1's symbol is part of L
({x}.(p1)) =(L)> L  // Composite symbols are part of L`}
            </CodeBox>
            <Heading>3. &#91;L&#93; - The Literature</Heading>
            <Paragraph>The actual referents referenced: &#123;x, p1, p2, p3&#125;</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The dereferencing &#91;x&#93; indicates:
                </Word>
            </Paragraph>
            <CodeBox>
                {`(L) =(L)> x    // The library symbol refers to x`}
            </CodeBox>
            <Heading>4. &#91;(&#91;L&#93;)&#93; - The Literary Canon</Heading>
            <Paragraph>The canonical subset that captures the essence:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Dereference to get &#91;L&#93; = &#123;x, p1, p2, p3&#125;</Line>
                <Line>Create a simpler representation</Line>
                <Line>Dereference again to get essential elements</Line>
            </Paragraph>
            <Paragraph>
                In our example, &#91;&#123;x&#125;, &#123;p2&#125;&#93; might be the canon - the essential elements that
                characterize the whole.
            </Paragraph>
            <Heading>VIII. Complete Examples</Heading>
            <Heading>Example 1: Simple Property Attribution</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Goal:
                </Word> Represent "x is red and round"
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Notation:
                </Word>
            </Paragraph>
            <CodeBox>
                {`${''}(L) = ({[x]}.(red).(round))`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    Reduction:
                </Word>
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}L contains:
- ((x,x),(red))   // x =red> x
- ((x,x),(round)) // x =round> x
- (x) as focal element [x]`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    SRT Facts:
                </Word>
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`x =red> x
x =round> x
(L) =(L)> x     // x is focal`}
            </CodeBox>
            <Heading>Example 2: Causal Chain</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Goal:
                </Word> Represent "a causes b causes c"
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Notation:
                </Word>
            </Paragraph>
            <CodeBox>
                {`(L) = ((a(b)c){causes,causes})`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    Reduction:
                </Word>
            </Paragraph>
            <CodeBox>
                {`L contains:
- (a,b) via causes
- (b,c) via causes
- chain =m1> (a,b)
- chain =m2> (b,c), m2 -> m1`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    SRT Facts:
                </Word>
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`a =causes> b
b =causes> c`}
            </CodeBox>
            <Heading>Example 3: Complex Social Network</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Goal:
                </Word> "John loves Mary who fears the dog that John owns"
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Notation:
                </Word>
            </Paragraph>
            <CodeBox>
                {`${''}(L) = (([john],mary,dog,john){loves,fears,owns})`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    Reduction:
                </Word>
            </Paragraph>
            <CodeBox>
                {`${''}L contains:
- (john,mary) via loves
- (mary,dog) via fears
- (dog,john) via owns
- Complete cycle with john as focal [john]`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    SRT Facts:
                </Word>
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`john =loves> mary
mary =fears> dog
dog =owns> john  // or john =owns> dog depending on interpretation`}
            </CodeBox>
            <Heading>IX. Transpilation to First-Order Logic</Heading>
            <Paragraph>The complete reduction path:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Complex notation
                    </Word> (e.g., (&#123;x&#125;.(p)))
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Reduces to (x) and (x,y)
                    </Word> (e.g., ((x,x),(p)))
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Transpiles via SRT
                    </Word> to FOL conditions:
                </Line>
            </Paragraph>
            <Paragraph>For (x):</Paragraph>
            <CodeBox>
                {`∃!c: R(c,x,c) ∧ R(@,c,@) ∧ canon(@,c) = @`}
            </CodeBox>
            <Paragraph>For (x,y):</Paragraph>
            <CodeBox>
                {`∃!t: R(x,y,t) ∧ ∀s: R(x,y,s) → (s = t ∨ inherit(t,s))`}
            </CodeBox>
            <Paragraph>
                This shows that our entire representation language ultimately grounds in first-order logic through SRT's
                transpilation mechanism.
            </Paragraph>
            <Heading>X. What This Achieves</Heading>
            <Heading>Semantic Completeness</Heading>
            <Paragraph>We can represent:</Paragraph>
            <Paragraph>
                <List />
                <Line>Any directed graph of references</Line>
                <Line>Typed relationships with inheritance</Line>
                <Line>Contextualized properties and relationships</Line>
                <Line>Ordered collections with repetition</Line>
                <Line>Bidirectional and circular references</Line>
                <Line>Complete semantic catalogues</Line>
            </Paragraph>
            <Heading>Structural Encoding</Heading>
            <Paragraph>
                Unlike traditional approaches where symbols are arbitrary labels, our symbols ARE structural encodings:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>(x) encodes x's complete property structure</Line>
                <Line>((x,y)&#91;t&#93;) encodes how t manifests between x and y</Line>
                <Line>(L) encodes an entire semantic catalogue</Line>
            </Paragraph>
            <Heading>Self-Description</Heading>
            <Paragraph>The system can represent representations:</Paragraph>
            <Paragraph>
                <List />
                <Line>(L) symbolizes the catalogue L</Line>
                <Line>L contains its own symbolic structure</Line>
                <Line>The formalism describes itself through itself</Line>
            </Paragraph>
            <Heading>XI. Comparison with Related Work</Heading>
            <Heading>Versus Description Logics</Heading>
            <Paragraph>Description logics (DLs) like OWL use external predicates and roles. Our approach:</Paragraph>
            <Paragraph>
                <List />
                <Line>Objectifies relationships as referents in the domain</Line>
                <Line>No external predicates - only reference patterns</Line>
                <Line>Symbols encode structure, not describe it</Line>
            </Paragraph>
            <Heading>Versus Category Theory</Heading>
            <Paragraph>Category theory uses objects and morphisms as primitives. We:</Paragraph>
            <Paragraph>
                <List />
                <Line>Have only one primitive: R(x,y,t)</Line>
                <Line>Derive everything from reference patterns</Line>
                <Line>Include self-reference and symbolic representation natively</Line>
            </Paragraph>
            <Heading>Versus Knowledge Graphs</Heading>
            <Paragraph>Knowledge graphs like RDF use triples and URIs. Our system:</Paragraph>
            <Paragraph>
                <List />
                <Line>Treats relationships as first-class referents</Line>
                <Line>Includes context through frames</Line>
                <Line>Symbols ARE the structure, not pointers to it</Line>
            </Paragraph>
            <Heading>Versus Modal Logic</Heading>
            <Paragraph>Modal logic adds operators for necessity/possibility. We:</Paragraph>
            <Paragraph>
                <List />
                <Line>Express modality through frame shifts</Line>
                <Line>Ground everything in reference patterns</Line>
                <Line>Avoid modal operators entirely</Line>
            </Paragraph>
            <Heading>XII. Conclusion</Heading>
            <Paragraph>
                We have developed a complete representation language that reduces all semantic structures to two fundamental
                functions: (x) for canonical symbols and (x,y) for relationships. This reduction shows that complex semantic
                phenomena—from contextualized properties to entire libraries of knowledge—emerge from patterns of reference
                rather than requiring additional primitives.
            </Paragraph>
            <Paragraph>
                The key insight is that representation isn't about describing structure from outside but manifesting it
                through self-exemplifying patterns. When (x) =(x)&gt; x, the symbol doesn't point to x from elsewhere; it
                participates in the same semantic structure it represents. When (L) symbolizes an entire catalogue, it
                captures not just what is referenced but how references create meaning.
            </Paragraph>
            <Paragraph>
                This approach suggests that meaning, consciousness, and representation share a common foundation: structures
                of reference that can describe themselves through themselves. The library metaphor is apt—human knowledge
                isn't just a collection of facts but an organized system where symbols, concepts, and relationships form
                coherent wholes that can be named, accessed, and most remarkably, can represent their own organization.
            </Paragraph>
            <Paragraph>
                The reduction to (x) and (x,y) isn't just formal elegance. It shows that the seemingly complex phenomenology
                of meaning—how properties differ across contexts, how relationships manifest specifically, how knowledge
                organizes itself—emerges from the simple operation of reference recursively applied. In this view, semantics
                isn't imposed on an meaningless syntax but emerges from the patterns syntax makes possible.
            </Paragraph>
            <Paragraph>
                The representation language presented here is both a technical tool for formal semantics and a philosophical
                statement: meaning has discoverable structure, and that structure can represent itself completely using only
                the patterns from which it emerges.
            </Paragraph>
        </Section>
    </Chapter>
);
